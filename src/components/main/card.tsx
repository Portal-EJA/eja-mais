import { useAppContext } from "../../context/AppContext"
import { GeneralData } from "../../db/data"
import { clsx } from "clsx"
import { CardIcons } from "./card-icons"
import { Tags } from "../../components/main/tags"

interface CardProps {
  content: GeneralData
}

export function Card({ content }: CardProps) {
  const { id } = useAppContext()

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
      <div className="p-4 flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 items-center justify-start">
            <div className="bg-darkGray rounded-lg p-2">
              <CardIcons id={id} />
            </div>
            <h3 className="font-bold text-md lg:text-lg truncate">
              {content.title}
            </h3>
          </div>
          <div className="w-full whitespace-pre-line">
            {content.description && (
              <p
                className={clsx(
                  "font-semibold",
                  id === "noticias" || id === "vocacao"
                    ? "text-black"
                    : "text-zinc-300"
                )}
              >
                {content.description}
              </p>
            )}
          </div>
        </div>
        {/* tags  */}
        <Tags content={content} />
      </div>

      <div className="bg-zinc-300 w-full font-bold text-black text-lg text-center py-2 hover:bg-zinc-50 transition-all">
        <span>Acessar agora</span>
      </div>
    </a>
  )
}
