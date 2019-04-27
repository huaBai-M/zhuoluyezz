<template>
	<div class="">

		<div class="ihomeBoxH">
			<el-row>
			  <el-col :span="4">
			  	<div class="ihomeBoxH_list">
			  		<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home10.png"/>
			  		<p>直通车</p>
			  	</div>
			  </el-col>
			  <el-col :span="5">
			  	<a href="javascript:void(0)" @click="jump('7')">
			  		<ul>
				  		<li><span>{{data.needmakeCount}}</span>条<i></i></li>
				  		<li>
				  			<p>待制作>></p>
				  		</li>
				  	</ul>
			  	</a>
			  </el-col>
			  <el-col :span="5">
			  	<a href="javascript:void(0)" @click="jump('2')"><!--5-->
				  	<ul>
				  		<li><span>{{data.disableCount}}</span>条<i></i></li>
				  		<li>
				  			<p>检查不合格>></p>
				  		</li>
				  	</ul>
			  	</a>
			  </el-col>
			  <el-col :span="5">
			  	<a href="javascript:void(0)" @click="jump('0')"><!--3-->
				  	<ul>
				  		<li><span>{{data.uncheckCount}}</span>条<i></i></li>
				  		<li>
				  			<p>待审核>></p>
				  		</li>
				  	</ul>
			  	</a>
			  </el-col>
			  <el-col :span="5">
			  	<a href="javascript:void(0)" @click="jump('1')"><!--6-->
				  	<ul>
				  		<li><span>{{data.onlineCount}}</span>条</li>
				  		<li>
				  			<p>已上线>></p>
				  		</li>
				  	</ul>
			  	</a>
			  </el-col>
			</el-row>
		</div>
				
	</div>
</template>

<script>
	export default {
		data () {
			return{
				data:[]
			}
		},
		computed: {
		  getUserIcons() {
		    return this.$store.state.loginData
		  }
		},
		watch: {  
		    getUserIcons(newValue, oldValue) {
		    	this.obtain()
		    }  
		},
		created(){
			if(this.$store.state.loginData!=null){
				this.obtain()
			}
  		},
  		mounted(){
  		},
  		methods:{
  			obtain(){
  				this.$xhr.get("/pageShow/myWorkZtc",{
					 params: {	authorId: this.$store.state.loginData.id,
					 			channelId:this.$store.state.loginData.channel_id,
					 		}
				}).then((res)=>{
//					console.log(res)
					this.data=res.data
				})
  			},
/*			jump(state){
				this.$router.push({
		            path: '/home/ztc', 
		            name: 'ztc',
		            params:{
		            	dataTop:{status:state}
		            }
		        })
			}*//* 7 5 3 6*/
  			jump(state){
  				if(state=='7'){
  					this.$router.push({
			            path: '/home/ztc', 
			            name: 'ztc',
			            params:{
			            	dataTop:{status:state}
			            }
			        })
  					return false
  				}
				this.$router.push({
		            path: '/home/allZtcMaintain', 
		            name: 'allZtcMaintain',
		            params:{
		            	dataTop:{status:state}
		            }
		        })
  			}
  		},
	}
</script>