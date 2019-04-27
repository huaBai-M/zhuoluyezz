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
				      	{{scope.row.channel_name}}
				    </template>
			    </el-table-column>
		        <el-table-column label="类型">
			        <template slot-scope="scope">
				      	流量宝
				    </template>
			    </el-table-column>
		      	<el-table-column  prop="customer_name"  label="客户名称">
		       		<template slot-scope="scope">
				      	{{scope.row.customer_name}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="status"  label="状态">
		       		<template slot-scope="scope">
				      	<span v-if="scope.row.status==1">审核通过待制作</span>
	  					<span v-if="scope.row.status==3">制作完成待检查</span>
	  					<span v-if="scope.row.status==4" style="color: red;">检查不合格</span>
	  					<span v-if="scope.row.status==6">上线完成</span>
	  					<span v-if="scope.row.status==8" style="color: red;">到期下线</span>
	  					<span v-if="scope.row.status==9">检查完成待投放</span>
	  					<span v-if="scope.row.status==10">暂停投放</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="phone"  label="联系电话">
		       		<template slot-scope="scope">
				      	{{scope.row.phone}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="order_time"  label="下单时间">
		       		<template slot-scope="scope">
				      	{{scope.row.order_time | y}}
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="order_time"  label="上线时间">
		       		<template slot-scope="scope">
				      <span v-if="scope.row.online_time!=null">{{scope.row.online_time | y}}</span>
				      <span v-if="scope.row.online_time==null">---</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  label="操作" width="300">
		       		<template slot-scope="scope">
				      	<span v-if="scope.row.pageState==0"><el-button type="primary"  plain  size="mini" @click="makePage(scope.row)" >着陆页制作 </el-button></span>  
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
		<flowCustomer :checkedCities="checkedCities" :dataRow="dataRow" :checked="checked" @openbycustomer="openbycustomer" @shutbycustomer="shutbycustomer"></flowCustomer>
		<!---->
	</div>
</template>

<script>
import customerservice from"@/components/sonComponents/customerService"
import flowCustomer from"@/components/sonComponents/flowCustomer"
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
        { value: '1',label: '审核通过待制作'},
        { value: '3',label: '制作完成待检查'},
        { value: '4',label: '检查不合格'},
        { value: '6',label: '上线完成'},
        { value: '8',label: '到期下线'},
        { value: '9',label: '检查完成待投放'},
        { value: '10',label: '暂停投放'},
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
    	flowCustomer
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
			this.$xhr.post("/page/findHomePageData",{
				channel_id: channel_id,
				customer: customer,
				order_time:order_time,
				phone: phone,
				status: status,
				page: page
		  	}).then((res)=>{
		  		this.alldata=res.data.list
		  		this.count=res.data.count
			}).catch((res)=>{
				console.log(res)
			})
		},
		//制作页面
		makePage(data){
			this.$store.state.pageId=null;
			this.$store.state.moduleType=0;
			this.$store.state.pageDate=data;
			this.$xhr.get("/page/checkRecharge",{
				params: {cid:data.customer_id}
			}).then((res)=>{
				console.log(res)
				this.findPageByCustomer(data)
        	}).catch((res)=>{
        		if(res.status==500){
        			this.open('该用户未充值流量宝请先充值再进行制作页面','warning') 
        		}
			})
			
		},
		findPageByCustomer(data){
			this.$xhr.get("/page/findZtcExistPages",{
				params:{
					cid:data.customer_id
				}
			}).then((res)=>{
				if(res.data.length==0){
					this.$router.push({
			            path: '/home/flowpageSel', 
			            name: 'flowpageSel',
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
		//维护
		maintain(data){
			this.$store.state.pageId=null;
			this.$store.state.moduleType=0;
			this.$store.state.pageDate=data;
			this.$router.push({
	            path: '/home/flowMaintain', 
	            name: 'flowMaintain',
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
		//打开获取直通车页面
		openbycustomer(val){
			this.checked=val
		},
		shutbycustomer(val){
			this.checked=val
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