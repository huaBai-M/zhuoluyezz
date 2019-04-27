<template>
	<div class="module1">
		<div class="module1_Pc">
			<div class="module1_PcHead MaskHover" v-for="(item,index) in data.module1_PcHead">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
					<img v-bind:src="item"/>
				</a>
				<div class="MaskBox" v-if="delNode">
					<p>
						上传PC图片的宽为1920px
						<br />
						上传移动端图片的宽为750px
					</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传PC端图片</span>
							<input type="file" v-on:change="module1PcHEvent($refs.module1Pc[index],index,1920)" ref="module1Pc"/>
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传移动端图片</span>
							<input type="file" v-on:change="module1MoveHEvent($refs.module1Move[index],index,750)" ref="module1Move"/>
						</a>
						<el-button type="danger" icon="el-icon-delete" @click="delModule1MoveH(index)">删除</el-button>
					</p>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="addHEvent">添加一张图片</el-button>
			</div>
			<div class="module1_PcMiddle">
				<div class="MaskHover" v-for="(item,index) in data.module1_PcMiddle">
					<a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
					<img v-bind:src="item"/>
					</a>
					<div class="MaskBox" v-if="delNode">
						<p>
							上传PC图片的宽为1200px
							<br />
							上传移动端图片的宽为750px
						</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传PC端图片</span>
								<input type="file" v-on:change="module1PcMiddleEvent($refs.module1PcMiddle[index],index,1200)"  ref="module1PcMiddle"/>
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传移动端图片</span>
								<input type="file" v-on:change="module1MoveMiddledleEvent($refs.module1MoveMiddle[index],index,750)"  ref="module1MoveMiddle"/>
							</a>
							<el-button type="danger" icon="el-icon-delete" @click="delModule1Middle(index)">删除</el-button>
						</p>
					</div>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="addMiddleEvent">添加一张图片</el-button>
			</div>
			<div class="module1_PcFoot MaskHover" v-for="(item,index) in data.module1_PcFoot">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
					<img v-bind:src="item"/>
				</a>
				<div class="MaskBox" v-if="delNode">
					<p>
						上传PC图片的宽为1920px
						<br />
						上传移动端图片的宽为750px
					</p>
					<p>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传PC端图片</span>
							<input type="file" v-on:change="module1PcFootEvent($refs.module1PcFoot[index],index,1920)"  ref="module1PcFoot"/>
						</a>
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传移动端图片</span>
							<input type="file" v-on:change="module1MoveFootEvent($refs.module1MoveFoot[index],index,750)"  ref="module1MoveFoot"/>
						</a>
						<el-button type="danger" icon="el-icon-delete" @click="delmodule1MoveFoot(index)">删除</el-button>
					</p>
				</div>
			</div>
			<div class="addNode" v-if="delNode">
				<el-button type="primary" icon="el-icon-edit" @click="addFootEvent">添加一张图片</el-button>
			</div>
		</div>
		<div class="module1_Move">
			<div class="module1_MoveHead" v-for="(item,index) in data.module1_MoveHead">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
					<img v-bind:src="item"/>
				</a>
			</div>
			<ul>
				<li v-for="(item,index) in data.module1_Move">
					<a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
						<img v-bind:src="item"/>
					</a>
				</li>
			</ul>
			<div class="module1_MoveFoot" v-for="(item,index) in data.module1_MoveFoot">
				<a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
					<img v-bind:src="item"/>
				</a>
			</div>
		</div>
		<div id="script" ref="script"></div>
		<div class="seeImg"  v-if="delNode">
			<p @click="hide">移动端预览</p>
			<div class="boxImg">
				<div class="module1_MoveHead" v-for="(item,index) in data.module1_MoveHead">
					<img v-bind:src="item"/>
				</div>
				<ul>
					<li v-for="(item,index) in data.module1_Move">
						<img v-bind:src="item"/>
					</li>
				</ul>
				<div class="module1_MoveFoot" v-for="(item,index) in data.module1_MoveFoot">
					<img v-bind:src="item"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
export default {
	data () {
		return{
			data:{},
			delNode:true,
			syb_productType:null,//类型流量宝
		}
	},
	props:["productType","dataJson","deleteNode"],
	computed: {
	  
	},
	watch: {  
	   //监听数据变化
	   dataJson(val){
		this.data=val
	   },
	   //删除节点
	   deleteNode(val){
	   	this.delNode=this.deleteNode
	   	this.$emit('dataJsonFun',this.data)
	   }
	},
	created(){
		
	},
	mounted(){
		this.sybCode()
	},
	updated(){
		this.data=this.dataJson
	},
	methods:{
		hide(){
			console.log($(".seeImg").height())
			if($(".seeImg").height()==400){
				$(".seeImg").height("30px")
			}else{
				$(".seeImg").height('400px')
			}
			$(".boxImg").slideToggle()
//			$(".seeImg").height("30px")
		},
		module1PcHEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.module1_PcHead.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		module1MoveHEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.module1_MoveHead.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delModule1MoveH(index){
			this.data.module1_PcHead.splice(index,1)
			this.data.module1_MoveHead.splice(index,1)
		},
		addHEvent(){
			this.data.module1_PcHead.push("http://page-bucket.oiaqye7985.com/img/i/head.jpg")
			this.data.module1_MoveHead.push("http://page-bucket.oiaqye7985.com/img/i/head.jpg")
		},
		module1PcMiddleEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.module1_PcMiddle.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		module1MoveMiddledleEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.module1_Move.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delModule1Middle(index){
			this.data.module1_PcMiddle.splice(index,1)
			this.data.module1_Move.splice(index,1)
		},
		addMiddleEvent(){
			this.data.module1_PcMiddle.push("http://page-bucket.oiaqye7985.com/img/i/middle1.jpg")
			this.data.module1_Move.push("http://page-bucket.oiaqye7985.com/img/i/middle1.jpg")
		},
		module1PcFootEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.module1_PcFoot.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		module1MoveFootEvent(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.module1_MoveFoot.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delmodule1MoveFoot(index){
			this.data.module1_PcFoot.splice(index,1)
			this.data.module1_MoveFoot.splice(index,1)
		},
		addFootEvent(){
			this.data.module1_PcFoot.push("http://page-bucket.oiaqye7985.com/img/i/foot.jpg")
			this.data.module1_MoveFoot.push("http://page-bucket.oiaqye7985.com/img/i/foot.jpg")
		},
		/*内容操作区结束**/
		
		//获取生意帮代码
		sybCode(){
			this.syb_productType=this.productType
			var cid=null
			
			if(this.syb_productType==3){
				cid=this.$store.state.pageDate.customer_id
			}else{
				cid=this.$store.state.pageDate.cid
			}
			this.$xhr.post("/page/code/sybCode",{
				c_id:cid,
				network_id:this.$store.state.pageDate.id,
				syb_productType:this.syb_productType
			}).then((res)=>{
				this.$refs.script.innerHTML=res.data.codeEntity.sybCreateCode
				this.open("生意帮代码保存成功","success")
			}).catch((res)=>{
				//console.log(res)
				this.open("生意帮代码保存错误","error")
			})
		},
    	/*上传图片**/
		dataImg(_this,input_file,maxWidth, get_data){
		 	var formData = new FormData();
			var file = input_file.files[0];
		    formData.append("file",file);
            if (!/image\/\w+/.test(file.type)) {  
                _this.open("请确保文件为图像类型",'warning')
                input_file.value=''
                return false;  
            }  
            if(parseInt(file.size/1024)>700){
            	_this.open("图片不能大于700kb",'warning')
            	input_file.value=''
            	return false;  
            }
            var reader = new FileReader();  
            reader.onload = function () {
                var image = new Image();
                image.onload=function(){
                    if(maxWidth<=(image.width+5)&&maxWidth>=(image.width-5)&&parseInt(file.size/1024)<700){
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
                    			//保存上传的图片
                    			_this.open("上传成功","success")
                    			//_this.saveImageUrl(str.data)
                    		},error:function(err){
                    			_this.open("出错了",'error')
                    		}
                    		
                    	});
                    }else{
                  		/**宽不正确*/
						_this.open("请确保图片的宽为"+maxWidth+"px",'warning')
						input_file.value=''
                    }
                }
                image.src= this.result;
            }  
            reader.readAsDataURL(file);  
		},
		//保存上传的图片
		saveImageUrl(Url){
			this.$xhr.post("/file/saveImageUrl",{
				channelId:this.$store.state.loginData.channel_id,/*渠道ID**/
                cid:this.$store.state.pageDate.customer_id,/*客户customer_id  ID**/
                type:0,
                visitUrl:Url 
			}).then((res)=>{
				this.open(res.data,"success")
			}).catch((res)=>{
				this.open("图片信息保存失败","error")
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
	}
}
</script>

<style>
.seeImg{
	background: #fff;
	position: fixed;
	width: 300px;
	height:400px;
	right: 20px;
	bottom: 0;
	z-index: 1000;
	border-radius: 10px;
	
}
.seeImg>p{
	position: absolute;
	text-align: center;
	width: 100%;
	cursor: pointer;
	padding: 0;
	height: 30px;
	line-height: 30px;
	font-weight: bold;
	border-bottom: 1px solid #eee;
}
.seeImg .boxImg{
	position: absolute;
	top: 30px;
	height: 370px;
	overflow-y: auto;
}
.seeImg img{width: 100%;}
.module1{width: 100%;overflow: hidden;}
.module1 *{
	list-style: none;
	text-align:center;
}
.module1 ul{
	padding: 0;
	margin: 0;
}
.module1_Move{
	display: none;
}
.module1_Move img{
	width: 100%;
}
@media(max-width:750px) {
	.module1_Move{
		display: block;
	}
	.module1_Pc{display: none;}
}
</style>