<template>
  <h2>C-button</h2>

  <CCodeSnippet :snippet="snippet1">
    <CButton>
      classic
    </CButton>

    <CButton color="default">
      default
    </CButton>
    
    <template #description>
      There are different colors of buttons, primary/secondary/tertiary/default...
    </template>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet2">
    <CButton
      outlined
    >
      outlined
    </CButton>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet3">
    <CButton>
      <template #prefix>
        <CheckCircleIcon
          color="white"
        />
      </template>
      with prefix icon
    </CButton>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet4">
    <CButton
      disabled
    >
      disabled
    </CButton>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet5">
    <CButton
      :is-loading="true"
    >
      loading
    </CButton>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet6">
    <CButton
      :color="'#1fb95d'"
    >
      colored
    </CButton>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet7">
    <CButton
      text
    >
      just text
    </CButton>
  </CCodeSnippet>

  <CCodeSnippet :snippet="snippet8">
    <CButton
      slim
    >
      slim
    </CButton>
  </CCodeSnippet>
</template>

<script setup lang="ts">
const snippet1 = `
    <CButton>
      classic
    </CButton>
`
const snippet2 = `
    <CButton
      outlined
    >
      outlined
    </CButton>
`
const snippet3 = `
    <CButton>
      <template #prefix>
        <CheckCircleIcon
          color="white"
        />
      </template>
      with prefif icon
    </CButton>
`
const snippet4 = `
    <CButton
      disabled
    >
      disabled
    </CButton>
`
const snippet5 = `
    <CButton
      :is-loading="true"
    >
      loading
    </CButton>
`
const snippet6 = `
    <CButton
      :color="'#1fb95d'"
    >
      colored
    </CButton>
`
const snippet7 = `
    <CButton
      text
    >
      just text
    </CButton>
`
const snippet8 = `
    <CButton
      slim
    >
      slim
    </CButton>
`


</script>

<style lang="scss">

</style>
