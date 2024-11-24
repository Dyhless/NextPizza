import { Prisma } from "@prisma/client";
import { _ingredients, categories, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generageProductItem = ({
   productId,
   pizzaType,
   size
}: {
   productId: number;
   pizzaType?: 1 | 2;
   size?: 20 | 30 | 40;
}) => { 
   return {
      productId,
      price: randomDecimalNumber(198, 600),
      pizzaType,
      size,
   } as Prisma.ProductItemUncheckedCreateInput;
}

async function up() {
   await prisma.user.createMany({
      data: [
         {
            fullName: 'User Test',
            email: 'user@test.ru',
            password: hashSync('111111', 10),
            verified: new Date(),
            role: 'USER',
         },
         {
            fullName: 'Admin Admin',
            email: 'admin@test.ru',
            password: hashSync('111111', 10),
            verified: new Date(),
            role: 'ADMIN',
         },
      ],
   });

   // await prisma.productItem.createMany({
   //    data: [
   //       generageProductItem({
   //          productId: pizza1.id,
   //          pizzaType: 1,
   //          size: 20,
   //       })
   //    ],
   // });
}

async function  down() {
   await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART INDENTITY CASCADE`;
}

async function  main() {
   try {
      await down();
      await up();
   } catch(e) {
      console.error(e);
   }

   await prisma.category.createMany({
      data: categories,
   });

   await prisma.ingredient.createMany({
      data: _ingredients,
   });

   await prisma.product.createMany({
      data: products,
   });

     const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepperoni Fresh',
      imageUrl: '/assets/images/pepperoni_fresh.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Cheesy',
      imageUrl: '/assets/images/cheesy.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo Fresh',
      imageUrl: '/assets/images/chorizo_fresh.webp',
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });
   
   await prisma.productItem.createMany({
      data: [
         {
            productId: pizza1.id,
            price: 30,
            pizzaType: 2,
            size: 30,
         }
      ]
   })
}

main()
   .then(async () => {
      await prisma.$disconnect();
   })
   .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
   });