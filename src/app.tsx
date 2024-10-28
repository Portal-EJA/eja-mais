import { Header } from "./components/header/header";
import { useAppContext } from "./context/AppContext";
import { sections } from "./db/data";

export function App() {
  const { id } = useAppContext();
  const sectionContent = sections.find((section) => section.id === id);

  return (
    <div className="flex flex-col px-6 py-20 gap-3">
      <Header />
      <div className="flex flex-col gap-3 bg-gray-900 w-full h-80 text-zinc-300">
        {sectionContent ? ( 
          <>
            <h2 className="text-xl font-semibold">{sectionContent.name}</h2>
          </>
        ) : (
          <p>Nenhum conteúdo encontrado.</p>
        )}
      </div>
    </div>
  );
}
