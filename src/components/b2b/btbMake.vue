<template>
	<div class="container">
  		<div class="row">
			<div class="col-md-12">
				<p class="index_title"><span class="index_span"></span><span class="companyName"></span>{{name}}</p>
			</div>
		</div>
	  	<div class="Btbbox">
	  		<h1>推广词信息</h1>
	  		<div class="txtTbox">
	  			<div class="row">
		  			<div class="col-md-4"  v-if="data.customerName!=null">
		  				<p class="txtTop">
							<label>公司名称：</label>
							<span>{{data.customerName}}</span>
						</p>
		  			</div>
		  			<div class="col-md-4"  v-if="data.domain!=null">
						<p class="txtTop">
							<label>地域：</label>
							<span>{{data.domain}}</span>
						</p>
					</div>
					<div class="col-md-4" v-if="data.url!=null">
						<p class="txtTop">
							<label>连接URL：</label>
							<a v-bind:href="data.url" target="_blank">{{data.url}}</a>
						</p>
					</div>
					<div class="col-md-4" v-if="data.keyword!=null">
						<p class="txtTop">
							<label>投放词：</label>
							<span>{{data.keyword}}</span>
						</p>
					</div>
		  		</div>
	  		</div>
	  		<!--上传图片-->
	  		<div class="BtbImg">
	  			<h3><i></i>广告图片上传<span>（250*250图片最大不超过30kb）</span></h3>
	  			<div class="row">
	  				<div class="col-md-12">
	  					<div class="minImg">
	  						<p><img v-bind:src="minBg"/></p>
	  						<p style="display: flex;align-items: center;"> 
	  								<a href="javascript:void(0)" class="el-button el-button--primary" style="width: 112px;height: 42px;padding: 0;text-align: center;line-height: 42px;">
	  									<span class="files">
		  									自定义上传
		  									<input type="file"  ref="filesMin" @change="upMin($refs.filesMin,250,30)"/>
		  								</span>
	  								</a>
	  							<el-button type="primary" plain @click="img">编辑图片</el-button>
	  						</p>
	  					</div>
	  				</div>
	  			</div>
	  			<h3><i></i>广告图片上传<span>（960*120图片最大不超过50kb）</span></h3>
	  			<div class="row">
	  				<div class="col-md-12">
	  					<div class="minImg">
	  						<p><img v-bind:src="maxBg"/></p>
	  						<p style="display: flex;align-items: center;"> 
	  							<a href="javascript:void(0)" class="el-button el-button--primary" style="width: 112px;height: 42px;padding: 0;text-align: center;line-height: 42px;">
	  								<span class="files">
	  									自定义上传
	  									<input type="file"  ref="filesMax" @change="upMax($refs.filesMax,960,50)"/>
	  								</span>
	  							</a>
	  							<el-button type="primary" plain @click="maximg">编辑图片</el-button>
	  						</p>
	  					</div>
	  				</div>
	  			</div>
	  		</div>
	  		<!---->
	  		<div class="Btbsubmit text-center">
	  			<el-button type="primary" size="medium " @click="succer">&nbsp;&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
	  			<el-button type="primary" plain size="medium ">&nbsp;&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
	  		</div>
	  	</div>
	  	<!--小图弹出框-->
	  	 <uploadmin :minImg="minImg" @ievent = "ievent" @Niclick="Niclick"></uploadmin>
	  	 <!--大图弹出框-->
	  	 <uploadmax :maxImg="maxImg" @ieventmax = "ieventmax" @Niclickmax="Niclickmax"></uploadmax>
	</div>
</template>

<script>
import uploadmin from"@/components/b2b/uploadMin"
import uploadmax from"@/components/b2b/uploadMax"
export default {
    data() {
      return {
      	  name:'',
          minImg: false,
          maxImg: false,
          minF:false,
          maxF:false,
          data:[],
          txt:'',
          minBg:"http://ztcbucket.oiaqye7985.com/syb/img/d9dfb269a15542e591258b45340fc57fbgp000.jpg",
          maxBg:"http://ztcbucket.oiaqye7985.com/syb/img/9e38f914776543dea9b4039eab8387a6bgp000.jpg"
      };
    },
    components:{
    	uploadmin,
    	uploadmax,
    },
    created(){
    	if(this.$store.state.loginData.channel_id!=undefined){
			this.name=this.$store.state.loginData.sub_company
		}else{
			this.$router.push({path: '/', name: 'home',})
			return false
		}
  	  	this.$xhr.get("/b2bAD/findAdByCustomer",{
			    params: {cid:this.$router.currentRoute.params.data.cId}
			}).then((res)=>{
			this.data=res.data
			this.minBg=this.data.urlpic1 
			this.maxBg=this.data.urlpic4
		})
   },
    mounted(){
    	
    },
    methods: {
    	succer(){
    		if(this.minF==false||this.maxF==false){
    			this.txt="请选择图片"
				this.open()
    		}else{
    			var _this=this
    			$.ajax({
            		contentType : 'application/json;charset=UTF-8',
					type:"post",
				    dataType: 'json',
            		url:_this.$store.state.ip+"/b2bAD/saveCustAD",
            		data: JSON.stringify({
				  		"cid":_this.$route.params.data.cId,
				  		"maxPicUrl":_this.maxBg,
				  		"minPicUrl":_this.minBg
					}),
					success:function(str){
						_this.txt="上传成功"
						_this.open()
						_this.imgf(_this.$route.params.data.channelId,_this.$route.params.data.cId,_this.maxBg)
						_this.imgf(_this.$route.params.data.channelId,_this.$route.params.data.cId,_this.minBg)
					},
					error:function(){
						_this.txt="上传失败"
						_this.open()
					}
            	});
    		}

    	},
		img(){
			this.minImg=true
		},
		maximg(){
			this.maxImg=true
		},
		Minimg(){
//			console.log(this.minImg)
			this.minImg=true
		},
		ievent(data){
			this.minImg=data.dialogVisible
			this.minBg=data.bg;
			this.minF=data.start
	   },
	   Niclick(data){
	   	this.minImg=data
	   },
	   ieventmax(data){
	   	this.maxImg=data.dialogVisible
		this.maxBg=data.bg;
		this.maxF=data.start
	   },
	   Niclickmax(data){
	   	this.maxImg=data
	   },
	   upMin(input_file,maxWidth,size){
	   	var _this=this;
	   	this.dataImg(_this,input_file,maxWidth,size,
    		function(str){
//  		console.log(str)
    		_this.minBg=str
    		_this.minF=true
    	})
	   },
	   upMax(input_file,maxWidth,size){
	   	var _this=this;
	   	this.dataImg(_this,input_file,maxWidth,size,
    		function(str){
//  		console.log(str)
    		_this.maxBg=str
    		_this.maxF=true
    	})
	   },
	   open() {
        this.$alert(this.txt, {
          dangerouslyUseHTMLString: true
        });
     },
    	/*上传图片**/
		dataImg(_this,input_file,maxWidth,size, get_data){
            if (typeof (FileReader) === 'undefined') {  
                alert("抱歉，你的浏览器版本太陈旧，请使用现代浏览器操作！");  
            } else {  
                try {  
		 			 var formData = new FormData();
					 var file = input_file.files[0];
		             formData.append("file",file);
                     if(parseInt(file.size/1024)>size){
                    	alert("图片不能大于"+size+"px")
                    	_this.loading=false
                    	return false;  
                    }
                    if (!/image\/\w+/.test(file.type)) {  
                        alert("请确保文件为图像类型");  
                        return false;  
                    }  
                    var reader = new FileReader();  
                    reader.onload = function () {
                    	var image = new Image();
                    	image.onload=function(){
                    		if(maxWidth<=(image.width+0)&&maxWidth>=(image.width-0)&&parseInt(file.size/1024)<size){
                    			/**发送Ajax请求*/
                    			$.ajax({
			                		type:"post",
			                		url:_this.$store.state.ip+"/file/saveImage",
			                		data: formData,
		                 			dataType : "json",
		                 			async: false,
		                    		contentType: false,
		                    		processData: false,
									success:function(str){
		                    			get_data(str.data);
									},
									error:function(){
									}
			                	});
                    			
                    		}else{
                    			alert("图片不能大于"+size+"px")
                    		}
                    	}
                    	image.src= this.result;
                    }  
                    reader.readAsDataURL(file);  
                } catch (e) {  
                }  
            }					
		},
		/*上传图片结束**/
		imgf(channel_id,c_id,data){
			var _this=this
			$.ajax({
				type:"post",
				dataType:"json",
				contentType : 'application/json;charset=UTF-8',
				url:_this.$store.state.ip+"/file/saveImageUrl",
				data:JSON.stringify({
                    "channelId":channel_id,/*渠道ID**/
                    "cid":c_id,/*客户customer_id  ID**/
                    "type":1,
                    "visitUrl":data 
				}),
				success:function(str){
//					console.log(str)
				}
			});
		}
    }
};
</script>

<style>
	.BtbImg	.files{
		display: inline-block;
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
	.BtbImg	.files>input{
		font-size: 50px;
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>