<script setup lang="ts">
import {
  ref,
  reactive,
  toRef,
} from 'vue'
import * as yup from 'yup'

import { helpers } from '@long2x/cresh-ui'

const model1 = ref<string>('')
const model2 = ref<string>('')
const model3 = reactive({
  username: '',
})

const model5 = ref({
  firstname: '',
})
const model6 = ref<string>('')
const model7 = ref<string>('')

const {
  validate: validateModel3,
} = helpers.yupHelper.useYupHelper({
  fields: toRef(model3),
  schema: yup.object({
    username: yup.string().required()
  })
})

const errors = ref()

async function onModel3ValueChange() {
  const { errors: validationErrors } = await validateModel3()

  errors.value = validationErrors
}


const {
  validate: validateModel5,
} = helpers.yupHelper.useYupHelper({
  fields: model5 as any,
  schema: yup.object({
    firstname: yup.string().matches(/^[a-zA-ZÀ-ÿ-.']*$/)
  }) as any
})

async function onModel5ValueChange() {
  const { errors: validationErrors } = await validateModel5()

  errors.value = validationErrors

  console.log('-- errors', errors)
}

const model3Snippet = `
  <CInput
    v-model="model3.username"
    label="username"
    name="inputFieldName2"
    class="username"
    :autocomplete="'off'"
    :required="true"
    :error-message="errors && errors.username ? errors.username : ''"
    @blur="onModel3ValueChange"
  >
    <template
      #error="{ errorMessage }"
    >
      <div
        v-if="errorMessage"
        class="custom-errors-bloc"
      >
        custom errors message
      </div>
    </template>
  </CInput>
`
const model5Snippet = `
  <CInput
    v-model="model5.firstname"
    label="first name"
    name="inputFieldName"
    class="first-name"
    :autocomplete="'off'"
    :error-message="errors && errors.firstname ? errors.firstname : ''"
    @blur="onModel5ValueChange"
  >
    <template
      #error="{ errorMessage }"
    >
      <div
        v-if="errorMessage"
        class="custom-errors-bloc"
      >
        custom error message : {{ errorMessage }}
      </div>
    </template>
  </CInput>
`
</script>

<template>
  <div class="examples">
    <h2>Exemples</h2>
    <div class="inputs">
      <CCodeSnippet
        :snippet="`
        <CInput
          name='c-input1'
          v-model='model1'
          class='custom-class'
          label='username'
        />
      `"
      >
        <CInput
          v-model="model1"
          name="c-input1"
          class="custom-class"
          label="username"
        />
        model: {{ model1 }}
        <template #title>
          c-input
        </template>
        <template #description>
          Utilisation basique d'un input
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="`
        <CInput
          name='c-input2'
          v-model='model2'
          class='first-name'
          label='username'
          :autocomplete='off'
          bordered
        />
      `"
      >
        <CInput
          v-model="model2"
          label="first name"
          name="inputFieldName"
          class="first-name"
          :autocomplete="'off'"
          bordered
        />
        model: {{ model2 }}
        <template #title>
          boredered prop
        </template>
        <template #description>
          boredered = true
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="model3Snippet"
      >
        <CInput
          v-model="model3.username"
          label="username"
          name="inputFieldName2"
          class="username"
          :autocomplete="'off'"
          :required="true"
          :error-message="errors && errors.username ? errors.username : ''"
          @blur="onModel3ValueChange"
        />
        model: {{ model3 }}
        <template #title>
          validation schema
        </template>
        <template #description>
          yup validation schema
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="model5Snippet"
      >
        <CInput
          v-model="model5.firstname"
          label="first name"
          name="inputFieldName"
          class="first-name"
          :autocomplete="'off'"
          :error-message="errors && errors.firstname ? errors.firstname : ''"
          @blur="onModel5ValueChange"
        >
          <template
            #error="{ errorMessage }"
          >
            <div
              v-if="errorMessage"
              class="custom-errors-bloc"
            >
              custom error message : {{ errorMessage }}
            </div>
          </template>
        </CInput>
        model: {{ model5 }}
        <template #title>
          custom error message template
        </template>
        <template #description>
          override default error message
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="`
        <CInput
          v-model='model6'
          label='username'
          name='inputFieldName3'
          class='username'
          placeholder='test placeholder'
        />
      `"
      >
        <CInput
          v-model="model6"
          label="first name"
          name="inputFieldName"
          class="first-name"
          :autocomplete="'off'"
          placeholder="test placeholder"
        />
        model: {{ model6 }}
        <template #title>
          Placeholder
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="`
        <CInput
          v-model='model7'
          label='username'
          name='inputFieldName3'
          class='username'
        />
      `"
      >
        <CInput
          v-model="model6"
          label="first name"
          name="inputFieldName"
          class="first-name"
          :autocomplete="'off'"
        >
          <template #label>
            <span>
              Chiffre d'affaires
            </span>
            <span style="text-transform: lowercase;">
              (en chiffres)
            </span>
          </template>
        </CInput>
        <template #title>
          custom label
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="`
        <CInput
          v-model='model6'
          label='first name'
          name='inputFieldName'
          class='first-name'
          :autocomplete='off'
        >
          <template #label>
            <span>
              Label + prefix icon
            </span>
            <span style='text-transform: lowercase;'>
              (en chiffres)
            </span>
          </template>
          <template #prefix>
            <CIcon name='shop' />
          </template>
        </CInput>
      `"
      >
        <CInput
          v-model="model6"
          label="first name"
          name="inputFieldName"
          class="first-name"
          :autocomplete="'off'"
        >
          <template #label>
            <span>
              Label + prefix icon
            </span>
            <span style="text-transform: lowercase;">
              (en chiffres)
            </span>
          </template>
          <template #prefix>
            <CIcon name="shop" />
          </template>
        </CInput>
        <template #title>
          Affichage personnalisé de label avec préfixe icon
        </template>
      </CCodeSnippet>

      <CCodeSnippet
        :snippet="`
        <CInput
          v-model='model6'
          label='first name'
          name='inputFieldName'
          class='first-name'
          :autocomplete='off'
        >
          <template #label>
            <span>
              Label + suffix icon
            </span>
            <span style='text-transform: lowercase;'>
              (en chiffres)
            </span>
          </template>
          <template #prefix>
            <CIcon name='shop-circle' />
          </template>
        </CInput>
      `"
      >
        <CInput
          v-model="model6"
          label="first name"
          name="inputFieldName"
          class="first-name"
          :autocomplete="'off'"
        >
          <template #label>
            <span>
              Label + suffix icon
            </span>
            <span style="text-transform: lowercase;">
              (en chiffres)
            </span>
          </template>
          <template #suffix>
            <CIcon name="shop-circle" />
          </template>
        </CInput>
        <template #title>
          Affichage personnalisé de label avec préfixe icon
        </template>
      </CCodeSnippet>
    </div>


    <CCodeSnippet
        :snippet="`
        <CDatetimeInput
          v-model='model7'
          label='Date de naissance'
          name='inputBirthdate'
          class='birthdate'
          :autocomplete='off'
        />
      `"
      >
        <CDatetimeInput
          v-model="model7"
          label="Date de naissance"
          name="inputBirthdate"
          class="birthdate"
          :autocomplete="'off'"
        />
      </CCodeSnippet>
  </div>
</template>
