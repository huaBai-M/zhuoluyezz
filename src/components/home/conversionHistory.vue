<template>
	<div class="container">
	<div class="allTop">
		<div class="box_top clearfix">
			<span class="pull-left">
				首页/
				<a href="javascript:void(0)">本月排行榜单</a>
			</span>
			<a href="#/home/conversionMonth" class="pull-right"><<返回上一页</a>
		</div>
		<div class="box_middle">
			<div class="box_search">
				<el-row>
					  <el-col :span="8">&nbsp;</el-col>
					  <el-col :span="8">
				  		<el-date-picker v-model="dateValue" type="month" placeholder="选择月份" @change="dataSearch" format="yyyy-MM" value-format="yyyy-MM">
						</el-date-picker> 
					  </el-col>
					  <el-col :span="8">
					  </el-col>
				</el-row>
			</div>
			<h1  v-show="!none">
				<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home2.jpg"/>
				历史排行
				<a href="javascript:void(0)" @click="excel" class="excel">获奖名单下载</a>
			</h1>
			<div class="ihomeBoxM_table" v-show="!none">
				<el-table :data="topdata" >
			         <el-table-column  label="排名" prop="orderNum" >
			        	<template slot-scope="scope" >
			        		<span :style="bgFunc(scope.row.orderNum)" class="bgFunc">
			        			{{scope.row.orderNum}}
			        		</span>
					    </template>
			        </el-table-column>
				    <el-table-column  prop="channelName" label="分公司">
				        <template slot-scope="scope">
					      	{{scope.row.channelName}}
					    </template>
				    </el-table-column>
				    <el-table-column  prop="clickAmount " label="点击数">
				        <template slot-scope="scope">
					      	{{scope.row.clickAmount }}
					    </template>
				    </el-table-column>
				     <el-table-column  prop="changeRate" label="转化率" sortable>
				        <template slot-scope="scope">
					      	<span v-html="number(scope.row.changeRate)"></span>%
					    </template>
				    </el-table-column>
				     <el-table-column  prop="visitUrl" label="查看">
				        <template slot-scope="scope">
					      	<a href="javascript:void(0)" @click="seeAll(scope.row.channelId,scope.row.channelName)">查看</a>
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
	import {TIMEOUT, ERR_OK, baseURL, STATUS} from '@/assets/js/config'
export default {
  data() {
    return {
    	topdata:[],
		page:1,
		display:true,
		none:false,
		PageCount:10,
		total_page:0,
		description:'',
		dateValue:null,
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
		this.prevMonth()
	},
	mounted(){
		
	},
	methods:{
		excel(){
			let actoinURL=baseURL.dev+'/pageShow/downChannelTopHistoryExcel?'+$.param({
			 	month :this.dateValue+'-01' ,
			 })
			this.downloadFileGet(actoinURL)
		},
	  	number(val){
			var val=val*100
			if(val!=0){
				return val.toFixed(2)
			}else{
				return val
			}
		},
	 	dataSearch(){
	 		console.log(this.dateValue+'01')
	 		this.$xhr.get("/pageShow/findChannelTopHistory",{
				 params: {
				 	month:this.dateValue+'-01',
				 	currPage:this.page
				 }
			}).then((res)=>{
				console.log(res)
				this.topdata=res.data.data
				this.total_page=res.data.totalCount
			})
	 	},
	 	pagination(currentPage){
	 		this.page=currentPage
  		 	this.dataSearch()
	 	},
 	    seeAll(index,val){
	 		this.$router.push({
	            path: '/home/HistorySjPages', 
	            name: 'HistorySjPages',
	            params:{
	            	seeAll:index,
	            	seeAllT:val,
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
	 	souchannel(val){
	 		this.dataSearch(val)
	 	},
 		downloadFileGet(actoinURL){
		  let a = document.createElement('a');
		  let body = document.getElementsByTagName('body')[0]
		  body.appendChild(a);
		  a.setAttribute('style','display:none');
		  a.setAttribute('href',actoinURL); //下载文件的请求路径
		  a.click();
		  body.removeChild(a)
		},
	 	//获得上一月
		prevMonth() {
			var date = new Date;
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			if(month != 1) {
				month = month - 1;
				month = (month < 10 ? "0" + month : month);
			} else {
				month = 12;
				year = year - 1;
			}
			this.dateValue = (year.toString() + '-' + month.toString());
			this.dataSearch()
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
	.box_search .el-date-editor.el-input, .el-date-editor.el-input__inner{width: 320px;}
	.excel{
		float: right;
		font-size: 14px;
	    font-weight: bold;
	    color: #676767;
		line-height: 50px;
	}
	.box_search .excel:hover{color: #1c7ffe;}
</style>