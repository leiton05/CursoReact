import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: "Arthur", quantity: 1 },
  { productName: "Squirtle", quantity: 450 },
  { productName: "Latias", quantity: 14 },
  { productName: "Bidoof", quantity: 1 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map((item) => (
        <ItemCounter
          key={item.productName}
          name={item.productName}
          quantity={item.quantity}
        />
      ))}
    </>
  );
}
