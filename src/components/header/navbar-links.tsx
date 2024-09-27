import { sections } from "../../db/data"

export function NavBarLinks() {
  return (
    <ul
      className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
      id="navlinks"
    >
      {sections.map((section, i) => (
        <li
          className="text-center"
          key={`${i}-${section.name}`}
          id={section.id}
        >
          {/* trocar pois nao vai ser um href e sim um botao que seta um contexto */}
          <a
            href={`#${section.id}`}
            className="leading-relaxed font-medium text-md lg:text-base hover:font-semibold transition-all"
          >
            {section.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
