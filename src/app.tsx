import { Header } from "./components/header/header"

export function App() {
  return (
    <div className="flex flex-col px-6 py-20 gap-3">
      <Header />
      <div className="flex flex-col gap-3 bg-gray-900 w-full h-80 text-zinc-300">
        {" "}
        conteudo
      </div>
    </div>
  )
}
