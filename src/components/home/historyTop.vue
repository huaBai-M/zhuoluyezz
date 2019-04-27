<template>
	<div class="container" style="margin-bottom: 10px;">
		<div class="allTop">
			<div class="box_top clearfix">
				<span class="pull-left">首页/
					<a href="javascript:void(0)">总排行榜</a>
				</span>
				<a href="#/home/allmonth" class="pull-right"> &lt; &lt;返回上一页</a>
			</div>
		</div>
		<div class="box_middle" style="background: #fff;margin-top: 10px;">
			<div class="box_search" style="padding: 10px;">
				<img src="http://page-bucket.oiaqye7985.com/land-page/images/home/home2.jpg"/>
				历史中奖名单&nbsp;&nbsp;&nbsp;
				<el-date-picker v-model="dateValue" type="month" placeholder="选择月份" @change="dataSearch" format="yyyy-MM" value-format="yyyy-MM" style="margin: auto;">
				</el-date-picker>
				<a href="javascript:void(0)" @click="excel" class="excel" v-if="ifChan==31">获奖名单下载</a>
			</div>
			<div class="tan">
				<el-alert :title="titleMsg" type="error" v-show="beSeen">
                </el-alert>
			</div>
			<!---->
			<div class="ihomeBoxM_table" v-show="!none" v-loading="loading">
				
				<div class="content clearfix">
					<ul v-for="(item,index) in topdata" class="col-md-3 col-lg-3">
						<li class="bgImg">
							<div class="name"><span>{{item.authorName}}</span>同学：</div>
							<div class="des">你设计制作的着陆页，在信融集团<span class="mD">{{ item.recordTime | m }}</span>月全国“最具营销力
								设计大赛”中转化率排名第<span class="fD">{{index+1}}</span>名。</div>
								<div class="com">特发此证，以资鼓励。</div>
								<div class="company">中工信融（北京）网络科技有限公司</div>
								<div class="date">{{item.recordTime | y}}</div>
								<div class="img"><img src="http://page-bucket.oiaqye7985.com/land-page/images/verse.png" alt="" width="100%"></div>
							</li>
							<li class="msg">
								<div class="msg1">
									设计师：<span>{{item.authorName}}</span>  &nbsp; &nbsp;第<span>{{index+1}}</span>名
								</div>
								<div class="msg2">
									<span>{{item.channelName}}</span>分公司  &nbsp;&nbsp;  转化率： <span class="rotate">{{(item.changeRate*100).toFixed(2)}}%</span>
								</div>
								<div class="msg3">
									客户名称：<span>{{item.customerName}}</span>
								</div>
							</li>
							<li class="buttons">
								<span @click="tanOpen(index)">下载证书 ></span>
								<a v-bind:href="item.visitUrl" target="_blank" style="color:#666;">查看链接 ></a>
							</li>

						</ul>
						<!-- 遮挡 -->
						<div class="boxHide" v-if="seen">
							<p style="display:none;">{{idP}}</p>
							<div class="closeB" @click="seen=false"><span class="el-icon-close"></span></div>
							<div class="bgm">
								<div class="name"><span>{{ pName }}</span>同学：</div>
								<div class="des">你设计制作的着陆页，在信融集团<span class="mD">{{ monthP }}</span>月全国“最具营销力
									设计大赛”中转化率排名第<span class="fD">{{ rank }}</span>名。</div>
									<div class="com">特发此证，以资鼓励。</div>
									<div class="company">中工信融（北京）网络科技有限公司</div>
									<div class="date">{{ dateP }}</div>
									<div class="img"><img src="http://page-bucket.oiaqye7985.com/land-page/images/verse.png" alt="" width="100%"></div>
								</div>
								<div class="downButton">
									<span @click="downBook">下载证书</span>
									<p>（备注：图片生成中下载速度过慢，请耐心等待）</p>
								</div>
							</div>
						</div>
					</div>
					<!---->
					<div class="alltop_none" v-show="none">
						<img src="@/assets/img/none.jpg" />
						<p>没有查询到当前月份的中奖纪录~</p>
					</div>
				</div>
				<!---->

			</div>
		</template>
		
		<script>
			import {TIMEOUT, ERR_OK, baseURL, STATUS} from '@/assets/js/config'
			export default {
				data() {
					return {
						topdata: [],
						page: 1,
						ifChan:this.$store.state.loginData.channel_id,
						display: true,
						none: false,
						img: "http://page-bucket.oiaqye7985.com/land-page/images/sou.jpg",
						PageCount: 10,
						total_page: 0,
						dateValue: null,
						description: null,
						likeImg: "http://page-bucket.oiaqye7985.com/land-page/images/home/home4.png",
						placeholderdata: '请输入着落页名称，例如木地板',
						seen:false,
						pName:'',
						monthP:'',
						rank:'',
						idP:0,
						dateP:'',
						loading:false,
						titleMsg:'',
						beSeen:false
					}
				},
				computed: {},
				watch: {},
				created() {

					if(this.$store.state.loginData.channel_id == undefined) {
						this.$router.push({
							path: '/',
							name: 'home',
						})
						return false
					}
			//            this.dataRequest(this.page)

		},
		mounted() {

			this.prevMonth()
			console.log(this.$store.state.loginData.channel_id)
		},
		methods: {
			//获得上一月
			prevMonth() {
				var date = new Date;
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				if(month != 1) {
					month = month - 1;
					month = (month < 10 ? "0" + month : month);
				} else {
					month = 12;
					year = year - 1;
				}

				this.dateValue = (year.toString() + '-' + month.toString());
				this.dataSearch()

			},
			number(val) {
				var val = val * 100
				if(val != 0) {
					return val.toFixed(2)
				} else {
					return val
				}
			},
			imgBG(index) {
				var style = {}
				if(index == 0) {
					style = {
						background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top1.png) no-repeat 17px 0px'
					}
				} else if(index == 1) {
					style = {
						background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top2.png) no-repeat 17px 0px'
					}
				} else if(index == 2) {
					style = {
						background: 'url(http://page-bucket.oiaqye7985.com/land-page/images/home/top3.png) no-repeat 17px 0px'
					}
				} else {}
				if(this.page == 1) {
					return style
				}

			},
			imgSize(index) {
				var style = {}
				if(index == 0) {
					style = {
						width: '50px',
						height: '50px'
					}
				} else if(index == 1) {
					style = {
						width: '50px',
						height: '50px'
					}
				} else if(index == 2) {
					style = {
						width: '50px',
						height: '50px'
					}
				} else {}
				if(this.page == 1) {
					return style
				}
			},
			imgSizet(index) {
				var style = {}
				if(index == 0) {
					style = {
						width: '50px',
						height: '50px'
					}
				} else if(index == 1) {
					style = {
						width: '50px',
						height: '50px'
					}
				} else if(index == 2) {
					style = {
						width: '50px',
						height: '50px'
					}
				} else {}
				if(this.page == 1) {
					return style
				}
			},
			Newlike(index) {
				this.$xhr.get("/pageShow/addThumb", {
					params: {
						authorId: this.$store.state.loginData.id,
						path: this.topdata[index].path,
						pageId: this.topdata[index].pageId,
					}
				}).then((res) => {
					this.topdata[index].thumb = true
					this.topdata[index].visitNum += 1
				})
			},
			NewlikeN(index) {
				this.$xhr.get("/pageShow/cancelThumb", {
					params: {
						authorId: this.$store.state.loginData.id,
						path: this.topdata[index].path,
						pageId: this.topdata[index].pageId,
					}
				}).then((res) => {
					if(this.topdata[index].visitNum >= 0) {
						this.topdata[index].visitNum -= 1
						this.topdata[index].thumb = false
					}
				})
			},
			excel(){
				console.log(this.dateValue)
				let actoinURL=baseURL.dev+'/tbMonthlyRank/downloadListExcel?'+$.param({
				 	monthly :this.dateValue ,
				 })
				this.downloadFileGet(actoinURL)
			},
			boxsearch() {
				this.img = "http://page-bucket.oiaqye7985.com/land-page/images/souh.jpg"
				this.placeholderdata = ''
				$(".box_input").css("border-color", "#1C7FFE")
				$(".box_input span").css("border-color", "#1C7FFE")
			},
			Nboxsearch() {
				this.img = "http://page-bucket.oiaqye7985.com/land-page/images/sou.jpg"
				this.placeholderdata = '请输入着落页名称，例如木地板'
				$(".box_input").css("border-color", "#666")
				$(".box_input span").css("border-color", "#666")
			},
			dataRequest(page) {
				this.$xhr.get("/pageShow/topTotal", {
					params: {
						authorId: this.$store.state.loginData.id,
						currentPage: page
					}
				}).then((res) => {
					//					console.log(res)
					this.total_page = res.data.totalCount
					this.topdata = res.data.data
				})
			},
			dataSearch() {
				this.topdata = [];
				//                if(this.description==''||this.description==null){
				//                    this.dataRequest(1)
				//                    this.display=true
				//                    this.none=false
				//                    return false
				//                }
				var date1 = this.dateValue;
				//                console.log(this.dateValue)
				this.$xhr.get("/tbMonthlyRank/getTbMonthlyRank", {
					params: {
						authorId: this.$store.state.loginData.id,
						date: date1,
						currentPage: 1,
						pagenum: 10
					}
				}).then((res) => {
					//					console.log(res)
					if(res.data.totalCount == 0) {
						this.none = true
						$('.add_month').css({
							"left": "20px",
							"top": "10px"
						})
					} else {
						this.none = false
						$('.add_month').css({
							"left": "240px",
							"top": "45px"
						})
					}
					this.display = false
					this.topdata = [];
					this.topdata = res.data.data
					console.log(this.topdata)
				})
			},
			pagination(currentPage) {

				this.page = currentPage
				//                this.dataRequest(this.page)
			},
			filterDate(input){
				var d = new Date(input);
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
				return month+'.'+day
			},
			tanOpen(index){

				this.seen = true
				this.$nextTick(function () {
				  //dom更新后执行
				  var nameH = $('.ihomeBoxM_table ul').eq(index).find('.name span').html();
				  var mDH = $('.ihomeBoxM_table ul').eq(index).find('.des .mD').html();
				  var fDH = $('.ihomeBoxM_table ul').eq(index).find('.des .fD').html();
				  var date = $('.ihomeBoxM_table ul').eq(index).find('.date').html();
				  this.pName = nameH;
				  this.monthP = mDH;
				  this.rank = fDH;
				  this.dateP = date;
				  this.idP = this.topdata[index].id;
				})
				
				
			},
			downloadFileGet(actoinURL){
			  let a = document.createElement('a');
			  let body = document.getElementsByTagName('body')[0]
			  body.appendChild(a);
			  a.setAttribute('style','display:none');
			  a.setAttribute('href',actoinURL); //下载文件的请求路径
			  a.click();
			  body.removeChild(a)
			},
			downBook(){
				var _this =this;
				 window.open(_this.$store.state.ip+"/tbMonthlyRank/downloadImg" + '?' + $.param({
				 	id :_this.idP,
				 	authorName :_this.pName,
				 	monthly :_this.monthP ,
				 	rank : _this.rank
				 }),'_self');        
			}
		},
		filters: {
			y: function(input) {
				var d = new Date(input);
				var year = d.getFullYear();
				var month = d.getMonth() + 1;
				month = month<10 ? '0' + month : month;
				var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
				var hour = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				return year + '-' + month;
			},
			m: function(input) {
				var d = new Date(input);
				
				var month = d.getMonth() + 1;
				
				return  month;
			},
		},
	}
</script>
<style type="text/css">
	.box_middle h1 a {
		font-size: 14px;
		font-weight: bold;
		color: #676767;
	}
	
	.box_middle h1 a:hover {
		color: #1c7ffe;
	}
	
	.box_middle .add_month {
		width: 300px;
		position: absolute;
		left: 240px;
		top: 45px;
	}
	
	.box_middle .add_month span {
		font-weight: 100;
		margin-right: 10px;
		color: #676767;
		font-size: 16px;
	}
	.ihomeBoxM_table {
		position: relative;
	}
	.ihomeBoxM_table .content {
		margin-top: 25px;
	}
	.ihomeBoxM_table .content ul{
		padding: 0 15px;
		list-style: none;
	}
	.ihomeBoxM_table .content ul li{
		width:100%;
	}
	.ihomeBoxM_table .content ul li.bgImg{
		width:100%;
		height: 195px;
		background: url("http://page-bucket.oiaqye7985.com/land-page/images/zhengshu.jpg") no-repeat center;
		-webkit-background-size: cover;
		background-size: cover;
		padding: 70px 0 0 0;
		font-size: 10px;
		color: #685735;
		position: relative;
	}
	.ihomeBoxM_table .content ul li.bgImg .name span {
		/*font-weight: 700;*/
	}
	.ihomeBoxM_table .content ul li.bgImg .name {
		font-size: 12px;
		margin-bottom: 0;
		transform: scale(0.8);
	}
	.ihomeBoxM_table .content ul li.bgImg .des {
		text-indent: 10px;
		/*margin-bottom: 2px;*/
		line-height: 20px;
		transform: scale(0.8);
	}
	.ihomeBoxM_table .content ul li.bgImg .com {
		text-indent: 15px;
		margin-bottom: 2px;
		transform: scale(0.8);
	}
	.ihomeBoxM_table .content ul li.bgImg .company {
		margin-left: 58px;
		transform: scale(0.8);
	}
	.ihomeBoxM_table .content ul li.bgImg .date {
		margin-left: 140px;
		transform: scale(0.8);
	}
	.ihomeBoxM_table .content ul li.msg {
		text-align: center;
		color: #555;
		font-size: 14px;
		line-height: 28px;
		margin-top: 10px;
	}
	.ihomeBoxM_table .content ul li.msg .msg2 {
		width:104%;
	}
	.ihomeBoxM_table .content ul li.msg .msg3 {
		width:100%;
		height: 20px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.ihomeBoxM_table .content ul li.msg span.rotate {
		color: #30a4fe;
	}
	.ihomeBoxM_table .content ul li.buttons {
		margin-top: 15px;
		text-align: center;
		color: #555;
		padding-bottom: 10px;
		border-bottom: 1px solid #dcdcdc;
		cursor: pointer;
	}
	.ihomeBoxM_table .content ul li.buttons span:first-child {
		margin-right: 50px;
		color: #30a4fe;

	}
	.ihomeBoxM_table .boxHide {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 100;
		padding: 
	}
	.ihomeBoxM_table .boxHide .bgm{
		width: 856px;
		height: 610px;
		background: url("http://page-bucket.oiaqye7985.com/land-page/images/zhengshu.jpg") no-repeat center;
		-webkit-background-size: cover;
		background-size: cover;
		padding: 225px 65px 0 80px;
		font-size: 10px;
		color: #685735;
		position: absolute;
		left:50%;
		top: 45%;
		transform: translate(-50%,-50%);
	}
	.ihomeBoxM_table .boxHide .name {
		font-size: 28px;
		margin-bottom: 10px;
	}
	.ihomeBoxM_table .boxHide .des {
		font-size: 26px;
		line-height: 48px;
		text-indent: 40px;
		margin-bottom: 8px;
	}
	.ihomeBoxM_table .boxHide .com {
		font-size: 26px;
		text-indent: 40px;
		margin-bottom: 46px;
	}
	.ihomeBoxM_table .boxHide .company {
		font-size: 18px;
		color: #3f392c;
		margin-left: 385px;
		margin-bottom: 8px;
	}
	.ihomeBoxM_table .boxHide .date {
		font-size: 18px;
		color: #3f392c;
		margin-left: 500px;
	}
	.ihomeBoxM_table .boxHide .closeB {
		position: absolute;
		right: 20px;
		top: 20px;
		width: 35px;
		height: 35px;
		border-radius: 35px;
		background-color: #fff;
		color: #7f7f7f;
		line-height: 35px;
		text-align: center;
		z-index: 101;
		font-size: 25px;
	}
	.ihomeBoxM_table .boxHide .downButton {
		position: absolute;
		left:52%;
		top: 85%;
		transform: translate(-50%,-50%);
	}
	.ihomeBoxM_table .boxHide .downButton span {
		display: block;
		width:160px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		background-color: #fff;
		font-size: 18px;
		color: #222;
		border-radius: 20px;
		cursor: pointer;
	}
	.ihomeBoxM_table .boxHide .downButton span:hover {
		background-color: #2da6ff;
		color: #fff;
	}
	.ihomeBoxM_table .boxHide .downButton p {
		margin-top: 20px;
		font-size: 12px;
		color: #fff;
		margin-left: -45px;
	}
	.ihomeBoxM_table .boxHide .img {
		width: 150px;
		height: 150px;
		position: absolute;
		right: 170px;
		bottom:47px;

	}
	.ihomeBoxM_table .content ul .img {
		width: 40px;
		height: 40px;
		position: absolute;
		right: 66px;
		bottom:16px;

	}
	.excel{
		float: right;
		font-size: 14px;
	    font-weight: bold;
	    color: #676767;
		line-height: 50px;
	}
	.box_search .excel:hover{color: #1c7ffe;}
</style>
