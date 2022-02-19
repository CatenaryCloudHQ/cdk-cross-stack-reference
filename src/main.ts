import { App, CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { producerStack } from "./producer";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';

export class consumerStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);
  
    const bucket = new Bucket(this, 'Bucket');

    new BucketDeployment(this, 'uploadFile', {
      sources: [Source.asset('./src')],
      destinationBucket: bucket
    });
    new CfnOutput(this, 'bucketName', { value: bucket.bucketName });
  }
}

const app = new App();

new producerStack(app, "producer");
new consumerStack(app, "consumer");

app.synth();