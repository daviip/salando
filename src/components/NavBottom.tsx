import Link from "next/link";

export const NavBottom = () => {
  return (
    <div id="nav_bottom">
      <span>
        <Link href={"/categoria/jewelery"}>JOYAS</Link>
      </span>
      <span>
        <Link href={"/categoria/electronics"}>PC</Link>
      </span>
      <span>
        <Link href={"/categoria/men's clothing"}>HOMBRE</Link>
      </span>
      <span>
        <Link href={"/categoria/women's clothing"}>MUJER</Link>
      </span>
    </div>
  );
};
