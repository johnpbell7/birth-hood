import { defineCliConfig } from 'sanity/cli'

/** Needed by the Sanity CLI for dataset export/import — the Studio itself
    reads its config from sanity.config.ts. */
export default defineCliConfig({
  api: {
    projectId: 'wr0vi6h8',
    dataset: 'production',
  },
})
