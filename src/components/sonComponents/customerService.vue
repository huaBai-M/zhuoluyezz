<template>
	<div>
		<el-dialog  title="在线客服修改" :visible.sync="dialogVisible"  width="1000px"  center :before-close="NSubmission">
		<div>
			<p class="title_h2">客户信息</p>
			<el-row>
				<el-col :span="17">
					<el-row>
				  		<el-col :span='3'><span style="line-height: 40px;text-align: left;display: block;" >客户名称：</span></el-col>
				  		<el-col :span='8'>
				  			<el-input placeholder="" v-model="customer_name"></el-input>
				  		</el-col>
				  		<el-col :span='3'><span style="line-height: 40px;text-align: center;display: block;">qq：</span></el-col>
				  		<el-col :span='8'>
				  			<el-input placeholder="请输入qq" v-model="qq"></el-input>
				  		</el-col>
					</el-row>
					<br />
			  		<el-row>
				  		<el-col :span='3'><span style="line-height: 40px;text-align: left;display: block;">回拨电话：</span></el-col>
				  		<el-col :span='8'>
				  			<el-input placeholder="请输入回拨电话" v-model="backPhone"></el-input>
				  		</el-col>
				  	</el-row>
				</el-col>
				<el-col :span="7" v-if="false">
					<div class="text-center">
						<a type="button" class="el-button el-button--primary el-button--small" style="padding: 5px;position: relative;">
							<input type="file"  style="opacity: 0;width: 100px;height: 20px;position: absolute;top: 0;left: 0;z-index: 10;" v-on:change="imagew($refs.module2Foot)" ref="module2Foot"/>
							<span>上传微信二维码：</span>
						</a>
						<div style="width: 100px;height: 100px;overflow: hidden;margin:5px auto 0;">
							<img src="@/assets/img/img.png" width="100%" v-if="wechat=='public/images/img.png'"/>
							<img v-bind:src="wechat" width="100%" v-else="wechat!=null"/>
						</div>
					</div>
				</el-col>
			</el-row>
			<br />
			<p class="title_h2">在线客服设置</p>
			<el-row>
	    		<el-col :span='4'>列表是否显示：</el-col>
				<el-col :span="20">
					<el-checkbox-group v-model="sybIfshowCopy" @change="sybIfshowFun">
				    	<el-checkbox label="consultation">在线咨询</el-checkbox>
					    <el-checkbox label="qq"  v-show='qqStatus'>QQ</el-checkbox>
					    <!-- <el-checkbox label="weixin"  v-show='qqStatus' >微信咨询</el-checkbox> -->
					    <el-checkbox label="word" >在线留言</el-checkbox>
					    <el-checkbox label="phone">回拨电话</el-checkbox>
			    	</el-checkbox-group>
				</el-col>
		   </el-row>
		   <br />
		    <el-row class="text-left" >
	    		<el-col :span='4'>样式编号：</el-col>
	    		<el-col :span='20'>
	    			<el-radio-group v-model="syb_styleNum">
		    			<!--<el-radio label="1">样式1</el-radio>-->
						<!--<el-radio label="2">样式2</el-radio>-->
						<el-radio label="3">样式3</el-radio>
					</el-radio-group>
	    		</el-col>
		    </el-row>
		    <br />
		    <el-row class="text-left">
	    		<el-col :span='8'>
	    			产品类型：
    				<el-select v-model="syb_productType" placeholder="请选择产品类型">
						    <el-option
						      v-for="item in syb_productTypeArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					</el-select>
	    		</el-col>
	    		<el-col :span='8'>
	    			位置：
    				<el-select v-model="syb_position"  placeholder="请选择位置">
						    <el-option
						      v-for="item in PositionArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					</el-select>
	    		</el-col>
	    		<el-col :span='8'>
	    			页面弹窗：
    				<el-select v-model="syb_consultation"  placeholder="请选择页面弹窗">
					    <el-option
					      v-for="item in sybExtendArr"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
	    		</el-col>
		    </el-row>
		    <br />
		     <el-row class="text-left">
	    		<el-col :span='8'>
	    			留言列表：
    				<el-select v-model="if_footcustomer" placeholder="请选择留言列表">
						    <el-option
						      v-for="item in if_footcustomerArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					</el-select>
	    		</el-col>
	    		<el-col :span='8' v-if="false">
					移动端底部：
    				<el-select v-model="if_show_mb" placeholder="请选择移动端底部样式">
						    <el-option
						      v-for="item in middlesybArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					</el-select>
	    		</el-col>
	    		<el-col :span='8'>
					弹框样式：
    				<el-select v-model="syb_consultadionStyle" placeholder="请选择弹框样式">
						    <el-option
						      v-for="item in syb_consultadionStyleArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					</el-select>
	    		</el-col>
	    		<!--<el-col :span='8'>
					底部悬浮框：
    				<el-select v-model="syb_bottomStyle" placeholder="请选择底部悬浮框">
						    <el-option
						      v-for="item in footFrameArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
					</el-select>
	    		</el-col>-->
		    </el-row>
		    <br />
		    <p class="title_h2" v-show="ifColor">自定义样式: 可进行文字编辑和颜色修改</p>
		    <el-row v-show="ifColor">
		    	<el-col :span="8">
			    	<div class="customBox_list" :style="{background:color}">
						<a href="javascript:void(0)" class="clearA"><img src="http://ztcbucket.oiaqye7985.com/kf/center_del3.png"/></a>
						<h1 id="customBox_title">{{titleT}}</h1>
						<p id="customBox_content">{{content}}</p>
						<div class="customBox_listBottom">
							<a href="javascript:void(0)" style="border-right: 1px solid #ccc;">
								<img src="http://ztcbucket.oiaqye7985.com/kf/center_Consultation3.png"/>
								<span id="customBox_abt">{{abtbutton}}</span>
							</a>
							<a href="javascript:void(0)">
								<img src="http://ztcbucket.oiaqye7985.com/kf/center_tel3.png"/>
								免费电话
							</a>
						</div>
					</div>
		    	</el-col>
		    	<el-col :span="12">
					<div class="cusForm">
						<el-form :label-position="labelPosition" label-width="80px" >
							  <el-form-item label="标题">
							   	 	<el-input v-model="titleT" placeholder="例如每日前20名可享受八折优惠" ></el-input>
							  </el-form-item>
							  <el-form-item label="内容">
							    	<el-input v-model="content" placeholder="先到先的，名额有限，速来抢购"></el-input>
							  </el-form-item>
							  <el-form-item label="按钮">
							    	<el-input v-model="abtbutton" placeholder="马上开枪"></el-input>
							  </el-form-item>
							  <el-form-item label="颜色">
							    	<el-color-picker v-model="color"></el-color-picker>
							  </el-form-item>
						</el-form>
					</div>
		    	</el-col>
		    </el-row>
		    <!--底部样式-->
		    <div class="footPage" v-show="syb_bottomStyle">
		    	<el-row >
			    	<el-col :span="24">
			    		<el-select v-model="footFrameStyle" placeholder="请选择底部样式">
						    <el-option
						      v-for="item in footFrameStyleArr"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
			    	</el-col>
			    </el-row>
			     <!--底部样式一-->
			    <el-row v-show="footFrameStyle==1">
			   		<el-col :span="24">	
						<div class="footPage1">
							<div class="footPage1_bg">
								<img v-bind:src="footFrameimg1" width="100%" height="100%"/>
							</div>
							<div class="footPage1_txt clearfix">
								<span class="footPage1_txtIcon">
									<img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/01/01_icon.png"/>
								</span>
								<div class="footPage1_txth1">
									<p>{{footFrametext1[0]}}</p>
									<h3>{{footFrametext1[1]}}</h3>
								</div>
								<a href="javascript:void(0)" class="footPage1_txtabt">
									{{footFrametext1[2]}}
								</a>
							</div>
						</div>
						<!---->
			   		</el-col>
		   			<el-col :span="24">
		   					<el-form :inline="true"  class="demo-form-inline">
								<el-form-item label="标题1">
							    	<el-input v-model="footFrametext1[0]" maxlength="30"></el-input>
							  	</el-form-item>
							  	<el-form-item label="标题2">
							    	<el-input v-model="footFrametext1[1]" maxlength="26"></el-input>
							  	</el-form-item>
							  	<el-form-item label="按钮">
							    	<el-input v-model="footFrametext1[2]"></el-input>
							  	</el-form-item>
							  	<el-form-item label="">
							    	<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" style="top: 0;">
										<i class="el-icon-upload"></i><span>修改背景图</span>
										<input type="file" v-on:change="footFrameImg1($refs.footFrameImg1)" ref="footFrameImg1"/>
									</a>
							  	</el-form-item>
							</el-form>
		   			</el-col>
			    </el-row>
			     <!--底部样式二-->
			    <el-row v-show="footFrameStyle==2">
			    	<el-col :span="24">	
			    		<div class="footPage2">
							<div class="footPage2_bg">
								<img v-bind:src="footFrameimg2" width="100%" height="100%"/>
							</div>
							<div class="footPage2_txt clearfix">
								<div class="footPage2_txtH1 clearfix">
									<span class="maxWord">{{footFrametext2[0]}}</span>
									<div class="footPage2_txtH1P">
										<h1>{{footFrametext2[1]}}</h1>
										<p>
											{{footFrametext2[2]}}
										</p>
									</div>
									<div class="footPage2_input">
										<input type="text" v-bind:placeholder="footFrametext2[3]"/>
										<label><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/02/02_icon_tel.png" width="60%"/></label>
									</div>
								</div>
							</div>
						</div>
			    	</el-col>
		   			<el-col :span="24">
		   					<el-form :inline="true"  class="demo-form-inline">
								<el-form-item label="标题1">
							    	<el-input v-model="footFrametext2[0]" maxlength="4"></el-input>
							  	</el-form-item>
							  	<el-form-item label="标题2">
							    	<el-input v-model="footFrametext2[1]" maxlength="14"></el-input>
							  	</el-form-item>
							  	<el-form-item label="标题3">
							    	<el-input v-model="footFrametext2[2]" maxlength="14"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框">
							    	<el-input v-model="footFrametext2[3]" maxlength="35"></el-input>
							  	</el-form-item>
							  	<el-form-item label="">
							    	<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" style="top: 0;">
										<i class="el-icon-upload"></i><span>修改背景图</span>
										<input type="file" v-on:change="footFrameImg2($refs.footFrameImg2)" ref="footFrameImg2"/>
									</a>
							  	</el-form-item>
							</el-form>
		   			</el-col>			    	
			    </el-row>
			     <!--底部样式三-->
			    <el-row v-show="footFrameStyle==3">
			    	<el-col :span="24">	
						<div class="footPage3">
							<div class="footPage2_bg">
								<img v-bind:src="footFrameimg3" width="100%" height="100%"/>
							</div>
							<div class="footPage3_txt">
								<h3>
									{{footFrametext3[0]}}
								</h3>
								<div class="footPage3_input">
									<ul class="clearfix">
										<li>
											<input type="text"  v-bind:placeholder="footFrametext3[1]" />
											<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/icon_user.png" /></span>
										</li>
										<li>
											<input type="text" v-bind:placeholder="footFrametext3[2]"/>
											<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/icon_tel.png"/></span>
										</li>
										<li>
											<input type="text" v-bind:placeholder="footFrametext3[3]"/>
											<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/icon_text.png"/></span>
										</li>
										<li class="abtColor">
											<a href="javascript:void(0)">
												{{footFrametext3[4]}}
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
			    	</el-col>
		   			<el-col :span="24">
		   					<el-form :inline="true"  class="demo-form-inline">
								<el-form-item label="标题1">
							    	<el-input v-model="footFrametext3[0]" maxlength="26"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框1">
							    	<el-input v-model="footFrametext3[1]" maxlength="12"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框2">
							    	<el-input v-model="footFrametext3[2]" maxlength="12"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框3">
							    	<el-input v-model="footFrametext3[3]" maxlength="12"></el-input>
							  	</el-form-item>
							  	<el-form-item label="按钮">
							    	<el-input v-model="footFrametext3[4]"></el-input>
							  	</el-form-item>
							  	<el-form-item label="">
							    	<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" style="top: 0;">
										<i class="el-icon-upload"></i><span>修改背景图</span>
										<input type="file" v-on:change="footFrameImg3($refs.footFrameImg3)" ref="footFrameImg3"/>
									</a>
							  	</el-form-item>
							</el-form>
		   			</el-col>			    	
			    </el-row>
			     <!--底部样式四-->
			    <el-row v-show="footFrameStyle==4">
			    	<el-col :span="24">	
						<div class="footPage4">
							<div class="footPage4_bg">
								<img v-bind:src="footFrameimg4" width="100%" height="100%"/>
							</div>
							<div class="footPage4_txt">
								<div class="footPage4_txtLeft">
									<h3>{{footFrametext4[0]}}</h3>
									<p>{{footFrametext4[1]}}</p>
								</div>
								<div class="footPage4_txtRight">
									<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/04/04_icon_tel.png"/></span>
									<input type="text" v-bind:placeholder="footFrametext4[2]" />
									<a href="javascript:void(0)">{{footFrametext4[3]}}</a>
								</div>
							</div>
						</div>
			    	</el-col>
		   			<el-col :span="24">
		   					<el-form :inline="true"  class="demo-form-inline">
								<el-form-item label="标题1">
							    	<el-input v-model="footFrametext4[0]" maxlength="13"></el-input>
							  	</el-form-item>
							  	<el-form-item label="标题2">
							    	<el-input v-model="footFrametext4[1]" maxlength="33"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框">
							    	<el-input v-model="footFrametext4[2]" maxlength="11"></el-input>
							  	</el-form-item>
							  	<el-form-item label="按钮">
							    	<el-input v-model="footFrametext4[3]"></el-input>
							  	</el-form-item>
							  	<el-form-item label="">
							    	<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" style="top: 0;">
										<i class="el-icon-upload"></i><span>修改背景图</span>
										<input type="file" v-on:change="footFrameImg4($refs.footFrameImg4)" ref="footFrameImg4"/>
									</a>
							  	</el-form-item>
							</el-form>
		   			</el-col>			    	
			    </el-row>
			     <!--底部样式五-->
			    <el-row v-show="footFrameStyle==5">
			    	<el-col :span="24">	
						<div class="footPage5">
							<div class="footPage5_bg">
								<img v-bind:src="footFrameimg5" width="100%" height="100%"/>
							</div>
							<div class="footPage5_txt">
								<h3>{{footFrametext5[0]}}</h3>
								<p>{{footFrametext5[1]}}</p>
								<ul class="clearfix">
									<li>
										<input type="text"  v-bind:placeholder="footFrametext5[2]" />
										<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/icon_user.png" /></span>
									</li>
									<li>
										<input type="text" v-bind:placeholder="footFrametext5[3]"/>
										<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/icon_tel.png"/></span>
									</li>
									<li>
										<input type="text" v-bind:placeholder="footFrametext5[4]"/>
										<span><img src="http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/icon_text.png"/></span>
									</li>
									<li class="abtColor">
										<a href="javascript:void(0)">
											{{footFrametext5[5]}}
										</a>
									</li>
								</ul>
							</div>
						</div>
			    	</el-col>
		   			<el-col :span="24">
		   					<el-form :inline="true"  class="demo-form-inline">
								<el-form-item label="标题1">
							    	<el-input v-model="footFrametext5[0]" maxlength="19"></el-input>
							  	</el-form-item>
							  	<el-form-item label="标题2">
							    	<el-input v-model="footFrametext5[1]" maxlength="32"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框1">
							    	<el-input v-model="footFrametext5[2]"  maxlength="12"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框2">
							    	<el-input v-model="footFrametext5[3]" maxlength="12"></el-input>
							  	</el-form-item>
							  	<el-form-item label="提示框3">
							    	<el-input v-model="footFrametext5[4]" maxlength="12"></el-input>
							  	</el-form-item>
							  	<el-form-item label="按钮">
							    	<el-input v-model="footFrametext5[5]"></el-input>
							  	</el-form-item>
							  	<el-form-item label="">
							    	<a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" style="top: 0;">
										<i class="el-icon-upload"></i><span>修改背景图</span>
										<input type="file" v-on:change="footFrameImg5($refs.footFrameImg5)" ref="footFrameImg5"/>
									</a>
							  	</el-form-item>
							</el-form>
		   			</el-col>			    	
			    </el-row>
		    </div>
		    
		    <p class="title_h2">请选择投放网站</p>
		    <el-row>
		    	<el-col :span="24">
		    		   <div class="text-center">
			    		   	<el-checkbox-group  v-model="findDomainNames" @change="findDomainNamesFun">
							    <el-checkbox v-for="city in findDomainNamesArr" :label="city.id" :key="city.id">{{city.source}}</el-checkbox>
							</el-checkbox-group>
		    		   </div>
		    	</el-col>
		    </el-row>
		</div>
		  <span slot="footer" class="dialog-footer" >
		    <el-button  @click="NSubmission">取 消</el-button>
		    <el-button type="primary" @click="Submission">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>

 export default {
    data() {
      return {
      	labelPosition:'right',
      	state:false,
      	stateT:false,
        dialogVisible: false,
        data:[],
        c_id:null,
        network_id:null,
        syb_id:null,
        customer_name:null,
        syb_productType:null,
        findDomainNames:[],
        domainIds:null,
        sybIfshow:[],
        sybIfshowCopy:[],
        syb_styleNum:'3',
        syb_position:null,
        syb_consultation:'1',
        if_show_mb:null,
        if_footcustomer:null,
        qq:null,
        qqStatus:false,
        wechat:null,
        wechatStatus:null,
        backPhone:null,
        syb_consultadionStyle:'3',
        ifColor:true,
        syb_consultadionStyleArr:[
        	{ value: '1',label: '最新报价'},
       		{ value: '2',label: '限时优惠'},
       		{ value: '3',label: '自定义'}
        ],
        syb_productTypeArr:[],
        findDomainNamesArr:[],
        PositionArr:[
       	{ value: 'right',label: '右边'},
       	{ value: 'left',label: '左边'}
       ],
       sybExtendArr:[
      	{ value: '0',label: '否'},
       	{ value: '1',label: '是'}
      	],
      	if_footcustomerArr:[
      	{ value: '0',label: '不弹出'},
       	{ value: '1',label: '弹出'}
      	],
      	middlesybArr:[
      		{ value: 1,label: '显示'},
	        { value: 0,label: '不显示'},
      	],
      	color:'#327bfd',
      	titleT:"最新报价",
      	title:"最新报价",
      	content:"6月28日优惠报价单",
      	abtbutton:"点击报价",
      	rules:{required: true, message: '请输入活动名称', trigger: 'blur'},
      	syb_bottomStyle:0,//底部悬浮框
      	footFrameArr:[
      		{ value: 1,label: '开启'},
	        { value: 0,label: '关闭'},
      	],
      	footFrameStyle:'1',//选择底部样式
      	footFrameStyleArr:[
      		{ value: '1',label: '样式一'},
      		{ value: '2',label: '样式二'},
      		{ value: '3',label: '样式三'},
      		{ value: '4',label: '样式四'},
      		{ value: '5',label: '样式五'},
      	],
      	syb_bottomStyleContent:[],//选择底部文字；
      	syb_bottomStyleImages:'',//选择背景图片；
      	syb_bottomStyleSelection:'',//底部样式选择；
      	footFrameimg1:'http://page-bucket.oiaqye7985.com/land-page/images/footFrame/01/01_bg.png',
      	footFrameimg2:'http://page-bucket.oiaqye7985.com/land-page/images/footFrame/02/02_bg.png',
      	footFrameimg3:'http://page-bucket.oiaqye7985.com/land-page/images/footFrame/03/03_bg.png',
      	footFrameimg4:'http://page-bucket.oiaqye7985.com/land-page/images/footFrame/04/04_bg.png',
      	footFrameimg5:'http://page-bucket.oiaqye7985.com/land-page/images/footFrame/06/06_bg.png',
      	footFrametext1:['现在咨询，更免费赠送','装饰画册一份，让您轻松生活，悠闲自在','在线咨询'],//底部样式1文字
      	footFrametext2:['2018','专业设计团队','拨打电话立即送高效解决方案拨打电话立即送高效解决方案','请输入您的手机号'],//底部样式2文字
      	footFrametext3:['现在咨询，即免费送高效解决方案','您的姓名','您的电话','您的需求','立即咨询'],//底部样式3文字
      	footFrametext4:['专业的钢管建材加盟咨','请输入副标题名称','请输入您的电话','回拨电话'],//底部样式4文字
      	footFrametext5:['招商加盟','37面成功营销经验报价护航，无需库存成本，即可盈利','您的姓名','您的电话','您的需求','立即获取'],//底部样式5文字
      	
      };
    },
    props:["customerData","customerval"],
    computed: {
  	
    },
	watch: {
		customerData(newValue, oldValue) {  
	       this.dialogVisible= newValue
	       
	  },
	  syb_consultadionStyle(val){
	  	if(val=='3'){
	  		this.ifColor=true
	  	}else{
	  		this.ifColor=false
	  	}
	  },
	  syb_styleNum(val){
	  	if(val==3){
	  		this.qqStatus=false
	  	}else{
	  		this.qqStatus=true
	  	}
	  },
	 
	  customerval(newValue, oldValue){
		 	this.data= newValue
		 	this.syb_productTypeArr=[]
		 	if(this.data.channel_id==undefined){
		 		//直通车
		 		this.c_id=this.data.cid;
		 		this.network_id=this.data.id
		 		this.syb_productType='1'
		 		this.customer_name=this.data.customerName
		 		this.syb_productTypeArr.push({ value: '1',label: '直通车着落页'})
		 		this.sybEcho()
		 	}else{
		 		//流量宝
		 		this.c_id=this.data.customer_id
		 		this.network_id=this.data.id
		 		this.customer_name=this.data.customer_name
		 		this.syb_productTypeArr.push({ value: '3',label: '流量宝着落页'})
		 		this.syb_productType='3'
		 		this.sybEcho()
		 	}
	  }
   },
	created(){
		if(this.$store.state.loginData.channel_id==undefined){
			this.$router.push({path: '/', name: 'home',})
			return false
		}
	},
	mounted(){
		this.dialogVisible=this.customerData
		this.DomainNames()
	},
    methods: {
    	sybIfshowFun(){
    		this.state=true
    		//	consultation qq weixin word phone 1 2 3 4 5
    		var sybIf=['1','0','0','0','0','0','1','1']
    		for(var i in this.sybIfshowCopy){
    			if(this.sybIfshowCopy[i]=='consultation'){/*咨询**/
	  				sybIf[1]='1'
	  			}else if(this.sybIfshowCopy[i]=='qq'){/*qq**/
					if(this.qq==null||this.qq==''){
						let index = this.sybIfshowCopy.indexOf('qq');
						this.sybIfshowCopy.splice(index,1)
						this.open('请输入qq号码','warning')
					}else{
						sybIf[2]='1'
					}
				}else if(this.sybIfshowCopy[i]=='weixin'){
					if(this.wechat==null||this.wechat==''||this.wechat=='public/images/img.png'){
						let index = this.sybIfshowCopy.indexOf('weixin');
						this.sybIfshowCopy.splice(index,1)
						this.open('请上传微信图片','warning')
					}else{
						sybIf[3]='1'
					}
				}else if(this.sybIfshowCopy[i]=='word'){/*留言**/
					sybIf[4]='1'
				}else if(this.sybIfshowCopy[i]=='phone'){/*电话**/
					if(this.backPhone==null||this.backPhone==''){
						let index = this.sybIfshowCopy.indexOf('phone');
						this.sybIfshowCopy.splice(index,1)
						this.open('请输入电话号码','warning')
					}else{
						sybIf[5]='1'
					}
					
				}
	  			
    		}
    		this.sybIfshow=sybIf.join(",")
    	},
    	findDomainNamesFun(){
    		this.stateT=true
    		this.domainIds=this.findDomainNames
    	},
   		Submission(){
   			this.sybSubmission()
   		},
   		NSubmission(){
   			this.dialogVisible = false
   			this.$emit('NcustomerS',this.dialogVisible)
   		},
   		//生意帮回显
   		sybEcho(){
   			this.state=false
   			this.$xhr.post("/page/code/sybCode",{
				c_id:this.c_id,
				network_id:this.network_id,
				syb_productType:this.syb_productType,
		  	}).then((res)=>{
//		  		console.log(res)
		  		this.syb_id=res.data.codeEntity.id//生意帮id
				this.backPhone=res.data.customerInfo.backPhone//电话
				this.wechat=res.data.customerInfo.wechat//微信图
				this.qq=res.data.customerInfo.qq//qq
				this.sybIfshow=res.data.codeEntity.sybIfshow//选择列表
				this.sybIfshow=this.sybIfshow.split(",")
				//this.syb_styleNum=res.data.codeEntity.sybStylenum//样式编号
				console.log(res.data.codeEntity.sybStylenum)
				this.syb_position=res.data.codeEntity.sybPosition//位置
				this.syb_consultation=res.data.codeEntity.syb_consultation //页面弹窗
				this.if_footcustomer=res.data.codeEntity.if_footcustomer//留言列表
				this.if_show_mb=res.data.codeEntity.if_show_mb//移动端底部样式
				this.findDomainNames=JSON.parse(res.data.domainIds)//请选择投放网站
				this.syb_consultadionStyle=res.data.codeEntity.syb_consultadionStyle 
				console.log(this.syb_consultadionStyle)
				this.titleT=res.data.codeEntity.syb_consultadionTitle
				this.content=res.data.codeEntity.syb_consultadionContent
				this.abtbutton=res.data.codeEntity.syb_consultadionButton
				this.color=res.data.codeEntity.syb_consultadionColour
	//			consultation qq word phone 1 2 4 5
				this.sybIfshowCopy=[]
				if(this.sybIfshow[1]=="1"){
					this.sybIfshowCopy.push("consultation")
				}
				if(this.sybIfshow[2]=="1"){
					this.sybIfshowCopy.push("qq")
				}
				if(this.sybIfshow[3]=="1"){
					this.sybIfshowCopy.push("weixin")
				}
				if(this.sybIfshow[4]=="1"){
					this.sybIfshowCopy.push("word")
				}
				if(this.sybIfshow[5]=="1"){
					this.sybIfshowCopy.push("phone")
				}
				/*默认值*/
				if(res.data.codeEntity.syb_consultadionColour==null){
					this.color="#327bfd"
				}
				/*------------------------新增底部样式--------------------------------*/
				this.syb_bottomStyle=Number(res.data.codeEntity.syb_bottomStyle );//底部是否显示
				this.syb_bottomStyleContent=res.data.codeEntity.syb_bottomStyleContent; //底部文字
				this.syb_bottomStyleImages=res.data.codeEntity.syb_bottomStyleImages ;//底部图片
				this.syb_bottomStyleSelection=res.data.codeEntity.syb_bottomStyleSelection; //底部样式选择
				this.footFrameStyle=this.syb_bottomStyleSelection;//底部样式选择
				console.log(this.footFrameStyle)
				if(this.syb_bottomStyleSelection==1){
					this.footFrametext1=eval ("(" + this.syb_bottomStyleContent+ ")");
					this.footFrameimg1=this.syb_bottomStyleImages;
				}else if(this.syb_bottomStyleSelection==2){
					this.footFrametext2=eval ("(" + this.syb_bottomStyleContent+ ")");
					this.footFrameimg2=this.syb_bottomStyleImages;
				}else if(this.syb_bottomStyleSelection==3){
					this.footFrametext3=eval ("(" + this.syb_bottomStyleContent+ ")");
					this.footFrameimg3=this.syb_bottomStyleImages;
				}else if(this.syb_bottomStyleSelection==4){
					this.footFrametext4=eval ("(" + this.syb_bottomStyleContent+ ")");
					this.footFrameimg4=this.syb_bottomStyleImages;
				}else if(this.syb_bottomStyleSelection==5){
					this.footFrametext5=eval ("(" + this.syb_bottomStyleContent+ ")");
					this.footFrameimg5=this.syb_bottomStyleImages;
				}
				
			}).catch((res)=>{
				console.log(res)
			})
				
				
   		},
   		//提交生意帮
   		sybSubmission(){
   			if(this.state==false){
   				this.sybIfshowFun()
   			}
   			if(this.syb_consultadionStyle=='3'){
   				if(this.titleT==''||this.content==''||this.abtbutton==''||this.color==''){
   					this.open("自定义内容不能为空","warning")
   					return false
   				}
   				if(this.titleT==null||this.content==null||this.abtbutton==null||this.color==null){
   					this.open("自定义内容不能为空","warning")
   					return false
   				}
   			}
   			/*---------底部样式------------*/
   			this.syb_bottomStyleSelection=this.footFrameStyle;//底部样式选择
   			console.log(this.syb_bottomStyleSelection)
			if(this.syb_bottomStyleSelection=='1'){
				this.syb_bottomStyleContent=this.footFrametext1;
				this.syb_bottomStyleImages=this.footFrameimg1;
			}else if(this.syb_bottomStyleSelection=='2'){
				this.syb_bottomStyleContent=this.footFrametext2;
				this.syb_bottomStyleImages=this.footFrameimg2;
			}else if(this.syb_bottomStyleSelection=='3'){
				this.syb_bottomStyleContent=this.footFrametext3;
				this.syb_bottomStyleImages=this.footFrameimg3;
			}else if(this.syb_bottomStyleSelection=='4'){
				this.syb_bottomStyleContent=this.footFrametext4;
				this.syb_bottomStyleImages=this.footFrameimg4;
			}else if(this.syb_bottomStyleSelection=='5'){
				this.syb_bottomStyleContent=this.footFrametext5;
				this.syb_bottomStyleImages=this.footFrameimg5;
			}
			/*---------------------*/
   			this.$xhr.post("/page/code/sybCodeUpdate",{
				c_id:this.c_id,
				network_id:this.network_id,
				syb_id:this.syb_id,
				qq:this.qq,
				backPhone:this.backPhone,
				wechat:this.wechat,
				syb_ifShow: this.sybIfshow,
				syb_styleNum: this.syb_styleNum,
				syb_position: this.syb_position,
				syb_consultation: this.syb_consultation,
				syb_productType: this.syb_productType,
				if_footcustomer: this.if_footcustomer,
				if_show_mb: this.if_show_mb,
				domainIds:this.domainIds,
				syb_consultadionStyle:this.syb_consultadionStyle,
				syb_consultadionTitle:this.titleT,
				syb_consultadionContent:this.content,
				syb_consultadionButton:this.abtbutton,
				syb_consultadionColour :this.color,
				syb_bottomStyle:JSON.stringify(this.syb_bottomStyle),//底部是否显示
				syb_bottomStyleContent:JSON.stringify(this.syb_bottomStyleContent),//底部文字
				syb_bottomStyleImages:this.syb_bottomStyleImages,//底部图片
				syb_bottomStyleSelection:this.syb_bottomStyleSelection,//底部样式选择
		  	}).then((res)=>{
		  		this.state=false
		  		this.stateT=false
		  		this.dialogVisible = false
   				this.$emit('customerS',this.dialogVisible)
			}).catch((res)=>{
				console.log(res)
				this.stateT=false
				this.dialogVisible = false
   				this.$emit('customerS',this.dialogVisible)
			})
   		},
   		DomainNames(){
   			this.$xhr.get("/page/findDomainNames").then((res)=>{
				for(var i in res.data){
					this.findDomainNamesArr.push({
						id:res.data[i].id,
						source:res.data[i].source
					})
				}
			})
 			
   		},
   		
   		//底部图片1
   		footFrameImg1(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.footFrameimg1=str
	    	})
	    	files.value=''
	    },
	    //底部图片2
   		footFrameImg2(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.footFrameimg2=str
	    	})
	    	files.value=''
	    },
	    //底部图片3
   		footFrameImg3(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.footFrameimg3=str
	    	})
	    	files.value=''
	    },
	    //底部图片4
   		footFrameImg4(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.footFrameimg4=str
	    	})
	    	files.value=''
	    },
	    //底部图片5
   		footFrameImg5(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.footFrameimg5=str
	    	})
	    	files.value=''
	    },
	    //底部图片6
   		footFrameImg6(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.footFrameimg6=str
	    	})
	    	files.value=''
	    },	    
   		//上传图片
   		imagew(files){
	    	var _this=this
	    	this.dataImg(_this,files,function(str){
	    		console.log(str)
	    		_this.wechat=str
	    	})
	    	files.value=''
	    },
	  	dataImg(_this,input_file, get_data){
	        if (typeof (FileReader) === 'undefined') {  
	              alert("抱歉，你的浏览器版本太陈旧，请使用现代浏览器操作！");  
	        } else {  
	        try {  
	 			var formData = new FormData();
				var file = input_file.files[0];
		        formData.append("file",file);
		        if(parseInt(file.size/1024)>300){
		        	alert("图片不能大于300kb")
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
		        /**发送Ajax请求*/
		        	$.ajax({
                		type:"post",
                		url:_this.$store.state.ip+"/file/saveADImage",
                		data: formData,
             			dataType : "json",
             			async: false,
            		    contentType: false,
            		    processData: false,
						success:function(str){
            			  get_data(str.data);
						},error:function(){}
				    });
	              }
	              image.src= this.result;
	            }  
	            reader.readAsDataURL(file);  
	            } catch (e) {  
	            }
	        }					
		},
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
	.el-dialog__footer{text-align: center;}
	.customBox_list {
	    width: 300px;
	    height: 180px;
	    background: #327bfd;
	    position: relative;
	    color: #fff;
	    box-shadow: 0 0 10px 1px #ccc;
	    top: -20px;
	}
	.customBox_list .clearA {
	    float: right;
	    padding: 10px;
	}
	 .customBox_list h1 {
    width: 100%;
    text-align: center;
    padding-top: 30px;
    padding-left: 30px;
    font-size: 20px;
    font-weight: 600;
}
 .customBox_list p {
    text-align: center;
    padding-top: 10px;
    padding-right: 12px;
}
 .customBox_list .customBox_listBottom {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    background: #fff;
    text-align: center;
}
.customBox_list .customBox_listBottom a {
    display: block;
    float: left;
    width: 50%;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    color: #327bfd;
}
.customBox_list .customBox_listBottom a img {
    position: relative;
    top: 5px;
}
.cusForm .el-form-item {
     margin-bottom: 5px; 
}
/*---------------------------*/
.footPage1 *{margin: 0;padding: 0;}
.footPage1{
	width: 950px;
	height: 100px;
	margin: auto;
	position: relative;
}
.footPage1_bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.footPage1_txt{
	position: absolute;
	width: 80%;
	height: 70%;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	border: 2px solid #fff;
	padding: 5px 20px;
	
}
.footPage1_txtIcon{
	display: inline-block;
	padding-right: 10px;
	border-right: 1px dotted #fff;
	float: left;
}
.footPage1_txth1{
	float: left;
	color: #fff;
	padding-left: 15px;
}
.footPage1_txth1 p{
	color: #327cfc;
}
.footPage1_txth1 h3{
	font-weight: 600;
}
.footPage1_txtabt{
	float: right;
	display: inline-block;
	padding: 10px 20px;
	background:#327cfc ;
	color: #fff;
	text-decoration: none;
	margin-top: 8px;
	border-radius: 2000px;
}
.footPage .el-form-item {
    margin-bottom: 5px;
}
.demo-form-inline .el-form-item {
    margin-bottom: 5px;
    margin-top: 5px;
}
/*===================================*/
/*===================================*/
.footPage2 *{margin: 0;padding: 0;}
.footPage2{
	width: 950px;
	height: 100px;
	margin: auto;
	position: relative;
}
.footPage2_bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.footPage2_txt{
	position: absolute;
	width: 80%;
	height: 70%;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 5px 0px;
	color: #fff;
	float: left;
}
.maxWord{
	float: left;
	font-size: 58px;
	padding-right: 10px;
	border-right: 1px solid #fff;
	display: inline-block;
}
.footPage2_txtH1P{
	padding-left: 10px;
	float: left;
}
.footPage2_txtH1P p{
	font-size: 12px;
}
.footPage2_input{
	float: right;
	display: flex;
	align-items: center;
	padding-top: 10px;
}
.footPage2_input input{
	width: 200px;
	height: 40px;
	box-shadow: 0 0 20px 1px #eee;
	border: none;
	text-indent: 1em;
	outline: none;
}
.footPage2_input label{
	display: inline-block;
	height: 40px;
	width: 40px;
	background: #fe0100;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
/*===================================*/
.footPage3 *{margin: 0;padding: 0;}
.footPage3{
	width: 950px;
	height: 100px;
	margin: auto;
	position: relative;
}
.footPage3_bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.footPage3_txt{
	position: absolute;
	width: 100%;
	height: 100%;
	padding-top: 40px;
	padding-left: 300px;
}
.footPage3_txt h3{
	color: red;
	font-weight: bold;
	font-size: 20px;
	-webkit-text-stroke: 1px #fff;
}
.footPage3_input li{
	list-style: none;
	float: left;
	height: 28px;
	background: #fff;
	display: flex;
	margin-top: 2px;
	align-items: center;
	justify-content: space-between;
	box-shadow: 3px 0 10px 0px #8c7e7e;
}
.footPage3_input li input{
	border: none;
	height: 100%;
	outline: none;
	text-indent: 1em;
}
.footPage3_input li img{
	position: relative;
	top: 2px;
}
/*====================================*/
.footPage4 *{margin: 0;padding: 0;}
.footPage4{
	width: 950px;
	height: 100px;
	margin: auto;
	position: relative;
}
.footPage4_bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.footPage4_txt{
	position: absolute;
	width: 80%;
	height: 70%;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 5px 0px;
	color: #fff;
}
.footPage4_txtLeft{
	width: 300px;
	height: 100%;
	text-align: center;
	float: left;
}
.footPage4_txtLeft h3{
	font-size: 24px;
}
.footPage4_txtLeft p{
	font-size: 12px;
}
.footPage4_txtRight{
	height: 40px;
	width: 300px;
	background: #fff;
	border-radius: 2000px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 0 20px;
}
.footPage4_txtRight>a{
	height: 100%;
	width: 150px;
	border-top-right-radius: 2000px;
	border-bottom-right-radius: 2000px;
	background: #0044a4;
	color: #Fff;
	text-decoration: none;
	text-align: center;
	line-height: 40px;
	margin-right: -2px;
}
.footPage4_txtRight>input{
	height: 100%;
	width: 160px;
	border: none;
	outline: none;
	text-indent: 1em;
	
}
/*================================*/
.footPage5 *{margin: 0;padding: 0;}
.footPage5{
	width: 950px;
	height: 100px;
	margin: auto;
	position: relative;
}
.footPage5_bg{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.footPage5_txt ul{
	list-style: none;
}
.footPage5_txt{
	position: absolute;
	width: 80%;
	height: 80%;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 5px 0px;
}
.footPage5_txt h3{
	color: #c7010d;
}
.footPage5_txt p{
	font-size: 12px;
	padding: 5px 0;
}
.footPage5_txt ul li{
	float: left;
	height:30px ;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;	
	box-shadow: 0 0 10px 2px #eee;
	margin: 0 2px;
}
.footPage5_txt ul li input{
	border: none;
	height: 100%;
	outline: none;
	text-indent: 1em;
}
.abtColor a{
	padding: 5px 10px !important;
	color: #fff;
	background: #fe0100;
	text-decoration: none;
}
/*--------------------------------*/
.footPage6 *{margin: 0;padding: 0;}
.footPage6{
	width: 950px;
	height: 100px;
	margin: auto;
	overflow: hidden;
	position: relative;
}
.footPage6_bg{
	position: absolute;
	top: -100px;
	left: 0;
	width: 100%;
	height: 200%;
}
.footPage6_txt{
	position: absolute;
	width: 80%;
	height: 80%;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: 15px 0px;
	padding-left: 160px;
	color: #fff;
}
.footPage6_txtL{
	float: left;
	width: 200px;
	text-align: center;
	padding-top: 5px;
}
.footPage6_txtR{
	float: right;
	padding-top: 20px;
	display: flex;
}
.footPage6_txtR input{
	border: none;
	height: 38px;
	text-indent: 1em;
}
.footPage6_txtR a{
	padding: 8px 15px;
	color: #fff;
	text-decoration: none;
	background: #218df2;
}

</style>