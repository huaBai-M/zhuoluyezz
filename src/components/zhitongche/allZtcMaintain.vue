<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="index_title" style="justify-content: space-between;">
					<span><span class="index_span"></span>{{name}}</span>
					<a href="javascript:void(0)" @click="flow">返回上一页</a>
				</p>
			</div>
		</div>
		<div class="input">
			<el-form :inline="true"  class="demo-form-inline">
				<el-form-item label=""></el-form-item>
				<el-form-item label=""></el-form-item>
				<el-form-item label="渠道" v-if="channel_idStatus">
				  		<el-select v-model="channel" filterable  placeholder="请选择" style="display: block;">
				    		<el-option
						      v-for="item in channelArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					  	</el-select>
				</el-form-item>
			    <el-form-item label="客户名称">
			    	<el-input placeholder="客户名称 " v-model.trim='customer'></el-input>
			    </el-form-item>
			    <el-form-item label="状态:">
			    	<el-select v-model="status" placeholder="请选择" style="display: block;">
					    <el-option
					      v-for="item in statusArr"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
				    </el-select>
			    </el-form-item>
			  <el-form-item>
			    <el-button type="primary" v-on:click="query">查询</el-button>
			  </el-form-item>
			</el-form>
		</div>
		<div class="tablebox">
			<el-table :data="data" stripe style="width: 100%;text-align: center;">
		        <el-table-column type="index"></el-table-column>
		        <el-table-column  prop="description" label="投放词名称">
			        <template slot-scope="scope">
				      	{{scope.row.description}}
				    </template>
			    </el-table-column>
		        <el-table-column prop="clientName" label="客户名称">
			        <template slot-scope="scope">
				      	{{scope.row.clientName}}
				    </template>
			    </el-table-column>
		      	<el-table-column  prop="visitUrl"  label="预览">
		       		<template slot-scope="scope">
				      	<div v-html="scope.row.visitUrl"></div>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="order_time"  label="审核时间">
		       		<template slot-scope="scope">
				      	<span v-if='scope.row.updateTime!==null'>{{scope.row.updateTime |y}}</span>
				      	<span v-if='scope.row.updateTime==null'>--</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="order_time"  label="最后修改时间 ">
		       		<template slot-scope="scope">
				      	<span v-if='scope.row.createTime!==null'>{{scope.row.createTime |y}}</span>
				      	<span v-if='scope.row.createTime==null'>--</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  prop="state"  label="状态">
		       		<template slot-scope="scope">
		       			<span v-if="scope.row.state==-1"  style="color: red;">未完成</span>
		       			<span v-if="scope.row.state==0">未审核</span>
	  					<span v-if="scope.row.state==1" style="color: #67c23a;white-space: normal;">已投放</span>
	  					<span style="color: red;white-space: normal;" v-if="scope.row.state==2" >未通过（{{scope.row.checkInfo}}）</span>
	  					<span v-if="scope.row.state==3">暂未使用</span>
	  					<span v-if="scope.row.state==4">待投放</span>
	  					<span v-if="scope.row.state==5">待提词</span>
	  					<span v-if="scope.row.state==6">待确定</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  label="操作" width="220px">
		       		<template slot-scope="scope">
				      <el-button type="primary" size="mini" @click="newDetails(scope.row)" v-if="scope.row.state==0||scope.row.state==3||scope.row.state==2||scope.row.state==-1">重做 </el-button>
  					  <el-button type="primary" size="mini" @click="newedit(scope.row)"  v-if="scope.row.state==0||scope.row.state==3||scope.row.state==2||scope.row.state==-1">修改 </el-button>
  					  <el-button type="primary" size="mini" @click="delpage(scope.row)"  v-if="scope.row.state==0||scope.row.state==3||scope.row.state==2||scope.row.state==-1">删除</el-button>
		       		  <el-button type="primary" size="mini" @click="usePageOccupied(scope.row)"  v-if="scope.row.state==1||scope.row.state==4">复制</el-button>
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
		data () {
			return{
				name:null,
				data:[],
				companyName:null,
				page:1,
    			count:0,
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
//		        { value: '-2',label: '已作废 '},
		        { value: '-1',label: '未完成 '},
		        { value: '0',label: '未审核'},
		        { value: '1',label: '已投放'},
		        { value: '2',label: '未通过'},
		        { value: '3',label: '暂未使用'},
		        { value: '4',label: '检查完成待投放'},
		    	],
		    	customerData:false,
		    	customerval:[],
		    	checkedCities:[],//流量宝页面
		    	checked:false,//
		    	dataRow:[]				
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
			
			this.channel_id=this.$store.state.loginData.channel_id;
			if(this.$router.currentRoute.params.dataTop==undefined){
				this.status='0'
			}else{
				this.status=this.$router.currentRoute.params.dataTop.status
			}
			if(this.channel_id==31){
				this.channelFun()
				this.channel=31
				this.channel_idStatus=true
				this.obtainData(this.channel)
			}else{
				this.obtainData(this.channel_id)
			}
  		},
  		mounted(){
  		},
  		methods:{
  			newDetails(data){
  				this.$router.push({
		            path: '/home/ztcpageSel', 
		            name: 'ztcpageSel',
		        })
  				let newData={
  					channelId:data.channelId,
  					cid:data.clientId ,
  					id:data.tdNetworkId,
  					customerName:data.clientName
  				}
  				this.$store.state.pageDate=newData;
  				this.$store.state.pageId=data.id
  			},
  			newedit(data){
  				this.$store.state.pageId=data.id
  				let newData={
  					channelId:data.channelId,
  					cid:data.clientId ,
  					id:data.tdNetworkId,
  					customerName:data.clientName
  				}
  				this.$store.state.pageDate=newData;
  				console.log(data)
//				return false
  				this.$xhr.get("/ztcPage/findPageEditParams",{
					params:{pageId:this.$store.state.pageId}
			  	}).then((res)=>{
			  		if(data.modelType==1){
			  			//移动端
			  			this.$router.push({
				             path: '/home/ztcoperationM'+data.modelId, 
	            		     name: 'ztcoperationM'+data.modelId,
	            		     params:data
				        })
			  		}else{
			  			this.$router.push({
				             path: '/home/ztcoperation'+data.modelId, 
	            		     name: 'ztcoperation'+data.modelId,
	            		     params:data
				        })
			  		}
				}).catch((res)=>{
					if(res.status==500){
						return false
					}
				})
  			},
  			//复制页面
  			usePageOccupied(data){
  				this.$confirm('此操作将复制一份页面, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
			        this.$xhr.post("/ztcPage/usePageOccupied",{
						pageId:data.id,
					}).then((res)=>{
						if(this.channel_id==31){
							this.obtainData(this.channel)
						}else{
							this.obtainData(this.channel_id)
						}
						this.$message({
				            type: 'success',
				            message: '复制成功!'
				        });
					}).catch((res)=>{
						console.error(res)
						this.$message({
				            type: 'error',
				            message: res.msg
				        });
					})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消复制'
		          });          
		        });
  			},
		    delpage(data) {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
			        this.$yhr.post("/ztcPage/deleteHtmlPage",{
						channelId:data.channelId,
						pageId:data.id,
						authorId:this.$store.state.loginData.id
					}).then((res)=>{
						if(this.channel_id==31){
							this.obtainData(this.channel)
						}else{
							this.obtainData(this.channel_id)
						}
						this.$message({
				            type: 'success',
				            message: '删除成功!'
				        });
					}).catch((res)=>{
						this.$message({
				            type: 'error',
				            message: '系统异常'
				        });
					})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		    },
  			flow(){
  				this.$router.push({
		            path: '/home/ztc', 
		            name: 'ztc',
		        })
  			},
  			pagination(val){
				this.page=val
				if(this.channel_id==31){
					this.obtainData(this.channel)
				}else{
					this.obtainData(this.channel_id)
				}
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
			query(){
				this.page=1
				if(this.channel_id==31){
					this.obtainData(this.channel)
				}else{
					this.obtainData(this.channel_id)
				}
			},
			obtainData(channelId){
				this.$xhr.get("/pageShow/findZtcPagesByState",{
					params:{
						channelId:channelId,
						state:this.status,
					 	clientName:this.customer,
					 	currPage:this.page,
					}
			  	}).then((res)=>{
			  		this.count=res.data.totalCount
			  		this.data=res.data.data
				}).catch((res)=>{
					console.error(res)
				})
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
		       return  year+ '-' + month + '-' + day+'/'+hour+':'+minutes ;
		   }
		},
	}
</script>

<style>
	
</style>