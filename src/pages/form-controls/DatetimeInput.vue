<template>
  <h2>CDatetimeInput</h2>

  <CDatetimeInput
    v-model="form.birthdate"
    :name="'birthdate'"
    :label="'birthdate'"
    :placeholder="
      'Date de naissance'"
    required
    class="birthdate"
    :error-message="errors?.birthdate"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import * as Yup from 'yup'
import {
  ref,
  toRef,
  reactive,
} from 'vue'

import { helpers } from '@long2x/cresh-ui'
import * as yup from 'yup'
Yup.addMethod(Yup.string, 'ddmmyyyy', function () {
  return this.test(
    'ddmmyyyy',
    'la date saisie n\'est pas valide',
    // eslint-disable-next-line no-unused-vars
    (value?: string) => {
      // eslint-disable-next-line max-len
      const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/g
      const isValid = regex.test(value || '')
      return isValid
    },
  )
})

const form = reactive<Record<string, unknown>>({
  birthdate: '',
})

const errors = ref()

const {
  validate,
} = helpers.yupHelper.useYupHelper({
  fields: toRef(form),
  schema: yup.object({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    birthdate: (Yup.string() as any).required().ddmmyyyy(),
  })
})

async function onBlur () {
  try {
    const validationResult = await validate()
    errors.value = validationResult.errors
    console.log('-- validation result', validationResult)
  } catch (e) {
    // console.log('----e', e)
  }
}

</script>
