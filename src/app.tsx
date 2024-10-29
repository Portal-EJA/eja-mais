import { Header } from "./components/header/header"
import { Main } from "./components/main/main"

export function App() {
  return (
    <div className="flex flex-col px-6 py-20 gap-4">
      <Header />
      <Main />
    </div>
  )
}
