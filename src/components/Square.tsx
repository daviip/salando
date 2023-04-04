import Link from "next/link";
import styles from "../styles/categoria.module.css";

type SquareType = {
  id: number;
  title: string;
  price: string;
  category: "electronics" | "jewelery" | "men's clothing" | "women's clothing";
  description: string;
  image: string;
};

export const Square = (props: SquareType) => {
  return (
    <div className={styles.square}>
      <img src={props.image} alt={props.description} width={80} height={90} />
      <div>
        <p>{Number(props.price).toFixed(2)}€</p>
        <div>
          <Link href="https://www.google.es">Donde puedo comprarlo</Link>
        </div>
      </div>

      <p>{props.description}</p>
    </div>
  );
};
