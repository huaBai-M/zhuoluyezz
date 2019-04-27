<template>
	<div class="container">
	<div class="imgBox">
		<el-dialog title="编辑图片" :visible.sync="dialogVisibleMax" width="1000px" :before-close="handleClose">
		 <div class="img_box">
		 	<h3><i></i>效果图</h3>
		 	<div class="imgMaxBox" id="imgMaxBox">
		 		<img v-bind:src="bg" width="100%" height="100%"/>
		 		<div class="imgMaxBoxT">
		 			<h1>{{name}}</h1>
		 			<h2>
		 				<span>主营产品：</span>{{product}}
		 			</h2>
		 			<h3>
		 				<span>电话：</span>
		 				 {{tel}}
		 			</h3>
		 		</div>
		 	</div>
		 	<h3><i></i>编辑公司信息</h3>
		 	<div class="imgMinBoxForm">
		 		<div class="row">
					<div class="col-md-6">
						<div class="form-group">
						    <label for="maxName">公司名称</label>
						    <input type="text" class="form-control" id="maxName" placeholder="请输入公司名称" v-model="name">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						    <label for="maxProduct">主营产品</label>
						    <input type="text" class="form-control" id="maxProduct" placeholder="请输入主营产品(建议3~5个)" v-model="product">
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						    <label for="maxTel">联系电话</label>
						    <input type="tel" class="form-control" id="maxTel" placeholder="请输入联系电话" v-model="tel">
						</div>
					</div>
				</div>
		 	</div>
		 	<!---->
		 	<h3><i></i>选择背景图片</h3>
		 	<div class="imgMaxBoxBg clearfix">
		 		<p class="imgMaxBoxBg_p" v-for="(item,index) in bgImgArr">
		 			<img v-bind:src="item.urlpath" @click="selectImg(index)"/>
		 		</p>
		 	</div>
		 	<!---->
		 	 <div class="fenye text-right">
			  	<el-pagination
				  	  @current-change="pagination"
				  	  background
					  layout="prev, pager, next"
					  :current-page="pages"
					  :page-size="PageCount"
					  :total="total_page">
					</el-pagination>
			  </div>
		 </div>
		  <div slot="footer" class="dialog-footer text-center">
		    <el-button @click="Niclickmax">取 消</el-button>
		    <el-button type="primary" @click="ieventmax">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisibleMax: false,
        bg:"http://ztcbucket.oiaqye7985.com/syb/img/95d5115d1ae4419cb1c7aaedc4b84f5bbgp000.jpg",
        PageCount:5,
    	total_page:0,
    	pages:1,
    	name:"北京中工信融科技有限公司",
    	product:" 数字营销、整合外包服务平台、 网站建设、客户管理等一站式企业服务",
    	tel:"4000-9999",
    	bgImgArr:[]
      };
    },
    props:["maxImg"],
     mounted(){
     	this.dialogVisibleMax=this.maxImg
     },
     watch: {  
	    maxImg(newValue, oldValue) {  
	       this.dialogVisibleMax= newValue
	    }  
	},
	created(){
  	  	this.$xhr.get("/b2bAD/findBackImgB").then((res)=>{
			this.bgImgArr=res.data.imgData
//			console.log(this.bgImgArr)
			this.total_page=res.data.totalCount
		})
	},
	mounted(){
	},
    methods: {
  		/*分页**/
	  	pagination(currentPage){
			this.$xhr.get('/b2bAD/findBackImgB', {
			    params: {page: currentPage}
			}).then((res)=>{this.bgImgArr=res.data.imgData
			}).catch(function (response) {
			});
	  	},
      selectImg(index){
      	this.bg=this.bgImgArr[index].urlpath
      	var bg=this.bg
        var _this=this
		$.ajax({
			url:_this.apiUrl.apiUrl+"/file/proxy",
			type:"post",
			data:{"imgurl":bg},
			success:function(res){
				//console.log(res)
				_this.bg=res.data
			}
		})
      },
      handleClose() {
        this.dialogVisibleMax=false
      	this.$emit('Niclickmax',this.dialogVisibleMax);
      },
      Niclickmax(){
      	this.dialogVisibleMax=false
      	this.$emit('Niclickmax',this.dialogVisibleMax);
      },
      ieventmax(){
      	var _this=this
      	html2canvas(document.getElementById("imgMaxBox")).then(function(canvas) {
      		 useCORS: true;
      		 allowTaint:true;
		     var img = canvas.toDataURL();
             var base=encodeURIComponent(img);//转码
             var form=document.forms[0];
			 var formData = new FormData(form);  
			 formData.append("file",_this.convertBase64UrlToBlob(img));
            $.ajax({
        		type:"post",
        		url:_this.apiUrl.apiUrl+"/file/saveADImage",
        		data: formData,
     			dataType : "json",
     			async: false,
        		contentType: false,
        		processData: false,
				success:function(str){
					//console.log(str)
        			_this.dialogVisibleMax=false;
			        var data={
			        	dialogVisibleMax:this.dialogVisibleMax,
			        	bg:str.data,
			        	start:true
			        }
			      	_this.$emit('ieventmax',data);
				},
				error:function(){
					
				}
        	});
		});
      },
      //base64转文件格式
      convertBase64UrlToBlob(urlData){
		    var bytes=window.atob(urlData.split(',')[1]); 
		    var ab = new ArrayBuffer(bytes.length);
		    var ia = new Uint8Array(ab);
		    for (var i = 0; i < bytes.length; i++) {
		        ia[i] = bytes.charCodeAt(i);
		    }
		    return new Blob( [ab] , {type : 'image/png'});
		}
    }
  };
</script>

<style>
	.img_box{
		border-top: 1px solid #eee;
	}
	.imgBox .el-dialog__body{
		padding: 0;
	}
	.imgBox .img_box h3 i{
		display: inline-block;
	    width: 8px;
	    height: 8px;
	    border-radius: 50%;
	    background: #00c1ef;
	    margin-right: 10px;
	}
	.imgMaxBox{
		width: 960px;
		height: 110px;
		position: relative;
		margin: 0 20px;
	}
	.imgMaxBox .imgMaxBoxT{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		padding: 10px 0;
		padding-right: 220px;
		/*padding-top: 38px;*/
	}
	.imgMaxBox .imgMaxBoxT h1{
		font-size: 22px;
		color: #fff;
		line-height: inherit;
		text-align: center;
		margin: 0;
		padding: 0;
		font-weight: bold;
	}
	.imgMaxBox .imgMaxBoxT h2 {
		margin: 0;
		padding: 0;
		font-size: 20px;
		color: #fff;
		line-height: inherit;
		text-align: center;
		font-weight: bold;
		margin: 10px 0;
		
	}
	.imgMaxBox .imgMaxBoxT h2 span{
		font-size: 14px;
		color: #19b2ee;
		font-weight: normal;
	}
	.imgMaxBox .imgMaxBoxT h3{
		margin: 0;
		padding: 0;
		font-size: 20px;
		color: #fff;
		line-height: inherit;
		padding: 0 10px;
		font-weight: bold;
		text-align: center;
	}
	.imgMaxBox .imgMaxBoxT h3 span{
		font-size: 14px;
		color: #19b2ee;
	}
	.imgMinBoxForm{
		padding: 0 40px;
	}
	.imgMinBoxForm .form-control:focus {
	    -webkit-box-shadow: none;
	    box-shadow: none;
	    border-color: #19b2ee;
	}
	.imgMaxBoxBg{
		padding: 0 40px;
	}
	.imgMaxBoxBg .imgMaxBoxBg_p{
		width: 350px;
		height: 80px;
		float: left;
		margin: 0 10px;
		border: 3px solid #fff;
		position: relative;
		overflow: hidden;
	}
	.imgMaxBoxBg .imgMaxBoxBg_p img{
		position: absolute;
		width: 700px;
		top: 0;
		right: 0;
		cursor: pointer;
	}
	.imgMaxBoxBg .imgMaxBoxBg_p:hover{
		border: 3px solid #19b2ee;
	}
	.imgBox .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
		background: none;
	}
	.imgBox .el-pagination{
		text-align: right;
	}
	.imgBox .el-pagination.is-background .el-pager li:not(.disabled).active{
		background: none;
		color: #19b2ee;
	}
</style>