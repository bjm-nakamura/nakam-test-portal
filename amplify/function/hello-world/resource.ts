import { defineFunction } from '@aws-amplify/backend';

export const helloWorld = defineFunction({
    // runtime: 20,
    runtime: 'nodejs14.x',  // ランタイムを文字列で指定
    name: 'hello-world',
    entry: './handler.ts',
})