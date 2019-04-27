<template>
	<div class="cardEditmodule">
		<el-alert title="产品编辑"  :closable="false" center></el-alert>
		<div id="productSetting">
			<el-collapse v-model="activeNames">
				<!--轮播图-->
				<el-collapse-item title="轮播图" name="1">
					<template slot="title">
						<i class="title_circle"></i>
				      	轮播图
				    </template>
				    <div class="cardEditmodule_conter">
				    	<div class="card_errorTxt">
				    		上传图片（默认轮播图两张，想添加多张时，点击添加轮播图，点击图片更换轮播图）
				    	</div>
				    	
				    	<ul class="cardEditmodule_conterBanner">
				    		<li v-for="(item,index) in $store.state.cardEmployee.banner " class="proSetBanner">
				    			<img v-bind:src="item" width="100%"/>
				    			<div class="proSetBanner_delect" @click="dleBaner(index)">
				    				<i class="el-icon-delete"></i>
				    			</div>
				    		</li>
				    		<li @click="dialogstart = true" class="cardEditmodule_conterBannerUpdata ">
				    			<div tabindex="0" class="el-upload el-upload--text ">
					    			<div class="el-upload-dragger">
					    				<i class="el-icon-plus" style="font-size: 24px; margin-top: 11px;color: #d7d7d7;"></i>
					    			</div>
					    		</div>
				    		</li>
				    	</ul>
				    </div>
			  	</el-collapse-item>
			  	<!---->
			  	<el-collapse-item title="产品" name="2">
					<template slot="title">
						<i class="title_circle"></i>
				      	产品
				    </template>
				    <div class="cardEditmodule_conter">
				    		<el-upload
							  class="upload-demo"
							  drag
							  :action="fileUrl"
							  ref="procImg"
							  :on-success="ImagesSuccess"
							  :on-error="ImagesError"
							  :before-upload="handleImages"
							  >
							  <i  class="el-icon-picture"></i>
					  			<div  class="el-upload__text">点击上传产品图</div>
							</el-upload>
				    	<div class="card_errorTxt">
				    		上传产品图，图片尺寸750像素*422像素
				    	</div>
				    	<div class="cardEditmodule_ProductForm">
				    		<p class="cardEditmodule_ProductFormTitle">产品名称：</p>
				    		<div><el-input v-model.trim="saveProduct.productName"></el-input></div>
				    	</div>
				    	<div id="ckeditorConter" class="clearfix" style="height: 400px;">
					        <!-- 富文本图片上传组件辅助-->
					        <el-upload  style="line-height: 0;font-size: 0;" :action="fileUrl":show-file-list="false" :on-success="uploadSuccess"></el-upload>
					        <!--富文本编辑器组件-->
					        <p class="cardEditmodule_ProductFormTitle">产品详情:</p>
					        <quill-editor  v-model="detailContent"  ref="myQuillEditor"  :options="editorOption" >
					        </quill-editor>     
					    </div>
					    <div class="cardEditmodule_ProductFormAbt">
					    	<el-button type="primary" @click="saveProductfun">确定添加</el-button>
					    </div>
				    </div>
			  	</el-collapse-item>
			  	<!--已有产品-->
			  	<el-collapse-item title="已有产品" name="3">
					<template slot="title">
						<i class="title_circle"></i>
				      	已有产品
				    </template>
				    <div class="cardEditmodule_conter ">
				    	<ul class="card_allproductList clearfix">
				  			<li class="pull-left proSetBanner" v-for="(item,index) in $store.state.productList" style="width: 165px;">
				  				<div class="proSetBanner">
				  					<img v-bind:src="item.banner" width="100%"/>
				  				</div>
				  				<p>{{item.productName}}</p>
				  				<div class="proSetBanner_chanpdel">
				  					 <el-button type="primary" icon="el-icon-edit" circle @click="editPrc(item)"></el-button>
				  					 <el-button type="danger" icon="el-icon-delete" circle @click="delPrc(item)"></el-button>
				  				</div>
				  			</li>
				  		</ul>
				    </div>
			  	</el-collapse-item>
			</el-collapse>
		</div>
		<!--图片裁剪弹出框-->
		<dialogcropper :dialogstart="dialogstart" :auto="auto" @dialogval="dialogval"></dialogcropper>
	</div>
</template>

<script>
import dialogcropper from"@/components/smartCard/smartCardTemplate/cardAssembly/dialogcropper"
const toolbarOptions = [[ 'image']]   
  export default {
    data() {
      return {
      	dialogstart: false,
      	auto:{
      		autoCropWidth:300,
      		autoCropHeight:150,
      		autoName:"product"
      	},
      	activeNames: ['1','2','3'],
      	fileUrl:this.baseURL+"/file/saveImage",
      	fileList:[],
      	fileListImg:[],
      	//添加产品
      	saveProduct:{
			banner:"",//产品图片
			productName:"",//产品名称
			displayImgs:"",//详情页图片(JSON) 
			companyId:this.$store.cardData.customerId,//公司ID 
			orderId:this.$store.cardData.id,//订单ID 
			status:this.$store.cardData.status,//状态 0=正常 -1=删除 ,
			cloginId:this.$store.cardData.cloginId,//
			description:null,//产品描述
			price:null,//价格 
			isHot:null,//是否主营: 0=普通产品 1=主营产品(备用) ,
			type:null,//产品类型(备用),
			productID:null//产品id
      	},
      	saveProductlist:[],
      	detailContent: '', // 富文本内容
        editorOption: {
        	placeholder: '',
            theme: 'snow', 
             modules:{
             	toolbar: {
             		container: toolbarOptions,  // 工具栏
             		handlers: {
             			'image': function (value) {
             				if (value) {
                                document.querySelector('#ckeditorConter .el-upload__input').click()
                            }else {
                                this.quill.format('image', false);
                            }
             			}
             		}
             		
             	}
             }
        	
        } 
        // 富文本编辑器配置结束
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
		console.log(this.$store.cardData);
		console.log(this.$store.state.cardEmployee.banner)
		this.findProductList()
	},
    methods:{
    	//监听裁剪信息
    	dialogval(val){
    		
    		if(val.startT){
    			this.dialogstart=val.start;
    			this.$store.state.cardEmployee.banner.push(val.val)
    			this.$message.success('图片上传成功')
    		}else{
    			this.dialogstart=val.start;
    		}
    	},
		//图片上传失败
	    ImagesError(res){
	    	this.$message.warning('图片插入失败')
	    },
	    //产品图上传成功
	    ImagesSuccess(res,fileList){
	    	console.log(res);
	    	this.saveProduct.banner=res.data;
	    	this.$message.success('图片上传成功')
	    },
	    //删除banner
	    dleBaner(index){
    	       this.$store.state.cardEmployee.banner.splice(index,1)
	          this.$message({
	            type: 'success',
	            message: '删除成功!'
	          });
	    },
	    //产品图上传验证
		handleImages:function(file){ 
            var _this = this; 
            return new Promise(function(resolve, reject) { 
                var reader = new FileReader(); 
                reader.onload = function(event) { 
                    var image = new Image(); 
                    image.onload = function () { 
                        var width = this.width; 
                        var height = this.height; 
                        if(width==750&&height==422){
                        	resolve(); 
                        }else{
                        	_this.$message.warning('图片尺寸750像素*422像素')
                        	reject();
                        }
//						resolve(); 
                    }; 
                    image.src = event.target.result; 
                } 
                reader.readAsDataURL(file); 
            }); 
        },	    
    	// 富文本图片上传
        uploadSuccess(res, file) {
            let quill = this.$refs.myQuillEditor.quill;
            if(res.data!==null&&res.status==200){
            	let length = quill.getSelection().index;
                quill.insertEmbed(length, 'image', res.data)
                quill.setSelection(length + 1)
            }else{
            	 this.$message.warning('图片插入失败')
            }
        },

    	//添加产品接口
    	saveProductfun(){
    		let reg = JSON.stringify(this.detailContent).length;
    		if(this.saveProduct.banner==""||this.saveProduct.productName==""||reg==0){
    			this.$message.warning('内容不能为空')
    			return false
    		}
			this.$xhr.post("/card/saveProduct",{
				banner:this.saveProduct.banner,
				id:this.productID,
				productName:this.saveProduct.productName,
				companyId:this.saveProduct.companyId,
				description:this.saveProduct.description,
				displayImgs:this.detailContent,
				cloginId:this.saveProduct.cloginId,
				orderId:this.saveProduct.orderId,
				price:this.saveProduct.price, 
				status:this.saveProduct.status,
				isHot:this.saveProduct.isHot,
				type:this.saveProduct.type
		  	}).then((res)=>{
		  		console.log(res);
		  		this.saveProduct.banner="";
		  		this.saveProduct.productName="";
		  		this.detailContent="";
		  		this.$refs.procImg.clearFiles()
		  		this.findProductList();
		  		this.productID=null;
		  		this.$message.success('产品添加成功')
			}).catch((res)=>{
				console.log(res)
			})    		
    	},
    	//编辑产品
    	editPrc(item){
    		console.log(item);
    		this.saveProduct.banner=item.banner;
	  		this.saveProduct.productName=item.productName;
	  		this.detailContent=item.displayImgs;
	  		this.productID=item.id
    	},
    	//删除产品
    	delPrc(item){
			this.$yhr.post("/weixin/card/product/delete",{
				pid:item.id,
		  	}).then((res)=>{
		  		this.$message.success('删除成功');
		  		this.findProductList();
		  		this.findHotProductList()
			}).catch((res)=>{
				this.$message.error('系统异常')
			})      		
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
		  		this.$store.state.HotproductList=res.data
		  		
			}).catch((res)=>{
				console.log(res)
			})         	
        },
    	//获取产品
    	findProductList(){
			this.$xhr.get("/card/findProductList",{
				params:{
					companyId:this.$store.cardData.customerId,//公司ID 
				}
		  	}).then((res)=>{
		  		console.log(res);
		  		this.$store.state.productList=res.data
			}).catch((res)=>{
				console.log(res)
			})     		
    	}
    }
  };	
</script>

<style scoped>
.quill-editor {
	height: 300px;
}

#productSetting{
	margin: 0 10px;
}
.cardEditmodule .cardEditmodule_conterBanner{
	padding: 0;
	margin: 0;
	list-style: none;
	display: flex;
	flex-flow: wrap;
	padding-top: 10px;

}
.cardEditmodule .cardEditmodule_conterBanner>li{
	width: 110px;
	background: #eff7f7;
	overflow: hidden;
	margin-right: 5px;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 17px;
}
.cardEditmodule .cardEditmodule_conterBanner .cardEditmodule_conterBannerUpdata{
	text-align: center;
	margin-right: 0;
}
.cardEditmodule .cardEditmodule_conterBanner .cardEditmodule_conterBannerUpdata .el-upload{
	width: 100%;
	height: 100%;
}
.cardEditmodule .cardEditmodule_conterBanner .cardEditmodule_conterBannerUpdata .el-upload-dragger{
	width: 100%;
	height: 100%;
}
.cardEditmodule .cardEditmodule_conterProduct_upimg{
	height: 170px;
	border: 1px solid #cfd3d9;
	background: #eff7f7;
	text-align: center;
	
}
.cardEditmodule .cardEditmodule_conterProduct_upimg{
	margin-bottom: 10px;
}
.cardEditmodule_ProductFormAbt{
	margin-top: 30px;
	text-align: center;
}
.cardEditmodule_ProductFormAbt .el-button{
	    padding: 12px 40px;
}
.proSetBanner_chanpdel{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.5);
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	display: none;
}
.proSetBanner:hover .proSetBanner_chanpdel {display: flex;}
</style>