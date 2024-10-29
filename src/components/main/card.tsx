import { useAppContext } from "../../context/AppContext"
import { GeneralData } from "../../db/data"
import { Tag } from "./tag"
import { clsx } from "clsx"
import { CardIcons } from "./card-icons"

interface CardProps {
  content: GeneralData
}

// Descobrir o tipo pelo content.type
// Usar o context pra saber o tipo

export function Card({ content }: CardProps) {
  const { id } = useAppContext()

  // export const sections = [
  //   { name: "Cursos", id: "cursos" },
  //   { name: "ENEM", id: "enem" },
  //   { name: "Bem-estar", id: "bem-estar" },
  //   { name: "Notícias", id: "noticias" },
  //   { name: "Vocação", id: "vocacao" },
  //   { name: "Produtividade", id: "produtividade" }
  // ]

  return (
    <a
      href={content.link}
      className={clsx(
        "w-full rounded-xl  flex flex-col gap-2 truncate",
        id === "cursos" && "bg-coursePurple",
        id === "enem" && "bg-enemBlue",
        id === "bem-estar" && "bg-wellBeingGreen",
        id === "noticias" && "bg-newsRed text-black",
        id === "vocacao" && "bg-vocationalYellow text-black",
        id === "produtividade" && "bg-productivityPink"
      )}
    >
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-2 ">
          <div className="bg-darkGray rounded-lg p-2">
            <CardIcons id={id} />
          </div>
          <h3 className="font-bold text-lg truncate">{content.title}</h3>
        </div>
        {/* tags  */}
        <Tag content={content.duration} />
      </div>

      <div className="bg-white w-full font-bold text-black text-lg text-center py-2">
        <span>Acessar agora</span>
      </div>
    </a>
  )
}
