[![Release](https://github.com/c4tastic/paperthin/actions/workflows/release.yml/badge.svg)](https://github.com/c4tastic/paperthin/actions/workflows/release.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm](https://img.shields.io/npm/l/@c4tastic/paperthin)](https://www.npmjs.com/package/@c4tastic/paperthin)
[![npm (scoped)](https://img.shields.io/npm/v/@c4tastic/paperthin)](https://www.npmjs.com/package/@c4tastic/paperthin)
[![npm](https://img.shields.io/npm/dt/paperthin.svg)](https://www.npmjs.com/package/@c4tastic/paperthin)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/paperthin.svg)](https://www.npmjs.com/package/@c4tastic/paperthin)

# paperthin

A small helper to create a React friendly component that uses a Web Component under the hood.

## Usage

To create a React wrapper of a Web Component simply use the `createWrapper` helper of `paperthin`.

### Basic

```ts
import { forwardRef } from 'react'
import { createWrapper } from '@catastic/paperthin'
// The props interface
import type { WebComponentProps } from 'some/model/file'
// The Web Component class
import type { WebComponentClazz } from 'some/file'
// The Web Component tag name
import { WebComponentTag as tagName } from 'some/model/file'

export const ReactComponentWrapper = forwardRef<
  WebComponentClazz | null,
  WebComponentProps
>(({ children, ...props }, ref) =>
  createWrapper<WebComponentClazz>({ tagName, children, props, ref })
)

// Alternatively, if your component has a default slot, you can pass `children` along

export const ReactComponentWithChildrenWrapper = forwardRef<
  WebComponentClazz | null,
  WebComponentProps
>((props, ref) => createWrapper<WebComponentClazz>({ tagName, props, ref }))
```

### Work with slotted elements

On top of the default slot, you can also forward `ReactElement` props to actual slot elements with the help of the `slottedNode` helper function.

```tsx
export const ReactComponentWrapper = forwardRef<
  WebComponentClazz | null,
  WebComponentProps
>(({ emoji, children, ...props }, ref) =>
  createWrapper<WebComponentClazz>({
    tagName,
    props,
    children: (
      <>
        {children}
        {emoji && slottedNode(emoji, 'emoji')}
      </>
    ),
    ref,
  })
)
```

## Try it

Simply clone this repository and run the `dev` command

```sh
yarn dev
```

It will open a local server at port `3000`.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
