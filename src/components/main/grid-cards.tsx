import { GeneralData } from "../../db/data"
import { Card } from "./card"

interface GridCardProps {
  contents: GeneralData[]
}

export function GridCards({ contents }: GridCardProps) {
  // grid recebe o search como props e entao filtra e repassa

  // const filteredBooks =
  // search.search !== ""
  //   ? books?.filter((book) =>
  //       book.name.toLowerCase().includes(search.search.toLocaleLowerCase()) || book.author.toLowerCase().includes(search.search.toLocaleLowerCase())
  //     )
  //   : books;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
      {contents.map((content) => (
        <Card key={content.id} content={content} />
      ))}
    </div>
  )
}
