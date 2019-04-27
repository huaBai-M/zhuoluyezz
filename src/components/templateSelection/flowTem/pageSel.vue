<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="index_title" style="justify-content: space-between;">
					<span><span class="index_span "></span><span class="sub_company">{{UserName}}</span></span>
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="choice_top">
					<p>你好：{{UserName}}</p>
					<p><span>着陆页制作流程</span><span style="color:#27abfc ;">（每张流量宝最多可制作5张着陆页）</span></p>
					<p class="choice_topAbt">
						<button style="margin-left: 0;">点击制作</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button>填写页面名称</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button>编辑页面</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button >审核发布</button>
					</p>
					<p><span>着陆页制作引导</span></p>
					<p><span style="color:#27abfc ;">1.通用模板：</span><span style="color:#27abfc ;">（指已有设计稿，只需切图上传即可；如需制作移动端需再次切图上传）</span></p>
					<p><span >点击图片可更换；详细制作引导请点击该模板预览！</span></p>
					<p><span style="color:#27abfc ;">2.自定义模板：</span><span style="color:#27abfc ;">（指无需设计稿，根据模板样式替换其模板文字及图片内容；改模板自动生成移动端，无需再次制作）</span></p>
					<p><span >文字可双击编辑；点击图片可更换；详细制作引导请点击该模板预览！</span></p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
				<p class="index_title" style="justify-content: space-between;height: 105px;">
					<span><span class="index_span "></span><span class="sub_company">着陆页样式</span></span>
				</p>
			</div>
			<div class="col-md-6" >
				<p class="index_title" style="justify-content: flex-end;">
				<el-radio-group v-model="radio1">
			      <el-radio-button label="模板制作"></el-radio-button>
			      <el-radio-button label="定制制作"></el-radio-button>
			    </el-radio-group>
			    </p>
			</div>
		</div>
		<div>
  			<div class="module_img" v-show="radio1=='模板制作'">
				<div class="row">
					<div class="col-md-3" v-for="(Img,index) in Img">
						<p class="text-center">
							<span>{{Img.modelName}}</span>
						</p>
						<div class="module_imgBoxT">
					        <!-- 二维码 -->
					        <div class="tCode">
					        	<img v-bind:src="Img.previewQrcode">
					        	<span class="cue">微信扫一扫，预览模板</span>
					        </div>
							<p class="module_imgBox text-center"><img v-bind:src="Img.displayImgPc" width="100%"/><i>{{Img.version}}</i></p>
							<p class="text-center">
								<el-button @click="primary(Img.id)" type="primary" >制 作</el-button>
							<el-button @click="preview(Img.id)" plain>预 览</el-button>
							</p>
							<span class="ImgNew" v-if="Img.id==18"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module6/new.png"/></span>
							<span class="ImgNew" v-if="Img.id==13"><img src="http://page-bucket.oiaqye7985.com/land-page/images/re.png"/></span>
						</div>
					</div>
				</div>
			</div>
			<div  class="upmodelAbt" v-if="ifid">
				<el-button type="primary" @click="dialogTableVisible=true">上传模板<i class="el-icon-upload el-icon--right"></i></el-button>
				<span style="color:#f56c6c;">提示：点击“下载源文件”，在跳转百度云页面上直接粘贴，即可下载模板源文件。</span>
			</div>
			<div class="module_img" v-show="radio1=='定制制作'">
				
				<div class="row">
					<div class="col-md-3" v-for="(Img,index) in alldata">
						<p class="text-center">
							<span>{{Img.modelName}}</span>
						</p>
						<div class="module_imgBoxT">
					        <!-- 二维码 -->
					        <div class="tCode tCodedeleteAll" >
					        	<i class="el-icon-delete" @click="delFile(Img)" v-if="ifid"></i>
					        </div>
							<p class="module_imgBox text-center"><img v-bind:src="Img.displayPicUrl" width="100%"/></p>
							<p class="text-center">
								<el-button  type="primary" >
									<a v-bind:href="httpString(Img.downloadPsdUrl)" target="_blank" v-clipboard:copy="getCaption(Img.downloadPsdUrl)" v-clipboard:success="onCopy"  v-clipboard:error="onError">下载源文件</a>
								</el-button>
								<el-button >
									<a v-bind:href="Img.displayPicUrl" target="_parent">预 览</a>
								</el-button>
							</p>
						</div>
					</div>
				</div>
			</div>
  		</div>
  		<!---->
  		<el-dialog  :visible.sync="dialogTableVisible" :show-close="false" custom-class="pageselDialo">
		  <el-form ref="form"  label-width="92px" label-position="left" >
		  	<el-form-item label="模板名称：">
			    <el-input v-model="formData.modelName"></el-input>
			</el-form-item>
			<el-form-item label="预览图：">
			    <el-upload
				  class="upload-dialogpageSel"
				  	ref="updataImg"
				  :before-upload="headImg"
				  :on-success="imgsucc"
				  :action="urlImg"
				  >
				  <el-button size="small" type="primary">点击上传</el-button>
				  只能上传jpg/png文件，大小建议不超过5M
				</el-upload>
			</el-form-item>
			<el-form-item label="源文件url：">
			    <el-input placeholder="请输入百度云链接和密码" v-model="formData.downloadPsdUrl"></el-input>
			</el-form-item>
		  </el-form>
		  <div class="text-center">
		  	<el-button @click="dialogTableVisible=false">取消</el-button>
			<el-button type="primary" @click="pagePsd">提交</el-button>
		  </div>
		</el-dialog>
  		
  		
	</div>
</template>
<!---->

<script>
	
export default {
	data () {
		return{
			UserName:null,
			urlImg:this.baseURL+'/file/saveImage',
			urlfile:this.baseURL+'/file/psdUpload',
		    Img:null,
		    indexData:null,
		    loading:true,
		    maxNumber:null,
		    ifid:false,
		    radio1:"模板制作",
		    dialogTableVisible:false,
		    formData:{
		    	displayPicUrl:"",
		    	downloadPsdUrl:"",
		    	modelName:"",
		    },
		    alldata:[]
		}
	},
	computed: {
	  
	},
	watch: {  
	   
	},
	created(){
		this.findAll()
		if(this.$store.state.loginData.channel_id!=undefined){
			this.UserName=this.$store.state.loginData.sub_company;
			console.log(this.$store.state.loginData.channel_id)
			if(this.$store.state.loginData.channel_id==31){
				this.ifid=true
			}
		}else{
			this.$router.push({path: '/', name: 'home',})
			return false
		}
	    this.$xhr.get("/page/findModel").then((res)=>{
			this.Img=res.data
		})
	},
	mounted(){
	},
	methods:{
		// 复制成功
	    onCopy(e){
	      console.log(e);
	      this.$message.success('已成功复制到剪贴板');
	    },
	    // 复制失败
	    onError(e){
	      alert("失败");
	    },
		headImg(file){ 
            var _this = this; 
            return new Promise(function(resolve, reject) { 
//				if(file.size>2097152){
//					_this.$message({
//			          duration:1000,
//			          message:"图片不能大于2M",
//			          type: "warning"
//			        });
//				}else{
//					resolve();
//				}
				resolve();
				console.log(file)
            }); 
        },
		primary(index){
//			console.log(index)
			var index=index
			this.$router.push({
	            path: '/home/operation'+index, 
	            name: 'operation'+index,
	        })
		},
		imgsucc(val,files){
    		this.$message.success('上传成功');
    		
    		console.log(val)
    		this.formData.displayPicUrl=val.data
    	},
		preview(index){
			var index=index
			this.$router.push({
	            path: '/home/preview'+index, 
	            name: 'preview'+index,
	        })		
		},
		pagePsd(){
			this.$xhr.post("/pagePsd/save",{
				modelName:this.formData.modelName,
				displayPicUrl:this.formData.displayPicUrl,
				downloadPsdUrl:this.formData.downloadPsdUrl
		  	}).then((res)=>{
		  		console.log(res)
		  		this.dialogTableVisible=false;
		  		this.formData.modelName='';
		  		this.formData.displayPicUrl='';
		  		this.formData.downloadPsdUrl='';
		  		this.$refs.updataImg.clearFiles();
		  		this.findAll()
			}).catch((res)=>{
				console.log(res)
			})    
		},
		findAll(){
			this.$xhr.get("/pagePsd/findAll").then((res)=>{
		  		console.log(res);
		  		this.alldata=res.data
			}).catch((res)=>{
				console.log(res)
			})    
		},
	 	delFile(Img){
	 		this.$xhr.get("/pagePsd/delete",{
	 			params:{pid:Img.id}
	 		}).then((res)=>{
		  		console.log(res);
		  		this.findAll()
			}).catch((res)=>{
				console.log(res)
			})    
	 	},
	 	open2(val) {
	        this.$notify({
	          title: '提示',
	          message: val,
	//        duration: 0
	        });
     },
     httpString(s) {
        var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        var reg= /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
        s = s.match(reg);
        return s
	 },
	 getCaption(obj){
	    var index=obj.lastIndexOf("\:");
	    obj=obj.substring(index+1,obj.length);
	    return obj;
	 }
	}
}
</script>

<style >
.module_img{
	background: #fff;
	padding: 20px;
}
.module_imgBox{
	height:400px ;
	overflow: hidden;
	border: 2px solid #fff;
	margin-bottom: 15px;
	position: relative;
}
.module_imgBoxT{
	margin-bottom: 30px;
	position: relative;
}
.ImgNew{
	position: absolute;
	top: 0;
	left: 0;
}
.module_imgBoxT .tCode {
	width: 100%;
	height: 400px;
	padding-top: 80px;
	text-align: center;
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba(0,0,0,0.7);
	z-index: 100;
	border: 2px solid #00AFF0;
	display: none;
}
.module_imgBoxT .tCode img{
    width: 70%;	
}
.module_imgBoxT .tCode span.cue{
	display: block;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	margin-top: 35px;
}
.module_imgBox>i{
	position: absolute;
	width: 60px;
	height: 80px;
	top: 0;
	right: 0;
	text-align: center;
	font-style: normal;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	padding: 25px 0;
	background: url(../../../assets/img/title.png);
}
.module_imgBox:hover{
	/*border: 2px solid #00AFF0;*/
}
.module_imgBoxT:hover .tCode {
	display: block;
}	
.choice_top{
	background: #fff;
	padding: 20px;
}
.choice_topAbt button{
	background: #fff;
	outline: none;
	border: 1px dashed #27abfc;
	padding: 5px 15px;
}
.tCodedeleteAll{
	color: #fff;
	font-weight: bold;
	font-size: 40px;
	line-height: 200px;
	cursor: pointer;
}
.upmodelAbt{
	padding-bottom: 20px;
}

</style>