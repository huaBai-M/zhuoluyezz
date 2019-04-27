<template>
	<div class="container">

<div class="allTop">
	<div class="box_top clearfix">
		<span class="pull-left">
			首页/
			<a href="javascript:void(0)">总排行榜</a>
		</span>
		<a href="#/home/allmonth" class="pull-right"><<返回上一页</a>
	</div>
	<div class="box_middle">
		<!--<div class="box_search">
			<div class="box_input">
				<input type="text" v-bind:placeholder="placeholderdata" v-model.trim="description" @focus="boxsearch" @focusout="Nboxsearch"/>
				<span v-on:click="dataSearch"><img v-bind:src="img" /></span>
			</div>
		</div>-->
		<h1  v-show="!none">
			<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home2.jpg"/>
			总排行榜
		</h1>
		<div class="ihomeBoxM_table" v-show="!none">
				<el-table :data="topdata" >
			        <el-table-column  prop="headImg" label="排名">
				        <template slot-scope="scope">
					      	<div class="avatar" :style="imgBG(scope.$index)">	
					      		<p v-if="scope.row.headImg!=null" :style="imgSize(scope.$index)">
									<img v-bind:src="scope.row.headImg"/>
								</p>
								<p v-if="scope.row.headImg==null||scope.row.headImg==undefined||scope.row.headImg==''" :style="imgSize(scope.$index)">
									<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home6.jpg"/>
								</p>
					      	</div>
					    </template>
				    </el-table-column>
				    <el-table-column  prop="channelName" label="分公司">
				        <template slot-scope="scope">
					      	{{scope.row.channelName}}
					    </template>
				    </el-table-column>
				     <el-table-column  prop="authorName" label="着陆页名称">
				        <template slot-scope="scope">
					      	{{scope.row.authorName}}
					    </template>
				    </el-table-column>
				    <el-table-column  prop="description" label="员工">
				        <template slot-scope="scope">
					      	{{scope.row.description}}
					    </template>
				    </el-table-column>
				     <el-table-column  prop="createTime" label="制作时间"sortable>
				        <template slot-scope="scope">
					      	{{scope.row.createTime |y}}
					    </template>
				    </el-table-column>
				     <el-table-column  prop="changeRate" label="转化率" sortable>
				        <template slot-scope="scope">
					      	<span v-html="number(scope.row.changeRate)"></span>%
					    </template>
				    </el-table-column>
				     <el-table-column  prop="visitUrl" label="查看">
				        <template slot-scope="scope">
					      	<a v-bind:href="hrefFun(scope.row.visitUrl)" target="_blank">预览</a>
					    </template>
				    </el-table-column>
			    </el-table>
		</div>
		<div class="fenye clearfix" v-show="display">
		  	<el-pagination
		  	  @current-change="pagination"
			  layout="prev, pager, next"
			  :current-page="page"
			  :page-size="PageCount"
			  :total="total_page">
			</el-pagination>
		</div>
		<div class="alltop_none" v-show="none">
			<img src="@/assets/img/none.jpg"/>
			<p>暂未搜索到“{{description}}”的页面~</p>
		</div>
	</div>
</div>
		
	</div>
</template>

<script>
	export default {
		data () {
			return{
				topdata:[],
				page:1,
				display:true,
				none:false,
				img:"http://page-bucket.oiaqye7985.com/land-page/images/sou.jpg",
				PageCount:10,
				total_page:0,
				description:null,
				likeImg:"http://page-bucket.oiaqye7985.com/land-page/images/home/home4.png",
				placeholderdata:'请输入着落页名称，例如木地板'
			}
		},
		computed: {
		},
		watch: {  
		},
		created(){
			if(this.$store.state.loginData.channel_id==undefined){
		  			this.$router.push({path: '/', name: 'home',})
		  			return false
		  	}
			this.dataRequest(this.page)
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
  			imgBG(index){
  		 		 var style = {}
		        if (index== 0) {
		            style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top1.png) no-repeat 17px 0px'}
		        }else if(index==1){
		        	style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top2.png) no-repeat 17px 0px'}
		        }else if(index==2){
		        	style = {background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top3.png) no-repeat 17px 0px'}
		        }else{
		        }
		        if(this.page==1){
		        	 return style
		        }
		       
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
		        if(this.page==1){
		        	 return style
		        }
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
		        if(this.page==1){
		        	 return style
		        }
  		 	},
  		 	Newlike(index){
		 		this.$xhr.get("/pageShow/addThumb",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			path:this.topdata[index].path,
					 			pageId:this.topdata[index].pageId,
					 		}
				}).then((res)=>{
					this.topdata[index].thumb=true
					this.topdata[index].visitNum+=1
				})
  		 	},
  		 	NewlikeN(index){
  		 		this.$xhr.get("/pageShow/cancelThumb",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			path:this.topdata[index].path,
					 			pageId:this.topdata[index].pageId,
					 		}
				}).then((res)=>{
					if(this.topdata[index].visitNum>=0){
						this.topdata[index].visitNum-=1
						this.topdata[index].thumb=false
					}
				})
  		 	},
  		 	boxsearch(){
  		 		this.img="http://page-bucket.oiaqye7985.com/land-page/images/souh.jpg"
  		 		this.placeholderdata=''
  		 		$(".box_input").css("border-color","#1C7FFE")
  		 		$(".box_input span").css("border-color","#1C7FFE")
  		 	},
  		 	Nboxsearch(){
  		 		this.img="http://page-bucket.oiaqye7985.com/land-page/images/sou.jpg"
  		 		this.placeholderdata='请输入着落页名称，例如木地板'
  		 		$(".box_input").css("border-color","#666")
  		 		$(".box_input span").css("border-color","#666")
  		 	},
  		 	dataRequest(page){
	  		 	this.$xhr.get("/pageShow/topTotal",{
					 params: {
					 	authorId: this.$store.state.loginData.id,
					 	currentPage:page
					 }
				}).then((res)=>{
//					console.log(res)
					this.total_page=res.data.totalCount
					this.topdata=res.data.data
				})
  		 	},
  		 	dataSearch(){
  		 		this.topdata=[];
  		 		if(this.description==''||this.description==null){
  		 			this.dataRequest(1)
  		 			this.display=true
  		 			this.none=false
  		 			return false
  		 		}
  		 		this.$xhr.get("/pageShow/searchMore",{
					 params: {
					 	authorId: this.$store.state.loginData.id,
					 	description:this.description
					 }
				}).then((res)=>{
//					console.log(res.data.totalCount)
					if(res.data.totalCount==0){
						this.none=true
					}else{
						this.none=false
					}
					this.display=false
					this.topdata=[];
					this.topdata=res.data.data
				})
  		 	},
  		 	pagination(currentPage){
  		 		this.page=currentPage
      		 	this.dataRequest(this.page)
  		 	}
  		},
  		filters: {
		   y:function (input) {
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
<style type="text/css">
	.box_middle h1 a{
		font-size: 14px;
	    font-weight: bold;
	    color: #676767;
	}
	.box_middle h1 a:hover{
		color: #1c7ffe;
	}
</style>