<template>
    <div id="html-content" class="module18">
        <!-- PC-banner开始 -->
        <div class="PCbanner hidden-sm hidden-xs" style="-webkit-background-size: cover;background-size: cover;" :style="PCbanner()">
            <div class="w17">
                <div class="title">
                    <span class="bigTitle" v-if="!delNode">{{data.bannerTitle1}}</span>
                    <input v-if="delNode" type="text" class="bigTitle" maxlength="10" v-model="data.bannerTitle1">
                    <span class="smallTitle" v-if="!delNode">{{data.bannerTitle2}}</span>
                    <input v-if="delNode" type="text" class="smallTitle" maxlength="12" v-model="data.bannerTitle2">
                </div>
                <div class="adv">
                    <ul class="colAdv">
                        <li v-for="(item,index) in data.adv" :style="{backgroundColor:data.color}">
                            <span v-if="!delNode">{{item}}</span>
                            <input v-if="delNode" type="text" maxlength="4" v-model="data.adv[index]">
                        </li>
                    </ul>
                </div>
                <div class="bannerPro">
                    <ul class="colPro">
                        <li v-for="(item,index) in data.bannerPro">
                            <div class="leftImg MaskHover">
                                <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                                   <img v-bind:src="item.url" width="100%"/>
                                   <div class="MaskBox addMas" v-if="delNode">
                                        <p>上传banner上的产品图宽为375px</p>
                                        <p>
                                            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                                <i class="el-icon-upload"></i><span>上传图片</span>
                                                <input type="file" @change="bannerPros($refs.f8[index],index,375)" ref="f8"/>
                                            </a> 
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div class="indroduce">
                                <span v-if="!delNode">{{item.name}}</span>
                                <input v-if="delNode" type="text" maxlength="10" v-model="item.name">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="addNode" v-if="delNode">
                    <el-button type="primary" icon="el-icon-edit" @click="proAdd">添加一块产品(最多3个)</el-button>
                    <el-button type="danger" icon="el-icon-delete"  @click="proDel">删除一块产品(最少2个)</el-button>
                </div>
                <div class="btns">
                    <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                        <span v-if="!delNode">{{data.btnBanner}}</span>
                        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btnBanner"/>
                    </a><a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="otherBtn">
                        <span v-if="!delNode">{{data.btnBanner2}}</span>
                        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.btnBanner2"/>
                    </a>
                </div>
                <div class="have">
                    <span v-if="!delNode" class="abSpan">{{data.have}}</span>
                    <input v-if="delNode" class="abSpan" type="text" maxlength="3" v-model="data.have">
                </div>
                <div class="mImgBanner hidden-xs hidden-sm" v-if="delNode" style="margin-top: 100px;">
                    移动端banner图预览：
                    <img v-bind:src="data.MbannerUrl" alt="" width="30%">
                </div>
            </div>
        </div>
        <!-- 移动端banner开始 -->
        <div class="mBanner hidden-md hidden-lg" style="-webkit-background-size: cover;background-size: cover;" :style="Mbanner()">
            <div class="titleM">{{data.bannerTitle1}}</div>
            <div class="titleM2">{{data.bannerTitle2}}</div>
            <div class="adv">
                <ul class="colAdv">
                    <li v-for="(item,index) in data.adv" :style="{backgroundColor:data.color}">{{item}}</li>
                </ul>
            </div>
            <div class="imgMpro" v-for="(item,index) in data.bannerPro">
                <img v-bind:src="item.url" alt="" width="50%" v-if="index==0">
            </div>
            <div class="btns">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">{{data.btnBanner}}</a><a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="otherBtn">{{data.btnBanner2}}</a>
            </div>
        </div>
        <!-- 移动端banner结束 -->
        <div class="addNode" v-if="delNode">
                <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                    <i class="el-icon-upload"></i><span>上传PC端banner图(1920*820)</span>
                    <input type="file" v-on:change="bannerP($refs.f1,1920,820)" ref="f1" />
                </a> 
                <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                    <i class="el-icon-upload"></i><span>上传移动端banner图(750*1040)</span>
                    <input type="file" v-on:change="bannerM($refs.f2,750,1040)" ref="f2" />
                </a> 
        </div>
        <!-- PC-banner结束 -->
        <!-- 优势开始 -->
        <div class="goods hidden-sm hidden-xs">
            <div class="w17">
                <div class="oneGoods">
                    <div class="leftImgG MaskHover">
                            <img v-bind:src="data.goodsImgUrl" v-if="data.goods1.ifimg"/>
                           
                            <video  v-bind:poster="data.goodsImgUrl" class="listvideo" v-if="!data.goods1.ifimg">
                                <source v-bind:src="data.goods1.video" type="video/mp4">
                            </video>
                            <div class='videoBackground' v-if="!data.goods1.ifimg"><img src='http://page-bucket.oiaqye7985.com/1555292024925.png'/></div>
                           <div class="MaskBox addMas" v-if="delNode">
                                <p>
                                    <span>上传图片宽为530px</span>
                                    <span v-show="!data.goods1.ifimg"> 上传视频的大小不能超过20M</span>
                                </p>
                                <p>
                                    <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                        <i class="el-icon-upload"></i><span>上传图片</span>
                                        <input type="file" @change="goodsImg1($refs.f9,530)" ref="f9"/>
                                    </a>
                                    <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!data.goods1.ifimg">
                                        <i class="el-icon-upload" ></i><span>上传视频</span>
                                        <input type="file" ref="f13" @change="f13Video($refs.f13)"/>
                                    </a>
                                </p>
                                <p style="padding-top: 10px;">
                                    <el-button  icon="iconfont  icon-weibiaoti--" @click="data.goods1.ifimg=!data.goods1.ifimg">
                                        <span v-show="data.goods1.ifimg">切换为视频上传</span>
                                        <span v-show="!data.goods1.ifimg">切换为图片上传</span>
                                    </el-button>
                                </p>
                            </div>
                            <div class="botText">
                                <div class="leftBot" :style="{backgroundColor:data.color}">
                                    <span v-if="!delNode" >{{data.goods1.bot1}}</span>
                                    <input v-if="delNode" type="text" maxlength="10" v-model="data.goods1.bot1">
                                </div>
                                <div class="sanjiao" :style="{borderTopColor:data.color,borderLeftColor:data.color}"></div>
                                <div class="rightBot">
                                    <span v-if="!delNode" >{{data.goods1.bot2}}</span>
                                    <input v-if="delNode" type="text" maxlength="15" v-model="data.goods1.bot2">
                                </div>
                            </div>
                    </div>
                    <div class="rightText">
                        <div class="titleG">
                            <span v-if="!delNode" :style="{color:data.color}" class="textTitle">{{data.goods1.title1}}</span>
                            <input v-if="delNode" :style="{color:data.color}" class="textTitle" type="text" maxlength="10" v-model="data.goods1.title1">
                            <span v-if="!delNode">{{data.goods1.title2}}</span>
                            <input v-if="delNode" type="text" maxlength="20" v-model="data.goods1.title2">
                        </div>
                        <div class="titleG1">
                            <span v-if="!delNode">{{data.goods1.title3}}</span>
                            <input v-if="delNode" type="text" maxlength="30" v-model="data.goods1.title3">
                        </div>
                        <div class="lineG"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module18/imgss/line.png" alt=""></div>
                        <div class="titleG2">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            <span v-if="!delNode">{{data.goods1.title4}}</span>
                            <input v-if="delNode" type="text" maxlength="50" v-model="data.goods1.title4">
                        </div>
                        <div class="titleG3">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            <span v-if="!delNode">{{data.goods1.title5}}</span>
                            <input v-if="delNode" type="text" maxlength="50" v-model="data.goods1.title5">
                        </div>
                        <div class="btnsGoods">
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                                <span v-if="!delNode">{{data.goods1.gBtn1}}</span>
                                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goods1.gBtn1"/>
                            </a>
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="otherBtn">
                                <span v-if="!delNode">{{data.goods1.gBtn2}}</span>
                                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goods1.gBtn2"/>
                            </a>
                        </div>
                    </div>
                    <div class="topText">
                        <span v-if="!delNode">{{data.goods1.support}}</span>
                        <textarea v-if="delNode" type="text" maxlength="25" v-model="data.goods1.support"></textarea>
                    </div>
                </div>
            </div>
            <div class="twoGoods" style="-webkit-background-size: cover;background-size: cover;" :style="googsBanner()">
                <div class="w17">
                    <div class="leftText">
                        <div class="oneleft">
                            <i class="icons iconfont icon-wuliuxinxi" :style="{borderColor:data.color,color:data.color}"></i>
                            <span v-if="!delNode">{{data.goods2.title11}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:220px;" v-model="data.goods2.title11" />
                            <span v-if="!delNode" :style="{color:data.color}">{{data.goods2.title12}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:55px;" :style="{color:data.color}" v-model="data.goods2.title12"/>
                            <span v-if="!delNode">{{data.goods2.title13}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:55px;" v-model="data.goods2.title13"/>
                        </div>
                        <div class="oneleft">
                            <i class="icons iconfont icon-huojian" :style="{borderColor:data.color,color:data.color}"></i>
                            <span v-if="!delNode" :style="{color:data.color}">{{data.goods2.title21}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:110px;" :style="{color:data.color}" v-model="data.goods2.title21"/>
                            <span v-if="!delNode">{{data.goods2.title22}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:135px;" v-model="data.goods2.title22"/>
                            <span v-if="!delNode" :style="{color:data.color}">{{data.goods2.title23}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:75px;" :style="{color:data.color}" v-model="data.goods2.title23"/>
                            <span v-if="!delNode">{{data.goods2.title24}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:30px;" v-model="data.goods2.title24"/>
                        </div>
                        <div class="oneleft">
                            <i class="icons iconfont icon-dianzan" :style="{borderColor:data.color,color:data.color}"></i>
                            <span v-if="!delNode" :style="{color:data.color}">{{data.goods2.title31}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:30px;" :style="{color:data.color}" v-model="data.goods2.title31"/>
                            <span v-if="!delNode">{{data.goods2.title32}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:220px;" v-model="data.goods2.title32"/>
                            <span v-if="!delNode" :style="{color:data.color}">{{data.goods2.title33}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:30px;" :style="{color:data.color}" v-model="data.goods2.title33"/>
                            <span v-if="!delNode">{{data.goods2.title34}}</span>
                            <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;width:210px;" v-model="data.goods2.title34"/>
                        </div>
                        <div class="btnsGoods">
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                                <span v-if="!delNode">{{data.goods2.btnG2}}</span>
                                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.goods2.btnG2"/>
                            </a>
                        </div>
                        <div class="leftGoodsBottom">
                            <div class="leftIcon iconfont icon-shuqian" :style="{color:data.color}">
                                <span v-if="!delNode" style="color:#fff;">{{data.goods2.range}}</span>
                                <textarea v-if="delNode" style="color:#fff;" type="text" maxlength="4" v-model="data.goods2.range"></textarea>
                            </div>
                            <div class="rightTG">
                                <span v-if="!delNode">{{data.goods2.title4}}</span>
                                <textarea class="INputAll" v-if="delNode" style="display:inline-block;" v-model="data.goods2.title4"/></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="rightImgS">
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                           <div class="MaskBox addMas" v-if="delNode">
                                <p>上传图片宽为1920px</p>
                                <p>
                                    <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                        <i class="el-icon-upload"></i><span>上传图片</span>
                                        <input type="file" @change="goodsP($refs.f7[index],index,1920)" ref="f7"/>
                                    </a> 
                                </p>
                            </div>
                         </a>
                    </div>
                </div>
            </div>
            <div class="imgmidView" style="margin-top:10px;" v-if="delNode">
                        移动端优势图预览：<img :src="data.MgoodsUrl" alt="" width="40%">
            </div>
            <div class="addNode" v-if="delNode" style="margin-top: 20px;">
                <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                    <i class="el-icon-upload"></i><span>上传PC端优势背景图(1920*500)</span>
                    <input type="file" v-on:change="goodsP($refs.f3,1920,500)" ref="f3" />
                </a> 
                <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                    <i class="el-icon-upload"></i><span>上传移动端优势背景图(750*500)</span>
                    <input type="file" v-on:change="goodsM($refs.f4,750,500)" ref="f4" />
                </a> 
            </div>
        <div class="w17">
                <div class="oneGoods threeGoods" v-for="(item,index) in data.goods3">
                    <div class="leftImgG1 MaskHover" :style="floatStyle(index)">
                        
                           <img v-bind:src="item.url" v-if="item.ifimg"/>
                           <video  v-bind:poster="item.url" class="listvideo" v-if="!item.ifimg">
                                <source v-bind:src="item.video" type="video/mp4">
                            </video>
                            <div class='videoBackground' v-if="!item.ifimg"><img src='http://page-bucket.oiaqye7985.com/1555292024925.png'/></div>
                           <div class="MaskBox addMas" v-if="delNode">
                                <p>
                                    <span>上传图片宽为530px</span>
                                    <span v-show="!item.ifimg"> 上传视频的大小不能超过20M</span>
                                </p>
                                <p>
                                    <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                        <i class="el-icon-upload"></i><span>上传图片</span>
                                        <input type="file" @change="goodsOtherImg($refs.f10[index],index,530)" ref="f10"/>
                                    </a> 
                                    <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!item.ifimg">
                                        <i class="el-icon-upload" ></i><span>上传视频</span>
                                        <input type="file" ref="f14" @change="f14Video($refs.f14[index],index)"/>
                                    </a>
                                </p>
                                <p style="padding-top: 10px;">
                                    <el-button  icon="iconfont  icon-weibiaoti--" @click="item.ifimg=!item.ifimg">
                                        <span v-show="item.ifimg">切换为视频上传</span>
                                        <span v-show="!item.ifimg">切换为图片上传</span>
                                    </el-button>
                                </p>
                            </div>
                            <div class="botText">
                                <div class="leftBot" :style="{backgroundColor:data.color}">
                                    <span v-if="!delNode" >{{item.bot1}}</span>
                                    <input v-if="delNode" type="text" maxlength="10" v-model="data.goods3[index].bot1">
                                </div>
                                <div class="sanjiao" :style="{borderTopColor:data.color,borderLeftColor:data.color}"></div>
                                <div class="rightBot">
                                    <span v-if="!delNode" >{{item.bot2}}</span>
                                    <input v-if="delNode" type="text" maxlength="15" v-model="data.goods3[index].bot2">
                                </div>
                            </div>
                    </div>
                    <div class="rightText1" :style="floatStyle1(index)">
                        <div class="titleG">
                            <span v-if="!delNode" :style="{color:data.color}" class="textTitle">{{item.title1}}</span>
                            <input v-if="delNode" :style="{color:data.color}" class="textTitle" type="text" maxlength="10" v-model="item.title1">
                            <span v-if="!delNode">{{item.title2}}</span>
                            <input v-if="delNode" type="text" maxlength="20" v-model="item.title2">
                        </div>
                        <div class="titleG1">
                            <span v-if="!delNode">{{item.title3}}</span>
                            <input v-if="delNode" type="text" maxlength="30" v-model="item.title3">
                        </div>
                        <div class="lineG"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module18/imgss/line.png" alt=""></div>
                        <div class="titleG2">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            <span v-if="!delNode">{{item.title4}}</span>
                            <input v-if="delNode" type="text" maxlength="50" v-model="item.title4">
                        </div>
                        <div class="titleG3">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            <span v-if="!delNode">{{item.title5}}</span>
                            <input v-if="delNode" type="text" maxlength="50" v-model="item.title5">
                        </div>
                        <div class="btnsGoods">
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                                <span v-if="!delNode">{{item.gBtn1}}</span>
                                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.gBtn1"/>
                            </a>
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="otherBtn">
                                <span v-if="!delNode">{{item.gBtn2}}</span>
                                <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="item.gBtn2"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="addNode" v-if="delNode">
                <el-button type="primary" icon="el-icon-edit" @click="goodsAdd">添加一行优势</el-button>
                <el-button type="danger" icon="el-icon-delete"  @click="goodsDel">删除一行优势</el-button>
            </div>
        </div>
        <!-- 优势结束 -->
        <!-- 移动端优势开始 -->
        <div class="Mgoods hidden-lg hidden-md">
            <div class="oneGoods">
                    <div class="topImgM">
                        
                            <img v-bind:src="data.goodsImgUrl" width="100%" v-if="data.goods1.ifimg"/>
                            <video  v-bind:poster="data.goodsImgUrl" class="listvideo" v-if="!data.goods1.ifimg">
                                <source v-bind:src="data.goods1.video" type="video/mp4">
                            </video>
                            <div class='videoBackground' v-if="!data.goods1.ifimg"><img src='http://page-bucket.oiaqye7985.com/1555292024925.png'/></div>
                            <div class="botText">
                                <div class="leftBot" :style="{backgroundColor:data.color}">{{data.goods1.bot1}}</div>
                                <div class="sanjiao" :style="{borderTopColor:data.color,borderLeftColor:data.color}"></div>
                                <div class="rightBot"><span>{{data.goods1.bot2}}</span></div>
                            </div>

                    </div>
                    <div class="rightTextM">
                        <div class="titleG"><span :style="{color:data.color}">{{data.goods1.title1}}</span>{{data.goods1.title2}}</div>
                        <div class="titleG1">{{data.goods1.title3}}</div>
                        <div class="lineG"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module18/imgss/line.png" alt=""></div>
                        <div class="titleG2">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            {{data.goods1.title4}}
                        </div>
                        <div class="titleG3">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            {{data.goods1.title5}}
                        </div>
                        <div class="btnsGoods">
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">{{data.goods1.gBtn1}}</a>
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="otherBtn">
                             {{data.goods1.gBtn2}}</a>
                        </div>
                    </div>
                    <div class="topText"><span>{{data.goods1.support}}</span></div>
                </div>
                <div class="twoGoodsM">
                    <img v-bind:src="data.MgoodsUrl" alt="" width="100%">
                    <div class="migMGoods">
                        <div class="oneleft">
                            <i class="icons iconfont icon-wuliuxinxi" :style="{borderColor:data.color,color:data.color}"></i>
                            {{data.goods2.title11}}
                            <span :style="{color:data.color}">{{data.goods2.title12}}</span>
                            {{data.goods2.title13}}
                        </div>
                        <div class="oneleft">
                            <i class="icons iconfont icon-huojian" :style="{borderColor:data.color,color:data.color}"></i>
                            <span :style="{color:data.color}">{{data.goods2.title21}}</span>
                            {{data.goods2.title22}}
                            <span  :style="{color:data.color}">{{data.goods2.title23}}</span>
                            {{data.goods2.title24}}
                        </div>
                        <div class="oneleft">
                            <i class="icons iconfont icon-dianzan" :style="{borderColor:data.color,color:data.color}"></i>
                            <span :style="{color:data.color}">{{data.goods2.title31}}</span>
                            {{data.goods2.title32}}
                            <span :style="{color:data.color}">{{data.goods2.title33}}</span>
                            {{data.goods2.title34}}
                        </div>
                        <div class="btnsGoods">
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">{{data.goods2.btnG2}}</a>
                        </div>
                    </div>
                </div>
                <div class="oneGoods" v-for="(item,index) in data.goods3">
                    <div class="topImgM">
                        
                            <img v-bind:src="item.url" width="100%" v-if="item.ifimg"/>
                            <video  v-bind:poster="item.url" class="listvideo" v-if="!item.ifimg">
                                <source v-bind:src="item.video" type="video/mp4">
                            </video>
                            <div class='videoBackground' v-if="!item.ifimg"><img src='http://page-bucket.oiaqye7985.com/1555292024925.png'/></div>
                            <div class="botText">
                                <div class="leftBot" :style="{backgroundColor:data.color}">{{item.bot1}}</div>
                                <div class="sanjiao" :style="{borderTopColor:data.color,borderLeftColor:data.color}"></div>
                                <div class="rightBot"><span>{{item.bot2}}</span></div>
                            </div>
          
                    </div>
                    <div class="rightTextM">
                        <div class="titleG"><span :style="{color:data.color}">{{item.title1}}</span>{{item.title2}}</div>
                        <div class="titleG1">{{item.title3}}</div>
                        <div class="lineG"><img src="http://page-bucket.oiaqye7985.com/land-page/images/module18/imgss/line.png" alt=""></div>
                        <div class="titleG2">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            {{item.title4}}
                        </div>
                        <div class="titleG3">
                            <i class="sanjiaos" :style="{borderLeftColor:data.color}"></i>
                            {{item.title5}}
                        </div>
                        <div class="btnsGoods">
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);" :style="{backgroundColor:data.color}" data-type="co" data-keyword="关键字" data-local="A" class="addOpa">{{item.gBtn1}}</a>
                            <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="otherBtn">
                             {{item.gBtn2}}</a>
                        </div>
                    </div>
                </div>
        </div>
        <!-- 移动端优势结束 -->
        <!-- 中间banner开始 -->
        <div class="midBnner hidden-xs hidden-sm" style="-webkit-background-size: cover;background-size: cover;" :style="midbanner()">
             <div class="w17">
                 <div class="titlemid">
                    <span v-if="!delNode">{{data.midBnner.title}}</span>
                    <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.midBnner.title"/>
                 </div>
                 <div class="titlemid1">
                    <i class="fang"></i>
                    <span v-if="!delNode">{{data.midBnner.list1}}</span>
                    <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.midBnner.list1"/>
                 </div>
                 <div class="titlemid2">
                    <i class="fang"></i>
                    <span v-if="!delNode">{{data.midBnner.list2}}</span>
                    <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.midBnner.list2"/>
                 </div>
                 <div class="btnsGoods">
                    <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                        <span v-if="!delNode">{{data.midBnner.btnBnner}}</span>
                        <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.midBnner.btnBnner"/>
                    </a>
                 </div>
             </div>
        </div>
        <div class="midBannerView" v-if="delNode" style="margin-top:10px;">
            移动端中间banner图预览：<img :src="data.MmidBnnerUrl" alt="" width="40%">
        </div>
        <div class="addNode" style="margin-top: 20px;" v-if="delNode">
            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                <i class="el-icon-upload"></i><span>上传PC端中间banner图(1920*415)</span>
                <input type="file" v-on:change="midBannerP($refs.f5,1920,415)" ref="f5" />
            </a> 
            <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                <i class="el-icon-upload"></i><span>上传移动端中间banner图(750*355)</span>
                <input type="file" v-on:change="midBannerM($refs.f6,750,355)" ref="f6" />
            </a> 
        </div>
        <!-- 中间banner结束 -->
        <!-- 中间移动端banner开始 -->
        <div class="MmidBnner hidden-md hidden-lg" style="-webkit-background-size: cover;background-size: cover;" :style="Mmidbanner()">
             <div class="titlemid">{{data.midBnner.title}}</div>
             <div class="titlemid1">
                <i class="fang"></i>
                {{data.midBnner.list1}}
             </div>
             <div class="titlemid2">
                <i class="fang"></i>
                {{data.midBnner.list2}}
             </div>
             <div class="btnsGoods">
                <a href="javascript:void(0)" onclick="clickGXinRong(this);"  data-type="co" data-keyword="关键字" data-local="A" class="addOpa">
                    {{data.midBnner.btnBnner}}
                </a>
             </div>
        </div>
        <!-- 中间移动端banner结束 -->
        <!-- 产品开始 -->
        <div class="products hidden-xs hidden-sm">
            <div class="w17">
                <div class="titleProducts">
                    <span v-if="!delNode">{{data.proTitle}}</span>
                    <input class="INputAll" type="text" v-if="delNode" style="display:inline-block;" v-model="data.proTitle"/>
                </div>
                <ul class="pro">
                    <li v-for="(item,index) in data.products">
                        <div class="proImg MaskHover">
                            
                                <img v-bind:src="item.url" width="100%" v-if="item.ifimg"/>
                                <video  v-bind:poster="item.url" class="listvideo" v-if="!item.ifimg">
                                    <source v-bind:src="item.video" type="video/mp4">
                                </video>
                                <div class='videoBackground' v-if="!item.ifimg"><img src='http://page-bucket.oiaqye7985.com/1555292024925.png'/></div>
                               <div class="MaskBox addMas" v-if="delNode">
                                    <p>
                                        <span>上传banner上的产品图宽为360px</span>
                                        <span v-show="!item.ifimg"> 上传视频的大小不能超过20M</span>
                                    </p>
                                    <p>
                                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox">
                                            <i class="el-icon-upload"></i><span>上传图片</span>
                                            <input type="file" @change="productsImg($refs.f11[index],index,360)" ref="f11"/>
                                        </a>
                                        <a href="javascript:void(0)" type="button" class="el-button el-button--primary filesBox" v-show="!item.ifimg">
                                            <i class="el-icon-upload" ></i><span>上传视频</span>
                                            <input type="file" ref="f15" @change="f15Video($refs.f15[index],index)"/>
                                        </a> 
                                    </p>
                                    <p style="padding-top: 10px;">
                                        <el-button  icon="iconfont  icon-weibiaoti--" @click="item.ifimg=!item.ifimg">
                                            <span v-show="item.ifimg">切换为视频上传</span>
                                            <span v-show="!item.ifimg">切换为图片上传</span>
                                        </el-button>
                                    </p>
                                </div>
                            
                        </div>
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: block;" data-type="co" data-keyword="关键字" data-local="A">
                        <div class="indroduce">
                            <span v-if="!delNode">{{item.title}}</span>
                            <input v-if="delNode" type="text" v-model="item.title">
                        </div>
                        <div class="btnPro">
                            <span v-if="!delNode">{{item.btnpro}}</span>
                            <input v-if="delNode" type="text"  v-model="item.btnpro">
                        </div>
                        </a>
                    </li>                    
                </ul>

                <div class="addNode" v-if="delNode">
                    <el-button type="primary" icon="el-icon-edit" @click="productsAdd">添加一块产品</el-button>
                    <el-button type="danger" icon="el-icon-delete"  @click="productsDel">删除一块产品</el-button>
                </div>


            </div>
        </div>
        <!-- 产品结束 -->
        <!-- 移动产品开始 -->
        <div class="Mproducts hidden-lg hidden-md">
            <div class="container">
                <div class="titleProducts">{{data.proTitle}}</div>
                <ul class="pro clearfix">
                    <li v-for="(item,index) in data.products">
                        <div class="proImg MaskHover">
                            
                                <img v-bind:src="item.url" width="100%" v-if="item.ifimg"/>
                                <video  v-bind:poster="item.url" class="listvideo" v-if="!item.ifimg">
                                    <source v-bind:src="item.video" type="video/mp4">
                                </video>
                                <div class='videoBackground' v-if="!item.ifimg"><img src='http://page-bucket.oiaqye7985.com/1555292024925.png'/></div>
                        </div>
                        <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A">
                        <div class="indroduce">{{item.title}}</div>
                         </a>
                    </li>                    
                </ul>
                <div class="clickView">
                    <a href="javascript:void(0)" onclick="clickGXinRong(this);" style="display: inline-block;" data-type="co" data-keyword="关键字" data-local="A" :style="{backgroundColor:data.color}">
                        点击查看更多产品+ 
                    </a>
                </div>
            </div>
        </div>
        <!-- 移动产品结束 -->
        <div id="script" ref="script"></div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          data:{
            bannerPro:{},
            goods3:{},
            goods2:{},
            goods1:{},
            midBnner:{},
            products:{}
          },
          delNode:true,
          syb_productType:null,//类型流量宝
          colorChoice:true,
          color:[
              '#0169de',
              '#d72626',
              '#10b645',
              '#4648ee'
          ]
      }
  },
  props:["productType","dataJson","deleteNode","Ifcolor"],
  computed: {
      
},
watch: {  
       //监听数据变化
       dataJson(val){
      // this.data=this.GLOBAL.json
      // console.log(this.data)
      this.data=val
      console.log(this.data)
  },
  Ifcolor(val){
      this.data.color=val
      console.log(this.data.color)
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
   // this.data=this.GLOBAL.json
     // this.moStyle()
 },
 mounted(){
      this.sybCode()
      // console.log(this.data)
  },
  updated(){
   this.data=this.dataJson
},
methods:{
    PCbanner(){
        var style = {
            background:"url("+this.data.bannerUrl+")"+" no-repeat" 
        }
        return style;
    },
    Mbanner(){
        var style = {
            background:"url("+this.data.MbannerUrl+")"+" no-repeat center"
        }
        return style;
    },
    googsBanner(){
        var style = {
            background:"url("+this.data.goodsUrl+")"+" no-repeat" 
        }
        return style;
    },
    midbanner(){
        var style = {
            background:"url("+this.data.midBnnerUrl+")"+" no-repeat" 
        }
        return style;
    },
    Mmidbanner(){
        var style = {
            background:"url("+this.data.MmidBnnerUrl+")"+" no-repeat center" 
        }
        return style;
    },
    floatStyle(index){
      var style = {}
      if (index % 2 == 0) {
        style = {left: '0'}
      }else {
        style = {
          right: '0'
        }
      }
      return style
    },
    floatStyle1(index){
      var style = {}
      if (index % 2 == 0) {
        style = {right: '0'}
      }else {
        style = {
          left: '0',
          paddingLeft:'40px'
        }
      }
      return style
    },
    goodsAdd(){
      this.data.goods3.push({
         'url':'http://page-bucket.oiaqye7985.com/land-page/images/images17/imgs/goods1.png',
         'title1':'移动式',
         'title2':'木材切片机',
         'title3':'使用广泛，度电产品量较高，通用性好',
         'title4':'木片长度可在规定的范围内自由调节，维护方便',
         "title5":"单位木片产量能耗低，是国内生产出口木片的理想设备。",
         "gBtn1":"询问当地客户现场  >",
         "gBtn2":"咨询设备报价 >",
         "bot1":"油缸推拉式和手动式",
         "bot2":"产量在每小时２～１６０立方米",
         "ifimg": true,
         "video": ""
     })
    },
    goodsDel(){
       var len = this.data.goods3.length;
      this.data.goods3.splice(len-1,1);
    },
    proAdd(){
      this.data.bannerPro.push({
         url:'http://page-bucket.oiaqye7985.com/land-page/images/images17/imgs/bgoods3.png',
         name:'树枝粉碎机'
     })
    },
    proDel(){
       var len = this.data.bannerPro.length;
        this.data.bannerPro.splice(len-1,1);
    },
    productsAdd(){
      this.data.products.push({
        "url":"http://page-bucket.oiaqye7985.com/land-page/images/images17/imgs/goods5.png",
        "title":"双辊木材剥皮机",
        "btnpro":'咨询此产品 >',
        "ifimg": true,
        "video": ""
     })
    },
    productsDel(){
       var len = this.data.products.length;
        this.data.products.splice(len-1,1);
    },
    //上传PCbanner图片
    bannerP(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.bannerUrl=str
        })
        input_file.value=''
    },
     //上传移动banner图片
    bannerM(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.MbannerUrl=str
        })
        input_file.value=''
    },
    //上传PC优势图片
    goodsP(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.goodsUrl=str
        })
        input_file.value=''
    },
    //上传移动优势图片
    goodsM(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.MgoodsUrl=str
        })
        input_file.value=''
    },
    //上传PC中间banner图片
    midBannerP(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.midBnnerUrl=str
        })
        input_file.value=''
    },
    //上传移动中间banner图片
    midBannerM(input_file,maxWidth,maxHeight){
      var _this=this;
        this.dataImgT(_this,input_file,maxWidth,maxHeight,
          function(str){
            _this.data.MmidBnnerUrl=str
        })
        input_file.value=''
    },
    bannerPros(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.bannerPro[index].url=str
        })
        input_file.value=''
    },
    goodsOtherImg(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.goods3[index].url=str
        })
        input_file.value=''
    },
    goodsImg1(input_file,maxWidth){
            var _this=this;
            this.dataImg(_this,input_file,maxWidth,
                function(str){
                    _this.data.goodsImgUrl=str
            })
            input_file.value=''
        },   
    productsImg(input_file,index,maxWidth){
      var _this=this;
        this.dataImg(_this,input_file,maxWidth,
          function(str){
            _this.data.products[index].url=str
        })
        input_file.value=''
    },  
    imgMpro:function(){
        return this.data.bannerPro[0].url;
    }, 
    f13Video(input_file){
            var _this=this;
            console.log(input_file);
            this.upfileVidel(input_file,_this,
                function(str){
                    console.log(str);
                    _this.data.goods1.video=str
                })
            input_file.value=''
        }, 
    f14Video(input_file,index){
        var _this=this;
        console.log(input_file);
        this.upfileVidel(input_file,_this,
            function(str){
                console.log(str);
                _this.data.goods3[index].video=str
            })
        input_file.value=''
    },
    f15Video(input_file,index){
        var _this=this;
        console.log(input_file);
        this.upfileVidel(input_file,_this,
            function(str){
                console.log(str);
                _this.data.products[index].video=str
            })
        input_file.value=''
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
                  // _this.open("请确保文件为图像类型",'warning')
                  input_file.value=''
                  return false;  
              }  
              if(parseInt(file.size/1024)>700){
                // _this.open("图片不能大于700kb",'warning')
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
ul {
  list-style-type: none;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover,a:link {
    color: #fff;
}
.w17 {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
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
.module18 {
    font-family: "微软雅黑";
    background-color: #f5f5f5;
}
.module18 .addMas {
    /*height: 105px;*/
}
.module18 .addMas p{
    margin:0;
}
.module18 .PCbanner {
    padding-top: 135px;
    padding-bottom: 75px;
    -webkit-background-size: cover;
    background-size: cover;
}
.module18 .PCbanner .bigTitle {
    color: #222a34;
    font-size: 56px;
    font-weight: 700;
    display: inline-block;
    width: 605px;
    margin-left: 65px;
    letter-spacing: 2px;
}
.module18 .PCbanner .smallTitle {
    color: #333333;
    font-size: 38px;
    font-weight: 700;
    display: inline-block;
    width: 465px;
    margin-left: 10px;
}
.module18 .colAdv {
    text-align: center;
    margin-top: 40px;
    padding-left: 0;
}
.module18 .colAdv li {
    width: 210px;
    height: 80px;
    background-color: #0177e0;
    line-height: 80px;
    color: #fff;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    margin-right: 35px;
    /*box-shadow: 0 0 30px #999 inset;*/
}
.module18 .colAdv li input {
    text-align: center;
    width: 100%;
}
.module18 .colAdv li:last-child {
    margin-right: 0;
}
.module18 .colPro {
    text-align: center;
    margin-top: 50px;
    padding-left: 0;
}
.module18 .colPro li {
    width: 30%;
    height: 265px;
    text-align: center;
    display: inline-block;
    margin-right: 5%;
    /*box-shadow: 0 0 30px #999 inset;*/
    position: relative;
}
.module18 .colPro li:last-child {
  margin-right:0;
}
.module18 .colPro .indroduce {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
  width: 260px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(0,0,0,.65);
  color: #fff;
  font-size: 20px;
  display: block;
}
.module18 .colPro img {
    max-height: 265px;
}
.module18 .colPro .MaskBox {
  height: 200px;
}
.module18  .btns {
    text-align: center;
    margin-top: 35px;
}
.module18  .btns a {
  width: 250px;
  height: 65px;
  display: inline-block;
  font-size: 20px;
  text-align: center;
  letter-spacing: 3px;
  line-height: 65px;
  background-color: #3d3d3d;
}
.module18 .btns input {
  width: 100%;
  text-align: center;
}
.PCbanner .w17 {
    position: relative;
}
.module18 .have {
  position: absolute;
  top: -135px;
  right: -150px;
  width: 160px;
  height: 275px;
  background: url("http://page-bucket.oiaqye7985.com/land-page/images/images17/imgs/rt.png") no-repeat top;
  -webkit-background-size: content;
  background-size: content;
  color: #fff;
  font-size: 27px;
}
.module18 .have .abSpan {
    position: absolute;
    bottom: 30px;
    right: 39px;
}
.module18 .have input.abSpan {
    width: 85px;
}
.module18 .goods {
    margin-top: 70px;
}
.module18 .oneGoods {
    position: relative;
    height: 380px;
    width: 100%；
}
.module18 .leftImgG {
    width: 530px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
}
.module18 .oneGoods .MaskBox {
    height: 80%;
}
.module18 .botText {
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
}
.module18 .botText>div {
    float: left;
    text-align: center;
}
.module18 .botText>div>input {
    text-align: center;
}
.module18 .botText .leftBot {
    width: 45%;
    height: 60px;
    line-height: 60px;
    margin-top: -8px;
    font-size: 20px;
    font-weight: 700;
}
.module18 .botText .rightBot {
    width: 55%;
    background-color: rgba(0,0,0,.65);
    font-size: 16px;
    font-weight: 700;
}
.module18 .botText  .sanjiao {
    width: 0px;
    height: 0px;
    border-top: 49px solid;
    border-right: 25px solid transparent;
    border-bottom: 11px solid transparent;
    border-left: 6px solid;
    position: absolute;
    left: 45%;
    bottom:-2px;
}
.module18 .rightText {
    width: 720px;
    position: absolute;
    right: 0;
    top: 15px;
    background-color: #fff;
    height: 335px;
    z-index: 1;
    padding-left:100px;
    padding-top: 40px;
}
.module18 .topText {
    width: 90px;
    height: 90px;
    background: url("http://page-bucket.oiaqye7985.com/land-page/images/images17/imgs/kc.png") no-repeat top;
    -webkit-background-size: content;
    background-size: content;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #fff;
    z-index: 999;
    font-size: 17px;
    font-weight: 700;
}
.module18 .topText span,
.module18 .topText textarea{
    width: 51px;
    top: 20px;
    left: 20px;
    position: absolute;
    background-color: transparent;
}
.module18 .topText textarea {
    width: 72px;
}
.module18 .rightText .titleG {
    font-size: 30px;
    font-weight: 700;
    color: #333;
}
.module18 .rightText input {
    width: 500px;
}
.module18 .rightText .textTitle {
    width: 92px;
    letter-spacing: 2px;
}
.module18 .rightText .titleG1 {
   font-size: 20px;
   font-weight: 700;
   color: #404040;
   margin-top: 5px;
}
.module18 .lineG {
    width: 590px;
    /*height: 1px ;
    border: 1px dashed #ccc;*/
    margin: 12px 0 10px 0;
}
.module18 .rightText .titleG2 ,
.module18 .rightText .titleG3{
   font-size: 18px;
   color: #404040;
   margin-top: 5px;
   letter-spacing: 2px;
}
.module18  .btnsGoods {
    text-align: left;
    margin-top: 20px;
}
.module18  .btnsGoods a {
  width: 210px;
  height: 50px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
  letter-spacing: 3px;
  line-height: 50px;
  background-color: #3d3d3d;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 2px #333;
}
.module18  .btnsGoods a input {
    text-align: center;
    width: 100%;
}
.module18 .twoGoods {
    width: 100%;
    height: 500px;
    -webkit-background-size: cover;
    background-size: cover;
    margin-top: 70px;
    padding-top: 60px;
}
.module18  .sanjiaos{
    width:0;
    height:0;
    border-top:7px solid transparent;
    border-bottom:7px solid transparent;
    border-left:12px solid;
    display: inline-block;
}
.module18 .twoGoods .icons {
  width: 50px;
  height: 50px;
  border: 1px solid;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 20px;
  text-align: center;
  line-height: 45px;
  font-size: 26px;
}
.module18 .twoGoods .oneleft {
  font-size: 30px;
  font-weight: 700;
  color: #333;
  max-width: 720px;
  height: 60px;
  overflow: hidden;
  margin-bottom: 15px;
}
.module18 .twoGoods .btnsGoods {
    margin-top:25px;
}
.module18 .twoGoods .btnsGoods a {
    width: 155px;
}
.module18 .leftGoodsBottom .leftIcon {
    font-size: 100px;
    position: relative;
}
.module18  .leftIcon span {
    color: #fff;
    font-size: 17px;
    display: inline-block;
    width: 45px;
    position: absolute;
    left: 32px;
    top: 40px;
    letter-spacing: 2px;
}
.module18  .leftGoodsBottom textarea {
    background-color: transparent;
    font-weight: 500;
    font-size: 18px;
     border: none;
}
.module18  .leftIcon textarea {
    font-size: 17px;
    position: absolute;
    left: 30px;
    top: 35px;
    width:45px;
}
.module18  .leftGoodsBottom>div {
    float: left;
    color: #333;
    font-size: 18px;
    font-weight: 500;
    margin-top:-35px;

}
.module18  .leftGoodsBottom .rightTG {
    width: 625px;
    margin-top: 7px;
    margin-left:20px;
}
.module18  .leftGoodsBottom .rightTG textarea {
    width: 625px;
}
.module18 .threeGoods {
    margin-top: 80px;
}
.module18 .midBnner {
    margin-top: 90px;
    width: 100%;
    position: relative;
    height: 415px;
    -webkit-background-size: cover;
    background-size: cover;
}
.module18 .midBnner .midBImg {
    
}
.module18 .midBnner .w17{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    padding-left: 535px;
    padding-top: 75px;
    color: #fff;
} 
.module18 .midBnner input {
    width: 80%;
}
.module18 .midBnner .titlemid {
    font-size: 40px;
    font-weight: 700;
}
.module18 .midBnner .titlemid1 {
    font-size: 32px;
    font-weight: 700;
    margin-top: 30px;
}
.module18 .midBnner .titlemid2 {
    font-size: 32px;
    font-weight: 700;
    margin-top: 20px;
}
.module18 .midBnner .fang {
    width: 13px ;
    height: 13px;
    vertical-align: middle;
    border: 3px solid #fff;
    display: inline-block;
}
.module18 .midBnner .btnsGoods {
    margin-top: 30px;
}
.module18 .titleProducts {
    text-align: center;
    font-size: 40px;
    color: #333;
    font-weight: 700;
    margin-top: 60px;
}
.module18 .titleProducts input {
    width: 100%;
    text-align: center;
}
.module18 .products .pro {
    margin-top: 50px;
    padding-left: 0;
}
.module18 .products .pro li {
    display: inline-block;
    width: 31%;
    margin-right: 2%;
    margin-bottom: 20px;
    background-color: #fff;
    padding: 7px;
    padding-bottom: 30px;
    box-shadow: 0 0 20px #ccc;
}
.module18 .products .pro li:last-child {
    margin-right: 0;
}
.module18 .products .indroduce {
    width: 100%;
    margin-top:30px;
    color: #333;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}
.module18 .products .indroduce input {
    text-align: center;
}
.module18 .products .btnPro {
    width: 100%;
    color: #0169de;
    margin-top: 15px;
    font-size: 19px;
    font-weight: 700;
    text-align: center;
}
.module18 .products .btnPro input {
    text-align: center;
}
.module18 .leftGoodsBottom {
    margin-top: 40px;
}
.module18 .leftImgG1 {
    width: 530px;
    position: absolute;
    top: 0;
    z-index: 99;
}
.module18 .rightText1 {
    width: 720px;
    position: absolute;
    top: 15px;
    background-color: #fff;
    height: 335px;
    z-index: 1;
    padding-left:100px;
    padding-top: 40px;
}
.module18 .rightText1 .titleG {
    font-size: 30px;
    font-weight: 700;
    color: #333;
}
.module18 .rightText1 input {
    width: 500px;
}
.module18 .rightText1 .textTitle {
    width: 92px;
    letter-spacing: 2px;
}
.module18 .rightText1 .titleG1 {
   font-size: 20px;
   font-weight: 700;
   color: #404040;
   margin-top: 5px;
}
.module18 .rightText1 .titleG2 ,
.module18 .rightText1 .titleG3{
   font-size: 18px;
   color: #404040;
   margin-top: 5px;
   letter-spacing: 2px;
}
/*移动*/
@media (max-width: 768px) {
    .module18 .mBanner {
        width: 100%;
        padding-top: 60px;
        text-align: center;
        -webkit-background-size: cover;
        background-size: cover;
        padding-bottom: 45px;
    }
    .module18 .mBanner .titleM {
        font-size: 29px;
        color: #fff;
        font-weight: 700;
        width: 100%;
        max-height: 40px;
        overflow: hidden;
    }
    .module18 .mBanner .titleM2 {
        font-size: 21px;
        color: #333;
        font-weight: 700;
        width: 100%;
        max-height: 30px;
        overflow: hidden;
        margin-top: 20px;
    }
    .module18 .colAdv {
        margin-top: 20px;
    }
    .module18 .colAdv li {
        width: 26%;
        height: 35px;
        line-height: 35px;
        font-size: 18px;
        margin-right: 5%;
    }
    .module18 .colAdv li:last-child {
        margin-right: 0;
    }
    .module18 .imgMpro {
        margin-top: 25px;
    }
    .module18  .btns {
        margin-top: 20px;
    }
    .module18  .btns a {
        width: 40%;
        height: 40px;
        font-size: 14px;
        letter-spacing: 1px;
        line-height: 40px;
        overflow: hidden;
    }
    .module18 .Mgoods {
        margin-top: 30px;
    }
    .module18 .topText {
        width: 70px;
        height: 70px;
        -webkit-background-size: cover;
        background-size: cover;
        left: 5px;
        top: -22px;
        font-size: 16px;
    }
    .module18 .oneGoods {
        width: 100%;
        padding: 10px;
        padding-bottom: 30px;
        background-color: #fff;
        height: inherit;
        margin-top: 30px;
    }
    .module18 .oneGoods .topImgM {
        position: relative;
    }
    .module18 .topText span {
        top: 9px;
        left: 11px;
    }
    .module18 .botText .rightBot {
        height: 40px;
        overflow: hidden;
        line-height: 40px;
        padding-left: 15px;
    }
    .module18 .botText .rightBot span{
        display: inline-block;
        /*height: 25px;*/
        overflow: hidden;
    }
    .module18 .botText .leftBot {
        height: 46px;
        line-height: 46px;
        overflow: hidden;
        margin-top: -6px;
        font-size: 17px;
    }
    .module18 .botText .sanjiao {
        border-top: 35px solid;
        border-right: 16px solid transparent;
        bottom: 0;
    }
    .module18 .botText {
        height: inherit;
        line-height: inherit;
    }
    .module18 .rightTextM {
        width: 100%;
        padding-left:8%;
        padding-top: 20px;
        text-align: left;
    }
    .module18 .rightTextM .titleG {
        color: #333;
        font-size: 20px;
        font-weight: 700;
    }
    .module18 .rightTextM .titleG1 {
        color: #404040;
        font-size: 18px;
        font-weight: 700;
    }
    .module18 .rightTextM .titleG2,
    .module18 .rightTextM .titleG3 {
        color: #404040;
        font-size: 16px;
        width: 95%;
        height: 25px;
        overflow: hidden;
        margin-top: 5px;
    }
    .module18 .lineG {
        width: 95%;
    }
    .module18 .lineG img {
        width: 100%;
    }
    .module18 .btnsGoods a {
        width: 42%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        letter-spacing: 0;
        overflow: hidden;
        padding: 0 2%;
    }
    .module18 .oneleft {
        margin-top: 10px;
        color: #333;
        font-size: 16px;
        font-weight: 700;
        max-height: 30px;
        overflow: hidden;
    }
    .module18 .icons {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 1px solid ;
        display: inline-block;
        vertical-align: middle;
        line-height: 27px;
        text-align: center;
        font-size: 19px;
    }
    .module18 .migMGoods {
        width: 86%;
        margin-left: 7%;
        background-color: #fff;
        padding: 20px 0 30px 30px;
        text-align: left; 
        box-shadow: 0 0 10px #ccc;
    } 
    .module18 .migMGoods .btnsGoods{
        text-align: center; 
    }
    .module18 .MmidBnner {
        padding-bottom: 35px;
    }
    .module18 .MmidBnner .titlemid {
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        height: 35px;
        overflow: hidden;
    }
    .module18 .MmidBnner .titlemid1 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        height: 30px;
        overflow: hidden;
        margin-top: 5px;
    }
    .module18 .MmidBnner .titlemid2 {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        height: 30px;
        overflow: hidden;
        margin-top: 5px;
    }
    .module18 .MmidBnner .fang {
        width: 10px;
        height: 10px;
        border: 3px solid #fff;
        display: inline-block;
    }
    .module18 .MmidBnner {
        padding-top: 25px;
        padding-left: 10%;
        text-align: left;
    }
    .module18 .Mproducts {
        padding-top: 40px;
    }
    .module18 .titleProducts {
        font-size: 22px;
        margin-top: 0;
    }
    .module18 .pro {
        padding: 10px;
        margin-top: 15px;

    }
    .module18 .pro li {
        width: 33.33%;
        background-color: #fff;
        padding-top: 5px;
        padding-left: 3px;
        float: left;
        box-shadow: 0 0 5px #ccc;
        position: relative;
    }
    .module18 .pro li:last-child {
        padding-right: 3px;
    }
    .module18 .indroduce {
        width: 100%;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #0169de;
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        position: absolute;
        display: block;
        left: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 88;
        box-shadow: 2px 0 5px #ccc;
    }
    .module18 .clickView {
        padding: 0 10px;
        margin-bottom: 60px;
        margin-top: 50px;
    }
    .module18 .clickView a{
        font-size: 18px;
        font-weight: 700;
        color: #fff;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .module18 .pro li:first-child .indroduce {
        bottom: -22px;
    }
    .module18 .pro li:nth-child(2) .indroduce {
        bottom: -27px;
    }
    .module18 .pro li:nth-child(3) .indroduce {
        bottom: -35px;
    }
}
    .module18 .videoBackground{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.5);
        text-align: center;
		}
   .module18 .videoBackground img {
        width: 60px;
        position:absolute;
        top:50%;
        laeft:50%;
        transform:translate(-50%,-50%);
        -ms-transform:translate(-50%,-50%); 	/* IE 9 */
        -moz-transform:translate(-50%,-50%); 	/* Firefox */
        -webkit-transform:translate(-50%,-50%); /* Safari 和 Chrome */
        -o-transform:translate(-50%,-50%); 
   }	
</style> 
