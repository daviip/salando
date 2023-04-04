import Link from "next/link";

export const NavBottom = () => {
  return (
    <div id="nav_bottom">
      <span>
        <Link href={"/producto/jeweley"}>JOYAS</Link>
      </span>
      <span>
        <Link href={"/producto/electronics"}>PC</Link>
      </span>
      <span>
        <Link href={"/producto/men's clothing"}>HOMBRE</Link>
      </span>
      <span>
        <Link href={"/producto/women's clothing"}>MUJER</Link>
      </span>
    </div>
  );
};
