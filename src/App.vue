<template>
  <div id="app-wrapper">
    <CAlert
      class="alt no-margin text-center"
      type="warning"
    >
      {{ $t('banner.website_under_construction') }}
    </CAlert>
    <div id="app-content">
      <AppDrawer />
      <main id="app-body">
        <AppHeader />
        <section class="router-view-content">
          <router-view />
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AppDrawer from './components/layout/AppDrawer.vue'
import AppHeader from './components/layout/AppHeader.vue'
import { watch } from 'vue'

const route = useRoute()

watch(() => route, () => {
  console.log('-- on route change', route.name)
})
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
