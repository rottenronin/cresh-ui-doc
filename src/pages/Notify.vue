<template>
  <div class="notify-page">
    <h2>
      Notify page
    </h2>

    <CButton
      color="primary"
      outlined
      @click="() => onNotifySend('default')"
    >
      Envoyer un default notif
    </CButton>
    <br>
    <br>
    <CButton
      color="primary"
      outlined
      @click="() => onNotifySend('error')"
    >
      Envoyer un message erreur
    </CButton>
    <br>
    <br>
    <CButton
      color="error"
      outlined
      @click="() => onNotifsRemove()"
    >
      Supprimer tous les notifs
    </CButton>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import '@long2x/cresh-ui/c-notify.scss'

const app = getCurrentInstance()

const notify = app?.appContext.config.globalProperties.$notify

function onNotifySend (
  type: 'error'
    | 'warning'
    | 'info'
    | 'raw'
    | 'default'
    | 'success',
  _position:
    'top-left'
    | 'top-right'
    | 'top'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom'
    | 'left'
    | 'right' = 'top-right',
): void {
  // eslint-disable-next-line max-len
  notify.send('hello world', {
    duration: 5000,
    type,
    position: 'top-right',
    closable: true,
    persistent: false,
    callback: undefined,
    classes: undefined,
  })
}

function onNotifsRemove() {
  notify.clearAll()
}
</script>
