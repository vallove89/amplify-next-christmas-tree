// amplifyClient.ts (new file)
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

let configured = false;

export const getClient = () => {
  if (!configured) {
    Amplify.configure(outputs);
    configured = true;
  }
  return generateClient<Schema>();
};
