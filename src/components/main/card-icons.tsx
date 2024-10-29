import { Bird, BookCopy, Newspaper } from "lucide-react"

export function CardIcons({ id }: { id: string }) {
  switch (id) {
    case "cursos":
      return <BookCopy className="text-white" />
    case "enem":
      return <Bird className="text-white" />
    case "bem-estar":
      return <Bird className="text-white" />
    case "noticias":
      return <Bird className="text-black" />
    case "vocacao":
      return <Bird className="text-black" />
    case "produtividade":
      return <Bird className="text-white" />
    case "noticias":
      return <Newspaper className="text-white" />
    default:
      return <BookCopy className="text-white" />
  }
}
