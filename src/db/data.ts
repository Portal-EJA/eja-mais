export type SectionData =
  | Curso
  | Noticia
  | Enem
  | BemEstar
  | Vocacao
  | Produtividade

// Definindo um tipo de objeto para o data com as chaves específicas
export interface Data {
  cursos: Curso[]
  noticias: Noticia[]
  enem: Enem[]
  bemEstar: BemEstar[]
  vocacao: Vocacao[]
  produtividade: Produtividade[]
}

export type SectionId = keyof Data

// Tipagem para Cursos
export type Curso = {
  id: number
  title: string
  duration?: string
  description?: string
  link: string
}

// Tipagem para Notícias
export type Noticia = {
  id: number
  title: string
  source: string
  category?: string
  link: string
}

// Tipagem para ENEM
export type Enem = {
  id: number
  title: string
  description: string
  link: string
}

// Tipagem para Bem-estar
export type BemEstar = {
  id: number
  title: string
  description: string
  link: string
}

// Tipagem para Vocação
export type Vocacao = {
  id: number
  title: string
  description: string
  link: string
}

// Tipagem para Produtividade
export type Produtividade = {
  id: number
  title: string
  description: string
  link: string
}

export type GeneralData = Partial<
  Curso & Noticia & Enem & BemEstar & Vocacao & Produtividade
>

export const sections = [
  { name: "Cursos", id: "cursos" },
  { name: "ENEM", id: "enem" },
  { name: "Bem-estar", id: "bem-estar" },
  { name: "Notícias", id: "noticias" },
  { name: "Vocação", id: "vocacao" },
  { name: "Produtividade", id: "produtividade" }
]

// Array de ENEM
const enem: Enem[] = [
  {
    id: 1,
    title: "Curso Enem Gratuito",
    description:
      "Plataforma com cursos gratuitos voltados para a preparação para o Enem, sem burocracia e com acesso aberto.",
    link: "https://cursoenemgratuito.com.br/"
  },
  {
    id: 2,
    title: "Calendário do ENEM 2024 ALTERAR",
    description: "Confira as datas e prazos do ENEM 2024.",
    link: "https://exemplo.com/calendario-enem-2024"
  }
]

// Array de Bem-estar
const bemEstar: BemEstar[] = [
  {
    id: 1,
    title: "Dicas de Saúde Mental ALTERAR",
    description: "Como cuidar da sua saúde mental durante os estudos.",
    link: "https://exemplo.com/saude-mental"
  },
  {
    id: 2,
    title: "Alimentação para o cérebro ALTERAR",
    description: "Alimentos que ajudam a melhorar a concentração e memória.",
    link: "https://exemplo.com/alimentacao-cerebro"
  }
]

// Array de Vocação
const vocacao: Vocacao[] = [
  {
    id: 1,
    title: "Teste Vocacional - Guia da Carreira",
    description:
      "Página que oferece um teste vocacional gratuito para ajudar na escolha da carreira ideal com base em suas habilidades e interesses.",
    link: "https://www.guiadacarreira.com.br/teste-vocacional"
  },
  {
    id: 2,
    title: "Guia de Profissões ALTERAR",
    description: "Entenda mais sobre as diferentes carreiras e como ingressar.",
    link: "https://exemplo.com/guia-de-profissoes"
  }
]

// Array de Produtividade
const produtividade: Produtividade[] = [
  {
    id: 1,
    title: "Blog de Produtividade e Bem-Estar - Viver de Blog",
    description:
      "Site com conteúdo voltado para melhorar a produtividade e o bem-estar, incluindo dicas de escrita e desenvolvimento pessoal.",
    link: "https://viverdeblog.com/blog/"
  },
  {
    id: 2,
    title: "Como organizar seu tempo de estudo ALTERAR",
    description: "Estratégias para planejar melhor seus horários e tarefas.",
    link: "https://exemplo.com/organizar-tempo"
  }
]

// Array de Cursos
const cursos: Curso[] = [
  {
    id: 1,
    title: "Cursos Gratuitos da Microsoft",
    description:
      "Portal de cursos gratuitos da Microsoft com treinamentos que abrangem desde linguagens de programação até o pacote Office.",
    link: "https://learn.microsoft.com/pt-br/training/browse/?products=office-365"
  },
  {
    id: 2,
    title:
      "Fundamentos do MS-900 Microsoft 365 : Descrever aplicações e serviços do Microsoft 365",
    description:
      "Roteiro de aprendizagem sobre como as soluções de produtividade e colaboração do Microsoft 365 capacitam empresas e usuários.",
    duration: "2 h 28 min",
    link: "https://learn.microsoft.com/pt-br/training/paths/describe-microsoft-365-core-services-concepts/"
  },
  {
    id: 3,
    title: "Introdução ao Microsoft 365 Copilot",
    description:
      "Módulo sobre as funcionalidades do Microsoft 365 Copilot e o compromisso da Microsoft com IA responsável.",
    duration: "29 min",
    link: "https://learn.microsoft.com/pt-br/training/modules/introduction-microsoft-365-copilot/"
  },
  {
    id: 4,
    title: "Introdução ao Office 365 e ao Windows para liderança",
    description:
      "Roteiro de aprendizagem que ajuda líderes educacionais a usar ferramentas para suporte e organização eficiente.",
    duration: "4 h 21 min",
    link: "https://learn.microsoft.com/pt-br/training/paths/get-started-office-365-windows-leadership/"
  }
]

// Array de Notícias
const noticias: Noticia[] = [
  {
    id: 1,
    title: "Portal do MEC",
    source: "MEC",
    category: "ENEM",
    link: "https://www.gov.br/mec/pt-br"
  }
]

export const data = { cursos, noticias, enem, bemEstar, vocacao, produtividade }
