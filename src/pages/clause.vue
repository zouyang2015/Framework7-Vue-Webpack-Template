<template>
  <f7-page class="clause">
    <f7-navbar title="条款全文" back-link=" " sliding></f7-navbar>
    <f7-block class="pdf">
      <f7-button :href="pdfurl">下载查看原版pdf</f7-button>
    </f7-block>

  </f7-page>

</template>

<script>
  import {download} from 'api/api'

  export default {
    data() {
      return {
        prodkey: '',
        pdfurl: ''
      }
    },
    created() {
      this.$f7.showIndicator()
      this.prodkey = this.$route.params.prodkey

      this.download()
    },
    methods: {
      download() {
        let option = {
          prodkey: this.prodkey
        }
        download(option).then((res) => {
          this.pdfurl = res.pdfurl
          this.$f7.hideIndicator()
        })
      }
    }
  }
</script>

<style>
  .clause .content-block {
    margin: 25px 0 15px 0;
  }

  .clause .button {
    border: 1px solid #e6e6e6;
    background: #ffffff;
    color: #333333;
    line-height: 40px;
    height: 40px;
  }
</style>
