/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import {deleteImagesDB, getImagesDB} from '../db/images'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    const {id} = req.body

    await deleteImagesDB(id)
    
    const getImages = await getImagesDB()
        
    res.json({result: getImages})
}