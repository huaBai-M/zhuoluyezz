<template>
	<div class="container">
	<div class="ihome">
		  <!--<router-link to="/home/flowTop">flowTop</router-link>
    	  <router-link to="/home/ztcTop">ztcTop</router-link>
		<router-view/>
		<router-link to="/home/allmonth">/home/allmonth</router-link>
    	  <router-link to="/home/allNew">/home/allNew</router-link>-->
    	 <div class="ihomeHead">
         	<span>
         		我的工作
         	</span>
         	<a href="#/home/flowTop" v-bind:class="{ihomeHeadA:isihomeHeadA}" @click="active">流量宝<i></i></a>
         	<a href="#/home/ztcTop" v-bind:class="{ihomeHeadA:!isihomeHeadA}" @click="active">直通车<i></i></a>
         </div>
         <div class="ihomeBox" >
         	<div class="ihomeBoxH">
         		<router-view></router-view>
         	</div>
         	<div class="ihomeBoxM clearfix" v-if="companyTypeIF">
         		<div class="pull-left ihomeBoxM_left">
         			<h1 class="clearfix">
						<span class="pull-left">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home2.jpg"/>
							本月排行榜单TOP10
						</span>
						<a href="#/home/allmonth" class="pull-right">+更多</a>
					</h1>
					<div class="ihomeBoxM_table ">
						<table border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr>
									<th>排名</th>
									<th>分公司</th>
									<th>员工</th>
									<th>着陆页名称</th>
									<th>制作时间</th>
									<th>转化率</th>
									<th>查看</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) in top10" v-if="index<=9">
									<th>
										<div class="avatar" :style="imgBG(index)">
											<p v-if="item.headImg!=null" :style="imgSize(index)">
												<img v-bind:src="item.headImg"/>
											</p>
											<p v-if="item.headImg==null||item.headImg==undefined||item.headImg==''" :style="imgSize(index)">
												<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home6.jpg"/>
											</p>
										</div>
									</th>
									<th>
										<div>
											{{item.channelName}}
										</div>
									</th>
									<th>
										<div>
											{{item.authorName}}
										</div>
									</th>
									<th>
										<div>
											{{item.description }}
										</div>
									</th>
									<th>
										<div>
											{{item.createTime | data}}
										</div>
									</th>
									<th>
										<div>
											<span v-html="number(item.changeRate)"></span>%
										</div>
									</th>
									<th>
										<div>
											<a v-bind:href="hrefFun(item.visitUrl)" target="_blank">预览</a>
										</div>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
         		</div>
         		<!---->
         		<div class="pull-right ihomeBoxM_right">
					<h1 class="clearfix">
						<span class="pull-left">
							<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home3.jpg"/>
							本月渠道排行榜TOP10
						</span>
						<a href="#/home/conversionMonth" class="pull-right">+更多</a>
					</h1>
					<div class="ihomeBoxM_table allnew">
						<table border="0" cellspacing="0" cellpadding="0">
							<thead>
								<tr>
									<th>排名</th>
									<th>分公司</th>
									<th>转化率</th>
									<th>点击数</th>
									<th>查看</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) in new10">
									<th class="text-center">
										<div class="avatarTT">
											<span :style="bgFunc(index+1)" class="bgFunc">{{index+1}}</span>
										</div>
									</th>
									<th class="text-center">
										{{item.channelName}}
									</th>
									<th class="text-center">
										<span v-html="number(item.changeRate)"></span>%
									</th>
									<th class="text-center">
										{{item.clickAmount }}
									</th>
									<th class="text-center"> 
										<a href="javascript:void(0)" @click="seeAll(index)">查看</a>
									</th>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
         	</div>
         </div>
	</div>
	</div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
    	isihomeHeadA:true,
		top10:[],
		new10:[],
		likeImg:"http://page-bucket.oiaqye7985.com/land-page/images/home/home4.png",
		data:null,
		authorId:null,
		companyTypeIF:false,
		
    }
  },
  computed: {
  	 getUserIcons() {
		 return this.$store.state.loginData.channel_id
	 },
	 getUserTypeIF() {
		 return this.$store.state.loginData.channel_type
	 }
  },
	watch: {
		getUserIcons(newValue, oldValue) {  
			console.log(newValue)
		      this.topdata()
		},
		getUserTypeIF(newValue){
			if(newValue!='B'){
				this.companyTypeIF=true;
			}
		}
	},
	created(){
		if(this.$store.state.loginData.channel_id!=undefined){
				if(this.$store.state.loginData.channel_type!='B'){
					this.companyTypeIF=true;
				}
		      	this.topdata()
		}
	},
	mounted(){
		
	},
	methods:{
			hrefFun(hre){
				let Url=hre
				Url=Url.replace("-D","")
				return Url
			},
		  	number(val){
  				var val=val*100
  				if(val!=0){
  					return val.toFixed(2)
  				}else{
  					return val
  				}
  			},
  		 	active(){
  		 		if(this.isihomeHeadA){
  		 			this.isihomeHeadA=false
  		 		}else{
  		 			this.isihomeHeadA=true
  		 		}
  		 	},
  		 	imgBG(index){
  		 		 var style = {}
		        if (index== 0) {
		            style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top1.png)'}
		        }else if(index==1){
		        	style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top2.png)'}
		        }else if(index==2){
		        	style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top3.png)'}
		        }else{
		        }
		        return style
  		 	},
  		 	imgSize(index){
  		 		var style = {}
		        if (index== 0) {
		            style = {width: '50px',height:'50px'}
		        }else if(index==1){
		        	style = {width: '50px',height:'50px'}
		        }else if(index==2){
		        	style = {width: '50px',height:'50px'}
		        }else{
		        }
		        return style
  		 	},
  		 	imgSizet(index){
  		 		var style = {}
		        if (index== 0) {
		            style = {width: '50px',height:'50px'}
		        }else if(index==1){
		        	style = {width: '50px',height:'50px'}
		        }else if(index==2){
		        	style = {width: '50px',height:'50px'}
		        }else{
		        }
		        return style
  		 	},
  		 	like(index){
		 		this.$xhr.get("/pageShow/addThumb",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			path:this.top10[index].path,
					 			pageId:this.top10[index].pageId,
					 		}
				}).then((res)=>{
					this.top10[index].thumb=true
					this.top10[index].visitNum+=1
				})
  		 	},
  		 	Nlike(index){
		 		this.$xhr.get("/pageShow/cancelThumb",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			path:this.top10[index].path,
					 			pageId:this.top10[index].pageId,
					 		}
				}).then((res)=>{
					this.top10[index].thumb=false
					if(this.top10[index].visitNum!=0){
						this.top10[index].visitNum-=1
					}
					
				})
  		 	},
  		 	Newlike(index){
		 		this.$xhr.get("/pageShow/addThumb",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			path:this.new10[index].path,
					 			pageId:this.new10[index].pageId,
					 		}
				}).then((res)=>{
					this.new10[index].thumb=true
					this.new10[index].visitNum+=1
				})
  		 	},
  		 	NewlikeN(index){
  		 		this.$xhr.get("/pageShow/cancelThumb",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			path:this.new10[index].path,
					 			pageId:this.new10[index].pageId,
					 		}
				}).then((res)=>{
					if(this.new10[index].visitNum>=0){
						this.new10[index].visitNum-=1
						this.new10[index].thumb=false
					}
				})
  		 	},
  		 	seeAll(index){
  		 		this.$router.push({
		            path: '/home/findSjPages', 
		            name: 'findSjPages',
		            params:{
		            	seeAll:this.new10[index].channelId,
		            	name:this.new10[index].channelName
		            }
		        })
  		 	},
  		 	bgFunc(index){
		 		let style={}
		 		if(index==1){
		 			 style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/icon_medal_01.png)',color:'#fff',fontSize:'18px'}
		 		}else if(index==2){
		 			style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/icon_medal_02.png)',color:'#fff',fontSize:'18px'}
		 		}else if(index==3){
		 			style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/icon_medal_03.png)',color:'#fff',fontSize:'18px'}
		 		}else{
		 			style = {width: '25px',height:'25px',background:'#ccc',lineHeight:'25px',borderRadius:"50%",color:'#999'}
		 		}
		 		return style
		 	},
  		 	//获取排行数据
  		 	topdata(){
				this.$xhr.get("/pageShow/top10",{
					 params: {authorId: this.$store.state.loginData.id}
				}).then((res)=>{
					this.top10=res.data
				})
				this.$xhr.get("/pageShow/findChannelTop10",{
					 params: {authorId: this.$store.state.loginData.id}
				}).then((res)=>{
					this.new10=res.data
				})
  		 	},
	},
	filters: {
		   data:function (input) {
		       var d = new Date(input);
		       var year = d.getFullYear();
		       var month = d.getMonth() + 1;
		       var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
		       var hour = d.getHours();
		       var minutes = d.getMinutes();
		       var seconds = d.getSeconds();
		       return  year+ '-' + month + '-' + day ;
		   }
		},
}
</script>

<style>
	.avatarTT{
		height: 62px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ihomeBoxM_table{
		color: #a1a1a1;
	}
	.ihomeBoxM_table a{
		color: #a1a1a1;
	}
	.ihomeBoxM_table a:hover{
		color: #1D7EFE;
	}
</style>