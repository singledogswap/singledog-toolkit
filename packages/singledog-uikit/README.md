# 🥞 Singledog UIkit

[![Version](https://img.shields.io/npm/v/@singledogswap/uikit)](https://www.npmjs.com/package/@singledogswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@singledogswap/uikit)](https://www.npmjs.com/package/@singledogswap/uikit)

Singledog UIkit is a set of React components and hooks used to build pages on Singledog's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @singledogswap/uikit`

## Setup

### Theme

Before using Singledog UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@singledogswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@singledogswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://singledogswap.github.io/singledog-uikit/)
