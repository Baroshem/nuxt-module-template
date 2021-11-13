---
title: Setup
description: ''
position: 2
category: Getting started
---

<alert type="info">

Check the [Nuxt.js documentation](https://nuxtjs.org/guides/configuration-glossary/configuration-modules) for more information about installing and using modules in Nuxt.js.

</alert>

Add `nuxt-module-template` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add nuxt-module-template
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install nuxt-module-template
  ```

  </code-block>
</code-group>

Then, add `nuxt-module-template` to the `modules` section in your `nuxt.config.js`. You can use either of the following ways to specify the module options:

```js {}[nuxt.config.js]
{
  modules: [
    'nuxt-module-template',
  ],
  adyen: {
    /* module options */
  },
}
```

or

```js {}[nuxt.config.js]
{
  modules: [
    [
      'nuxt-module-template',
      { /* module options */ }
    ]
  ],
}
```

The former approach has the benefit of having having type-checking enabled if you have followed the [Typescript setup](#typescript).

## Typescript

If using typescript or running typescript language server to check the code (for example through Vetur), add types to `types` array in your `tsconfig.json`:

```js {}[tsconfig.json]
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "nuxt-module-template",
    ]
  }
}
```
