<template>
    <f7-page>
        <f7-navbar title="保险利益" back-link=" " sliding></f7-navbar>
        <f7-block inner class="content-block-top">

            <f7-accordion>
                <!-- Item 1 -->
                <f7-accordion-item class="item-content" v-for="(item,index) in accordionData" :key="index">
                    <f7-accordion-toggle>{{item.title}}</f7-accordion-toggle>
                    <f7-accordion-content>
                        {{item.content}}
                    </f7-accordion-content>
                </f7-accordion-item>
            </f7-accordion>


        </f7-block>
    </f7-page>
</template>

<script>
  export default {
    data() {
      return {
        accordionData: [
          {
            title: 'Item 1',
            content: 'Item 1 content...'
          },
          {
            title: 'Item 2',
            content: 'Item 2 content...'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .content-block {
    margin: 10px 0;
    padding: 0 15px;
    color: #6d6d72;
    box-sizing: border-box;
  }
  .content-block-top {
    margin-top: -2px
  }

  .accordion-list {

  }
  .accordion-item {
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #333333;
  }
  .accordion-item-toggle {
    box-sizing: border-box;
    min-height: 44px;
    display: flex;
    align-items: center;

    padding-right: 35px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
    background-size: 10px 20px;
    background-repeat: no-repeat;
    background-position: 95% center;
    background-position: calc(100% - 15px) center;
  }
  .accordion-item.accordion-item-expanded .accordion-item-toggle {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%2060%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'm60%2061.5-38.25%2038.25-9.75-9.75%2029.25-28.5-29.25-28.5%209.75-9.75z'%20transform%3D'translate(115%2C%2030)%20rotate(90)'%20fill%3D'%23c7c7cc'%2F%3E%3C%2Fsvg%3E");
    background-size: 20px 20px;
  }
  .accordion-item-content {
    position: relative;
    overflow: hidden;
    height: 0;
    font-size: 14px;
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
</style>