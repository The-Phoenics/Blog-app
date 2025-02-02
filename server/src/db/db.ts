import { PrismaClient } from "@prisma/client";

let prisma = null;

export async function connectToDb(callback: () => void) {
    try {
        prisma = new PrismaClient()
        await prisma.$connect()
        console.log('Connected to database!')
        callback()
    } catch(err) {
        console.log('Failed to connect to database!')
        throw err
    }
}

// reuse one prisma client instance
export default prisma