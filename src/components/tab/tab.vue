<template>
  <div class="tab">
    <f7-button link="/product-list" title="推荐产品"></f7-button>
    <f7-button link="/product-classify" title="产品分类"></f7-button>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-link {
    padding-bottom: 5px
  }
</style>