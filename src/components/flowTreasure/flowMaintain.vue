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
		<div class="tablebox">
			<el-table :data="data" stripe style="width: 100%;text-align: center;":row-class-name="tableRowClassName">
		        <el-table-column type="index"></el-table-column>
		        <el-table-column  prop="description" label="投放词名称">
			        <template slot-scope="scope">
			        	<el-tag type="success" v-if="scope.row.modelType==3">{{scope.row.description}}</el-tag>
				      	<span  v-else="scope.row.modelType==3">
				      		{{scope.row.description}}
				      	</span>
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
	  					<span v-if="scope.row.state==0&&scope.row.modelType==0">未审核</span>
	  					<span v-if="scope.row.state==0&&scope.row.modelType==3">优化完成待审核</span>
	  					<span v-if="scope.row.state==1" style="color: #67c23a;white-space: normal;">已投放</span>
	  					<span style="color: red;white-space: normal;" v-if="scope.row.state==2" >不合格（{{scope.row.checkInfo}}）</span>
	  					<span v-if="scope.row.state==3">暂未使用</span>
	  					<span v-if="scope.row.state==4">待投放</span>
	  					<span v-if="scope.row.state==5">到期下线</span>
				    </template>
		      	</el-table-column>
		      	<el-table-column  label="操作" width="220px">
		       		<template slot-scope="scope">
				      <div>
			      	  	<!--<span v-if="scope.row.modelType!=3">-->
			      	  		<el-button type="primary" size="mini" @click="newDetailsIf(scope.row)" v-if="scope.row.state==0||scope.row.state==3||scope.row.state==2||scope.row.state==-1">重做 </el-button>
			      	  	<!--</span>-->
			      	  	<el-button type="primary" size="mini" @click="neweditIf(scope.row)"  v-if="scope.row.state==0||scope.row.state==3||scope.row.state==2||scope.row.state==-1">修改 </el-button>
  					    <el-button type="primary" size="mini" @click="delpageIf(scope.row)"  v-if="scope.row.state==0||scope.row.state==3||scope.row.state==2||scope.row.state==-1">删除</el-button>
			       		<el-button type="primary" size="mini" @click="usePageOccupiedIf(scope.row)" v-if="scope.row.state==4&&scope.row.state!=1" :disabled="ifmessage">复制 </el-button>
			       		<el-button type="primary" size="mini" @click="mirror(scope.row)" v-if="scope.row.state==1" :disabled="ifmessage">优化页面 </el-button>
				      </div>
		       		</template>
		      	</el-table-column>
		    </el-table>
		</div>
	</div>
</template>
<script>
	
	export default {
		data () {
			return{
				name:null,
				data:[],
				ifmessage:false,
				companyName:null,
				checkRechargeIf:8,
			}
		},
		computed: {
		  
		},
		watch: {  
		   
		},
		created(){
			if(this.$store.state.loginData.channel_id!=undefined){
				this.name=this.$store.state.loginData.sub_company
				this.obtainData()
			}else{
				this.$router.push({path: '/', name: 'home',})
				return false
			}	
  		},
  		mounted(){
  			if(this.$router.currentRoute.params.data!=undefined){
  				this.checkRechargeIf=this.$router.currentRoute.params.data.status;
	  			console.log(this.$router.currentRoute.params.data)
	  			console.log(this.checkRechargeIf==8)
	  			console.log(!this.checkRechargeIf==8)
  			}
  			
  		},
  		methods:{
  			//重做判断
  			newDetailsIf(data){
  				if(data.state==3){
  					this.open('页面暂未使用，不可操作','warning') 
  				}else{
	  				this.$xhr.get("/page/checkRecharge",{
						params: {cid:data.clientId}
					}).then((res)=>{
						this.newDetails(data)
		        	}).catch((res)=>{
		        		if(res.status==500){
		        			this.open('该用户未充值流量宝请先充值再进行制作页面','warning') 
		        		}
					})  					
  				}
  			},
  			//重做
  			newDetails(data){
  				this.$store.state.pageId=data.id;
  				this.$store.state.moduleType=data.modelType;
  				this.$router.push({
		            path: '/home/flowpageSel', 
		            name: 'flowpageSel',
		        })
  			},
  			//修改判断
  			neweditIf(data){
  				if(data.state==3){
  					this.open('页面暂未使用，不可操作','warning') 
  				}else{
	  				this.$xhr.get("/page/checkRecharge",{
						params: {cid:data.clientId}
					}).then((res)=>{
						this.newedit(data)
		        	}).catch((res)=>{
		        		if(res.status==500){
		        			this.open('该用户未充值流量宝请先充值再进行制作页面','warning') 
		        		}
					})
  				}
  			},
  			//修改
  			newedit(data){
  				this.$store.state.pageId=data.id;
  				this.$store.state.moduleType=data.modelType;
  				console.log(data.modelType)
				if(data.modelId!=null){
			  		if(data.modelType==1){
			  			//移动端
			  			this.$router.push({
				             path: '/home/operationM'+data.modelId, 
	            		     name: 'operationM'+data.modelId,
	            		     params:data
				        })
			  		}else{
			  			this.$router.push({
				             path: '/home/operation'+data.modelId, 
	            		     name: 'operation'+data.modelId,
	            		     params:data
				        })
			  		}  					
				}else{
					this.$xhr.get("/page/findModelByPageId",{
						params:{pageId:this.$store.state.pageId}
				  	}).then((res)=>{
				  		if(data.modelType==1){
				  			//移动端
				  			this.$router.push({
					             path: '/home/operationM'+res.data.id, 
		            		     name: 'operationM'+res.data.id,
		            		     params:data
					        })
				  		}else{
				  			this.$router.push({
					             path: '/home/operation'+res.data.id, 
		            		     name: 'operation'+res.data.id,
		            		     params:data
					        })
				  		}
					}).catch((res)=>{
						if(res.status==500){
							return false
						}
					})
				}

  			},
  			usePageOccupiedIf(data){
  				if(data.state==3){
  					this.open('页面暂未使用，不可操作','warning') 
  				}else{
	  				this.$xhr.get("/page/checkRecharge",{
						params: {cid:data.clientId}
					}).then((res)=>{
						this.usePageOccupied(data)
		        	}).catch((res)=>{
		        		if(res.status==500){
		        			this.open('该用户未充值流量宝请先充值再进行制作页面','warning') 
		        		}
					})  					
  				}
  			},
  			//镜像复制
  			mirror(data){
  				console.log(data)
  				this.$confirm('此操作将复制一份镜像页面, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning',
		          confirmButtonClass:'ifmessage'
		        }).then(() => {
		        	$(".ifmessage").attr("disabled",true)
		        	this.ifmessage=true
			        this.$xhr.post("/page/createMirroImgPage",{
						pageId:data.id,
					}).then((res)=>{
						console.log(res)
						$(".ifmessage").attr("disabled",false);
						this.ifmessage=false;
						this.obtainData();
						this.$message({
				            type: 'success',
				            message: '复制成功!'
				        });
					}).catch((res)=>{
						$(".ifmessage").attr("disabled",false);
						this.ifmessage=false;
						console.log(res);
						this.$message({
				            type: 'warning',
				            message: '不能重复创建'
				        });
					})
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消复制'
		          });          
		        });
  			},
		    tableRowClassName({row, rowIndex}) {
		       console.log(row.modelType==3)
		       if(row.modelType==3){
		       	return 'success-row';
		       }else{
		       	 return '';
		       }
		       
		    },
  			//复制页面
  			usePageOccupied(data){
  				this.$confirm('此操作将复制一份页面, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning',
		          confirmButtonClass:'ifmessage'
		        }).then(() => {
		        	$(".ifmessage").attr("disabled",true)
		        	this.ifmessage=true
			        this.$xhr.post("/page/usePageOccupied",{
						pageId:data.id,
					}).then((res)=>{
						$(".ifmessage").attr("disabled",false);
						this.ifmessage=false;
						this.obtainData();
						this.$message({
				            type: 'success',
				            message: '复制成功!'
				        });
					}).catch((res)=>{
						$(".ifmessage").attr("disabled",false);
						this.ifmessage=false;
						console.log(res);
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
  			//判断删除
  			delpageIf(data){
  				if(data.state==3){
  					this.open('页面暂未使用，不可操作','warning') 
  				}else{
  					this.delpage(data)
  				}
/*  				this.$xhr.get("/page/checkRecharge",{
					params: {cid:data.clientId}
				}).then((res)=>{
					
	        	}).catch((res)=>{
	        		if(res.status==500){
	        			this.open('该用户未充值流量宝请先充值再进行制作页面','warning') 
	        		}
				})*/
  			},
  			//删除
		    delpage(data) {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
			        this.$yhr.post("/page/deleteHtmlPage",{
						channelId:data.channelId,
						pageId:data.id,
						authorId:this.$store.state.loginData.id
					}).then((res)=>{
						this.obtainData()
					}).catch((res)=>{
						console.log(res)
					})
			        this.$message({
			            type: 'success',
			            message: '删除成功!'
			        });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });          
		        });
		    },
  			flow(){
  				this.$router.push({
		            path: '/home/flow', 
		            name: 'flow',
		            params:{
		            	dataTop:this.$router.currentRoute.params.dataTop,
		            }
		        })
  			},
			obtainData(){
				this.$xhr.get("/page/findPages",{
					params:{
						cid:this.$store.state.pageDate.customer_id,
						orderId:this.$store.state.pageDate.id
					}
			  	}).then((res)=>{
			  		this.data=res.data
				}).catch((res)=>{
					console.error(res)
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
		       return  year+ '-' + month + '-' + day+'/'+hour+':'+minutes ;
		   }
		},
	}
</script>

<style>
  .el-table .success-row {
    background: #f0f9eb;
  }	
</style>