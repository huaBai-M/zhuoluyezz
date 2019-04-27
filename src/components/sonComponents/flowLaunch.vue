<template>
	<div>
		<el-dialog
		  title=""
		  :visible.sync="dialogVisible"
		  width="670px"
		  :before-close="centerDialogVisible1"
		  center>
		  <div>
		  	<div class="diaogeTop">
		  		页面名称：
		  		<input type="text"  v-model.trim="name" :maxlength="20" placeholder="请正确填写所购买的关键词"/>
		  		<i><span v-html="n"></span>/20</i>
				<p class="warning"><i class="el-icon-warning"></i>填写不正确可能会导致投放问题，请谨慎填写</p>	 
				<p class="warning" v-show="warning"><i class="el-icon-warning"></i>请输入页面名称</p>	 
		  	</div>
		  	<div class="diaogeBottom">
		  		<p class="warning"><i class="el-icon-warning"></i>填写不正确可能会导致投放问题，请谨慎填写</p>
		  		<ul>
			  		<li>1.不能出现联系方式： 包括手机号，座机号，QQ号，邮箱，其他网址；</li>
			  		<li>2.不能出现公司名称及所在地域名称；</li>
			  		<li>3.不要出现资质图片，如要添加，图片上的公司信息需加马赛克。</li>
			  	</ul>
		  	</div>
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button type="primary" plain @click="centerDialogVisible">使用该模板</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data () {
		return{
			dialogVisible:true,
			name:null,
			warning:false,
			n:0
		}
	},
	computed: {
	  
	},
	props:["launchShow"],
	watch: {  
	   name(newValue, oldValue) {  
		    this.n= newValue.length
		},
		launchShow(newValue, oldValue){  
		    this.dialogVisible=newValue
		},
	},
	created(){
	},
	mounted(){
		
	},
	methods:{
		centerDialogVisible(){
			if(this.name==null||this.name==''){
				this.warning=true;
				return false
			}
			 this.dialogVisible=false
			 var data={
			 	name:this.name,
			 	show:this.dialogVisible
			 }
			 this.$emit('launchFun',data)
		},
		centerDialogVisible1(){
			if(this.name==null||this.name==''){
				window.history.go(-1);
				return false
			}
			this.dialogVisible=false
			 var data={
			 	name:this.name,
			 	show:this.dialogVisible
			 }
			 this.$emit('launchFun',data)
		}
	},
}
</script>

<style>
	.diaogeTop{
		padding-bottom:30px;
		padding-left: 45px;
		border-bottom: 1px dashed rgb(204, 204, 204);
	}
	.diaogeTop input{
		width: 400px;
		height: 45px;
	}
	.diaogeTop>i{
		font-style: normal;
		position: relative;
		right: 50px;
	}
	.diaogeTop>.warning{
		padding-left: 85px;
		color: rgb(245, 108, 108);
		padding-top: 5px;
		font-size: 12px;
	}
	.diaogeBottom{
		padding: 20px 0;
		padding-left: 45px;
	}
	.diaogeBottom>p>i{
		color: rgb(245, 108, 108);
		margin-right: 10px;
	}
	.diaogeBottom ul{
		list-style: none;
		padding: 0;
		line-height: 35px;
		margin: 0;
	}
</style>