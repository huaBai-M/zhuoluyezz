<template>
	<div>
		<div class="templataTopposition">
			<div class="container">
				<div class="row">
					<div class="col-md-6" >
						<p style="line-height: 35px;">自定义模板</p>
					</div>
					<div class="col-md-6 text-right" style="padding-right: 30px;">
						<el-button type="primary" @click="signOut">退出预览</el-button>
						<el-button type="primary" @click="make">立即制作</el-button>
					</div>
				</div>
			</div>
		</div>
		<!--模板-->
		<div id="modulehtml" ref="htmlBox" class="modulehtml8 modulehtml13">
			<img src="http://page-bucket.oiaqye7985.com/land-page/images/module16/module16.jpg" width="100%"/>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return{
			activeName: 'second'
		}
	},
	computed: {
	  
	},

	watch: {  
	   
	},
	created(){
	},
	mounted(){
	},
	methods:{
		handleClick(tab, event) {
	        console.log(tab, event);
	    },
		signOut(){
			this.$router.push({
	            path: '/home/flowpageSel', 
	            name: 'flowpageSel',
	        })
		},
		make(){
			this.$router.push({
	            path: '/home/operation16', 
	            name: 'operation16',
	        })
		}
	},
}	
</script>

<style>
.templataTopposition {
	width: 100%;
	padding-top: 5px;
	background: #fff;
	position: fixed;
	top: 60px;
	left: 1;
	text-align: left;
	margin-bottom: 50px;
	border-bottom: 1px solid #eee;
	z-index: 1000;
}
.modulelist{border-top: 1px solid #eee;padding: 5px 0;}
#modulehtml{padding-top: 120px;}
.modulehtml8{
}
.modulehtml13{background: #fff;    padding-top: 30px !important;}
.pc_abt{
	font-size: 18px;
    color: #666;
    display: inline-block;
    padding: 10px 20px;
    font-weight: 600;
    border-bottom: 2px solid #27abfc;
    border: none;
}
.pc_activ{
	 border-bottom: 2px solid #27abfc;
	 color:#27abfc ;
}
.pc_activ:hover{
 border-bottom: 2px solid #27abfc;
	 color:#27abfc ;
}
.pc_activ:focus{
	 border-bottom: 2px solid #27abfc;
	 color:#27abfc ;
	 outline: none;
}
.modulehtml13_tab{
	width: 1200px;
	margin:30px auto 0;
}
</style>