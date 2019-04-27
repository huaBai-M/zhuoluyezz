import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const cardData={};//智能名片信息




const state ={
//	ip:"http://192.168.1.127:8081",
ip:"http://192.168.1.131:8083",
	// ip:"",
	pageId:null,
	moduleType:0,
	slider:false,
	loginData:{},
	pageDate:{},
	cardDetailedDate:{},
	cardWebsite:{//公司信息
		companyLogo:null,//公司logo
		companyLocation:null,//公司地址
		description:null,//公司简介
		displayImgs:null,//公司简介图片
		companyInfoid:null,
	},
	cardEmployee:{//用户名片信息
		telphone:"",//电话
		name:"",//姓名
		email:"",//邮箱
		wechat:"",//微信
		banner:[],//轮播图
		employeeInfoid:null
	},
	productList:{},//产品列表
	HotproductList:[],//推荐产品列表
	HotproductArr:[],//推荐产品列表id
	videoList:[],
	cardState:{
		show:false,
		cardpreview:false
	},//名片的一些全局状态
}
//  this.$store.state.ip
export default new Vuex.Store({
	state:state,
	cardData,
});