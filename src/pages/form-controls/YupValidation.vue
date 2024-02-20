<template>
  <div class="yup-validation">
    <h2>
      Yup helper
    </h2>

    <h3>
      useYupHelper
    </h3>
    <CCodeSnippet
      :snippet="snippetForm1"
    >
      <form>
        <CInput
          name="yupFirstname"
          class="firstname"
          :label="'Prénom'"
          v-model="form1.firstname"
          :error-message="state.errors?.firstname"
        />

        <CInput
          name="yupLastname"
          class="lastname"
          :label="'Nom'"
          v-model="form1.lastname"
          :error-message="state.errors?.lastname"
        />

        <CInput
          name="yupEmail"
          class="email"
          :label="'Email'"
          v-model="form1.email"
          :error-message="state.errors?.email"
        />
      </form>
      <div class="actions">
        <CButton
          color="primary"
          class="c-mr-35"
          @click="onValidateForm1"
        >
          Valider
        </CButton>
        <CButton
          color="secondary"
          @click="onResetForm"
        >
          Ré-initialiser
        </CButton>
      </div>
    </CCodeSnippet>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  toRef,
} from 'vue'

import {
  helpers
} from '@long2x/cresh-ui'

import * as yup from 'yup'

const form1 = reactive({
  firstname: '',
  lastname: '',
  email: '',
})

const state = reactive<{
  errors?: Record<string, string>
}>({
})

const {
  reset: resetForm1,
  validate: validateForm1,
} = helpers.useYupHelper({
  fields: toRef(form1),
  schema: yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
  }),
  initialValues: {
    firstname: '',
    lastname: '',
    email: '',
  }
})

function onResetForm() {
  resetForm1()
  state.errors = undefined
}

async function onValidateForm1() {
  const {
    errors,
  } = await validateForm1()
  state.errors = errors
}

const snippetForm1 = `
  const {
    reset: resetForm1,
    validate: validateForm1,
  } = useYupHelper({
    fields: ref(form1),
    schema: yup.object({
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      email: yup.string().email().required(),
    }),
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    }
  })
`
</script>
