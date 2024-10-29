import { BookCopy } from "lucide-react"
import { GeneralData } from "../../db/data"
import { Tag } from "./tag"

interface CardProps {
  content: GeneralData
}

export function Card({ content }: CardProps) {
  return (
    <a
      href={content.link}
      className="w-full rounded-xl bg-coursePurple flex flex-col gap-2 truncate"
    >
      <div className="p-4 flex flex-col gap-4">
        <div className="flex gap-2 ">
          <div className="bg-darkGray rounded-lg p-2">
            <BookCopy />
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
