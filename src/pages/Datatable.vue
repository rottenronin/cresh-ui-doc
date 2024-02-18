<template>
  <h2>C-Datatable</h2>
  <h3>basic utilisation</h3>
  <CCodeSnippet :snippet="snipet1">
    <CButton
      @click="onInsertItem"
    >
      Insérer un nouveau item
    </CButton>
    <br />
    <CButton
      color="red"
      @click="onRemoveItem"
    >
      Supprimer le dernier
    </CButton>

    <CDatatable
      :items="state.items"
      :headers="headers"
    />
  </CCodeSnippet>

  <h3>custom pages</h3>
  par défaut [5, 10, 15]
  <CCodeSnippet :snippet="snipet2">
    <CDatatable
      :items="state.items"
      :headers="headers"
      :pages="[5, 100, 200]"
      :items-per-page="100"
    />
  </CCodeSnippet>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import { helpers } from '@long2x/cresh-ui'

const state = reactive({
  items: Array.from({length: 10}).map(() => ({
    id: helpers.uuidv4(),
    name: helpers.uuidv4(),
    email: `${helpers.uuidv4()}@cresh.test.io`
  }))
})

const headers = [{
  text: '#ID',
  key: 'id',
  align: 'start',
  sortable: true,
}, {
  text: 'Nom',
  key: 'name',
  align: 'start',
  sortable: true,
}, {
  text: 'Email',
  key: 'email',
  align: 'start',
  sortable: true,
  sortOrder: 'desc'
}]

const snipet1 = `
  <CDatatable
    :items="items"
    :headers="headers"
  />
`
const snipet2 = `
  <CDatatable
    :items="state.items"
    :headers="headers"
    :pages="[5, 100, 200]"
    :items-per-page="100"
  />
`

function onInsertItem() {
  state.items.push(
    {
      id: helpers.uuidv4(),
      name: helpers.uuidv4(),
      email: `${helpers.uuidv4()}@cresh.test.io`
    }
  )
}

function onRemoveItem() {
  state.items.splice(state.items.length - 1, 1)
}
</script>

<style>
.code-snippet {
  width: 100%;
}
</style>
