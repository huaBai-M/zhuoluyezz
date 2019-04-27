<template>
	<div class="cardMain" style="background: #edf1f5;">
		<el-container>
		  	<el-header>
		  		<el-row :gutter="24">
					<el-col :span="16"><a href="javascript:void(0)" class="logo"><img src="@/assets/img/logo.png" alt="home"/></a></el-col>
					<el-col :span="8">
					  	<div class="card_abtsubmit">
					  		<button  @click="$store.state.cardState.cardpreview=true">预览</button>
						  	<button @click="submit(-1)" v-bind:disabled="disable">保存</button>
						  	<button @click="submit(0)" v-bind:disabled="disable">发布</button>
						  	<button @click="signout">退出</button>
					  	</div>
					</el-col>
				</el-row>
		  	</el-header>
		  	<el-container>
			    <main class="el-main cardMain_iphone"> 
			    	<div class="cardSee">
			    		<div class="cardSee_head">
			    			<div class="cardSee_headAbt">
						  		<el-radio-group v-model="activeName">
								    <el-radio-button label="cardSetting">个人名片</el-radio-button>
								    <el-radio-button label="productSetting">产品编辑</el-radio-button>
								    <el-radio-button label="minVideo">短视频</el-radio-button>
								</el-radio-group>
			    			</div>
			    			<div class="cardSee_headName"  v-show="activeName=='cardSetting'">
			    				<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/cardbin.png" width="100%"/>
			    			</div>
			    			<div class="cardSee_headName" v-show="activeName=='productSetting'">
								<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/pic_product.png" width="100%"/>
							</div>
							<div class="cardSee_headName" v-show="activeName=='minVideo'">
								<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/pic_video.png" width="100%"/>
							</div>
							<div class="cardSee_headName" v-show="activeName=='productDetails'">
								<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/pic_product.png" width="100%"/>
							</div>
			    		</div>
			    		<div class="cardSee_iphone">
			    			<el-scrollbar style="height: 100%;overflow-x: hidden;">
			    				<!--名片页面-->
			    				<div class="cardSettingPage" v-show="activeName=='cardSetting'">
			    					<div class="cardSettingPageBG">
			    						<img src="http://page-bucket.oiaqye7985.com/img/1547174967366.png" width="100%"/>
			    					</div>
			    					<div class="cardSettingPagezIndex">
				    					<div class="card_img cardSettingPagez">
					    					<img src="http://page-bucket.oiaqye7985.com/img/1545209135579.png" width="100%"/>
					    					<div class="card_img_position">
					    						<div class="cardtop">
					    							<h1>{{$store.state.cardEmployee.name}}</h1>
					    							<p>{{$store.cardData.customerName}}</p>
					    							<div style="width: 50px;border-bottom: 2px solid rgba(255,255,255,0.5);padding-top: 10px;"></div>
					    						</div>
					    						<div class="button">
					    							<div>
					    								<p class="telphoneiconfont">
					    									<img v-show="$store.state.cardEmployee.telphone!=''" src="http://page-bucket.oiaqye7985.com/img/1547176064773.png"/>
					    									{{$store.state.cardEmployee.telphone}}
					    								</p>
					    								<p class="telphoneiconfont">
					    									<img v-show="$store.state.cardEmployee.email!=''" src="http://page-bucket.oiaqye7985.com/img/1547176024802.png"/>
					    									{{$store.state.cardEmployee.email}}
					    								</p>
					    							</div>
					    							<div class="card_img_positionlogo">
					    								<img v-bind:src="$store.state.cardWebsite.companyLogo" width="95%"/>
					    							</div>
					    						</div>
					    					</div>
					    				</div>
					    				<div class="cardImg_dianz">
					    					<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/carddianz.png" width="100%"/>
					    				</div>
					    				<div class="card_pagecollapse">
						    				<el-collapse v-model="company">
						    					<el-collapse-item title="展开全部名片信息" name="1" >
						    						<ul class="company_information ">
						    							<li class="company_informationList clearfix">
						    								<label><i class="iconfont icon-shouji"></i>手机：</label>
						    								<span v-text="$store.state.cardEmployee.telphone"></span>
						    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="16%" style="float: right;"/>
						    							</li>
						    							<li class="company_informationList clearfix" v-show="$store.state.cardEmployee.wechat!=''">
						    								<label><i class="iconfont icon-weixin"></i>微信：</label>
						    								<span v-text="$store.state.cardEmployee.wechat"></span>
						    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="16%" style="float: right;"/>
						    							</li>
						    							<li class="company_informationList clearfix" v-show="$store.state.cardEmployee.email!=''">
						    								<label><i class="iconfont icon-youxiang1"></i>邮箱：</label>
						    								<span v-text="$store.state.cardEmployee.email"></span>
						    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="16%" style="float: right;"/>
						    							</li>
						    							<li class="company_informationList clearfix" v-show="$store.state.cardWebsite.companyLocation!=''">
						    								<label><i class="iconfont icon-dizhi"></i>地址：</label>
						    								<span v-text="$store.state.cardWebsite.companyLocation"></span>
						    								<img src="http://page-bucket.oiaqye7985.com/img/1545292694135.png" width="16%" style="float: right;"/>
						    							</li>
						    						</ul>
						    					</el-collapse-item>
						    				</el-collapse>				    					
					    				</div>
	
					    				<div style="padding: 15px 0 ;"><img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/btn.jpg" width="100%"/></div>
					    				<div class="imgBanner">
					    					<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/cardbanner.png" width="100%"/>
					    				</div>
					    				<div class="card_productTui">
					    					<p class="card_productTuiH1">本期推荐</p>
					    					<ul class="card_allproductList clearfix">
									  			<li class="pull-left" v-for="(item,index) in $store.state.HotproductList">
									  				<div>
									  					<img v-bind:src="item.banner" width="100%"/>
									  				</div>
									  				<p>{{item.productName}}</p>
									  			</li>
									  		</ul>
					    				</div>
					    				<div class="card_Introduction">
					    					<p class="card_productTuiH1">企业介绍</p>
					    					<div class="card_IntroductionBox">
					    						<img :src="$store.state.cardWebsite.displayImgs" width="100%"/>
					    						<img src="http://page-bucket.oiaqye7985.com/img/1547187430358.jpg"  width="100%" v-if="$store.state.cardWebsite.displayImgs==null"/>
					    					</div>
					    					<div class="card_allproductListTxt">
					    						{{$store.state.cardWebsite.description}}
					    					</div>
					    				</div>
				    				</div>
			    				</div>
			    				<!--产品页面-->
			    				<div class="productSettingPage" v-show="activeName=='productSetting'">
			    					<el-carousel height="211px">
			    						<el-carousel-item v-if="$store.state.cardEmployee.banner.length==0">
								        	<img src="http://page-bucket.oiaqye7985.com/img/1547195940893.jpg" width="100%"/>
								      	</el-carousel-item>
								      <el-carousel-item v-for="(item,index) in $store.state.cardEmployee.banner" :key="item">
								        	<img v-bind:src="item" width="100%"/>
								      </el-carousel-item>
								    </el-carousel>
								    <div class="card_productListPage">
								  		<!--列表-->
								  		<ul class="card_productUlPage">
								  			<li v-if="$store.state.productList.length==0">
								  				<div class="img">
								  					<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/default-pic.jpg" width="100%"/>
								  				</div>
								  				<div class="text">
								  					<h1>产品名称</h1>
								  					<p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
								  				</div>
								  			</li>
								  			<li v-if="$store.state.productList.length==0">
								  				<div class="img">
								  					<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/default-pic.jpg" width="100%"/>
								  				</div>
								  				<div class="text">
								  					<h1>产品名称</h1>
								  					<p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
								  				</div>
								  			</li>
								  			<li v-if="$store.state.productList.length==0">
								  				<div class="img">
								  					<img src="http://page-bucket.oiaqye7985.com/wechat/mini-card/cardimg/default-pic.jpg" width="100%"/>
								  				</div>
								  				<div class="text">
								  					<h1>产品名称</h1>
								  					<p>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
								  				</div>
								  			</li>
								  			<li v-for="(item,index) in $store.state.productList" @click="productClick(item)">
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
			    						<div class="product_DetailsTxtHuo">
			    							今日有1000人查看
			    							<img src="http://page-bucket.oiaqye7985.com/img/1547177463900.png"/>
			    							<img src="http://page-bucket.oiaqye7985.com/img/1547177463900.png"/>
			    						</div>
			    						<div v-html="productVal.displayImgs"></div>
			    					</div>
			    				</div>
			    				<!--短视频-->
			    				<div class="minVideo" v-show="activeName=='minVideo'">
			    					<ul class="minVideoList">
			    						<li v-if="$store.state.videoList.length==0" class="minVideoShow">
			    							<img src="http://page-bucket.oiaqye7985.com/img/1547171341805.jpg" width="100%"/>
			    						</li>
			    						<li v-if="$store.state.videoList.length==0"  class="minVideoShow">
			    							<img src="http://page-bucket.oiaqye7985.com/img/1547171341805.jpg" width="100%"/>
			    						</li>
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
			    			</el-scrollbar>
			    		</div>
					</div>
			    </main>
			    <el-aside id="cardAside" style="width:400px">
					<!--名片设置与产品编辑-->
					<el-scrollbar style="height: 100%;overflow-x: hidden;">
						<cardSetting v-show="activeName=='cardSetting'"></cardSetting>
						<productSetting v-show="activeName=='productSetting'"></productSetting>
						<minVideo v-show="activeName=='minVideo'"></minVideo>
					</el-scrollbar>
			    </el-aside>
		  	</el-container>
		</el-container>
		<Recommend></Recommend>
		<cardpreview></cardpreview>
	</div>
</template>

<script>
import cardSetting from"@/components/smartCard/smartCardTemplate/cardAssembly/cardSetting"
import productSetting from"@/components/smartCard/smartCardTemplate/cardAssembly/productSetting"
import Recommend from"@/components/smartCard/smartCardTemplate/cardAssembly/Recommend"
import cardpreview from"@/components/smartCard/smartCardTemplate/cardAssembly/cardpreview"
import minVideo from"@/components/smartCard/smartCardTemplate/cardAssembly/minVideo"
export default {
  data() {
    return {
      company: ['1'],
      banner:this.$store.state.cardEmployee.banner,
      activeName:"cardSetting",
      productVal:[],
      disable:false
    }
  },
  computed: {

  },
  components:{
    	productSetting,
    	cardSetting,
    	Recommend,
    	cardpreview,
    	minVideo
  },
  watch: { 

   },
	created(){
		console.log("推荐推荐")
		console.log( this.$store.state.HotproductList)
		 if(this.$store.state.loginData.channel_id!=undefined){
			this.UserName=this.$store.state.loginData.sub_company
		}else{
			this.$router.push({path: '/', name: 'home',})
			return false
		}
		this. getWebsite()
	},
	mounted(){
		
		console.log(this.$store.cardData)
	},
	methods:{
		handleClick(tab, event) {
        	console.log(this.activeName);
       },
       docVal(val){
       	let para=document.createElement("p");
		para.innerHTML=val.displayImgs
       	return para.innerText
       },
       productClick(val){
       	console.log(val);
       	this.productVal=val;
       	this.activeName="productDetails"
       },
       idfunc(index){
       	return "minVideo"+index
       },
       idfuncDiv(index){
       	return "minVideoMack"+index
       },
       clickVidel(index){
       	var video= document.getElementById("minVideo"+index);
		console.log(video)
		$("#minVideoMack"+index).hide()
		video.play()
		console.log(video.paused)
//    	video
       },
       videoPlay(index){
       	var video= document.getElementById("minVideo"+index);
       	video.pause();
       	$("#minVideoMack"+index).show()
       },
       //提交
       submit(val){
       		if(this.$store.state.cardEmployee.name==''){
       			this.$message({message: '请填写联系人名称',type: 'warning'});
       			 return false; 
       		};
//     		if(this.$store.state.cardEmployee.wechat==''){
//     			this.$message({message: '请填写微信号',type: 'warning'});
//     			 return false; 
//     		};
       		if(!(/^1[34578]\d{9}$/.test(this.$store.state.cardEmployee.telphone))){ 
		        this.$message({message: '手机号码有误，请重填',type: 'warning'});
		        return false; 
		    } 
//		    let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
//		    if(!re.test(this.$store.state.cardEmployee.email)){
//		        this.$message({message: '邮箱有误，请重填',type: 'warning'});
//		        return false; 
//		    } 
       		this.disable=true;
       		this.$xhr.post("/card/saveWebsite",{
				companyInfo:{
					channelId:this.$store.cardData.channelId,//渠道id
					cloginId:this.$store.cardData.cloginId,//生意帮id
					companyId:this.$store.cardData.customerId,//公司id
					orderId:this.$store.cardData.id,//订单id
					status:val,//订单状态
					authorId :this.$store.state.loginData.id,////作者id
					id:this.$store.state.cardWebsite.companyInfoid,//官网id
					company:this.$store.cardData.customerName,//公司名称
					companyLocation:this.$store.state.cardWebsite.companyLocation,//公司地址
					companyLogo:this.$store.state.cardWebsite.companyLogo,//公司logo
					description:this.$store.state.cardWebsite.description,//公司简介
					banner:this.$store.state.cardWebsite.displayImgs,//公司图片信息
					product:JSON.stringify(this.$store.state.HotproductArr),//推荐产品id数组
					productBanner:JSON.stringify(this.$store.state.cardEmployee.banner)//轮播图信息
				},
				employeeInfo:{
					id:this.$store.state.cardEmployee.employeeInfoid,//名片id
					cloginId:this.$store.cardData.cloginId,//生意帮id
					tdClientLoginId :this.$store.cardData.cloginId,//生意帮id
					companyId:this.$store.cardData.customerId,//公司id
					email:this.$store.state.cardEmployee.email,//邮箱
					name:this.$store.state.cardEmployee.name,//名称
					telphone:this.$store.state.cardEmployee.telphone,//电话
					wechat:this.$store.state.cardEmployee.wechat//微信
				}
		  	}).then((res)=>{
		  		console.log(res);
		  		if(val==-1){
		  			this.$message({message: '保存成功',type: 'success'});
		  			this.disable=false;
		  			 this.getWebsite()
		  		}else if(val==0){
		  			
  			        this.$alert('发布成功，待总部审核。', '提示', {
  			          center: true,
  			          showClose:false,
			          confirmButtonText: '确定',
			          callback: action => {
			          	this.$store.state.cardWebsite.companyLogo=null
			          	this.$store.state.cardWebsite.companyLocation=null
			          	this.$store.state.cardWebsite.description=null
			          	this.$store.state.cardWebsite.displayImgs=null
			          	this.$store.state.cardWebsite.companyInfoid=null
			          	this.$store.state.cardEmployee.telphone=""
			          	this.$store.state.cardEmployee.name=""
			          	this.$store.state.cardEmployee.email=""
			          	this.$store.state.cardEmployee.wechat=""
			          	this.$store.state.cardEmployee.banner=[]
			          	this.$store.state.cardEmployee.employeeInfoid=null
						this.$store.state.productList={};//产品列表
						this.$store.state.HotproductList=[];//推荐产品列表
						this.$store.state.HotproductArr-[];//推荐产品列表id
						this.$store.state.videoList=[];//视频列表
						this.$router.push({
				            path: 'home/homeCard', 
				            name: 'homeCard',
				        });
			          }
			        });
		  		}
		  		
			}).catch((res)=>{
				console.log(res);
				this.disable=false;
				this.$message({message: '系统错误',type: 'error'});
			}) 
      },
          	//获取视频接口
    	videoList(){
    		console.log(this.$store.cardData.customerId)
        	this.$xhr.post("/card/findVideoListByCriteria",{
				companyId:this.$store.cardData.customerId,//公司id
				pageNum:"1",
				pageSize:"100000" 
		  	}).then((res)=>{
		  		console.log(res);
		  		this.$store.state.videoList=res.data.videoList
			}).catch((res)=>{
				console.log(res)
			})         	
        
    	},
        //获取公司信息
        getWebsite(){
        	this.$xhr.get("/card/getWebsite",{
				params:{
					orderId:this.$store.cardData.id,//订单id 
					cloginId:this.$store.cardData.cloginId,//
				}
		  	}).then((res)=>{
		  		console.log("-------------------获取公司信息-------------------")
		  		console.log(res);
		  		if(res.data.companyInfo!=null&&res.data.employeeInfo!=null){
			  		this.$store.state.cardWebsite.companyLogo=res.data.companyInfo.companyLogo//公司logo
			  		this.$store.state.cardWebsite.companyLocation=res.data.companyInfo.companyLocation//公司地址
			  		this.$store.state.cardWebsite.description=res.data.companyInfo.description//公司简介
			  		this.$store.cardData.customerName=res.data.companyInfo.company//公司简介
			  		this.$store.state.cardWebsite.displayImgs=res.data.companyInfo.banner//公司图片
			  		this.$store.state.cardWebsite.companyInfoid=res.data.companyInfo.id//id
			  		this.$store.state.cardEmployee.telphone=res.data.employeeInfo.telphone//用户电话
			  		this.$store.state.cardEmployee.name=res.data.employeeInfo.name//用户电话
			  		this.$store.state.cardEmployee.email=res.data.employeeInfo.email//邮箱
			  		this.$store.state.cardEmployee.wechat=res.data.employeeInfo.wechat//微信
			  		this.$store.state.cardEmployee.employeeInfoid=res.data.employeeInfo.id//id
			  		console.log(JSON.parse(res.data.companyInfo.product))
			  		this.$store.state.HotproductArr=JSON.parse(res.data.companyInfo.product)//推荐产品
			  		this.$store.state.cardEmployee.banner=JSON.parse(res.data.companyInfo.productBanner)//banner	\
			  		this.disable=false;
			  		this.$store.state.cardDetailedDate=res.data
		  		}
				console.log("-------------********");
				console.log(this.$store.state.cardDetailedDate)
				this.videoList()
		  		
			}).catch((res)=>{
				console.log(res)
			})  
        },
      signout(){
        this.$confirm('退出前请先保存，否则将会丢失当前设计内容', '提示', {
          center: true,
          showClose:false,
           cancelButtonText: '取消退出',
           confirmButtonText: '确定退出',
          type: 'warning'
        }).then(() => {
          	this.$store.state.cardWebsite.companyLogo=null
          	this.$store.state.cardWebsite.companyLocation=null
          	this.$store.state.cardWebsite.description=null
          	this.$store.state.cardWebsite.displayImgs=null
          	this.$store.state.cardWebsite.companyInfoid=null
          	this.$store.state.cardEmployee.telphone=""
          	this.$store.state.cardEmployee.name=""
          	this.$store.state.cardEmployee.email=""
          	this.$store.state.cardEmployee.wechat=""
          	this.$store.state.cardEmployee.banner=[]
          	this.$store.state.cardEmployee.employeeInfoid=null
			this.$store.state.productList={};//产品列表
			this.$store.state.HotproductList=[];//推荐产品列表
			this.$store.state.HotproductArr-[];//推荐产品列表id
			this.$store.state.videoList=[];//视频列表
			console.log(this.$store.state.cardEmployee.name)
          	this.$router.push({
	            path: 'home/homeCard', 
	            name: 'homeCard',
	        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });      	
      }
	}
}
</script>

<style scoped> 
html,body,#app{
	height: 100%;
}
.el-header, .el-footer {
    background: #409eff;
    background: -webkit-linear-gradient(left,#409eff,#00b7fe);
    color: #fff;
    line-height: 60px;
}
.el-header a{color: #fff;}
.cardSee .el-aside {
    background-color: #edf1f5;
    transition: all .1s ease-out;
    overflow-y: auto;
    padding-top: 1px;
}

.el-menu{height: 100%;}
.el-menu-item{ color: #97999f;}
.cardMain .el-main {
  	background-color: #edf1f5;
  	padding: 0 !important;
  	overflow-x: hidden;
}
.el-container {
    height: 100%;
}

.logo{
	display: inline-block;
	width: 180px;
}
.cardSee .el-scrollbar__wrap{overflow-x: hidden;}
  .el-header a{text-decoration: none;}
.el-menu-item.is-active{background-color: #409eff !important;}
.card_abtsubmit {
	height: 60px;
	line-height: initial;
	display: flex;
	align-items: center;
	justify-content: flex-end;
}
.card_abtsubmit button{
	font-size: 14px;
	margin: 0 5px;
	color: #fff;
	background: none;
	cursor: pointer;
	padding: 5px 10px;
	border: 1px solid #fff;
	border-radius: 5px;
}
#cardAside{
	border-left: 1px solid rgb(227,228,230);
	background: #fff;
}
.cardSee{
	width: 375px;
	height: 750px;
	margin: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 1000;
	
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
.cardSee_headName{
	height: 76px;
	color: #fff;
	text-align: center;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	overflow: hidden;
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
	margin-top: 0px;
}
.card_productUlPage li{
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background: #fff;
	padding: 20px 0px;
	border-radius: 5px;
	border-bottom: 1px solid #eee;
	margin-left: 12px;
}
.card_productUlPage li .img{
	width: 210px;
	overflow: hidden;
	border-radius: 5px;
}
.card_allproductList {
	margin: 0;
	padding: 0;
}
.card_productUlPage li .text{
	width: 205px;
	padding-left: 10px;
	padding-top: 2px;
}
.card_productUlPage li .text *{
	font-size: 16px;
	margin: 0;
	padding: 0;
	font-weight: bold;
	
	color: rgb(52,52,52);
}
.card_productUlPage li .text h1{
	margin-bottom: 10px;
}
.card_productUlPage li .text p{
	font-size: 12px;
	height: 50px;
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
	display: block;
	margin-top: 15px;
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
	font-weight: bold;
	padding: 20px 8px 5px;
	color: rgb(52,52,52);
	font-size: 16px;
	margin: 0 5px;
}
.product_DetailsTxt{
	padding: 5px 12px;
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
	padding: 30px 14px 24px 20px;
	color: #fff;
}
.cardSettingPage .card_img .card_img_position .cardtop h1{
	padding: 0;
	margin: 0;
	font-size: 20px;
	font-weight: bold;
}
.cardSettingPage .card_img .card_img_position .cardtop p{
	font-size: 12px;
	padding: 0;
	margin: 0;
	padding-top: 10px;
}
.cardSettingPage .card_img .card_img_position .button{
	margin-top: 22px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}
.cardSettingPage .card_img .card_img_position .button p{
	padding: 0;
	margin: 0;
	padding-bottom: 6px;
}
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
	border-top: rgba(240,248,255,1) solid 5px;
	margin-top: 15px;
	
}
.company_informationList {
	margin-bottom: 10px;
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
	border-radius: 10px;
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
	color: #333;
	display: flex;
	flex-flow: column;
	justify-content: flex-end;
	padding: 5px;
	background-size: 100%;
	cursor: pointer;
}
.minVideoList li .videoBox_Mask>div{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.cardSettingPageBG{
	position: relative;
    top: -10px;
    left: -5px;
    width: 103%;
}
.cardSettingPagezIndex{
	position: relative;
	top: -105px;
}
.card_IntroductionBox{
	padding-top: 10px;
}
.product_DetailsTxtHuo{
	font-size: 14px;
    padding-bottom: 6px;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    color: #999;
    display: flex;
    align-items: center;
}
.product_DetailsTxtHuo img{
	width: 4%;
	position: relative;
	top: -9px;
	margin-left: 6px;
}
</style>