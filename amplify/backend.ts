import { defineBackend } from '@aws-amplify/backend';
import { helloWorld } from './function/hello-world/resource';
import { helloAmplify } from './function/hello-amplify/resource';

const backend = defineBackend({
  helloWorld,
});

backend.addOutput({
  custom: {
    helloWorldFunctionName: backend.helloAmplify.resources.lambda.functionName,
  },
});