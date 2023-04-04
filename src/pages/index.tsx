import { Search } from "@/components/Search";
import { TheBests } from "@/components/TheBests";

export default function Home() {
  return (
    <main>
      <Search />
      <TheBests type="jewelery" />
      <TheBests type="electronics" />
    </main>
  );
}
