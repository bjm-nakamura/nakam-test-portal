import { defineFunction } from '@aws-amplify/backend';

export const helloAmplify = defineFunction({
    runtime: 20,
    name: 'hello-amplify',
    entry: './handler.ts',
})