/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import Link from "next/link";

type TheBestsProps = {
  type: "electronics" | "jewelery" | "men's clothing" | "women's clothing";
};

export const TheBests = (props: TheBestsProps) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${props.type}?limit=3`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const returnTitle = () => {
    switch (props.type) {
      case "electronics":
        return "Electrónica";
      case "jewelery":
        return "Joyas";
      case "men's clothing":
        return "Ropa hombre";
      case "women's clothing":
        return "Ropa mujer";
      default:
        return "Producto no identificado";
    }
  };

  return (
    <div className={styles.thebests}>
      <h1 className={styles.thebests_title}>
        <Link href={`/categoria/${props.type}`}>{returnTitle()}</Link>
      </h1>
      <div className={styles.thebests_movies}>
        {isLoading
          ? "Cargando..."
          : products.map((product: any, idx) => {
              return (
                <div key={idx} className={styles.thebests_movie}>
                  <p>{product.title}</p>
                  <div>
                    <img
                      src={product.image}
                      alt={product.description}
                      width="100px"
                      height="100px"
                    />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};
