<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<p class="index_title" style="justify-content: space-between;">
					<span><span class="index_span"></span>{{name}}</span>
					<a href="#/home/homeCard">返回上一页</a>
				</p>
			</div>
		</div>
		<div class="tablebox">
			<el-table :data="data" stripe style="width: 100%;text-align: center;">
		        <el-table-column type="index"></el-table-column>
		        <el-table-column prop="name" label="客户名称">
			        <template slot-scope="scope">
			        	{{scope.row.name}}
				    </template>
			    </el-table-column>
				<el-table-column label="预览">
			        <template slot-scope="scope">
			        	<a href="#" @click="$store.state.cardState.cardpreview=true">点击预览</a>
				    </template>
			    </el-table-column>
			    <el-table-column label="审核时间" prop="time">
			        <template slot-scope="scope">
			        	{{scope.row.time |y}}
				    </template>
			    </el-table-column>
			    <el-table-column label="最后修改时间" prop="laseTime">
			        <template slot-scope="scope">
			        	{{scope.row.laseTime |y}}
				    </template>
			    </el-table-column>
			    <el-table-column label="状态" prop="status">
			        <template slot-scope="scope">
			        	<span v-if="scope.row.status==-1">未完成</span>
			        	<span v-if="scope.row.status==0">未审核</span>
			        	<span v-if="scope.row.status==1">已通过</span>
			        	<span v-if="scope.row.status==2">未通过</span>
			        	<span v-if="scope.row.status==5">到期</span>
				    </template>
			    </el-table-column>
			    <el-table-column label="操作">
			        <template slot-scope="scope">
			        	<a href="javascript:void(0)" @click="edit">编辑</a>
				    </template>
			    </el-table-column>
		    </el-table>
		</div>
		<cardpreview></cardpreview>
	</div>
</template>

<script>
  import cardpreview from"@/components/smartCard/smartCardTemplate/cardAssembly/cardpreview"	
  export default {
    data() {
      return {
      	name:null,
      	data:[],
		datatable:[{
			name:"",
			time:"",
			laseTime:"",
			status:"",
		}],
		ifmessage:false,
		companyName:null,
		checkRechargeIf:8,
		
      };
    },
    computed: {
	  
	},
	components:{
    	cardpreview
    },
	watch: {  
		
	},
	created(){
		console.log(this.$store.state.cardWebsite)
			if(this.$store.state.loginData.channel_id!=undefined){
				this.name=this.$store.state.loginData.sub_company
			}else{
				this.$router.push({path: '/', name: 'home',})
				return false
			}
		console.log(this.$store.cardData)
	},
	mounted(){
		this.getWebsite()
	},
    methods:{
    	//获取公司信息
        getWebsite(){
        	this.$xhr.get("/card/getWebsite",{
				params:{
					orderId:this.$store.cardData.id,//订单id 
					cloginId:this.$store.cardData.cloginId,//
				}
		  	}).then((res)=>{
		  		console.log("-------------------获取公司信息-------------------")
//		  		console.log(res);
		  		if(res.data.companyInfo!=null&&res.data.employeeInfo!=null){
			  		this.$store.state.cardWebsite.companyLogo=res.data.companyInfo.companyLogo//公司logo
			  		this.$store.state.cardWebsite.companyLocation=res.data.companyInfo.companyLocation//公司地址
			  		this.$store.state.cardWebsite.description=res.data.companyInfo.description//公司简介
			  		this.$store.state.cardWebsite.displayImgs=res.data.companyInfo.banner//公司图片
			  		this.$store.state.cardWebsite.companyInfoid=res.data.companyInfo.id//id
			  		this.$store.state.cardEmployee.telphone=res.data.employeeInfo.telphone//用户电话
			  		this.$store.state.cardEmployee.name=res.data.employeeInfo.name//用户电话
			  		this.$store.state.cardEmployee.email=res.data.employeeInfo.email//邮箱
			  		this.$store.state.cardEmployee.wechat=res.data.employeeInfo.wechat//微信
			  		this.$store.state.cardEmployee.employeeInfoid=res.data.employeeInfo.id//id
			  		this.$store.cardData.customerName=res.data.companyInfo.company//公司简介
			  		let list=JSON.parse(res.data.companyInfo.productBanner)
			  		console.log(list)
			  		this.$store.state.cardEmployee.banner=JSON.parse(res.data.companyInfo.productBanner)//banner
//			  		//表格
			  		this.datatable[0].name=this.$store.cardData.customerName;
			  		this.datatable[0].time=res.data.companyInfo.createTime;
			  		this.datatable[0].laseTime=res.data.companyInfo.updateTime;
			  		this.datatable[0].status=res.data.companyInfo.status;
			  		this.data=this.datatable;
			  		this.$store.state.cardDetailedDate=res.data
			  		this.videoList();
			  		this. findProductList();
			  		this.findHotProductList()
		  		}
			}).catch((res)=>{
				
				console.log(res)
			})  
        },
    	 //获取视频接口
    	videoList(){
    		console.log(this.$store.state.cardDetailedDate.companyInfo.companyId)
        	this.$xhr.post("/card/findVideoListByCriteria",{
				companyId:this.$store.cardData.customerId,//公司id
				pageNum:"1",
				pageSize:"100000" 
		  	}).then((res)=>{
		  		console.log(res);
		  		this.$store.state.videoList=res.data.videoList
			}).catch((res)=>{
				console.log(res)
			})         	
        
    	},
    	findHotProductList(){
        	this.$xhr.get("/card/findHotProductList",{
				params:{
					companyId:this.$store.cardData.customerId,//公司id
				}
		  	}).then((res)=>{
		  		this.$store.state.HotproductList=res.data
		  		console.log(res);
		  		
			}).catch((res)=>{
				console.log(res)
			})         	
        },
        findProductList(){
			this.$xhr.get("/card/findProductList",{
				params:{
					companyId:this.$store.cardData.customerId,//公司ID 
				}
		  	}).then((res)=>{
		  		console.log(res);
		  		this.$store.state.productList=res.data
			}).catch((res)=>{
				console.log(res)
			})     		
    	},
    	edit(){
    		this.$store.state.HotproductList=[]
    		this.$router.push({
	            path: '/cardPage1', 
	            name: 'cardPage1',
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
  };	
</script>

<style>
</style>