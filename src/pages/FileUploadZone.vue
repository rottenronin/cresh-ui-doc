<template>
  <div>
    <h3>Basique utilisation</h3>
    <CCodeSnippet
      :snippet="snippet1"
    >
      <CFileUploadZone
        @uploaded="onFileUploaded"
      />
    </CCodeSnippet>

    <h3>showFilename flag</h3>
    <CCodeSnippet
      :snippet="snippet2"
    >
      <CFileUploadZone :show-filename="true" />
    </CCodeSnippet>
  </div>
</template>

<script lang="ts" setup>

const snippet1 = `
  <CFileUploadZone />
`

const snippet2 = `
  <CFileUploadZone :show-filename="true" />
`

function onFileUploaded(_file: File) {
  // console.log('uploaded file', file)
}
</script>