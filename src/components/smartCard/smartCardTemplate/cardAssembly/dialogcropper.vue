<template>
		<!--图片裁剪弹出框-->
		<el-dialog title="图片裁剪" width="980px"  :show-close="false" custom-class="dialogcropper_box"  :before-close="handleClose" :visible.sync="dialogVisible">
			<div class="dialogcropper_conter">
				<div class="dialogcropper_conterUpdata">
					图片文件：
					<el-upload :action="fileUrl" :show-file-list="false" :on-success="bannerSuccess" :on-error="ImagesError">
						<div class="files">选择图片</div>
					</el-upload>
					<span>*图片文件（不能超过2M）</span>
				</div>
				<div class="dialogcropper_conterCut">
					<div class="dialogcropper_conterCutLeft">
						<vueCropper ref="cropper" 
							:autoCropWidth="cropperoption.autoCropWidth" 
							:autoCropHeight="cropperoption.autoCropHeight" 
							:img="cropperoption.img"
							:outputSize="cropperoption.size" 
							:autoCrop="true" 
							:centerBox="true" 
							:fixedBox="true"  
							@realTime="cutimg">
						</vueCropper>
					</div>
					<!--<div class="dialogcropper_conterCutright">
						<img v-bind:src="cropperoption.imgCropper"/>
					</div>-->
				</div>
				<div class="dialogcropper_conterSubmit">
				    <el-button @click="handleClose">取 消</el-button>
				    <el-button type="primary" @click="ropperfun">确定上传</el-button>
				</div>
			</div>
		</el-dialog> 
</template>

<script>
  export default {
    data() {
      return {
      	fileUrl:this.baseURL+"/file/saveImage",
      	dialogVisible: false,
      	cropperoption:{
      		img:'',
      		size:1,
      		outputType:"",
      		autoCropWidth:1000,
      		autoCropHeight:422,
      		imgCropper:null
      	},
      	fileListImg:[],
      	fileListImgcard:"",
      };
    },
    props:["dialogstart","auto"],
    computed: {
	  
	},
	watch: {  
		dialogstart(val){
			console.log(val);
			this.dialogVisible=val
		}
	},
	created(){
		
	},
	mounted(){
		console.log(this.dialogstart)
	},
  methods:{
	    //获取banner base64图片
	    bannerSuccess(res,fileList){
	    	if(res.status==200){
	    		this.cropperoption.img=fileList.url
	    	}else{
	    		this.$message.warning('图片插入失败')
	    	}
	    },
	    handleClose(){
//	    	this.cropperoption.img=null;
//	    	this.cropperoption.imgCropper=null;
	    	if(this.auto.autoName=="product"){
		    	this.$emit('dialogval',{
					"start":false,
					"startT":false,
					"val":this.fileListImg
				})	    		
	    	}else if(this.auto.autoName=="cardSetting"){
	    		this.$emit('cardialogval',{
					"start":false,
					"startT":false,
					"val":this.fileListImgcard
				})	   
	    	}
	    },
	    //上传保存裁剪图片
		ropperfun() {
			var dataurl=this.cropperoption.imgCropper;
			if(dataurl==""||dataurl==null){
				this.$message.warning('请上传图片');
				return false
			}
      		this.$xhr.post("/file/saveImage",this.dataURLtoFile(dataurl)).then((res)=>{
      			console.log(res)
      			this.cropperoption.img='a.jpg';
      			this.cropperoption.imgCropper='';
				if(this.auto.autoName=="product"){
					this.$emit('dialogval',{
						"start":false,
						"startT":true,
						"val":res.data
					})		
				}else if(this.auto.autoName=="cardSetting"){
					this.$emit('cardialogval',{
						"start":false,
						"startT":true,
						"val":res.data
					})	
				};
			}).catch(function (error) {
				console.log(error)
				this.$message.warning('保存失败');
				this.cropperoption.img=null;
				this.cropperoption.imgCropper=null;
			});
		},
		//保存本域名下的图片
//		ropperfunUrl(val){
//			this.$yhr.post("/file/proxy",{
//				imgurl:val
//			}).then((res)=>{
//				console.log(res)
//    			this.cropperoption.img="";
//				this.cropperoption.imgCropper=null;
//				if(this.auto.autoName=="product"){
//					this.fileListImg.push(res.data);
//					this.$emit('dialogval',{
//						"start":false,
//						"val":this.fileListImg
//					})		
//					console.log(this.fileListImg)
//				}else if(this.auto.autoName=="cardSetting"){
//					this.fileListImgcard=res.data;
//					this.$emit('cardialogval',{
//						"start":false,
//						"val":this.fileListImgcard
//					})	
//				};
//				
//    		}).catch(function (error) {
//				this.$message.error('保存失败');
//				this.cropperoption.img=null;
//				this.cropperoption.imgCropper=null;
//			});
//		},
		//图片转form对象
		dataURLtoFile(dataurl){
			let base64String =dataurl /*base64图片串*/;
			let bytes = window.atob(base64String.split(',')[1]);
			let ab = new ArrayBuffer(bytes.length);
			let ia = new Uint8Array(ab);
			for(let i = 0; i < bytes.length; i++){
			    ia[i] = bytes.charCodeAt(i); 
			}
			let blob = new Blob([ab], {type: 'image/jpeg'}); 
			let fd = new FormData();
			fd.append('file',blob, Date.now() + '.jpg');
			return fd
		},
	    //裁剪到的图片
	    cutimg(){
	    	console.log("aaaaa")
    		this.$refs.cropper.getCropData((data) => {
//  			console.log(data)
				 this.cropperoption.imgCropper=data
			})
    	},
		//图片上传失败
	    ImagesError(res){
	    	this.$message.error('图片插入失败')
	    },    	
  }
};	
</script>

<style scoped>
	.dialogcropper_conter{
		padding: 25px 40px;
	}
	.dialogcropper_conterUpdata{
		display: flex;
		align-items: center;
		color: #666;
		margin-bottom: 20px;
	}
	.dialogcropper_conterUpdata>span{
		color: #aaa;
	    font-size: 12px;
	    margin-left: 10px;
	}
	.dialogcropper_conterUpdata .files{
		width: 120px;
	    height: 35px;
	    text-align: center;
	    line-height: 33px;
	    border: 1px solid #cfd3d9;
	    background: #f4f6fb;
	    margin: 0 5px;
	    color: #666;
	    font-weight: normal;
	}
	.dialogcropper_conterCut{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.dialogcropper_conterCut .dialogcropper_conterCutLeft{
	    width: 100%;
	    height: 600px;
	    border: 1px dashed #ccc;
	    background: #f1f1f1;
	    padding: 20px;
	}
	.dialogcropper_conterCut .dialogcropper_conterCutright{
		width: 300px;
		height: 200px;
	}
	.dialogcropper_conterCut .dialogcropper_conterCutright img{width: 100%;}
	.dialogcropper_conterSubmit{
		text-align: center;
		margin-top: 30px;
	}
	.dialogcropper_conterSubmit .el-button{
		width: 130px;
		margin: 0 12px;
	}
</style>