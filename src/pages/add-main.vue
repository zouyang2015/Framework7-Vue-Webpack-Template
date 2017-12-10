<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left back-link=" " sliding></f7-nav-left>
      <f7-nav-center sliding>添加主险</f7-nav-center>
    </f7-navbar>

    <f7-searchbar
      class="search-risk"
      cancel-link="搜索"
      placeholder="搜索内容"
      :clear="true"
    ></f7-searchbar>

    <div class="choose">
      <f7-accordion-item>
        <f7-accordion-toggle>已经选择产品2个</f7-accordion-toggle>
        <f7-accordion-content>
          <f7-list class="lists">
            <f7-list-item title="Item 1"><i class="icon-check_circle"></i></f7-list-item>
            <f7-list-item title="Item 2"></f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-accordion-item>
    </div>

    <f7-list class="lists mt">
      <f7-list-item @click="chooseProduct" v-for="(item, index) in productList" :key="index" :class="{'active':''}">
        <span>{{item.prodname}}</span>
        <i class="icon-check_circle"></i>
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
  import {getMainRisk} from 'api/api'

  export default {
    data() {
      return {
        // 当前主险
        prodkey: '',
        // 存产品条数
        productList: []
      }
    },
    created() {
      this.prodkey = JSON.parse(sessionStorage.getItem('prodkey'))

      // 添加主险
      this.getMainRisk()

    },
    methods: {
      // 添加主险
      getMainRisk(compkey) {
        getMainRisk(compkey).then((res) => {
          if(res.status === '0') {
            this.productList = this.normalizeProdlist(res.prodlist)
          }
        })
      },
      // 过滤掉当前主险
      normalizeProdlist(list) {
        console.log(list)
        return list.filter((item) => {
          return item.prodkey !== this.prodkey
        })
      },
      chooseProduct() {

      }
    }
  }
</script>

<style scoped>
  @import "../css/add-main.css";
</style>
