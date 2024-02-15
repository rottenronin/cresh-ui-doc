<template>
  <div class="document-item-page">
    <h3>Utilisation basique</h3>
    <CCodeSnippet
      :snippet="snippet1"
    >
      <CDocumentItem
        label="Carte ID"
        link="http://via.placeholder.com/ID+CARD"
      />
    </CCodeSnippet>

    <h3>Avec les actions ['view', 'download', 'upload', 'validate']</h3>

    <CCodeSnippet
      :snippet="snippet2"
    >
      <CDocumentItem
        label="Carte ID"
        link="http://via.placeholder.com/ID+CARD"
        :actions="['download', 'read', 'upload', 'validate']"
      />
    </CCodeSnippet>

    <h3>Approved flag</h3>
    <CCodeSnippet
      :snippet="snippet2"
    >
      <CDocumentItem
        label="Carte ID"
        link="http://via.placeholder.com/ID+CARD"
        :actions="['download', 'read', 'upload', 'validate']"
        :approved="true"
      />
    </CCodeSnippet>
  </div>
</template>

<script lang="ts" setup>


const snippet1 = `
  <CDocumentItem
    label="Carte ID"
    link="http://via.placeholder.com/ID+CARD"
  />
`
const snippet2 = `
  <CDocumentItem
    approved
    label="Carte ID"
    link="http://via.placeholder.com/ID+CARD"
    :actions="['download', 'read', 'upload', 'validate']"
  />
`
</script>
