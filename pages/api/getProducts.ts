// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity'

//Executional Query
const query = groq`*[_type == 'product'] {
  _id,
  ...
}`;


type Data = {
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products: Product[]  = await sanityClient.fetch(query)
  res.status(200).json({ products })
}
