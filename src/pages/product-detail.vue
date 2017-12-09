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
      <f7-list form>
        <!-- 性别 -->
        <f7-list-item class="sex">
          <h3 class="h3-title">性别</h3>
          <template v-for="(item, index) in sex">
            <input v-model="formData.sexValue" :value="item.value" :id="item.value" type="radio"><label :for="item.value">{{item.name}}</label>
          </template>
        </f7-list-item>

        <!-- 年龄 -->
        <f7-list-item class="age">
          <h3 class="h3-title">年龄</h3>
          <p class="text" @click="inputAge">{{formData.age}}</p>
          <div class="icon_calendar"><span>生日</span></div>
          <div class="date"><input type="date" v-model="formData.birthday" value="" class="birthday"></div>
        </f7-list-item>

        <f7-list-item>

        </f7-list-item>
      </f7-list>
    </div>


    <f7-block inner>
      222
    </f7-block>
    1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1
  </f7-page>
</template>

<script>
  import {toast} from 'common/js/common'

  export default {
    data() {
      return {
        // 表单中绑定的数据
        formData: {
          sexValue: 'male',  // 姓别
          age: '' // 年龄
        },
        // 姓别对象
        sex: [
          {name: '男', value: 'male'},
          {name: '女', value: 'female'}
        ],
        // 弹出model窗口信息
        modalMessage: {
          title: '被保人年龄',
          range: '0-65',
          birthday: ''
        }
      }
    },
    methods: {
      inputAge() {
        this.$f7.modal({
          text: `<div id="input-title" class="input-title">${this.modalMessage.title}</div>`,
          afterText: `<div id="input-info"><input type="tel" name="tel" value="" id="input-content" placeholder="${this.modalMessage.range}" autofocus></div>`,
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
                var rangeAry = this.modalMessage.range.split('-')
                let dom = document.getElementById('input-content')
                let val = dom.value
                if (val >= (rangeAry[0] | 0) && val <= (rangeAry[1] | 0)) {
                  this.$f7.closeModal('.modal')
                  this.formData.age = dom.value
                } else {
                  toast(`请输入${this.modalMessage.range}之间的数字`)
                }
              }
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>
  @import "../css/product-detail.css";
</style>