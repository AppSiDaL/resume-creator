import prisma from "./prisma";

export const getUsers = async () => {
  const products = await prisma.user.findMany();
  console.log(products);
  return {
    firstName: "John",
    lastName: "Doe",
    email: "adsads",
    phone: "adsads",
    address: "adsads",
    title: "adsads",
  };
};
