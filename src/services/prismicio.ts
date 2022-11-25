import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import { DefaultOptions } from 'react-query'
import sm from '../../sm.json'

export interface PrismicConfig {
    req?: prismic.HttpRequestLike;
    previewData?: Date | any;
}

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export function createClient(config: PrismicConfig): prismic.Client {
  const client = prismic.createClient(sm.apiEndpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN ,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}