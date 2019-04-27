<template>
	<div class="findPageByCustomer">
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="500px"
		  :before-close="handleClose1">
		  <h3 class="text-center">
		  	流量宝已有制作完成的着陆页<br />
				可勾选使用该模板
		  </h3>
		 	<p style="color: red;" class="text-center animated shake" v-show="showP">
		 			请选择投放词名称，再使用该模板
		 	</p>
		  <div class="row">
		  	<div class="col-md-4 text-right">
		  		流量宝页面
		  	</div>
		  	<div class="col-md-8">
		  		<!--<el-checkbox-group v-model="flowChang">
					<el-checkbox  v-for="item in dataArr" :label="item.id" :key="item.modelName" style="display: block;margin-left: 0;">{{item.modelName}}</el-checkbox>
			  	</el-checkbox-group>-->
				<div v-for="(item,index) in dataArr" class="KeyWordsValue"> 
					<el-select
						    v-model="KeyWordsValue[index]"
						    multiple
						    collapse-tags
						    @change="selFun(index)"
						    v-bind:placeholder="item.modelName">
					    <el-option
					      v-for="item in KeyWords"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				</div>
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
			KeyWords:[],
			KeyWordsValue:[[],[],[],[],[],[],[],[],[],[]],
			arr:[],
			showP:false,
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
	   	this.showP=false
	   	if(val){
	   		this.flowChang=[];
	   		this.$emit('openbycustomer',this.dialogVisible)
	   		this.dataArr=this.checkedCities;
	   		this.ztcfindKeyWord()
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
		selFun(index){
			if(this.KeyWordsValue[index].length!=0){
				this.flowChang.splice(index,1,this.dataArr[index].id)
				this.dedupe(this.flowChang)
			} else{
				this.flowChang.splice(index,1)
				this.dedupe(this.flowChang)
			}
//			console.log(this.KeyWordsValue)
//			console.log(this.dedupe(this.flowChang))
			
		},
		handleClose(){
			this.dialogVisible = false
			this.$emit('shutbycustomer',this.dialogVisible)
			this.$router.push({
	            path: '/home/ztcpageSel', 
	            name: 'ztcpageSel',
	        })
		},
		handleClose1(){
			this.dialogVisible = false
			this.KeyWordsValue=[[],[],[],[],[],[],[],[],[],[]]
			this.$emit('shutbycustomer',this.dialogVisible)
		},
		submit(){
			this.arr=[];
			this.ifmessage=true;
			for(var i in this.KeyWordsValue){
				if(this.KeyWordsValue[i].length!=0){
					this.arr.push('"'+this.KeyWordsValue[i]+'"')
				}
			}
			if(this.arr.length==0){
				this.open('请选择投放词名称，再使用该模板','warning')
				this.showP=true;
				this.ifmessage=false;
				return false
			}
			this.$xhr.post("/ztcPage/usePageBefore",{
				 channelId:this.dataRow.channelId,
				 clientId:this.dataRow.cid,
				 netWorkId:this.dataRow.id,
				 clientName:this.dataRow.customerName,
				 otherPageIds:this.dedupe(this.flowChang),
				 descriptions:this.arr
		  	}).then((res)=>{
		  		this.open('使用成功','success')
		  		this.dialogVisible = false;
		  		this.KeyWordsValue=[[],[],[],[],[],[],[],[],[],[]]
		  		this.$router.push({
		            path: '/home/ztcMaintain', 
		            name: 'ztcMaintain',
		            params:{
	            		data:this.dataRow,
	            	}
		        })
		  		this.ifmessage=false
		  		this.$emit('shutbycustomer',this.dialogVisible)
			}).catch((res)=>{
				this.open(res.msg,'error')
				this.ifmessage=false
			})
		},
		//获取直通车投放词
    	ztcfindKeyWord(){
    		this.$xhr.get("/ztcPage/findKeyWords",{
				params: {
					networkId:this.$store.state.pageDate.id
				}
			}).then((res)=>{
				this.KeyWords=[]
				for(var i in res.data){
					this.KeyWords.push({
						lable:res.data[i].keyword,
						value:res.data[i].keyword,
					})
				}
			}).catch((res)=>{
				console.log(res)
			})
    	},
    	dedupe(array){
		 return Array.from(new Set(array));
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
	    margin-bottom: 10px;
	}
	.findPageByCustomer p{margin-bottom: 10px;margin-top: 10px;}
	.KeyWordsValue{margin-bottom: 10px;}
</style>