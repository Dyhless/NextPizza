import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          {/* Filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of produts */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                categoryId={1}
                items={[{
                  id: 1,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },
                {
                  id: 2,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 3,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 4,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 5,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 6,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              }
              ]} />

              <ProductsGroupList
                title="Combos"
                categoryId={2}
                items={[{
                  id: 1,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },
                {
                  id: 2,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 3,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 4,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 5,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              },{
                  id: 6,
                  name: 'Cheese-pizza',
                  imageUrl: 'https://media.dodostatic.com/image/r:292x292/11EF692558852DA2A0842597E6E57057.avif',
                  price: 50,
                  items: [{ price: 50 }],
              }
              ]} />

            
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
