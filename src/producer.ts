import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { IBucket, Bucket } from 'aws-cdk-lib/aws-s3';

export class producerStack extends Stack {
  public readonly bucket: IBucket;
  
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    this.bucket = new Bucket(this, 'Bucket');
  }
}