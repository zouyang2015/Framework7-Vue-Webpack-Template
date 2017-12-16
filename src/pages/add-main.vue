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

    <div class="choose-pro">
      <f7-accordion-item>
        <f7-accordion-toggle><span>已经选择产品{{selectedList.length}}个</span></f7-accordion-toggle>
        <f7-accordion-content>
          <f7-list class="lists">
            <f7-list-item v-for="(item, index) in selectedList" :key="index" @click="removedProduct(item)">
              <span>{{item.prodname}}</span>
              <i class="icon-check_circle"></i>
            </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-accordion-item>
    </div>

    <f7-list class="lists mt">
      <f7-list-item @click="selectedProduct(item)" v-for="(item, index) in productList" :key="index" :class="{'check':item.checked}">
        <span>{{item.prodname}}</span>
        <i class="icon-check_circle"></i>
      </f7-list-item>
    </f7-list>

    <f7-toolbar bottom class="selected-confirm">
      <div class="confirm" @click="confirm">确定</div>
    </f7-toolbar>

  </f7-page>
</template>

<script>
  import {getMainRisk, addRisk} from 'api/api'

  export default {
    data() {
      return {
        // 当前主险
        prodkey: '',
        detailToAdd: {},
        mainToDetail: [],
        // 存产品条数
        productList: [],

        loading: true,
      }
    },
    created() {
      this.$f7.showIndicator()
      this.prodkey = JSON.parse(sessionStorage.getItem('prodkey')) || ''
      this.detailToAdd = JSON.parse(sessionStorage.getItem('detailToAdd')) || {}
      this.mainToDetail = JSON.parse(sessionStorage.getItem('mainToDetail')) || []
      this.additionalToDetail = JSON.parse(sessionStorage.getItem('additionalToDetail')) || []

      // 添加主险
      this.getMainRisk()
    },
    computed: {
      // 计算被选中的产品项
      selectedList() {
        return this.productList.filter((item) => {
          return item.checked && item.checked === true
        })
      }
    },
    methods: {
      // 添加主险
      getMainRisk(compkey) {
        getMainRisk(compkey).then((res) => {
          if (res.status === '0') {
            this.productList = this.normalizeProdlist(res.prodlist)
            this.$f7.hideIndicator()
            this.echoedData()
          }
        })
      },
      // 过滤掉当前主险
      normalizeProdlist(list) {
        return list.filter((item) => {
          return item.prodkey !== this.prodkey
        })
      },
      // 回显处理
      echoedData() {
        this.mainToDetail.forEach((selected) => {
          this.productList.forEach((item) => {
            if (selected.prodkey === item.prodkey) {
              this.$set(item, 'checked', true)
            }
          })
        })
      },
      // 点击下面列表添加、移除产品
      selectedProduct(product) {
        if (typeof product.checked === 'undefined') {
          this.$set(product, 'checked', true)
        } else {
          product.checked = !product.checked
        }
      },
      // 点击已选中产品移除
      removedProduct(product) {
        product.checked = false
      },
      // 添加主险(附加险)确认
      confirm() {
        let option = Object.assign({}, this.detailToAdd, {
          prodlist: []
        })
        this.productList.forEach((item) => {
          if (typeof item.checked !== 'undefined') {
            let obj = {}
            obj.prodkey = item.prodkey
            obj.pageid = item.pageid || ''
            obj.parentprodkey = item.parentprodkey || ''
            if (item.checked === true) {
              obj.option = 'A'
            } else {
              obj.option = 'D'
              // 记录被删掉的主险，将其附加险也选中一起删掉（处理的是session)
              this.additionalToDetail = this.additionalToDetail.filter((additional) => {
                return item.prodkey !== additional.parentprodkey
              })
              sessionStorage.setItem('additionalToDetail', JSON.stringify(this.additionalToDetail))
            }
            option.prodlist.push(obj)
          }
        })

        if (option.prodlist.length) {
          this.$f7.showIndicator()
          this.addRisk(option)
        } else {
          this.$f7.mainView.router.back()
        }
      },
      // 添加主险(附加险)确认-ajax
      addRisk(option) {
        addRisk(option)
          .then((res) => {
            if (res.status === '0') {
              this.$f7.hideIndicator()
              sessionStorage.setItem('mainToDetail', JSON.stringify(res.prodlist))
              this.$f7.mainView.router.back()
            }
          })
      }
    }
  }
</script>

<style scoped>
  @import "../css/add-main.css";
</style>