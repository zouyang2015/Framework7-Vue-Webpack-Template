<template>
  <!-- App -->
  <div id="app">

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios" class="app-navi">
          <f7-nav-left back-link=" " sliding></f7-nav-left>
          <f7-nav-center sliding>保险产品算费</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" @click="openActionVale = true"></f7-link>
          </f7-nav-right>

          <f7-subnavbar class="main-navi" sliding>
            <f7-buttons>
              <f7-button tab-link="#tab-1" class="main-navi-item btn"><span>推荐产品</span></f7-button>
              <f7-button tab-link="#tab-2" class="main-navi-item search-img">
                <span>搜索保险产品</span>
              </f7-button>
              <f7-button tab-link="#tab-1" class="main-navi-item btn"><span>产品分类</span></f7-button>
            </f7-buttons>
          </f7-subnavbar>
        </f7-navbar>

        <!-- Pages -->
        <f7-pages>
          <!-- 全推荐列表 -->
          <f7-page>
            <f7-list class="product-list">
              <f7-list-item :link="`/product-detail/${prodkey}/`" no-link-class class="product-item"
                            v-for="(item, index) in listAry" :key="index">
                <div class="icon">
                  <img src="./image/img-product01.jpg" width="60" height="45">
                </div>
                <div class="text">
                  <h2 class="name"><span class="left">{{item.title}}</span><span class="hot">热销</span></h2>
                  <p class="desc">{{item.desc}}</p>
                </div>
              </f7-list-item>
            </f7-list>
          </f7-page>

          <!-- 拼音筛选 -->
          <!--<f7-page>-->
          <!--<f7-list class="letter-search">-->
          <!--<f7-list-group v-for="(item, index) in recommendAry" :key="index">-->
          <!--<f7-list-item title="Group 1" group-title v-if="item.title">{{item.title}}</f7-list-item>-->
          <!--<f7-list-item :title="detail.name" link="/product-detail/20/" v-for="(detail, ind) in item.lists" :key="ind"></f7-list-item>-->
          <!--</f7-list-group>-->
          <!--</f7-list>-->
          <!--</f7-page>-->

          <!-- 产品分类 -->
          <!--<f7-page>-->
          <!--<f7-block class="assortment">-->

          <!--<div class="assortment-list" v-for="(item, index) in assortmentAry" :key="index">-->
          <!--<h2 class="title">{{item.title}}</h2>-->
          <!--<div class="row">-->
          <!--&lt;!&ndash; Each "cell" has col-[widht in percents] class &ndash;&gt;-->
          <!--<div class="row-item col-33" v-for="(detail, ind) in item.lists" :key="ind">{{detail.name}}</div>-->
          <!--</div>-->
          <!--</div>-->
          <!--</f7-block>-->
          <!--</f7-page>-->

        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Actions -->
    <f7-actions id="actions" :opened="openActionVale">
      <!-- Actions Group -->
      <f7-actions-group>
        <!-- Actions Buttons -->
        <f7-actions-button>转发</f7-actions-button>
        <f7-actions-button>显示在聊天顶部</f7-actions-button>
        <f7-actions-button @click="doSomething">关于保险产品算费</f7-actions-button>
      </f7-actions-group>
      <!-- Another Group -->
      <f7-actions-group>
        <!-- Cancel/Close Button -->
        <f7-actions-button color="red" bold>取消</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

  </div>
</template>

<script>
  import {getBaseInfo} from 'api/api'

  export default {
    data() {
      return {
        // 右上角按钮打开关闭控制
        openActionVale: false,
        // 默认产品列表
        listAry: [
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）平安玺越人生（成人版）平安玺越人生（成人版）平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          },
          {
            title: '平安玺越人生（成人版）',
            desc: '平安2018开门红新品'
          }
        ],
        // 推荐产品
        recommendAry: [
          {
            title: '',
            lists: [
              {
                name: '推荐产品'
              }
            ]
          },
          {
            title: 'B',
            lists: [
              {
                name: '北大方正人寿'
              },
              {
                name: '百年人寿'
              }
            ]
          },
          {
            title: 'D',
            lists: [
              {
                name: '东吴人寿'
              }
            ]
          }
        ],
        // 产品分类
        assortmentAry: [
          {
            title: '意外保险',
            lists: [
              {
                name: '意外(全部)'
              },
              {
                name: '意外身故'
              },
              {
                name: '意外身故'
              },
              {
                name: '意外身故'
              },
              {
                name: '意外身故'
              }
            ]
          },
          {
            title: '健康保险',
            lists: [
              {
                name: '意外(全部)'
              },
              {
                name: '意外身故'
              }
            ]
          },
          {
            title: '人寿保险',
            lists: [
              {
                name: '意外(全部)'
              },
              {
                name: '意外身故'
              }
            ]
          },
          {
            title: '年金保险',
            lists: [
              {
                name: '意外(全部)'
              },
              {
                name: '意外身故'
              }
            ]
          }
        ],

        // 跳转用的页面用prodkey
        prodkey: 'PR171117000000000001'
      }
    },
    created() {
      // 异步请求例子
      getBaseInfo()
    },
    methods: {
      doSomething() {
      }
    }
  }
</script>

<style scoped>
  @import "./css/app.css";
</style>