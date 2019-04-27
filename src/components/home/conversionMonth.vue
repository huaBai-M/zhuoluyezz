<template>
	<div class="container">
	<div class="allTop">
		<div class="box_top clearfix">
			<span class="pull-left">
				首页/
				<a href="javascript:void(0)">本月排行榜单</a>
			</span>
			<a href="#/" class="pull-right"><<返回上一页</a>
		</div>
		<div class="box_middle">
			<div class="box_search">
				<el-row>
					  <el-col :span="8">&nbsp;</el-col>
					  <el-col :span="8">
				  		    <el-select v-model="channel" filterable  placeholder="请选择渠道" style="display: block;" @change="souchannel">
							    <el-option
							      v-for="item in channelArr"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
					  </el-col>
					  <el-col :span="8">
					  </el-col>
				</el-row>
			</div>
			<h1  v-show="!none">
				<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home2.jpg"/>
				本月排行
				<!--<a href="#" class="pull-right" style="margin-left:20px;">+总排排行</a>-->
				<a href="#/home/conversionHistory" class="pull-right">+历史排行</a>
			</h1>
			<div class="ihomeBoxM_table" v-show="!none">
				<el-table :data="topdata" >
			        <el-table-column  label="排名" prop="orderNum" >
			        	<template slot-scope="scope" >
			        		<span :style="bgFunc(scope.row.orderNum)" class="bgFunc" v-if="scope.row.clickAmount>=5000">
			        			{{scope.row.orderNum}}
			        		</span>
			        		<span v-else="scope.row.clickAmount>=5000">未达到评比条件</span>
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
				     <el-table-column  prop="changeRate" label="转化率" >
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
export default {
  data() {
    return {
    	topdata:[],
		page:1,
		display:true,
		none:false,
		PageCount:10,
		total_page:0,
		description:null,
		channel:null,
		channelArr:[{
			 value:null,
			 label: '=请选择='
		}],//渠道
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
		this.dataSearch(null)
		this.channelFunction()
	},
	mounted(){
		
	},
	methods:{
	  	number(val){
			var val=val*100
			if(val!=0){
				return val.toFixed(2)
			}else{
				return val
			}
		},
	 	dataSearch(channelId){
	 		this.$xhr.get("/pageShow/findChannelAll",{
				 params: {
				 	channelId:channelId ,
				 	currPage:this.page,
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
 	    seeAll(index,name){
	 		this.$router.push({
	            path: '/home/findSjPages', 
	            name: 'findSjPages',
	            params:{
	            	seeAll:index,
	            	name:name
	            }
	        })
	 	},
	 	souchannel(val){
	 		this.dataSearch(val)
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