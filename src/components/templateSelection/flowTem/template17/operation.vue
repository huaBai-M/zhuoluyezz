<template>
	<div>
		<div class="templataTopposition">
			<div class="container">
				<div class="row">
					<div class="col-md-6" >
						<p style="line-height: 35px;">
							请选择模板主题色:
							<span style="padding: 0 30px;"></span>
							<el-radio-group v-model="Ifcolor"  v-bind:disabled="disabled1">
									<el-radio label="#e9be1d">金色<span class="module13_color"></span></el-radio>
									<el-radio label="#37bd65">绿色<span class="module13_color"></span></el-radio>
								    <el-radio label="#5166ec">紫色<span class="module13_color"></span></el-radio>
								    <el-radio label="#f80f0f">红色<span class="module13_color"></span></el-radio>
							</el-radio-group>
						</p>
						
					</div>
					<div class="col-md-6 text-right" style="padding-right: 30px;">
						<el-button plain @click="Preservation" v-bind:disabled="disabled">保存</el-button>
						<el-button plain @click="signOut">退出模板</el-button>
						<el-button plain @click="obtainDate">重做</el-button>
						<el-button type="primary" v-if="Use" @click="useGo">立即使用</el-button>
						<el-button type="primary" v-if="!Use" v-bind:disabled="disabled" @click="submission">提交并发布</el-button>
					</div>
				</div>
			</div>
		</div>
		<!--模板-->
		<div id="modulehtml" ref="htmlBox" class="modulehtml">
			<custom17 :productType="productType" :Ifcolor="Ifcolor" :dataJson="dataJson" :deleteNode="deleteNode"  @dataJsonFun="dataJsonFun"></custom17>
		</div>
		<!--组件-->
		<flowlaunch @launchFun="launchFun" :launchShow="launchShow"></flowlaunch>
		<pagePrompt @promptFun="promptFun" :promptShow="promptShow"></pagePrompt>
	</div>
</template>

<script>
import flowlaunch from"@/components/sonComponents/flowlaunch"	
import pagePrompt from"@/components/sonComponents/pagePrompt"	
import custom17 from"@/components/templateSelection/allTemplate/custom17"	
export default {
	data () {
		return{
			modelId:17,//模板ID
			modelType:0,//模板类型 0pc 1移动 3镜像页面
			productType:3,//渠道类型
			pageId:null,//模板是否有保留数据
			launchName:null,//投放词名称
			launchShow:true,//投放词弹框
			promptShow:false,//提示弹框
			Use:true,//提交按钮
			deleteNode:true,//删除节点
			dataJson:null,//获取数据
			PreservationJson:null,//保存提交数据
			htmlNode:null,//页面元素
			editState:null,//保存状态
			disabled:false,
			Ifcolor: '#e9be1d',
			disabled1:false,
		}
	},
	computed: {
	  
	},
	components:{
    	flowlaunch,
    	pagePrompt,
    	custom17
  	},
	watch: {  
	   
	},
	created(){
		if(this.$store.state.loginData.channel_id==undefined){
			this.$router.push({path: '/', name: 'home',})
			return false
		}
		this.pageId=this.$store.state.pageId
		console.log(this.$router.currentRoute.params.id)
		this.modelType=this.$store.state.moduleType;
		console.log(this.$store.state.moduleType)
		console.log(this.pageId);
	},
	mounted(){
		this.obtainDate()
	},
	methods:{
		//获取数据
		obtainDate(){
			this.$xhr.get("/page/findPageEditParams",{
				params:{
					pageId:this.$router.currentRoute.params.id,
	    			modelId:this.modelId,
				}
			}).then((res)=>{
				this.dataJson=res.data.paramPC
				console.log("*************************")
				console.log(this.dataJson)
				this.Ifcolor=this.dataJson.color
			}).catch((res)=>{
				console.log(res)
			})
		},
		//立即使用
		useGo(){
			this.Use=false//提交切换
			this.promptShow=true//显示提示
			this.deleteNode=false//删除节点
			this.disabled1=true;
		},
		//提交
		submission(){
			this.deleteNode=false
			this.disabled=true;
			this.disabled1=true;
			this.$nextTick(function () {
				//dom更新后执行
				this.editState=0;
				this.$yhr.post("/page/checkLlkState",{
	                pageId:this.pageId,//页面修改状态  重做  修改
				}).then((res)=>{
					if(!res.data){
						this.openWaring('页面状态已经改变不能提交','warning')
					}else{
						this.PreservationAjax()
					}
				}).catch((res)=>{
					this.openWaring('页面状态已经改变不能提交','warning')
				})
				
      		})
		},
		//保存
		Preservation(){
			this.deleteNode=false
			this.disabled=true
			this.$nextTick(function () {
				//dom更新后执行
				this.editState=-1;
				this.$yhr.post("/page/checkLlkState",{
	                pageId:this.pageId,//页面修改状态  重做  修改
				}).then((res)=>{
					if(!res.data){
						this.openWaring('页面状态已经改变不能提交','warning')
					}else{
						this.PreservationAjax()
					}
				}).catch((res)=>{
					this.openWaring('页面状态已经改变不能提交','warning')
				})
      		})
		},
		//退出模板
		signOut(){
			this.$router.push({
	            path: '/home/flowpageSel', 
	            name: 'flowpageSel',
	        })
		},
		//提交或保存Ajax
		PreservationAjax(){
			this.$xhr.post("/page/createHtmlPage",{
				channelId:this.$store.state.pageDate.channel_id ,/*渠道ID**/
                clientId:this.$store.state.pageDate.customer_id ,/*客户customer_id  ID**/
                orderId:this.$store.state.pageDate.id,/*流量卡ID**/
                authorId:this.$store.state.loginData.id,//员工ID	
                clientName:this.$store.state.pageDate.customer_name,/*客户名称**/
                pageId:this.pageId,//页面修改状态  重做  修改
                modelId:this.modelId ,/*模板id**/
                editState:this.editState,/*页面提交状态*/
                modelType:this.modelType,/*模板类型**/
                htmlCode:this.$refs.htmlBox.innerHTML,/*html代码**/
                editParam:JSON.stringify(this.dataJson),//json数据
                description:this.launchName,//投放词名称
			}).then((res)=>{
				console.log(res)
				this.open()
			}).catch((res)=>{
				if(res.status==500){
					this.openWaring('着陆页数量不能大于5个','warning')
					this.$router.push({
			            path: '/home', 
			            name: 'home',
			        })
				}
			})
		},
		//投放词弹出框
		launchFun(val){
			this.launchName=val.name
			this.launchShow=val.show
		},
		//提示弹出框
		promptFun(val){
			this.promptShow=val
		},
		//监听数据变动
		dataJsonFun(val){
			this.dataJson=val
		},
		//提示
      	open() {
	        this.$alert('请在流量宝<a href="#/home/flowMaintain">[维护]</a>中查看网址~', '发布成功', {
	          dangerouslyUseHTMLString: true,
	          confirmButtonText: '确定',
	          type: 'success',
	          showClose:false,
	          showCancelButton:false,
	          closeOnClickModal:false,
	          center: true
	        }).then(() => {
	         	this.$router.push({
		            path: '/home/flowMaintain', 
		            name: 'flowMaintain',
		        })
	        })
	    },
	    openWaring(val,type) {
	        this.$message({
	          duration:1000,
	          message:val,
	          type: type
	        });
	    },	    
	},
}	
</script>

<style>
.templataTopposition {
	width: 100%;
	padding-top: 5px;
	background: #fff;
	position: fixed;
	top: 60px;
	left: 1;
	text-align: left;
	margin-bottom: 50px;
	border-bottom: 1px solid #eee;
	z-index: 1000;
}
.modulelist{border-top: 1px solid #eee;padding: 5px 0;}
.modulehtml{padding-top: 60px !important;}
.pc_abt{
	font-size: 18px;
    color: #666;
    display: inline-block;
    padding: 10px 20px;
    font-weight: 600;
    border-bottom: 2px solid #27abfc;
    border: none;
}
.pc_activ{
	 border-bottom: 2px solid #27abfc;
	 color:#27abfc ;
}
.pc_activ:hover{
 border-bottom: 2px solid #27abfc;
	 color:#27abfc ;
}
.pc_activ:focus{
	 border-bottom: 2px solid #27abfc;
	 color:#27abfc ;
	 outline: none;
}

</style>