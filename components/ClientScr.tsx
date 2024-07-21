'use client'
import devfools from 'devfools'
import { useLayoutEffect } from 'react'

export const ClientScr = () => {
  const signature = () =>
    console.log(
      '%c              Developed by Unkuz              ',
      'background: black; color: rgb(52 208 255);',
      'https://github.com/unkuz/',
    )

  // for signature
  useLayoutEffect(() => {
    signature()
    setInterval(
      () => {
        signature()
      },
      1 * 60 * 1_000,
    )
  }, [])

  // for devfools
  useLayoutEffect(() => {
    devfools(
      'next',
      'vite',
      'vitepress',
      'element',
      'solid',
      'react',
      'nuxt',
      'vue',
      'svelte',
      'angular',
      // 'redux',
      'motion',
      'framer',
      'gsap',
      'three',
      'mobx',
      'tailwind',
      'rive',
      'antd',
      'naive',
      'manoco',
      'codemirror',
      'vuepress',
      'remix',
      'nextui',
      'material',
    )
  }, [])
  return <></>
}
