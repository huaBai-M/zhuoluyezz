<template>
	<div class="findPageByCustomer">
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="500px"
		  :before-close="handleClose1">
		  <h3 class="text-center">
		  	直通车已有制作完成的着陆页<br />
				可勾选使用该模板
		  </h3>
		  <div class="row">
		  	<div class="col-md-4 text-right">
		  		直通车页面
		  	</div>
		  	<div class="col-md-8">
		  		<el-checkbox-group v-model="flowChang" @change="flowChangFun">
					<el-checkbox  v-for="item in dataArr" :label="item.id" :key="item.modelName" style="display: block;margin-left: 0;">{{item.modelName}}</el-checkbox>
			  	</el-checkbox-group>
		  	</div>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="handleClose">重新制作</el-button>
		    <el-button type="primary" @click="submit" :disabled="ifmessage">使用该模板</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data () {
		return{
			dialogVisible:false,
			flowChang:[],
			dataArr:[],
			arr:[],
			ifmessage:false
		}
	},
	props:["checked","checkedCities","dataRow"],
	computed: {
	  
	},
	watch: {
	   checked(val){
	   		this.dialogVisible=val
	   },
	   dialogVisible(val){
	   	if(val){
	   		this.$emit('openbycustomer',this.dialogVisible)
	   		this.dataArr=this.checkedCities;
	   		//console.log(this.dataRow)
	   	}else{
	   		this.$emit('shutbycustomer',this.dialogVisible)
	   	}
	   }
	},
	created(){
	},
	mounted(){
		
	},
	methods:{
		flowChangFun(val){
			this.arr=[]
			for(var i in this.dataArr){
				for(var j in val){
					if(this.dataArr[i].id==val[j]){
						this.arr.push(this.dataArr[i].modelName)
					}
				}
				
			}
		},
		handleClose(){
			this.dialogVisible = false
			this.$emit('shutbycustomer',this.dialogVisible)
			this.$router.push({
	            path: '/home/flowpageSel', 
	            name: 'flowpageSel',
	        })
		},
		handleClose1(){
			this.dialogVisible = false
			this.$emit('shutbycustomer',this.dialogVisible)
		},
		submit(){
			this.ifmessage=true;
			if(this.arr.length==0){
				this.open("请选择页面",'warning');
				this.ifmessage=false;
				return false
			}
			this.$xhr.post("/page/useZtcPageBefore",{
				 channelId:this.dataRow.channel_id,
				 clientId:this.dataRow.customer_id,
				 orderId:this.dataRow.id,
				 clientName:this.dataRow.customer_name,
				 otherPageIds:this.flowChang,
				 descriptions:this.arr
		  	}).then((res)=>{
		  		this.open('使用成功','success')
		  		this.dialogVisible = false;
		  		this.ifmessage=false
		  		this.$router.push({
		            path: '/home/flowMaintain', 
		            name: 'flowMaintain',
		            params:{
	            		data:this.dataRow,
	            	}
		        })
		  		this.$emit('shutbycustomer',this.dialogVisible)
			}).catch((res)=>{
				this.open(res.msg,'error');
				this.ifmessage=false
			})
			
		},
		//提示
		open(val,type) {
	        this.$message({
	          duration:1000,
	          message:val,
	          type: type
	        });
	    },
	},
}
</script>

<style>
	.findPageByCustomer h3{
		font-size: 20px;
	    font-weight: 700;
	    line-height: 24px;
	    margin: 0;
	    padding: 0;
	    margin-bottom: 20px;
	}
</style>