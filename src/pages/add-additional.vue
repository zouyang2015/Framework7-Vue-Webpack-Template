<template>
  <f7-page>
    <f7-navbar class="additional">
      <f7-nav-left back-link=" " sliding></f7-nav-left>
      <f7-nav-center sliding>添加附加险</f7-nav-center>
    </f7-navbar>

    <div v-if="productList && productList.length > 1" class="choose">
      <f7-accordion>
        <!-- Item 1 -->
        <f7-accordion-item v-for="(lists, index) in productList" :key="index">
          <f7-accordion-toggle>{{lists.prodname}}</f7-accordion-toggle>
          <f7-accordion-content v-for="(item, ind) in lists.sprodlist" :key="ind">
            <div class="text">
              <p class="title">{{item.prodname}}</p>
              <p class="desc">{{item.prodtag}}</p>
            </div>
            <i class="icon-check_circle"></i>
          </f7-accordion-content>
        </f7-accordion-item>
      </f7-accordion>
    </div>

    <f7-list class="lists mt">
      <template v-for="(lists, index) in productList">
        <f7-list-item @click="chooseProduct" v-for="(item, index) in lists.sprodlist" :key="index" :class="{'active':''}">
          <div class="text">
            <p class="title">{{item.prodname}}</p>
            <p class="desc">{{item.prodtag}}</p>
          </div>
          <i class="icon-check_circle"></i>
        </f7-list-item>
      </template>
    </f7-list>

  </f7-page>
</template>

<script>
  import {getAdditionalRisk, addRisk} from 'api/api'

  export default {
    data() {
      return {
        prodkey: '',
        // 存产品条数
        productList: []
      }
    },
    created() {
      this.prodkey = JSON.parse(window.sessionStorage.getItem('prodkey'))
      // 添加附加险
      this.getAdditionalRisk()

//      addRisk()
    },
    methods: {
      // 添加附加险
      getAdditionalRisk() {
        let param = {
          complist:[],
          prodlist:[],
          mprodlist:[
            {
              prodkey:this.prodkey
            },
            {
              prodkey:"PR171019000000000006"
            }
          ]
        }
        getAdditionalRisk(param).then((res) => {
          if(res.status === '0') {
            this.productList = res.prodlist
          }
        })
      },
      chooseProduct() {

      }
    }
  }
</script>

<style scoped>
  @import "../css/add-additional.css";
</style>
