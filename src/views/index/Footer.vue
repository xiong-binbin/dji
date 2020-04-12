<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-category">
        <div class="md-layout">
          <div class="md-layout-item category-item">
            <p>{{categoryList[0].title}}</p>
            <ul>
              <li v-for="item in categoryList[0].items" :key="item.id">
                <a>{{item.text}}</a>
              </li> 
            </ul>
          </div>
          <div class="md-layout-item category-item">
            <p>{{categoryList[1].title}}</p>
            <ul>
              <li v-for="item in categoryList[1].items" :key="item.id">
                <a>{{item.text}}</a>
              </li> 
            </ul>
          </div>
          <div class="md-layout-item category-item">
            <p>{{categoryList[2].title}}</p>
            <ul>
              <li v-for="item in categoryList[2].items" :key="item.id">
                <a>{{item.text}}</a>
              </li> 
            </ul> 
          </div>
          <div class="md-layout-item category-item">
            <p>{{categoryList[3].title}}</p>
            <ul>
              <li v-for="item in categoryList[3].items" :key="item.id">
                <a>{{item.text}}</a>
              </li> 
            </ul>
          </div>
          <div class="md-layout-item category-item">
            <p>{{categoryList[4].title}}</p>
            <ul>
              <li v-for="item in categoryList[4].items" :key="item.id">
                <a>{{item.text}}</a>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        categoryList: [
          {id: 0, title: '热门产品分类', items: [{id: 0, text: '消费级'},{id: 1, text: '专业级'},{id: 2, text: '行业级'},{id: 3, text: '系统模块'}]},
          {id: 1, title: '购买渠道', items: [{id: 0, text: '官方商城'},{id: 1, text: '官方旗舰店'},{id: 2, text: '线下零售店'},{id: 3, text: '大疆商城App'}]},
          {id: 2, title: '安全飞行', items: [{id: 0, text: '安全飞行指引'},{id: 1, text: '大疆飞行指南'}]},
          {id: 3, title: '优惠折扣', items: [{id: 0, text: '翻新机'},{id: 1, text: '以旧换新'}]},
          {id: 4, title: '社区', items: [{id: 0, text: '天空之城'},{id: 1, text: '大疆社区'},{id: 2, text: '开发者'}]},
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
p {
  color: #fff;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  font-size: 12px;
  color: #9fa3a6;
  transition: all .3s ease;
  line-height: 24px;
  display: block;
}

.footer {
  background: #272727;
  padding: 72px 0;
}

.footer-content {
  width: 1200px;
  margin: 0 auto;
}

</style>