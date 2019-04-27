<template>
 <div id="html-content" class="module7">
   <div class="banner PCbanner MaskHover" v-for="(item,index) in data.banner">
    <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
      <img v-bind:src="item.bg" width="100%" class="posiBanner hidden-xs hidden-sm"/>
    </a>
    <!-- 新增背景图内容 -->
    <div class="container content">
      <div class="centerPro">
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <img v-bind:src="item.proBanner" width="100%"/>
        </a>
      </div>
      <div class="rightBanenr">
       <div class="title">
         <span v-if="!delNode">{{item.title}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="item.title"/>
       </div>
       <div class="title1 titleM">
         <img src="http://page-bucket.oiaqye7985.com/land-page/images/module7/bannerRight.png">
         <span v-if="!delNode">{{item.title1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="item.title1"/>
       </div>
       <div class="title1">
         <img src="http://page-bucket.oiaqye7985.com/land-page/images/module7/bannerRight.png">
         <span v-if="!delNode">{{item.title2}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="item.title2"/>
       </div>
       <div class="title1">
         <img src="http://page-bucket.oiaqye7985.com/land-page/images/module7/bannerRight.png">
         <span v-if="!delNode">{{item.title3}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="item.title3"/>
       </div>

       <div class="bottonsAdd buttons">
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{item.abt1}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt1"/>
        </a>
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
          <span v-if="!delNode">{{item.abt2}}</span>
          <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt2"/>
        </a>
      </div>
    </div>
  </div>

    <div class="MaskBox addMas" v-if="delNode">
      <p>上传PC端的文件的宽为1920px <br />上传产品的文件的宽为550px</p>
      <p>
        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
          <i class="el-icon-upload"></i><span>上传PC端banner</span>
          <input type="file" v-on:change="head($refs.module7banner[index],index,1920)" ref="module7banner"/>
        </a>
        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
          <i class="el-icon-upload"></i><span>上传产品图</span>
          <input type="file" v-on:change="Mhead($refs.module7Mbanner[index],index,550)" ref="module7Mbanner"/>
        </a>
        <a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="delbanner(index)">
          <i class="el-icon-delete"></i><span>删除</span>
        </a>
      </p>
    </div>
  </div>
<!--   <div class="Mbanner" v-for="(item,index) in data.Mbanner">
      <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
        <img v-bind:src="item" width="100%"/>
      </a>
    </div> -->
  <div class="addNode" v-if="delNode">
    <a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addbanner">
      <i class="el-icon-edit"></i><span>添加一张banner</span>
    </a>
  </div>
  <!-- 产品展示 -->
  <div class="products comT">
   <div class="container">
     <!-- 标题 -->
     <div class="title titleF">
       <p class="line"></p>
       <p class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.products.title1}}</span>
         <input class="INputAll" type="text" v-if="delNode" v-model="data.products.title1"/>
       </p>
       <p class="t_text2" data-scroll-reveal="enter bottom over 0.5s and move 300px">
         <span v-if="!delNode">{{data.products.title2}}</span>
         <textarea class="INputAll" type="text" v-if="delNode" v-model="data.products.title2"/></textarea> 
       </p>
     </div>
     <!-- 列表 -->
     <div class="pro_lists clearfix row">
      <ul class="ulTop clearfix row">

        <li v-for="(item,index) in data.proUl1">
          <a href="javascript:void(0)" onclick="clickGXinRong(this);" data-type="co" data-keyword="关键字" data-local="A" style="display: inline-block;width:100%;">
            <span v-if="!delNode">{{item}}</span>
            <input class="INputAll" type="text" style="width:100%;" v-if="delNode" v-model="data.proUl1[index]"/>
            <i class="pull-right"></i>
          </a>
        </li>

      </ul>
      <div class="addNode col-lg-12 col-md-12" v-if="delNode">       
        <a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addClass">
          <i class="el-icon-edit"></i><span>添加一个分类</span>
        </a>
        <a href="javascript:void(0)" type="button" class="el-button el-button--danger" @click="delClass">
          <i class="el-icon-edit"></i><span>删除一个分类</span>
        </a>
      </div>

      <div>
      <ul class="ulBottom" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <li v-for="(item,index) in data.proUl2" class="mol7">
          <div class="top MaskHover">
            <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;width:100%;" data-type="co" data-keyword="关键字" data-local="A">
              <img v-bind:src="item.img"/>
              <div class="MaskBox" v-if="delNode">
                <p>上传图片的宽为345PX</p>
                <p>
                  <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                    <i class="el-icon-upload"></i><span>上传</span>
                    <input type="file" v-on:change="products($refs.module7productCenterRight[index],index,345)" ref="module7productCenterRight"/>
                  </a>
                  <a href="javascript:void(0)" type="button" class="el-button el-button--danger"@click="productRightDel(index)">
                    <i class="el-icon-delete"></i><span>删除</span>
                  </a>
                </p>
              </div>

            </a>

          </div>
          <p class="title_pro">
            <span v-if="!delNode" style="display:inline-block;width:100%;">{{item.title}}</span>
            <input class="INputAll" style="display:inline-block;width:100%;" type="text" v-if="delNode" v-model="item.title"/>
          </p>
          <div class="remark">
            <span v-if="!delNode">{{item.remark1}}</span>
            <input class="INputAll" style="display:inline-block;width:100%;" type="text" v-if="delNode" v-model="item.remark1"/>
          </div>
          <div class="remark1">
            <span v-if="!delNode">{{item.remark2}}</span>
            <input class="INputAll" style="display:inline-block;width:100%;" type="text" v-if="delNode" v-model="item.remark2"/>
          </div>
          <div class="buttons">
            <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
              <span v-if="!delNode">{{item.abt1}}</span>
              <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt1"/>
            </a>
            <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A" class="hidden-sm hidden-xs">
              <span v-if="!delNode">{{item.abt2}}</span>
              <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt2"/>
            </a>
          </div>

        </li>
      </ul>
             <!--  <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div> -->
      </div>
      <div class="addNode col-lg-12 col-md-12" v-if="delNode">
        <a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addproductRightr">
          <i class="el-icon-edit"></i><span>添加一个产品</span>
        </a>
      </div>
    </div>
  </div>

</div>

<!-- 优势展示 -->
<div class="goods comT">
  <div class="container">
    <!-- 标题 -->
    <div class="title titleF">
      <p class="line"></p>
      <p class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <span v-if="!delNode">{{data.goods.title1}}</span>
        <input class="INputAll" type="text" v-if="delNode" v-model="data.goods.title1"/>
      </p>
      <p class="t_text2" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <span v-if="!delNode">{{data.goods.title2}}</span>
        <textarea class="INputAll" type="text" v-if="delNode" v-model="data.goods.title2"/></textarea> 
      </p>
    </div>
    <!-- 列表 -->
    <div class="g_lists">
      <div class="row list" v-for="(item,index) in data.goodsLists">
        <div class="i_list MaskHover" :style="calcStyle(index)" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;width:100%;" data-type="co" data-keyword="关键字" data-local="A">
         <img v-bind:src="item.img" width="100%" />
         <div class="MaskBox"  v-if="delNode">
           <p>上传图片的宽为650PX</p>
           <p>
             <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
               <i class="el-icon-upload"></i><span>上传</span>
               <input type="file" v-on:change="advantage($refs.module7enterpriseB[index],index,650)" ref="module7enterpriseB" />
             </a>
             <a href="javascript:void(0)" type="button" class="el-button el-button--danger"   @click="deladvantage(index)">
              <i class="el-icon-delete"></i><span>删除</span>
            </a>
          </p>
        </div>
        </a>
      </div>
      <div class="t_list" :style="floatStyle(index)" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <p class="icon" :style="positionStyle(index)"><span>NO</span><i>{{index+1}}</i></p>
        <div class="content" :style="marginStyle(index)">
          <p class="title1" :style="textAStyle(index)">
            <span v-if="!delNode" style="display:block;width:100%;">{{item.title1}}</span>
            <input class="INputAll" style="display:block;width:100%;" type="text" v-if="delNode" v-model="item.title1" :style="textAStyle(index)"/>
          </p>
          <p class="title2" :style="textAStyle(index)">
            <span v-if="!delNode" style="display:block;width:100%;">{{item.title2}}</span>
            <input class="INputAll" style="display:block;width:100%;" type="text" v-if="delNode" v-model="item.title2" :style="textAStyle(index)"/>
          </p>
          <ul :style="textAStyle(index)">
            <li v-for="(item2,index) in item.li">
              <span v-if="!delNode" style="display:block;width:100%;">{{item2}}</span>
              <textarea class="INputAll" type="text" style="display:block;width:100%;" v-if="delNode" v-model="item.li[index]"/></textarea> 
            </li>
          </ul>

          <div class="buttons" :style="rightStyle(index)">
            <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
              <span v-if="!delNode">{{item.abt1}}</span>
              <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt1"/>
            </a>
            <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
              <span v-if="!delNode">{{item.abt2}}</span>
              <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt2"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="addNode" v-if="delNode" style="width:100%;">
      <a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addadvantage">
        <i class="el-icon-edit"></i><span>添加一行优势</span>
      </a>
    </div>

  </div>
</div>
</div>

<!-- 案例 -->
<div class="cases comT">
  <div class="container">
   <!-- 标题 -->
   <div class="title">
    <p class="line"></p>
    <p class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
      <span v-if="!delNode">{{data.cases.title1}}</span>
      <input class="INputAll" type="text" v-if="delNode" v-model="data.cases.title1"/>
    </p>
    <p class="t_text2" data-scroll-reveal="enter bottom over 0.5s and move 300px">
      <span v-if="!delNode">{{data.cases.title2}}</span>
      <textarea class="INputAll" type="text" v-if="delNode" v-model="data.cases.title2"/></textarea> 
    </p>
  </div>
  <!-- 列表 -->
  <div class="caseLists swiper-container">
    <ul class="swiper-wrapper" data-scroll-reveal="enter bottom over 0.5s and move 300px">
      <li v-for="(item,index) in data.caseUl" class="swiper-slide mol7" data-scale="1.5">
       <div class="topImg MaskHover">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;width:100%;" data-type="co" data-keyword="关键字" data-local="A">
         <img v-bind:src="item.img" width="100%"/>
         <div class="MaskBox"  v-if="delNode">
           <p>上传图片的宽为330PX</p>
           <p>
             <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
               <i class="el-icon-upload"></i><span>上传</span>
               <input type="file" v-on:change="cases($refs.module7enterpriseB2[index],index,330)" ref="module7enterpriseB2" />
             </a>
             <a href="javascript:void(0)" type="button" class="el-button el-button--danger"   @click="casesDel(index)">
              <i class="el-icon-delete"></i><span>删除</span>
            </a>
          </p>
        </div>
        </a>
      </div>
      <div class="title_l">
        <span v-if="!delNode">{{item.title}}</span>
        <input class="INputAll" type="text" style="display:inline-block;" v-if="delNode" v-model="item.title"/>
      </div>
      <div class="middle clearfix">
       <div class="num">
        <span v-if="!delNode">{{item.num}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.num"/>
      </div>
      <div class="time">
        <span v-if="!delNode">{{item.time}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.time"/>
      </div>
    </div>
    <div class="buttons">
      <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
        <span v-if="!delNode">{{item.abt1}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt1"/>
      </a>
      <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
        <span v-if="!delNode">{{item.abt2}}</span>
        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.abt2"/>
      </a>
    </div>
  </li>
</ul>
<div class="addNode" v-if="delNode">
  <a href="javascript:void(0)" type="button" class="el-button el-button--primary" @click="addCases">
    <i class="el-icon-edit"></i><span>添加一个案例</span>
  </a>
</div>
</div>
</div>
</div>

<!-- 选对厂家 -->
<div class="views comT">
  <div class="container">
    <!-- 标题 -->
    <div class="title titleF">
      <p class="line"></p>
      <p class="t_text" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <span v-if="!delNode">{{data.views.title1}}</span>
        <input class="INputAll" type="text" v-if="delNode" v-model="data.views.title1"/>
      </p>
      <p class="t_text2" data-scroll-reveal="enter bottom over 0.5s and move 300px">
        <span v-if="!delNode">{{data.views.title2}}</span>
        <textarea class="INputAll" type="text" v-if="delNode" v-model="data.views.title2"/></textarea> 
      </p>
    </div>
    <!-- 列表 -->
    <div class="v_lists clearfix"  data-scroll-reveal="enter bottom over 0.5s and move 300px">

      <div class="leftImg MaskHover list" v-for="(item,index) in data.viewsUl1">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
      <img v-bind:src="item" width="100%"/>
    </a>
       <div class="MaskBox"  v-if="delNode">
         <p>上传图片的宽为405PX</p>
         <p>
           <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
             <i class="el-icon-upload"></i><span>上传</span>
             <input type="file" v-on:change="views1($refs.module7views[index],index,405)" ref="module7views" />
           </a>

         </p>
       </div>
     </div>
     <div class="secondImg MaskHover list" v-for="(item,index) in data.viewsUl2">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
      <img v-bind:src="item" width="100%"/>
    </a>
       <div class="MaskBox"  v-if="delNode">
         <p>上传图片的宽为435PX</p>
         <p>
           <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
             <i class="el-icon-upload"></i><span>上传</span>
             <input type="file" v-on:change="views2($refs.module7views2[index],index,435)" ref="module7views2" />
           </a>

         </p>
       </div>
     </div>

     <div class="threeImg MaskHover list" v-for="(item,index) in data.viewsUl3">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
      <img v-bind:src="item" width="100%"/>
    </a>
       <div class="MaskBox"  v-if="delNode">
         <p>上传图片的宽为330PX</p>
         <p>
           <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
             <i class="el-icon-upload"></i><span>上传</span>
             <input type="file" v-on:change="views3($refs.module7views3[index],index,330)" ref="module7views3" />
           </a>

         </p>
       </div>
     </div>

     <div class="fourImg MaskHover list" v-for="(item,index) in data.viewsUl4">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
      <img v-bind:src="item" width="100%"/>
    </a>
       <div class="MaskBox"  v-if="delNode">
         <p>上传图片的宽为435PX</p>
         <p>
           <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
             <i class="el-icon-upload"></i><span>上传</span>
             <input type="file" v-on:change="views4($refs.module7views4[index],index,435)" ref="module7views4" />
           </a>

         </p>
       </div>
     </div>
     <div class="fiveImg MaskHover list" v-for="(item,index) in data.viewsUl5">
       <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
      <img v-bind:src="item" width="100%"/>
    </a>
       <div class="MaskBox"  v-if="delNode">
         <p>上传图片的宽为330PX</p>
         <p>
           <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
             <i class="el-icon-upload"></i><span>上传</span>
             <input type="file" v-on:change="views5($refs.module7views5[index],index,330)" ref="module7views5" />
           </a>

         </p>
       </div>
     </div>

            
               
           
     
</div>
 <!-- 按钮 -->
            <div class="buttons" style="padding-left:36%;">
              <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                <span v-if="!delNode">{{data.views.abt1}}</span>
                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.views.abt1"/>
              </a>
              <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                <span v-if="!delNode">{{data.views.abt2}}</span>
                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.views.abt2"/>
              </a>
            </div>

            <div class="none  hidden-lg hidden-md" style="height:50px;"></div>
      </div>
    </div>




<div id="script" ref="script"></div>

</div>
</template>

<script>
  var data = '{"status":200,"msg":"OK","data":{"paramMob":{"cases":{"title1":"客户实拍案例","title2":"15年源头厂家制造，保障信誉，10000+客户的选择，给您最高性价比！"},"viewsUl5":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view5.jpg"],"banner":[{"abt2":"咨询专属客服","abt1":"了解最新价格","bg":"http://page-bucket.oiaqye7985.com/land-page/images/module7/banner.png","title1":"省电高达35%~50%","title2":"进口德国双螺旋杆设备部件","title3":"品质好，寿命高于同行5年时间","title":"变频螺杆式空压机","proBanner":"http://page-bucket.oiaqye7985.com/land-page/images/module7/bannerPro.png"}],"goods":{"title1":"螺杆式空压机细节展示","title2":"细节注重品质，每一个零部件进口欧美国家，只为让您用的放心，性价比更高！"},"products":{"title1":"螺杆式空压机展示","title2":"10年厂家，利用德国设备部件，寿命高于同行5倍，品质有保障！"},"proUl1":["BLT 5螺杆压缩机","BLT 5螺杆压缩机","BLT 5螺杆压缩机","BLT 5螺杆压缩机","BLT 5螺杆压缩机"],"proUl2":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列一低压螺杆压缩机","remark1":"1、采用进口集成机头，设计紧凑，运转平稳；","remark2":"2、降低运营成本，坚持绿色"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列二低压螺杆压缩机","remark1":"1、节约用户的支出成本和润滑油处理费用；","remark2":"2、采用高效油气分离系统"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列三低压螺杆压缩机","remark1":"1、人性化的中文界面设计，操作简便易学；","remark2":"2、采用大转子、低转速，保证机器高性能"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列四低压螺杆压缩机","remark1":"1、加大油气分离设备，出口含油量在2-3ppm；","remark2":"2、独立设计主机内压比，出色的比功率"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列五低压螺杆压缩机","remark1":"1、油冷却器散热面积加大30%以上，保证夏天正常运行；","remark2":"2、采用全合成润滑油，性能出色，节约能源"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列六低压螺杆压缩机","remark1":"1、排期压力高达4.0MPa,排气范围是14-80m3/min；","remark2":"2、节约用户的支出成本和润滑油处理费用"}],"goodsLists":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods1.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"纯铜线电机","title2":"强劲动力  经久耐用","li":["纯铜线电机，高速运转稳定","给你强动力"]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods2.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"散热片","title2":"加强散热","li":["起到保护电机的作用，在断电的情","况下，插电后无需放气","机器可马上启动"]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods3.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"油水分离器 放气阀","title2":"分离空气水分","li":["让气源更干燥","方便调节出气压力","同时变向保护机器"]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods4.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"电磁阀","title2":"断电保护  不惧高温","li":["起到保护电机的作用，在断电的情","况下，插电后无需放气","机器可马上启动"]}],"viewsUl1":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view1.jpg"],"viewsUl2":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view2.jpg"],"viewsUl3":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view3.jpg"],"caseUl":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"}],"viewsUl4":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view4.jpg"],"views":{"abt2":"了解最新优惠","abt1":"联系参观考察","title1":"选对厂家 省心十倍","title2":"注：以下照片是真实工厂拍摄，全程把控，从生产到物流安装，15年专业生产，6600平方生产基地，保障产品，值得信赖！"}},"paramPC":{"cases":{"title1":"客户实拍案例","title2":"15年源头厂家制造，保障信誉，10000+客户的选择，给您最高性价比！"},"viewsUl5":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view5.jpg"],"banner":[{"abt2":"咨询专属客服","abt1":"了解最新价格","bg":"http://page-bucket.oiaqye7985.com/land-page/images/module7/banner.png","title1":"省电高达35%~50%","title2":"进口德国双螺旋杆设备部件","title3":"品质好，寿命高于同行5年时间","title":"变频螺杆式空压机","proBanner":"http://page-bucket.oiaqye7985.com/land-page/images/module7/bannerPro.png"}],"goods":{"title1":"螺杆式空压机细节展示","title2":"细节注重品质，每一个零部件进口欧美国家，只为让您用的放心，性价比更高！"},"products":{"title1":"螺杆式空压机展示","title2":"10年厂家，利用德国设备部件，寿命高于同行5倍，品质有保障！"},"proUl1":["BLT 5螺杆压缩机","BLT 5螺杆压缩机","BLT 5螺杆压缩机","BLT 5螺杆压缩机","BLT 5螺杆压缩机"],"proUl2":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列一低压螺杆压缩机","remark1":"1、采用进口集成机头，设计紧凑，运转平稳；","remark2":"2、降低运营成本，坚持绿色"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列二低压螺杆压缩机","remark1":"1、节约用户的支出成本和润滑油处理费用；","remark2":"2、采用高效油气分离系统"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列三低压螺杆压缩机","remark1":"1、人性化的中文界面设计，操作简便易学；","remark2":"2、采用大转子、低转速，保证机器高性能"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列四低压螺杆压缩机","remark1":"1、加大油气分离设备，出口含油量在2-3ppm；","remark2":"2、独立设计主机内压比，出色的比功率"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列五低压螺杆压缩机","remark1":"1、油冷却器散热面积加大30%以上，保证夏天正常运行；","remark2":"2、采用全合成润滑油，性能出色，节约能源"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg","abt2":"咨询专属客服","abt1":"了解技术参数","title":"BLT L系列六低压螺杆压缩机","remark1":"1、排期压力高达4.0MPa,排气范围是14-80m3/min；","remark2":"2、节约用户的支出成本和润滑油处理费用"}],"goodsLists":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods1.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"纯铜线电机","title2":"强劲动力  经久耐用","li":["纯铜线电机，高速运转稳定","给你强动力"]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods2.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"散热片","title2":"加强散热","li":["起到保护电机的作用，在断电的情","况下，插电后无需放气","机器可马上启动"]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods3.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"油水分离器 放气阀","title2":"分离空气水分","li":["让气源更干燥","方便调节出气压力","同时变向保护机器"]},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods4.jpg","abt2":"了解更多细节","abt1":"联系在线客服","title1":"电磁阀","title2":"断电保护  不惧高温","li":["起到保护电机的作用，在断电的情","况下，插电后无需放气","机器可马上启动"]}],"viewsUl1":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view1.jpg"],"viewsUl2":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view2.jpg"],"viewsUl3":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view3.jpg"],"caseUl":[{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"},{"img":"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg","abt2":"了解服务流程","abt1":"咨询案例细节","num":"采购数量：80（台）","time":"合作时间：3年","title":"万达集团水处理现场"}],"viewsUl4":["http://page-bucket.oiaqye7985.com/land-page/images/module7/view4.jpg"],"views":{"abt2":"了解最新优惠","abt1":"联系参观考察","title1":"选对厂家 省心十倍","title2":"注：以下照片是真实工厂拍摄，全程把控，从生产到物流安装，15年专业生产，6600平方生产基地，保障产品，值得信赖！"}},"modelType":0}}'
  export default {
    data () {
      return {
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
   beforeCreate(){
    this.data=JSON.parse(data).data.paramPC
   },
  created(){
   // this.data=this.GLOBAL.json
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
    calcStyle(index) {
      var style = {}
      if (index % 2 !== 0) {
        style = {position: 'absolute',right:0}
      }
      return style
    },
    positionStyle(index) {
      var style = {}
      if (index % 2 == 0) {
        style = {position: 'absolute',right:'20px'}
      }else {
        style = {position: 'absolute',left:'20px',top:'-39px'}
      }
      return style
    },
    textAStyle(index) {
      var style = {}
      if (index % 2 == 0) {
        style = {textAlign: 'left'}
      }else {
        style = {textAlign: 'right'}
      }
      return style
    },
    rightStyle(index) {
      var style = {}
      if (index % 2 !== 0) {
        style = {right: '50px'}
      }else {
        style = {left: '50px'}
      }
      return style
    },
    floatStyle(index){
      var style = {}
      if (index % 2 == 0) {
        style = {float: 'right'}
      }else {
        style = {float: 'none'}
      }
      return style
    },
    marginStyle(index){
      var style = {}
      if (index % 2 !== 0) {
        style = {marginTop: '28px'}
      }else {
        style = {marginTop: '39px'}
      }
      return style
    },
    // moStyle(){
    //   if($(document.body).width()<768){
    //     console.log(1111)
    //     $('.g_lists .i_list').attr('style','position:relative');
    //   }
    // },
    //内容编辑区
    head(input_file,index,maxWidth){
      var _this=this;
      console.log(input_file)
        this.dataImg(_this,input_file,maxWidth,
          function(str){
             _this.data.banner[index].bg= str
        })
        input_file.value=''
    },
    Mhead(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.banner[index].proBanner= str
        })
        input_file.value=''
    },
    products(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.proUl2[index].img=str
        })
        input_file.value=''
    },
    advantage(input_file,index,maxWidth){
      var _this=this;
      // console.log(input_file)
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            // console.log(str)
            _this.data.goodsLists[index].img=str
        })
        input_file.value=''
    },
    cases(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.caseUl[index].img=str
        })
        input_file.value=''
    },
    views1(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.viewsUl1.splice(index,1,str)
        })
      input_file.value=''
    },
    views2(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.viewsUl2.splice(index,1,str)
        })
      input_file.value=''
    },
    views3(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.viewsUl3.splice(index,1,str)
        })
      input_file.value=''
    },
    views4(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.viewsUl4.splice(index,1,str)
        })
      input_file.value=''
    },
    views5(input_file,index,maxWidth){
      var _this=this;
      this.dataImg(_this,input_file,maxWidth,
        function(str){
          _this.data.viewsUl5.splice(index,1,str)
        })
      input_file.value=''
    },
    addbanner(){
       this.data.banner.push({
       "bg":"http://page-bucket.oiaqye7985.com/land-page/images/module7/banner.png",
       "proBanner":"http://page-bucket.oiaqye7985.com/land-page/images/module7/bannerPro.png",
       "title":"变频螺杆式空压机",
       "title1":"省电高达35%~50%",
       "title2":"进口德国双螺旋杆设备部件",
       "title3":"品质好，寿命高于同行5年时间",
       "abt1":"了解最新价格",
       "abt2":"咨询专属客服"})
      // this.data.Mbanner.push("http://page-bucket.oiaqye7985.com/land-page/images/Mbanner.jpg")
    },
    addproductRightr(){
      this.data.proUl2.push({
        img:"http://page-bucket.oiaqye7985.com/land-page/images/module7/pro.jpg",
        title:"BLT L系列低压螺杆压缩机",
        remark1: "1、排期压力高达4.0MPa,排气范围是14-80m3/min；",
        remark2: "2、节约用户的支出成本和润滑油处理费用",
        abt1:"了解技术参数",
        abt2:"咨询专属客服"
      })
    },
    addCases(){
      this.data.caseUl.push({
        img:"http://page-bucket.oiaqye7985.com/land-page/images/module7/case.jpg",
        title:"某某水处理厂",
        num:"采购数量：80（台）",
        time:"合作时间：3年",
        abt1:"咨询案例细节",
        abt2:"了解服务流程"})
    },
    addadvantage(){
      this.data.goodsLists.push({
        img:"http://page-bucket.oiaqye7985.com/land-page/images/module7/goods4.jpg",
        title1:"电磁阀",
        title2:"断电保护  不惧高温",
        li:[  
        "起到保护电机的作用，在断电的情",
        "况下，插电后无需放气",
        "机器可马上启动"
        ],
        abt1:"联系在线客服",
        abt2:"了解更多细节"
      })
    },
    delbanner(index){
      this.data.banner.splice(index,1)
      this.data.Mbanner.splice(index,1)
    },
    productRightDel(index){
      this.data.proUl2.splice(index,1)
    },
    casesDel(index){
      this.data.caseUl.splice(index,1)
    },
    deladvantage(index){
      this.data.goodsLists.splice(index,1)
    },
    addClass(){
      this.data.proUl1.push("BLT 5螺杆压缩机")
    },
    delClass(){
      var ind = this.data.proUl1.length
      this.data.proUl1.splice(ind-1,1)
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
 .module7 h1, .module7 h2 {
    font-weight: normal;
  }
  .module7 ul {
    list-style-type: none;
  }
  .module7 a {
    color: #fff;
    text-decoration: none;
  }

.module7 .posiBanner {
  }
  .module7 .content .centerPro{
    position: absolute;
    left: 35%;
    top:22%;
    z-index: 100;
    transform: translateX(-50%);
  }
  .module7 .content .rightBanenr{
    position: absolute;
    left: 55%;
    top: 22%;
    z-index: 100;
  }
  .module7 .banner {
   position: relative;
 }
 .module7 .rightBanenr .title {
   color: #0060be;
   font-size: 47px;
   font-weight: 700;
   text-align: left;
 }
 .module7 .rightBanenr .title input {
  color: #0060be;
  font-weight: 700;
  text-align: left
}
.module7 .rightBanenr .title1 {
 color: #111111;
 font-size: 28px;
 margin-top:20px;
 text-align: left;
}
.module7 .rightBanenr .title1 input {
  color: #111111;
  width: 70%;
  text-align: left;
}

.module7 .bottonsAdd {
margin-top:30px;
text-align: left;
}
.module7 .bottonsAdd a {
  background-color: #0060be;
  height: 50px;
  line-height: 50px;
  color: #fff;
  margin-right: 25px;
  font-size: 21px;
  width: inherit;
  padding:0 30px;
}
.module7 .bottonsAdd a:nth-child(2){
  background-color: #efbb2b;
}

  
  @media (min-width: 1200px){
   .module7 .container {
      /*max-width: 1190px;*/
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


  .addMas {
    height: 140px;
    z-index: 999;
  }
  #html-content  .clearfix:after,
  #html-content  .clearfix:before {
    content: "\0020";
    display: block;
    height: 0;
    clear: both; 
  }
  #html-content  .clearfix {
    zoom: 1; 
  }
  .module7 .top i {
    display: inline-block;
    background-color: transparent;
    margin: 0;
  }
  .module7 select,
  .module7 input,
  .module7 textarea {
    outline: none;
    background: none;
    border:none;
  }
  .module7 input{
    text-align: center;
    /*border:1px dashed #ccc;*/
  }
  .module7 textarea {
    width: 100%;
    height: 30px;
    text-align: center;
  }
  #html-content {
    margin:0px auto;
    font-family: "微软雅黑"; 
  }
  .module7 {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
  }
  .module7 .banner  {
    width: 100%;
  }

  .module7 .banner img{
    /*width: 100%;*/
  }
  .module7 .addNode {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .module7 .products {
    width: 100%;

  }
  .module7 .buttons input {
    text-align: center;
    color: #fff;
    /*padding-left:5px;*/
    width: 150px;
  }
  .module7 .comT .title{
    background-color: transparent;
  }
  .module7 .products >.container {
    width: 1200px;
    background-color: #fff;
    z-index: 10;
    margin:0 auto;
    padding:0;
  }
  .module7 .products .title {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding-top: 75px;
    margin-top: -30px;
  }
  .module7 .comT .title {
    position: relative;
    width: 100%;
    /*background-color: #fff;*/
    padding-top: 75px;
    text-align: center;
  }
  .module7 .comT .title .line {
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }
  .module7 .comT .title .t_text{
    display: inline-block;
    background-color: #fff;
    color: #0060be;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 5px;
    padding: 5px 10px;
   /* position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    top: 50px;
    padding: 0 40px;*/
    /*text-align: center;*/
    margin-top:-40px;
    vertical-align: top;
  }

  .module7 .comT .title .t_text input {

    font-size: 36px;
    font-weight: 700;
    letter-spacing: 5px;
    color: #0060be;

  }
  .module7 .comT .title .t_text2 {
    text-align: center;
    margin-top: 5px;
    font-size: 20px;
    color: #333;
  }
  .module7 .comT .title .t_text2 textarea {
    font-size: 20px;
    color: #333;
  }
  .module7 .products .pro_lists {
    margin-top: 40px;
  }
  .module7 .products .pro_lists ul.ulTop {
    padding-left: 1%;
    margin: 0 auto;
    text-align: center;
    /*display: inline-block;*/
  }
  .module7 .products .pro_lists ul.ulTop li{
    width: 18%;
    height: 50px;
    border-radius: 10px;
    border:1px solid #ccc;
    /*float: left;*/
    display: inline-block;
    text-align: center;
    line-height: 50px;
    margin-right: 20px; 
    padding: 0 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .module7 .products .pro_lists ul.ulTop li:nth-child(5n){
     /*margin-right:0;*/
  }
  .module7 .products .pro_lists ul.ulTop li:last-child {
    /*margin-right:0;*/
  }
  .module7 .products .pro_lists ul.ulTop li span {
    color: #222;
    font-size: 18px;
  }
  .module7 .products .pro_lists ul.ulTop li input {
     color: #222;
    font-size: 18px;
  }
  .module7 .products .pro_lists ul.ulTop li:hover{
    background-color: #0060be;
  }
  .module7 .products .pro_lists ul.ulTop li:hover span,
  .module7 .products .pro_lists ul.ulTop li:hover input{
    color: #fff;
  }
  .module7 .products ul.ulBottom{
    margin-top: 50px;
  }
  .module7 .products ul.ulBottom li {
    float: left;
    width: 30%;
    margin-right: 3%;
    position: relative;
    margin-bottom: 40px;
  }
  .module7 .products ul.ulBottom li:nth-child(3n){
    margin-right: 0;
  }
  .module7 .products ul.ulBottom li .top a {
   /*width: 100%;*/
 }
 .module7 .products ul.ulBottom li .top {
  border: 2px solid #eee;
  width: 100%;
}
.module7 .products ul.ulBottom li  p.title_pro {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #eee;
  color: #333;
  font-size: 18px;
  /*position: absolute;
  left: 0;
  bottom: 0;*/
  margin-bottom: 0;
  padding: 0 10px;
  overflow: hidden;

}
.module7 .products ul.ulBottom li .top img {
  width: 100%;
}
.module7 .products ul.ulBottom li .remark {
  margin-top: 10px;
  width: 100%;
  /*height: 60px;*/
  color: #333;
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  height: 30px;
  overflow: hidden;

}
.module7 .products ul.ulBottom li .remark1{
  color: #333;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: left;
  height: 30px;
  overflow: hidden;
}
.module7 .products ul.ulBottom li .remark input,.module7 .products ul.ulBottom li .remark1 input {
  text-align: left;
}
.module7 .products ul.ulBottom li .buttons {
  margin-top:10px;
}
.module7 .products ul.ulBottom li .buttons a {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  display: inline-block;
  background-color: #0060be;
  text-align: center;
  font-size: 16px;
}
.module7 .products ul.ulBottom li .buttons a:last-child {
  background-color: #eebb2d;
  margin-left: 30px;
}
.module7 .goods {
  width: 100%;
  background-color: #eeeeee;
  margin-top: 60px;
  padding-bottom: 30px;
}
.module7 .products ul.ulBottom li .top{
  border: 2px solid #0060be;
}
.module7 .products ul.ulBottom li p.title_pro{
  background-color: #0060be;
  color: #fff;
}
.module7 .products ul.ulBottom li  p.title_pro input{

  color: #fff;
}
.module7 .goods .title .t_text {
  background-color: #eee;
}
.module7 .goods .g_lists {
  margin-top: 60px;
  position: relative;
}
.module7 .goods .t_list {
  width: 44%;
  position: relative;
}
.module7 .goods .g_lists .list {
  margin-bottom: 50px;
}
.module7 .goods .g_lists .list p.icon {
  width: 100px;
  height: 100px;
  line-height: 100px;
  background-color: #0060be;
  z-index: 100;
  text-align: center;
}
.module7 .goods .g_lists .list div.content {
  width: 100%;
  background-color: #fff;
  margin-top:51px;
  padding-left: 50px;
  height: 410px;
  position: relative;
  padding-top: 60px;
  text-align: left;
  padding-right: 50px;
  /*box-sizing: border-box;*/
}
.module7 .goods .g_lists .list p.icon span {
  color: #fff;
  font-family: Impact;
  font-size: 40px;
  margin-right: 5px;
}
.module7 .goods .g_lists .list .t_list {
  padding:0;
}
.module7 .goods .g_lists .list p.icon i {
  color: #fff;
  font-family: Impact;
  font-size: 70px;
  font-style: normal;
}
.module7 .goods .content .title1 {
  /*text-align: left;*/
  font-size: 38px;
  font-weight: 700;
  color: #0060be;
  margin-bottom: 0
}
.module7 .goods .content .title1 input {
  color: #0060be;
  font-weight: 700;
  text-align: left;
}
.module7 .goods .content .title2 {
  /*text-align: left;*/
  font-size: 26px;
  font-weight: 700;
  color: #555;
  margin-top:10px;
  margin-bottom: 0;
}
.module7 .goods .content .title2 input {
  color: #555;
  font-weight: 700;
  text-align: left;
}
.module7 .goods .content ul {
  padding:0;
  margin:0;
}
.module7 .goods .content li {
  /*text-align: left;*/
  font-size: 22px;
  color: #777;
  margin-top:10px;
  margin-bottom: 0;
}
.module7 .goods .content li textarea {
  color: #777;
  text-align: left;
}
.module7 .goods .content .buttons {
  /*text-align: left;*/
  position: absolute;
  bottom: 40px;
}
.module7 .goods .content .buttons a {
 width: 150px;
 height: 40px;
 line-height: 40px;
 border-radius: 10px;
 display: inline-block;
 background-color: #0060be;
 text-align: center;
 font-size: 16px;
}
.module7 .goods .content .buttons a:last-child {
  background-color: #eebb2d;
  margin-left: 30px;
}
.module7 .cases {
  margin-top: 50px;
  background-color: #fff;
}
.module7 .cases ul {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
.module7 .cases ul li{
  width: 30%;
  margin-right: 5%;
  margin-bottom: 40px;
}
.module7 .cases ul li:nth-child(3n){
  margin-right: 0;
}
.module7 .cases ul li .topImg {
  width: 100%;
}
.module7 .cases ul li .topImg img{
  border: 5px solid #0060be;
  transition: all 0.6s;
}
@media (min-width: 768px) {
  .module7 .cases ul li:hover .topImg img {
  -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
}
}
.module7 .cases ul li .title_l {
  color: #333;
  font-size: 18px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.module7 .cases ul li .title_l input {
  color: #333;
}
.module7 .cases ul li .middle {
  width:100%;
  color: #333;
  font-size: 17px;
  text-align: center;
}
.module7 .cases ul li .middle div {
  float: left;
  width: 50%;
}
.module7 .cases ul li .middle div input {
 color: #333;
}
.module7 .cases ul li  .buttons {
  /*text-align: left;*/
  margin-top:20px;
}
.module7 .cases ul li .buttons a {
 width: 150px;
 height: 40px;
 line-height: 40px;
 border-radius: 10px;
 display: inline-block;
 background-color: #0060be;
 text-align: center;
 font-size: 16px;
}
.module7 .cases ul li .buttons a:last-child {
  background-color: #eebb2d;
  margin-left: 20px;
}
.module7 .views {
  width: 100%;
  padding-bottom: 40px;
  background-color: #eee;
}
.module7 .views .container {
  padding:0;
}
.module7 .views .title .t_text {
  background-color: #eee;
}
.module7 .views .v_lists {
  margin-top: 40px;
}
.module7 .views .v_lists .list {
  float: left;
}

.module7 .views  .buttons {
  /*text-align: left;*/
  margin-top:40px;
}
.module7 .views .buttons a {
 width: 150px;
 height: 40px;
 line-height: 40px;
 border-radius: 10px;
 display: inline-block;
 background-color: #0060be;
 text-align: center;
 font-size: 16px;
}
.module7 .views .buttons a:last-child {
  background-color: #eebb2d;
  margin-left: 30px;
}
.module7 .g_lists .i_list {
    width:55.5%;
    float: left;
  }
  .module7 .g_lists .t_list {
    width:44.5%;
    float: right;
  }
@media (max-width: 768px){
  .module7 .products >.container {
    width: 100%;
  }
  .module7 .comT .title{
    padding-top: 1.5rem;
    margin-top:20px;
  }
  .module7 .goods .content .title1{
    font-size: 24px;
  }
  .module7 .comT .title .t_text {
    font-size: 18px;
   /* padding: 0 7px;
    top: 1rem;
    letter-spacing: 2px;
    left: 48%;*/
    margin-top: -20px;
  }
  .module7 .comT .title .t_text input{
    font-size: 1.2rem;
  }
  .module7 .comT .title .t_text2 {
    font-size: 16px;
    padding:0 10px;
  }
  .module7 .comT .title .t_text2 textarea {
    font-size: 1rem;
  }
  .module7 .products .pro_lists {
    margin-top: 1.5rem;
  }
  .module7 .products .pro_lists ul.ulTop {
    padding-left: 5%;
  }
  .module7 .products .pro_lists ul.ulTop li {
    width: 41%;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    padding: 0 10px;
  }
  /*.module7 .products .pro_lists ul.ulTop li:nth-child(4){
    margin-left: 15%;
  }*/
  .module7 .cases ul {
    padding: 0;
  }
  .module7 .products .pro_lists ul.ulTop li input {
    font-size: 0.8rem;
  }
  .module7 .products ul.ulBottom li {
    width: 86%;
    margin-left: 7%;
  }
  .module7 .products ul.ulBottom li .buttons a {
    width: inherit;
    padding: 0 10px;
    /*margin-left: 8%;*/
  }
  .module7 .goods {
    margin-top:1.5rem;
    /*padding-top: 1.5rem;*/
  }
  .module7 .goods .t_list {
    width: 100%;
  }
  .module7 .goods .g_lists {
    margin-top: 1rem;
  }
  .module7 .cases {
    padding-bottom: 55px;
    margin-top: 0;
  }
  .module7 .cases ul li {
    width: 90%;
    margin: 0;
  }
.module7 .cases ul li .buttons {
  margin-left: 12%;
}
  .module7 .cases ul li .buttons a {
    width: inherit;
    padding: 0 10px;
  }
  .module7 .views {
    /*padding-top: 1.5rem;*/
  }
  .module7 .leftImg {
    width: 100%;
  }
  .module7 .secondImg {
    width: 57%;
  }
  .module7 .threeImg {
    width: 43%;
  }
  .module7 .fourImg {
    width: 57%;
  }
  .module7 .fiveImg {
    width: 43%;
  }
  .module7 .products ul.ulBottom {
    margin-top: 1rem;
  }
  .module7 .goods .content .buttons a {
    width: inherit;
    padding: 0 10px;
  }
  .module7 .g_lists .i_list {
    position: relative !important;
    float: none !important;
    width:100%;
  }
  .module7 .products .pro_lists ul.ulTop li span {
    font-size: 14px;
  }
  .module7 .views .buttons {
    padding-left: 12% !important;
  }
  .module7 .views .buttons a{
    width: inherit;
    padding: 0 10px;
  }
  .module7 .goods .content .title2{
    font-size: 22px;
  }
  .module7 .cases ul {
    flex-wrap: nowrap;
  }
  .module7 .cases ul li {}
  .module7 .goods .content li {
    font-size: 18px;
  }
  .module7 .goods .g_lists .list div.content {
    height: inherit;
    padding-bottom: 100px;
  }
  .module7 .cases ul li .middle {
    font-size: 15px;
  }
  .module7 .swiper-container {
    padding:0;
    margin: 0;
  }
  .module7 .products ul.ulBottom li .buttons {
    padding-left: 20%;
  }
  .module7 .products ul.ulBottom li {
    margin:0;
    padding:0 1%;
    margin-left: 5%;
  }
}

@media (max-width: 768px){
  .module7 .content .centerPro{
    left: 50%;
    top: 60px;
  }
    .module7 .content .rightBanenr{
      position: static;
    }
    .module7 .rightBanenr .title {
      margin-top: -13px;
      font-size: 25px;
      text-align: center;
    }
    .module7 .rightBanenr .title1 {
      font-size: 20px;
      text-align: left;
      margin-left: 5%;
    }
    .module7 .rightBanenr .titleM {
      margin-top: 165px;
    }
    .module7 .bottonsAdd{
      text-align: center;
    }
    .module7 .bottonsAdd a {
      padding: 0 10px;
      font-size: 16px;
      margin-right: 3px;
    }
    .posiBanner {
      display: none;
    }
    .module7 .products ul.ulBottom li{
      width: 43%;
      margin-bottom: 20px;
    }

    .module7 .products ul.ulBottom li p.title_pro{
      height: 40px;
      line-height: 40px;
      font-size: 12px;
    }

    .module7 .products ul.ulBottom li .remark,.module7 .products ul.ulBottom li .remark1{
      margin-top: 10px;
      font-size: 12px;
      height: 20px;
      overflow: hidden;
    }
    .module7 .products ul.ulBottom li .buttons a {
      font-size: 14px;
      margin-bottom: 10px;
      height: 35px;
      line-height: 35px;
    }
    .module7 .products ul.ulBottom li .buttons a:last-child {
      margin-left: 0;
    }
}
</style>

