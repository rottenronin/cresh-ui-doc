<template>
  <CHeader>
    <!-- menu trigger to show/hide sidebar -->
    <CIcon
      name="burger-menu"
      color="primary"
      class="c-mr-15 cursor-pointer"
      @click="onToggle"
    />

    <div class="flex-1" />
    <div
      class="right-header-content flex justify-content-center align-items-center"
    >
      <CDropdown
        v-model="isLocalesDropdownVisible"
        :pre-selected-item="{
          key: 'fr',
          value: i18n.t('locales.fr'),
        }"
        :items="[{
          key: 'fr',
          value: i18n.t('locales.fr'),
        }, {
          key: 'en',
          value: i18n.t('locales.en')
        }]"
        v-slot="{ selectedItem  }"
        @select="onLocaleChange"
      >
        <div
          v-tooltip="i18n.t('tooltips.change_locale')"
          class="flex"
        >
          <CIcon
            name="globe"
          />
          <span
            class="translation-locale"
            v-if="selectedItem"
          >
            {{ selectedItem.value }}
          </span>
        </div>
      </CDropdown>
      <a
        class="cursor-pointer"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rottenronin/cresh-ui"
      >
        <img
          src="@/assets/github-mark.svg"
          width="20"
          v-tooltip="'github'"
        />
      </a>
    </div>
  </CHeader>
</template>

<script lang="ts" setup>
import {
  helpers,
} from '@long2x/cresh-ui'

import { useI18n } from 'vue-i18n'
import {
  // computed,
  ref,
} from 'vue'

const i18n = useI18n()

const isLocalesDropdownVisible = ref(false)

// const currentLocale = computed(() => i18n.locale)

function onToggle() {
  helpers.pubSubHelper.publish('toggle-drawer')
}

function onLocaleChange({ key }: { key: string}) {
  i18n.locale.value = key
}
</script>