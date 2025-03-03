import Button from "../../UI/Button/Button";
import { Htag } from "./Htag/page";

export default function Home() {
  return (
    <main>
      <div className="flex gap-3">
        <Htag tag="h1">DROZD</Htag>
        <Button appireans="ghost" className="text-red-400">
          Кнопка
        </Button>
        <Button appireans="primary">Click</Button>
      </div>
    </main>
  );
}
