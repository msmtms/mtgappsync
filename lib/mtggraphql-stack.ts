import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AmplifyGraphqlApi, AmplifyGraphqlDefinition } from '@aws-amplify/graphql-api-construct';

import path from 'path';

export class MtggraphqlStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MtggraphqlQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    new AmplifyGraphqlApi(this, 'DynamoBoundApi', {
      apiName: 'MTGGraphQLApi',
      definition: AmplifyGraphqlDefinition.fromFiles(path.join(__dirname, 'schema.graphql')),
      authorizationModes: {
        defaultAuthorizationMode: 'API_KEY',
        apiKeyConfig: {
          expires: cdk.Duration.days(30)
        }
      },
    });
  }
}
