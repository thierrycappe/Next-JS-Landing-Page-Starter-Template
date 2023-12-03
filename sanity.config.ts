import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'lpwbwc5b',
  dataset: 'production',
  title: 'localyon',
  apiVersion: '2023-06-18',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
