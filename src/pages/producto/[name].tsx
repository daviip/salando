import { TheBests } from "@/components/TheBests";

export default function Name(props: any) {
  console.log(props);

  return (
    <main>
      {props.products.map((p: any) => {
        return <p key={p.image}>{p.price}</p>;
      })}
    </main>
  );
}

export async function getServerSideProps(context: any) {
  console.log(context.query);
  const products = await fetch(
    `https://fakestoreapi.com/products/category/${context.query.name}`
  ).then((res) => res.json());

  /*   console.log(elect);
   */
  return {
    props: { products },
  };
}
