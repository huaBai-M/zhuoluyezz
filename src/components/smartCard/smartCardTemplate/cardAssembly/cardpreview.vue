<template>
	<el-dialog :visible.sync="$store.state.cardState.cardpreview" :before-close="handleClose" :show-close="false" custom-class="cardpreview">
		<div class="cardSee_headName"  v-show="activeName=='cardSetting'">
			<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/cardbin.png" width="100%"/>
		</div>
		<div class="cardSee_headName" v-show="activeName=='productSetting'">
			<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/pic_product.png" width="100%"/>
		</div>
		<div class="cardSee_headName" v-show="activeName=='minVideo'">
			<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/pic_video.png" width="100%"/>
		</div>
		<div class="cardSee_iphone" style="overflow:hidden;">
			<el-scrollbar style="height: 100%;overflow-x: hidden;">
				<div class="cardSettingPage"  v-show="activeName=='cardSetting'">
					<div class="cardSettingPageBG">
						<img src="http://page-bucket.oiaqye7985.com/img/1547170027849.png" width="100%"/>
					</div>
					<div class="cardSettingPagezIndex">
						<div class="card_img">
	    					<img src="http://page-bucket.oiaqye7985.com/img/1545209135579.png" width="100%"/>
	    					<div class="card_img_position">
	    						<div class="cardtop">
	    							<h1>{{$store.state.cardEmployee.name}}</h1>
	    							<p>{{$store.cardData.customerName}}</p>
	    							<div style="width: 50px;border-bottom: 2px solid rgba(255,255,255,0.5);padding-top: 10px;"></div>
	    						</div>
	    						<div class="button">
	    							<div>
	    								<p>{{$store.state.cardEmployee.telphone}}</p>
	    								<p>{{$store.state.cardEmployee.email}}</p>
	    							</div>
	    							<div class="card_img_positionlogo">
	    								<img v-bind:src="$store.state.cardWebsite.companyLogo" />
	    							</div>
	    						</div>
	    					</div>
	    				</div>
	    				<div style="padding: 15px 10px ;">
	    					<img src="http://page-bucket.oiaqye7985.com/img/1545291604694.png" width="100%"/>
	    				</div>
						<div class="card_pagecollapse">
		    				<el-collapse v-model="company">
		    					<el-collapse-item title="展开全部名片信息" name="1" >
		    						<ul class="company_information ">
		    							<li class="company_informationList clearfix">
		    								<label><i class="iconfont icon-shouji"></i>手机：</label>
		    								<span v-text="$store.state.cardEmployee.telphone"></span>
		    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="15%" style="float: right;"/>
		    							</li>
		    							<li class="company_informationList clearfix" v-show="$store.state.cardEmployee.wechat!=''">
		    								<label><i class="iconfont icon-weixin"></i>微信：</label>
		    								<span v-text="$store.state.cardEmployee.wechat"></span>
		    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="15%" style="float: right;"/>
		    							</li>
		    							<li class="company_informationList clearfix"  v-show="$store.state.cardEmployee.email!=''">
		    								<label><i class="iconfont icon-youxiang1"></i>邮箱：</label>
		    								<span v-text="$store.state.cardEmployee.email"></span>
		    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="15%" style="float: right;"/>
		    							</li>
		    							<li class="company_informationList clearfix" v-show="$store.state.cardWebsite.companyLocation!=''">
		    								<label><i class="iconfont icon-dizhi"></i>地址：</label>
		    								<span v-text="$store.state.cardWebsite.companyLocation"></span>
		    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="15%" style="float: right;"/>
		    							</li>
		    						</ul>
		    					</el-collapse-item>
		    				</el-collapse>				    					
	    				</div>
	
						<div style="padding: 10px 0 5px;"><img src="http://page-bucket.oiaqye7985.com/img/1545208827309.png" width="100%"/></div>
	    				<div class="imgBanner">
	    					<img src="http://page-bucket.oiaqye7985.com/img/1545207371837.png" width="100%"/>
	    				</div>
						<div class="card_productTui">
							<p class="card_productTuiH1">本期推荐</p>
							<ul class="card_allproductList clearfix">
				  			<li class="pull-left" v-for="(item,index) in $store.state.HotproductList">
				  				<div >
				  					<img v-bind:src="item.banner" width="100%"/>
				  				</div>
				  				<p>{{item.productName}}</p>
				  			</li>
				  		</ul>
						</div>
						<!---->
						<div class="card_Introduction">
							<p class="card_productTuiH1">企业介绍</p>
							<div>
								<img :src="$store.state.cardWebsite.displayImgs" width="100%"/>
							</div>
							<div>
								{{$store.state.cardWebsite.description}}
							</div>
						</div>
						<!---->
					</div>
				</div>
				<!--名片结束-->
				<!--产品页面-->
				<div class="productSettingPage" v-show="activeName=='productSetting'">
					<el-carousel height="150px">
				      <el-carousel-item v-for="(item,index) in $store.state.cardEmployee.banner" :key="item">
				        	<img v-bind:src="item" width="100%"/>
				      </el-carousel-item>
				    </el-carousel>
				    <div class="card_productListPage">
				  		<!--列表-->
				  		<ul class="card_productUlPage">
				  			<li v-for="(item,index) in $store.state.productList"@click="productClick(item)" >
				  				<div class="img">
				  					<img v-bind:src="item.banner" width="100%"/>
				  				</div>
				  				<div class="text">
				  					<h1>{{item.productName}}</h1>
				  					<p v-html="docVal(item)"></p>
				  				</div>
				  			</li>
				  		</ul>
				    </div>
				</div>	
				<!--产品详情-->
				<div class="product_Details"  v-show="activeName=='productDetails'">
					<div class="banner">
						<img v-bind:src="productVal.banner" width="100%"/>
					</div>
					<div class="product_DetailsH1">
						{{productVal.productName}}
					</div>
					<div class="product_DetailsTxt">
						<div v-html="productVal.displayImgs"></div>
					</div>
				</div>
				<!--视频-->
				    <div class="minVideo" v-show="activeName=='minVideo'">
    					<ul class="minVideoList">
    						<li v-for="(item,index) in $store.state.videoList">
    							<video class="videoBox" controls controlsList="nodownload" :id="idfunc(index)" @click="videoPlay(index)">
								    <source v-bind:src="item.videoUrl" type="video/mp4" >
								</video>
								<div class="videoBox_Mask" @click="clickVidel(index)" :id="idfuncDiv(index)" v-bind:style="{backgroundImage:'url(' + item.previewImgUrl + ')'}">
									<div class="title">{{item.title}}</div>
									<div>
										<div class="left">
											<span></span>
											作者
										</div>
										<div class="right">
											<span></span>
											128
										</div>
									</div>
								</div>
								<div>暂停</div>
    						</li>
    					</ul>
    				</div>
				
				<!--、视频-->
			</el-scrollbar>
		</div>
		<div class="navCard">
			<div @click="home">
				<div v-show="activeName=='cardSetting'">
					<p><img src="@/assets/img/icon_homepage_clicked.png"/></p>
					<div>主页</div>
				</div>
				<div v-show="activeName!='cardSetting'">
					<p><img src="@/assets/img/icon_homepage_unclicked.png"/></p>
					<div>主页</div>
				</div>
			</div>
			<div @click="list">
				<div v-show="activeName!='productSetting'">
					<p><img src="@/assets/img/icon_product_unclicked.png"/></p>
					<div>产品</div>
				</div>
				<div v-show="activeName=='productSetting'">
					<p><img src="@/assets/img/icon_product_clicked.png"/></p>
					<div>产品</div>
				</div>
			</div>
			<div @click="minVideo">
				<div v-show="activeName!='minVideo'">
					<p><img src="@/assets/img/icon_video_unclicked.png"/></p>
					<div>视频</div>
				</div>
				<div v-show="activeName=='minVideo'">
					<p><img src="@/assets/img/icon_video_clicked.png"/></p>
					<div>视频</div>
				</div>
			</div>
		</div>
	</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
      	company: ['1'],
      	dialogVisible:false,
      	activeName:"cardSetting",
      	 productVal:[],
      };
    },
    computed: {
	  
	},
	watch: {  
		
	},
	created(){
		
	},
	mounted(){
		
	},
    methods:{
    	handleClose(){
    		this.$store.state.cardState.cardpreview=false
    	},
    	docVal(val){
       	let para=document.createElement("p");
		para.innerHTML=val.displayImgs
       	return para.innerText
       },
       home(){
       	this.activeName="cardSetting"
       },
       list(){
       	this.activeName="productSetting"
       },
       minVideo(){
       	this.activeName="minVideo"
       },
       productClick(val){
       	console.log(val);
       	this.productVal=val;
       	this.activeName="productDetails"
       },
        idfunc(index){
       	return "minVideoT"+index
       },
       idfuncDiv(index){
       	return "minVideoMackT"+index
       },
       clickVidel(index){
       	var video= document.getElementById("minVideoT"+index);
		console.log(video)
		$("#minVideoMackT"+index).hide()
		video.play()
		console.log(video.paused)
//    	video
       },
       videoPlay(index){
       	var video= document.getElementById("minVideoT"+index);
       	video.pause();
       	$("#minVideoMackT"+index).show()
       },
    }
  };	
</script>

<style scoped>
.cardpreview{
	width: 375px !important;
	padding: 0 !important;
	background: none;
	box-shadow: none;
}
.cardpreview ul{
	margin: 0;
	padding: 0;
}
.cardpreview *{box-sizing: border-box;}
.cardpreview .el-dialog__body{
	padding: 0;
	margin: 0;
}
.cardpreview .el-dialog__header{
	padding: 0;
	margin: 0;
}
.cardMain_iphone{
	position: relative;
	overflow: hidden;
}
.cardSee_iphone{
	width: 375px;
	height: 667px;
	box-shadow: 0 1px 3px rgba(0,0,0,.3);
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top: none;
	background: #fff;
}
.cardSee_headAbt{
	text-align: center;
}

.card_productListPage{
	
}
.card_productListPage_form{
	background: #fff;
	height: 40px;
	overflow: hidden;
	padding: 0 22px;
	padding-bottom: 3px;
	margin: 5px 0;
}
.card_productUlPage{
	list-style: none;
	padding: 0;
	margin: 0;
	margin: 0 5px;
}
.card_productUlPage li{
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background: #fff;
	padding: 10px 5px;
	border-radius: 5px;
	border-bottom: 1px solid #eee;
}
.card_productUlPage li .img{
	width: 150px;
	overflow: hidden;
	border-radius: 5px;
}
.card_productUlPage li .text{
	width: 235px;
	padding-left: 10px;
}
.card_productUlPage li .text *{
	font-size: 18px;
	margin: 0;
	padding: 0;
	font-weight: bold;
}
.card_productUlPage li .text p{
	font-size: 12px;
	height: 35px;
	overflow: hidden;
	font-weight: normal;
}
.cardSettingPage{
	padding: 5px;
	overflow: hidden;
}
.cardSettingPage .card_img{
	padding-bottom: 5px;
}
.cardSettingPage .el-collapse{
	border-radius: 10px;
    overflow: hidden;
}
.cardSettingPage .el-collapse .el-collapse-item__content{padding-bottom: 0;}
.company_information{
	text-align: left;
	padding: 0 10px;
	margin: 0;
	list-style: none;
	
}
.card_Introduction h1{
	font-size: 18px;
	font-weight: 700;
}
.card_productTui .pull-left{
	background: #fff;
	width: 160px;
	overflow: hidden;
}
.card_productTui .pull-left>div{
	width: 100%;
	height: auto;
	
}
.product_DetailsTxt img{
	width: 100%;
}
/**/
.imgBanner{
	border-top: rgba(240,248,255,1) solid 5px;
	border-bottom: rgba(240,248,255,1) solid 5px;
}
.card_productTuiH1{
	font-size: 15px;
	font-weight: bold;
	padding: 5px 5px 5px 6px;
	margin: 0;
}
.card_allproductListTxt{
	font-size: 14px;
	padding: 8px 5px;
	line-height: 24px;
}
.product_DetailsH1{
	font-size: 20px;
	font-weight: bold;
	padding: 10px 5px;
}
.product_DetailsTxt{
	padding: 5px;
	line-height: 24px;
}
.cardSettingPage .card_img{
	position: relative;
	border-radius: 15px;
	overflow: hidden;
}
.cardSettingPage .card_img .card_img_position{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	padding: 40px 30px;
	color: #fff;
}
.cardSettingPage .card_img .card_img_position .cardtop h1{
	padding: 0;
	margin: 0;
	font-size: 20px;
}
.cardSettingPage .card_img .card_img_position .cardtop p{
	font-size: 12px;
	padding: 0;
	margin: 0;
	padding-top: 10px;
}
.cardSettingPage .card_img .card_img_position .button{
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}
.cardSettingPage .card_img .card_img_position .button p{
	padding: 0;
	margin: 0;
}
.navCard{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	background: #fff;
	position: relative;
	top: -16px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
.navCard p{
	padding: 0;
	margin: 0;
	width: 45px;
	height: 45px;
	
}
.navCard>div{
	width: 45px;
	text-align: center;
}
.navCard>div img{width: 100%;}

/*-------------------------*/
.cardSettingPage .card_img{
	margin-left:12px ;
	margin-right:12px ;
	padding-bottom: 0;
}
.card_pagecollapse{
	padding-left:12px ;
	padding-right:12px ;
}
.card_pagecollapse .el-collapse-item__header{
	font-weight: bold;
	font-size: 13px;
}
.card_pagecollapse .el-collapse{
	border-top: none;
}
.card_pagecollapse .company_information{
	padding: 0
}
.card_productTui{
	padding-left: 12px;
	padding-right: 12px;
}
.card_productTuiH1{
	padding-top: 10px;
}
.card_Introduction{
	padding-left: 12px;
	padding-right: 12px;
}
.company_informationList label{
	font-size: 14px;
	color: #a9a9a9;
	font-weight: normal;
}
.company_informationList label i{
	color: #a9a9a9;
	font-weight: normal;
	font-size: 14px;
	margin-right: 3px;
}
/**/
.cardpreview .el-dialog__header {
    display: none;
}
.minVideoList{
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-flow: wrap;
	padding: 0 10px;
}
.minVideoList li{
	position: relative;
	width: 45%;
	height: 200px;
	/*padding: 0 10px;*/
	margin:15px 8px ;
	overflow: hidden;
}
.minVideoList li  video{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.minVideoList li .videoBox_Mask{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.5);
	color: #000;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	padding: 5px;
	cursor: pointer;
	background-size: 100%;
}
.minVideoList li .videoBox_Mask>div{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.cardpreview {
	width: 375px;
}
.cardpreview .el-dialog__header{
	padding: 0;
	
}
.cardSee_headName{
	height: 78px;
	color: #fff;
	text-align: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
}
.cardSettingPageBG{
	position: relative;
    top: -10px;
    left: -5px;
    width: 103%;
}
.cardSettingPagezIndex{
	position: relative;
	top: -80px;
}
.navCard{
	padding-top: 20px;
}
.product_DetailsTxt {
    padding: 5px 12px;
    line-height: 24px;
}
</style>