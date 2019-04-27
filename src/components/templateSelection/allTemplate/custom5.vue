<template>
	<div class="microMotor">
		<div class="microMotor_head">
			<div class="container">
				<div class="row">
					<div class="col-lg-7">
						<div class="microMotor_headLeft">
							<h1 data-scroll-reveal="enter left over 1s">
								<span v-if="!delNode">{{data.headH1}}</span>
								<input type="text" v-model="data.headH1" v-if="delNode"/>
							</h1>
							<h3 data-scroll-reveal="enter left over 1s">
								<span v-if="!delNode">{{data.headH3}}</span>
								<input type="text" v-model="data.headH3" v-if="delNode"/>
							</h3>
						</div>
					</div>
					<div class="col-lg-5">
						<div class="microMotor_headRight">
							<p></p>
							<ul class="clearfix" data-scroll-reveal="enter right over 1s">
								<li v-for="(item,index) in data.headList"><img v-bind:src="item.img"/>
									<span v-if="!delNode">{{item.p}}</span>
									<input type="text" v-model="item.p" v-if="delNode" style="width: 80px;"/>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!---->
		
		<div class="microMotor_banner">
			<div class="container clearfix">
				<div class="row" data-scroll-reveal="enter bottom over 1s and move 300px after 0.3s">
					<div class="col-lg-6 col-md-6 col-sm-6">
						<div class="microMotor_bannerLeft MaskHover">
							<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
								<img v-bind:src="data.microMotorBannerImg" width="100%"/>
							</a>
							<div class="MaskBox" v-if="delNode">
								<p>上传图片的宽为600px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file" v-on:change="banner($refs.microMotor_bannerLeft,600)" ref="microMotor_bannerLeft"/>
									</a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6">
						<div class="microMotor_bannerRight">
							<h3>
								<span v-if="!delNode">{{data.microMotorBannerH1}}</span>
								<input type="text" v-model="data.microMotorBannerH1" v-if="delNode" style="width: 600px;"/>
							</h3>
							<p class="position" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
								<span v-if="!delNode">{{data.microMotorBannerList9}}</span>
								<input type="text" v-model="data.microMotorBannerList9" v-if="delNode" style="width: 100px;"/>
							</p>
							<ol>
								<li>
									<label>
										<span v-if="!delNode">{{data.microMotorBannerList1}}</span>
										<input type="text" v-model="data.microMotorBannerList1" v-if="delNode" style="width: 50px;"/>
									</label>
									<span class="money" v-if="!delNode">{{data.microMotorBannerList2}}</span>
									<input type="text" class="money" v-model="data.microMotorBannerList2" v-if="delNode" style="width: 180px;"/>
								</li>
								<li>
									<label>
										<span v-if="!delNode">{{data.microMotorBannerList5}}</span>
										<input type="text" v-if="delNode" v-model="data.microMotorBannerList5" style="width: 70px;"/>
									</label>
									<span class="logistics" v-if="!delNode">{{data.microMotorBannerList6}}</span>
									<input type="text" class="logistics" v-if="delNode" v-model="data.microMotorBannerList6" />
								</li>
								<li v-for="(item,index) in data.microMotorBannerList">
									<label>
										<span v-if="!delNode">{{item.name}}</span>
										<input type="text" v-model="item.name" v-if="delNode" style="width: 70px;"/>
									</label>
									<span v-if="!delNode">{{item.p}}</span>
									<input type="text" v-if="delNode" v-model="item.p" />
								</li>
								<li>
									<label>
										<span v-if="!delNode">{{data.microMotorBannerList10}}</span>
										<input type="text" v-if="delNode" v-model="data.microMotorBannerList10"style="width: 70px;" />
									</label>
									<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
										<span v-if="!delNode">{{data.microMotorBannerList11}}</span>
										<input type="text" v-if="delNode" v-model="data.microMotorBannerList11"  style="width: 120px;"/>
									</a>
									<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
										<span v-if="!delNode">{{data.microMotorBannerList12}}</span>
										<input type="text" v-if="delNode" v-model="data.microMotorBannerList12" style="width: 100px;" />
									</a>
								</li>
							</ol>
						</div>							
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addmicroMotorBannerList">添加一块选项</el-button>
			<el-button type="danger" icon="el-icon-delete" @click="DelmicroMotorBannerList">删除一块选项</el-button>
		</div>
		<!---->
		<div class="microMotor_product">
			<div class="container">
				<div class="microMotor_productH1 clearfix">
					<span>
						<i></i>
						<span v-if="!delNode">{{data.microMotorProductH1}}</span>
						<input type="text" v-if="delNode" v-model="data.microMotorProductH1" />
					</span>
					<a href="javascript:void(0)" class="pull-right">
						<span v-if="!delNode" >{{data.microMotorProducta}}</span>
						<input type="text" v-if="delNode" v-model="data.microMotorProducta" style="width: 120px;"/>
					</a>
				</div>
				<div class="microMotor_productList swiper-container">
					<div class="row swiper-wrapper">
						<div class="col-lg-3 swiper-slide col-md-6 col-sm-6" v-for="(item,index) in data.microMotorProductList">
							<ul>
								<li class="MaskHover">
									<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A"><img v-bind:src="item.img"  width="100%"/></a>
									<div class="MaskBox" v-if="delNode">
										<p>上传图片的宽为350px</p>
										<p style="color: #fff;">
											<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
												<i class="el-icon-upload"></i><span>上传</span>
												<input type="file" v-on:change="microMotorProductList($refs.microMotorProductList[index],index,350)" ref="microMotorProductList"/>
											</a>
											<el-button type="danger" icon="el-icon-delete" @click="delProductList(index)">删除</el-button>
										</p>
									</div>
								</li>
								<li>
									<span v-if="!delNode">{{item.h1}} </span>
									<input type="text" v-if="delNode" v-model="item.h1" style="text-align: center;"/>
								</li>
								<li>
									<span v-if="!delNode" class="money">{{item.money}} </span>
									<input type="text" v-if="delNode" v-model="item.money" style="width: 80px;color: #f83b35;"/>
									 <b v-if="!delNode">{{item.size}}</b>
									 <input type="text" v-if="delNode" v-model="item.size" style="width: 170px;"/>
								</li>
								<li>
									<span v-if="!delNode">{{item.p}}</span>
									<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;"/>
								</li>
								<li class="abt">
									<a href="javascript:void(0)" v-if="!delNode" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">{{item.abt}}</a>
									<input type="text" v-if="delNode" v-model="item.abt" style="color: #f83b35;border: 1px solid #f83b35;text-align: center;" />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addmicroMotorProductList">添加一块产品介绍</el-button>
		</div>
		<!---->
		<div class="microMotor_detailed">
			<div class="container">
				<h1>
					<span v-if="!delNode">{{data.microMotor_detailedH1}}</span>
					<input type="text" v-if="delNode" v-model="data.microMotor_detailedH1" style="text-align: center;width: 100%;"/>
				</h1>
				<div class="microMotor_detailedImg">
					<table border="1" cellspacing="0" cellpadding="0">
						<tr v-for="(item,index) in data.microMotor_detailedTable1">
							<th>
								<span v-if="!delNode">{{item.name}}</span>
								<input type="text" v-if="delNode" v-model="item.name" style="text-align: center;width: 100%;"/>
							</th>
							<th>
								<span v-if="!delNode">{{item.p}}</span>
								<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;width: 100%;"/>
							</th>
						</tr>
					</table>
					<table border="1" cellspacing="0" cellpadding="0">
						<tr v-for="(item,index) in data.microMotor_detailedTable2">
							<th>
								<span v-if="!delNode">{{item.name}}</span>
								<input type="text" v-if="delNode" v-model="item.name" style="text-align: center;width: 100%;"/>
							</th>
							<th>
								<span v-if="!delNode">{{item.p}}</span>
								<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;width: 100%;"/>
							</th>
						</tr>
					</table>
					<table border="1" cellspacing="0" cellpadding="0">
						<tr v-for="(item,index) in data.microMotor_detailedTable3">
							<th>
								<span v-if="!delNode">{{item.name}}</span>
								<input type="text" v-if="delNode" v-model="item.name" style="text-align: center;width: 100%;"/>
							</th>
							<th>
								<span v-if="!delNode">{{item.p}}</span>
								<input type="text" v-if="delNode" v-model="item.p" style="text-align: center;width: 100%;"/>
							</th>
						</tr>
					</table>
				</div>
				<div class="microMotor_detailedAbt">
					<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<span v-if="!delNode">{{data.microMotor_detailedAbt1}}</span>
						<input type="text" v-if="delNode" v-model="data.microMotor_detailedAbt1" style="text-align: center;width: 154px;"/>
					</a>
					<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<span v-if="!delNode">{{data.microMotor_detailedAbt2}}</span>
						<input type="text" v-if="delNode" v-model="data.microMotor_detailedAbt2" style="text-align: center;width: 174px;"/>
					</a>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addDetailedTable">添加一行表格</el-button>
			<el-button type="danger" icon="el-icon-delete" @click="delDetailedTable">删除一行表格</el-button>
		</div>
		<!---->
		<div class="microMotor_why">
			<div class="container">
				<h1 data-scroll-reveal="enter bottom over 1s">
					<span v-if="!delNode">{{data.microMotorWhyH1}}</span>
					<input type="text" v-if="delNode" v-model="data.microMotorWhyH1" style="text-align: center;"/>
				</h1>
				<h3 data-scroll-reveal="enter bottom over 1s">
					<span v-if="!delNode">{{data.microMotorWhyP}}</span>
					<input type="text" v-if="delNode" v-model="data.microMotorWhyP" style="text-align: center;"/>
				</h3>
				<div class="microMotor_whyImg">
					<div class="row">
						<div class="col-lg-5 col-md-6 col-sm-6 MaskHover" data-scroll-reveal="enter bottom over 1s">
							<a href="javascript:"><img v-bind:src="data.microMotorWhyimg" width="100%"/></a>
							<div class="MaskBox" v-if="delNode">
								<p>上传图片的宽为600px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
										<i class="el-icon-upload"></i><span>上传</span>
										<input type="file" v-on:change="microMotorWhyimg($refs.microMotorWhyimg,600)" ref="microMotorWhyimg"/>
									</a>
								</p>
							</div>
						</div>
						<div class="col-lg-7 col-md-6 col-sm-6 swiper-containe microMotor_swiper" data-scroll-reveal="enter bottom over 1s">
							<div class="microMotor_whyDl swiper-wrapper">
								<dl class="swiper-slide" v-for="(item,index) in data.microMotorWhyList">
									<dt>
										<i>0{{index+1}} 、</i>
										<span v-if="!delNode">{{item.h1}}</span>
										<input type="text" v-if="delNode" v-model="item.h1" style=""/>
									</dt>
									<dd>
										<span  v-if="!delNode">{{item.p}}</span>
										<textarea  v-if="delNode" v-model="item.p" cols="40"></textarea>
									</dd>
								</dl>
							</div>
							<div class="microMotor_whyAbt">
								<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
									<span v-if="!delNode">{{data.microMotorWhyAbt1}}</span>
									<input	type="text"  v-if="delNode" v-model="data.microMotorWhyAbt1"style="width: 180px;"/>
								</a>
								<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
									<span v-if="!delNode">{{data.microMotorWhyAbt2}}</span>
									<input	type="text"  v-if="delNode" v-model="data.microMotorWhyAbt2"style="width: 150px;"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addmicroMotorWhy">添加一块特色卖点</el-button>
			<el-button type="danger" icon="el-icon-delete" @click="delmicroMotorWhy">删除一块特色卖点</el-button>
		</div>
		<!---->
		<div class="microMotor_Manufactor">
			<p class="position"></p>
			<div class="container">
				<h1 data-scroll-reveal="enter bottom over 1s">
					<span v-if="!delNode">{{data.microMotorManufactorH1}}</span>
					<input	type="text"  v-if="delNode" v-model="data.microMotorManufactorH1"style="text-align: center;"/>
				</h1>
				<h3 data-scroll-reveal="enter bottom over 1s">
					<span v-if="!delNode">{{data.microMotorManufactorP}}</span>
					<input	type="text"  v-if="delNode" v-model="data.microMotorManufactorP"style="text-align: center;width: 100%;"/>
				</h3>
				<div class="microMotor_ManufactorList  swiper-containe">
					<div class="row swiper-wrapper" data-scroll-reveal="enter left over 1s">
						<div class="col-lg-4  col-md-4 col-sm-5 swiper-slide" v-for="(item,index) in data.microMotorManufactorList">
							<div class="microMotor_ManufactorListBox">
								<span class="number">0{{index+1}}</span>
								<ul>
									<li>
										<h4>
											<span v-if="!delNode">{{item.h1}}</span>
											<input	type="text"  v-if="delNode" v-model="item.h1"style="text-align: center;width: 100%;"/>
										</h4>
										<p>
											<span v-if="!delNode">{{item.h2}}</span>
											<input	type="text"  v-if="delNode" v-model="item.h2"style="text-align: center;width: 100%;"/>
										</p>
									</li>
									<li class="MaskHover">
										<a href="javascript:void(0)"><img v-bind:src="item.img"/></a>
										<div class="MaskBox" v-if="delNode">
											<p>上传图片的宽为350px</p>
											<p style="color: #fff;">
												<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
													<i class="el-icon-upload"></i><span>上传</span>
													<input type="file" v-on:change="microMotorManufactorList($refs.microMotorManufactorList[index],index,350)" ref="microMotorManufactorList"/>
												</a>
												<el-button type="danger" icon="el-icon-delete" @click="delmicroMotorManufactorList(index)">删除</el-button>
											</p>
										</div>
									</li>
									<li>
										<span v-if="!delNode">{{item.p}}</span>
										<textarea  v-if="delNode" v-model="item.p" style="width: 100%;"></textarea>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode" style="position: relative;z-index: 10;">
			<el-button type="primary" icon="el-icon-edit" @click="addmicroMotorManufactorList">添加一块产品介绍</el-button>
		</div>
		<!---->
		<div class="microMotor_Customer" v-if="data.DelmicroMotorCustomerList">
			
			<div class="container">
				<h1 data-scroll-reveal="enter bottom over 1s">
					<span></span>
						<b v-if="!delNode">{{data.microMotorCustomerH1}} </b>
						<input	type="text"  v-if="delNode" v-model="data.microMotorCustomerH1"style="text-align: center;"/>
					<span></span>
				</h1>
				<div class="microMotor_CustomerImg swiper-containe">
					<ul class="swiper-wrapper clearfix" data-scroll-reveal="enter right over 1s">
						<li class="swiper-slide MaskHover" v-for="(item,index) in data.microMotorCustomerList">
							<img v-bind:src="item"/>
							<div class="MaskBox" v-if="delNode" style="justify-content: space-between;">
								<p style="font-size: 12px;">上传图片的宽为200px</p>
								<p>
									<a href="javascript:void(0)" type="button" class="el-button el-button--primary is-circle filesBox">
									<i class="el-icon-edit"></i>
									<input type="file" v-on:change="microMotorCustomerList($refs.microMotorCustomerList[index],index,200)" ref="microMotorCustomerList"/>
								</a>
								<el-button type="danger" icon="el-icon-delete" circle @click="delmicroMotorCustomerList(index)"></el-button>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="microMotor_CustomerAbt">
					<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<span v-if="!delNode">{{data.microMotorCustomerAbt1}}</span>
						<input	type="text"  v-if="delNode" v-model="data.microMotorCustomerAbt1"style="text-align: center;"/>
					</a>
					<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<span v-if="!delNode">{{data.microMotorCustomerAbt2}}</span>
						<input	type="text"  v-if="delNode" v-model="data.microMotorCustomerAbt2"style="text-align: center;"/>
					</a>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addmicroMotorCustomerList">添加一块合作客户</el-button>
			<el-button type="danger" icon="el-icon-delete" @click="DelmicroMotorCustomerList">删除合作客户模块</el-button>
		</div>
		<!---->
		<div class="microMotor_txt">
			<h3 data-scroll-reveal="enter bottom over 1s">
				<span v-if="!delNode">{{data.microMotorTxtH}}</span>
				<input	type="text"  v-if="delNode" v-model="data.microMotorTxtH"style="text-align: center;width: 100%;"/>
			</h3>
			<p data-scroll-reveal="enter bottom over 1s">
				<span v-if="!delNode">{{data.microMotorTxtP}}</span>
				<input	type="text"  v-if="delNode" v-model="data.microMotorTxtP"style="text-align: center;width: 100%;"/>
			</p>
		</div>
		<!---->
		<div class="microMotor_foot">
			<div class="container">
				<div class="microMotor_swiperfoot swiper-containe">
					<div class="microMotor_footBox swiper-wrapper" data-scroll-reveal="enter left over 1s">
						<div class="microMotor_footList clearfix swiper-slide" v-for="(item,index) in data.microMotorFoot">
							<p class="number pull-left">0{{index+1}}</p>
							<ul class="pull-left">
								<li><h3>
									<span v-if="!delNode">{{item.h1}}</span>
									<input	type="text"  v-if="delNode" v-model="item.h1"style="width: 100%;"/>
								</h3></li>
								<li>
									<span v-if="!delNode">{{item.p}}</span>
									<textarea  v-if="delNode" v-model="item.p" style="width: 100%;"></textarea>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="microMotor_footAbt">
					<a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
						<span v-if="!delNode">{{data.microMotorFootAbt}}</span>
						<input	type="text"  v-if="delNode" v-model="data.microMotorFootAbt"style="width: 180px;"/>
					</a>
				</div>
			</div>
		</div>
		<div class="addNode" v-if="delNode">
			<el-button type="primary" icon="el-icon-edit" @click="addmicroMotorFoot">添加一块我们的优势</el-button>
			<el-button type="danger" icon="el-icon-delete" @click="delmicroMotorFoot">删除一块我们的优势</el-button>
		</div>
		<div id="script" ref="script"></div>
	</div>
</template>
<script>
var data='{"status":200,"msg":"OK","data":{"paramMob":{"DelmicroMotorCustomerList":true,"microMotorFootAbt":"免费获取详细报价！","microMotorWhyP":"微型xxxx电机特色卖点","microMotorProductH1":"热推相关产品","microMotorManufactorList":[{"p":"精选材质，不易磨损、转速快、扭力大、操作简单","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang1.jpg","h1":"优质选材","h2":"精选材质 保证产品质量"},{"p":"可根据客户要求定制，产品规格齐全品质繁多，颜色艳丽","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang2.jpg","h1":"专业团队","h2":"20名技术团队按需打造"},{"p":"价格优惠20%，让更多人享受低价好货正品，质量保障","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang3.jpg","h1":"厂家直销","h2":"没有中间商赚取差价"}],"microMotorBannerImg":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_banner.jpg","microMotorWhyAbt1":"了解更多产品特点","microMotorWhyAbt2":"获取详细报价单","microMotorBannerList":[{"p":"≥1 ","name":"起批量："},{"p":"30天成交 400 套","name":"成交："}],"microMotorBannerList1":"价格：","microMotorManufactorH1":"选对厂家省心不止十倍","microMotorBannerList2":"￥0.5~4.5","microMotor_detailedH1":"微型xxxx电机详细信息","microMotorCustomerList":["http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan2.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan3.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan4.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan5.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan6.jpg"],"microMotorWhyH1":"为什么选择我们？","microMotorBannerList5":"物流：","microMotorCustomerAbt2":"申请加入我们","microMotorBannerList6":"了解配送范围和物流报价","microMotorBannerList3":"起批量：","microMotorBannerList4":"","microMotorCustomerAbt1":"每天前20名有优惠！","microMotorBannerList9":"获取详细报价单","microMotorBannerList7":"成交：","microMotor_detailedAbt1":"申请免费寄样品","microMotorBannerList8":"30天成交 400 套","microMotorWhyimg":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_why.jpg","microMotorWhyList":[{"p":"优质钢材，经久耐用，外壳采用高强度钢材模具精准，制造工艺精湛","h1":"优质钢材，不易生锈"},{"p":"转子铁芯采用优质材料，配合先进制造工艺，成品电流低，扭力大，运行平稳","h1":"转子铁芯"},{"p":"后盖采用优质原料，成品规格精细公差小，轴承配合度高，运行平稳","h1":"运行平稳"}],"microMotorManufactorP":"注：以下照片是真实工厂拍摄，全程把控，从生产到物流安装，15年专业生产，6600平方生产基地，保障产品，值得信赖！","microMotor_detailedAbt2":"了解更多型号规格","microMotorBannerList12":"咨询产品售后","microMotorTxtP":"一站式的服务整体方案为您量身打造，上千家客户的选择，打造一个个经典案例，心动不如行动！","microMotorBannerList11":"申请免费寄样品","headList":[{"p":"厂家直销","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_head1.jpg"},{"p":"加工定制","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_head2.jpg"},{"p":"质量通过ISO认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_head3.jpg"}],"microMotorBannerList10":"采购量：","microMotorCustomerH1":"更多客户的选择","microMotor_detailedTable2":[{"p":"否","name":"是否进口"},{"p":" 2.02-3.84（W）","name":"额定功率"},{"p":"0.07-0.6（A）","name":"额定电流"},{"p":"ROHS","name":"产品认证"},{"p":"否","name":"是否跨境货源"},{"p":" 金属","name":"材质"}],"microMotor_detailedTable3":[{"p":"其他","name":"品牌"},{"p":"有刷直流电动机","name":"产品类型"},{"p":" 9100-12400（rpm）","name":"额定转速"},{"p":"家用电器小马达等","name":"适用范围"},{"p":"99（%）","name":"效率 "},{"p":"","name":""}],"microMotor_detailedTable1":[{"p":"点击查看","name":"产地"},{"p":"F280","name":"型号"},{"p":" 1.2-15（V）","name":"额定电压"},{"p":"如图（mm）","name":"外形尺寸"},{"p":"直流36V以下","name":"3C额定电压范围"},{"p":" 电动机配件","name":"配件类型"}],"microMotorProductList":[{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0","size":"尺寸：26.9*18.3mm","h1":"F160电机"},{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0 ","size":"尺寸：26.9*18.3mm","h1":"F140电机"},{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0 ","size":"尺寸：26.9*18.3mm","h1":"F170电机"},{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0 ","size":"尺寸：26.9*18.3mm","h1":"F150电机"}],"microMotorFoot":[{"p":"喷气清洁、驱动工具(汽锤、混凝土震动器、钻头、砂轮机、","h1":"五金加工"},{"p":"喷射式设备清洁、铸件出坯、制塑空气物体的充气、挤压过程中充气","h1":"橡胶塑胶"},{"p":"喷气清洁、驱动工具(汽锤、混凝土震动器、钻头、砂轮机、","h1":"五金加工"},{"p":"喷射式设备清洁、铸件出坯、制塑空气物体的充气、挤压过程中充气","h1":"橡胶塑胶"},{"p":"对于一些高精度的电子产品的生产、实验试验过程、精密仪器的控制","h1":"数码电子"}],"microMotorBannerH1":"微型电机R280、直流微型电机、电动牙刷微型电机","microMotorProducta":"了解更多产品","microMotorTxtH":"我们的xxx电机应用在各行各业","headH1":"14年专业从事各类微型电机生产厂家","headH3":"专业生产JSD系列微电机，微型电机，直流微电机（马达），种类规格齐全！"},"paramPC":{"DelmicroMotorCustomerList":true,"microMotorFootAbt":"免费获取详细报价！","microMotorWhyP":"微型xxxx电机特色卖点","microMotorProductH1":"热推相关产品","microMotorManufactorList":[{"p":"精选材质，不易磨损、转速快、扭力大、操作简单","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang1.jpg","h1":"优质选材","h2":"精选材质 保证产品质量"},{"p":"可根据客户要求定制，产品规格齐全品质繁多，颜色艳丽","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang2.jpg","h1":"专业团队","h2":"20名技术团队按需打造"},{"p":"价格优惠20%，让更多人享受低价好货正品，质量保障","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang3.jpg","h1":"厂家直销","h2":"没有中间商赚取差价"}],"microMotorBannerImg":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_banner.jpg","microMotorWhyAbt1":"了解更多产品特点","microMotorWhyAbt2":"获取详细报价单","microMotorBannerList":[{"p":"≥1 ","name":"起批量："},{"p":"30天成交 400 套","name":"成交："}],"microMotorBannerList1":"价格：","microMotorManufactorH1":"选对厂家省心不止十倍","microMotorBannerList2":"￥0.5~4.5","microMotor_detailedH1":"微型xxxx电机详细信息","microMotorCustomerList":["http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan1.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan2.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan3.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan4.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan5.jpg","http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan6.jpg"],"microMotorWhyH1":"为什么选择我们？","microMotorBannerList5":"物流：","microMotorCustomerAbt2":"申请加入我们","microMotorBannerList6":"了解配送范围和物流报价","microMotorBannerList3":"起批量：","microMotorBannerList4":"","microMotorCustomerAbt1":"每天前20名有优惠！","microMotorBannerList9":"获取详细报价单","microMotorBannerList7":"成交：","microMotor_detailedAbt1":"申请免费寄样品","microMotorBannerList8":"30天成交 400 套","microMotorWhyimg":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_why.jpg","microMotorWhyList":[{"p":"优质钢材，经久耐用，外壳采用高强度钢材模具精准，制造工艺精湛","h1":"优质钢材，不易生锈"},{"p":"转子铁芯采用优质材料，配合先进制造工艺，成品电流低，扭力大，运行平稳","h1":"转子铁芯"},{"p":"后盖采用优质原料，成品规格精细公差小，轴承配合度高，运行平稳","h1":"运行平稳"}],"microMotorManufactorP":"注：以下照片是真实工厂拍摄，全程把控，从生产到物流安装，15年专业生产，6600平方生产基地，保障产品，值得信赖！","microMotor_detailedAbt2":"了解更多型号规格","microMotorBannerList12":"咨询产品售后","microMotorTxtP":"一站式的服务整体方案为您量身打造，上千家客户的选择，打造一个个经典案例，心动不如行动！","microMotorBannerList11":"申请免费寄样品","headList":[{"p":"厂家直销","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_head1.jpg"},{"p":"加工定制","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_head2.jpg"},{"p":"质量通过ISO认证","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_head3.jpg"}],"microMotorBannerList10":"采购量：","microMotorCustomerH1":"更多客户的选择","microMotor_detailedTable2":[{"p":"否","name":"是否进口"},{"p":" 2.02-3.84（W）","name":"额定功率"},{"p":"0.07-0.6（A）","name":"额定电流"},{"p":"ROHS","name":"产品认证"},{"p":"否","name":"是否跨境货源"},{"p":" 金属","name":"材质"}],"microMotor_detailedTable3":[{"p":"其他","name":"品牌"},{"p":"有刷直流电动机","name":"产品类型"},{"p":" 9100-12400（rpm）","name":"额定转速"},{"p":"家用电器小马达等","name":"适用范围"},{"p":"99（%）","name":"效率 "},{"p":"","name":""}],"microMotor_detailedTable1":[{"p":"点击查看","name":"产地"},{"p":"F280","name":"型号"},{"p":" 1.2-15（V）","name":"额定电压"},{"p":"如图（mm）","name":"外形尺寸"},{"p":"直流36V以下","name":"3C额定电压范围"},{"p":" 电动机配件","name":"配件类型"}],"microMotorProductList":[{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0","size":"尺寸：26.9*18.3mm","h1":"F160电机"},{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0 ","size":"尺寸：26.9*18.3mm","h1":"F140电机"},{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0 ","size":"尺寸：26.9*18.3mm","h1":"F170电机"},{"p":"总销量500个","img":"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg","abt":"点击咨询","money":"￥0.5~4.0 ","size":"尺寸：26.9*18.3mm","h1":"F150电机"}],"microMotorFoot":[{"p":"喷气清洁、驱动工具(汽锤、混凝土震动器、钻头、砂轮机、","h1":"五金加工"},{"p":"喷射式设备清洁、铸件出坯、制塑空气物体的充气、挤压过程中充气","h1":"橡胶塑胶"},{"p":"喷气清洁、驱动工具(汽锤、混凝土震动器、钻头、砂轮机、","h1":"五金加工"},{"p":"喷射式设备清洁、铸件出坯、制塑空气物体的充气、挤压过程中充气","h1":"橡胶塑胶"},{"p":"对于一些高精度的电子产品的生产、实验试验过程、精密仪器的控制","h1":"数码电子"}],"microMotorBannerH1":"微型电机R280、直流微型电机、电动牙刷微型电机","microMotorProducta":"了解更多产品","microMotorTxtH":"我们的xxx电机应用在各行各业","headH1":"14年专业从事各类微型电机生产厂家","headH3":"专业生产JSD系列微电机，微型电机，直流微电机（马达），种类规格齐全！"},"modelType":0}}'
export default {
	data () {
		return{
			data:JSON.parse(data).data.paramPC,
			delNode:true,
			syb_productType:null,//类型流量宝
			ALLfoot:true,
		}
	},
	props:["productType","dataJson","deleteNode"],
	computed: {
	  
	},
	watch: {  
	   //监听数据变化
	   dataJson(val){
		this.data=val
		console.log(this.data)
	   },
	   //删除节点
	   deleteNode(val){
	   	this.delNode=this.deleteNode
	   	this.$emit('dataJsonFun',this.data)
	   }
	},
	created(){
		console.log(this.data)
	},
	mounted(){
		this.sybCode()
	},
	updated(){
		this.data=this.dataJson
	},
	methods:{
		calcStyle(index) {
	        var style = {}
	        if (index % 2 !== 0) {
	            style = {float: 'right'}
	        }
	        return style
		 },
		//内容编辑区
		/*内容操作区结束**/
		banner(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.microMotorBannerImg=str
	    	})
    		input_file.value=''
		},
		microMotorProductList(input_file,index,maxWidth){
			console.log(index)
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.microMotorProductList[index].img=str
	    	})
    		input_file.value=''
		},
		delProductList(index){
			this.data.microMotorProductList.splice(index,1)
		},
		microMotorWhyimg(input_file,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.microMotorWhyimg=str
	    	})
    		input_file.value=''
		},
		microMotorManufactorList(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.microMotorManufactorList[index].img=str
	    	})
    		input_file.value=''
		},
		delmicroMotorManufactorList(index){
			this.data.microMotorManufactorList.splice(index,1)
		},
		microMotorCustomerList(input_file,index,maxWidth){
			var _this=this;
    		this.dataImg(_this,input_file,maxWidth,
	    		function(str){
	    			_this.data.microMotorCustomerList.splice(index,1,str)
	    	})
    		input_file.value=''
		},
		delmicroMotorCustomerList(index){
			this.data.microMotorCustomerList.splice(index,1)
		},
		addmicroMotorBannerList(){
			this.data.microMotorBannerList.push({
				name:"名称",
				p:"内容",
			})
		},
		DelmicroMotorBannerList(){
			var index=this.data.microMotorBannerList.length-1
			this.data.microMotorBannerList.splice(index,1)
		},
		addmicroMotorProductList(){
			this.data.microMotorProductList.push({
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chanpin.jpg",
				h1:"F160电机",
				money:"￥0.5~4.0",
				size:"尺寸：26.9*18.3mm",
				p:"总销量500个",
				abt:"点击咨询",				
			})
		},
		addDetailedTable(){
			this.data.microMotor_detailedTable1.push({name:"",p:" "})
			this.data.microMotor_detailedTable2.push({name:"",p:" "})
			this.data.microMotor_detailedTable3.push({name:"",p:" "})
		},
		delDetailedTable(){
			var index=this.data.microMotor_detailedTable1.length-1
			this.data.microMotor_detailedTable1.splice(index,1)
			this.data.microMotor_detailedTable2.splice(index,1)
			this.data.microMotor_detailedTable3.splice(index,1)
		},
		addmicroMotorWhy(){
			this.data.microMotorWhyList.push({
				h1:"优质钢材，不易生锈",
				p:"优质钢材，经久耐用，外壳采用高强度钢材模具精准，制造工艺精湛"				
			})
		},
		delmicroMotorWhy(){
			var index=this.data.microMotorWhyList.length-1;
			this.data.microMotorWhyList.splice(index,1)
		},
		addmicroMotorManufactorList(){
			this.data.microMotorManufactorList.push({
				h1:"优质选材",
				h2:"精选材质 保证产品质量",
				img:"http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_chang1.jpg",
				p:"精选材质，不易磨损、转速快、扭力大、操作简单"				
			})
		},
		addmicroMotorCustomerList(){
			this.data.DelmicroMotorCustomerList=true
			this.data.microMotorCustomerList.push("http://page-bucket.oiaqye7985.com/land-page/images/module6/model6_xuan1.jpg")
		},
		DelmicroMotorCustomerList(){
			this.data.DelmicroMotorCustomerList=false
		},
		addmicroMotorFoot(){
			this.data.microMotorFoot.push({
				h1:"五金加工",
				p:"喷气清洁、驱动工具(汽锤、混凝土震动器、钻头、砂轮机、"				
			})
		},
		delmicroMotorFoot(){
			var index=this.data.microMotorFoot.length-1;
			this.data.microMotorFoot.splice(index,1)
		},		
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
	},
}
</script>

<style>
.microMotor h1,.microMotor h3,.microMotor p,.microMotor ul,.microMotor li,.microMotor ol {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: normal; }
.microMotor input,textarea{
	border:none;
	background: none;
	outline: none;
}
.microMotor  input:focus,textarea:focus{
	border: 1px dotted #1994FF;
}
.microMotorinput:hover{
	border: 1px dotted #1994FF;
}
.microMotor {
  background: #fff; }

.microMotor .microMotor_head {
  padding: 40px 0;
  border-bottom: 1px solid #ddd; }

.microMotor .microMotor_head .microMotor_headLeft h1 {
  font-size: 24px;
  color: #444444;
  padding-bottom: 24px; }

.microMotor .microMotor_head .microMotor_headLeft input{
	width: 600px;
}
.microMotor .microMotor_head .microMotor_headLeft h3 {
  font-size: 18px;
  color: #333; }

.microMotor .microMotor_head .microMotor_headRight ul li {
  float: left;
  padding-right: 20px;
  display: flex;
  align-items: flex-end;
  color: #f83b35; }

.microMotor .microMotor_head .microMotor_headRight ul li span {
  padding-left: 5px; }

.microMotor .microMotor_head .microMotor_headRight p {
  padding: 18px 0; }

.microMotor_banner {
  padding-top: 40px; }

.microMotor_banner .microMotor_bannerRight h3 {
  font-size: 24px;
  color: #222222;
  padding: 38px 0 30px; }

.microMotor_banner .microMotor_bannerRight {
  position: relative; }

.microMotor_banner .microMotor_bannerRight .position {
  height: 40px;
  line-height: 40px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #f83b35;
  color: #fff;
  border-top-left-radius: 2000px;
  border-bottom-left-radius: 2000px;
  padding: 0 10px 0 15px;
  cursor: pointer; }

.microMotor_banner .microMotor_bannerRight ol li {
  margin-bottom: 20px; }

.microMotor_banner .microMotor_bannerRight ol li label {
  font-size: 18px;
  color: #222222;
  font-weight: normal; }

.microMotor_banner .microMotor_bannerRight ol li .money {
  font-size: 39px;
  color: #f83b35; }

.microMotor_banner .microMotor_bannerRight ol li .logistics {
  font-size: 19px;
  color: #f83b35;
  font-weight: bold; }

.microMotor_banner .microMotor_bannerRight ol li .maxNumber {
  font-size: 18px;
  color: #f83b35; }

.microMotor_banner .microMotor_bannerRight ol li span {
  font-size: 18px;
  color: #222; }

.microMotor_banner .microMotor_bannerRight ol li a {
  padding: 6px 4px;
  border: 1px solid #f83b35;
  text-decoration: none;
  color: #f83b35; }

.microMotor_banner .microMotor_bannerRight ol li a:nth-child(3) {
  background: #fcdcdb; }

.microMotor_product .microMotor_productH1 {
  width: 100%;
  padding: 15px 0;
  color: #222222;
  font-size: 18px; }

.microMotor_product .microMotor_productH1 i {
  display: inline-block;
  padding: 2px 8px;
  background: #f83b35;
  position: relative;
  bottom: 3px; }

.microMotor_product .microMotor_productH1 a {
  color: #f83b35;
  font-size: 18px; }

.microMotor_product .microMotor_productList ul {
  text-align: center; }

.microMotor_product .microMotor_productList ul li {
  padding: 5px 0;
  color: #333333;
  font-size: 17px; }

.microMotor_product .microMotor_productList ul li:nth-child(4) {
  color: #777; }



.microMotor_product .microMotor_productList ul a {
  display: inline-block; }

.microMotor_product .microMotor_productList ul .abt a {
  padding: 4px 6px;
  border: 1px solid #f83b35;
  text-decoration: none;
  display: inline-block;
  color: #f83b35;
  font-size: 18px; }

.microMotor_detailed {
  background: #f4f5f9;
  padding: 40px 0;
  text-align: center;
  margin-top: 30px; }

.microMotor_detailed h1 {
  font-size: 27px;
  color: #222222;
  padding-bottom: 30px; }

.microMotor_detailed .microMotor_detailedAbt {
  padding-top: 30px; }

.microMotor_detailed .microMotor_detailedAbt a {
  border: 1px solid #f83b35;
  display: inline-block;
  color: #f83b35;
  text-decoration: none;
  padding: 4px 6px;
  font-size: 20px;
  margin: 0 15px; }

.microMotor_detailed .microMotor_detailedAbt a:nth-child(2) {
  background: #f83b35;
  color: #fff; }

.microMotor_why {
  padding: 40px 0 80px; }

.microMotor_why h1 {
  font-weight: normal;
  font-size: 40px;
  color: #f83b35;
  text-align: center; }

.microMotor_why h3 {
  font-size: 24px;
  color: #222;
  text-align: center;
  padding-top: 20px; }

.microMotor_why .microMotor_whyImg {
  padding-top: 30px; }

.microMotor_why .microMotor_whyDl {
  padding-top: 50px; }

.microMotor_why dl {
	margin-bottom: 0;
  padding-bottom: 0px; }

.microMotor_why dl dt {
  font-size: 26px;
  color: #222222;
  font-weight: normal; }

.microMotor_why dl dt i {
  font-size: 40px;
  color: #f83b35;
  font-family: Impact; }

.microMotor_why dl dd {
  font-size: 20px;
  color: #222222;
  padding-top: 15px; }

.microMotor_why .microMotor_whyAbt a {
  border: 1px solid #f83b35;
  display: inline-block;
  color: #f83b35;
  text-decoration: none;
  padding: 4px 6px;
  font-size: 20px;
  margin: 0 15px; }

.microMotor_why .microMotor_whyAbt a:nth-child(1) {
  background: #f83b35;
  color: #fff; }

.microMotor_Manufactor {
  position: relative;
  padding-top: 50px;
  text-align: center; }

.microMotor_Manufactor .position {
  width: 100%;
  height: 300px;
  background: #f4f5f9;
  position: absolute;
  top: 0;
  left: 0; }

.microMotor_Manufactor h1 {
  font-size: 30px;
  color: #222222;
  position: relative;
  z-index: 2; }

.microMotor_Manufactor h3 {
  font-size: 18px;
  color: #333333;
  padding: 25px 0;
  position: relative;
  z-index: 2; }

.microMotor_Manufactor .microMotor_ManufactorList {
  padding-top: 50px; }

.microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox {
  background: #fff;
  width: 300px;
  box-sizing: border-box;
  margin: auto;
  padding: 0 20px 20px;
  box-shadow: 0 0 10px 3px #eee;
  position: relative;
  margin-bottom: 40px;
  padding-top: 30px; }

.microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox .number {
  position: absolute;
  width: 63px;
  height: 63px;
  background: #f83b35;
  color: #fff;
  margin: auto;
  left: 0;
  right: 0;
  top: -30px;
  font-size: 28px;
  font-weight: bold;
  line-height: 63px;
  display: block; }

.microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox ul {
  padding-top: 20px;
  text-align: left; }

.microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox ul h4 {
  font-size: 28px;
  color: #f83b35;
  font-weight: bold;
  text-align: center; }

.microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox ul p {
  font-size: 20px;
  color: #222222;
  padding-bottom: 20px;
  text-align: center; }

.microMotor_Customer {
  padding: 50px 0; }

.microMotor_Customer h1 {
  font-size: 26px;
  color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0; }

.microMotor_Customer h1 span {
  display: inline-block;
  padding: 2px 10px;
  background: #f83b35;
  margin: 0 15px; }

.microMotor_Customer .microMotor_CustomerImg {
  text-align: center; }

.microMotor_Customer .microMotor_CustomerImg ul {
  text-align: center; }

.microMotor_Customer .microMotor_CustomerImg li {
  display: inline-block;
  width: 170px;
  margin: 0 7px;
  display: inline-block;
  overflow: hidden; }

.microMotor_Customer .microMotor_CustomerImg a {
  display: inline-block; }

.microMotor_Customer .microMotor_CustomerImg img {
  width: 100%; }

.microMotor_Customer .microMotor_CustomerAbt {
  text-align: center;
  padding-top: 30px; }

.microMotor_Customer .microMotor_CustomerAbt a {
  border: 1px solid #f83b35;
  display: inline-block;
  color: #f83b35;
  text-decoration: none;
  padding: 4px 6px;
  font-size: 20px;
  margin: 0 15px; }

.microMotor_Customer .microMotor_CustomerAbt a:nth-child(1) {
  background: #f83b35;
  color: #fff; }

.microMotor_txt {
  padding: 35px 0;
  text-align: center;
  background: #f4f5f9; }

.microMotor_txt h3 {
  font-size: 30px;
  color: #222222;
  font-weight: normal; }

.microMotor_txt p {
  font-size: 18px;
  color: #333333;
  padding: 15px 0; }

.microMotor_foot {
  padding: 60px 0 50px; }

.microMotor_foot .microMotor_footList {
  width: 370px; }

.microMotor_foot .microMotor_footList ul {
  width: 250px;
  margin-bottom: 40px; }

.microMotor_foot .microMotor_footList .number {
  width: 75px;
  height: 75px;
  text-align: center;
  line-height: 75px;
  border-radius: 50%;
  font-size: 38px;
  color: #ffffff;
  background: #f83b35;
  box-shadow: 0 0 0px 5px #fed8d7;
  margin-right: 15px; }

.microMotor_foot .microMotor_footList ul h3 {
  font-size: 20px;
  color: #555555;
  padding-bottom: 10px; }

.microMotor_foot .microMotor_footList ul li {
  font-size: 16px;
  color: #555555; }

.microMotor_foot .microMotor_footAbt {
  text-align: center;
  padding: 30px 0; }

.microMotor_foot .microMotor_footAbt a {
  border: 1px solid #f83b35;
  display: inline-block;
  color: #f83b35;
  text-decoration: none;
  padding: 4px 6px;
  font-size: 20px;
  margin: 0 15px;
  background: #f83b35;
  color: #fff; }

.tb-btn {
  display: none; }
  .microMotor_detailedImg table{
  	display: inline-block;
  	border: none;
  	margin-right: -4px;
  }
.microMotor_detailedImg table th{
	width: 176px;
	height: 30px;
	font-size: 16px;
	text-align: center;
	font-weight: normal;
	border: 1px solid #000;
}
@media (min-width: 1200px) {
  .microMotor_footBox {
    display: flex;
    flex-flow: wrap;
    justify-content: center; } }
@media (max-width: 768px) {
  html, body {
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0; }

  .microMotor_head {
    text-align: center;
    display: none; }

  .microMotor .microMotor_head .microMotor_headLeft h3 {
    line-height: 23px; }

  .microMotor .microMotor_head .microMotor_headRight p {
    padding: 0; }

  .microMotor .microMotor_head .microMotor_headRight ul li {
    padding-right: 10px; }

  .microMotor_detailed {
    width: 100%;
    overflow-x: hidden; }

  .microMotor_detailed .microMotor_detailedAbt a {
    font-size: 16px; }

  .microMotor_why .microMotor_whyImg img {
    width: 100%; }

  .microMotor_why .microMotor_whyAbt a {
    font-size: 16px; }

  .microMotor_Manufactor h3 {
    line-height: 28px; }

  .microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox {
    margin-bottom: 40px;
    width: 100%; }

  .microMotor_Manufactor .microMotor_ManufactorList .microMotor_ManufactorListBox .number {
    position: static; }

  .microMotor_Customer .microMotor_CustomerImg a {
    display: inline-block;
    width: auto;
    height: auto; }

  .microMotor_footBox {
    padding: 5px; }

  .microMotor_foot .microMotor_footList .number {
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 5px;
    margin-right: 15px; }

  .microMotor_Customer .microMotor_CustomerAbt a {
    font-size: 16px; }

  .microMotor_footBox {
    display: block; }

  .microMotor_productList .row {
    padding: 0;
    margin: 0; }

  .microMotor_swiper {
    padding: 0;
    margin: 0; }

  .microMotor_why dl {
    padding-left: 10px; }

  .microMotor_ManufactorList .row {
    padding: 0;
    margin: 0; }

  .microMotor_Customer .microMotor_CustomerImg img {
    width: auto; } }
</style>