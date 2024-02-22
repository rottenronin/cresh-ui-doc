<template>
  <CDrawer
    v-model="visible"
    height="100vh"
    :mobile-breakpoint="mobileBreakpoint"
  >
    <h2
      class="text-align-center c-cursor cursor-pointer"
      @click="goto('/')"
    >
      Cresh UI
    </h2>

    <CDrawerItem
      :selected="currentRoute === '/icons'"
      @click="goto('/icons')"
    >
      <div class="text">
        Icons
      </div>
    </CDrawerItem>

    <CDrawerCollapsible
      :collapsed="[
        'inputs',
        'selects',
        'checkboxes',
        'datetimeinputs',
        'fileinputs',
        'phonenumberinput'
      ].includes(currentRoute?.toString() || '') === false"
    >
      <template #title>
        Form controls
      </template>

      <CDrawerItem
        :selected="currentRoute === '/form-controls/input'"
        @click="() => goto('/form-controls/input')"
      >
        <div class="text">
          c-input
        </div>
      </CDrawerItem>

      <CDrawerItem
        :selected="currentRoute === '/form-controls/checkbox'"
        @click="() => goto('/form-controls/checkbox')"
      >
        <div class="text">
          c-checkbox
        </div>
      </CDrawerItem>

      <CDrawerItem
        :selected="currentRoute === '/form-controls/select'"
        @click="() => goto('/form-controls/select')"
      >
        <div class="text">
          c-select
        </div>
      </CDrawerItem>

      <CDrawerItem
        :selected="currentRoute === '/form-controls/datetimeinput'"
        @click="() => goto('/form-controls/datetimeinput')"
      >
        <div class="text">
          c-datetime-input
        </div>
      </CDrawerItem>

      <CDrawerItem
        :selected="currentRoute === '/form-controls/fileinput'"
        @click="() => goto('/form-controls/fileinput')"
      >
        <div class="text">
          c-file-input
        </div>
      </CDrawerItem>

      <CDrawerItem
        :selected="currentRoute === '/form-controls/phoneinput'"
        @click="() => goto('/form-controls/phoneinput')"
      >
        <div class="text">
          c-phone-input
        </div>
      </CDrawerItem>
    </CDrawerCollapsible>

    <CDrawerItem
      :selected="currentRoute === '/notify'"
      @click="() => goto('/notify')"
    >
      <div class="text">
        notif
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/accordion'"
        @click="() => goto('/accordion')"
    >
      <div class="text">
        Accordion
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/switchbutton'"
        @click="() => goto('/switchbutton')"
    >
      <div class="text">
        Switch button
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/tooltip'"
        @click="() => goto('/tooltip')"
    >
      <div class="text">
        Tooltip
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/tabs'"
        @click="() => goto('/tabs')"
    >
      <div class="text">
        c-tabs
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/chart'"
        @click="() => goto('/chart')"
    >
      <div class="text">
        charts
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/slider'"
        @click="() => goto('/slider')"
    >
      <div class="text">
        c-slider
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/steps'"
        @click="() => goto('/steps')"
    >
      <div class="text">
        c-step
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/menu'"
        @click="() => goto('/menu')"
    >
      <div class="text">
        c-menu
      </div>
    </CDrawerItem>

    <CDrawerItem
      :selected="currentRoute === '/modal'"
      @click="() => goto('/modal')"
    >
      <div class="text">
        c-modal
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/dropdown'"
        @click="() => goto('/dropdown')"
    >
      <div class="text">
        c-dropdown
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/datatable'"
        @click="() => goto('/datatable')"
    >
      <div class="text">
        c-datatable
      </div>
    </CDrawerItem>

    <CDrawerItem
        :selected="currentRoute === '/button'"
        @click="() => goto('/button')"
    >
      <div class="text">
        c-button
      </div>
    </CDrawerItem>
    <CDrawerCollapsible
      :collapsed="[
        'document-item',
        'file-upload-zone',
      ].includes(currentRoute?.toString() || '') === false"
    >
      <template #title>
        Files components
      </template>
      <CDrawerItem
        :selected="currentRoute === '/documentitem'"
        @click="() => goto('/documentitem')"
      >
        <div class="text">
          c-document-item
        </div>
      </CDrawerItem>
      <CDrawerItem
        :selected="currentRoute === '/fileuploadzone'"
        @click="() => goto('/fileuploadzone')"
      >
        <div class="text">
          c-file-upload-zone
        </div>
      </CDrawerItem>

      <CDrawerItem
        :selected="currentRoute === '/documentviewer'"
        @click="() => goto('/documentviewer')"
      >
        <div class="text">
          c-document-viewer
        </div>
      </CDrawerItem>
    </CDrawerCollapsible>

    <CDrawerItem
      :selected="currentRoute === '/tag'"
      @click="() => goto('/tag')"
    >
      <div class="text">
        c-tag
      </div>
    </CDrawerItem>

    <CDrawerItem
      :selected="currentRoute === '/alert'"
      @click="() => goto('/alert')"
    >
      <div class="text">
        c-alert
      </div>
    </CDrawerItem>

    <CDrawerItem
      :selected="currentRoute === '/form-controls/yupvalidation'"
      @click="() => goto('/form-controls/yupvalidation')"
    >
      <div class="text">
        yup-helper
      </div>
    </CDrawerItem>

    <CDrawerCollapsible
      :collapsed="[
        'date-range-filters'
      ].includes(currentRoute?.toString() || '') === false"
    >
      <template #title>
        Filters
      </template>

      <CDrawerItem
        :selected="currentRoute === '/daterangefilters'"
        @click="() => goto('/daterangefilters')"
      >
        <div class="text">
          date-range-filters
        </div>
      </CDrawerItem>
    </CDrawerCollapsible>
  </CDrawer>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeMount,
  inject,
  onBeforeUnmount,
} from 'vue'

import {
  useRoute,
  useRouter,
} from 'vue-router'

import { helpers }
  from '@long2x/cresh-ui'

// boolean to diplay/hide the app drawer
const visible = ref<boolean>(true)

// display the view for mobile if width is under 600px
const mobileBreakpoint = 600
const route = useRoute()
const router = useRouter()

const currentRoute = computed(
  () => route.name,
)

function goto (routeName: typeof route.name) {
  router.push(routeName)
}

onBeforeMount(() => {
  helpers.pubSubHelper.subscribe('toggle-drawer', {
    key: 'app-drawer',
    callback: () => {
      visible.value = !visible.value
    }
  })
  const currentBreakPoint = inject<number>('breakpoint') || window.innerWidth
  visible.value = currentBreakPoint > mobileBreakpoint

  // subscribe to breakpoint change
  helpers.pubSubHelper.subscribe('breakpoint-change', {
    key: 'app-drawer',
    callback: (bp: number) => {
      visible.value = bp > mobileBreakpoint
    }
  })
})

onBeforeUnmount(() => {
  helpers.pubSubHelper.unsubscribe('breakpoint-change', 'app-drawer')
})

</script>
