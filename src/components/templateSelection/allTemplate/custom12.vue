<template>
 <div id="html-content" class="module12">
   <!-- banner 开始 -->
   <div class="banner PCbanner MaskHover">
     <div class="imgBg MaskHover PimgBg">
     <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A" v-for="(item,index) in data.banner">
        <img v-bind:src="item" width="100%"  class="posiBanner"/>
        <div class="MaskBox addMas" v-if="delNode">
          <p>上传PC端banner的文件的宽为1920px</p>
          <p>
            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
              <i class="el-icon-upload"></i><span>上传PC端banner</span>
              <input type="file" v-on:change="head($refs.module12banner[index],index,1920)" ref="module12banner"/>
            </a> 
          </p>
        </div>
      </a>
    </div>
    <!-- 移动banner -->
    <div class="imgBg MaskHover MimgBg">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A" v-for="(item,index) in data.Mbanner">
        <img v-bind:src="item" width="100%"  class="posiBanner posiMBanner"/>
      
      <div class="MaskBox addMas addMMas" v-if="delNode">
          <p>上传移动端banner的文件的宽为750px</p>
          <p>
            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
              <i class="el-icon-upload"></i><span>上传移动端banner</span>
              <input type="file" v-on:change="Mhead($refs.module12Mbanner[index],index,750)" ref="module12Mbanner"/>
            </a> 
          </p>
        </div>
     </a>
     </div>
      <div class="container content">
          <div class="relaCont">
             <div class="title">
               <ul>
                 <li v-for="(item,index) in data.bannerTitle">
                  <i>*</i><span v-if="!delNode">{{item}}</span>
                  <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle[index]"/>
                 </li>
              </ul>
            </div>
          <div class="title1">
            <span v-if="!delNode">{{data.bannerTitle1}}</span>
            <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle1"/>
          </div>
          <div class="title2">
           <ul>
             <li v-for="(item,index) in data.bannerTitle2">
              <span v-if="!delNode">{{item}}</span>
              <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle2[index]" maxlength="4" />
             </li>
          </ul>
        </div>
        <div class="title3">
          <span v-if="!delNode">{{data.bannerTitle3}}</span>
          <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle3"/>
        </div>
        <div class="btn">
         <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
          <span v-if="!delNode">{{data.btnBanner}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btnBanner"/>
         </a>
       </div>
    </div>
  </div>

</div>
<!-- banner 结束 -->
  <!-- 急你所需，针对不同程度满足人群需求 -->
  <div class="need comT">
   <div class="container">
     <!-- 标题 -->
     <div class="titleT">
       <div class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.needTitle1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.needTitle1"/>
       </div>
       <div class="t_text2 hidden-sm hidden-xs" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.needTitle2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.needTitle2"/>
         <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.needBtn}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.needBtn"/>
         </a>
       </div>
     </div>
     <div class="needLists addMLists">
       <ul data-scroll-reveal="enter bottom over 1s">
         <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <li v-for="(item,index) in data.needList">
             <div class="needL">
               <span v-if="!delNode">{{item.need1}}</span>
               <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.needList[index].need1"/>
             </div>
             <div class="btn1">
               <span v-if="!delNode">{{item.btn1}}</span>
               <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.needList[index].btn1"/>
             </div>
          </li>
         </a>
       </ul>
     </div>
    <div class="btns">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.needBtn2}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.needBtn2"/>
        </a>
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.needBtn3}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.needBtn3"/>
        </a>
    </div>

   </div>
 </div>
 <!-- 大数据全栈工程师 -->
 <div class="highMoney comT">
   <div class="container">
     <div class="titleT">
       <div class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.highTitle1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.highTitle1"/>
       </div>
       <div class="t_text2 hidden-xs hidden-sm" data-scroll-reveal="enter bottom over 0.5s and move 300px after 0.1s">
         <span v-if="!delNode">{{data.highTitle2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.highTitle2"/>
       </div>
     </div>
     <div class="tableStep" data-scroll-reveal="enter bottom over 0.5s and move 300px">
       <table border="0" cellspacing="0" cellpadding="0" class="hidden-xs hidden-sm">
          <thead>
           <tr class="hidden-xs hidden-sm">
            <th v-for="(item,index) in data.th">
              <span v-if="!delNode">{{ item }}</span>
              <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.th[index]"/>
            </th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in data.stepTable">
              <td>
                <span v-if="!delNode">{{ item.td1 }}</span>
                <textarea class="INputAll" v-if="delNode" style="display:inline-block;" v-model="data.stepTable[index].td1"/></textarea>
              </td>
              <td>
                <span v-if="!delNode">{{ item.td2 }}</span>
                <textarea class="INputAll" v-if="delNode" style="display:inline-block;" v-model="data.stepTable[index].td2"/></textarea>
              </td>
              <td>
                <span v-if="!delNode">{{ item.td3 }}</span>
                <textarea class="INputAll"  v-if="delNode" style="display:inline-block;" v-model="data.stepTable[index].td3"/></textarea>
              </td>
              <td>
                <span v-if="!delNode">{{ item.td4 }}</span>
                <textarea class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.stepTable[index].td4"/></textarea>
              </td>
              <td>
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                  <span v-if="!delNode">{{ item.td5[0] }}</span>
                  <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.stepTable[index].td5[0]"/>
                </a>
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                  <span v-if="!delNode">{{ item.td5[1] }}</span>
                  <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.stepTable[index].td5[1]"/>
                </a>
              </td>
            </tr>
          </tbody>
       </table>
       <!-- 移动端step -->
       <div class="Mtable hidden-lg hidden-md">
         <ul data-scroll-reveal="enter bottom over 0.5s and move 300px">
           <li v-for="(item,index) in data.stepTable">
             <div class="Mtitle">
               <span>{{item.td1}}</span>:<span>{{item.td2}}</span>
             </div>
             <div class="Mcontent">
               <p>{{item.td3}}</p>
               <p>{{item.td4}}</p>
             </div>
           </li>
         </ul>
       </div>
     </div>
     <div class="addNode" v-if="delNode">
          <el-button type="primary" icon="el-icon-edit" @click="stepAdd">添加一行</el-button>
          <el-button type="danger" icon="el-icon-delete"  @click="stepDel">删除一行</el-button>
     </div>
   </div>
 </div>
<!-- 你挑剔讲师？我们比你更挑剔！ -->
 <div class="lector comT">
    <div class="container">
       <!-- 标题 -->
     <div class="titleT">
       <div class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.lectorTitle1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.lectorTitle1"/>
       </div>
       <div class="t_text2 hidden-xs hidden-sm" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.lectorTitle2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.lectorTitle2"/>
       </div>
     </div>

     <div class="lectorLists swiper-container" data-scroll-reveal="enter bottom over 0.5s and move 300px">
       <ul class="swiper-wrapper">
         <li v-for="(item,index) in data.lectorLists" class="swiper-slide">
           <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
              <div class="MaskHover">
                <img v-bind:src="item.img">
                <div class="MaskBox" v-if="delNode" style="height:81%;">
                      <p>上传图片的宽为380px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="lectorImg($refs.lectormol12[index],index,380)" ref="lectormol12"/>
                        </a>
                        <el-button type="danger" icon="el-icon-delete"  @click="lectorDel(index)">删除</el-button>
                      </p>
                    </div>  
              </div>
              <div class="bottomCase">
                <div class="name">
                  <span v-if="!delNode">{{item.name}}</span>
                  <input class="INputAll" type="text" v-if="delNode" v-model="data.lectorLists[index].name"/>
                </div>
                <div class="remark">
                  <span v-if="!delNode">{{item.remark}}</span>
                  <input class="INputAll" type="text" v-if="delNode" v-model="data.lectorLists[index].remark"/>
                </div>
              </div>
             </a>
         </li>
       </ul>
        <div class="addNode" v-if="delNode">
              <el-button type="primary" icon="el-icon-edit" @click="lectorAdd">添加一块</el-button>
        </div>
     </div>
     <div class="btns">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.lectorBtn1}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.lectorBtn1"/>
        </a>
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.lectorBtn2}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.lectorBtn2"/>
        </a>
     </div>
    </div>
 </div>
<!-- 学大数据，带给你的不只是高薪！ -->
<div class="study comT">
  <div class="container">
     <!-- 标题 -->
     <div class="titleT">
       <div class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.studyTitle1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.studyTitle1"/>
       </div>
       <div class="t_text2 hidden-xs hidden-sm" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.studyTitle2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.studyTitle2"/>
         <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.studyBtn}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.studyBtn"/>
         </a>
       </div>
     </div>

     <div class="tableGoods" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <div class="topTable row">
           <div class="col-lg-3 col-md-3" v-for="(item,index) in data.swiperTop">
             <span v-if="!delNode">{{item}}</span>
             <input class="INputAll" type="text" v-if="delNode" v-model="data.swiperTop[index]"/>
           </div>
        </div>
         <div class="midTable txtMarquee-top">
         <div class="bd">
            <ul class="headUl clearfix">
                <li v-for="(item,index) in data.studyTh">
                  <span v-if="!delNode">{{item}}</span>
                  <input class="INputAll" type="text" v-if="delNode" v-model="data.studyTh[index]"/>
                </li>
            </ul>
           
            <ul class="midUl clearfix">
              <li v-for="(item,index) in data.goodsTable" class="clearfix">
                <div>
                  <span v-if="!delNode">{{ item.td1 }}</span>
                  <input class="INputAll" v-if="delNode" style="display:inline-block;" v-model="data.goodsTable[index].td1"/>
                </div>
                <div>
                  <span v-if="!delNode">{{ item.td2 }}</span>
                  <input class="INputAll" v-if="delNode" style="display:inline-block;" v-model="data.goodsTable[index].td2"/>
                </div>
                <div>
                  <span v-if="!delNode">{{ item.td3 }}</span>
                  <input class="INputAll"  v-if="delNode" style="display:inline-block;" v-model="data.goodsTable[index].td3"/>
                </div>
                <div class="hidden-xs hidden-sm">
                  <span v-if="!delNode">{{ item.td4 }}</span>
                  <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goodsTable[index].td4"/>
                </div>
                <div class="hidden-xs hidden-sm">
                  <span v-if="!delNode">{{ item.td5 }}</span>
                  <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goodsTable[index].td5"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    <div class="addNode" v-if="delNode">
          <el-button type="primary" icon="el-icon-edit" @click="goodsAdd">添加一行</el-button>
          <el-button type="danger" icon="el-icon-delete"  @click="goodsDel">删除一行</el-button>
     </div>
    <div class="btns">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.goodsBtn1}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goodsBtn1"/>
        </a>
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.goodsBtn2}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goodsBtn2"/>
        </a>
     </div>
     </div>
     
  </div>

  <!-- 多种优惠政策供你选择！ -->
<!-- 多种优惠政策供你选择！   -->
<div class="favourable comT">
    <div class="container">
      <!-- 标题 -->
     <div class="titleT">
       <div class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.favorTitle1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.favorTitle1"/>
       </div>
       <div class="t_text2 hidden-sm hidden-xs" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.favorTitle2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.favorTitle2"/>
       </div>
     </div>
     <div class="needLists favorLists">
       <ul data-scroll-reveal="enter bottom over 1s">
         <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <li v-for="(item,index) in data.favorList">
             <div class="needL favor1 MaskHover">
               <img v-bind:src="item.src">
               <div class="MaskBox" v-if="delNode" style="height:195%;">
                      <p>上传图片的宽为65px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="favorIcon($refs.favorIconmol12[index],index,65)" ref="favorIconmol12"/>
                        </a>
                      </p>
                </div>  
             </div>

             <div class="btn1 favor2">
               <span v-if="!delNode">{{item.favor}}</span>
               <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.favorList[index].favor"/>
             </div>
          </li>
         </a>
       </ul>
     </div>
    </div>
    <div class="btns">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.favorBtn1}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.favorBtn1"/>
        </a>
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{data.favorBtn2}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.favorBtn2"/>
        </a>
     </div>
</div>

<!-- 你的明天会比他们更美好 -->
<div class="fine comT">
   <div class="container">
     <!-- 标题 -->
     <div class="titleT">
      <div class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.fineTitle1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.fineTitle1"/>
       </div>
       <div class="t_text2 hidden-xs hidden-sm" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.fineTitle2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.fineTitle2"/>
       </div>
     </div>


     <div class="views" data-scroll-reveal="enter bottom over 0.5s and move 300px">
       <div class="content clearfix">

             <ul class="left">
               <li class="MaskHover" v-for="(item,index) in data.view1">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为295px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view1($refs.view1Mol12[index],index,295)" ref="view1Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
               <li class="MaskHover" v-for="(item,index) in data.view6">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为295px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view2($refs.view2Mol12[index],index,295)" ref="view2Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
             </ul>
             <ul class="middle">
               <li class="MaskHover" v-for="(item,index) in data.view2">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为290px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view3($refs.view3Mol12[index],index,290)" ref="view3Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
               <li class="MaskHover" v-for="(item,index) in data.view4">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为290px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view4($refs.view4Mol12[index],index,290)" ref="view4Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
               <li class="MaskHover" v-for="(item,index) in data.view7">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为290px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view5($refs.view5Mol12[index],index,290)" ref="view5Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
             </ul>   
             <ul class="right hidden-xs hidden-sm">
               <li class="MaskHover" v-for="(item,index) in data.view3">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为470px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view6($refs.view6Mol12[index],index,470)" ref="view6Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
               <li class="MaskHover" v-for="(item,index) in data.view5">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为470px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view7($refs.view7Mol12[index],index,470)" ref="view7Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
               <li class="MaskHover" v-for="(item,index) in data.view8">
                 <img v-bind:src="item">
                 <div class="MaskBox" v-if="delNode">
                      <p>上传图片的宽为470px</p>
                      <p>
                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                          <i class="el-icon-upload"></i><span>上传</span>
                          <input type="file" @change="view8($refs.view8Mol12[index],index,470)" ref="view8Mol12"/>
                        </a>
                      </p>
                </div>  
               </li>
             </ul>        
         </div>
       </div>
     </div>
</div>

<div class="bottomD">
  <div class="container">
    <div class="top clearfix">
      <div class="left MaskHover" v-for="(item,index) in data.botImg" data-scroll-reveal="enter left over 0.5s and move 300px">
      <img v-bind:src="item">
      <div class="MaskBox" v-if="delNode">
            <p>上传图片的宽为275px</p>
            <p>
              <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                <i class="el-icon-upload"></i><span>上传</span>
                <input type="file" @change="bottomImg($refs.botMol12[index],index,275)" ref="botMol12"/>
              </a>
            </p>
      </div>  
    </div>
    <div class="right" data-scroll-reveal="enter right over 0.5s and move 300px">
      <p>
        <span v-if="!delNode">{{data.botTitle1}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.botTitle1"/>
      </p>
      <p>
        <span v-if="!delNode">{{data.botTitle2}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.botTitle2"/>
      </p>
      <p>
        <span v-if="!delNode">{{data.botTitle3}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.botTitle3"/>
      </p>
    </div>
    </div>
    <div class="btnLast">
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
        <span v-if="!delNode">{{data.botBtn}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.botBtn"/>
        </a>
    </div>
  </div>
</div>




<div id="script" ref="script"></div>

</div>


</template>

<script>
  export default {
    data () {
      return {
        data:{},
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
  beforeCreate(){
    // this.data=JSON.parse(data).data.paramPC
  },
  created(){
   // this.data=JSON.parse(data).data.paramPC
   // this.moStyle()
   console.log(this.data)
 },
 mounted(){
    this.sybCode()
    // console.log(this.data)
  },
  updated(){
   this.data=this.dataJson
 },
 methods:{
    //内容编辑区
    head(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
         _this.data.banner.splice(index,1,str)
        })
      input_file.value=''
    },
    Mhead(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.Mbanner.splice(index,1,str)
        })
      input_file.value=''
    },

    lectorImg(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.lectorLists[index].img = str
        })
      input_file.value=''
    },
    favorIcon(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
           _this.data.favorList[index].src = str
        })
      input_file.value=''
    },
    view1(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
         _this.data.view1.splice(index,1,str)
        })
      input_file.value=''
    },
    view2(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
           _this.data.view6.splice(index,1,str)
        })
      input_file.value=''
    },
    view3(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.view2.splice(index,1,str)
        })
      input_file.value=''
    },
    view4(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
           _this.data.view4.splice(index,1,str)
        })
      input_file.value=''
    },
    view5(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
           _this.data.view7.splice(index,1,str)
        })
      input_file.value=''
    },
    view6(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
           _this.data.view3.splice(index,1,str)
        })
      input_file.value=''
    },
    view7(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
           _this.data.view5.splice(index,1,str)
        })
      input_file.value=''
    },
    view8(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
            _this.data.view8.splice(index,1,str)
        })
      input_file.value=''
    },
    bottomImg(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.botImg.splice(index,1,str)
        })
      input_file.value=''
    },
    stepAdd(){
      this.data.stepTable.push({
        "td1":"第四阶段",
        "td2":"电商用户画像，推荐系统项目",
        "td3":"可以基于具体问题建立数学模型，掌握python爬虫相关技术，可以将数据处理的结果以可视化的方式直观给目标用户。,掌握互联网架构相关知识",
        "td4":"算法、R语言、数据挖掘分析胜任工作：算法工程师，数据挖掘工程师，机器学习工程师，数据科学家",
        "td5":[
        "马上报名",
        "咨询了解  >"
        ]
      })
    },
    stepDel(){
      var len = this.data.stepTable.length;
      this.data.stepTable.splice(len-1,1);
    },
    lectorAdd(){
      this.data.lectorLists.push({
       "img":"http://page-bucket.oiaqye7985.com/land-page/images/module12/case1.png",
       "name":"黄喆",
       "remark":"原去哪儿网用户体验大数据总监，产品负责人"
     })
    },
    lectorDel(index){
      this.data.lectorLists.splice(index,1)
    },
    goodsAdd(){
      this.data.goodsTable.push({
       "td1":"张*于",
       "td2":"吉*克",
       "td3":"17000",
       "td4":"本科",
       "td5":"中央司法警官学院"
      })
    },
    goodsDel(index){
      var len = this.data.goodsTable.length
      this.data.goodsTable.splice(len-1,1)
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
  }
  a,
  a:hover{
    color: #fff;
    text-decoration: none;
  }
  input {
    border:none;
    outline: none;
    background-color: transparent;
  }
  .container {
   padding: 0;
 }
 .clearfix::after,
 .clearfix::before {
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
  line-height: 0;
  clear: both;
 }
 @media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}

.MaskHover{
  position: relative;
}
.MaskBox{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  z-index: 99;
  background: rgba(0,0,0,.5);
  color: #fff;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.MaskBox>p{
  font-size: 24px;
  color: #fff !important;
}
.MaskHover:hover .MaskBox{
  display: flex;
}
.module12 .addMas {
  height: 105px;
}
.module12 .addMas p{
  margin:0;
}
.module12 .banner .posiBanner{
  position: relative;
}
.module12 .banner .content {
  position: absolute;
  top: 165px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.module12 .banner .content .relaCont {
  text-align: center;
  width: 100%;
}
@media (min-width: 768px) and (max-width: 1920px){
  .module12 .banner .content {
  width: 1200px;
}
}
.module12 .banner .content .title {
  text-align: center;
}
.module12 .banner .content .title li {
  display: inline-block;
  font-size: 24px;
  color: #fff;
  margin-right:45px;
}

.module12 .banner .content input {
  background-color: transparent;
  border:none;
  outline: none;
}
.module12 .banner .content .title li i {
  color: #ffde00;
  vertical-align: middle;
  margin-right: 10px;
}
.module12 .banner .content .title input {
  color: #fff;
  display: inline;
  width: 150px;
}
.module12 .banner .content .title1 {
  color: #fff;
  vertical-align: middle;
  font-size: 55px;
  letter-spacing: 5px;
  border-bottom: 1px dashed rgba(250,250,250,.5);
  display: inline-block;
  padding: 0 35px 25px 35px;
  position: relative;
}
.module12 .banner .content .title1::before,
.module12 .banner .content .title2 ul::before {
  content: '';
  width: 5px;
  height: 5px;
  background-color: rgba(250,250,250,.5);
  position: absolute;
  left: -5px;
  bottom: -2.5px;
}
.module12 .banner .content .title1::after,
.module12 .banner .content .title2 ul::after{
  content: '';
  width: 5px;
  height: 5px;
  background-color: rgba(250,250,250,.5);
  position: absolute;
  right: -5px;
  bottom: -2.5px;
}
.module12 .banner .content .title1 input {
  color: #fff;
  text-align: center;
  letter-spacing: 5px;
}
.module12 .banner .content .title2 {
  margin-top:25px;
}
.module12 .banner .content .title2 ul {
  display: inline-block;
  border-bottom: 1px dashed rgba(250,250,250,.5);
  padding: 0 15px 20px 15px;
  position: relative;
}
.module12 .banner .content .title2 li {
  display: inline-block;
  font-size: 28px;
  color: #fff;
  margin-right:30px;
  vertical-align: middle;
  letter-spacing: 3px;
}
.module12 .banner .content .title2 li:last-child {
  margin-right: 0;
}
.module12 .banner .content .title2 li::before {
  content: '*';
  display: inline-block;
  vertical-align: middle;
  margin-top: 5px;
  /*margin-right: 10px;*/
}
.module12 .banner .content .title2 input {
 color: #fff;
 width: 133px;
 vertical-align: middle;
}
.module12 .banner .content .title3 {
  color: #fff;
  font-size: 28px;
  letter-spacing: 5px;
  margin-top:20px;
}
.module12 .banner .content .title3 input {
  color: #fff;
  width: 640px;
  text-align: center;
}
.module12 .banner .content .btn {
  margin-top: 50px;
}
.module12 .banner .content .btn a {
  display: inline-block;
  padding: 15px 50px;
  border: 2px solid #fff;
  border-radius: 35px;
  font-size: 26px;
  color: #fff;
  box-shadow: 2px 5px 10px rgba(102,102,102,.5);
}
.module12 .banner .content .btn input {
 color: #fff;
 width: 160px;
 text-align: center;
}
.module12 .comT .t_text {
  margin-top: 60px;
  color: #333;
  font-size: 38px;
  text-align: center;
}
.module12 .comT .t_text input{
  width: 1200px;
  text-align: center;
  color: #333;
}
.module12 .comT .t_text2 {
  margin-top: 15px;
  color: #666;
  font-size: 15px;
  text-align: center;
}
.module12 .comT .t_text2 input{
  width: 300px;
  text-align: center;
  color: #666;
}
.module12 .comT .t_text2 a {
  color: #444;
  font-size: 15px;
}
.module12 .comT .t_text2 a input {
  width: 80px;
  color: #444;
}
@media (min-width: 768px) and (max-width: 1920px) {
  .module12 .posiMBanner {
  width:1920px;
  height: 105px;
  margin-top: 20px;
}
.module12 .addMMas {
  margin-top: 20px;
}
}
.module12 .needLists {
  margin-top: 30px;  
}
.module12 .needLists ul {
  padding:0;
}
.module12 .needLists ul a {
  display: block;
  width: 100%;
}
.module12 .needLists ul li{
  width: 32%;
  display: inline-block;
  background-color: #ccc;
  padding-top: 55px;
  text-align: center;
  margin-right:2%;
  padding-bottom: 40px;
}
.module12 .needLists  .needL {
  color: #fff;
  font-size: 32px;
  height: 50px;
  width: 100%;
  overflow: hidden;
}
.module12 .needLists  .needL input{
  color: #fff;
  text-align: center;
  width: 80%;
}
.module12 .needLists  .btn1 {
  color: #fff;
  font-size: 16px;
  margin-top: 15px;
  height: 26px;
  width: 100%;
  overflow: hidden;
}
.module12 .needLists  .btn1 input{
  color: #fff;
  text-align: center;
  width: 80%;
}
.module12 .needLists ul li:nth-child(1){
 background-color: #1377ea;
}
.module12 .needLists ul li:nth-child(2){
  background-color: #01a9e8;
}
.module12 .needLists ul li:nth-child(3){
  margin-right:0; 
  background-color: #6132d9;
}
.module12 .btns{
  margin-top: 25px; 
  text-align: center;
}
.module12 .btns a {
  color: #0185f4;
  font-size: 20px;
}
.module12 .btns a input {
  color: #0185f4;
  width: 160px;
}
.module12 .btns a:nth-child(2) {
  color: #333;
  margin-left: 60px;
}
.module12 .btns a:nth-child(2) input {
  color: #333;
}
.module12 .highMoney .t_text2 input {
  width: 600px;
}
.module12 .highMoney .t_text {
  margin-top:30px;
}
.module12 .tableStep {
  margin-top: 40px;
}
.module12 .tableStep table {
  width: 100%;
}
.module12 .tableStep th {
  border: 1px solid #ccc;
  text-align: center;
  background-color: #0098ec;
  color: #fff;
  font-size: 20px;
  padding:10px 0;
  vertical-align: middle;
}
.module12 .tableStep th:nth-child(1){
  width: 15%;
}
.module12 .tableStep th:nth-child(2){
  width: 20%;
}
.module12 .tableStep th:nth-child(3){
  width: 25%;
}
.module12 .tableStep th:nth-child(4){
  width: 25%;
}
.module12 .tableStep th:nth-child(5){
  width: 15%;
}
.module12 .tableStep th input {
  color: #fff;
  text-align: center;
  width: 50%;
}
.module12 .tableStep td textarea {
  text-align: center;
  border:none;
  outline: none;
  vertical-align: middle;
  color: #555;
}
.module12 .tableStep td input {
  color:#555;
}
.module12 .tableStep td:nth-child(1) input {
  width: 110%;
  text-align: center;
}
.module12 .tableStep td:nth-child(2) textarea {
  width: 110%;
}
.module12 .tableStep td:nth-child(3) textarea {
  width: 110%;
}
.module12 .tableStep td:nth-child(4) textarea {
  width: 110%;
}
.module12 .tableStep td {
  border: 1px solid #ccc;
  text-align: center;
  vertical-align: middle;
  padding:20px 42px;
  line-height: 30px;
  color: #555;
  font-size: 16px;
}
.module12 .tableStep tbody td:nth-child(3),
.module12 .tableStep tbody td:nth-child(4)  {
  text-align: left;
}
.module12 .tableStep tbody td:nth-child(5) {
  padding: 20px 0;
}
.module12 .tableStep tbody td:nth-child(5) input {
  width: 80px;
}
.module12 .tableStep tbody td:nth-child(5) a {
  color: #555;
  font-size: 15px;
}
.module12 .tableStep tbody td:nth-child(5) a:first-child {
  padding: 3px 15px;
  background-color: #0098ec;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 8px;
}
.module12 .tableStep tbody td:nth-child(5) a:first-child input {
  color: #fff;
}
.module12 .addNode{
  margin-top:20px;
}
.module12 .lector .t_text {
  margin-top: 30px;
}
.module12 .lector .t_text2 input{
  width: 650px;
}
.module12 .lector .lectorLists{
  margin-top: 40px;
}
.module12 .lector .lectorLists ul{
  width: 100%;
  padding:0;
}
.module12 .lector .lectorLists ul li{
  width: 31.7%;
  overflow: hidden;
  display: inline-block;
  margin-right:2%;
  border-radius: 10px;
  position: relative;
  margin-bottom: 15px;
}
.module12 .lector .lectorLists ul li:hover .bottomCase {
  /*background-color: rgba(0,152,236,.5);*/
}
@media (min-width: 768px) and (max-width: 1920px){
  .module12 .lector .lectorLists ul img {
  /*transition: all 0.6s;*/
}
.module12 .lector .lectorLists ul li:hover img {
/*  -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    transform: scale(1.1);*/
}
}
.module12 .lector .lectorLists ul li:nth-child(3n),
.module12 .lector .lectorLists ul li:last-child{
  margin-right: 0;
}

.module12 .lector .lectorLists img {
  width: 100%;
}
.module12 .lector .lectorLists .bottomCase {
  margin-right: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  overflow: hidden;
  background-color: rgba(0,0,0,.3);
  padding-left: 25px;
  padding-top:20px;
  padding-right:20px;
}
.module12 .lector .lectorLists .name {
  color: #fff;
  font-size: 22px;
  text-align: left;
}
.module12 .lector .lectorLists .name input{
  color: #fff;
  text-align: left;
}
.module12 .lector .lectorLists .remark {
  color: #fff;
  font-size: 15px;
  text-align: left;
  width: 95%;
  height: 25px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.module12 .lector .lectorLists .remark input{
  color: #fff;
  text-align: left;
  width: 100%;
}
.module12 .study .t_text {
  margin-top: 30px;
}
.module12 .study .t_text2 a input {
  width: 190px;
}
.module12 .study .t_text2 input {
  width: 220px;
}
.module12 .study .tableGoods {
  margin-top: 25px;
  border:1px solid #ccc;
  padding-bottom: 10px;
  max-height: 450px;
  overflow: auto;
}
.module12 .study .tableGoods .row {
  margin: 0;
} 
.module12 .study .tableGoods .topTable {
  height: 45px;
  line-height: 45px;
  background-color: #0089f3;
  color: #fff;
  font-size: 20px;
}
.module12 .study .tableGoods .topTable input {
  color: #fff;
  width: 160px;
}
.module12 .study .tableGoods .topTable>div {
  max-width: 30%;
  max-height: 45px;
  overflow: hidden;
}
.module12 .study .tableGoods ul {
  padding-left: 0;
}
.module12 .study .tableGoods .headUl {
  margin-top: 15px;
  width: 100%;
  margin-bottom:0;
}
.module12 .study .tableGoods .midUl {
  margin-top: -8px;
}
.module12 .study .tableGoods .headUl li {
  float: left;
}
.module12 .study .tableGoods .headUl li,
.module12 .study .tableGoods .headUl li input {
  text-align: center;
  color: #333;
  font-size: 20px;
}
.module12 .study .tableGoods .headUl li input {
  width: 100px;
}
.module12 .study .tableGoods .headUl li,
.module12 .study .tableGoods .midUl div {
  border-right: 1px dashed #ccc;
  text-align: center;
  height: 45px;
  line-height: 45px;
  overflow: hidden;
  display: inline-block;
}
.module12 .study .tableGoods .midUl li {
  height: 45px !important;
}
.module12 .study .tableGoods .midUl div {
  float: left;
}
.module12 .study .tableGoods .headUl li:nth-child(1){
  width: 20%;
}
.module12 .study .tableGoods .headUl li:nth-child(2){
  width: 25%;
}
.module12 .study .tableGoods .headUl li:nth-child(3){
  width: 20%;
}
.module12 .study .tableGoods .headUl li:nth-child(4){
  width: 10%;
}
.module12 .study .tableGoods .headUl li:nth-child(5){
  width: 25%;
  border-right: none;
}
.module12 .study .tableGoods .midUl li div:nth-child(1){
  width: 20%;
}
.module12 .study .tableGoods .midUl li div:nth-child(2){
  width: 25%;
}
.module12 .study .tableGoods .midUl li div:nth-child(3){
  width: 20%;
}
.module12 .study .tableGoods .midUl li div:nth-child(4){
  width: 10%;
}
.module12 .study .tableGoods .midUl li div:nth-child(5){
  width: 25%;
  border-right: none;
}
.module12 .study .tableGoods .midUl div,
.module12 .study .tableGoods .midUl div input{
  color: #333;
  font-size: 20px;
  text-align: center;
}
.module12 .study .tableGoods .midUl div input {
  width: 100px;
}
.module12 .study .tableGoods .midUl div:nth-child(5) input {
  width: 170px;
}
.module12 .study .btns a:nth-child(1) input {
  width: 200px;
}
.module12 .favourable .t_text {
  margin-top: 30px;
}
.module12 .favourable .t_text2 input {
  width: 615px;
}
.module12 .favourable .favorLists .favor1{
  height: 65px;
  overflow: visible;
}
.module12 .favourable .favor2{
  font-size: 22px;
  height: 30px;
}
.module12 .favourable .MaskBox {
  top: -54px;
}
.module12 .favourable .btns a:first-child input {
  width: 200px;
}
.module12 .fine .t_text {
  margin-top: 30px;
}
.module12 .fine .t_text2 input {
  width: 750px;
}
.module12 .fine .views {
  margin-top: 30px;
  width: 100%;
  background-color: #1069e1;
  border-radius: 10px;
  padding:30px 55px;
}
.module12 .fine .views .content {
  background-color: #fff;
  padding: 10px;
}
.module12 .fine .views .content>ul {
  float: left;
  padding: 0;
  margin-right: 0.7%;
  margin-bottom: 0;
}
.module12 .fine .views .content>ul:last-child {
  margin-right: 0;
}
.module12 .fine .views .content>ul li {
  margin-bottom:8px;
}
.module12 .fine .views .content>ul:first-child li:last-child {
  margin-top: 15px;
}
.module12 .fine .views .content>ul li:last-child {
  margin-bottom: 0;
}
.module12 .fine .views .content>ul.left{
  width: 27.5%;
}
.module12 .fine .views .content>ul.middle{
  width: 27.1%;
}
.module12 .fine .views .content>ul.right{
  width: 44%;
}
.module12 .fine .views .content>ul img {
  width: 100%;
}
.module12 .bottomD {
  margin-top: 30px;
}
.module12 .bottomD .left {
  width: 45%;
  float: left;
  text-align: right;
}
.module12 .bottomD .right {
  width: 55%;
  float: left;
  text-align: left;
  padding-left: 50px; 
  padding-top: 20px;
}
.module12 .bottomD .right p {
  margin-bottom: 0;
}
.module12 .bottomD .right p:nth-child(1) {
  padding-left:50px;
  color: #666;
  font-size: 30px;
  font-weight: 700;
}
.module12 .bottomD .right p:nth-child(1) input {
  color: #666;
   font-weight: 700;
}
.module12 .bottomD .right p:nth-child(2) {
  color: #01a1e8;
  font-size: 78px;
  font-weight: 700;
}
.module12 .bottomD .right p:nth-child(2) input {
  color: #01a1e8;
   font-weight: 700;
}
.module12 .bottomD .right p:nth-child(3) {
  color: #3b404f;
  font-size: 44px;
  font-weight: 700;
}
.module12 .bottomD .right p:nth-child(3) input {
  color: #3b404f; 
   font-weight: 700;
}
.module12 .bottomD .btnLast {
  margin-top:45px;
  text-align: center;
}
.module12 .bottomD .btnLast a {
  background-color: #01b2e7;
  color: #fff;
  font-size: 24px;
  display:inline-block;
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
}
.module12 .bottomD .btnLast a input {
  color: #fff;
  text-align: center;
  width: 142px;
}
@media (min-width:1600px) and (max-width:1900px) {
  .module12 .banner .content {
    top:105px;
  }
}
@media (min-width:1440px) and (max-width:1600px) {
  .module12 .banner .content {
    top:50px;
  }
  .module12 .banner .content .title1 {
    font-size: 45px;
  }
}
@media (min-width:1280px) and (max-width:1440px) {
  .module12 .banner .content {
    top:30px;
  }
  .module12 .banner .content .title1 {
    font-size: 35px;
  }
  .module12 .banner .content .btn {
    margin-top: 25px;
  }
}
@media (min-width:1080px) and (max-width:1280px) {
  .module12 .banner .content {
    top:20px;
  }
  .module12 .banner .content .title1 {
    font-size: 35px;
  }
  .module12 .banner .content .btn {
    margin-top: 15px;
  }
  .module12 .banner .content .title2 ul {
    padding: 0 15px 13px 15px;
  }
  .module12 .banner .content .title3 {
   margin-top: -2px;
 }
 .module12 .banner .content .title2 {
  margin-top: 15px;
 }
}
@media (min-width:768px) and (max-width:1080px) {
  .module12 .banner  {
    display: none;
  }

}


@media(min-width: 768px) and (max-width: 1920px){
  .module12 .MimgBg {
    /*display: none;*/
  }
  .module12 .need,
  .module12 .highMoney, 
  .module12 .lector, 
  .module12 .study {
    width: 100%;
    background: url(http://page-bucket.oiaqye7985.com/land-page/images/module12/bgBig.png);
  }
  .module12 .highMoney {
    background-position:  0 -416px;
  }
  .module12 .lector {
    background-position:  0 -700px;
  }
  .module12 .study {
    background-position:  0 -965px;
  }
}

</style> 

