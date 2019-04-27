<template>
	<el-dialog title="添加推荐产品"  custom-class="recommendBox" :visible.sync="dialogVisible" width="860px" :before-close="handleClose"  :show-close="true">
	  <div>
	  		<ul class="recommendBoxcard_allproductList clearfix recommendList">
	  			<li class="pull-left" v-for="(item,index) in alldata" >
	  				<div style="height: auto;">
	  					<img v-bind:src="item.banner" width="100%"/>
	  				</div>
	  				<p class="recommendListTitle">{{item.productName}}</p>
	  				<input v-bind:id="index" type="checkbox" v-bind:checked="item.isHot" @change="checkbox(item,index)" v-bind:disabled="disabled"/>
	  				<div class="recommendBoxiconfont">
	  				</div>
	  				<div class="recommendBoxiconfontT">
	  					<span class="iconfont icon-xingxing" style="color: #ced2d8;" v-show="!item.isHot"></span>
	  					<span class="iconfont icon-xingxing"  style="color: #ffc806;" v-show="item.isHot"></span>
	  				</div>
	  			</li>
	  		</ul>
	  	<div class="text-center"> 
		    <el-pagination
		      	@current-change="handleSizeChange"
			    layout="prev, pager, next"
			    :total="total">
			</el-pagination>
	  	</div>
	  	<div class="text-center recommendBoxAbt">
	  		<el-button @click="$store.state.cardState.show=false">取消</el-button>
  			<el-button type="primary" @click="$store.state.cardState.show=false">确定</el-button>
	  	</div>
	  </div>
	</el-dialog>
</template>

<script>
  export default {
    data() {
      return {
      	dialogVisible:this.$store.state.cardState.show,
      	alldata:[],
      	checkboxArr:[],
      	pageNum:1,
      	pageSize:10,
      	pagesizes:[10,100],
      	total:0,
      	checkList:null,
      	List:[],
      	ListT:[],
      	disabled:false
      };
    },
    computed: {
	  ifshow(){
		return this.$store.state.cardState.show
		}
	},
	watch: {  
		ifshow(val){
			this.dialogVisible=val;
			if(val){
				this.findProductListT()
			}
		}
	},
	created(){
		
	},
	mounted(){
		this.findProductList()
	},
    methods:{
    	handleClose(){
    		this.$store.state.cardState.show=false;
    	},
    	handleSuccess(){
    		this.$store.state.cardState.show=false;
    	},
    	//复选框
    	checkbox(item,i){
    		this.disabled=true
    		//
    		this.$xhr.get("/card/setProductIsHot",{
				params:{
					productId:item.id,//产品id
				}
		  	}).then((res)=>{
			  	if(item.isHot){
	    			item.isHot=0;
	    			for (let i=0;i<=this.$store.state.HotproductList.length-1;i++) {
		    			if(this.$store.state.HotproductList[i].id==item.id){
		    				this.$store.state.HotproductList.splice(i,1);
		    			}
		    		}
	    		}else{
		    		this.$store.state.HotproductList.push(item)
	    			item.isHot=1
	    		}
		  		this.disabled=false
			}).catch((res)=>{
				console.log(res);
				this.disabled=false
			})  
    		

    	},
    	//获取产品
    	findProductList(){
			this.$xhr.post("/card/findProductListByCriteria",{
					companyId: this.$store.cardData.customerId,
					pageNum:this.pageNum,
					pageSize:this.pageSize
		  	}).then((res)=>{
		  		console.log(res);
		  		this.alldata=res.data.productList;
		  		this.total=res.data.totalCount;
		  		console.log(this.total);
		  		for (let i=0;i<=this.alldata.length-1;i++) {
	    			if(this.alldata[i].isHot){
	    				this.$store.state.HotproductList.push(this.alldata[i])
	    			}
	    		}
			}).catch((res)=>{
				console.log(res)
			})     		
    	},
    	findProductListT(){
			this.$xhr.post("/card/findProductListByCriteria",{
					companyId: this.$store.cardData.customerId,
					pageNum:this.pageNum,
					pageSize:this.pageSize
		  	}).then((res)=>{
		  		console.log(res);
		  		this.alldata=res.data.productList;
		  		this.total=res.data.totalCount;
			}).catch((res)=>{
				console.log(res)
			})     		
    	},
    	handleSizeChange(val) {
    		this.pageNum=val;
      		this.findProductListT()
	        console.log(`每页 ${val} 条`);
	    }

    }
  };	
</script>

<style scoped>
.recommendList{
	padding: 23px 40px;
	list-style: none;
	margin: 0;
}
.recommendList li{
	width: 176px;
	height: 140px;
	border-radius: 0px;
	overflow: hidden;
	position: relative;
	margin-right: 22px;
	margin-bottom: 20px;
	box-shadow:2px -1px 37px -1px rgb(226, 222, 222);
}
.recommendList li:nth-child(4n+0){
	margin-right: 0;
}
.recommendList li>input{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 999;
	cursor: pointer;
}
.recommendList li .recommendBoxiconfont{
	position: absolute;
	width:0 ;
	height: 0;
	border: 35px solid transparent;
	border-top-color: #fff;
	top: -35px;
    right: -35px;
	transform: rotateZ(-135deg);
}
.recommendList li .recommendListTitle{
	padding: 12px 0;
	text-align: center;
}
.recommendList li  .recommendBoxiconfontT{
	position: absolute;
	top: 4px;
	right: 4px;
}
</style>
