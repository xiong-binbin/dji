<template>
  <div class="grids">
    <div class="grid-container product-grid-container">
      <div class="md-layout md-gutter">
        <div class="md-layout-item product-left-item" style="padding-right:10px; padding-left:10px;">
          <a v-bind:style="productLeft"></a>
        </div>
        <div class="md-layout-item product-right-item" style="padding-right:10px; padding-left:10px;">
          <a style="margin-bottom: 20px;">
            <img v-bind:src="productRightList[0].image" v-bind:key="productRightList[0].id">
            <div class="product-content">
              <p style="padding-left: 320px;">{{productRightList[0].title}}</p>
              <p style="padding-left: 320px;">{{productRightList[0].slogan}}</p>
            </div>
          </a>
          <a>
            <img v-bind:src="productRightList[1].image" v-bind:key="productRightList[1].id">
            <div class="product-content">
              <p>{{productRightList[1].title}}</p>
              <p>{{productRightList[1].slogan}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="grid-container promotion-grid-container">
      <div class="md-layout md-gutter">
        <div class="md-layout-item promotion-item" style="padding-right:10px; padding-left:10px;">
          <a>
            <img v-bind:src="promotionList[0].image" v-bind:key="promotionList[0].id">
            <div class="promotion-content">
              <p>{{promotionList[0].title}}</p>
              <p>{{promotionList[0].slogan}}</p>
            </div>
          </a>
        </div>
        <div class="md-layout-item promotion-item" style="padding-right:10px; padding-left:10px;">
          <a>
            <img v-bind:src="promotionList[1].image" v-bind:key="promotionList[1].id">
            <div class="promotion-content">
              <p>{{promotionList[1].title}}</p>
              <p>{{promotionList[1].slogan}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="grid-container service-grid-container">
      <div class="md-layout md-gutter">
        <div class="md-layout-item service-item" style="padding-left:10px; padding-right:0px;">
          <a>
            <div class="service-content">
              <p>{{serviceList[0].title}}</p>
              <p>{{serviceList[0].slogan}}</p>
            </div>
          </a>
        </div>
        <div class="md-layout-item service-item" style="padding-left:0px; padding-right:0px;">
          <a>
            <div class="service-content">
              <p>{{serviceList[1].title}}</p>
              <p>{{serviceList[1].slogan}}</p>
            </div>
          </a>
        </div>
        <div class="md-layout-item service-item" style="padding-left:0px; padding-right:10px;">
          <a>
            <div class="service-content">
              <p>{{serviceList[2].title}}</p>
              <p>{{serviceList[2].slogan}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Grids',
    data () {
      return {
        productLeft: {backgroundImage: 'url('+require('@/assets/index/a7f4887b91842076880d8066df2de65f.jpg')+')'},
        productRightList: [
          {id: 0, title: '为何选择口袋灵眸', slogan: '查看他们与口袋灵眸的故事 >', image: require('@/assets/index/c29b7c376d7e1ae8a78e26db5a4cb874.jpg'),},
          {id: 1, title: '如影 RONIN-S', slogan: '由感于心，卓践于行', image: require('@/assets/index/01ad28594e7db6945418206c2a744fa2.jpg'),},
          ],
        promotionList: [
          {id: 0, title: '专业级产品', slogan: '大疆为专业影视制作而设计的拍摄设备', image: require('@/assets/index/c5d75349999c6a61118b02775b211856.png'),},
          {id: 1, title: '行业应用', slogan: '大疆为行业应用提供完备的数据收集分析与解决方案', image: require('@/assets/index/1c4aace1936bdcc03351116cbdfd0d9c.jpg'),},
        ],  
        serviceList: [
          {id: 0, title: '购买渠道', slogan: '查找可靠的购买渠道', },
          {id: 1, title: '服务与支持', slogan: '我们很高兴为您提供帮助', },
          {id: 2, title: '安全飞行', slogan: '了解最新安全及禁飞信息', },
        ],  
      }
    },
  }
</script>

<style lang="scss" scoped>
img {
  position: absolute;
}

.grids {
  background-color: #f2f2f2;
}

.grid-container {
  width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
}

.product-grid-container {
  height: 700px;
}

.product-left-item a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-position: center center;
  cursor: pointer;
}

.product-right-item a {
  position: relative;
  display: block;
  width: 100%;
  height: 320px;
  background-position: center center;
  cursor: pointer;
}

.product-content {
  position: relative;
  padding-left: 40px;
  top: 40%;
}

.promotion-grid-container {
  height: 336px;
}

.promotion-item a {
  position: relative;
  display: block;
  width: 100%;
  height: 296px;
  background-position: center center;
  cursor: pointer;
}

.promotion-content {
  position: relative;
  padding-top: 205px;
  padding-left: 40px;
  transition: all .6s;
  color: #303233;
}

.service-grid-container {
  height: 270px;
}

.service-item a {
  position: relative;
  display: block;
  width: 100%;
  height: 166px;
  background-position: center center;
  cursor: pointer;
  background-color: #ffffff;
  border-left: 1px solid #f2f2f2;
}

.service-item a::before {
  display: block;
  content: '';
  position: absolute;
  width: 3px;
  height: 46px;
  background-color: #c2c8cc;
  left: 0;
  top: 50%;
  margin-top: -23px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: all .4s;
}

.service-content {
  position: relative;
  padding-top: 45px;
  padding-left: 40px;
  color: #303233;
}

</style>