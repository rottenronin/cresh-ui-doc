<template>
  <h2>useForm</h2>

  <form @submit.prevent="onSubmit">
    <CInput
      v-model="form.email"
      name="email"
      label="email"
      :error-message="errors?.email"
      @blur="onBlur"
    />
    <br>
    <CInput
      v-model="form.password"
      name="password"
      label="password"
      :error-message="errors?.password"
    />
    <br>
    <CDatetimeInput
      v-model="form.birthdate"
      :name="'birthdate'"
      :label="'birthdate'"
      :placeholder="
        'pos_info_client.birthdate_placeholder'"
      required
      class="birthdate"
      :error-message="errors?.birthdate"
      @blur="onBlur"
    />
    <br>
    <c-button
      type="submit"
      color="primary"
      class="c-mr-15"
    >
      envoyer
    </c-button>

    <c-button
      type="button"
      color="default"
      @click="onCancel"
    >
      cancel
    </c-button>
  </form>
  <br>
</template>

<script setup lang="ts">
import * as Yup from 'yup'
import {
  ref,
  toRef,
  reactive,
} from 'vue'

import { helpers } from '@long2x/cresh-ui'

Yup.addMethod(Yup.string, 'ddmmyyyy', function () {
  return this.test(
    'ddmmyyyy',
    'validation_messages.date_validation_rule',
    // eslint-disable-next-line no-unused-vars
    (value?: string) => {
      // eslint-disable-next-line max-len
      const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/g
      const isValid = regex.test(value || '')
      return isValid
    },
  )
})

const form = reactive({
  email: '',
  password: '',
  birthdate: '',
})

const errors = ref<Record<string, string> | undefined>({})

const {
  validate,
  reset,
} = helpers.yupHelper.useYupHelper({
  fields: toRef(form),
  schema: Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    birthdate: (Yup.string() as any).required().ddmmyyyy(),
  }),
  initialValues: {
    email: '',
    password: '',
    birthdate: '',
  }
})

function onCancel () {
  reset()
  errors.value = {}
}

async function onSubmit () {
  try {
    const validationResult = await validate()
    errors.value = validationResult.errors
  } catch (e) {
    // console.log('----e', e)
  }
}

async function onBlur () {
  try {
    // const validationResult = await validate()
    // console.log('-- validation result', validationResult)
  } catch (e) {
    // console.log('----e', e)
  }
}

</script>
