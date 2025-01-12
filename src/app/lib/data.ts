import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getUsers = async () => {
  return{
    firstName: "John",
    lastName: "Doe",
    email: "adsads",
    phone: "adsads",
    address: "adsads",
    title: "adsads",
  }
}
