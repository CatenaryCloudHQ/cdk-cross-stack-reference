# CDK cross-stack 

This is CDK app to show how cross-reference stack outputs.

There are two stacks: one creates S3 bucket - [src/producer.ts](src/producer.ts), and the `main.ts` uploads a file into the bucket created by producer stack.

# Deploy

`npx projen` and then
`cdk deploy --all`

Output:

```
➜  cdk-cross-stack-reference git:(main) ✗ cdk deploy --all

✨  Synthesis time: 6.84s

producer
producer: deploying...
[0%] start: Publishing 590d59623830895d8246a80981059586721a23244457ce9c91190b8d7c1af655:current_account-current_region
[100%] success: Published 590d59623830895d8246a80981059586721a23244457ce9c91190b8d7c1af655:current_account-current_region

 ✅  producer (no changes)

✨  Deployment time: 1.12s

Outputs:
producer.ExportsOutputFnGetAttBucket83908E77Arn063C8555 = arn:aws:s3:::producer-bucket83908e77-t597uisdjr7b
producer.ExportsOutputRefBucket83908E7781C90AC0 = producer-bucket83908e77-t597uisdjr7b
Stack ARN:
arn:aws:cloudformation:us-east-1:xxx:stack/producer/8849daf0-8567-11ec-ba51-0e9a0020f199

✨  Total time: 7.96s
```

# Project boostrap

This repository was created with `npx projen new awscdk-app-ts`