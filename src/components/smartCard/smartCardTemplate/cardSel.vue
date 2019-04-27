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
					<p><span>名片制作流程</span></p>
					<p class="choice_topAbt">
						<button style="margin-left: 0;">根据模板制作</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button>编辑首页名片</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button>添加产品</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button >设计完成提交审核</button>
						<img src="@/assets/img/jiant.jpg"/>
						<button >审核通过</button>
					</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<p class="index_title" style="justify-content: space-between;">
					<span><span class="index_span "></span><span class="sub_company">请选择名片模板</span></span>
				</p>
			</div>
		</div>
		<div>
  			<div class="module_img">
				<div class="row">
					<div class="col-md-3">
						<p class="text-center">
							<span></span>
						</p>
						<div class="module_imgBoxT">
					        <!-- 二维码 -->
					        <!--<div class="tCode">
					        	<img src="http://page-bucket.oiaqye7985.com/img/1545209135579.png">
					        	<span class="cue">微信扫一扫，预览模板</span>
					        </div>-->
							<p class="module_imgBox text-center" style="height: auto;"><img src="http://page-bucket.oiaqye7985.com/img/1545209135579.png" width="100%"/></p>
							<p class="text-center">
								<el-button type="primary" @click="primary">立即制作</el-button>
							<el-button >预 览</el-button>
							</p>
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
//		    this.$xhr.get("/page/findModel").then((res)=>{
//				this.Img=res.data
//			})
	},
	mounted(){
	},
	methods:{
		primary(index){
			this.$router.push({
	            path: '/cardPage1',
	            name: 'cardPage1'
	        })
		},
		preview(index){
			var index=index
			this.$router.push({
	            path: '/home/preview'+index, 
	            name: 'preview'+index,
	        })		
	}
	 
	}
}
</script>

<style  scoped>
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
	background: #fff;
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