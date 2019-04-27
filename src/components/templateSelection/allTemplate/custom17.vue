<template>

	<div class="template17">
		<div class="template17_banner MaskHover">
			<div class="template17_banner_bg imgpc">
				<img v-bind:src="data.banner.imgpc" width="100%"/>
			</div>
			<div class="template17_banner_bg imgmiddle">
				<img v-bind:src="data.banner.imgm" width="100%"/>
			</div>
			<div class="template17_banner_position">
				<h1 :style="{color:data.color}">
					<span v-if="!delNode">{{data.banner.h1}}</span>
					<input type="text"  v-model="data.banner.h1" v-if="delNode"/>
				</h1>
				<div class="template17_banner_list">
					<span v-for="(item,index) in data.bannerlist">
						<span v-if="!delNode">{{item}}</span>
						<input type="text"  v-model="data.bannerlist[index]" v-if="delNode" style="width: 180px;text-align: center;"/>
					</span>
				</div>
			</div>
			<div class="template17_banner_abt" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
				<a href="javascript:void(0)" :style="{background:switchBg.bannerAbtColor}"><i>-</i>
					<span  v-if="!delNode">{{data.banner.abt}}</span>	
					<input type="text"  v-model="data.banner.abt" v-if="delNode" style="width: 150px;text-align: center;"/>
				<i>-</i></a>
			</div>
			<div class="template17_banner_ellipse" :style="{background:switchBg.radiusBg}">
				<div class="left">
					<p>
						<span v-if="!delNode" >{{data.banner.h2}}</span>
						<input type="text"  v-model="data.banner.h2" v-if="delNode" style="width: 115px;text-align: center;"/>
					</p>
					<h2>
						<span v-if="!delNode">{{data.banner.h3}}</span>
						<input type="text"  v-model="data.banner.h3" v-if="delNode" style="width: 115px;text-align: center;"/>
					</h2>
				</div>
				<div class="right" :style="{background:switchBg.radiusColor}">
					<span v-if="!delNode">{{data.banner.p}}</span>
					<input type="text"  v-model="data.banner.p" v-if="delNode" style="width: 90px;text-align: center;"/>
				</div>
			</div>    
			<div class="template17_banner_Mellipse">
				{{data.banner.h2+data.banner.h3+data.banner.p}}
			</div>
			<div class="MaskBox" v-if="delNode" style="height: 25%;top: 270px;">
				<p>上传pc端banner的宽为1920高为750，上传移动端banner的宽为750高为960</p>
				<p>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传pc端</span>
						<input type="file" ref="f1" @change="f1Img($refs.f1,1920,750)"/>
					</a>
					<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
						<i class="el-icon-upload"></i><span>上传移动端</span>
						<input type="file" ref="f2" @change="f2Img($refs.f2,750,960)"/>
					</a>
				</p>
			</div>
		</div>
		<!---->
		<div class="template17_content"  :style="{background:'url(' + switchBg.img5 + ')'}">            
			<div class="template17_content_recommend">
				<div class="template17_content_title">
					<h1 :style="{background:data.color,color:switchBg.textColor}">
						<span v-if="!delNode">{{data.recommendTitle.h1}}</span>
						<input type="text"  v-model="data.recommendTitle.h1" v-if="delNode" style="width: 100%;text-align: center;"/>
					</h1>
					<p :style="{background:data.color}">
						<span v-if="!delNode">{{data.recommendTitle.h2}}</span>
						<input type="text"  v-model="data.recommendTitle.h2" v-if="delNode" style="width: 100%;text-align: center;"/>
					</p>
					<div class="img">
						<img v-bind:src="switchBg.img1" width="101%"/>
					</div>
				</div>
				<div class="template17_content_recommend_top">
					<div><img v-bind:src="switchBg.img2"/></div>
					<h1><i></i>
						<span v-if="!delNode">{{data.recommendTitle.h3}}</span>
						<input type="text"  v-model="data.recommendTitle.h3" v-if="delNode" style="width: 150px;text-align: center;"/>
					<i></i></h1>
				</div>
				<!---->
				<div class="template17_content_recommend_box">
					<div class="list" v-for="(item,i) in data.recommendList" >
						<div class="left MaskHover">
							<div class="position">
								<img src="http://page-bucket.oiaqye7985.com/land-page/images/module17/trapezoid.png" />
								<p>
									<span v-if="!delNode">
										{{item.host}}
									</span>
									<input type="text"  v-model="item.host" v-if="delNode" style="width: 150px;text-align: center;"/>
								</p>
							</div>
							<img v-bind:src="item.img"/>
							<div class="MaskBox" v-if="delNode" >
								<p>
									<span v-show="item.ifimg"> 上传图片的宽为300px</span>
									<span v-show="!item.ifimg"> 上传视频的大小不能超过20M</span>
								</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="item.ifimg">
										<i class="el-icon-upload"></i><span>上传图片</span>
										<input type="file" ref="f3" @change="f3Img($refs.f3[i],300,i)"/>
									</a>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!item.ifimg" >
										<i class="el-icon-upload"></i><span>上传视频</span>
										<input type="file"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="removerecommendList(i)">删除</el-button>
								</p>
								<!--<p style="padding-top: 10px;" >
									<el-button  icon="iconfont  icon-weibiaoti--" @click="item.ifimg=!item.ifimg">
										<span v-show="item.ifimg">切换为视频上传</span>
										<span v-show="!item.ifimg">切换为图片上传</span>
									</el-button>
								</p>-->
							</div>
						</div>
						<div class="right">
							<h2>
								<span v-if="!delNode">{{item.h1}}</span>
								<input type="text"  v-model="item.h1" v-if="delNode" style="width: 100%;text-align: left;"/>
							</h2>
							<ul>
								<li v-for="(itemT,j) in item.ul">
									<span v-if="!delNode">{{itemT}}</span>
									<input type="text"  v-model="item.ul[j]" v-if="delNode" style="width: 70%;text-align: left;"/>
									<el-button type="danger" icon="el-icon-delete" circle v-if="delNode" @click="removeTxt(i,j)"></el-button>
									<el-button type="success" icon="el-icon-plus" circle v-if="delNode" @click="addTxt(i,j)"></el-button>
								</li>
							</ul>
							<a href="javascript:void(0)" :style="{background:switchBg.listAbt,color:switchBg.textColor}" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
								<span v-if="!delNode">{{item.abt}}</span>
								<input type="text"  v-model="item.abt" v-if="delNode" style="width:100%;text-align: left;"/>
							</a>
						</div>
					</div>
					<div class="addNode " v-if="delNode" style="text-align: center; width: 100%;" >
						<el-button type="primary" icon="el-icon-edit" @click="addrecommendList">添加一块</el-button>
					</div>
					<!--------------------------------------------------------->
				</div>
			</div>
			<div class="template17_content_compare">
				<div class="left MaskHover" :style="{background:'url(' + switchBg.img4 + ')'}">
					<div class="radius">
						<img v-bind:src="data.compare.img" v-if="data.compare.ifimg"/>
						<video  v-bind:poster="data.compare.img" class="listvideo" v-if="!data.compare.ifimg">
							<source v-bind:src="data.compare.video" type="video/mp4">
						</video>
					</div>
					<div class="MaskBox" v-if="delNode" >
						<p>
							<span > 上传图片的宽为460px</span>
							<span v-show="!data.compare.ifimg"> 上传视频的大小不能超过20M</span>
						</p>
						<p >
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" >
								<i class="el-icon-upload"></i><span>上传图片</span>
								<input type="file" ref="f4" @change="f4Img($refs.f4,460)" />
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!data.compare.ifimg">
								<i class="el-icon-upload" ></i><span>上传视频</span>
								<input type="file" ref="f11" @change="f11Video($refs.f11)"/>
							</a>
						</p>
						<p style="padding-top: 10px;">
							<el-button  icon="iconfont  icon-weibiaoti--" @click="data.compare.ifimg=!data.compare.ifimg">
								<span v-show="data.compare.ifimg">切换为视频上传</span>
								<span v-show="!data.compare.ifimg">切换为图片上传</span>
							</el-button>
						</p>
					</div>
				</div>
				<div class="right">
					<p>
						<span v-if="!delNode">{{data.compare.p}}</span>
						<input type="text"  v-model="data.compare.p" v-if="delNode" style="width:100%;text-align: left;" maxlength="20"/>
					</p>
					<h3>
						<span v-if="!delNode">{{data.compare.h1}}</span>
						<textarea v-model="data.compare.h1" v-if="delNode" style="width:100%;text-align: left;" maxlength="26"></textarea>
					</h3>
					<div class="template17_content_compare_abt" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<a href="javascript:void(0)" :style="{background:switchBg.listAbt,color:switchBg.textColor}">
							<span v-if="!delNode">{{data.compare.abt}}</span>
							<input type="text"  v-model="data.compare.abt" v-if="delNode" style="width:100%;text-align: left;"/>
						</a>
						<span v-if="!delNode">{{data.compare.span}}</span>
						<input type="text"  v-model="data.compare.span" v-if="delNode" style="width:250px;text-align: left;color: #be0000;"/>
					</div>
				</div>
			</div>
			<!---->
			<div class="template17_content_xinghao">
				<div class="template17_content_title">
					<h1 :style="{background:data.color,color:switchBg.textColor}">
						<span v-if="!delNode">{{data.chooseTitle.h1}}</span>
						<input type="text"  v-model="data.chooseTitle.h1" v-if="delNode" style="width:100%;text-align: center;"/>
					</h1>
					<p :style="{background:data.color}">
						<span v-if="!delNode">{{data.chooseTitle.h2}}</span>
						<input type="text"  v-model="data.chooseTitle.h2" v-if="delNode" style="width:100%;text-align: center;"/>
					</p>
					<div class="img">
						<img v-bind:src="switchBg.img1" width="101%"/>
					</div>
				</div>
				<!---->
				<h2 class="template17_content_xinghaoH1">
					<i></i>
					<span class="title" v-if="!delNode">{{data.chooseTitle.h3}}</span>
					<input type="text"  v-model="data.chooseTitle.h3" v-if="delNode" style="width:380px;text-align: center;"/>
					<ul>
						<li v-for="(item,index) in data.chooseTitle.list">
							<input type="radio" name="a"/>
							<span v-if="!delNode">{{item}}</span>
							<input type="text"  v-model="data.chooseTitle.list[index]" v-if="delNode" style="width:80px;text-align: center;"/>
						</li>
					</ul>
					<a href="javascript:void(0)" :style="{background:switchBg.listAbt,color:switchBg.textColor} " onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<span v-if="!delNode">{{data.chooseTitle.abt}}</span>
						<input type="text"  v-model="data.chooseTitle.abt" v-if="delNode" style="width:200px;text-align: center;"/>
					</a>
				</h2>
				<!---->
				<div class="template17_content_xinghaoBox">
					<div class="list" v-for="(item,index) in data.chooseList" >
						<div class="left MaskHover">
							<img v-bind:src="item.img"/>
							<div class="MaskBox" v-if="delNode" >
								<p style="font-size: 14px;">
									<span v-show="item.ifimg"> 上传图片的宽为250px</span>
									<span v-show="!item.ifimg"> 上传视频的大小不能超过20M</span>
								</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="item.ifimg">
										<i class="el-icon-upload"></i><span>上传图片</span>
										<input type="file" ref="f5" @change="f5Img($refs.f5[index],250,index)"/>
									</a>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!item.ifimg">
										<i class="el-icon-upload"></i><span>上传视频</span>
										<input type="file"/>
									</a>
									<el-button type="danger" icon="el-icon-delete" @click="removechooseList(index)">删除</el-button>
								</p>
								<!--<p style="padding-top: 10px;">
									<el-button  icon="iconfont  icon-weibiaoti--" @click="item.ifimg=!item.ifimg">
										<span v-show="item.ifimg">切换为视频上传</span>
										<span v-show="!item.ifimg">切换为图片上传</span>
									</el-button>
								</p>-->
							</div>
						</div>
						<div class="right">
							<h2 >
								<span v-if="!delNode">{{item.h1}}</span>
								<input type="text"  v-model="item.h1" v-if="delNode" style="width:100%;text-align: left;"/>
							</h2>
							<p>
								<span v-if="!delNode">{{item.p}}</span>
								<textarea v-model="item.p" v-if="delNode" style="width:100%;text-align: left;"></textarea>
							</p>
						</div>
					</div>
				</div>
			</div>	
			<div class="addNode " v-if="delNode" style="text-align: center; width: 100%;">
				<el-button type="primary" icon="el-icon-edit" @click="addchooseList">添加一块</el-button>
			</div>
			<!----------------------->
			<div class="template17_content_hengbanner MaskHover" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
				<img v-bind:src="data.hengImg" width="100%"/>
				<div class="MaskBox" v-if="delNode" >
					<p >
						上传图片的宽为1920px
					</p>
					<p >
						<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
							<i class="el-icon-upload"></i><span>上传图片</span>
							<input type="file" ref="f6" @change="f6Img($refs.f6,1920)"/>
						</a>
					</p>
				</div>
			</div>
			<!---------------->
			<div class="template17_content_Range">
				<div class="template17_content_title">
					<h1 :style="{background:data.color,color:switchBg.textColor}">
						<span v-if="!delNode">{{data.advantageTiele.h1}}</span>
						<input type="text"  v-model="data.advantageTiele.h1" v-if="delNode" style="width:100%;text-align: center;"/>
					</h1>
					<p :style="{background:data.color}">
						<span v-if="!delNode">{{data.advantageTiele.h2}}</span>
						<input type="text"  v-model="data.advantageTiele.h2" v-if="delNode" style="width:100%;text-align: center;"/>
					</p>
					<div class="img ">
						<img v-bind:src="switchBg.img1" width="101%"/>
					</div>
				</div>
				<!---->
				<div class="template17_content_RangeImg MaskHover">
					<img v-bind:src="data.advantage.img" width="100%" v-if="data.advantage.ifimg"/>
					<video controls class="listvideo" v-if="!data.advantage.ifimg" v-bind:poster="data.advantage.img">
						<source v-bind:src="data.advantage.video" type="video/mp4"></source>
					</video>
					<div class="MaskBox" v-if="delNode" >
						<p>
							<span > 上传图片的宽为950px</span>
							<span v-show="!data.advantage.ifimg"> 上传视频的大小不能超过20M</span>
						</p>
						<p >
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" >
								<i class="el-icon-upload"></i><span>上传图片</span>
								<input type="file" ref="f7" @change="f7Img($refs.f7,950)"/>
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!data.advantage.ifimg">
								<i class="el-icon-upload"></i><span>上传视频</span>
								<input type="file" ref="f9" @change="f9Video($refs.f9)"/>
							</a>
						</p>
						<p style="padding-top: 10px;">
							<el-button  icon="iconfont  icon-weibiaoti--" @click="data.advantage.ifimg=!data.advantage.ifimg">
								<span v-show="data.advantage.ifimg">切换为视频上传</span>
								<span v-show="!data.advantage.ifimg">切换为图片上传</span>
							</el-button>
						</p>
					</div>
				</div>
				<div class="template17_content_RangeAbt" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
					<a href="javascript:void(0)" :style="{background:switchBg.listAbt,color:switchBg.textColor}">
						<span v-if="!delNode">{{data.advantage.abt}}</span>
						<input type="text"  v-model="data.advantage.abt" v-if="delNode" style="width:100%;text-align: center;"/>
					</a>
				</div>
			</div>
			
			<div class="template17_content_Strength" :style="{background:switchBg.bannerbg}">
				<div class="template17_content_bannerBottom">
					<img v-bind:src="switchBg.img3"/>
				</div>
				<div class="template17_content_MbannerBottom">
					<img src="http://page-bucket.oiaqye7985.com/land-page/images/module17/mshili.jpg" width="100%"/>
				</div>
				<h1 :style="{color:switchBg.textColor}"> 
					<span v-if="!delNode">{{data.strength.h1}}</span>
					<input type="text"  v-model="data.strength.h1" v-if="delNode" style="width:100%;text-align: center;"/>
				</h1>
				<div class="template17_content_StrengthImg MaskHover">
					<img v-bind:src="data.strength.img" width="100%" v-if="data.strength.ifimg"/>
					<video controls class="listvideo" v-if="!data.strength.ifimg" v-bind:poster="data.strength.img">
						<source v-bind:src="data.strength.video" type="video/mp4"></source>
					</video>
					<div class="MaskBox" v-if="delNode" >
						<p>
							<span > 上传图片的宽为1200px</span>
							<span v-show="!data.strength.ifimg"> 上传视频的大小不能超过20M</span>
						</p>
						<p >
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" >
								<i class="el-icon-upload"></i><span>上传图片</span>
								<input type="file" ref="f8" @change="f8Img($refs.f8,1200)"/>
							</a>
							<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!data.strength.ifimg">
								<i class="el-icon-upload"></i><span>上传视频</span>
								<input type="file" ref="f10" @change="f10Video($refs.f10)"/>
							</a>
						</p>
						<p style="padding-top: 10px;">
							<el-button  icon="iconfont  icon-weibiaoti--" @click="data.strength.ifimg=!data.strength.ifimg">
								<span v-show="data.strength.ifimg">切换为视频上传</span>
								<span v-show="!data.strength.ifimg">切换为图片上传</span>
							</el-button>
						</p>
					</div>
					
				</div>
				<div class="template17_content_StrengthAbt" :style="{background:switchBg.bannerabtBG,color:switchBg.bannerabtcolor}" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
					<span v-if="!delNode">
						{{data.strength.abt}}
					</span>
					<input type="text"  v-model="data.strength.abt" v-if="delNode" style="width:100%;text-align: center;"/>
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
      	data:{
      		banner:{},
      		recommendTitle:{},
      		recommendTitle:{},
      		compare:{},
      		chooseTitle:{},
      		advantageTiele:{},
      		advantage:{},
      		strength:{}
      	},
      	delNode:true,
		syb_productType:null,//类型流量宝
		textColor:"#fff",
		abtColor:"#ffcc00",
		switchBg:{
			img1:"http://page-bucket.oiaqye7985.com/land-page/images/module17/wave.jpg",
			img2:"http://page-bucket.oiaqye7985.com/land-page/images/module17/king.jpg",
			img3:"http://page-bucket.oiaqye7985.com/land-page/images/module17/bannerBottom.png",
			img4:"http://page-bucket.oiaqye7985.com/land-page/images/module17/radius_bg.jpg",
			img5:"http://page-bucket.oiaqye7985.com/land-page/images/module17/background.jpg",
			radiusColor:"#313131",
			radiusBg:"#f46e61",
			bannerAbtColor:"#f40d0d",
			listAbt:"#e9be1d",
			textColor:"#333333",
			bannerbg:"#ffcc00",
			bannerabtBG:"#0b0d12",
			bannerabtcolor:"##FECE00"
		}
      };
    },
  props:["productType","dataJson","deleteNode","Ifcolor"],
  computed: {
	  
	},
	watch: {  
	   //监听数据变化
	  dataJson(val){
	   	console.log(val)
		  this.data=val
	  },	
	  Ifcolor(val){
	      this.data.color=val;
	      if(this.data.color=="#e9be1d"){
	      	this.switchBg={
				img1:"http://page-bucket.oiaqye7985.com/land-page/images/module17/wave.jpg",
				img2:"http://page-bucket.oiaqye7985.com/land-page/images/module17/king.jpg",
				img3:"http://page-bucket.oiaqye7985.com/land-page/images/module17/bannerBottom.png",
				img4:"http://page-bucket.oiaqye7985.com/land-page/images/module17/radius_bg.jpg",
				img5:"http://page-bucket.oiaqye7985.com/land-page/images/module17/background.jpg",
				radiusColor:"#313131",
				radiusBg:"#f46e61",
				bannerAbtColor:"#f40d0d",
				listAbt:"#e9be1d",
				textColor:"#333333",
				bannerbg:"#ffcc00",
				bannerabtBG:"#0b0d12",
				bannerabtcolor:"##FECE00"
			}
	      }else if(this.data.color=="#37bd65"){
	      	this.switchBg={
				img1:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/l1.png",
				img2:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/l2.png",
				img3:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/l3.png",
				img4:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/l4.jpg",
				img5:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/lanbg.jpg",
				radiusColor:"#37bd65",
				radiusBg:"#ffcb01",
				bannerAbtColor:"#37bd65",
				listAbt:"#ffcc00",
				textColor:"#ffffff",
				bannerbg:"#37bd65",
				bannerabtBG:"#ffcc00",
				bannerabtcolor:"#ffffff"
			}
	      }else if(this.data.color=="#5166ec"){
		      	this.switchBg={
					img1:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/z1.png",
					img2:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/z2.png",
					img3:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/z3.png",
					img4:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/z4.jpg",
					img5:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/lanbg.jpg",
					radiusColor:"#db3552",
					radiusBg:"#5d6fee",
					bannerAbtColor:"#db3552",
					listAbt:"#db3552",
					textColor:"#ffffff",
					bannerbg:"#5166ec",
					bannerabtBG:"#db3552",
					bannerabtcolor:"#ffffff"
				}
			}else if(this.data.color=="#f80f0f"){
				this.switchBg={
					img1:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/h1.png",
					img2:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/h2.png",
					img3:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/h3.png",
					img4:"http://page-bucket.oiaqye7985.com/land-page/images/images17/images/h4.jpg",
					img5:"http://page-bucket.oiaqye7985.com/land-page/images/module17/background.jpg",
					radiusColor:"#313131",
					radiusBg:"#5d6fee",
					bannerAbtColor:"#e40d0d",
					listAbt:"#3c3c3c",
					textColor:"#ffffff",
					bannerbg:"#f80f0f",
					bannerabtBG:"#08090e",
					bannerabtcolor:"#ffffff"
				}
	      }
//	      console.log(this.data.color)
	  },
		//删除节点
	   deleteNode(val){
	   	console.log(this.data)
	   	this.delNode=this.deleteNode
	   	this.$emit('dataJsonFun',this.data)
	   }
	},
	created(){
		document.getElementsByTagName("main")[0].scrollTo(0,0);
	},
	mounted(){
		this.sybCode()
	},
  methods:{
		removeTxt(i,j){
			if(this.data.recommendList[i].ul.length>1){
				this.data.recommendList[i].ul.splice(j,1)
			}
		},
		addTxt(i,j){
			this.data.recommendList[i].ul.push("型号：sl-08")
		},
		removerecommendList(i){
			this.data.recommendList.splice(i,1)
		},
		addrecommendList(){
			this.data.recommendList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module17/img1.jpg",
				videl:"",
				ifimg:true,
				host:"热门推荐",
				h1:"0.8吨小型挖掘机",
				abt:"质询产品报价",
				ul:["型号：sl-08","铲斗容量：0.025m³","挖掘高度：2490mm","挖掘深度：1400mm"]
			})
		},
		removechooseList(i){
			this.data.chooseList.splice(i,1)
		},
		addchooseList(){
			this.data.chooseList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module17/img2.jpg",
				video:"",
				ifimg:true,
				h1:"先导操作杆",
				p:"可选配先导操作杆，行走和大臂分开操作更方便安全"
			})
		},
		f1Img(input_file,maxWidth,maxHeight){
			var _this=this;
    		this.dataImgT(_this,input_file,maxWidth,maxHeight,
	    		function(str){
	    			console.log(str);
	    			_this.data.banner.imgpc=str
	    	})
    		input_file.value=''
		},
		f2Img(input_file,maxWidth,maxHeight){
			var _this=this;
    		this.dataImgT(_this,input_file,maxWidth,maxHeight,
	    		function(str){
	    			console.log(str);
	    			_this.data.banner.imgm=str
	    	})
    		input_file.value=''
		},
		f3Img(input_file,maxWidth,index){
			console.log(input_file,maxWidth,index)
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			console.log(str);
	    			_this.data.recommendList[index].img=str
	    	})
    		input_file.value=''
		},
		f4Img(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			console.log(str);
	    			_this.data.compare.img=str
	    	})
    		input_file.value=''
		},
		f5Img(input_file,maxWidth,index){
			console.log(input_file,maxWidth,index)
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			console.log(_this.data.chooseList[index]);
	    			_this.data.chooseList[index].img=str
	    	})
    		input_file.value=''
		},
		f6Img(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			console.log(str);
	    			_this.data.hengImg=str
	    	})
    		input_file.value=''
		},
		f7Img(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			console.log(str);
	    			_this.data.advantage.img=str
	    	})
    		input_file.value=''
		},
		f8Img(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			console.log(str);
	    			_this.data.strength.img=str
	    	})
    		input_file.value=''
		},
		f9Video(input_file){
			var _this=this;
			console.log(input_file);
			this.upfileVidel(input_file,_this,
	    		function(str){
	    			console.log(str)
		    		_this.data.advantage.video=str
		    	})
    		input_file.value=''
		},
		f10Video(input_file){
			var _this=this;
			console.log(input_file);
			this.upfileVidel(input_file,_this,
	    		function(str){
		    		console.log(str);
		    		_this.data.strength.video=str
		    	})
    		input_file.value=''
		},
		f11Video(input_file){
			var _this=this;
			console.log(input_file);
			this.upfileVidel(input_file,_this,
	    		function(str){
		    		console.log(str);
		    		_this.data.compare.video=str
		    	})
    		input_file.value=''
		},
		/*图片编辑结束*/  	
	
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
.template17 h1,.template17 h2,.template17 h3,.template17 p,.template17 ul,.template17 li{
	margin: 0;
	padding: 0;
	list-style: none;
}
.template17 a {
    color: #333;
    text-decoration: none;
}
.MaskBox a{color: #fff;}
.template17 input[type="text"]{
	border: none;
	background: none;
}
.template17 .template17_banner{
	
	position: relative;
	overflow: hidden;
}
.template17 .template17_banner a{color: #fff;}
.template17 .template17_banner .template17_banner_bg{
	/*position: absolute;
	top: 0;
	left: 0;*/
}
.template17 .template17_banner .template17_banner_bg img{display: block;}
.template17 .template17_banner  .template17_banner_position{
	position: absolute;
	padding: 5% 0 0;
	z-index: 1;
	top: 0;
	width: 100%;
	height: 100%;
	text-align: center;
}
.template17 .template17_banner  .template17_banner_position h1
{
	font-size: 69px;
	color: #fe7903;
	/*background: linear-gradient(to top , #ffe368, #fe7903);
	background-clip: text;
    -webkit-background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;*/
}
.template17 .template17_banner  .template17_banner_position h1 input{
	-webkit-text-fill-color: #e9be1d;
}
.template17 .template17_banner  .template17_banner_position .template17_banner_list{
	padding-top: 40px;
}
.template17 .template17_banner  .template17_banner_position .template17_banner_list span{
	padding: 15px ;
	background: #43525e;
	font-size: 40px;
	color: #fff;
	margin: 0 15px;
}
.template17 .template17_banner .template17_banner_abt{
	width: 100%;
	position: absolute;
	bottom: 10%;
	text-align: center;
	z-index: 10;
	
}
.template17 .template17_banner .template17_banner_abt i{
	padding: 0 5px;
}
.template17 .template17_banner .template17_banner_abt a{
	padding: 24px 30px;
	border-radius: 5px;
	background: #f40d0d;
	font-size: 25px;
	color: #ffffff;
}
.template17 .template17_banner  .template17_banner_ellipse{
	width: 265px;
	height: 170px;
	border-radius: 50% / 50%;
	background: linear-gradient(to top , #f46e61, #f00200);
	position: absolute;
	top: 15%;
	left: 3%;
	color: #fff;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px 0 40px;
	box-sizing: border-box;
}
.template17 .template17_banner  .template17_banner_ellipse .left{
	float: left;
	font-size: 37px;
}
.template17 .template17_banner  .template17_banner_ellipse .left h2{
	letter-spacing: 20px;
}
.template17 .template17_banner  .template17_banner_ellipse .right{
	width: 85px;
	height: 85px;
	background: #313131;
	border-radius: 50%;
	line-height: 85px;
	float: right;
	text-align: center;
	font-size: 36px;
}
.template17_content{
	background-image:url(http://page-bucket.oiaqye7985.com/land-page/images/module17/background.jpg);
	padding-top: 70px;
}
.template17_content_recommend{
	width:1230px;
	margin: auto;
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 27px;
}
.template17_content_title{
	text-align: center;

}
.template17_content_title h1{
	font-size: 35px;
	color: #333333;
	background: #e9be1d;
	padding: 35px 0 20px;
}
.template17_content_title p{
	font-size: 20px;
	background: #e9be1d;
	padding-bottom: 20px;
	color: #fff;
}
.template17_content_recommend_top{
	text-align: center;
}
.template17_content_recommend_top h1{
	font-size: 34px;
	color: #2a2a2a;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.template17_content_recommend_top h1 i{
	display: inline-block;
	width: 100px;
	height: 1px;
	background: #2a2a2a;
	margin: 0 30px;
}
.template17_content_recommend_box{
	padding: 30px 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: wrap;
}
.template17_content_recommend_box .list{
	display: flex;
	margin-bottom: 90px;
}
.template17_content_recommend_box .list .left{
	position: relative;
}
.template17_content_recommend_box .list .left .position{
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
}
.template17_content_recommend_box .list .left .position p{
	position: absolute;
	transform: rotateZ(-45deg);
	top: 34px;
    left: -25px;
	font-size: 28px;
	z-index: 10;
	color: #fff;
}
.template17_content_recommend_box .list .right h2{
	font-size: 24px;
	color: #333333;
	padding-bottom: 15px;
	padding-left: 15px;
}
.template17_content_recommend_box .list .right ul li{
	font-size: 18px;
	color: #333333;
	padding: 10px 0;
	padding-left: 15px;
}
.template17_content_recommend_box .list .right ul li .el-button.is-circle{
	padding: 3px;
}
.template17_content_recommend_box .list .right a{
	font-size: 20px;
	color: #363636;
	display: flex;
	padding: 12px ;
	background: #e9be1d;
}
.template17_content_compare{
	width: 1230px;
    margin: auto;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 27px;
    padding: 90px 0 ;
    box-sizing: border-box;
    padding-left: 100px;
    display: flex;
}
.template17_content_compare .left{
	width: 420px;
	height: 413px;
	background: url(http://page-bucket.oiaqye7985.com/land-page/images/module17/radius_bg.jpg);
	display: flex;
	align-items: center;
	justify-content: center;
}
.template17_content_compare .left .radius{
	width: 330px;
	height: 330px;
	overflow: hidden;
	border-radius: 50%;
	margin-right: 30px;
}
.template17_content_compare .right{
	padding-left: 45px;
	padding-top: 40px;
}
.template17_content_compare .right p{
	font-size: 35px;
	color: #252525;
	margin-bottom: 10px;
}
.template17_content_compare .right h3{
	font-size: 45px;
	color: #252525;
	max-width: 600px;
	line-height: 65px;
	padding: 15px 0;
}
.template17_content_compare_abt{
	font-size: 25px;
	color: #2c2c2c;
}
.template17_content_compare_abt a{
	display: inline-block;
	padding: 20px 30px;
	background: #f0d05c;
	border-radius: 5px;
}
.template17_content_compare_abt>span{
	color: #be0000;
	font-size: 22px;
}
.template17_content_xinghao{
	width: 1230px;
    margin: auto;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 27px;
    box-sizing: border-box;
}
.template17_content_xinghaoH1{
	display: flex;
	align-items: center;
	padding: 0 35px 0 56px;
	margin-top:80px;
}
.template17_content_xinghaoH1 i{
	width: 4px;
	height: 40px;
	display: block;
	background: #e9be1d;
	margin-right: 30px;
}
.template17_content_xinghaoH1 .title{
	font-size: 34px;
	color: #333333;
}
.template17_content_xinghaoH1 ul{
	padding: 0 15px 0 18px;
	display: flex;
	align-items: center;
}
.template17_content_xinghaoH1 ul input[type="radio" i] {
    margin: 0;
}
.template17_content_xinghaoH1 ul li{
	margin: 0 15px;
	font-size: 24px;
	font-weight: normal;
	color: #626262;
}
.template17_content_xinghaoH1 a{
	display: inline-block;
	padding: 16px 17px;
	background: #f0d05c;
	border-radius: 5px;
	font-size: 20px;
	color: #333333;
	font-weight: normal;
}
.template17_content_xinghaoBox{
	display: flex;
	flex-flow: wrap;
	padding: 0 40px 0 40px;
	margin-top: 50px;
	
}
.template17_content_xinghaoBox .list{
	display: flex;
	align-items: center;
	width: 530px;
	box-sizing: border-box;
	padding: 12px;
	background: #eee;
	margin: 0 20px 40px;
}
.template17_content_xinghaoBox .list .right{
	font-size: 16px;
	color: #333333;
	padding-left: 35px;
	line-height: 25px;
}
.template17_content_xinghaoBox .list .right h2{
	font-size: 20px;
	padding-bottom: 8px;

}
.template17_content_hengbanner{
	margin: 30px 0;
}
.template17_content_Range{
	width: 1230px;
    margin: auto;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
}
.template17_content_RangeImg{
	width: 924px;
	margin: auto;
	padding: 53px 0 45px;
}
.template17_content_RangeAbt{
	text-align: center;
	padding-bottom: 50px;
}
.template17_content_RangeAbt a{
	display: inline-block;
	padding: 20px 30px;
	background: #f0d05c;
	border-radius: 5px;
	font-size: 20px;
	color: #333333;
}
.template17_content_bannerBottom{
	width: 100%;
	overflow: hidden;
	position: relative;
	top: -101px;
	margin-bottom: -61px;
}
.template17_content_Strength{
	background: #fece00;
	padding-bottom: 90px;
}
.template17_content_Strength h1{
	font-size: 35px;
	color: #333333;
	text-align: center;
	padding-bottom: 35px;
}
.template17_content_StrengthImg{
	width: 1200px;
	padding: 12px;
	background: #fff;
	margin: auto;
	box-sizing: border-box;
}
.template17_content_StrengthAbt{
	width: 1200px;
	margin:60px auto 0px;
	padding: 20px 0;
	background: #0b0d12;
	color: #FECE00;
	font-size: 30px;
	text-align: center;
	cursor: pointer;
	box-sizing: border-box;

}
.imgmiddle{display: none;}
.template17_banner_Mellipse{display: none;}
.template17_content_MbannerBottom{display: none;}
.template17_content_RangeImg .listvideo,.template17_content_StrengthImg .listvideo,.template17_content_compare .listvideo{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
@media (max-width:1500px ) {
	.template17 .template17_banner .template17_banner_position h1{
		font-size: 50px;
	}
	.template17 .template17_banner .template17_banner_position .template17_banner_list span{
		font-size: 25px;
	}
	.template17 .template17_banner .template17_banner_abt a{
		font-size: 20px;
	}
}
</style>