import { useAppContext } from "../../context/AppContext"
import { clsx } from "clsx"

export function Tag({ content }: { content: string | undefined }) {
  const { id } = useAppContext()

  return (
    <div
      className={clsx(
        "rounded-full max-w-24 px-4 text-center bg-black/20 border ",
        id === "noticias" || id === "vocacao"
          ? "bg-black/20 border border-black text-black"
          : "border-lightGray"
      )}
    >
      {content}
    </div>
  )
}
