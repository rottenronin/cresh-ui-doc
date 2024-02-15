<template>
  <div id="app-wrapper">
    <CAlert
      class="alt no-margin"
      type="warning"
    >
      The site is still under construction...
    </CAlert>
    <div id="app-content">
      <AppDrawer />
      <main id="app-body">
        <CHeader>
          <!-- menu trigger to show/hide sidebar -->
          <CIcon
            name="burger-menu"
            color="primary"
            class="c-mr-15 cursor-pointer"
            @click="onToggle"
          />

          <div class="flex-1" />
          <div>

          </div>
        </CHeader>
        <section class="router-view-content">
          <router-view />
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  helpers,
} from '@long2x/cresh-ui'
import AppDrawer from './components/layout/AppDrawer.vue'

function onToggle() {
  helpers.pubSubHelper.publish('toggle-drawer')
}
</script>

<style lang="scss">
#app-wrapper {
  display: flex;
  flex-direction: column;

  #app-content {
    display: flex;

    main#app-body {
      flex: 1;
    }

    .router-view-content {
      padding: 1.25rem;
      background: #f7fcfc;
    }
  }
}
</style>
