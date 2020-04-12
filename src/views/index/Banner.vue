<template>
  <div class="banner" v-bind:style="bannerList[index].background">
    <md-toolbar v-on:mouseenter.native="onNavbarEnter()" v-on:mouseleave.native="onNavbarLeave()" v-bind:style="navbarDiv" md-elevation="0">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">DJI</h3>
        </div>
        <div class="md-toolbar-section-end md-layout md-gutter md-alignment-center">
          <md-menu md-align-trigger v-bind:md-active.sync="menuStatus[0].contentShow">
            <md-button md-menu-trigger v-bind:style="navbarMenu" v-on:mouseenter.native="onMenuEnter(0)" v-on:mouseleave.native="onMenuLeave(0)">消费级产品</md-button>
            <md-menu-content class="menu-content-0" v-on:mouseenter.native="onMenuContentEnter(0)" v-on:mouseleave.native="onMenuContentLeave(0)">
              <div>
                <a>.</a>
              </div>
            </md-menu-content>
          </md-menu>
          <md-menu md-size="small" v-bind:md-offset-x="-12" v-bind:md-offset-y="0" v-bind:md-active.sync="menuStatus[1].contentShow">
            <md-button md-menu-trigger v-bind:style="navbarMenu" v-on:mouseenter.native="onMenuEnter(1)" v-on:mouseleave.native="onMenuLeave(1)">专业级产品</md-button>
            <md-menu-content v-on:mouseenter.native="onMenuContentEnter(1)" v-on:mouseleave.native="onMenuContentLeave(1)">
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-size="small" v-bind:md-offset-x="-12" v-bind:md-offset-y="0" v-bind:md-active.sync="menuStatus[2].contentShow">
            <md-button md-menu-trigger v-bind:style="navbarMenu" v-on:mouseenter.native="onMenuEnter(2)" v-on:mouseleave.native="onMenuLeave(2)">行业应用</md-button>
            <md-menu-content v-on:mouseenter.native="onMenuContentEnter(2)" v-on:mouseleave.native="onMenuContentLeave(2)">
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-size="small" v-bind:md-offset-x="-12" v-bind:md-offset-y="0" v-bind:md-active.sync="menuStatus[3].contentShow">
            <md-button md-menu-trigger v-bind:style="navbarMenu" v-on:mouseenter.native="onMenuEnter(3)" v-on:mouseleave.native="onMenuLeave(3)">系统模块</md-button>
            <md-menu-content v-on:mouseenter.native="onMenuContentEnter(3)" v-on:mouseleave.native="onMenuContentLeave(3)">
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-size="small" v-bind:md-offset-x="-12" v-bind:md-offset-y="0" v-bind:md-active.sync="menuStatus[4].contentShow">
            <md-button md-menu-trigger v-bind:style="navbarMenu" v-on:mouseenter.native="onMenuEnter(4)" v-on:mouseleave.native="onMenuLeave(4)">探索精彩</md-button>
            <md-menu-content v-on:mouseenter.native="onMenuContentEnter(4)" v-on:mouseleave.native="onMenuContentLeave(4)">
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>  
          <md-menu md-size="small" v-bind:md-offset-x="-12" v-bind:md-offset-y="0" v-bind:md-active.sync="menuStatus[5].contentShow">
            <md-button md-menu-trigger v-bind:style="navbarMenu" v-on:mouseenter.native="onMenuEnter(5)" v-on:mouseleave.native="onMenuLeave(5)">服务与支持</md-button>
            <md-menu-content v-on:mouseenter.native="onMenuContentEnter(5)" v-on:mouseleave.native="onMenuContentLeave(5)">
              <md-menu-item>My Item 1</md-menu-item>
              <md-menu-item>My Item 2</md-menu-item>
              <md-menu-item>My Item 3</md-menu-item>
            </md-menu-content>
          </md-menu>               
        </div>
      </div>
    </md-toolbar>

    <section class="banner-content">
      <div class="banner-text">
        <p style="font-size:30px;">{{bannerList[index].title}}</p>
        <p style="font-size:20px;">{{bannerList[index].slogan}}</p>
      </div>
      <div style="position:absolute; width:100%; bottom:0;">
        <transition name="banner-image">
          <img class="banner-img" v-bind:src="bannerList[index].image" v-bind:key="bannerList[index].id">
        </transition>
      </div>
    </section>

    <div class="swiper-control-previous">
      <div class="control-cover" style="left: 0;" v-on:mouseenter="isPreviousShow=true" v-on:mouseleave="isPreviousShow=false">
        <div class="control-btn" v-show="isPreviousShow" v-on:click="onControlBtnClick('previous')" style="left: 0;">
          <span class="control-arrow"></span>
        </div>
      </div>
    </div>
    
    <div class="swiper-control-next">
      <div class="control-cover" style="right: 0;" v-on:mouseenter="isNextShow=true" v-on:mouseleave="isNextShow=false">
        <div class="control-btn" v-show="isNextShow" v-on:click="onControlBtnClick('next')" style="right: 0; transform: rotate(180deg);">
          <span class="control-arrow"></span>
        </div>
      </div>
    </div>

    <div class="swiper-scroller">
      <ul class="swiper-scroller-list">
        <li v-for="(banner, index) in bannerList" :key="banner.id">
          <a v-on:click="onSwiperScrollerClick(index)">{{banner.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      menuStatus: [
        {id: 0, hover: false, contentHover: false, contentShow: false},
        {id: 1, hover: false, contentHover: false, contentShow: false},
        {id: 2, hover: false, contentHover: false, contentShow: false},
        {id: 3, hover: false, contentHover: false, contentShow: false},
        {id: 4, hover: false, contentHover: false, contentShow: false},
        {id: 5, hover: false, contentHover: false, contentShow: false},
      ],
      index: 3,
      timer: null,
      isPreviousShow: false,
      isNextShow: false,
      bannerList: [
        {id: 0, title: '机甲大师 RoboMaster S1', slogan:'玩出名堂', image: require('@/assets/index/de2125de952d5304ff6b42cd2f2af04d.png'), background: {backgroundImage: '-webkit-linear-gradient(top,#16151a,#3d3d49)'}},
        {id: 1, title: 'Ronin SC 如影 SC 单手持微单稳定器', slogan:'轻装上阵，何惧挑战', image: require('@/assets/index/b92d20664174d6a34f45ee9f767492c2.png'), background: {backgroundImage: '-webkit-linear-gradient(top,#101013,#3b3d40)'}},
        {id: 2, title: 'OSMO ACTION 灵眸运动相机', slogan:'双屏一体，稳定如一', image: require('@/assets/index/afcfad94702b1b62b6dfbe2dbee5448d.png'), background: {backgroundImage: '-webkit-linear-gradient(top,#282c35,#090b18)'}},
        {id: 3, title: '经纬 M200 V2 系列', slogan:'重塑生产力', image: require('@/assets/index/4bd64b92f042a391c9ebebf39b04824a.png'), background: {backgroundImage: '-webkit-linear-gradient(top,#282828,#515151)'}},
        {id: 4, title: '御 Mavic Air', slogan:'随行新视界', image: require('@/assets/index/062bd0449fb221ec12c845b69feebeac.png'), background: {backgroundImage: '-webkit-linear-gradient(top,#14141a,#505459)'}},
        {id: 5, title: '御 Mavic 2', slogan:'高瞻远瞩  以小见大', image: require('@/assets/index/a258d16a62c6dc798e95ed748395f2f3.png'), background: {backgroundImage: '-webkit-linear-gradient(top,#101013,#3b3d40)'}},
        {id: 6, title: '御 Mavic Mini 航拍小飞机', slogan:'你也能飞', image: require('@/assets/index/d6c0dfa94fb2abf048409f3d735edadd.png'), background: {backgroundImage: 'url('+require('@/assets/index/524884174d1225f3e713385d118a2117.jpg')+')'}},
        {id: 7, title: 'Osmo Mobile 灵眸手机云台 3', slogan:'随手掌控，一拍即合', image: require('@/assets/index/0f966889593c6fac4c530160211b115e.png'), background: {backgroundImage: 'url('+require('@/assets/index/dc3100ba286e77fa70446641f73b06e4.png')+')'}},
      ],
      navbarDiv: {
        backgroundColor: ''
      },
      navbarMenu: {
        color: '#fff',
        height: '64px'
      }
    };
  },
  methods: {
    onNavbarEnter() {
      this.navbarMenu.color = "buttontext";
      this.navbarDiv.backgroundColor = "#fff";
    },
    onNavbarLeave() {
      this.navbarMenu.color = "#fff";
      this.navbarDiv.backgroundColor = "";
    },
    onMenuEnter(i) {
      this.menuStatus[i].hover = true;
      this.menuStatus[i].contentShow = true;
    },
    onMenuLeave(i) {
      setTimeout(()=> {
        this.menuStatus[i].hover = false;
        this.menuStatus[i].contentShow = this.menuStatus[i].hover || this.menuStatus[i].contentHover;
      }, 10);
    },
    onMenuContentEnter(i) {
      this.navbarMenu.color = "buttontext";
      this.navbarDiv.backgroundColor = "#fff";
      this.menuStatus[i].contentHover = true;
      this.menuStatus[i].contentShow = true;
    },
    onMenuContentLeave(i) {
      this.navbarMenu.color = "#fff";
      this.navbarDiv.backgroundColor = "";
      setTimeout(()=> {
        this.menuStatus[i].contentHover = false;
        this.menuStatus[i].contentShow = this.menuStatus[i].hover || this.menuStatus[i].contentHover;
      }, 10);
    },

    turnToPrevious() {
      var len = Object.keys(this.bannerList).length;
      var tmp = this.bannerList[len-1];
      this.bannerList.pop()
      this.bannerList.unshift(tmp);
    },
    turnToNext() {
      var tmp = this.bannerList[0];
      this.bannerList.shift();
      this.bannerList.push(tmp);
    },
    onControlBtnClick(param) {
      if(param == 'previous') {
        this.$options.methods.turnToPrevious.bind(this)();
      }
      else if(param == 'next') {
        this.$options.methods.turnToNext.bind(this)();
      }
      clearInterval(this.timer);
    },
    onSwiperScrollerClick(i) {
      if(i < 3) {
        this.$options.methods.turnToPrevious.bind(this)();
      }
      else if(i > 3) {
        this.$options.methods.turnToNext.bind(this)();
      }
      clearInterval(this.timer);
    },
  },
  mounted() {
    this.timer = setInterval(this.turnToNext, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>

<style lang="scss" scoped>
.md-layout {
  margin-right: 0px;
  margin-left: 0px;

  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;
}

.banner {
  position: relative;
  height: 750px;
  width: 100%;
  text-align: center;
  color: #fff;
  background-repeat: no-repeat;
}

.md-menu-item:hover {
  background-color: #e0e0e0;
}

.md-menu-content {
  z-index: 10;
  background-color: #fff;
}

.menu-content-0 {
  left: 0px !important;
  min-width: 100%;
  height: 300px;
}

.control-cover {
  position: absolute;
  top: 0;
  z-index: 1;
  width: calc(50% - 500px);
  height: 750px;
}

.control-btn {
  position: absolute;
  height: 128px;
  width: 64px;
  background-color: rgba(194,200,204,.5);
  top: 50%;
  margin-top: -64px;
  z-index: 0;
  transition: all .4s;
  border-top-right-radius: 64px;
  border-bottom-right-radius: 64px;
  cursor: pointer;
  text-align: left;
}

.control-arrow {
  top: 50%;
  margin-top: -25px;
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  left: 15px;
}

.control-arrow::before, .control-arrow::after {
  left: 0;
  position: absolute;
  display: block;
  width: 20px;
  height: 3px;
  content: '';
  background-color: #fff;
}

.control-arrow::before {
  top: 0;
  border-bottom-right-radius: 3px;
  transform: rotate(-45deg);
}

.control-arrow::after {
  bottom: 0;
  transform: rotate(45deg);
  border-top-right-radius: 3px;
}

.banner-content {
  position: absolute;
  width: 100%;
  top: 64px;
  bottom: 0px;
}

.banner-image-enter-active {
  transition: opacity 1s;
}

.banner-image-enter {
  opacity: 0;
}

.banner-img {
  position: absolute;
  height: auto; 
  width: 808px;
  bottom:0; 
  left:50%; 
  margin-left:-404px;
}

.swiper-scroller {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -600px;
  z-index: 8;
}

.swiper-scroller ul {
  position: relative;
  height: 200px;
  list-style: none;
}

.swiper-scroller ul:before {
  left: 0;
  top: 97px;
  width: 2px;
  height: 16px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  position: absolute;
  display: block;
  content: '';
  background-color: #fff;
}

.swiper-scroller ul li {
  position: absolute;
  transition: all .4s;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
}

.swiper-scroller ul li:nth-child(2) {
  transform: translateY(30px);
  opacity: 0.2;
  visibility: visible;
}

.swiper-scroller ul li:nth-child(3) {
  transform: translateY(60px);
  opacity: 0.7;
  visibility: visible;
}

.swiper-scroller ul li:nth-child(4) {
  transform: translateY(90px);
  opacity: 1;
  visibility: visible;
}

.swiper-scroller ul li:nth-child(5) {
  transform: translateY(120px);
  opacity: 0.7;
  visibility: visible;
}

.swiper-scroller ul li:nth-child(6) {
  transform: translateY(150px);
  opacity: 0.2;
  visibility: visible;
}

.swiper-scroller ul li:nth-child(7) {
  transform: translateY(180px);
  opacity: 0;
  visibility: hidden;
}

.swiper-scroller ul li a {
  padding: 6px 40px;
  display: inline-block;
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  font-weight: 300;
  cursor: pointer;
}

a:hover {
  text-decoration: none;
}

</style>
