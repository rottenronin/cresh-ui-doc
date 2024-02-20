import localForage from 'localforage'

// initialize with indexeddb as prefered driver
localForage.config({
  driver: [
    localForage.INDEXEDDB,
    localForage.LOCALSTORAGE,
    localForage.WEBSQL,
  ],
  name: 'cresh-ui-doc',
  version: 1.0,
})

async function setItem(key: string, item: unknown) {
  return localForage.setItem(key, 
    typeof item !== 'string' ? JSON.stringify(item) : item)
}

async function getItem(key: string) {
  return localForage.getItem<string>(key)
}

async function remove(key: string) {
  return localForage.removeItem(key)
}

async function getAll() {
  const keys = await localForage.keys()
  return Promise.all(keys.map(
    k => localForage.getItem<string>(k).then((val: string | null) => {
      if (val) {
        return JSON.parse(val)
      }
      return null
    }).catch(() => null))
  )
}

export default {
  setItem,
  getItem,
  getAll,
  remove,
}
