// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'
//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//xhr
import {xhr} from '@/assets/js/api'
Vue.prototype.$xhr = xhr

//yhr
import {yhr} from '@/assets/js/apiT'
Vue.prototype.$yhr = yhr

//VueCropper
import VueCropper from 'vue-cropper' 
Vue.use(VueCropper)

//VueQuillEditor
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)
//js
import'./assets/js/jquery.min.js'
import'./assets/js/jquery.cookie.js'
import'./assets/js/html2canvas.js'
import'./assets/js/ckeditor.js'
//css
import'./assets/css/bootstrap/dist/css/bootstrap.min.css'
import'./assets/css/font-icons/iconfont.css'
import'./assets/css/font-icons/iconfont14.css'
import'./assets/css/index.css'
import'./assets/css/animate.min.css'
Vue.config.productionTip = false

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
//全局变量
import {TIMEOUT, ERR_OK, baseURL, STATUS} from '@/assets/js/config'
Vue.prototype.baseURL = baseURL;
//全局函数
Vue.prototype.upfileVidel=function(input_file,_this,get_data){
	console.log(input_file)
	 	var formData = new FormData();
		var file = input_file.files[0];
		formData.append("file",file);
	    if(parseInt(file.size/1024)>20480){
	    	_this.$message({
          duration:1000,
          message:"图片不能大于20M",
          type: "warning"
        });
	    	input_file.value=''
	    	return false;  
	    }
	    $.ajax({
    		type:"post",
    		url:_this.$store.state.ip+"/file/saveVideo",
    		data: formData,
			dataType : "json",
			async: false,
    		contentType: false,
    		processData: false,
    		success:function(str){
    			get_data(str.data);
    			//保存上传的图片
    			_this.$message({
		          duration:1000,
		          message:"上传成功",
		          type: "success"
		        });
    		},error:function(err){
    			_this.$message({
		          duration:1000,
		          message:"出错啦",
		          type: "error"
		        });
    		}
    	});
		}
Vue.prototype.baseURL = baseURL.dev;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
