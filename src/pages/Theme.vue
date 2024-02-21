<template>
  <div id="theme-page">
    <p class="description">
      {{ $t('theme.introduction') }}
    </p>

    <h4>{{ $t('theme.available_colors') }}</h4>

    <CDatatable
      :items="Object.entries(colorsMap).map(([key, value]) => ({
        variable: `--color-${key}`,
        description: $t(`theme.colors.${key}`),
        defaultValue: value,
      }))"
      :headers="headerItems"
      no-footer
      :items-per-page="-1"
    />

    <h4>{{ $t('theme.available_fonts') }}</h4>

    <CDatatable
      :items="Object.entries(fonstMap).map(([key, value]) => ({
        variable: `--font-text-${key}`,
        description: $t(`theme.fonts.${key}`),
        defaultValue: value,
      }))"
      :headers="headerItems"
      no-footer
      :items-per-page="-1"
    />

    <h4>{{ $t('theme.how_to_work') }}</h4>

    <pre class="codes-wrapper">
      <code>
        // put custom variables before the style.css in App.vue style bloc for example
        root: {
          --color-primary: '139, 0, 0';
          --font-text-bold: 'cursive';
          ...
        }
        // import cresh-ui style
        @import '@long2x/cresh-ui/style.css';
        // import cresh-ui default theme
        @import '@long2x/cresh-ui/default-theme.css';
      </code>
    </pre>
  </div>
</template>

<script lang="ts" setup>
const headerItems = [{
  text: '#Variable',
  key: 'variable',
  align: 'start',
  sortable: false,
}, {
  text: 'Description',
  key: 'description',
  align: 'start',
  sortable: false,
}, {
  text: 'DefaultValue',
  key: 'defaultValue',
  align: 'start',
  sortable: false,
}]

const colorsMap = {
  primary: '64, 14, 201',
  secondary: '52, 156, 231',
  tertiary: '0, 236, 203',
  shadow: '226, 226, 226',
  grey: '146, 146, 157',
  text: '61, 100, 124',
  warning: '255, 165, 0',
  'light-grey': '227, 225, 225',
  'lightest-grey': '245, 244, 244',
  'lightest-blue': '247, 251, 255',
  dark: '34, 33, 33',
  black: '0, 0, 0',
  error: '252, 90, 90',
  success: '0, 197, 170',
  border: '187, 201, 211',
  white: '255, 255, 255',
  'datatable-hover': '223, 235, 244',
  header: '232, 236, 239',
  'lite-datatable-header-text-color': '190, 203, 213'
}

const fonstMap = {
  regular: 'lato-regular',
  'semibold': 'comfortaa-semibold',
  bold: 'comfortaa-bold'
}
</script>

<style scoped>
  .codes-wrapper {
    background: rgb(var(--color-dark));
    code {
      color: rgb(var(--color-grey));
    }
  }
</style>