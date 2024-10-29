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
  id: string
  title: string
  duration: string
  link: string
}

// Tipagem para Notícias
export type Noticia = {
  id: string
  title: string
  source: string
  category: string
  link: string
}

// Tipagem para ENEM
export type Enem = {
  id: string
  title: string
  description: string
  link: string
}

// Tipagem para Bem-estar
export type BemEstar = {
  id: string
  title: string
  description: string
  link: string
}

// Tipagem para Vocação
export type Vocacao = {
  id: string
  title: string
  description: string
  link: string
}

// Tipagem para Produtividade
export type Produtividade = {
  id: string
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
    id: "1",
    title: "Como se preparar para o ENEM",
    description: "Dicas essenciais para mandar bem nas provas do ENEM.",
    link: "https://exemplo.com/como-se-preparar-enem"
  },
  {
    id: "2",
    title: "Calendário do ENEM 2024",
    description: "Confira as datas e prazos do ENEM 2024.",
    link: "https://exemplo.com/calendario-enem-2024"
  }
]

// Array de Bem-estar
const bemEstar: BemEstar[] = [
  {
    id: "1",
    title: "Dicas de Saúde Mental",
    description: "Como cuidar da sua saúde mental durante os estudos.",
    link: "https://exemplo.com/saude-mental"
  },
  {
    id: "2",
    title: "Alimentação para o cérebro",
    description: "Alimentos que ajudam a melhorar a concentração e memória.",
    link: "https://exemplo.com/alimentacao-cerebro"
  }
]

// Array de Vocação
const vocacao: Vocacao[] = [
  {
    id: "1",
    title: "Teste vocacional gratuito",
    description: "Descubra suas aptidões e escolha a carreira certa para você.",
    link: "https://exemplo.com/teste-vocacional"
  },
  {
    id: "2",
    title: "Guia de Profissões",
    description: "Entenda mais sobre as diferentes carreiras e como ingressar.",
    link: "https://exemplo.com/guia-de-profissoes"
  }
]

// Array de Produtividade
const produtividade: Produtividade[] = [
  {
    id: "1",
    title: "Ferramentas de produtividade para estudantes",
    description:
      "Aplicativos e técnicas para aumentar seu rendimento nos estudos.",
    link: "https://exemplo.com/ferramentas-produtividade"
  },
  {
    id: "2",
    title: "Como organizar seu tempo de estudo",
    description: "Estratégias para planejar melhor seus horários e tarefas.",
    link: "https://exemplo.com/organizar-tempo"
  }
]

// Array de Cursos
const cursos: Curso[] = [
  {
    id: "1",
    title: "Curso de Excel",
    duration: "40 horas",
    link: "https://exemplo.com/curso-excel"
  },
  {
    id: "2",
    title: "Preparação para o vestibular",
    duration: "40 horas",
    link: "https://exemplo.com/preparacao-vestibular"
  },
  {
    id: "3",
    title: "Como fazer uma boa redação",
    duration: "40 horas",
    link: "https://exemplo.com/boa-redacao"
  }
]

// Array de Notícias
const noticias: Noticia[] = [
  {
    id: "1",
    title: "MEC abre inscrições para o ENEM",
    source: "MEC",
    category: "ENEM",
    link: "https://exemplo.com/mec-inscricoes-enem"
  },
  {
    id: "2",
    title: "Novo ensino médio",
    source: "Fonte",
    category: "MEC",
    link: "https://exemplo.com/novo-ensino-medio"
  }
]

export const data = { cursos, noticias, enem, bemEstar, vocacao, produtividade }
