import { defineFunction } from '@aws-amplify/backend';

export const helloWorld = defineFunction({
    // runtime: 'nodejs14.x', 
    runtime: 20, 
    name: 'hello-world',
    entry: './handler.ts',
})