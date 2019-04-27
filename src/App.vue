<template>
  <div id="app">
    <router-view/>
    <el-dialog
			  title="提示"
			  :visible.sync="dialogVisible"
			  width="30%"
			  >
			  <span>检查到您的浏览器是IE内核，继续使用可能会影响您的用户体验</span>
			  <p>如果您使用的是360、QQ、百度等国内浏览器，请切换为急速模式</p>
			  <p><img src="@/assets/img/360.png" width="100%"/></p>
			  <span slot="footer" class="dialog-footer">
			    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
			  </span>
			</el-dialog>
  </div>
</template>

<script>
export default {
	name:"app",
	data () {
		return{
			dialogVisible:false
		}
	},
	computed: {
	  
	},
	watch: {  
	   
	},
	created(){
		if(this.IEVersion()!=-1){
			this.dialogVisible=true
		}
	},
	mounted(){
		 
	},
	methods:{
		  IEVersion() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
        var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
        var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
        if(isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7) {
                return 7;
            } else if(fIEVersion == 8) {
                return 8;
            } else if(fIEVersion == 9) {
                return 9;
            } else if(fIEVersion == 10) {
                return 10;
            } else {
                return 6;//IE版本<=7
            }   
        } else if(isEdge) {
            return 'edge';//edge
        } else if(isIE11) {
            return 11; //IE11  
        }else{
            return -1;//不是ie浏览器
        }
    }
	},
}
</script>
<style>
</style>
