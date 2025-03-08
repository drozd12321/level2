import getMenu from "@/data/getMenu";
export default async function Home() {
  const menu = await getMenu();

  return (
    <main>
      {menu.map((men) => (
        <li key={men._id.secondCategory}>{men._id.secondCategory}</li>
      ))}
    </main>
  );
}
