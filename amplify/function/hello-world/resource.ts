import { defineFunction } from '@aws-amplify/backend';

export const helloWorld = defineFunction({
    runtime: 'nodejs14.x', 
    name: 'hello-world',
    entry: './handler.ts',
})