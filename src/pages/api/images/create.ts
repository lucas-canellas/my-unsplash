/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import {createImagesDB, getImagesDB} from '../db/images'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {image, label} = req.body

    await createImagesDB(image, label)

    const getImages = await getImagesDB()
        
    res.json({result: getImages})
}