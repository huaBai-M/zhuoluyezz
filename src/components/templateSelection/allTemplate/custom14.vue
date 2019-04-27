<template>
 <div id="html-content" class="module14">
   <!-- banner 开始 -->
   <div class="banner PCbanner">
       <div class="imgBg MaskHover PimgBg">
           <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
              <img v-bind:src="data.banner" width="100%"  class="posiBanner hidden-xs hidden-sm"/>
          </a>
      </div>
      <!-- PCbanner -->
   <div class="container content hidden-sm hidden-xs">
     <div class="leftCont">
         <div class="title">
             <span v-if="!delNode">{{data.bannerTitle}}</span>
             <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle" maxlength="8" />
         </div>
         <div class="title1" :style="{borderColor:data.color}">
             <span v-if="!delNode" :style="{backgroundColor:data.color}">{{data.bannerTitle1}}</span>
             <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle1" maxlength="22" :style="{backgroundColor:data.color}"/>
       </div>
       <div class="icons">
           <ul class="clearfix">
               <li v-for="(item,index) in data.bannerTitle2">
                   <p v-if="index==0" :style="{borderColor:data.color}" class="pIcon"><i class="iconfont icon-jiage" :style="{color:data.color}"></i></p>
                   <p v-if="index==1" :style="{borderColor:data.color}" class="pIcon"><i class="iconfont icon-diamonds" :style="{color:data.color}"></i></p>
                   <p v-if="index==2" :style="{borderColor:data.color}" class="pIcon"><i class="iconfont icon-cailiao" :style="{color:data.color}"></i></p>
                   <div>
                     <span v-if="!delNode">{{item}}</span>
                     <input class="INputAll" type="text" v-if="delNode" v-model="data.bannerTitle2[index]" maxlength="4" />
                   </div>
               </li>
           </ul>
       </div>
       <div class="btns">
           <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
              <span v-if="!delNode">{{data.btnBanner}}</span>
              <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btnBanner"/>
          </a>
      </div>
    </div>
    <div class="rightCont MaskHover">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <img v-bind:src="data.bannerPro" width="100%" :style="{borderColor:data.color}"/>
          <div class="MaskBox addMas" v-if="delNode">
                  <p>上传banner图片大小为 1920*580</p>
                  <p>上传产品图大小为 530*450</p>
                  <p>
                      <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                        <i class="el-icon-upload"></i><span>上传banner</span>
                        <input type="file" v-on:change="bannerP($refs.f1,1920,580)" ref="f1" />
                      </a> 
                      <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                        <i class="el-icon-upload"></i><span>上传产品图</span>
                        <input type="file" v-on:change="bannerPro($refs.f2,530,450)" ref="f2"/>
                      </a> 
                  </p>
              </div>
      </a>

  </div>
</div>     
    <!-- banner移动 -->
    <div class="mBanner hidden-md hidden-lg">
         <div class="titleM"><span>{{data.bannerTitle}}</span></div>
         <div class="title1M" :style="{borderColor:data.color}">
             <span :style="{backgroundColor:data.color}">{{data.bannerTitle1}}</span>
         </div>
         <div class="proImg">
             <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                <img v-bind:src="data.bannerPro" width="80%" :style="{borderColor:data.color}"/>
            </a>
          </div>
         <div class="btns">
           <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A">
              <span>{{data.btnBanner}}</span> 
          </a>
      </div>
    </div>
</div>
<!-- banner 结束 -->
<!-- 实力商家 -->

<div class="business">
    <div class="container hidden-xs hidden-sm">
          <div class="leftBusiness">
              <ul class="clearfix">
                    <li class="MaskHover">
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                          <img v-bind:src="data.businessImg1" width="100%"/>
                          <div class="MaskBox addMas" v-if="delNode">
                              <p>上传证书图片 230*310</p>
                              <p>
                                  <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                    <i class="el-icon-upload"></i><span>上传证书图片</span>
                                    <input type="file" @change="zhengBook($refs.f3,230,310)" ref="f3"/>
                                  </a> 
                              </p>
                           </div>
                        </a>
                    </li>
                    <li class="MaskHover">
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                          <img v-bind:src="data.businessImg2" width="100%"/>
                          <div class="MaskBox addMas" v-if="delNode">
                              <p>上传证书图片 230*210</p>
                              <p>
                                  <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                    <i class="el-icon-upload"></i><span>上传证书图片</span>
                                    <input type="file" @change="zhengBook2($refs.f4,230,310)" ref="f4"/>
                                  </a> 
                              </p>
                           </div>
                        </a>
                    </li>
              </ul>
          </div>
          <div class="rightBusiness">
               <div class="title">
                    <span v-if="!delNode">{{data.busiTitle}}</span>
                    <input class="INputAll" type="text" v-if="delNode" v-model="data.busiTitle" maxlength="4" />
                    <span v-if="!delNode" :style="{color:data.color}">{{data.busiTitle2}}</span>
                    <input class="INputAll" type="text" v-if="delNode" v-model="data.busiTitle2" maxlength="4" :style="{color:data.color}"/>
              </div>
          <div class="busiInfo">
               <span v-if="!delNode">{{data.busiInfo}}</span>
               <textarea class="INputAll" type="text" v-if="delNode" v-model="data.busiInfo"></textarea>
         </div>
         <div class="busiLists">
             <ul>
                 <li v-for="(item,index) in data.busiLists">
                   <span v-if="!delNode">{{item}}</span>
                   <textarea class="INputAll" type="text" v-if="delNode" v-model="data.busiLists[index]"></textarea>
                 </li>
             </ul>
         </div>
         <div class="btns">
             <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                  <span v-if="!delNode">{{data.btnBusiness}}</span>
                  <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btnBusiness"/>
             </a>
        </div>
    </div>
  </div>


  <!-- 移动端实力商家 -->
  <div class="businessM hidden-lg hidden-md">
      <div class="title">
          <span>{{data.busiTitle}}</span>
          <span :style="{color:data.color}">{{data.busiTitle2}}</span>
       </div>
       <div class="leftBusinessM">
              <ul class="clearfix">
                    <li>
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                          <img v-bind:src="data.businessImg1" width="100%"/>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                          <img v-bind:src="data.businessImg2" width="100%"/>
                        </a>
                    </li>
              </ul>
          </div>
          <div class="busiInfo"><span>{{data.busiInfo}}</span></div>
         <div class="busiLists">
             <ul>
                 <li v-for="(item,index) in data.busiLists">
                   <span>{{item}}</span>
                 </li>
             </ul>
         </div>
         <div class="btns">
             <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                  <span>{{data.btnBusiness}}</span>
             </a>
        </div>
  </div>
</div>
<!-- 爆款推荐区 -->
<div class="baoHot">
    <div class="container">
        <div class="line">
             <i class="left"></i>
             <i class="right"></i>
             <div class="top">
                <span v-if="!delNode" :style="{color:data.color}"> {{data.hotTitle}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.hotTitle" :style="{color:data.color}" maxlength="5" />
             </div>
            <div class="bottom">
                <span v-if="!delNode"> {{data.hotTitle2}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.hotTitle2"  maxlength="16" />
            </div>
      </div>
    </div>
</div>

<!-- 优势 -->
<div class="goods">
     <div class="container hidden-xs hidden-sm">
          <div class="lists clearfix" v-for="(item,index) in data.goods">
               <div class="leftImg MaskHover" :style="floatStyle(index)">
                     <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                       <img v-bind:src="item.img" width="100%" :style="{borderColor:data.color}"/>
                       <div class="MaskBox addMas" v-if="delNode">
                              <p>上传优势图片宽为540px</p>
                              <p>
                                  <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                    <i class="el-icon-upload"></i><span>上传图片</span>
                                    <input type="file" @change="goodsP($refs.f5[index],index,540)" ref="f5"/>
                                  </a> 
                              </p>
                           </div>
                   </a>
               </div>
               <div class="right" :style="paddingStyle(index)">
                   <div class="title" :style="{borderColor:data.color}">
                      <span v-if="!delNode"> {{item.title}}</span>
                      <input class="INputAll" type="text" v-if="delNode" v-model="item.title"/>
                   </div>
                   <div class="title1" :style="{backgroundColor:data.color}">
                      <span v-if="!delNode"> {{item.title1}}</span>
                      <input class="INputAll" type="text" v-if="delNode" v-model="item.title1" maxlength="18"/>
                   </div>
                   <div class="title2">
                      <span v-if="!delNode"> {{item.title2}}</span>
                      <input class="INputAll" type="text" v-if="delNode" v-model="item.title2"/>
                   </div>
                   <div class="btnGoods">
                       <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
                            <span v-if="!delNode" :style="{color:data.color}">{{item.btn}}</span>
                            <input class="INputAll" type="text" v-if="delNode" :style="{color:data.color}" v-model="item.btn" maxlength="5"/>
                            <span class="iconfont icon-you" :style="{color:data.color}"></span>
                       </a>
                   </div>
               </div>
          </div>
          <div class="addNode" v-if="delNode">
              <el-button type="primary" icon="el-icon-edit" @click="goodsAdd">添加一行优势</el-button>
              <el-button type="danger" icon="el-icon-delete"  @click="goodsDel">删除一行优势</el-button>
        </div>
     </div>
     <div class="goodsM hidden-md hidden-lg" v-for="(item,index) in data.goods">
            <div class="title" :style="{borderColor:data.color}">
                  <span> {{item.title}}</span>
             </div>
             <div class="title1" :style="{backgroundColor:data.color}">
                  <span> {{item.title1}}</span>
              </div>
              <div class="goodsImg">
                   <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                     <img v-bind:src="item.img" width="100%" :style="{borderColor:data.color}"/>
                 </a>
               </div>
               <div class="title2">
                      <span>{{item.title2}}</span>
                   </div>
                   <div class="btnGoods">
                       <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
                            <span  :style="{color:data.color}">{{item.btn}}</span>
                            <span class="iconfont icon-you" :style="{color:data.color}"></span>
                       </a>
                   </div>
     </div>
</div>

<!-- 爆款推荐区 -->
<div class="baoHot">
    <div class="container">
        <div class="line">
             <i class="left"></i>
             <i class="right"></i>
             <div class="top">
                <span v-if="!delNode" :style="{color:data.color}"> {{data.zhuanTitle}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.zhuanTitle" :style="{color:data.color}" maxlength="5" />
             </div>
            <div class="bottom">
                <span v-if="!delNode"> {{data.zhuanTitle2}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.zhuanTitle2"  maxlength="16" />
            </div>
      </div>
    </div>
</div>

<!-- 产品 -->
<div class="products">
    <div class="container">
        <ul class="clearfix">
          <li v-for="(item,index) in data.products">
            <div class="imgPro MaskHover">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                    <img v-bind:src="item.img" width="100%" />
                    <div class="MaskBox addMas" v-if="delNode">
                       <p>上传图片宽为380px</p>
                        <p>
                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                              <i class="el-icon-upload"></i><span>上传图片</span>
                              <input type="file" @change="products($refs.f6[index],index,380)" ref="f6"/>  
                            </a> 
                            <el-button type="danger" icon="el-icon-delete"  @click="productsDel(index)">删除</el-button>
                        </p>
                   </div>
                </a>
            </div>
            <div class="title">
                 <div class="left">
                     <div class="title1">
                         <span v-if="!delNode"> {{item.title1}}</span>
                         <input class="INputAll" type="text" v-if="delNode" v-model="data.products[index].title1" />
                     </div>
                     <div class="title2">
                         <span v-if="!delNode"> {{item.title2}}</span>
                         <input class="INputAll" type="text" v-if="delNode" v-model="data.products[index].title2" />
                     </div>
                 </div>
                 <div class="right" :style="{borderTopColor:data.color}">
                     <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
                        <span v-if="!delNode">{{item.btn}}</span>
                        <input class="INputAll" type="text" v-if="delNode" v-model="data.products[index].btn" maxlength="4"/>
                      </a> 
                 </div>
            </div>
          </li>
        </ul> 
        <div class="addNode" v-if="delNode">
              <el-button type="primary" icon="el-icon-edit" @click="productsAdd">添加一块</el-button>
        </div>
    </div>
</div>


<!-- 爆款推荐区 -->
<div class="baoHot">
    <div class="container">
        <div class="line">
             <i class="left"></i>
             <i class="right"></i>
             <div class="top">
                <span v-if="!delNode" :style="{color:data.color}"> {{data.uTitle}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.uTitle" :style="{color:data.color}" maxlength="5" />
             </div>
            <div class="bottom">
                <span v-if="!delNode"> {{data.uTitle2}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.uTitle2"  maxlength="16" />
            </div>
      </div>
    </div>
</div>

<!-- 案例 -->
<div class="products">
    <div class="container">
        <ul class="clearfix">
          <li v-for="(item,index) in data.cases">
            <div class="imgPro MaskHover">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                    <img v-bind:src="item.img" width="100%" />
                    <div class="MaskBox addMas" v-if="delNode">
                        <p>上传图片宽为380px</p>
                        <p>
                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                              <i class="el-icon-upload"></i><span>上传图片</span>
                              <input type="file" @change="cases($refs.f7[index],index,380)" ref="f7"/>  
                            </a> 
                            <el-button type="danger" icon="el-icon-delete"  @click="casesDel(index)">删除</el-button>
                        </p>
                   </div>
                </a>
            </div>
            <div class="title">
                 <div class="left">
                     <div class="title1">
                         <span v-if="!delNode"> {{item.title1}}</span>
                         <input class="INputAll" type="text" v-if="delNode" v-model="data.cases[index].title1" />
                     </div>
                     <div class="title2">
                         <span v-if="!delNode"> {{item.title2}}</span>
                         <input class="INputAll" type="text" v-if="delNode" v-model="data.cases[index].title2" />
                     </div>
                 </div>
                 <div class="right" :style="{borderTopColor:data.color}">
                     <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
                        <span v-if="!delNode">{{item.btn}}</span>
                        <input class="INputAll" type="text" v-if="delNode" v-model="data.cases[index].btn" maxlength="4"/>
                      </a> 
                 </div>
            </div>
          </li>
        </ul> 
        <div class="addNode" v-if="delNode">
              <el-button type="primary" icon="el-icon-edit" @click="casesAdd">添加一块</el-button>
        </div>
    </div>
</div>
<!-- 爆款推荐区 -->
<div class="baoHot">
    <div class="container">
        <div class="line">
             <i class="left"></i>
             <i class="right"></i>
             <div class="top">
                <span v-if="!delNode" :style="{color:data.color}"> {{data.footTitle}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.footTitle" :style="{color:data.color}" maxlength="5" />
             </div>
            <div class="bottom">
                <span v-if="!delNode"> {{data.footTitle2}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.footTitle2"  maxlength="16" />
            </div>
      </div>
    </div>
</div>
<!-- 走进厂家 -->
<div class="footViews">
    <div class="container">
        <ul class="ulTop clearfix">
            <li v-for="(item,index) in data.proUl" :style="{backgroundColor:data.color}">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A">
                    <span v-if="!delNode">{{item}}</span>
                    <input class="INputAll" type="text" v-if="delNode" v-model="data.proUl[index]" maxlength="4"/>
                </a>
            </li>
      </ul>
      <div class="addNode" v-if="delNode">
              <el-button type="primary" icon="el-icon-edit" @click="footAdd">添加一块</el-button>
              <el-button type="danger" icon="el-icon-delete"  @click="footDel">删除一块</el-button>
        </div>
      <div class="bottomS clearfix">
          <ul class="left">
            <li v-for="(item,index) in data.leftUl" class="MaskHover">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                    <img v-bind:src="item.img" width="100%" />
                    <div class="MaskBox addMas" v-if="delNode">
                        <p>上传图片宽为330px</p>
                        <p>
                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                              <i class="el-icon-upload"></i><span>上传图片</span>
                              <input type="file" v-on:change="leftUl($refs.f8[index],index,330)" ref="f8"/>
                            </a> 
                        </p>
                    </div>
                </a>
                <div class="title">
                    <span v-if="!delNode">{{item.title1}}</span>
                    <input class="INputAll" type="text" v-if="delNode" v-model="data.leftUl[index].title1"/>
                </div>
            </li>
          </ul>
          <ul class="middle">
            <li v-for="(item,index) in data.midUl" class="MaskHover">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                    <img v-bind:src="item.img" width="100%" />
                    <div class="MaskBox addMas" v-if="delNode">
                        <p>上传图片宽为480px</p>
                        <p>
                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                              <i class="el-icon-upload"></i><span>上传图片</span>
                              <input type="file" v-on:change="middleUl($refs.f9[index],index,480)" ref="f9"/>
                            </a> 
                        </p>
                   </div>
                </a>
                <div class="title">
                    <span v-if="!delNode">{{item.title1}}</span>
                    <input class="INputAll" type="text" v-if="delNode" v-model="data.midUl[index].title1"/>
                </div>
            </li>
          </ul>
          <ul class="right">
            <li v-for="(item,index) in data.rightUl" class="MaskHover">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                    <img v-bind:src="item.img" width="100%" />
                    <div class="MaskBox addMas" v-if="delNode">
                        <p>上传图片宽为330px</p>
                        <p>
                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                              <i class="el-icon-upload"></i><span>上传图片</span>
                              <input type="file" v-on:change="rightUl($refs.f10[index],index,330)" ref="f10"/>
                            </a> 
                        </p>
                    </div>
                </a>
                <div class="title">
                    <span v-if="!delNode">{{item.title1}}</span>
                    <input class="INputAll" type="text" v-if="delNode" v-model="data.rightUl[index].title1"/>
                </div>
            </li>
          </ul>
      </div>
      <div class="buttons">
              <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A" :style="{backgroundColor:data.color}">
                <span v-if="!delNode">{{data.btns1}}</span>
                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btns1"/>
              </a>
              <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                <span v-if="!delNode">{{data.btns2}}</span>
                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btns2"/>
              </a>
       </div>
    </div>
</div>

<!-- 爆款推荐区 -->
<div class="baoHot">
    <div class="container">
        <div class="line">
             <i class="left"></i>
             <i class="right"></i>
             <div class="top">
                <span v-if="!delNode" :style="{color:data.color}"> {{data.proTitle}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.proTitle" :style="{color:data.color}" maxlength="5" />
             </div>
            <div class="bottom">
                <span v-if="!delNode"> {{data.proTitle2}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.proTitle2"  maxlength="16" />
            </div>
      </div>
    </div>
</div>  

<!-- 案例 -->
<div class="products">
    <div class="container">
        <ul class="clearfix">
          <li v-for="(item,index) in data.proQt">
            <div class="imgPro MaskHover">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                    <img v-bind:src="item.img" width="100%" />
                    <div class="MaskBox addMas" v-if="delNode">
                        <p>上传图片宽为380px</p>
                        <p>
                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                              <i class="el-icon-upload"></i><span>上传图片</span>
                              <input type="file" @change="proQt($refs.f11[index],index,380)" ref="f11"/>  
                            </a> 
                            <el-button type="danger" icon="el-icon-delete"  @click="proQtDel(index)">删除</el-button>
                        </p>
                    </div>
                </a>
            </div>
            <div class="title">
                 <div class="left">
                     <div class="title1">
                         <span v-if="!delNode"> {{item.title1}}</span>
                         <input class="INputAll" type="text" v-if="delNode" v-model="data.proQt[index].title1" />
                     </div>
                     <div class="title2">
                         <span v-if="!delNode"> {{item.title2}}</span>
                         <input class="INputAll" type="text" v-if="delNode" v-model="data.proQt[index].title2" />
                     </div>
                 </div>
                 <div class="right" :style="{borderTopColor:data.color}">
                     <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
                        <span v-if="!delNode">{{item.btn}}</span>
                        <input class="INputAll" type="text" v-if="delNode" v-model="data.proQt[index].btn" maxlength="4" />
                      </a> 
                 </div>
            </div>
          </li>
        </ul> 
         <div class="addNode" v-if="delNode">
              <el-button type="primary" icon="el-icon-edit" @click="proQtAdd">添加一块</el-button>
        </div>
        <div class="botBtn">
           <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A">
                <span v-if="!delNode">{{data.botBtn}}</span>
                <input class="INputAll" type="text" v-if="delNode" v-model="data.botBtn"/>
           </a> 
        </div>
    </div>
</div>
    <!--/foot-->
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
        colorChoice:true,
        color:[
              '#e70012',
              '#02abab',
              '#4a546c',
              '#febb07',
              '#b98651',
              '#6c4ffa',
      ]
    }
  },

  props:["productType","dataJson","deleteNode","Ifcolor"],
  computed: {
      
  },
  watch: {  
     //监听数据变化
     dataJson(val){
    this.data=val
    console.log(this.data)
     },
     Ifcolor(val){
      this.data.color=val
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
   floatStyle(index){
      var style = {}
      if (index % 2 == 0) {
        style = {float: 'left'}
      }else {
        style = {
          float: 'right',
        }
      }
      return style
    },
    paddingStyle(index){
      var style = {}
      if (index % 2 != 0) {
        style = {
          paddingLeft: '0',
          paddingRight:'5%'
        }
      }else {
        style = {
          paddingLeft: '5%',
          paddingRight:'0'
        }
      }
      return style
    },
    //内容编辑区
    bannerP(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.banner=str
        })
        input_file.value=''
    },
    bannerPro(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.bannerPro=str
        })
        input_file.value=''
    },
    zhengBook(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.businessImg1=str
        })
        input_file.value=''
    },
    zhengBook2(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.businessImg2=str
        })
        input_file.value=''
    }, 
    goodsP(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.goods[index].img=str
        })
        input_file.value=''
    },
    products(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.products[index].img=str
        })
        input_file.value=''
    },
    cases(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.cases[index].img=str
        })
        input_file.value=''
    },
    proQt(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.proQt[index].img=str
        })
        input_file.value=''
    },
    leftUl(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.leftUl[index].img=str
        })
        input_file.value=''
    },
    middleUl(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.midUl[index].img=str
        })
        input_file.value=''
    },
    rightUl(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.rightUl[index].img=str
        })
        input_file.value=''
    },
    
    goodsAdd(){
      this.data.goods.push({
       img:"http://page-bucket.oiaqye7985.com/land-page/images/module14/goods.png",
       title:"电子小螺丝BA大圆头",
       title1:"厂家直销 · 货源充足 · 保障品质",
       title2:"耐腐蚀 / 强度高 / 坚固耐用 / 规格齐全",
       btn:"获取批发价"        
      })
    },
    goodsDel(){
      var len = this.data.goods.length;
      this.data.goods.splice(len-1,1);
    },
    productsAdd(){
      this.data.products.push({
        "img":"http://page-bucket.oiaqye7985.com/land-page/images/module14/pro.png",
        "title1":"不锈钢弹垫",
        "title2":"规格齐全 闪电发货",
        "btn":"咨询订购"
     })
    },
    productsDel(index){
      this.data.products.splice(index,1)
    },
    casesAdd(){
      this.data.cases.push({
        "img":"http://page-bucket.oiaqye7985.com/land-page/images/module14/case1.png",
        "title1":"U型螺栓",
        "title2":"规格齐全 闪电发货",
        "btn":"咨询订购"
     })
    },
    casesDel(index){
      this.data.cases.splice(index,1)
    },
    proQtAdd(){
      this.data.proQt.push({
        "img":"http://page-bucket.oiaqye7985.com/land-page/images/module14/case1.png",
        "title1":"U型螺栓",
        "title2":"规格齐全 闪电发货",
        "btn":"咨询订购"
     })
    },
    proQtDel(index){
      this.data.proQt.splice(index,1)
    },
    footAdd(){
      this.data.proUl.push("规格齐全")
    },
    footDel(){
       var len = this.data.proUl.length;
      this.data.proUl.splice(len-1,1);
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html {
    font-size : 20px;
  }
  @media only screen and (min-width: 350px){
    html {
      font-size: 25px !important;
    }
  }
  @media only screen and (min-width: 428px){
    html {
      font-size: 26.75px !important;
    }
  }
  @media only screen and (min-width: 481px){
    html {
      font-size: 30px !important;
    }
  }
  @media only screen and (min-width: 569px){
    html {
      font-size: 35px !important;
    }
  }
  @media only screen and (min-width: 641px){
    html {
      font-size: 40px !important;
    }
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  /* a:focus, a:hover {
    color: #fff;
    text-decoration: none;
  }*/
  input {
    border:none;
    outline: none;
    background-color: transparent;
  }
  textarea {
    width: 100%;
    height: 60px;
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
.module14 .banner {
  position: relative;
}
.module14 .addMas {
  /*height: 105px;*/
}
.module14 .addMas p{
  margin:0;
}
.module14 .banner .posiBanner{
  position: relative;
}
.module14 .banner .content {
  width: 1200px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 80px;
}
.module14 .banner .content .leftCont {
  width: 50%;
  float: left;
}
.module14 .banner .content .rightCont {
  width: 50%;
  float: left;
  text-align: right;
  padding-right: 18px;
}
.module14 .banner .content .leftCont .title {
 text-align: left;
 font-size: 80px;
 color: #050505;
 font-weight: 700;
 letter-spacing: 5px;
}
.module14 .banner .content .leftCont .title1 {
 text-align: left;
 font-size: 29px;
 color: #fff;
 width: 525px;
 border-top-width: 2px ;
 border-top-style:solid;
 border-bottom-width: 2px ;
 border-bottom-style:solid;
 padding: 5px 0; 
 margin-top: 20px;
}
.module14 .banner .content .leftCont .title1 span {
  display: block;
  padding-left: 6px;
  /*background-color: #febb07;*/
}
.module14 .banner .content .leftCont .title1 input {
  width: 100%;
  padding-left: 6px;
  /*background-color: #febb07;*/
}
.module14 .banner .content .leftCont .icons {
  margin-top: 30px;
  text-align: center;
}
.module14 .banner .content .leftCont .icons ul {
  padding: 0;
}
.module14 .banner .content .leftCont .icons li {
  float: left;
  text-align: center;
  margin-right: 50px;
}
.module14 .banner .content .leftCont .icons li:nth-child(3) {
  margin-right: 0;
}
.module14 .banner .content .leftCont .icons li .pIcon {
  width: 100px;
  height: 100px;
  line-height: 100px;
  vertical-align: middle;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  text-align: center;
}
.module14 .banner .content .leftCont .icons li .pIcon i {
  font-size: 75px;
}
.module14 .banner .content .leftCont .icons li:nth-child(2) .pIcon i {
  font-size: 85px;
}
.module14 .banner .content .leftCont .icons li:nth-child(3) .pIcon i {
  font-size: 70px;
}
.module14 .banner .content .rightCont img {
  border-width:2px;
  border-style: solid;
}
.module14 .banner .content .leftCont .icons li div {
  text-align: center;
  color:#222222;
  font-size:20px; 
}
.module14 .banner .content .leftCont .icons li input {
  width: 100px;
  text-align: center;
}
.module14  .btns {
  text-align: left;
  margin-top:25px;
}
.module14  .btns a {
  padding: 3px 26px;
  display: inline-block;
  font-size: 30px;
  letter-spacing: 3px;
  position: relative;
}
.module14 .btns input {
  width: 140px;
  letter-spacing: 3px;
}
.module14  .btns a::after {
  content: '';
  width:0px;
  height:0px;
  display: block;
  border-top:8px solid rgba(0,0,0,0);
  border-bottom:9px solid  rgba(0,0,0);
  border-right:11px solid rgba(0,0,0);
  border-left:12px solid  rgba(0,0,0,0); 
  position: absolute;
  right: 0;
  bottom: 0;
}
.module14 .business {
  margin-top: 60px;
}
.module14 .business .leftBusiness {
  width: 56%;
  float: left;
}
.module14 .business .leftBusiness ul {
  padding: 0;
}
.module14 .business .leftBusiness li {
  width: 316px;
  height: 400px;
  float: left;
  line-height: 400px;
  text-align: center;
  background: url(http://page-bucket.oiaqye7985.com/land-page/images/module14/textBg.png) no-repeat;
  margin-right: 20px;
}
.module14 .business .rightBusiness {
  width: 44%;
  float: left;
  padding-left: 30px;
}
.module14 .business .title {
  font-size: 54px;
  color: #050505;
  font-weight: 700;
  text-align: center;
  border-bottom: 2px solid #050505;
  width: 102%;
  padding-bottom: 8px;
  text-align: left;
}
.module14 .business .title input {
  width: 220px;
}
.module14 .business .title span {
  margin-right: 10px;
  letter-spacing: 5px;
}
.module14 .business .busiInfo {
  font-size: 24px;
  color: #111111;
  text-align: left;
  margin-top: 10px;
}
.module14 .business .busiInfo input {
  width: 100%;
}
.module14 .business .busiLists {
  font-size: 24px;
  color: #111111;
  text-align: left;
}
.module14 .business .busiLists ul {
  padding-left: 0;
}
.module14 .business .busiLists input {
  width: 100%;
}
.module14 .business .busiLists li {
  margin-top: 10px;
  line-height: 35px;
}
.module14 .baoHot {
  width: 100%;
  height: 200px;
  background: url("http://page-bucket.oiaqye7985.com/land-page/images/module14/bgMore.png") no-repeat;
  margin-top: 50px;
  padding-top: 50px;
}
.module14 .line {
  width: 450px;
  height: 110px;
  border: 1px solid #ccc;
  margin-left: 375px;
  border-top: 0;
  position: relative;
}
.module14 .line .top {
  font-size: 44px;
  letter-spacing: 8px; 
  position: absolute;
  left: 50%;
  transform:translateX(-50%);
  -ms-transform:translateX(-50%);   /* IE 9 */
  -moz-transform:translateX(-50%);  /* Firefox */
  -webkit-transform:translateX(-50%); /* Safari å’Œ Chrome */
  -o-transform:translateX(-50%);  /* Opera */
  top: -37px;
}
.module14 .line  i {
  width: 80px;
  height: 1px;
  background-color: #fff;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  position: absolute;
  top: 0;
}
.module14 .line  i.left {
  left:0;
}
.module14 .line  i.right {
  right:0;
}
.module14 .line .top span {
  width: 260px;
  display: inline-block;
}
.module14 .line .top input {
  width: 247px;
  letter-spacing: 8px; 
}
.module14 .line .bottom span{

}
.module14 .line .bottom  input{
  color: #fff;
  width: 100%;
}
.module14 .line .bottom {
  font-size: 30px;
  letter-spacing: 2px; 
  position: absolute;
  left: 50%;
  transform:translateX(-50%);
  -ms-transform:translateX(-50%);   /* IE 9 */
  -moz-transform:translateX(-50%);  /* Firefox */
  -webkit-transform:translateX(-50%); /* Safari å’Œ Chrome */
  -o-transform:translateX(-50%);  /* Opera */
  top: 35px;
  color: #fff;
  width: 100%;
}
.module14 .line::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform:translateX(-50%);
  -ms-transform:translateX(-50%);   /* IE 9 */
  -moz-transform:translateX(-50%);  /* Firefox */
  -webkit-transform:translateX(-50%); /* Safari å’Œ Chrome */
  -o-transform:translateX(-50%);  /* Opera */
  width: 0;
  height: 0;
  display: block;
  border-bottom:15px solid transparent;
  border-top:15px solid  #fff;
  border-right:15px solid transparent;
  border-left:15px solid  transparent; 

}
.module14 .goods {
  margin-top: 60px;
}
.module14 .goods  .leftImg{
  width: 45%;
  float: left;
}
.module14 .goods  .leftImg img {
  border: 1px solid;
}
.module14 .goods  .right{
  width: 55%;
  float: left;
  text-align: left;
  padding-left: 5%;
  padding-top: 45px; 
}
.module14 .goods  .right .title {
  font-size: 44px;
  color: #111;
  border-bottom: 2px solid;
  letter-spacing: 5px;
  width: 88%;
  height: 78px;
  overflow: hidden;
  padding-bottom: 20px;
}
.module14 .goods  .right .title1 {
  width: 88%;
  height: 60px;
  overflow: hidden;
  margin-top: 10px;
  padding: 5px 35px;
  color: #fff;
  font-size: 33px;
}
.module14 .goods  .right .title2 {
  width: 88%;
  height: 60px;
  overflow: hidden;
  margin-top: 25px;
  color: #333;
  font-size: 28px;
}
.module14 .goods  .right input {
  width: 100%;
}
.module14 .goods  .right .btnGoods {
  margin-top: 35px;
}
.module14 .goods  .right .btnGoods a {
  display: inline-block;
  padding: 7px 30px;
  border: 1px solid #333;
  border-radius: 10px;
  font-size: 32px;
  letter-spacing: 5px;
}
.module14 .goods  .right .btnGoods a input {
  width: 180px;
  letter-spacing: 5px;
}
.module14 .goods  .right .btnGoods .icon-you {
  vertical-align: middle;
  font-size: 20px;
}
.module14 .goods .lists {
  margin-bottom: 70px;
}
.module14 .products {
  margin-top: 60px;
}
.module14 .products ul {
  padding-left: 0;
}
.module14 .products ul li{
  width: 32%;
  float: left;
  margin-right: 2%;
  margin-bottom: 30px;
  overflow: hidden;
}
.module14 .products ul li:nth-child(3n){
  margin-right: 0;
}
.module14 .products ul li .title {
  width: 99.5%;
  height: 70px;
  overflow: hidden;
  background-color: #222;
}
.module14 .products ul li .title .left {
  width: 70%;
  float: left;
  color: #fff;
  padding-left: 10px
  ;
}
.module14 .products ul li .imgPro img {
  width: 100%;
}
.module14 .products ul li .title .right {
  width: 30%;
  float: right;
  height: 0;
  border-top: 70px solid;
  border-left: 30px solid transparent;
  text-align: center;
  position: relative;
}
.module14 .products ul li .title .right a {
  color: #fff;
  font-size: 24px;
}
.module14 .products ul li .title .right input,
.module14 .products ul li .title .right span {
  position: absolute;
  right: 6px;
  top: -65px;
  line-height: 30px;
  display: block;
  letter-spacing: 3px;
}
.module14 .products ul li .title .right input {
  width: 99px;
  font-size: 23px;
}
.module14 .products ul li .title .title1 {
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 5px;
  text-align: left;
  height: 40px;
  overflow: hidden;
}
.module14 .products ul li .title .title2 {
  font-size: 18px;
  color: #fff;
  letter-spacing: 5px;
  text-align: left;
  height: 25px;
  overflow: hidden;
}
.module14 .products ul li:nth-child(2n) img {
  /*height: 275px;*/
}
.module14 .footViews {
  margin-top: 40px;
}
.module14 .footViews ul.ulTop {
  padding-left: 1%;
  margin: 0 auto;
  text-align: center;
}
.module14 .footViews ul.ulTop li{
  width: 14%;
  height: 45px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  margin-right: 30px; 
  padding: 0 20px;
  margin-bottom: 20px;
  overflow: hidden;
  font-size: 24px;
}
.module14 .footViews ul.ulTop li:nth-child(5n){
}
.module14 .footViews ul.ulTop li:last-child {
}
.module14 .footViews ul.ulTop li input {
  width: 100px;
}
.module14 .footViews .bottomS {
  margin-top: 20px;
}
.module14 .footViews .bottomS ul {
  float: left;
  padding: 0;
}
.module14 .footViews .bottomS ul li {
  border: 4px solid #cfcfcf;
  margin-bottom: 10px;
  position: relative;
}
.module14 .footViews .bottomS ul.left {
  width: 28%;
  margin-right: 10px;
}
.module14 .footViews .bottomS ul.middle {
  width: 40.5%;
  margin-right: 10px;
}
.module14 .footViews .bottomS ul.right {
  width: 28%;
}
.module14 .footViews .bottomS ul li div.title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  background-color: rgba(0,0,0,.5);
}
.module14 .footViews .bottomS ul li input {
  width: 100%;
  text-align: center;
}
.module14 .footViews .buttons  {
  width: 100%;
  margin-top: 35px;
  text-align: center;
}
.module14 .footViews .buttons a {
  background-color: #222222;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 22px;
}
.module14 .footViews .buttons input {
  width: 180px;
}
.module14 .footViews .buttons a:first-child {
  margin-right: 70px;
}
.module14 .products .botBtn {
  width: 100%;
  height: 65px;
  line-height: 65px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  background-color: #222;
}
.module14 .products .botBtn input{
  width: 100%;
  text-align: center;
}
@media (min-width: 1600px) and (max-width: 1820px) {
  .module14 .banner .content .rightCont img {
    width: 95%;
  }
  .module14 .banner .content {
    padding-top: 90px;
  }
  .module14 .banner .content .leftCont .title {
    font-size: 65px;
  }
}
@media (min-width: 1400px) and (max-width: 1600px) {
  .module14 .banner .content .rightCont img {
    width: 88%;
  }
  .module14 .banner .content {
    padding-top: 80px;
  }
  .module14 .banner .content .leftCont .title {
    font-size: 60px;
  }
  .module14 .banner .content .leftCont .title1 {
    margin-top: 10px;
  }
  .module14 .banner .content .leftCont .icons {
    margin-top: 20px;
  }
  .module14 .btns {
    margin-top: 8px;
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
  .module14 .banner .content .rightCont img {
    width: 75%;
  }
  .module14 .banner .content {
    padding-top: 80px;
  }
  .module14 .banner .content .leftCont .title {
    font-size: 55px;
  }
  .module14 .banner .content .leftCont .title1 {
    margin-top: 6px;
  }
  .module14 .banner .content .leftCont .icons {
    margin-top: 10px;
  }
  .module14 .btns {
    margin-top: 8px;
  }
  .module14 .business .leftBusiness li {
    width: 311px;
  }
}
@media (min-width: 1000px) and (max-width: 1200px) {
  .module14 .banner .content .rightCont img {
    width: 75%;
  }
  .module14 .banner .content {
    padding-top: 80px;
  }
  .module14 .banner .content .leftCont .title {
    font-size: 55px;
  }
  .module14 .banner .content .leftCont .title1 {
    margin-top: 6px;
  }
  .module14 .banner .content .leftCont .icons {
    margin-top: 10px;
  }
  .module14 .btns {
    margin-top: 8px;
  }
  .module14 .banner .content .leftCont {
    transform:scale(0.7);
    -ms-transform:scale(0.7);   /* IE 9 */
    -moz-transform:scale(0.7);  /* Firefox */
    -webkit-transform:scale(0.7); /* Safari 和 Chrome */
    -o-transform:scale(0.7);  /* Opera */
    margin-top: -50px;
  }

}
@media (min-width: 768px) and (max-width: 1200px) {
  .banner {
    display: none;
  }

}

.module14 .leftBusiness .addMas p:last-child{
     margin-top: -340px;
}
.module14 .footViews .addMas{
     height: 293px;
}
</style> 

