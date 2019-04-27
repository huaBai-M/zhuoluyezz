<template>
	<div class="container Card">
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
						    <label for="tel" class="col-sm-4 control-label">联系电话：</label>
						    <div class="col-sm-8">
						     <el-input placeholder="电话" v-model.trim='phone'></el-input>
						    </div>
						 </div>
					</div>
				</div>
				<!---->
				<div class="col-lg-4 col-lg-12">
					<div class="form-horizontal">
					    <div class="form-group">
						    <label for="inputPassword3" class="col-sm-4 control-label">状态：</label>
						    <div class="col-sm-8">
					    	  	<el-select v-model="status" placeholder="请选择" style="display: block;">
								    <el-option
								    	style="width: 100%;"
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
						    <label for="time" class="col-sm-4 control-label">下单时间：</label>
						    <div class="col-sm-8" id="timebox">
						      <div class="block">
								     <el-date-picker
								      v-model="order_time"
								      type="daterange"
								      value-format="yyyy-MM-dd HH:mm:ss"
								      :default-time="['00:00:00', '00:00:00']"
								      range-separator="至"
								      start-placeholder="开始日期"
								      end-placeholder="结束日期">
								    </el-date-picker>
								  </div>
						    </div>
						 </div>
					</div>
				</div>
				<!---->
				<div class="col-lg-2">
					<el-button type="primary" v-on:click="query">查询</el-button>
				</div>
			</div>
		</div>
		<!--表格区-->
		<div class="tablebox">
		    <el-table :data="alldata" stripe style="width: 100%;text-align: center;">
		        <el-table-column type="index"></el-table-column>
		        <el-table-column  prop="channelName" label="渠道">
			        <template slot-scope="scope">
				      	{{scope.row.channelName}}
				    </template>
			    </el-table-column>
		        <el-table-column label="类型">
			        <template slot-scope="scope">
				      	智能名片
				    </template>
			    </el-table-column>
		      	<el-table-column  prop="customerName"  label="客户名称">
		       		<template slot-scope="scope">
				      	{{scope.row.customerName}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="status"  label="状态">
		       		<template slot-scope="scope">
				      	<!--<span v-if="scope.row.status=='0'">下单待审核</span>-->
				      	<span v-if="scope.row.status=='1'">审核通过待制作</span>
				      	<span v-if="scope.row.status=='2'">审核不通过</span>
				      	<span v-if="scope.row.status=='3'">制作完成待审核</span>
				      	<span v-if="scope.row.status=='4'">上线完成</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="truePhone"  label="联系电话">
		       		<template slot-scope="scope">
				      	{{scope.row.truePhone}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="createTime"  label="下单时间">
		       		<template slot-scope="scope">
				      	{{scope.row.createTime | y}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  label="操作" width="300">
		       		<template slot-scope="scope">
				      	<el-button type="primary"  plain  size="mini" v-if="scope.row.status=='1'" @click="cardMake(scope.row)">名片制作 </el-button>
				      	<el-button type="primary"  plain  size="mini" v-else="scope.row.status=='3'||scope.row.status=='4'||scope.row.status=='2'" @click="cardMaintain(scope.row)">维护 </el-button>
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
    	channel:null,
    	channelArr:[],
    	alldata:[],
    	statusArr:[
    	{ value: null,label: '==请选择=='},
//      { value: '0',label: '下单待审核'},
        { value: '1',label: '审核通过待制作'},
        { value: '2',label: '审核不通过'},
        { value: '3',label: '制作完成待审核'},
        { value: '4',label: '上线完成'},
    	],
    	customerData:false,
    	customerval:[],
    	checkedCities:[],//流量宝页面
    	checked:false,//
    	dataRow:[]
    }
  },
  components:{
  },
  computed: {
  	
  },
	watch: {
		
  },
    created(){
    	console.log(this.$store.state.cardState)
		if(this.$store.state.loginData.channel_id!=undefined){
			this.name=this.$store.state.loginData.sub_company
		}else{
			this.$router.push({path: '/', name: 'home',})
			return false
		}
		this.channel_id=this.$store.state.loginData.channel_id
		if(this.channel_id==31){
			this.channelFun()
			if(this.$router.currentRoute.params.dataTop!=undefined){
				this.channel=this.$router.currentRoute.params.dataTop.channel
			}else{
				this.channel=31
			}
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
			let createTimeStart=null;
			let createTimeEnd=null;
			if(order_time!=null&&order_time!=undefined&&order_time!=""){
				createTimeStart=order_time[0]
				createTimeEnd=order_time[1]
			}
			this.$xhr.post("/card/findOrderList",{
				channelId: channel_id,
				customerName: customer,
				phone: phone,
				status: status,
				pageNum: page,
				createTimeStart:createTimeStart,
				createTimeEnd:createTimeEnd,
		  	}).then((res)=>{
		  		console.log(res)
		  		this.alldata=res.data.orderList
		  		this.count=res.data.totalCount
			}).catch((res)=>{
				console.log(res)
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
		//制作
		cardMake(data){
			this.$store.cardData=data;
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
			console.log(this.$store.state.videoList)
			this.$router.push({
	            path: '/home/cardSel', 
	            name: 'cardSel',
	        })
		},
		//维护
		cardMaintain(data){
			this.$store.cardData=data;
			console.log(this.$store.cardData)
			this.$router.push({
	            path: '/home/maintain', 
	            name: 'maintain',
	        })
		},
		open(val,type) {
	        this.$message({
	          duration:1000,
	          message:val,
	          type: type
	        });
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

<style scoped>
	.Card .el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{
		width: 100% !important;
	}
	.Card .el-date-editor .el-range-separator{
		width: 10%;
	}
	.Card .el-date-editor .el-range-input{
		font-size: 12px;
	}
</style>