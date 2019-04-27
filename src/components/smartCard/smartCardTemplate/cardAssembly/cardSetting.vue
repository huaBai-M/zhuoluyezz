<template>
	<div  class="cardEditmodule">
		<el-alert title="名片设置"  :closable="false" center></el-alert>
		<div id="cardSetting">
			<el-collapse v-model="activeNames">
				<el-collapse-item title="名片基本信息" name="1">
					<template slot="title">
						<i class="title_circle"></i>
				      	名片基本信息
				    </template>
				    <div class="cardEditmodule_conter">
				    	<div class="card_errorTxt">
				    		*上传LOGO大小110*30像素，大小不超1M，点击即可上传和修改
				    	</div>
				    	<el-upload
						  class="upload-demo"
						  ref="updataImg"
						  drag
						  :action="fileUrl"
						  :on-success="ImagesSuccess"
						  :on-error="ImagesError"
						  :on-remove="handleRemove"
						  :before-upload="handleImages"
						  :limit="1"
						  >
						  <!--<img v-if="$store.state.cardWebsite.companyLogo" v-bind:src="$store.state.cardWebsite.companyLogo" class="avatar">-->
					  		<i  class="el-icon-picture"></i>
					  		<div  class="el-upload__text">上传logo图拖到此处，或<em>点击上传</em></div>
						</el-upload>
						<div class="cardSettingForm">
							<div class="cardEditmodule_ProductForm">
					    		<p class="cardEditmodule_ProductFormTitle">姓名：</p>
					    		<div><el-input placeholder="填写客户联系人姓名，必填" v-model="$store.state.cardEmployee.name"></el-input></div>
					    	</div>
					    	<div class="cardEditmodule_ProductForm">
					    		<p class="cardEditmodule_ProductFormTitle">电话：</p>
					    		<div> <el-input placeholder="填写客户的联系方式，必填" v-model="$store.state.cardEmployee.telphone"></el-input></div>
					    	</div>
					    	<div class="cardEditmodule_ProductForm">
					    		<p class="cardEditmodule_ProductFormTitle">微信：</p>
					    		<div><el-input placeholder="填写客户联系人的微信，非必填" v-model="$store.state.cardEmployee.wechat"></el-input></div>
					    	</div>
					    	<div class="cardEditmodule_ProductForm">
					    		<p class="cardEditmodule_ProductFormTitle">邮箱：</p>
					    		<div><el-input placeholder="填写客户联系人的邮箱，非必填" v-model="$store.state.cardEmployee.email"></el-input></div>
					    	</div>
					    	<div class="cardEditmodule_ProductForm">
					    		<p class="cardEditmodule_ProductFormTitle">地址：</p>
					    		<div><el-input placeholder="填写客户的地址，非必填" v-model="$store.state.cardWebsite.companyLocation"></el-input></div>
					    	</div>
					    	<div class="cardEditmodule_ProductForm">
					    		<p class="cardEditmodule_ProductFormTitle">公司名称：</p>
					    		<div><el-input placeholder="填写客户公司名称" v-model="$store.cardData.customerName"></el-input></div>
					    	</div>
				    	</div>
				    </div>
			  	</el-collapse-item>
				<el-collapse-item title="企业简介" name="2">
					<template slot="title">
						<i class="title_circle"></i>
				      	企业简介
				    </template>
				    <div class="cardEditmodule_conter">
				    	<div tabindex="0" class="el-upload el-upload--text"  @click="dialogstart = true">
			    			<div class="el-upload-dragger">
			    				<i class="el-icon-picture"></i> 
			    				<div  class="el-upload__text">点击上传公司简介图</div>
			    			</div>
			    		</div>
			    		<div class="cardSetting_textarea">
					     	<el-input type="textarea"placeholder="0~50个字，简单的介绍下自己，会增加访客沟通的几率。（非必填）" v-model="$store.state.cardWebsite.description" ></el-input>
					    </div>
					    <div class="cardEditmodule_conterYU" v-show="$store.state.cardWebsite.displayImgs!=null">
			    			<img :src="$store.state.cardWebsite.displayImgs"/>
			    		</div>
				    </div>
				</el-collapse-item>
				<el-collapse-item title="推荐产品" name="3">
					<template slot="title">
						<i class="title_circle"></i>
				      	推荐产品
				    </template>
				     <div class="text-center cardEditmodule_conter">
				     	 <el-button @click="recommend" v-show="$store.state.productList.length>0">添加产品推荐</el-button>
				     	 <el-button v-show="$store.state.productList.length==0" :disabled="true">暂无产品推荐</el-button>
				     	 <br />
				     	 <br />
				     	 <br />
				     </div>
				</el-collapse-item>
			</el-collapse>
		</div>		
		<dialogcropper :dialogstart="dialogstart" :auto="auto" @cardialogval="cardialogval"></dialogcropper>
	</div>
</template>
<script>
import dialogcropper from"@/components/smartCard/smartCardTemplate/cardAssembly/dialogcropper"
  export default {
    data() {
      return {
      	fileUrl:this.baseURL+"/file/saveImage",
      	activeNames: ['1','2','3'],
      	dialogstart: false,
      	auto:{
      		autoCropWidth:300,
      		autoCropHeight:150,
      		autoName:"cardSetting"
      	},
      };
    },
    computed: {
	  
	},
	components:{
    	dialogcropper
  	},
	watch: {  
		
	},
	created(){
		
	},
	mounted(){
		this.findHotProductList()
	},
    methods:{
    	//获取公司简介图
    	cardialogval(val){
    		if(val.startT){
	    		this.$store.state.cardWebsite.displayImgs=val.val;
	    		this.$message.success('上传成功'); 
	    		this.dialogstart=val.start;
    		}else{
    			this.dialogstart=val.start;
    		}
    	},
    	recommend(){
    		this.$store.state.cardState.show=true
    	},
    	//上传公司logo
    	ImagesSuccess(res,fileList){
    		this.$store.state.cardWebsite.companyLogo=res.data;
    		this.$message.success('上传成功'); 
    		console.log(this.$store.state.cardWebsite.companyLogo)
	    },
	    ImagesError(res){
	    	this.$message.error('图片插入失败')
	    },
	    handleRemove(file, fileList){
	    	this.fileList=fileList
	    },
		handleImages:function(file){ 
            var _this = this; 
            return new Promise(function(resolve, reject) { 
                var reader = new FileReader(); 
                reader.onload = function(event) { 
                    var image = new Image(); 
                    image.onload = function () { 
                        var width = this.width; 
                        var height = this.height; 
                        if (width!==110&&height!==30){ 
                            _this.$message.warning('图片尺寸必须为110px高必须为30px!'); 
                            reject(); 
                        }else{
                        	resolve(); 
                        }
                    }; 
                    image.src = event.target.result; 
                } 
                reader.readAsDataURL(file); 
            }); 
        },
        //获取推荐产品
        findHotProductList(){
        	this.$xhr.get("/card/findHotProductList",{
				params:{
					companyId:this.$store.cardData.customerId,//公司id
				}
		  	}).then((res)=>{
		  		console.log("推荐产品")
		  		console.log(res);
//		  		this.$store.state.HotproductList=res.data
		  		
			}).catch((res)=>{
				console.log(res)
			})         	
        },
        //保存公司信息
        saveWebsite(){
        	
        }
    }
  };	
</script>

<style scoped>
#cardSetting{
	margin: 0px 10px;
}
.el-upload-dragger .el-icon-picture{
	font-size: 67px;
    color: #c0c4cc;
    margin: 40px 0 16px;
    line-height: 50px;
}
.cardSettingForm .cardEditmodule_ProductFormTitle{
	    padding:15px 0 5px;
}
.cardSetting_textarea{
	padding-top: 12px;
}
.cardEditmodule_conterYU{
	width: 100%;
	height: 100px;
	overflow: hidden;
	padding-top: 10px;
}
.cardEditmodule_conterYU img{
	height: 100%;
}
</style>