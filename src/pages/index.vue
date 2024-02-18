<template>
  <section id="home-page">
    {{ $t('home.short_description') }}
    <h2 id="environment-support">
      {{ $t('home.env_support') }}
    </h2>

    <div class="dumi-default-table">
      <div class="dumi-default-table-content" data-right-folded="true">
        <table>
          <thead>
            <tr>
              <th>
                <a href="http://godban.github.io/browsers-support-badges/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px">
                </a>
              <br>Firefox
              </th>
              <th>
                <a href="http://godban.github.io/browsers-support-badges/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px">
                </a>
                <br>
                Chrome
              </th>
              <th>
                <a href="http://godban.github.io/browsers-support-badges/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px">
                </a><br>Safari
              </th>
              <th>
                <a href="http://godban.github.io/browsers-support-badges/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px">
                </a>
                <br>Opera
              </th>
              <th>
                <a href="http://godban.github.io/browsers-support-badges/">
                  <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px">
                </a>
                <br>Electron
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ $t('home.last_2_versions') }}
              </td>
              <td>
                {{ $t('home.last_2_versions') }}
              </td>
              <td>
                {{ $t('home.last_2_versions') }}
              </td>
              <td>
                {{ $t('home.last_2_versions') }}
              </td>
              <td>
                {{ $t('home.last_2_versions') }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div>
      <h3>
        {{ $t('home.installation') }}
      </h3>

      <p>
        {{ $t(('home.installation_description')) }}
      </p>
      <CTabs >
        <CTab
          name="npm"
          identifier="npm"
        >
          <CCard>
            npm install @long2x/cresh-ui --save
          </CCard>
        </CTab>

        <CTab
          name="yarn"
          identifier="yarn"
        >
          <CCard>
            yarn add @long2x/cresh-ui
          </CCard>
        </CTab>

        <CTab
          name="pnpm"
          identifier="pnpm"
        >
          <CCard>
            pnpm install @long2x/cresh-ui --save
          </CCard>
        </CTab>
      </CTabs>
    </div>

    <div>
      <h3>{{ $t('home.usage') }}</h3>
      <pre class="prism-code language-jsx">
        <code>
          import CreshUI from '@long2x/cresh-ui'

          app.use(CreshUI)
        </code>
      </pre>

      <p>
        {{ $t('home.import_styles_manually') }}
      </p>
      <pre class="prism-code language-jsx">
        <code>
          import '@long2x/cresh-ui/style.css'
        </code>
      </pre>
    </div>

    <div>
      <h3>{{ $t('home.exposed_paths') }}</h3>
      <p>
        {{ $t('home.exposed_paths_description') }}
      </p>

      <CDatatable
        no-footer
        :headers="[
          {
            text: 'Name',
            key: 'name',
            align: 'start',
            sortable: false,
          },
          {
            text: 'Description',
            key: 'description',
            align: 'start',
            sortable: false,
          },
        ]"
        :items="importsArray.map(key => ({
          name: key,
          description: $t(`home.imports.${key.replace('.', '_')}`)
        }))"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const importsArray = [
  'cresh-ui',
  'ui',
  'icons',
  'form-controls',
  'directives',
  'helpers',
  'plugins',
  'style.css',
  'default-theme.css',
  'c-notify.scss'
]
</script>

<style lang="scss">
  #home-page {
    pre {
        background: rgb(var(--color-dark));
        color: rgb(var(--color-warning));
      }
  }
</style>