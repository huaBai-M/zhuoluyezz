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
			<div class="col-md-12">
				<p class="index_title" style="justify-content: space-between;">
					<span><span class="index_span "></span><span class="sub_company">着陆页样式</span></span>
				</p>
			</div>
		</div>
		<div>
  			<div class="module_img">
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
								<el-button @click="primary(Img.id)" type="primary">制 作</el-button>
								<el-button @click="preview(Img.id)" plain>预 览</el-button>
							</p>
							<span class="ImgNew" v-if="Img.id==18"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module6/new.png"/></span>
							<span class="ImgNew" v-if="Img.id==13"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module6/new.png"/></span>
						</div>
					</div>
				</div>
			</div>
  		</div>
	</div>
</template>

<script>
export default {
	data () {
		return{
			UserName:null,
		    Img:null,
		    indexData:null,
		    loading:true,
		    maxNumber:null,
		}
	},
	computed: {
	  
	},
	watch: {  
	   
	},
	created(){
		if(this.$store.state.loginData.channel_id!=undefined){
			this.UserName=this.$store.state.loginData.sub_company
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
		primary(index){
			var index=index
			this.$router.push({
	            path: '/home/ztcoperation'+index, 
	            name: 'ztcoperation'+index,
	        })
		},
		preview(index){
			var index=index
			this.$router.push({
	            path: '/home/ztcpreview'+index, 
	            name: 'ztcpreview'+index,
	        })
		}
	}
}
</script>

<style>
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
</style>