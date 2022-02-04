const { AwsCdkTypeScriptApp } = require('projen');

const project = new AwsCdkTypeScriptApp({
  author: 'Catenary.Cloud',
  authorAddress: 'hi@catenary.cloud',
  defaultReleaseBranch: 'main',
  description: 'CDK app to show cross reference of Cloudformation outputs',
  cdkVersion: '2.8.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-cross-reference',
  buildWorkflow: false,
  rebuildBot: false,
  releaseWorkflow: false,
  mergify: false,
  pullRequestTemplate: false,
  projenUpgrade: false,
  workflows: false
});

project.synth();