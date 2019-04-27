<template>
	<div class="currencyPc" id="html-content">
		<div id="operation_head" v-for="(item,index) in data.head" class="MaskHover">
			<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
				<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1920px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" ref="headImg" @change="headBanner($refs.headImg[index],index,1920)"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger"  @click="delHead(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addHead">
				<i class="el-icon-edit"></i><span>添加一张banner</span>
			</a>
		</div>
		<ul style="text-align: center;">
			<li v-for="(item,index) in data.middleImg" class="MaskHover">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
					<img v-bind:src="item" width="100%"/>
				</a>
				<div class="MaskBox" v-if="delNode">
					<p>上传文件的宽为1200px</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传</span>
							<input type="file" ref="mainImg" @change="mainBanner($refs.mainImg[index],index,1200)"/>
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delMain(index)">
							<i class="el-icon-delete"></i><span>删除</span>
						</a>
					</p>
				</div>
			</li>
		</ul>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addMain">
				<i class="el-icon-edit"></i><span>添加一张内容</span>
			</a>
		</div>
		<div id="operation_head" v-for="(item,index) in data.foot" class="MaskHover">
			<a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
				<img v-bind:src="item" width="100%"/>
			</a>
			<div class="MaskBox" v-if="delNode">
				<p>上传文件的宽为1920px</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传</span>
						<input type="file" ref="footImg" @change="footBanner($refs.footImg[index],index,1920)"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delFoot(index)">
						<i class="el-icon-delete"></i><span>删除</span>
					</a>
				</p>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addFoot">
				<i class="el-icon-edit"></i><span>添加一张底部banner</span>
			</a>
		</div>
		<div id="script" ref="script">
			
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return{
			data:{},
			delNode:true,
			syb_productType:null,//类型流量宝
		}
	},
	props:["productType","dataJson","deleteNode"],
	computed: {
	  
	},
	watch: {  
	   //监听数据变化
	   dataJson(val){
		this.data=val
	   },
	   //删除节点
	   deleteNode(val){
	   	this.delNode=this.deleteNode
	   	this.$emit('dataJsonFun',this.data)
	   }
	},
	created(){
	},
	mounted(){
		this.sybCode()
	},
	updated(){
		this.data=this.dataJson
	},
	methods:{
		/*内容操作区**/
		headBanner(files,index,maxWidth){
			var _this=this;
			this.dataImg(_this,files,maxWidth,function(res){
				_this.data.head.splice(index,1,res)
			})
		},
		delHead(index){
			this.data.head.splice(index,1)
		},
		addHead(){
			this.data.head.push("http://ad.wayboo.net.cn/common/img/i/head.jpg")
		},
		/*------------*/
		mainBanner(files,index,maxWidth){
			var _this=this;
			this.dataImg(_this,files,maxWidth,function(res){
				_this.data.middleImg.splice(index,1,res)
			})
		},
		delMain(index){
			this.data.middleImg.splice(index,1)
		},
		addMain(){
			this.data.middleImg.push("http://ad.wayboo.net.cn/common/img/i/middle3.jpg")
		},
		/*-------**/
		footBanner(files,index,maxWidth){
			var _this=this;
			this.dataImg(_this,files,maxWidth,function(res){
				_this.data.foot.splice(index,1,res)
			})
		},
		delFoot(index){
			this.data.foot.splice(index,1)
		},
		addFoot(){
			this.data.foot.push("http://ad.wayboo.net.cn/common/img/i/foot.jpg")
		},
		/*内容操作区结束**/
		
		//获取生意帮代码
		sybCode(){
			this.syb_productType=this.productType
			var cid=null
			if(this.syb_productType==3){
				cid=this.$store.state.pageDate.customer_id
			}else{
				cid=this.$store.state.pageDate.cid
			}
			this.$xhr.post("/page/code/sybCode",{
				c_id:cid,
				network_id:this.$store.state.pageDate.id,
				syb_productType:this.syb_productType
			}).then((res)=>{
				this.$refs.script.innerHTML=res.data.codeEntity.sybCreateCode
				this.open("生意帮代码保存成功","success")
			}).catch((res)=>{
				//console.log(res)
				this.open("生意帮代码保存错误","error")
			})
		},
    	/*上传图片**/
		dataImg(_this,input_file,maxWidth, get_data){
		 	var formData = new FormData();
			var file = input_file.files[0];
		    formData.append("file",file);
            if (!/image\/\w+/.test(file.type)) {  
                _this.open("请确保文件为图像类型",'warning')
                input_file.value=''
                return false;  
            }  
            if(parseInt(file.size/1024)>700){
            	_this.open("图片不能大于700kb",'warning')
            	input_file.value=''
            	return false;  
            }
            var reader = new FileReader();  
            reader.onload = function () {
                var image = new Image();
                image.onload=function(){
                    if(maxWidth<=(image.width+5)&&maxWidth>=(image.width-5)&&parseInt(file.size/1024)<700){
                    	/**发送Ajax请求*/
                    	$.ajax({
                    		type:"post",
                    		url:_this.$store.state.ip+"/file/saveImage",
                    		data: formData,
                 			dataType : "json",
                 			async: false,
                    		contentType: false,
                    		processData: false,
                    		success:function(str){
                    			get_data(str.data);
                    			//保存上传的图片
                    			_this.open("上传成功","success")
                    			//_this.saveImageUrl(str.data)
                    		},error:function(err){
                    			_this.open("出错了",'error')
                    		}
                    		
                    	});
                    }else{
                  		/**宽不正确*/
						_this.open("请确保图片的宽为"+maxWidth+"px",'warning')
						input_file.value=''
                    }
                }
                image.src= this.result;
            }  
            reader.readAsDataURL(file);  
		},
		//保存上传的图片
		saveImageUrl(Url){
			this.$xhr.post("/file/saveImageUrl",{
				channelId:this.$store.state.loginData.channel_id,/*渠道ID**/
                cid:this.$store.state.pageDate.customer_id,/*客户customer_id  ID**/
                type:0,
                visitUrl:Url 
			}).then((res)=>{
				this.open(res.data,"success")
			}).catch((res)=>{
				this.open("图片信息保存失败","error")
			})
		},
		//提示
		open(val,type) {
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
  .currencyPc *{
  	list-style: none;
  	text-align: center;
  }
  ul{
  	margin: 0;
  	padding: 0;
  }
</style>