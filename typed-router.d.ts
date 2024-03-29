/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,
  RouteLocationAsString,
  RouteLocationAsRelativeTypedList,
  RouteLocationAsPathTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  RouterLinkPropsTyped,
  NavigationGuard,
  UseLinkFnTyped,

  // data fetching
  _DataLoader,
  _DefineLoaderOptions,
} from 'unplugin-vue-router/types'

declare module 'vue-router/auto/routes' {
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/accordion': RouteRecordInfo<'/accordion', '/Accordion', Record<never, never>, Record<never, never>>,
    '/alert': RouteRecordInfo<'/alert', '/Alert', Record<never, never>, Record<never, never>>,
    '/button': RouteRecordInfo<'/button', '/Button', Record<never, never>, Record<never, never>>,
    '/chart': RouteRecordInfo<'/chart', '/Chart', Record<never, never>, Record<never, never>>,
    '/datatable': RouteRecordInfo<'/datatable', '/Datatable', Record<never, never>, Record<never, never>>,
    '/daterangefilters': RouteRecordInfo<'/daterangefilters', '/DateRangeFilters', Record<never, never>, Record<never, never>>,
    '/documentitem': RouteRecordInfo<'/documentitem', '/DocumentItem', Record<never, never>, Record<never, never>>,
    '/documentviewer': RouteRecordInfo<'/documentviewer', '/DocumentViewer', Record<never, never>, Record<never, never>>,
    '/drawer': RouteRecordInfo<'/drawer', '/Drawer', Record<never, never>, Record<never, never>>,
    '/dropdown': RouteRecordInfo<'/dropdown', '/Dropdown', Record<never, never>, Record<never, never>>,
    '/fileuploadzone': RouteRecordInfo<'/fileuploadzone', '/FileUploadZone', Record<never, never>, Record<never, never>>,
    '/form-controls/checkbox': RouteRecordInfo<'/form-controls/checkbox', '/form-controls/Checkbox', Record<never, never>, Record<never, never>>,
    '/form-controls/datetimeinput': RouteRecordInfo<'/form-controls/datetimeinput', '/form-controls/DatetimeInput', Record<never, never>, Record<never, never>>,
    '/form-controls/fileinput': RouteRecordInfo<'/form-controls/fileinput', '/form-controls/FileInput', Record<never, never>, Record<never, never>>,
    '/form-controls/form': RouteRecordInfo<'/form-controls/form', '/form-controls/Form', Record<never, never>, Record<never, never>>,
    '/form-controls/input': RouteRecordInfo<'/form-controls/input', '/form-controls/Input', Record<never, never>, Record<never, never>>,
    '/form-controls/phoneinput': RouteRecordInfo<'/form-controls/phoneinput', '/form-controls/PhoneInput', Record<never, never>, Record<never, never>>,
    '/form-controls/select': RouteRecordInfo<'/form-controls/select', '/form-controls/Select', Record<never, never>, Record<never, never>>,
    '/form-controls/yupvalidation': RouteRecordInfo<'/form-controls/yupvalidation', '/form-controls/YupValidation', Record<never, never>, Record<never, never>>,
    '/icons': RouteRecordInfo<'/icons', '/Icons', Record<never, never>, Record<never, never>>,
    '/menu': RouteRecordInfo<'/menu', '/Menu', Record<never, never>, Record<never, never>>,
    '/modal': RouteRecordInfo<'/modal', '/Modal', Record<never, never>, Record<never, never>>,
    '/notify': RouteRecordInfo<'/notify', '/Notify', Record<never, never>, Record<never, never>>,
    '/slider': RouteRecordInfo<'/slider', '/Slider', Record<never, never>, Record<never, never>>,
    '/steps': RouteRecordInfo<'/steps', '/Steps', Record<never, never>, Record<never, never>>,
    '/switchbutton': RouteRecordInfo<'/switchbutton', '/SwitchButton', Record<never, never>, Record<never, never>>,
    '/tabs': RouteRecordInfo<'/tabs', '/Tabs', Record<never, never>, Record<never, never>>,
    '/tag': RouteRecordInfo<'/tag', '/Tag', Record<never, never>, Record<never, never>>,
    '/theme': RouteRecordInfo<'/theme', '/Theme', Record<never, never>, Record<never, never>>,
    '/tooltip': RouteRecordInfo<'/tooltip', '/Tooltip', Record<never, never>, Record<never, never>>,
  }
}

declare module 'vue-router/auto' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationRaw` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationRaw<Name extends keyof RouteNamedMap = keyof RouteNamedMap> =
    | RouteLocationAsString<RouteNamedMap>
    | RouteLocationAsRelativeTypedList<RouteNamedMap>[Name]
    | RouteLocationAsPathTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void

  export const RouterLink: RouterLinkTyped<RouteNamedMap>
  export const RouterLinkProps: RouterLinkPropsTyped<RouteNamedMap>

  // Experimental Data Fetching

  export function defineLoader<
    P extends Promise<any>,
    Name extends keyof RouteNamedMap = keyof RouteNamedMap,
    isLazy extends boolean = false,
  >(
    name: Name,
    loader: (route: RouteLocationNormalizedLoaded<Name>) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>
  export function defineLoader<
    P extends Promise<any>,
    isLazy extends boolean = false,
  >(
    loader: (route: RouteLocationNormalizedLoaded) => P,
    options?: _DefineLoaderOptions<isLazy>,
  ): _DataLoader<Awaited<P>, isLazy>

  export {
    _definePage as definePage,
    _HasDataLoaderMeta as HasDataLoaderMeta,
    _setupDataFetchingGuard as setupDataFetchingGuard,
    _stopDataFetchingScope as stopDataFetchingScope,
  } from 'unplugin-vue-router/runtime'
}

declare module 'vue-router' {
  import type { RouteNamedMap } from 'vue-router/auto/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
