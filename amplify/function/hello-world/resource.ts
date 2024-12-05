import { defineFunction } from '@aws-amplify/backend';

export const helloWorld = defineFunction({
    // runtime: 20,
    runtime: 'nodejs14.x', // ランタイム環境を指定
    name: 'hello-world',
    entry: './handler.ts',
})