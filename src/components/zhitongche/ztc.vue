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
		        <el-table-column  prop="channel_name" label="渠道类型">
			        <template slot-scope="scope">
				      	{{scope.row.subCompany}}
				    </template>
			    </el-table-column>
		        <el-table-column prop="Type" label="类型">
			        <template slot-scope="scope">
				      		<span v-if="scope.row.webType=='A'">直通车</span>
		  					<span v-if="scope.row.webType=='D'">云商宝推广版</span>
		  					<span v-if="scope.row.webType=='E'">本地通</span>
		  					<span v-if="scope.row.webType=='F'">生意帮</span>
		  					<span v-if="scope.row.webType=='G'">全网通</span>
				    </template>
			    </el-table-column>
		      	<el-table-column  prop="customer_name"  label="客户名称">
		       		<template slot-scope="scope">
				      	{{scope.row.customerName}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="status"  label="状态">
		       		<template slot-scope="scope">
				      	<span v-if="scope.row.status2==7">审核通过待制作</span>
	  					<span v-if="scope.row.status2==4">检查通过待提词</span>
	  					<span v-if="scope.row.status2==3">制作完成待检查</span>
	  					<span v-if="scope.row.status2==5" style="color: red;">审核不通过</span>
	  					<span v-if="scope.row.status2==6">投放中</span>
	  					<span v-if="scope.row.status2==8">百度审核待确认</span>
	  					<span v-if="scope.row.status2==9">提词通过待投放</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="phone"  label="联系电话	">
		       		<template slot-scope="scope">
				      	{{scope.row.telphone}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="order_time"  label="下单时间">
		       		<template slot-scope="scope">
				      	{{scope.row.orderTime}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  label="操作" width="300">
		       		<template slot-scope="scope">
				      	<span v-if="scope.row.pageState==0"><el-button type="primary"  plain  size="mini"  @click="makePage(scope.row)">着陆页制作 </el-button></span>
				      	<span v-if="scope.row.pageState==1">
				      		<el-button type="primary"  plain  size="mini" @click="makePage(scope.row)">再制作 </el-button>
		  					<el-button type="primary" plain size="mini" @click="service(scope.row)">在线客服  </el-button>
			  				<el-button type="primary" plain size="mini" @click="maintain(scope.row)">维护 </el-button>
				      	</span>
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
		<!--在线客服-->
		<customerservice :customerData="customerData" :customerval="customerval" @customerS = "customerS" @NcustomerS="NcustomerS"></customerservice>
		<!---->
		<!--选择流量卡页面-->
		<bycustomer :checkedCities="checkedCities" :dataRow="dataRow" :checked="checked" @openbycustomer="openbycustomer" @shutbycustomer="shutbycustomer"></bycustomer>
		<!---->
	</div>
</template>

<script>
import customerservice from"@/components/sonComponents/customerService"
import bycustomer from"@/components/sonComponents/bycustomer"
export default {
  data() {
    return {
    	name:null,
    	channel_id:31,
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
	        { value: '7',label: '审核通过待制作'},
	        { value: '3',label: '制作完成待检查'},
	        { value: '4',label: '检查通过待提词'},
	        { value: '5',label: '审核不通过'},
	        { value: '9',label: '提词通过待投放 '},
	        { value: '8',label: '百度审核待确认'},
	        { value: '6',label: '投放中'},
    	],
    	customerData:false,
    	customerval:[],
    	checkedCities:[],//流量宝页面
    	checked:false,//
    	dataRow:[]
    }
  },
  components:{
    	customerservice,
    	bycustomer
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
		if(this.$router.currentRoute.params.dataTop!=undefined){
			this.channel_id=this.$router.currentRoute.params.dataTop.channel_id
			this.customer=this.$router.currentRoute.params.dataTop.customer
			this.order_time=this.$router.currentRoute.params.dataTop.order_time
			this.phone=this.$router.currentRoute.params.dataTop.phone
			this.status=this.$router.currentRoute.params.dataTop.status
			this.page=this.$router.currentRoute.params.dataTop.page
		}
		this.channel_id=this.$store.state.loginData.channel_id
//		this.channel_id=31
		if(this.channel_id==31){
			this.channelFun()
			this.channel_idStatus=true
			if(this.$router.currentRoute.params.dataTop!=undefined){
				this.channel=this.$router.currentRoute.params.dataTop.channel
			}else{
				this.channel=31
			}
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
			this.$xhr.post("/ztcPage/findOrderByCriteria",{
				channelId: channel_id,
				customerName: customer,
				orderTime:order_time,
				telphone: phone,
				status2: status,
				currentPage: page
		  	}).then((res)=>{
		  		this.alldata=res.data.data
		  		this.count=res.data.count
			}).catch((res)=>{
				console.log(res)
			})
		},
		//维护
		maintain(data){
			this.$store.state.pageDate=data;
			this.$router.push({
	            path: '/home/ztcMaintain', 
	            name: 'ztcMaintain',
	            params:{
	            	data:data,
	            	dataTop:{
	            		channel_id: this.channel_id,
	            		channel: this.channel,
						customer: this.customer,
						order_time:this.order_time,
						phone: this.phone,
						status: this.status,
						page: this.page
	            	}
	            }
	        })
		},
		//制作页面
		makePage(data){
			this.$store.state.pageDate=data;
			this.ztcfindKeyWord(data)
		},
		//在线客服
		service(data){
			this.customerval=data
			this.customerData=true
		},
		//提交
		customerS(val){
			this.customerData=val
		},
		//取消
		NcustomerS(val){
			this.customerData=val
		},
		//判断直通车是否有词
		ztcfindKeyWord(data){
    		this.$xhr.get("/ztcPage/findKeyWords",{
				params: {
					networkId:this.$store.state.pageDate.id
				}
			}).then((res)=>{
				if(res.data.length==0){
					this.open('投放词为空，请先添加投放词','warning')
					return false
					
				}else{
					this.findPageByCustomer(data)
				}
			}).catch((res)=>{
				console.log(res)
			})
    	},
		//获取流量宝页面
		findPageByCustomer(data){
			this.$xhr.post("/ztcPage/findPageByCustomer",{
				cid:data.cid
			}).then((res)=>{
				if(res.data.length==0){
					this.$store.state.pageId=null
					this.$router.push({
			             path: '/home/ztcpageSel', 
		            	 name: 'ztcpageSel',
			        })
					return false
				}
				this.checkedCities=[]
				for(var i in res.data){
		  	  		this.checkedCities.push({
		  	  			id:res.data[i].id,//模板ID
		  	  			modelName:res.data[i].description, //模板名称
		  	  		})
		  	  	}
				this.dataRow=data
				this.checked=true
			})
		},
		//打开获取流量宝页面
		openbycustomer(val){
			this.checked=val
		},
		shutbycustomer(val){
			this.checked=val
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

<style>
</style>