# vue-apply-darkmode

Drop-in dark mode for Vue 3.x apps. Apply dark mode directly to your site or app in one step;
no manual theming required! Cut down on component complexity and CSS while still delivering a
high-quality dark mode experience that your users will greatly appreciate.

`vue-apply-darkmode` is an adaptation of `react-apply-darkmode`, which is itself wrapper around
[@darkreader/darkreader](https://github.com/darkreader/darkreader)'s ES6 API—this allows
allow you to control the package's dark mode functionality with Vue bindings.

Users **do NOT** need to have the Dark Reader extension installed for dark mode to work.

## Installation

`npm i vue-apply-darkmode`

`yarn add vue-apply-darkmode`

## Import

### Vue 3.x

```javascript
import interpolator from "vue-apply-darkmode";
```

### Vue 2.x (your NuxtJS version may apply)

```javascript
import interpolator from "vue-apply-darkmode/src/vue-apply-darkmode.vue";
```

## Usage

Wrap your root component **once** with `<interpolator>`:

```javascript
const app = Vue.createApp({});

app.component("my-app", {
  template: `<interpolator :dark="true" :watch-system="false">{{ title }}</interpolator>`,
});
```

### Using NuxtJS?

If you're using NuxtJS (like I am), you should wrap each of your layouts with `<interpolator>` instead.

Not making use of layouts? Create and wrap the default layout, which is applied to every page that you don't assign a layout to.

##### `layouts/default.vue`

```vue
<template>
  <interpolator :dark="true" :watch-system="false">
    <Nuxt />
  </interpolator>
</template>
```

## Props

| Prop         | Values            | Purpose                                                                                                                                     |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| dark         | `true` or `false` | Manually turns dark mode on or off. This will always override whatever `watchSystem` determines.                                            |
| watch-system | `true` or `false` | Apply dark mode based on the device's color scheme. `watch-system` defaults to `false`. Not all browsers are supported; see Notes for more. |
| brightness   | 0 — 100           | Dark mode brightness, default 100.                                                                                                          |
| contrast     | 0 — 100           | Dark mode contrast, default 90.                                                                                                             |
| brightness   | 0 — 100           | Dark mode sepia (brownishness, if you will), default 10.                                                                                    |

Important: all props **must be bound using v-bind**.

Interpolator will reassess whether it should enable or disable dark mode if any one of these props changes.

## Notes

- `watchSystem` relies on the `prefers-color-scheme` CSS media feature, which
  some browsers may not support; privacy settings can also influence the value
  of `prefers-color-scheme`.

  Mozilla has compiled a list of compatible browsers
  [here](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme#Browser_compatibility).

## Tips

### Persistence

You will need to implement your own wrapper component or container to persist
dark mode across browser sessions by changing values supplied to the
`appearance` prop. `localStorage` and `redux` (with `redux-persist`) are both
good solutions.

### Colors

`vue-apply-darkmode` will tone down bright colors and reduce contrast. Don't
assume that a color is going to work optimally in light and dark mode; always do
a visual test by switching between both modes!

### Images

Maximize transparency of image assets! `vue-apply-darkmode` will not invert
images (to preserve your sanity), so make sure your images have transparent
backgrounds and transparency where color isn't needed.

Also, try to use colors that have good contrast in both light and dark mode.

### Theming Conflicts

Don't use another dark mode theming solution alongside `vue-apply-darkmode`
(i.e. with React context/providers, CSS classes, or another package). This can
cause undesirable flickering effects when solutions try to compensate for each
other's changes.

### Component Library Issues

Certain UI component libraries don't work well with `vue-apply-darkmode`.
Audit a library before choosing it! Installing the Dark Reader browser extension
(Chrome or Firefox, for best results) and exploring a component library's site
will give you a good idea of how well it works.

## Credits

This package was created by [Victor Li](https://github.com/victorli08), an avid
user of the Dark Reader extension.

`vue-apply-darkmode` is made possible by the open source [@darkreader](https://github.com/darkreader/darkreader)
project. If you like this package, please give a shoutout to Dark Reader's developers and consider
sponsoring their project!
