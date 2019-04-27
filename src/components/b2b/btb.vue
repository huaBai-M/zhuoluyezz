<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="index_title"><span class="index_span"></span><span class="companyName"></span>{{name}}</p>
			</div>
		</div>
		<!--输入框-->
		<div class="input">
			<div class="row">
				<div class="col-lg-4 col-lg-12" v-if="channel_idStatus">
					<div class="form-horizontal">
					    <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">渠道：</label>
						    <div class="col-sm-8">
					    	  	<el-select v-model="channel" filterable  placeholder="请选择" style="display: block;">
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
				<!---->
				<div class="col-lg-4 col-lg-12">
					<div class="form-horizontal">
					    <div class="form-group">
						    <label for="name" class="col-sm-4 control-label  CustomerName">客户名称：</label>
						    <div class="col-sm-8">
						    	<el-input placeholder="客户名称 " v-model.trim='customer'></el-input>
						    </div>
						 </div>
					</div>
				</div>
				<!---->
				<div class="col-lg-4 col-lg-12">
					<div class="form-horizontal">
					    <div class="form-group">
						    <label for="tel" class="col-sm-4 control-label">关键词：</label>
						    <div class="col-sm-8">
						     <el-input placeholder="关键词" v-model.trim='phone'></el-input>
						    </div>
						 </div>
					</div>
				</div>
				<!---->
				<div class="col-lg-4 col-lg-12">
					<div class="form-horizontal">
					    <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">开通状态：</label>
						    <div class="col-sm-8">
					    	  	<el-select v-model="status" placeholder="请选择" style="display: block;">
								    <el-option
								      v-for="item in statusArr"
								      :key="item.value"
								      :label="item.label"
								      :value="item.value">
								    </el-option>
							    </el-select>
						    </div>
						 </div>
					</div>
				</div>
				<!---->
				<div class="col-lg-4 col-lg-12">
					<div class="form-horizontal">
					    <div class="form-group">
						    <label for="time" class="col-sm-4 control-label">上传时间：</label>
						    <div class="col-sm-8" id="timebox">
						      <div class="block">
								    <el-date-picker
								      v-model="order_time"
								      type="date"
								      value-format="yyyy-MM-dd"
								      placeholder="选择日期" style="display: block;width: 100%;" format="yyyy-MM-dd" >
								    </el-date-picker>
								  </div>
						    </div>
						 </div>
					</div>
				</div>
				<!---->
				<div class="col-lg-4">
					<el-button type="primary" v-on:click="query">查询</el-button>
				</div>
			</div>
		</div>
		<!--表格区-->
		<div class="tablebox">
		    <el-table :data="alldata" stripe style="width: 100%;text-align: center;">
		        <el-table-column type="index"></el-table-column>
		        <el-table-column  prop="channelName" label="渠道类型">
			        <template slot-scope="scope">
				      	{{scope.row.channelName}}
				    </template>
			    </el-table-column>
		        <el-table-column label="类型">
			        <template slot-scope="scope">
				      	B2B
				    </template>
			    </el-table-column>
		      	<el-table-column  prop="customerName"  label="客户名称">
		       		<template slot-scope="scope">
				      	{{scope.row.customerName}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="status"  label="状态">
		       		<template slot-scope="scope">
				      	<span v-if="scope.row.status==0">待审核</span>
				      	<span v-if="scope.row.status==1">已审核</span>
				      	<span v-if="scope.row.status==2">制作完成待检查</span>
	  					<span v-if="scope.row.status==3" style="color: red;">审核不通过</span>
	  					<span v-if="scope.row.status==4" >冻结</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="keyword"  label="关键词	">
		       		<template slot-scope="scope">
				      	{{scope.row.keyword}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="uploadDate"  label="上传时间">
		       		<template slot-scope="scope">
				      	{{scope.row.uploadDate | y}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  label="操作">
		       		<template slot-scope="scope">
				      		<el-button type="primary" plain @click="sendParams(scope.row)">制作 </el-button>
				    </template>
		      	</el-table-column>
		    </el-table>
		</div>
		<!--分页-->
		<div class="fenye clearfix">
		  	<el-pagination
		  		@current-change="pagination"
			   layout="prev, pager, next"
			   :current-page="page"
			   :page-size="10"
			   :total="count">
			</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
    	name:null,
    	channel_id:null,
    	channel_idStatus:false,
    	customer:null,
    	order_time:null,
    	phone:null,
    	status:null,
    	page:1,
    	count:0,
    	channel:31,
    	channelArr:[],
    	alldata:[],
    	statusArr:[
	  { value: null,label: '==请选择=='},
      { value: '0',label: '待审核'},
      { value: '1',label: '已审核'},
      { value: '2',label: '制作完成待检查'},
      { value: '3',label: '审核不通过'},
      { value: '4',label: '冻结'},
    	],
    	customerData:false,
    	customerval:[],
    }
  },
  computed: {
  	
  },
	watch: {  
		
  },
	created(){
		if(this.$store.state.loginData.channel_id!=undefined){
			this.name=this.$store.state.loginData.sub_company
		}else{
			this.$router.push({path: '/', name: 'home',})
			return false
		}
		
		this.channel_id=this.$store.state.loginData.channel_id
		if(this.channel_id==31){
			this.channelFun()
			this.channel_idStatus=true
			this.obtainData(this.channel,this.customer,this.order_time,this.phone,this.status,this.page)
		}else{
			this.obtainData(this.channel_id,this.customer,this.order_time,this.phone,this.status,this.page)
		}
		
	},
	mounted(){
		
	},
	methods:{
		query(){
			if(this.channel_id==31){
				this.obtainData(this.channel,this.customer,this.order_time,this.phone,this.status,this.page)
			}else{
				this.obtainData(this.channel_id,this.customer,this.order_time,this.phone,this.status,this.page)
			}
		},
		pagination(val){
			this.page=val
			if(this.channel_id==31){
				this.obtainData(this.channel,this.customer,this.order_time,this.phone,this.status,this.page)
			}else{
				this.obtainData(this.channel_id,this.customer,this.order_time,this.phone,this.status,this.page)
			}
		},
		obtainData(channel_id,customer,order_time,phone,status,page){
			this.$xhr.post("/b2bAD/findHomePageData",{
				channelId: channel_id,
				custName: customer,
				uploadTime:order_time,
				keyWord: phone,
				status: status,
				page: page
		  	}).then((res)=>{
//		  		console.log(res)
		  		this.alldata=res.data.infos
		  		this.count=res.data.totalCount
			}).catch((res)=>{
				console.log(res)
			})
		},
		sendParams(data){
			this.$router.push({
	            path: 'home/btbMake', 
	            name: 'btbMake',
	            params:{
	            	data:data,
	            }
	        })
		},
		//渠道
		channelFun(){
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

<style>
</style>