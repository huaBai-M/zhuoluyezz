<template>
	<div class="cardEditmodule">
		<el-alert title="视频编辑"  :closable="false" center></el-alert>
		<div id="minVideoSetting">
			<el-collapse v-model="activeNames">
				<el-collapse-item title="保存上传视频" name="1">
					<template slot="title">
						<i class="title_circle"></i>
				      	保存上传视频
				    </template>
				    <div class="cardEditmodule_conter">
				    	<div class="card_errorTxt">
				    		视频大小不能超过？50M，时长不超过30秒，超过会导致视频上传不成功，建议用手机摄像或直接用抖音拍摄保存后上传。
				    	</div>
				    	<el-upload
						  class="upload-demo"
						  ref="updataVideo"
						  drag
						  :action="fileUrl"
						  :on-success="videoSuccess"
						  :on-error="ImagesError"
						  :on-remove="removeVideo"
						  :before-upload="handleImages"
						  :limit="1"
						  >
						  <i class="el-icon-upload"></i>
						  <div class="el-upload__text">请将视频文件拖到此处，或<em>点击上传</em></div>
						</el-upload>
						<div class="cardEditmodule_ProductForm">
				    		<p class="cardEditmodule_ProductFormTitle">上传视频封面图：</p>
				    		<div class="card_errorTxt">
					    		图片尺寸340像素*454像素
					    	</div>
				    		<el-upload
							  class="upload-demo"
							  ref="updataImg"
							  drag
							  :action="imgfileUrl"
							  :on-success="imgsucc"
							  :on-error="ImagesError"
							  :on-remove="removeImg"
							  :before-upload="headImg"
							  :limit="1"
							  >
							  <i class="el-icon-picture"></i>
							  <div class="el-upload__text">上传视频封面图拖到此处，或<em>点击上传</em></div>
							</el-upload>
				    	</div>
				    	<div class="cardEditmodule_ProductForm">
				    		<p class="cardEditmodule_ProductFormTitle">视频名：</p>
				    		<div><el-input v-model.trim="formVal.name"></el-input></div>
				    	</div>
				    	<!-- <div class="cardEditmodule_ProductForm">
				    		<p class="cardEditmodule_ProductFormTitle">视频介绍：</p>
				    		<div><el-input type="textarea"placeholder="0~100字的文字介绍" v-model="formVal.textareaVal" maxlength="100"></el-input></div>
				    	</div> -->
				    	<div class="cardEditmodule_ProductFormAbt">
					    	<el-button type="primary" @click="submitVideo">确定添加</el-button>
					    </div>
				    </div>
			  	</el-collapse-item>
			  	<el-collapse-item title="已上传视频" name="2">
			  		<template slot="title">
						<i class="title_circle"></i>
				      	已上传视频
				    </template>
				    <div class="cardEditmodule_conter">
				  		<ul class="listVideoUl">
				  			<li v-for="(item,index) in $store.state.videoList">
				  				<div class="listVideoUl_div">
				  					<video class="videoBox" controls  controlsList="nodownload">
									    <source v-bind:src="item.videoUrl" type="video/mp4" >
									</video>
				  				</div>
								<div class="span">
									<p class="title">视频简介</p>
									<div class="video_box">{{item.description}}</div>
								</div>
								<div class="removeVideo">
									<el-button type="danger" icon="el-icon-delete" circle @click="removeVideoT(item)"></el-button>
								</div>
				  			</li>
				  		</ul>
			  		</div>
			  </el-collapse-item>
			  	
			</el-collapse>
		</div>
		<video style="display:none;" controls="controls" id="videoFile" @canplaythrough="myFunction"></video>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	fileUrl:this.baseURL+"/file/saveVideo",
      	imgfileUrl:this.baseURL+"/file/saveImage",
      	activeNames:["1","2"],
      	formVal:{
      		name:"",
      		textareaVal:""
      	},
      	listVideo:[],
      	vodelUrl:"",
      	imglUrl:""
      };
    },
    computed: {
	  
	},
	components:{
  	},
	watch: {  
		
	},
	created(){
		console.log(this.$store.cardData.customerId)
	},
	mounted(){
		this.$nextTick(function () {
      			this.videoList()
      	});
	},
    methods:{
		myFunction(){
		 let id=document.getElementById("videoFile");
		 let second = Math.ceil(id.duration%60);
		 console.log(second)
		 if(second>30){
			 this.$message.warning('视频长度不能大于30秒');
			 this.$refs.updataVideo.clearFiles()
		 }else{
			 this.$message.success('上传成功');
		 }
		},
    	videoSuccess(val,files){
    		// this.$message.success('上传成功');
    		console.log(val)
    		console.log(files);
    		this.vodelUrl=val.data;
    		document.getElementById("videoFile").src=this.vodelUrl
    	},
    	imgsucc(val,files){
    		this.$message.success('上传成功');
    		this.imglUrl=val.data
    	},
    	handleImages(val){
    		console.log(val.name);
    		 var _this = this; 
    		var suffix=val.name
    		suffix=suffix.split(".")[1];
    		console.log(suffix)
    		var myVideo = document.createElement('video');
    		console.log(myVideo.canPlayType(`video/${suffix}`)=='')
    		//&&
    		console.log(this.getfilesize(val.size)>50)
    		return new Promise(function(resolve, reject) {
	    		if(myVideo.canPlayType(`video/${suffix}`)==''||_this.getfilesize(val.size)>50){
	    			console.log("024121")
	    			_this.$message.warning('上传的视频文件大小不能超过50M')
	    			_this.$refs.updataVideo.clearFiles()
//	    			reject()
	    		}else{
	    			resolve(); 
	    		}
    		});

    		console.log(this.getfilesize(val.size)<50)
//  		return this.getfilesize(val.size)<50&&myVideo.canPlayType(`video/${suffix}`)!=''
        },
        headImg(file){ 
            var _this = this; 
            return new Promise(function(resolve, reject) { 
                var reader = new FileReader(); 
                reader.onload = function(event) { 
                    var image = new Image(); 
                    image.onload = function () { 
                        var width = this.width; 
                        var height = this.height; 
                        if(width==340&&height==454){
                        	resolve(); 
                        }else{
                        	_this.$message.warning('图片尺寸340像素*454像素')
                        	reject();
                        }
//						resolve(); 
                    }; 
                    image.src = event.target.result; 
                } 
                reader.readAsDataURL(file); 
            }); 
        },
    	ImagesError(val){
    		console.log(val)
    	},
    	removeVideo(val){
    		console.log(val);
    		this.vodelUrl=""
    	},
    	removeImg(val){
    		console.log(val);
    		this.imglUrl=""
    	},
    	//获取视频接口
    	videoList(){
        	this.$xhr.post("/card/findVideoListByCriteria",{
				companyId:this.$store.cardData.customerId,//公司id
				pageNum:"1",
				pageSize:"100000" 
		  	}).then((res)=>{
		  		console.log("视频是视频")
		  		console.log(res);
		  		this.$store.state.videoList=res.data.videoList
			}).catch((res)=>{
				console.log(res)
			})         	
        
    	},
    	//保存短视频
    	submitVideo(){
    		if(this.vodelUrl==''||this.formVal.name==''){
    			this.$message.warning('文件和内容不能为空');
    			return false
    		}
    		this.$xhr.post("/card/saveVideo",{
				companyId:this.$store.cardData.customerId,//公司id
				title:this.formVal.name,//标题
				videoUrl:this.vodelUrl,//视频地址
				previewImgUrl:this.imglUrl,//视频预览图
				description:this.formVal.textareaVal,//描述信息
				authorId :this.$store.state.loginData.id,////作者id
				id:this.$store.cardData.id,//id
		  	}).then((res)=>{
		  		console.log(res);
		  		this.videoList()
		  		this.$refs.updataVideo.clearFiles()
		  		this.$refs.updataImg.clearFiles();
		  		this.formVal.textareaVal=""
		  		this.formVal.name="";
		  		this.$message.success('保存成功')
			}).catch((res)=>{
				console.log(res)
			})   
    		
    	},
    	removeVideoT(val){
    		console.log(val);
    		this.$yhr.post("/card/deleteVideo",{
				id:val.id,//id
		  	}).then((res)=>{
		  		console.log(res);
		  		this.videoList();
		  		this.$message.success('删除成功')
			}).catch((res)=>{
				console.log(res);
				this.$message.error('系统异常')
			}) 
    	},
    	getfilesize(size) {
    		var num = 1024.00; //byte
	        if (size < Math.pow(num, 3)){
	            return (size / Math.pow(num, 2)).toFixed(2)  //M
	        }
	        if (size < Math.pow(num, 4)){
	        	return false

	        }
	        return false
    	}
    }
  };	
</script>

<style scoped>
#minVideoSetting{
	padding: 0 10px;
}
.el-upload-dragger .el-icon-picture{
	font-size: 67px;
    color: #c0c4cc;
    margin: 40px 0 16px;
    line-height: 50px;
}
.cardEditmodule_ProductFormTitle{
	padding: 0;
	padding: 10px 0;
}
.listVideoUl{
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: wrap;
}
.listVideoUl li {
	width: 175px;
	overflow: hidden;
	margin-bottom: 20px;
	position: relative;
	overflow: hidden;
}
.listVideoUl li  .removeVideo{
	position: absolute;
	width: 100%;
	height: 265px;
	top: 0;
	left: 0;
	display: none;
	align-items: center;
	justify-content: center;
	background: rgba(0,0,0,0.5);
	z-index: 10;
}
.listVideoUl li:hover .removeVideo{
	display: flex;
}
.listVideoUl li .span{
	margin-top: 10px;
	line-height: 20px;
}
.listVideoUl li .span .title{
	color: #666;
	font-weight: bold;
}
.listVideoUl li  .video_box{
	color: #999;
	height: 40px;
	font-size: 12px;
	overflow: hidden;
	text-overflow: inherit;
}
.listVideoUl li  p{
	margin: 0;
	padding: 0;
}
.listVideoUl li .listVideoUl_div{
	width: 175px;
    height: 265px;
	border-radius: 10px;
	overflow: hidden;
}
.listVideoUl li .listVideoUl_div video{
	width: 100%;
	height: 100%;
	object-fit: cover;
}

</style>