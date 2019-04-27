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
		       		  <el-button  :disabled="ifmessage" type="primary" size="mini" @click="usePageOccupied(scope.row)"  v-if="scope.row.state==1||scope.row.state==4">复制</el-button>
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
				console.log(0)
			}else{
				this.$router.push({path: '/', name: 'home',})
				return false
			}	
  		},
  		mounted(){
  			
  		},
  		methods:{
  			newDetails(data){
  				this.$store.state.pageId=data.id
  				this.$router.push({
		            path: '/home/ztcpageSel', 
		            name: 'ztcpageSel',
		        })
  			},
  			newedit(data){
  				this.$store.state.pageId=data.id
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
		        	this.ifmessage=true
			        this.$xhr.post("/ztcPage/usePageOccupied",{
						pageId:data.id,
					}).then((res)=>{
						this.obtainData();
						this.ifmessage=false;
						 this.$message({
				            type: 'success',
				            message: '复制成功!'
				        });
					}).catch((res)=>{
						console.log(res);
						this.$message({
				            type: 'error',
				            message: res.msg
				        });
						this.ifmessage=false;
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
						channelId:this.$router.currentRoute.params.data.channelId,
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
		            path: '/home/ztc', 
		            name: 'ztc',
		            params:{
		            	dataTop:this.$router.currentRoute.params.dataTop,
		            }
		        })
  			},
			obtainData(){
				this.$xhr.get("/ztcPage/findPages",{
					params:{
						cid:this.$store.state.pageDate.cid,
						netWorkId:this.$store.state.pageDate.id
					}
			  	}).then((res)=>{
			  		this.data=res.data
				}).catch((res)=>{
					console.log(res)
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