<template>
	<div class="module16">
		<div class="module16_banner">
			<div class="module16_bannerLeft MaskHover">
				<img v-bind:src="data.maxImg1"/>
				<div class="MaskBox" v-if="delNode">
						<p>上传左边大图的宽为710px高为600px <br />上传左边小图的宽为190px高为90px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传左边大图</span>
								<input type="file"  ref="f1" @change="f1Img($refs.f1,710,600)"/>
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传左边小图</span>
								<input type="file"  ref="f2" @change="f2Img($refs.f2,190,90)"/>
							</a>
						</p>
					</div>	
			</div>
			<div class="module16_bannerContent">
				<div class="module16_bannerContentTop">
					<i></i>
					<span  v-if="!delNode">{{data.title}}</span>
					<input type="text"  v-if="delNode" v-model="data.title" style="width: 340px;text-align: center;"/>
					<i></i>
				</div>
				<h2>
					<span v-if="!delNode">{{data.title2}}</span>
					<input type="text"  v-if="delNode" v-model="data.title2" style="text-align: center;width: 100%;"/>
				</h2>
				<div class="module16_bannerContentMin">
					<div class="min_left">
						<div class="MaskHover">
							<img v-bind:src="data.minImg1"/>
							<div class="MaskBox" v-if="delNode">左边小图</div>
						</div>
						<h3>
							<span v-if="!delNode">{{data.minTitile1}}</span>
							<input type="text"  v-if="delNode" v-model="data.minTitile1" style="text-align: center;width: 190px;"/>
						</h3>
						<h4>
							活动价：
							<i  v-if="!delNode">{{data.minNumber1}}</i>
							<input type="text"  v-if="delNode" v-model="data.minNumber1" style="text-align: center;width: 60px;" class="number"/>
							<span  v-if="!delNode">{{data.minSpan1}}</span>
							<input type="text"  v-if="delNode" v-model="data.minSpan1" style="text-align: center;width: 60px;"/>
						</h4>
						<button onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
							<span  v-if="!delNode">{{data.minAbt1}}</span>
						  <input type="text"  v-if="delNode" v-model="data.minAbt1" style="text-align: center;width: 160px;"/>
						</button>
					</div>
					<div class="min_right">
						<div class="MaskHover"><img v-bind:src="data.minImg2"/><div class="MaskBox" v-if="delNode">右边小图</div></div>
						<h3>
							<span v-if="!delNode">{{data.minTitile2}}</span>
							<input type="text"  v-if="delNode" v-model="data.minTitile2" style="text-align: center;width: 190px;"/>
						</h3>
						<h4>
							活动价：
							<i  v-if="!delNode">{{data.minNumber2}}</i>
							<input type="text"  v-if="delNode" v-model="data.minNumber2" style="text-align: center;width: 60px;" class="number"/>
							<span  v-if="!delNode">{{data.minSpan1}}</span>
							<input type="text"  v-if="delNode" v-model="data.minSpan2" style="text-align: center;width: 60px;"/>
						</h4>
						<button onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
							<span  v-if="!delNode">{{data.minAbt2}}</span>
						  	<input type="text"  v-if="delNode" v-model="data.minAbt2" style="text-align: center;width: 160px;"/>
						</button>
					</div>
				</div>	
				<h5>
					<span  v-if="!delNode">{{data.titleH3}}</span>
					<input type="text"  v-if="delNode" v-model="data.titleH3" style="text-align: center;width:100%;"/>
				</h5>
			</div>
			<div class="module16_bannerRight MaskHover">
				<img v-bind:src="data.maxImg2"/>
				<div class="MaskBox" v-if="delNode">
						<p>上传右边大图的宽为710px高为600px <br />上传右边小图的宽为190px高为90px</p>
						<p>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
								<i class="el-icon-upload"></i><span>上传右边大图</span>
								<input type="file"  ref="f3"  @change="f3Img($refs.f3,710,600)"/>
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" >
								<i class="el-icon-upload"></i><span>上传右边小图</span>
								<input type="file"  ref="f4"  @change="f4Img($refs.f4,190,90)"/>
							</a>
						</p>
					</div>	
			</div>
		</div>
		<div class="module16_bannerBottom">
			<h4 class="module16_bannerBottomL">距离优惠结束时间仅剩</h4>
			<div class="img"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module16/gift.png"/></div>
			<h4 class="module16_bannerBottomR">
				<span class="time" v-if="!delNode">{{data.bannerday}}</span>
				<input type="text" v-if="delNode" v-model="data.bannerday" style="text-align: center;width:50px;" class="time"/>
				天
				<span class="time" v-if="!delNode">{{data.bannerhour}}</span>
				<input type="text" v-if="delNode" v-model="data.bannerhour" style="text-align: center;width:50px;" class="time"/>
				时
				<span class="time" v-if="!delNode">{{data.bannermin}}</span>
				<input type="text" v-if="delNode" v-model="data.bannermin" style="text-align: center;width:50px;" class="time"/>
				分
				<span class="time" v-if="!delNode">{{data.bannersecond}}</span>
				<input type="text" v-if="delNode" v-model="data.bannersecond" style="text-align: center;width:50px;" class="time"/>
				秒
			</h4>
		</div>
		<div class="module16_activity">
			<div class="module16_strengthTitleBorder">
				<h2>
					<span v-if="!delNode">{{data.activityTitle}}</span>
					<input type="text" v-if="delNode" v-model="data.activityTitle" style="text-align: center;width:100%;"/>
				</h2>
				<p>
					<span v-if="!delNode">{{data.activityH1}}</span>
					<input type="text" v-if="delNode" v-model="data.activityH1" style="text-align: center;width:100%;"/>
				</p>
				<i>+</i>
			</div>
			
			<div class="module16_activityContent">
				<div class="module16_activityContentList" v-for="(item,index) in data.activityList">
					<div class="title timeBox">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module16/alarmClock.png"/>
						距离优惠结束时间仅剩：
						<span class="time" v-if="!delNode">{{item.day}}</span>
						<input type="text" v-if="delNode" v-model="item.day" style="text-align: center;width:50px;" class="time"/>
						天
						<span class="time" v-if="!delNode">{{item.hour}}</span>
						<input type="text" v-if="delNode" v-model="item.hour" style="text-align: center;width:50px;" class="time"/>
						时
						<span class="time" v-if="!delNode">{{item.min}}</span>
						<input type="text" v-if="delNode" v-model="item.min" style="text-align: center;width:50px;" class="time"/>
						分
						<span class="time" v-if="!delNode">{{item.second}}</span>
						<input type="text" v-if="delNode" v-model="item.second" style="text-align: center;width:50px;" class="time"/>
						秒
					</div>
					<div class="red_bg"></div>
					<div class="module16_activityContentListT clearfix switch1">
						<div class="left">
							<div class="min_left">
								<h2>
									<span  v-if="!delNode">{{item.h1}}</span>
									<input type="text" v-if="delNode" v-model="item.h1" style="text-align: center;width:100%;"/>
								</h2>
								<h3>
									<span v-if="!delNode">{{item.h2}}</span>
									<input type="text" v-if="delNode" v-model="item.h2" style="text-align: center;width:100%;"/>
								</h3>
							</div>
							<div class="min_right">
								<p>
									<span v-if="!delNode">{{item.red1}}</span>
									<input type="text" v-if="delNode" v-model="item.red1" style="text-align: center;width:100%;"/>
								</p>
								<p>
									<span v-if="!delNode">{{item.red2}}</span>
									<input type="text" v-if="delNode" v-model="item.red2" style="text-align: center;width:100%;"/>
								</p>
								<h4>
									<span  v-if="!delNode">{{item.h3}}</span>
									<input type="text" v-if="delNode" v-model="item.h3" style="text-align: center;width:100%;"/>
								</h4>
								<button onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
									<span v-if="!delNode">{{item.abt}}</span>
									<input type="text" v-if="delNode" v-model="item.abt" style="text-align: center;width:100%;"/>
								</button>
							</div>
						</div>
						<div class="right">
							<div class="triangle"></div>
							<div class="MaskHover">
								<img v-bind:src="item.img"/>
								<div class="MaskBox" v-if="delNode">
									<p>上传图的宽为850px</p>
									<p>
										<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
											<i class="el-icon-upload"></i><span>上传</span>
											<input type="file"  ref="f6" @change="f6Img($refs.f6[index],850,index)"/>
										</a>
										<el-button type="danger" icon="el-icon-delete" @click="f6Click(index)">删除</el-button>
									</p>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<div class="addNode" v-if="delNode">
					<el-button type="primary" icon="el-icon-edit" @click="addf6">添加一块</el-button>
				</div>
			</div>
			<!---->
		</div>
		<!---->
				<div class="module16_strength">
			<div class="module16_strengthTitle">
				<div class="module16_strengthTitleBorder">
					<h2>
						<span v-if="!delNode">{{data.strengthH1}}</span>
						<input type="text" v-if="delNode" v-model="data.strengthH1" style="text-align: center;width:100%;"/>
					</h2>
					<p>
						<span v-if="!delNode">{{data.strengthP}}</span>
						<input type="text" v-if="delNode" v-model="data.strengthP" style="text-align: center;width:100%;"/>
					</p>
					<i>+</i>
				</div>
			</div>
			<div class="module16_strengthContent">
				<div class="module16_strengthContentList">
					<div class="list" v-for="(item,index) in data.strengthList">
						<div class="list_img MaskHover">
							<img v-bind:src="item.img"/>
							<div class="MaskBox" v-if="delNode">
								<p>上传图的宽为315px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file"  ref="f5" @change="f5Img($refs.f5[index],315,index)"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="f5Click(index)">删除</el-button>
								</p>
							</div>	
						</div>
						<button onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
							<span v-if="!delNode">{{item.p}}</span>
							<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;width:100%;"/>
						</button>
					</div>
				</div>
				<div class="addNode" v-if="delNode">
					<el-button type="primary" icon="el-icon-edit" @click="addf5">添加一块</el-button>
				</div>
				<div class="module16_strengthContentAbt" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
					<span v-if="!delNode">{{data.strengthListAbt}}</span>
					<input type="text" v-if="delNode" v-model="data.strengthListAbt" style="text-align: center;width:180px;"/>
					<i>></i>
				</div>
			</div>
		</div>
		<!---->
		<div class="module16_series" v-for="(item,i) in data.seriesList">
			<div class="module16_strengthTitle">
				<div class="module16_strengthTitleBorder">
					<h2>
						<span v-if="!delNode">{{item.title}}</span>
						<input type="text" v-if="delNode" v-model="item.title" style="text-align: center;width:100%;"/>
					</h2>
					<p>
						<span v-if="!delNode">{{item.h1}}</span>
						<input type="text" v-if="delNode" v-model="item.h1" style="text-align: center;width:100%;"/>
					</p>
					<i>+</i>
				</div>
			</div>
			<!---->
			<div class="module16_activityContent">
				<div class="module16_activityContentList">
					<div class="title timeBox">
						<img src="http://page-bucket.oiaqye7985.com/land-page/images/module16/alarmClock.png"/>
						距离优惠结束时间仅剩：
						<span class="time" v-if="!delNode">{{item.day}}</span>
						<input type="text" v-if="delNode" v-model="item.day" style="text-align: center;width:50px;" class="time"/>
						天
						<span class="time" v-if="!delNode">{{item.hour}}</span>
						<input type="text" v-if="delNode" v-model="item.hour" style="text-align: center;width:50px;" class="time"/>
						时
						<span class="time" v-if="!delNode">{{item.min}}</span>
						<input type="text" v-if="delNode" v-model="item.min" style="text-align: center;width:50px;" class="time"/>
						分
						<span class="time" v-if="!delNode">{{item.second}}</span>
						<input type="text" v-if="delNode" v-model="item.second" style="text-align: center;width:50px;" class="time"/>
						秒
					</div>
					<div class="module16_activityContentListT">
						<div class="red_bgT"></div>
						<div class="clearfix module16_seriesList clearfix">
							<div class="module16_seriesListLi" v-for="(itemT,j) in item.seriesListT">
								<h2>
									TOP {{j+1}}
									<img src="http://page-bucket.oiaqye7985.com/land-page/images/module16/crown.png" />
								</h2>
								<div class="img MaskHover">
									<img v-bind:src="itemT.img"width="100%"/>
									<div class="MaskBox" v-if="delNode" style="height: 80%;">
											<p>上传图的宽为370px</p>
											<p>
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file"  v-bind:id="funtionId(i,j)" @change="f7Img(370,i,j)"/>
												</a>
												<el-button type="danger" icon="el-icon-delete" @click="f7Click(i,j)">删除</el-button>
											</p>
										</div>
								</div>
								<div class="bottom clearfix">
									<div class="cornerMark_title cornerMark_titleLeft">
										<div>
											<span v-if="!delNode">{{itemT.left}}</span>
											<input type="text" v-if="delNode" v-model="itemT.left" style="text-align: center;width:100%;"/>
										</div>
										<span></span>
									</div>
									<div class="cornerMark_title cornerMark_titleRight">
										<div>
											<button onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
												<span v-if="!delNode">{{itemT.right}}</span>
												<input type="text" v-if="delNode" v-model="itemT.right" style="text-align: center;width:100%;"/>
											</button>
										</div>
										<span></span>
									</div>
									<i class="cornerMarkI"></i>
								</div>
							</div>
							<!---->							
						</div>
						<div class="addNode" v-if="delNode">
							<el-button type="primary" icon="el-icon-edit" @click="addf7(i)">添加一个推荐模块</el-button>
						</div>
					</div>
					<!---->
				</div>
				<!--/list-->
			</div>
			<!--/module16_activityContent-->
			<div class="module16_activityBottom clearfix">
				<div class="list" v-for="(itemS,k) in item.seriesListS">
					<div class="list_border clearfix">
						<p class="left">
							<span v-if="!delNode">{{itemS.left}}</span>
							<textarea type="text" v-if="delNode" v-model="itemS.left" maxlength="4"></textarea>
						</p>
						<div class="right">
							<span v-if="!delNode">{{itemS.p}}</span>
							<input type="text" v-if="delNode" v-model="itemS.p" style="text-align: center;width:100%;"/>
							<p>
								<span v-if="!delNode">{{itemS.h1}}</span>
								<input type="text" v-if="delNode" v-model="itemS.h1" style="text-align: center;width:100%;"/>
							</p>
						</div>
					</div>
					<span class="top"></span>
					<span class="bottom"></span>
				</div>
			</div>
		</div>
		
		<!--/-->
		<div class="module16_strength module16_strengthT">
			<div class="module16_strengthTitle">
				<div class="module16_strengthTitleBorder">
					<h2>
						<span v-if="!delNode">{{data.footTitle}}</span>
						<input type="text" v-if="delNode" v-model="data.footTitle" style="text-align: center;width:100%;"/>
					</h2>
					<p>
						<span v-if="!delNode">{{data.footH1}}</span>
						<input type="text" v-if="delNode" v-model="data.footH1" style="text-align: center;width:100%;"/>
					</p>
					<i>+</i>
				</div>
			</div>
			<div class="module16_strengthContent">
				<div class="module16_foot">
						<span v-if="!delNode">
							{{data.footP}}
						</span>				
						<textarea type="text" v-if="delNode" v-model="data.footP" style="text-align: center;width:100%;height: auto;"/></textarea>
				</div>
				<div class="module16_footList ">
					<div class="list" v-for="(item,index) in data.footList">
						<div class="list_img MaskHover">
							<img v-bind:src="item.img"/>
							<div class="MaskBox" v-if="delNode">
								<p>上传图的宽为300px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file"  ref="f8" @change="f8Img($refs.f8[index],300,index)"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="f8Click(index)">删除</el-button>
								</p>
							</div>
						</div>
						<p>
							<span v-if="!delNode">{{item.p}}</span>
							<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;width:100%;"/>
						</p>
					</div>
				</div>
				<div class="addNode" v-if="delNode">
					<el-button type="primary" icon="el-icon-edit" @click="addf8">添加一个推荐模块</el-button>
				</div>
				<div class="foot_top">
					<a href="javascript:void(0)">
						<span v-if="!delNode">{{data.footAbt}}</span>
						<input type="text" v-if="delNode" v-model="data.footAbt" style="text-align: center;width:200px;"/>
					</a>
				</div>
				<div class="module16_strengthContentAbt" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
					<span v-if="!delNode">{{data.footAbt2}}</span>
					<input type="text" v-if="delNode" v-model="data.footAbt2" style="text-align: center;width:150px;"/>
					<i>></i>
				</div>
			</div>
		</div>
		<!---->
		<div id="script" ref="script"></div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
      	data:{},
      	delNode:true,
		syb_productType:null,//类型流量宝
      };
    },
  props:["productType","dataJson","deleteNode"],
  computed: {
	  
	},
	watch: {  
	   //监听数据变化
	  dataJson(val){
	   	console.log(val)
		  this.data=val
	  },	
		//删除节点
	   deleteNode(val){
	   	console.log(this.data)
	   	this.delNode=this.deleteNode
	   	this.$emit('dataJsonFun',this.data)
	   }
	},
	created(){
		document.getElementsByTagName("main")[0].scrollTo(0,0)
	},
	mounted(){
		this.sybCode()
	},
  methods:{
		f1Img(input_file,maxWidth,maxHeight){
			var _this=this;
    		this.dataImgT(_this,input_file,maxWidth,maxHeight,
	    		function(str){
	    			_this.data.maxImg1=str
	    	})
    		input_file.value=''
		},  	
		f2Img(input_file,maxWidth,maxHeight){
			var _this=this;
    		this.dataImgT(_this,input_file,maxWidth,maxHeight,
	    		function(str){
	    			_this.data.minImg1=str
	    	})
    		input_file.value=''
		},  	
		f3Img(input_file,maxWidth,maxHeight){
			var _this=this;
    		this.dataImgT(_this,input_file,maxWidth,maxHeight,
	    		function(str){
	    			_this.data.maxImg2=str
	    	})
    		input_file.value=''
		},  	
		f4Img(input_file,maxWidth,maxHeight){
			var _this=this;
    		this.dataImgT(_this,input_file,maxWidth,maxHeight,
	    		function(str){
	    			_this.data.minImg2=str
	    	})
    		input_file.value=''
		},  	
		f5Click(index){
			this.data.strengthList.splice(index,1)
		},
		addf5(){
			this.data.strengthList.push({
					img:"http://page-bucket.oiaqye7985.com/land-page/images/module16/qualifications.jpg",
					p:"国家防火建筑材料质量报告"
			})
		},
		f5Img(input_file,maxWidth,index){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.strengthList[index].img=str
	    	})
    		input_file.value=''
		},  	
		f6Click(index){
			this.data.activityList.splice(index,1)
		},
		addf6(){
			this.data.activityList.push({
				h1:"强化复合地板",
				h2:"三层实木地板",
				red1:"八色可选",
				red2:"专业定制",
				h3:"环保自然  脚感舒适",
				abt:"抢优惠名额  >",
				day:"04",
				hour:"04",
				min:"04",
				second:"04",
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module16/list1.png"
			})
		},
		f6Img(input_file,maxWidth,index){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.activityList[index].img=str
	    	})
    		input_file.value=''
		},
		f7Click(i,j){
			this.data.seriesList[i].seriesListT.splice(j,1)
		},
		
		addf7(i){
			this.data.seriesList[i].seriesListT.push({
				left:"家用环保木地板家用环保木地板",
				right:"点击购买【有优惠】",
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module16/list2.png",
			})
		},
		f7Img(maxWidth,i,j){
			var _this=this;
			let input_file=document.getElementById("f"+i+j);
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.seriesList[i].seriesListT[j].img=str
	    	})
    		input_file.value=''
		},
		f8Click(index){
			this.data.footList.splice(index,1)
		},
		
		addf8(){
			this.data.footList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module16/list3.png",
				p:"厂区一角"
			})
		},	
		
		f8Img(input_file,maxWidth,index){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.footList[index].img=str
	    	})
    		input_file.value=''
		},		
		//设置id
	 	funtionId(index,indexS){
	 		return "f"+index+indexS
	 	},		
		//操作文本结束	  	
	
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
				console.log(res)
			}).catch((res)=>{
				console.log(res)
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
    	/*上传图片**/
		dataImgT(_this,input_file,maxWidth,maxHeight, get_data){
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
                    if(maxWidth<=(image.width+5)&&maxWidth>=(image.width-5)&&maxHeight==(image.height)&&parseInt(file.size/1024)<700){
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
						_this.open("请确保图片的宽为"+maxWidth+"px,高为"+maxHeight+"px",'warning')
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
};	
</script>
<style>
.module16	{
		background: url(http://page-bucket.oiaqye7985.com/img/1542679453374.jpg);
}
.module16 input{
	background: none;
	border: none;
}
.module16 textarea{
	background: none;
	border: none;
	width: 70px;
	height: 70px;
	
}
.template16 *{
	margin: 0;
	padding: 0;
	list-style: none;
	font-style: none;
	font-weight: normal;
	box-sizing: border-box;
	font-style: normal;
}
.template16 .row{
	width: 1220px;
	margin: auto;
}
.module16 .module16_banner{
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	width: 100%;
	min-width: 1280px;
}
.module16 .module16_banner .module16_bannerContent{
	width: 500px;
}
.module16 .module16_banner .module16_bannerLeft,.module16_banner  .module16_bannerRight{
	width: 36%;
	overflow: hidden;
}
.module16 .module16_bannerContent{
	padding-top: 40px;
}
.module16 .module16_bannerContent .module16_bannerContentTop{
	text-align: center;
	font-size: 40px;
	color: #222222;
	text-align: center;
	align-items: center;
	justify-content: space-between;
}
.module16 .module16_bannerContent .module16_bannerContentTop i{
	display: inline-block;
	width: 40px;
	height: 1px;
	background: #000;
	position: relative;
	top: -10px;
}
.module16 .module16_bannerContent>h2{
	font-size: 46px;
	color: #ff0036;
	padding: 0;
	margin: 0;
	text-align: center;
}
.module16 .module16_bannerContent>h5{
	font-size: 28px;
	color: #444444;
	text-align: center;
	font-weight: normal;
	margin: 0;
	padding: 30px 0;
}
.module16 .module16_bannerContentMin{
	display: flex;
	align-items: center;
	justify-content: center;
}
.module16 .module16_bannerContent .module16_bannerContentMin{
	padding-top: 50px;
	text-align: center;
}
.module16 .module16_bannerContent .module16_bannerContentMin h3{font-weight: normal;font-size: 20px;color: #333333;}
.module16 .module16_bannerContent .module16_bannerContentMin h4{
	font-size: 18px;
	color: #555555;
}
.module16 .module16_bannerContent .module16_bannerContentMin h4 i{
	font-style: normal;
	font-size: 28px;
	color: #f41717;
}
.module16 .module16_bannerContent .module16_bannerContentMin h4 .number{
	font-style: normal;
	font-size: 28px;
	color: #f41717;
}
.module16 .module16_bannerContent .module16_bannerContentMin button{
	width: 100%;
	height: 52px;
	text-align: center;
	line-height: 52px;
	background: #111;
	border: none;
	color: #fff;
	outline: none;
	font-size: 26px;
}
.module16 .module16_bannerContent .module16_bannerContentMin .min_right button{
	background: #f41a48;
	margin-left: 2px;
}

.module16 .module16_bannerBottom{
	width: 100%;
	min-width: 1280px;
	background-image: url(http://page-bucket.oiaqye7985.com/land-page/images/module16/radius.png);
	background-size: 100% 100%;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-content: center;
}
.module16 .module16_bannerBottom h4{
	margin: 0;
	padding: 0;
	line-height: 77px;
	font-size: 32px;
	color: #ffffff;
	font-weight: normal;
}
.module16 .module16_bannerBottom .module16_bannerBottomR{
	font-size: 24px;
	color: #ffffff;
}
.module16_bannerBottom .module16_bannerBottomR .time{
	font-size: 40px;
	color: #ffffff;
	margin-left: 10px;
}
.module16 .module16_bannerBottom .img{
	width: 235px;
	text-align: center;
}
.module16 .module16_bannerBottom .img img{
	position: relative;
	left: 32px;
    top: -40px;
}

.module16 .module16_strength{
	padding-top: 30px;
}
.module16 .module16_strength .module16_strengthTitle{
	position: relative;
	z-index: 10;
	width: 430px;
	margin: auto;
	border-bottom: 2px solid #191919;
}
.module16 .module16_strengthTitleBorder{
	width: 350px;
	height: 100px;
	border-radius: 5px;
	border: 2px solid #fff;
	margin: auto;
	text-align: center;
	padding: 16px 0;
	box-sizing: border-box;
	position: relative;
}
 .module16 .module16_strengthTitleBorder h2{
	font-size: 30px;
	color: #ff0036;
	margin: 0;
	padding: 0;
	font-weight: normal;
}
.module16 .module16_strengthTitleBorder p{
	color: #fff;
	font-size: 20px;
	margin: 0;
	padding: 0;
	letter-spacing: 10px;
}
.module16  .module16_strengthTitleBorder i{
	position: absolute;
	background: #191919;
	color: #ff0036;
	font-style: normal;
	font-size: 20px;
	right: -10px;
	top: -10px;
	border-radius: 50%;
	display: block;
	width: 25px;
	height: 25px;
	text-align: center;
	line-height: 25px;
}
.module16 .module16_strengthContent{
	width: 1220px;
	border: 2px solid #ff0036;
	margin: auto;
	position: relative;
	top: -2px;
	box-sizing: border-box;
}
.module16 .module16_strengthContent .module16_strengthContentList{
	padding: 70px 65px 30px;
	display: flex;
	flex-flow: wrap;
	align-items: center;
	justify-content: space-between;
}
.module16 .module16_strengthContent .module16_strengthContentList .list{
	width: 315px;
	margin-bottom: 20px;
}
.module16 .module16_strengthContent .module16_strengthContentList .list>button{
	font-size: 18px;
	color: #fff;
	padding: 10px 0;
	width: 100%;
	background: #fe0135;
	border: none;
	outline: none;
	cursor: pointer;
	margin-top: 14px;
}
.module16 .module16_strengthContentAbt{
	width: 100%;
	text-align: center;
	padding: 15px 0;
	background: #ff0135;
	color: #000000;
	font-size: 20px;
}
.module16 .module16_strengthContentAbt i{
	font-style: normal;
	width: 20px;
	height: 20px;
	line-height: 20px;
	display: inline-block;
	border: 1px solid #000000;
	border-radius: 50%;
	color: #000000;
	position: relative;
	top: 1px;
	margin-left: 10px;
}
.module16 .module16_activity{
	padding-top: 60px;
}
.module16 .module16_activityContent{
	width: 1220px;
	margin: auto;
	padding-top: 60px;
}
.module16 .module16_activityContent .module16_activityContentList{
	width: 1220px;
	/*height: 548px;*/
	border-radius: 10px;
	background: #fe0135;
	padding: 15px;
	box-sizing: border-box;
	text-align: center;
	margin-bottom: 40px;
}
.module16 .module16_activityContent .module16_activityContentList .title{
		font-size: 22px;
	color: #ffffff;
}
.module16 .module16_activityContent .module16_activityContentList .time{
	font-size: 32px;
	margin-left: 10px;
}
.module16 .module16_activityContent .module16_activityContentList .red_bg{
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module16/red_bg.png);
	background-repeat-y: no-repeat;
	height: 17px;
	position: relative;
	z-index: 10;
	top: 17px;
}
.module16 .module16_activityContent .module16_activityContentList  .red_bgT{
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module16/borderRadius.jpg);
	background-repeat-y: no-repeat;
	height: 17px;
}
.module16 .module16_activityContentListT{
	/*height: 463px;*/
	overflow: hidden;
	background: #fff;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
.module16 .module16_activityContentListT .left{
	width: 320px;
	padding-top: 54px;
	float: left;
	height: 100%;
}
.module16 .module16_activityContentListT .left h2{
	width: 272px;
	margin: 0 auto;
	padding: 0;
	color: 34px;
	font-size: 34px;
	font-weight: normal;
	padding-bottom: 15px;
	color: #222222;
	border-bottom: 1px dashed #222222;
}
.module16 .module16_activityContentListT .left h3{
	font-size: 32px;
	color: 3222222;
	letter-spacing: 10px;
	margin: 0;
	padding:20px 0 0;
	margin-bottom: 36px;
}
.module16 .module16_activityContentListT .left p{
	width: 200px;
	height: 40px;
	line-height: 40px;
	background: #fe0135;
	margin: auto;
	font-size: 26px;
	color: #ffffff;
	margin-bottom: 20px;
}
.module16 .module16_activityContentListT .left h4{
	font-size: 28px;
	color: #222222;
	font-weight: normal;
	margin: 0;
	padding: 0;
}
.module16 .module16_activityContentListT .left button{
	background: none;
	border: none;
	font-size: 22px;
	color: #ff0036;
	margin-top: 29px;
	outline: none;
	cursor: pointer;
}
.module16 .module16_activityContentListT .right{
	width: 840px;
	height: 100%;
	float: right;
	overflow: hidden;
	position: relative;
}
.module16 .module16_activityContentListT .right .triangle{
    width: 0;
    height: 0;
    border-bottom: 2265px solid #fff;
    border-right: 464px solid transparent;
    position: absolute;
    top: -5px;
    left: 0px;
    z-index: 20;
}
.module16 .module16_strengthTitleContent{
	width: 1220px;
	
	margin: auto;
}
.module16 .module16_activityContentListT .module16_seriesList{
	/*height: 445px;*/
	overflow: hidden;
	box-sizing: border-box;
	padding: 16px 0 0 25px;
}
.module16 .module16_activityContentListT .module16_seriesList .module16_seriesListLi{
	float: left;
	width: 380px;
	height: 380px;
	overflow: hidden;
	position: relative;
	float: left;
	margin-bottom: 20px;
	margin-left: 10px;
}

.module16 .module16_activityContentListT .module16_seriesList .module16_seriesListLi:nth-child(3n-2){
	margin-left: 0;
}

.module16 .module16_activityContentListT .module16_seriesList .img{
	width:370px ;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.module16 .module16_activityContentListT .module16_seriesList h2{
	position: absolute;
	z-index: 10;
	width: 155px;
	height: 44px;
	line-height: 44px;
	font-size: 22px;
	color: #ffffff;
	background: #161616;
	top: 0;
	margin: 0;
	padding: 0;
}
.module16 .module16_activityContentListT .module16_seriesList .bottom{
	position: absolute;
	bottom: 0;
	height: 60px;
	width: 380px;
	color: #fff;
}
.module16 .module16_activityContentListT .module16_seriesList .bottom .cornerMark_title{
	width: 185px;
	height: 50px;
	overflow: hidden;
	position: relative;
	float: left; 
}
.module16 .module16_activityContentListT .module16_seriesList .bottom .cornerMark_title>div{
 	width: 160px;
 	height: 50px;
 	background: #161616;
 }
.module16 .module16_activityContentListT .module16_seriesList .bottom .cornerMark_title>span{
 	display: block;
 	right: 0;
 	top: 0;
 	position: absolute;
 	border: 26px solid transparent;
 	border-top-color: #161616;
 	border-left-color: #161616;
 	border-top-width: 50px;
 }
.module16 .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleLeft{
	bottom: -10px;
}
.module16 .module16_activityContentListT .module16_seriesList .bottom   .cornerMark_titleRight{
 	transform: rotateY(180deg) rotateX(180deg);
 	float: right;
 }
.module16 .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleRight>div{background: #ff0036;}
.module16 .module16_activityContentListT .module16_seriesList .bottom  .cornerMark_titleRight>span{border-top-color: #ff0036;border-left-color:#ff0036;}
.module16 .module16_activityContentListT .cornerMarkI{
 	display: inline-block;
 	border: 5px solid transparent;
 	border-top-color: #b20127;
 	border-left-color: #b20127;
 	transform: rotatex(-180deg) ;
 	position:absolute;
 	top: -10px;
	right: 0px
 }
.module16  .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleLeft{
 	width: 215px;
 }
.module16   .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleLeft>div{
  	width: 158px;
  	padding-right: 7px;
    box-sizing: border-box;
    text-align: left;
    padding-left: 10px;
    position: relative;
    z-index: 10;
    font-size: 18px;
  }
.module16    .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleRight{
   	width: 209px;
   }
.module16    .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleRight>div{
   	width: 180px;
   }
.module16    .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleRight>span{
   }
.module16   .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleLeft>span{
  	right: 24px;
  }
.module16  .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleRight{
 	top: -50px;
 }
.module16 .module16_activityContentListT .module16_seriesList .bottom .cornerMark_titleRight>div>button{
   	transform: rotateY(-180deg) rotatex(-180deg);
   	background: none;
   	border: none;
   	cursor: pointer;
   	outline: none;
   	font-size: 18px;
   	color: #ffffff;
   	height: 100%;
}
.module16 .module16_activityBottom{
	width: 1200px;
	margin: auto;
	display: flex;
	padding-bottom: 50px;
	flex-flow: wrap;
	align-items: center;
	justify-content: center;
}
.module16 .module16_activityBottom .list{
	float: left;
	width: 290px;
	height: 125px;
	background: #fe0135;
	border-radius: 5px;
	padding: 5px;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
}
.module16 .module16_activityBottom .list:nth-child(2){
	margin: 0 70px;
}
.module16 .list_border{
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border:1px solid rgba(255, 255, 255, 0.8);
}
.module16 .list_border .left{
	width: 80px;
	font-size: 23px;
	color: #ffffff;
	padding: 30px 15px;
	box-sizing: border-box;
	border-right:1px solid #d8042f;
	margin: 0;
	height: 100%;
}
.module16 .module16_activityBottom .list .top{
	position: absolute;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background: #101011;
	top: -9px;
    left: 77px;
	
}
.module16 .module16_activityBottom .list .bottom{
	position: absolute;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background: #101011;
	bottom: -9px;
    left: 77px;
	
}
.module16 .list_border .right{
	width: 200px;
	text-align: center;
	font-size: 22px;
	color: #fff;
}
.module16 .list_border .right>p>span{
	font-size: 18px;
}
.module16 .list_border .right p{padding: 0;margin: 0;}
.module16 .module16_foot{
	color: #fff;
	width: 1050px;
	margin: auto;
	line-height: 32px;
	padding: 70px 0 40px;
}
.module16 .module16_footList{
	width: 1050px;
	margin: auto;
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
}
.module16_footList .list{
	width: 300px;
	float: left;
}
.module16 .module16_footList .list .list_img{
	width: 300px;
	height: 300px;
	overflow: hidden;
	border-radius: 10px;
}
.module16 .module16_footList .list p{
	font-size: 18px;
	color: #ffffff;
	text-align: center;
}
.module16 .foot_top{
	text-align: center;
	height: 70px;
	line-height: 70px;
	margin: 20px 0;
}
.module16 .foot_top a{
	padding: 15px 20px;
	color: #000000;
	text-decoration: none;
	background: #f10135;
	border-radius: 10px;
}
@media (max-width:1440px ) {
	.module16_banner .module16_bannerLeft, .module16_banner .module16_bannerRight{
		/*overflow: auto;*/
	}
	.module16_banner .module16_bannerLeft img, .module16_banner .module16_bannerRight img{
		/*width: 100%;*/
	}
	.module16_bannerContent{
		padding-top: 20px;
	}
	.module16_bannerContent .module16_bannerContentMin{
		padding-top: 15px;
	}
	.module16_bannerContent .module16_bannerContentTop{
		font-size: 32px;
	}
	.module16_bannerContent>h2{
		font-size: 28px;
	}
	.module16_bannerContent .module16_bannerContentMin h3{
		margin: 0;
		padding: 12px 0 0;
	}
	.module16_bannerContent .module16_bannerContentMin h4{
		margin: 0;
		padding: 12px 0;
	}
	.module16_bannerContent .module16_bannerContentMin button{
		height: 30px;
		line-height: 30px;
		font-size: 20px;
	}
	.module16_bannerContent>h5{
		padding: 8px 0;
	}
	.module16_bannerBottom .img img{
	    top: -10px;
	}
}
</style>