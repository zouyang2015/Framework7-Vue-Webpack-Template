<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left back-link=" " sliding></f7-nav-left>
      <f7-nav-center sliding>产品详情</f7-nav-center>
    </f7-navbar>

    <f7-block inner tabs class="detail-navi">
      <f7-buttons class="page-list">
        <f7-button href="/profit/" class="page-list-item"><span>保险利益</span></f7-button>
        <f7-button href="/clause/" class="page-list-item"><span>条款全文</span></f7-button>
        <f7-button href="/rule/" class="page-list-item"><span>投保规则</span></f7-button>
      </f7-buttons>
    </f7-block>

    <div class="form-warpper">
      <h2 class="h2-title">被保人信息</h2>
      <f7-list>
        <!-- 性别 -->
        <f7-list-item class="sex">
          <h3 class="h3-title">性别</h3>
          <template v-for="(item, index) in sexAry">
            <input v-model="formData.sex" :value="item" :id="item" type="radio"><label
            :for="item">{{item === '1' ? '男':'女'}}</label>
          </template>
        </f7-list-item>

        <!-- 年龄 -->
        <f7-list-item class="age">
          <h3 class="h3-title">年龄</h3>
          <input type="number" class="text" v-model="formData.age" value="" :placeholder="age.paramrange">
          <div class="input-overlay" @click="inputAge(age, 'age')"></div>
          <div class="icon_calendar"><span>生日</span></div>
          <div class="date"><input type="date" v-model="formData.birthday" value="" class="birthday"
                                   @change="changeBirthday" @blur="blurBirthday"></div>
        </f7-list-item>
      </f7-list>
    </div>


    <div class="form-warpper">
      <template if="mainRisk && mainRisk.length" v-for="(item, index) in mainRisk">
        <h4 class="h4-title"><span :class="{'main-risk': item.classtype === 'M'}">{{item.prodname}}</span><i
          class="ico-close" v-if="item.classtype !== 'M'"></i></h4>
      </template>
      <f7-swiper v-if="scrollData && scrollData.length" class="scroll" :params="{speed:500, slidesPerView: 'auto', spaceBetween: 10}">
        <f7-swiper-slide v-for="(scroll, ind) in scrollData" :key="ind">{{scroll}}</f7-swiper-slide>
      </f7-swiper>

      <f7-list>
        <template if="mainRisk && mainRisk.length" v-for="(item, index) in mainRisk">
          <f7-list-item class="other" v-if="item.paramcode !=='s' && item.paramcode !== 'a'">
            <h3 class="h3-title">{{item.paramname}}</h3>

          </f7-list-item>
        </template>
      </f7-list>


    </div>
    1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1
  </f7-page>
</template>

<script>
  import {getProductDetail, getMainRisk} from 'api/api'
  import {toast, jsGetAge} from 'common/js/common'

  export default {
    data() {
      return {
        // 产品详情数据
        productDetailAry: [],
        // 产品详情中主险和附加险的数据
        productList: [],
        // 主险
        mainRisk: [],
        // 附加险
        additionalRisk: [],

        // 表单中绑定的数据
        formData: {
          sex: '',  // 姓别
          age: '' // 年龄
        },
        // 暂存formData数据-用于不想麻烦赋值，以后再处理等,如日期选择器，选择时不赋值只有点击完成时才进行赋值操作
        temporaryStorage: {
          saveAge: ''
        },
        // 姓别对象-特殊处理
        sex: {
          paramcode: "s",
          paramname: "性别",
          paramrange: "1,2",
          paramtype: "1",
          paramvalue: "1"
        },
        age: {
//          paramcode: "a",
//          paramname: "被保险人年龄",
//          paramrange: "0-65",
//          paramtype: "0",
//          paramvalue: "0"
        },
        sexAry: [],
        // 弹出model窗口信息
        modalMessage: {
          title: '',
          range: '',
          birthday: ''
        },


        // 假数据
        paramAry: [
          {
            "paramcode": "s",
            "paramname": "性别",
            "paramrange": "1,2",
            "paramtype": "1",
            "paramvalue": "1"
          },
          {
            "paramcode": "a",
            "paramname": "被保险人年龄",
            "paramrange": "0-74",
            "paramtype": "0",
            "paramvalue": "0"
          },
          {
            "paramcode": "ip",
            "paramname": "保险期间",
            "paramrange": "至90周岁",
            "paramtype": "1",
            "paramvalue": "至90周岁"
          },
          {
            "paramcode": "fs",
            "paramname": "缴费方式",
            "paramrange": "期交",
            "paramtype": "1",
            "paramvalue": "期交"
          },
          {
            "paramcode": "fp",
            "paramname": "缴费期间",
            "paramrange": "3年,5年,10年",
            "paramtype": "1",
            "paramvalue": "3年"
          },
          {
            "paramcode": "cla",
            "paramname": "祝寿金领取年龄",
            "paramrange": "60周岁,65周岁,70周岁,75周岁,80周岁,85周岁",
            "paramtype": "1",
            "paramvalue": "60周岁"
          },
          {
            "paramcode": "ff",
            "paramname": "年交保费",
            "paramrange": "1000-2147483647",
            "paramtype": "0",
            "paramvalue": "1000"
          }
        ],
      }
    },
    created() {
      let params = this.$route.params
      // 获取产品详情
      this.getProductDetail(params.prodkey)

      // 获取主页推荐产品、添加主险
      getMainRisk()
    },
    computed: {
      // 滚动关键字
      scrollData() {
        if(this.mainRisk && this.mainRisk.length) {
          return this.mainRisk[0].tagstr.split('^')
        }
        return ''
      }
    },
    methods: {
      getProductDetail(prodkey) {
        getProductDetail(prodkey).then((res) => {
          if (res.status === '0') {
            // 产品详情数据
            this.productDetailAry = res
            // 产品详情中主险和附加险的数据
            this.productList = res.prodlist

            this.normalizeDetailAry()
          }
        })
      },
      // 对获取的产品详情进行处理-分别处理主险、附加险
      normalizeDetailAry() {
        this.productList.forEach((item) => {
          if (item.classtype === 'M') {
            this.mainRisk.push(item)
          } else {
            this.additionalRisk.push(item)
          }

          if (this.mainRisk && this.mainRisk.length) {
            // 特别处理性别
            this.mainRisk[0].param.forEach((item) => {
              if (item.paramcode === 's') {
                this.sex = item
                this.sexAry = item.paramrange.split(',')
                this.formData.sex = item.paramvalue
              }
            })
            // 特别处理年龄
            this.mainRisk[0].param.forEach((item) => {
              if (item.paramcode === 'a') {
                this.age = item
                this.formData.age = item.paramvalue === '0' ? '' : item.paramvalue
              }
            })
          }


        })
      },
      // 输入年龄等
      inputAge(message, target) {
        this.$f7.modal({
          text: `<div id="input-title" class="input-title">${message.paramname}</div>`,
          afterText: `<div id="input-info"><input type="tel" name="tel" value="" id="input-content" placeholder="${message.paramrange}" autofocus></div>`,
          buttons: [
            {
              text: '取消',
              onClick: () => {
                return
              }
            },
            {
              text: '确定',
              close: false,
              onClick: () => {
                var rangeAry = message.paramrange.split('-')
                let dom = document.getElementById('input-content')
                let val = dom.value
                if (val >= (rangeAry[0] | 0) && val <= (rangeAry[1] | 0)) {
                  this.$f7.closeModal('.modal')
                  if (target === 'age') {
                    this.formData.age = dom.value
                  }
                } else {
                  toast(`请输入${message.paramrange}之间的数字`)
                }
              }
            }
          ]
        })
      },
      // 日期转周岁
      changeBirthday() {
        this.temporaryStorage.saveAge = jsGetAge(this.formData.birthday)
      },
      // 日期转周岁-点击完成后赋值
      blurBirthday() {
        this.formData.age = this.temporaryStorage.saveAge
      }
    }
  }

</script>

<style scoped>
  @import "../css/product-detail.css";
</style>