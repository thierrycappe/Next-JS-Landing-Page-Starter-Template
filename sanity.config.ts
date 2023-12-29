import type { Config } from 'sanity';
import { defineConfig } from 'sanity'; // Import Config type if available
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas';

const config: Config = defineConfig({
  projectId: 'lpwbwc5b',
  dataset: 'production',
  title: 'localyon',
  apiVersion: '2023-06-18',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
  pluginOptions: {}, // Corrected key name
});

export default config;
