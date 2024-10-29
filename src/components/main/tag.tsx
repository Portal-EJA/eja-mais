export function Tag({ content }: { content: string | undefined }) {
  return (
    <div className="bg-black/20 border border-lightGray rounded-full max-w-24 text-center">
      {content}
    </div>
  )
}
