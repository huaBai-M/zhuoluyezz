<template>
		<el-container>
		  <el-header>
		  	<a href="javascript:void(0)" class="logo"><img src="@/assets/img/logo.png" alt="home"/></a>
		  	<a href="javascript:void(0)" @click="open"><img src="@/assets/img/list.png" alt="home"/></i></a>
		  	<div class="pull-right" >
		  		<a href="javascript:void(0)" @click="out">退出&nbsp;&nbsp;|</a>
		  		{{loginData.name}}
		  		<span class="headImg"  v-if="loginData.head_image==''">
					<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home6.jpg" alt="user-img" width="36" class="img-circle">
				</span>
				<span class="headImg"  v-if="loginData.head_image!=''">
					<img v-bind:src="loginData.head" width="36" class="img-circle">
				</span>
		  	</div>
		  </el-header>
		  <el-container>
		    <el-aside :width="sliderW">
		    	    <el-menu
				      :default-active="Listactive"
				       class="el-menu-vertical-demo"
				       @open="handleOpen"
				       @close="handleClose" 
				        router
				       :collapse="isCollapse"
			  		   active-text-color="#fff">
				      <el-menu-item index="/home/flowTop" :route="{path: '/home/flowTop'}">
				        <i class="iconfont icon-shouye"></i>
				        <span slot="title"><i style="padding-left: 20px;"></i>首页</span>
				      </el-menu-item>
				      <el-menu-item index="/home/flow" :route="{path: '/home/flow'}">
				        <i class="iconfont icon-liuliangqia"></i>
				        <span slot="title"><i style="padding-left: 20px;"></i>流量宝</span>
				      </el-menu-item>
				      <el-menu-item index="/home/ztc" :route="{path: '/home/ztc'}" >
				         <i class="iconfont icon-zhitongche"></i>
				        <span slot="title"><i style="padding-left: 20px;"></i>直通车</span>
				      </el-menu-item>
				      <el-menu-item index="/home/homeCard" :route="{path: '/home/homeCard'}">
				         	<i class="iconfont icon-yemian"></i>
				        	<span slot="title"><i style="padding-left: 20px;"></i>智能名片</span>
				      </el-menu-item>
				      <el-menu-item index="/home/btb" :route="{path: '/home/btb'}">
				         <i class="iconfont icon-bbguanggaolianmeng"></i>
				        <span slot="title"><i style="padding-left: 20px;"></i>B2B广告联盟</span>
				      </el-menu-item>
				     
				    </el-menu>
		    </el-aside>
		    <main class="el-main"  @click="close"> 
		    	<router-view/>
		    </main>
		  </el-container>
		</el-container>
</template>

<script>
export default {
  data() {
    return {
      loginData:[],
	  Listactive:this.$route.path,
	  isCollapse:true,
	  sliderW:'63px',
	  userimg:null,
	  disabled:false
    }
  },
  computed: {
  	list(){
			return this.$route.path
	},
  },
	watch: { 
		list(value) {
			this.Listactive=value
		}
	},
	created(){
		 this.page=this.$store.state.slider
		 this. login()
	},
	mounted(){
//		console.log(this.$store.state.loginData)
	},
	methods:{
		handleOpen(key, keyPath) {
//	        console.log(key, keyPath);
	    },
	      handleClose(key, keyPath) {
//	        console.log(key, keyPath);
	    },
	    open(){
	    	if(this.isCollapse==false){
	    		this.sliderW='63px'
	    		this.isCollapse=true
	    	}else{
	    		this.sliderW='200px'
	    		this.isCollapse=false
	    	}
	    },
	    close(){
	    	this.sliderW='63px'
	    	this.isCollapse=true
	    },
	    login(){
	    	  console.log(0)
			this.$xhr.get("/login/channelInfo").then((res)=>{
				this.$store.state.loginData=res.data
				this.loginData=res.data
				
				console.log(this.$store.state.loginData)
				if(res.data.channel_id==31){
					this.disabled=true
				}
			}).catch(function (error) {
		    	//window.location.href='http://sso.mywayboo.com/sso/sso/tologin.action?main=http://zz.wayboo.net.cn/static/index.html';
		    });
	   },
	   out(){
	   		sessionStorage.clear()
  			$.cookie("ZZtoken",null,{expires: -1,path: '/'})
	    	window.location.href='http://sso.mywayboo.com/sso/sso/tologin.action?main=http://fw.wayboo.net.cn/youshang_searching';
	   }
	}
}
</script>

<style>
html,body,#app{
	height: 100%;
}
.el-header, .el-footer {
    background: #409eff;
    background: -webkit-linear-gradient(left,#409eff,#00b7fe);
    color: #fff;
    line-height: 60px;
}
  .el-header a{color: #fff;}
.el-aside {
    background-color: #edf1f5;
    transition: all .1s ease-out;
    overflow: hidden !important;
    padding-top: 1px;
}
.el-menu{height: 100%;}
.el-menu-item{ color: #97999f;}
.el-main {
  	background-color: #edf1f5;
  	padding: 0 !important;
  	overflow-x: hidden;
}
.el-container {
    height: 100%;
}

.logo{
	display: inline-block;
	width: 180px;
}
  .el-header a{text-decoration: none;}
.el-menu-item.is-active{background-color: #409eff !important;}
</style>