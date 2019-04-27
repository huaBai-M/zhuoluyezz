<template>
	<div class="container">
	<div class="allTop">
		<div class="box_top clearfix">
			<span class="pull-left">
				首页/
			<a href="javascript:void(0)">全部制作</a>
			</span>
			<a href="#/home/allmonth" class="pull-right"><<返回上一页</a>
		</div>
		<div class="box_middle">
			<div class="row">
				<div class="col-lg-4">
				   <div class="form-horizontal">
				   <div class="form-group">
						    <label for="inputPassword3" class="col-sm-3 control-label">渠道：</label>
						    <div class="col-sm-9">
					  <el-select v-model="channel" filterable  placeholder="请选择渠道" style="display: block;">
					    <el-option
					      v-for="item in channelArr"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
					 </div>
					 </div>
				   </div>
				</div>
				<div class="col-lg-4">
				<div class="form-horizontal">
				   <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">员工信息：</label>
						    <div class="col-sm-8">
					<el-input placeholder="请输入员工信息" v-model.trim='personnel'></el-input>
					</div>
					</div>
					</div>
				</div>
				<div class="col-lg-4">
				<div class="form-horizontal">
				   <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">着陆页名称：</label>
						    <div class="col-sm-8">
					 <el-input placeholder="请输入着陆页名称 " v-model.trim='description'></el-input>
					 </div>
					 </div>
					 </div>
				</div>
				<div class="col-lg-4">
				<div class="form-horizontal">
				   <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">着陆页样式：</label>
						    <div class="col-sm-8">
					 <el-select v-model="mStyle" filterable  placeholder="请选择着陆页样式" style="display: block;">
					    <el-option
					      v-for="item in styleArr"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
					 </div>
					 </div>
					 </div>
				</div>
				<div class="col-lg-4">
				<div class="form-horizontal">
				   <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">客户名称：</label>
						    <div class="col-sm-8">
					 <el-input placeholder="请输入客户名称" v-model.trim='clientName'></el-input>
					 </div>
					 </div>
					 </div>
				</div>
				<div class="col-lg-4" style="padding-left:30px;">
					<el-button type="primary" v-on:click="dataSearch">查询</el-button>
				</div>
			</div>
			<h1  v-show="!none">
				<!--<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home3.jpg"/>-->
				全部制作
			</h1>
			<div class="ihomeBoxM_table " v-show="!none">
				<el-table :data="topdata" v-loading="loading">
			        <el-table-column  prop="headImg" label="排名">
				        <template slot-scope="scope">
					      	<div class="avatar">	
					      		<p v-if="scope.row.headImg!=null">
									<img v-bind:src="scope.row.headImg"/>
								</p>
								<p v-if="scope.row.headImg==null||scope.row.headImg==undefined||scope.row.headImg==''">
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
				     <el-table-column  prop="authorName" label="员工">
				        <template slot-scope="scope">
					      	{{scope.row.authorName}}
					    </template>
				    </el-table-column>
				    <!-- <el-table-column  prop="description" label="着陆页样式">
				        <template slot-scope="scope">
					      	{{scope.row.modelName}}
					    </template>
				    </el-table-column> -->
				    <el-table-column  prop="description" label="着陆页名称">
				        <template slot-scope="scope">
					      	{{scope.row.description}}
					    </template>
				    </el-table-column>
				    <el-table-column  prop="clientName" label="客户名称">
				        <template slot-scope="scope">
					      	<span v-html="NameEvent(scope.row.clientName,scope.row)"></span>
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
				     <el-table-column  prop="clickAmount" label="点击数" sortable>
				        <template slot-scope="scope">
					      {{scope.row.clickAmount}}
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
				<p>暂未搜索到查询的信息~</p>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
    	topdata:[],
		page:1,
		display:true,
		none:false,
		img:"http://page-bucket.oiaqye7985.com/land-page/images/sou.jpg",
		PageCount:10,
		total_page:0,
		description:null,//着落页名称
		likeImg:"http://page-bucket.oiaqye7985.com/land-page/images/home/home4.png",
		placeholderdata:'请输入着落页名称，例如木地板',
		channelArr:[{
			value:null,
			label:"=请选择="
		}],//渠道
		channel:null,
		styleArr:[],//模板
		mStyle:'',
		personnel:null,//员工
		loading:true,
		clientName:'',//客户名称
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
	},
	mounted(){
		console.log(this.$router.currentRoute.params.seeAll)
		this.channel=this.$router.currentRoute.params.seeAll
		this.channelFunction()
		this.modelFunction()
		this.dataSearch()
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
	 	dataSearch(){
	 		this.loading=true
	 		this.$xhr.get("/pageShow/searchMore",{
				 params: {
				 	authorId: this.$store.state.loginData.id,
				 	description:this.description,
				 	queryChannelId:this.channel,
                    personnel:this.personnel,
                    currentPage:this.page,
                    modelId:this.mStyle,
                    clientName:this.clientName
				 }
			}).then((res)=>{
				if(res.data.totalCount==0){
					this.none=true
				}else{
					this.none=false
				}
				this.total_page=res.data.totalCount
				this.display=true
				this.topdata=[];
				this.topdata=res.data.data
				this.loading=false
			})
	 	},
	 	//分页
	 	pagination(currentPage){
	 		this.page=currentPage
            this.dataSearch()
	 	},
	 	//文字加**
	 	NameEvent(html,row){
	 		if(row.channelId==this.$store.state.loginData.channel_id){
	 			return html
	 		}/*else if(this.$store.state.loginData.channlename=='北京中工信融科技有限公司'){
	 			return html
	 		}*/else{
	 			let htmlHead=html.slice(0,3);
	 			let htmlFoot=html.slice(html.length-2)
	 			return htmlHead+"***"+htmlFoot
	 		}
	 		
	 		
	 	},
	 	/*获取渠道**/
        channelFunction(){
			this.$xhr.get("/channel/findAll").then((res)=>{
				var data=res.data
				for(var i in data){
					this.channelArr.push({
						 value: data[i].id,
						 label: data[i].subCompany
					})
				}
    		})
      	},
      	/*获取模板**/
        modelFunction(){
			this.$xhr.get("/page/findModel").then((res)=>{
				var data=res.data
				for(var i in data){
					this.styleArr.push({
						 value: data[i].id,
						 label: data[i].modelName 
					})
				}
    		})
      	},
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
	.box_middle .row div {
		/*margin-bottom: 15px;*/
	}
</style>