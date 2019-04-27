<template>
	<div>
		<div class="templataTopposition">
			<div class="container">
				<div class="row">
					<div class="col-md-6" >
						<p style="line-height: 35px;">通用模板</p>
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
			<custom1 :productType="productType" :dataJson="dataJson" :deleteNode="deleteNode"  @dataJsonFun="dataJsonFun"></custom1>
		</div>
		<!--组件-->
		<ztclaunch @launchFun="launchFun" :launchShow="launchShow"></ztclaunch>
		<pagePrompt @promptFun="promptFun" :promptShow="promptShow"></pagePrompt>
	</div>
</template>

<script>
import ztclaunch from"@/components/sonComponents/ztclaunch"	
import pagePrompt from"@/components/sonComponents/pagePrompt"	
import custom1 from"@/components/templateSelection/allTemplate/custom1"	
export default {
	data () {
		return{
			modelId:2,//模板ID
			modelType:0,//模板类型 0pc 1移动
			productType:1,//渠道类型
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
		}
	},
	computed: {
	  
	},
	components:{
    	ztclaunch,
    	pagePrompt,
    	custom1
  	},
	watch: {  
	   
	},
	created(){
		if(this.$store.state.loginData.channel_id==undefined){
			this.$router.push({path: '/', name: 'home',})
			return false
		}
//		console.log(this.$store.state)
		this.pageId=this.$store.state.pageId
	},
	mounted(){
		this.obtainDate()
	},
	methods:{
		//获取数据
		obtainDate(){
			this.$xhr.get("/ztcPage/findPageEditParams",{
				params:{
					pageId:this.$router.currentRoute.params.id,
	    			modelId:this.modelId,
				}
			}).then((res)=>{
				this.dataJson=res.data.paramPC
			}).catch((res)=>{
				console.log(res)
			})
		},
		//立即使用
		useGo(){
			this.Use=false//提交切换
			this.promptShow=true//显示提示
			this.deleteNode=false//删除节点
		},
		//提交
		submission(){
			this.deleteNode=false
			this.disabled=true
			this.$nextTick(function () {
				//dom更新后执行
				this.editState=0;
				this.$yhr.post("/ztcPage/checkZtcState",{
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
				this.$yhr.post("/ztcPage/checkZtcState",{
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
		signOut(){
			this.$router.push({
	            path: '/home/ztcpageSel', 
	            name: 'ztcpageSel',
	        })
		},
		//提交或保存Ajax
		PreservationAjax(){
			this.$xhr.post("/ztcPage/createHtmlPage",{
				channelId:this.$store.state.pageDate.channelId ,/*渠道ID**/
                clientId:this.$store.state.pageDate.cid ,/*客户customer_id  ID**/
                netWorkId:this.$store.state.pageDate.id,/*流量卡ID**/
                authorId:this.$store.state.loginData.id,//员工ID	
                clientName:this.$store.state.pageDate.customerName,/*客户名称**/
                pageId:this.pageId,//页面修改状态  重做  修改
                modelId:this.modelId ,/*模板id**/
                editState:this.editState,/*页面提交状态*/
                modelType:this.modelType,/*模板类型**/
                htmlCode:this.$refs.htmlBox.innerHTML,/*html代码**/
                editParam:JSON.stringify(this.dataJson),//json数据
                description:JSON.stringify(this.launchName),//投放词名称
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
	        this.$alert('请在流量宝<a href="#/home/ztcMaintain">[维护]</a>中查看网址~', '发布成功', {
	          dangerouslyUseHTMLString: true,
	          confirmButtonText: '确定',
	          type: 'success',
	          showClose:false,
	          showCancelButton:false,
	          closeOnClickModal:false,
	          center: true
	        }).then(() => {
	         	this.$router.push({
		              path: '/home/ztcMaintain', 
		            name: 'ztcMaintain',
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
#modulehtml{padding-top: 120px;}
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