/// <reference types="vite/client" />

// 【全局】声明一个模块 'pubsub-js'(目的是为了让TS认识这个包)
// 全局  - 一般放在.d.ts文件就是全局(env.d.ts在tsconfig.json文件中有配置,所以全局生效)
// module 是模块的意思
// declare module 'pubsub-js'

// declare 还可以声明类型
declare type abc = undefined | null | number | string