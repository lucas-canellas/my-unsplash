/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import {getImagesDB} from '../db/images'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const getImages = await getImagesDB()

    res.json({result: getImages})
}