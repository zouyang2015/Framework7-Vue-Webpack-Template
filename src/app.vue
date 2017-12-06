<template>
  <!-- App -->
  <div id="app">

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-back" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Framework7</f7-nav-center>
          <f7-nav-right>
            <f7-link icon="icon-bars" @click="openActionVale = true"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-back" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Framework7</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" @click="openActionVale = true"></f7-link>
              </f7-nav-right>
            </f7-navbar>

            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/product-detail/20/" title="XXX产品"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
            </f7-list>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Actions -->
    <f7-actions id="actions" :opened="openActionVale">
      <!-- Actions Group -->
      <f7-actions-group>
        <!-- Actions Label -->
        <f7-actions-label>Hello</f7-actions-label>
        <!-- Actions Buttons -->
        <f7-actions-button>Button 1</f7-actions-button>
        <f7-actions-button @click="doSomething">Button 2</f7-actions-button>
      </f7-actions-group>
      <!-- Another Group -->
      <f7-actions-group>
        <!-- Cancel/Close Button -->
        <f7-actions-button color="red" bold>Cancel</f7-actions-button>
      </f7-actions-group>
    </f7-actions>

  </div>
</template>

<script>
  import Tab from 'components/tab/tab'

  export default {
    data() {
      return {
        openActionVale: false
      }
    },
    methods: {
      doSomething() {
      }
    },
    components: {
      Tab
    }
  }
</script>