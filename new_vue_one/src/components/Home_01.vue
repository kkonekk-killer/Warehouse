<template>
  <div class="bodys">
    <div class="fix_button">
       <img src="../../static/images/首页/button.png">
    </div>
    <div class="top">
  <van-nav-bar title="标题" left-text="返回" left-arrow class="navs">
  <template #right>
    <van-icon name="ellipsis" size="18" color="#fff"/>
  </template>
</van-nav-bar>
</div>
<div class="imgs">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item> <img src="../../static/images/首页/banner_1.png"></van-swipe-item>
      <van-swipe-item> <img src="../../static/images/首页/banner_1.png"></van-swipe-item>
      <van-swipe-item> <img src="../../static/images/首页/banner_1.png"></van-swipe-item>
      <van-swipe-item> <img src="../../static/images/首页/banner_1.png"></van-swipe-item>
    </van-swipe>
</div>

<div is-link @click="showPopup">
  <div class="body_img">
  <img src="../../static/images/首页/index_01.png">
  <div class="infor">
      <p>时尚精选</p>
      <p>Style Collotion</p>
    </div>
    <div class="jiantou">
       <img src="../../static/images/首页/icon_01.png">
    </div>
</div>
</div>
<van-popup v-model="show" position="left" class="left_slide_all" :style="{width:'60%',height:'100%',background:'pink'}">
  <div class="left_slide">
    <span>猛男一号</span>
  </div>
  </van-popup>



<div class="body_img">
  <img src="../../static/images/首页/index_02.png">
  <div class="infor">
      <p>时尚精选</p>
      <p>Style Collotion</p>
    </div>
    <div class="jiantou">
       <img src="../../static/images/首页/icon_01.png">
    </div>
</div>
<div class="body_img">
  <img src="../../static/images/首页/index_03.png">
  <div class="infor">
      <p>时尚精选</p>
      <p>Style Collotion</p>
    </div>
    <div class="jiantou">
       <img src="../../static/images/首页/icon_01.png">
    </div>
</div>
<div class="body_img">
  <img src="../../static/images/首页/index_04.png">
  <div class="infor">
      <p>时尚精选</p>
      <p>Style Collotion</p>
    </div>
    <div class="jiantou">
       <img src="../../static/images/首页/icon_01.png">
    </div>
</div>
<div class="body_img">
  <img src="../../static/images/首页/index_05.png">
  <div class="infor">
      <p>时尚精选</p>
      <p>Style Collotion</p>
    </div>
    <div class="jiantou">
       <img src="../../static/images/首页/icon_01.png">
    </div>
</div>
  </div>
</template>
<style scoped>
.left_slide_all{
  display:block;
}
.left_slide{
  text-align:center;
  background:#3496eb;
  width:100%;
  font-size:.5rem;
  height:1rem;
}          
 .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  }
.fix_button{
  position:fixed;
  z-index:1000 !important;
  top:2rem;
  left:0.5rem;
}
.fix_button>img{
  width:0.7rem;
}
.infor{
  position:absolute;
  font-size:0.2rem;
  color:#fff;
  width:1.6rem;
  top:0.3rem;
  right:0.1rem;
  text-align:center;
}
.jiantou{
  position: absolute;
  top:0.6rem;
  right:0.3rem;
}
.jiantou>img{
    width:0.3rem; 
}
.bodys>img{
  display:block;
}
.navs{
  background:linear-gradient(to bottom,#000 80%,#fff 100%);
}

.imgs{
  height:3.4rem;
}
.imgs img{
  width:7.5rem;
  height:3.4rem;
}
.body_img{
  height:2.6rem;
   margin-top:0.1rem;
   position:relative; 
}
.body_img>img{
  width:7.5rem;
  height:2.6rem;
}
.bodys{
  width:7.5rem;
}
</style>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>