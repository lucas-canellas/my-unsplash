import {prisma} from './db'

export async function getImagesDB() {
    return prisma.public_image.findMany()
}

export async function createImagesDB(image: string, label: string) {
    return prisma.public_image.create({
        data: {
            image,
            label
        }
    })    
}

export async function deleteImagesDB(id_delete: any) {
    
    return prisma.public_image.delete({
        where: {
            id: Number(id_delete)
        }
    })
   
}