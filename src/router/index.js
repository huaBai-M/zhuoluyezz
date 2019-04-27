import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index.js';
import home from '@/components/home'
//主页
import homeRankings from '@/components/home/homeRankings'
import flowTop from '@/components/home/flowTop'
import ztcTop from '@/components/home/ztcTop'
import allmonth from '@/components/home/allmonth'
import allNew from '@/components/home/allNew'
import topTotal from '@/components/home/topTotal'
import historyTop from '@/components/home/historyTop' 
import conversionMonth from '@/components/home/conversionMonth' 
import conversionHistory from '@/components/home/conversionHistory' 
import findSjPages from '@/components/home/findSjPages' 
import HistorySjPages from '@/components/home/HistorySjPages' 
//流量宝
import flow from '@/components/flowTreasure/flow'
import flowMaintain from '@/components/flowTreasure/flowMaintain'
import allFlowMaintain from '@/components/flowTreasure/allFlowMaintain'
//直通车
import ztc from '@/components/zhitongche/ztc'
import ztcMaintain from '@/components/zhitongche/ztcMaintain'
import allZtcMaintain from '@/components/zhitongche/allZtcMaintain'
//b2b
import btb from '@/components/b2b/btb'
import btbMake from '@/components/b2b/btbMake'
//流量宝模板页面
import flowpageSel from '@/components/templateSelection/flowTem/pageSel'
import operation1 from '@/components/templateSelection/flowTem/template1/operation'
import operationM1 from '@/components/templateSelection/flowTem/template1/operationM'
import preview1 from '@/components/templateSelection/flowTem/template1/preview'
import operation2 from '@/components/templateSelection/flowTem/template2/operation'
import preview2 from '@/components/templateSelection/flowTem/template2/preview'
import operation3 from '@/components/templateSelection/flowTem/template3/operation'
import preview3 from '@/components/templateSelection/flowTem/template3/preview'
import operation4 from '@/components/templateSelection/flowTem/template4/operation'
import preview4 from '@/components/templateSelection/flowTem/template4/preview'
import operation5 from '@/components/templateSelection/flowTem/template5/operation'
import preview5 from '@/components/templateSelection/flowTem/template5/preview'
import operation6 from '@/components/templateSelection/flowTem/template6/operation'
import preview6 from '@/components/templateSelection/flowTem/template6/preview'
import operation10 from '@/components/templateSelection/flowTem/template7/operation'
import preview10 from '@/components/templateSelection/flowTem/template7/preview'
import operation8 from '@/components/templateSelection/flowTem/template8/operation'
import preview8 from '@/components/templateSelection/flowTem/template8/preview'
import operation9 from '@/components/templateSelection/flowTem/template9/operation'
import preview9 from '@/components/templateSelection/flowTem/template9/preview'
import operation11 from '@/components/templateSelection/flowTem/template11/operation'
import preview11 from '@/components/templateSelection/flowTem/template11/preview'
import operation12 from '@/components/templateSelection/flowTem/template12/operation'
import preview12 from '@/components/templateSelection/flowTem/template12/preview'
import operation13 from '@/components/templateSelection/flowTem/template13/operation'
import preview13 from '@/components/templateSelection/flowTem/template13/preview'
import operation14 from '@/components/templateSelection/flowTem/template14/operation'
import preview14 from '@/components/templateSelection/flowTem/template14/preview'
import operation15 from '@/components/templateSelection/flowTem/template15/operation'
import preview15 from '@/components/templateSelection/flowTem/template15/preview'
import operation16 from '@/components/templateSelection/flowTem/template16/operation'
import preview16 from '@/components/templateSelection/flowTem/template16/preview'
import operation17 from '@/components/templateSelection/flowTem/template17/operation'
import preview17 from '@/components/templateSelection/flowTem/template17/preview'
import operation18 from '@/components/templateSelection/flowTem/template18/operation'
import preview18 from '@/components/templateSelection/flowTem/template18/preview'
//直通车模板页面
import ztcpageSel from '@/components/templateSelection/ztcTem/pageSel'
import ztcoperation1 from '@/components/templateSelection/ztcTem/template1/operation'
import ztcoperationM1 from '@/components/templateSelection/ztcTem/template1/operationM'
import ztcpreview1 from '@/components/templateSelection/ztcTem/template2/preview'
import ztcoperation2 from '@/components/templateSelection/ztcTem/template2/operation'
import ztcpreview2 from '@/components/templateSelection/ztcTem/template2/preview'
import ztcoperation3 from '@/components/templateSelection/ztcTem/template3/operation'
import ztcpreview3 from '@/components/templateSelection/ztcTem/template3/preview'
import ztcoperation4 from '@/components/templateSelection/ztcTem/template4/operation'
import ztcpreview4 from '@/components/templateSelection/ztcTem/template4/preview'
import ztcoperation5 from '@/components/templateSelection/ztcTem/template5/operation'
import ztcpreview5 from '@/components/templateSelection/ztcTem/template5/preview'
import ztcoperation6 from '@/components/templateSelection/ztcTem/template6/operation'
import ztcpreview6 from '@/components/templateSelection/ztcTem/template6/preview'
import ztcoperation10 from '@/components/templateSelection/ztcTem/template7/operation'
import ztcpreview10 from '@/components/templateSelection/ztcTem/template7/preview'
import ztcoperation8 from '@/components/templateSelection/ztcTem/template8/operation'
import ztcpreview8 from '@/components/templateSelection/ztcTem/template8/preview'
import ztcoperation9 from '@/components/templateSelection/ztcTem/template9/operation'
import ztcpreview9 from '@/components/templateSelection/ztcTem/template9/preview'
import ztcoperation11 from '@/components/templateSelection/ztcTem/template11/operation'
import ztcpreview11 from '@/components/templateSelection/ztcTem/template11/preview'
import ztcoperation12 from '@/components/templateSelection/ztcTem/template12/operation'
import ztcpreview12 from '@/components/templateSelection/ztcTem/template12/preview'
import ztcoperation13 from '@/components/templateSelection/ztcTem/template13/operation'
import ztcpreview13 from '@/components/templateSelection/ztcTem/template13/preview'
import ztcoperation14 from '@/components/templateSelection/ztcTem/template14/operation'
import ztcpreview14 from '@/components/templateSelection/ztcTem/template14/preview'
import ztcoperation15 from '@/components/templateSelection/ztcTem/template15/operation'
import ztcpreview15 from '@/components/templateSelection/ztcTem/template15/preview'
import ztcoperation16 from '@/components/templateSelection/ztcTem/template16/operation'
import ztcpreview16 from '@/components/templateSelection/ztcTem/template16/preview'
import ztcoperation17 from '@/components/templateSelection/ztcTem/template17/operation'
import ztcpreview17 from '@/components/templateSelection/ztcTem/template17/preview'
import ztcoperation18 from '@/components/templateSelection/ztcTem/template18/operation'
import ztcpreview18 from '@/components/templateSelection/ztcTem/template18/preview'


//智能名片

import homeCard from '@/components/smartCard/homeCard'//主页
import maintain from '@/components/smartCard/maintain/maintain'//详情页
import cardSel from '@/components/smartCard/smartCardTemplate/cardSel'//选择模板页

//智能名片模板
import cardPage1 from '@/components/smartCard/smartCardTemplate/templateCard1/cardPage'//模板1

//智能名片结束
Vue.use(Router)

const router = new Router({
  routes: [
        {
		      path: '/',
		      name: 'home',
		      component: home,
		      children:[
			        { 
			        	path: '/home/homeRankings', component: homeRankings,name: 'homeRankings',
			        	children:[
			        		{path: '/home/flowTop', component: flowTop,name: 'flowTop'},
			        		{path: '/home/ztcTop', component: ztcTop,name: 'ztcTop'}
			        	],redirect:'/home/flowTop'
			        },
			        //智能名片
			        { path: '/home/homeCard', component: homeCard,name: 'homeCard'},
			        { path: '/home/maintain', component: maintain,name: 'maintain'},
			        { path: '/home/cardSel', component: cardSel,name: 'cardSel'},
			        
			        
			        //智能名片结束
			        { path: '/home/allmonth', component: allmonth,name: 'allmonth'},
			        { path: '/home/conversionMonth', component: conversionMonth,name: 'conversionMonth'},
			        { path: '/home/conversionHistory', component: conversionHistory,name: 'conversionHistory'},
			        {	path: '/home/allNew', component: allNew,name: 'allNew'},
			        {	path: '/home/historyTop', component: historyTop,name: 'historyTop'},
			        {	path: '/home/topTotal', component: topTotal,name: 'topTotal'},
			        
			        { path: '/home/flow', component: flow,name: 'flow'},
			        { path: '/home/flowMaintain', component: flowMaintain,name: 'flowMaintain'},
			        { path: '/home/allFlowMaintain', component: allFlowMaintain,name: 'allFlowMaintain'},
			        { path: '/home/ztc', component: ztc,name: 'ztc'},
			        { path: '/home/ztcMaintain', component: ztcMaintain,name: 'ztcMaintain'},
			        { path: '/home/allZtcMaintain', component: allZtcMaintain,name: 'allZtcMaintain'},
			        { path: '/home/btb', component: btb,name: 'btb'},
			        { path: '/home/btbMake', component: btbMake,name: 'btbMake'},
			        { path: '/home/flowpageSel', component: flowpageSel,name: 'flowpageSel'},
			        { path: '/home/findSjPages', component: findSjPages,name: 'findSjPages'},
			        { path: '/home/HistorySjPages', component: HistorySjPages,name: 'HistorySjPages'},
			        //流量宝模板
			        { path: '/home/operation1', component: operation1,name: 'operation1'},
			        { path: '/home/preview1', component: preview1,name: 'preview1'},
			        { path: '/home/operationM1', component: operationM1,name: 'operationM1'},
			        //2
			        { path: '/home/operation2', component: operation2,name: 'operation2'},
			        { path: '/home/preview2', component: preview2,name: 'preview2'},
			        //3
			        { path: '/home/operation3', component: operation3,name: 'operation3'},
			        { path: '/home/preview3', component: preview3,name: 'preview3'},
			        //4
			        { path: '/home/operation4', component: operation4,name: 'operation4'},
			        { path: '/home/preview4', component: preview4,name: 'preview4'},
			        //5
			        { path: '/home/operation5', component: operation5,name: 'operation5'},
			        { path: '/home/preview5', component: preview5,name: 'preview5'},
			        //6
			        { path: '/home/operation6', component: operation6,name: 'operation6'},
			        { path: '/home/preview6', component: preview6,name: 'preview6'},
			        //10
			        { path: '/home/operation10', component: operation10,name: 'operation10'},
			        { path: '/home/preview10', component: preview10,name: 'preview10'},
			        //8
			        { path: '/home/operation8', component: operation8,name: 'operation8'},
			        { path: '/home/preview8', component: preview8,name: 'preview8'},
			        //9
			        { path: '/home/operation9', component: operation9,name: 'operation9'},
			        { path: '/home/preview9', component: preview9,name: 'preview9'},
			        //11
			        { path: '/home/operation11', component: operation11,name: 'operation11'},
			        { path: '/home/preview11', component: preview11,name: 'preview11'},
			        //12
			        { path: '/home/operation12', component: operation12,name: 'operation12'},
			        { path: '/home/preview12', component: preview12,name: 'preview12'},
			        //13
			        { path: '/home/operation13', component: operation13,name: 'operation13'},
			        { path: '/home/preview13', component: preview13,name: 'preview13'},
			        //14
			        { path: '/home/operation14', component: operation14,name: 'operation14'},
			        { path: '/home/preview14', component: preview14,name: 'preview14'},
			        //15
			        { path: '/home/operation15', component: operation15,name: 'operation15'},
			        { path: '/home/preview15', component: preview15,name: 'preview15'},
			        //16
			        { path: '/home/operation16', component: operation16,name: 'operation16'},
			        { path: '/home/preview16', component: preview16,name: 'preview16'},
			        //17
			        { path: '/home/operation17', component: operation17,name: 'operation17'},
			        { path: '/home/preview17', component: preview17,name: 'preview17'},
			        //18
			        { path: '/home/operation18', component: operation18,name: 'operation18'},
			        { path: '/home/preview18', component: preview18,name: 'preview18'},
			        //直通车模板
			        { path: '/home/ztcpageSel', component: ztcpageSel,name: 'ztcpageSel'},
			        { path: '/home/ztcoperation1', component: ztcoperation1,name: 'ztcoperation1'},
			        //1
			        { path: '/home/ztcpreview1', component: ztcpreview1,name: 'ztcpreview1'},
			        { path: '/home/ztcoperationM1', component: ztcoperationM1,name: 'ztcoperationM1'},
			        //2
			        { path: '/home/ztcoperation2', component: ztcoperation2,name: 'ztcoperation2'},
			        { path: '/home/ztcpreview2', component: ztcpreview1,name: 'ztcpreview2'},
			        //3
			        { path: '/home/ztcoperation3', component: ztcoperation3,name: 'ztcoperation3'},
			        { path: '/home/ztcpreview3', component: ztcpreview3,name: 'ztcpreview3'},
			        //4
			        { path: '/home/ztcoperation4', component: ztcoperation4,name: 'ztcoperation4'},
			        { path: '/home/ztcpreview4', component: ztcpreview4,name: 'ztcpreview4'},
			        //5
			        { path: '/home/ztcoperation5', component: ztcoperation5,name: 'ztcoperation5'},
			        { path: '/home/ztcpreview5', component: ztcpreview5,name: 'ztcpreview5'},
			        //6
			        { path: '/home/ztcoperation6', component: ztcoperation6,name: 'ztcoperation6'},
			        { path: '/home/ztcpreview6', component: ztcpreview6,name: 'ztcpreview6'},
			         //10
			        { path: '/home/ztcoperation10', component: ztcoperation10,name: 'ztcoperation10'},
			        { path: '/home/ztcpreview10', component: ztcpreview10,name: 'ztcpreview10'},
			         //8
			        { path: '/home/ztcoperation8', component: ztcoperation8,name: 'ztcoperation8'},
			        { path: '/home/ztcpreview8', component: ztcpreview8,name: 'ztcpreview8'},
			         //9
			        { path: '/home/ztcoperation9', component: ztcoperation9,name: 'ztcoperation9'},
			        { path: '/home/ztcpreview9', component: ztcpreview9,name: 'ztcpreview9'},
			         //11
			        { path: '/home/ztcoperation11', component: ztcoperation11,name: 'ztcoperation11'},
			        { path: '/home/ztcpreview11', component: ztcpreview11,name: 'ztcpreview11'},
			         //12
			        { path: '/home/ztcoperation12', component: ztcoperation12,name: 'ztcoperation12'},
			        { path: '/home/ztcpreview12', component: ztcpreview12,name: 'ztcpreview12'},
			        //13
			        { path: '/home/ztcoperation13', component: ztcoperation13,name: 'ztcoperation13'},
			        { path: '/home/ztcpreview13', component: ztcpreview13,name: 'ztcpreview13'},
			        //14
			        { path: '/home/ztcoperation14', component: ztcoperation14,name: 'ztcoperation14'},
			        { path: '/home/ztcpreview14', component: ztcpreview14,name: 'ztcpreview14'},
			        //15
			        { path: '/home/ztcoperation15', component: ztcoperation15,name: 'ztcoperation15'},
			        { path: '/home/ztcpreview15', component: ztcpreview15,name: 'ztcpreview15'},
			        //16
			        { path: '/home/ztcoperation16', component: ztcoperation16,name: 'ztcoperation16'},
			        { path: '/home/ztcpreview16', component: ztcpreview16,name: 'ztcpreview16'},
			        //16
			        { path: '/home/ztcoperation17', component: ztcoperation17,name: 'ztcoperation17'},
			        { path: '/home/ztcpreview17', component: ztcpreview17,name: 'ztcpreview17'},
			        //18
			        { path: '/home/ztcoperation18', component: ztcoperation18,name: 'ztcoperation18'},
			        { path: '/home/ztcpreview18', component: ztcpreview18,name: 'ztcpreview18'},
			    ],redirect:'/home/homeRankings'
		    },
		    //智能名片模板
			  { path: '/cardPage1', component: cardPage1,name: 'cardPage1'},
			  {
		      path: '**',   // 错误路由
		      redirect: '/'   //重定向
		    },
			  //智能名片模板结束
  ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
//console.log(store.state.loginData)
//console.log(to);
//console.log(from);
	next()
});
export default router;