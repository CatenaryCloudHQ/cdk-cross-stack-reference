import { App, CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { producerStack } from "./producer";
import { IBucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

interface consumerStackProps extends StackProps {
  readonly bucket: IBucket;
}

export class consumerStack extends Stack {
  constructor(scope: Construct, id: string, props: consumerStackProps) {
    super(scope, id, props);

    new BucketDeployment(this, "uploadFile", {
      sources: [Source.asset("./src")],
      destinationBucket: props.bucket,
    });
    new CfnOutput(this, "bucketName", { value: props.bucket.bucketName });
  }
}

const app = new App();

const bucketProducer = new producerStack(app, "producer");
new consumerStack(app, "consumer", { bucket: bucketProducer.bucket });

app.synth();
