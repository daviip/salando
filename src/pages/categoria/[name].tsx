import { Square } from "@/components/Square";

export default function Name(props: any) {
  console.log(props);

  return (
    <main>
      {props.products.map((product: any) => {
        return (
          <Square
            key={product.image}
            id={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
            image={product.image}
          />
        );
      })}
    </main>
  );
}

export async function getServerSideProps(context: any) {
  const products = await fetch(
    `https://fakestoreapi.com/products/category/${context.query.name}`
  ).then((res) => res.json());

  return {
    props: { products },
  };
}
