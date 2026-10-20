import * as en from '../data/site';

export const site = {
  ...en.site,
  role: 'Engenheiro de software', specialty: 'Backend e inteligência artificial aplicada',
  description: 'João Gabriel é engenheiro de software no Brasil. Desenvolve backends confiáveis, IA com fontes verificáveis e produtos web e mobile conectados.',
  nav: { work: 'Projetos', about: 'Sobre', contact: 'Vamos conversar' },
  hero: {
    first: 'Sistemas complexos.', second: 'Propósito claro.',
    intro: 'Sou João Gabriel, engenheiro de software. Transformo problemas complexos em backends confiáveis, IA com fontes verificáveis e produtos úteis.',
    cta: 'Ver projetos', location: 'No Brasil', since: 'Desenvolvendo desde 2020',
    sculpture: 'Três áreas. Uma prática conectada.',
  },
  work: { title: 'Ideias que saem do papel.', intro: 'Uma seleção de projetos independentes.\nDo primeiro dado à interface final.', label: 'Projetos selecionados', all: 'Todos os repositórios' },
  about: {
    title: 'Eu cuido do\nproblema inteiro.',
    intro: 'Um bom software funciona como um todo. O modelo de dados, o processamento em segundo plano, a resposta da IA e a tela que alguém usa.',
    body: 'Comecei no desenvolvimento backend em 2020, com PHP, Laravel, Java e bancos de dados relacionais. Hoje sou desenvolvedor full stack no Grupo Actcon e curso a pós-graduação em Inteligência Artificial Generativa e Large Language Models na PUC-Rio. Levo essa base de engenharia para sistemas de IA e produtos conectados.',
    practices: [
      { name: 'Bases confiáveis', detail: 'APIs, dados relacionais, processamento assíncrono e integrações', tools: en.site.about.practices[0].tools },
      { name: 'IA com evidências', detail: 'Recuperação de informações, rastreabilidade, avaliação e revisão humana', tools: en.site.about.practices[1].tools },
      { name: 'Produtos conectados', detail: 'Interfaces web, sincronização offline e aplicativos com dados locais', tools: en.site.about.practices[2].tools },
    ],
    openSource: 'Melhor, em conjunto.', openIntro: 'Pequenas correções. Impacto compartilhado. Contribuições em Java, PHP e Python.',
  },
  contact: { label: 'Tem uma ideia em mente?', title: 'Vamos fazer\nfuncionar bem.', cta: 'Entrar em contato', note: 'Uma boa conversa é um bom começo.' },
  notFound: { title: 'Este fio\nnão leva a lugar algum.', text: 'A página que você procura não está conectada a este site. Vamos retomar o fio desde o início.', cta: 'Voltar ao início' },
  labels: { skip: 'Pular para o conteúdo', source: 'Ver código-fonte', next: 'Próximo projeto', allWork: 'Todos os projetos', backTop: 'Voltar ao topo', screenshot: 'Captura do projeto', fullImage: 'Abrir imagem completa', stack: 'Tecnologias', role: 'Atuação', github: 'GitHub', linkedin: 'LinkedIn', home: 'Início', viewCase: 'Conhecer o projeto', status: 'O que foi desenvolvido', decisions: 'Decisões de engenharia', context: 'O problema', mail: 'Enviar e-mail' },
};

export const practices = [
  { ...en.practices[0], title: 'Backend', label: 'Dados que viram sistemas confiáveis.', route: 'Portais públicos → Editais versionados → App offline', nodes: ['Portais públicos', 'Editais versionados', 'App offline'], trace: 'Seguir um edital', actions: ['Coletar editais públicos', 'Identificar mudanças e guardar versões', 'Sincronizar com o app offline'] },
  { ...en.practices[1], title: 'IA aplicada', label: 'Respostas conectadas às fontes.', route: 'Textos de origem → Busca e revisão → Respostas com fontes', nodes: ['Textos de origem', 'Busca e revisão', 'Respostas com fontes'], trace: 'Seguir uma resposta', actions: ['Selecionar os textos de origem', 'Buscar e verificar os trechos', 'Abrir a resposta com suas fontes'] },
  { ...en.practices[2], title: 'Produto', label: 'O sistema inteiro nas suas mãos.', project: 'Ecossistema Fitness Android', route: 'Registros locais → Contratos de dados → Resumo diário', nodes: ['Registros locais', 'Contratos de dados', 'Resumo diário'], trace: 'Seguir um dia', actions: ['Registrar treinos e refeições', 'Compartilhar dados versionados', 'Ler o resumo do dia'] },
];

export const projects = [
  {
    ...en.projects[0], flow: ['Textos de origem', 'Busca e revisão', 'Respostas com fontes'],
    category: 'IA aplicada · Ferramenta de pesquisa', summary: 'Pergunte à história. Confira as fontes.',
    description: 'Um acervo de pesquisa que compara geração aumentada por recuperação de informações com prompts de contexto completo, sempre conectando as respostas às suas fontes.',
    scope: 'Engenharia full stack e interação', type: 'Projeto independente',
    alt: 'Acervo do Pensieve à luz de velas, com uma bacia de pedra, livros e acesso à mesa de pesquisa.',
    context: 'Uma resposta gerada por IA só é útil se puder ser conferida. O Pensieve apresenta duas formas de consultar um corpus literário: recuperar os trechos relevantes ou enviar um contexto maior diretamente ao modelo.',
    idea: 'A interface é um acervo. Cada pergunta abre dois livros, um para cada método. As citações levam ao trecho exato do texto fornecido, enquanto um modo de leitura mais discreto mantém o foco nas evidências.',
    decisions: [
      { title: 'Manter a fonte junto da resposta', text: 'PostgreSQL e pgvector conectam os trechos indexados às execuções persistidas. Os intervalos das citações são conferidos no texto fornecido e passam por uma segunda revisão semântica.' },
      { title: 'Permitir uma comparação verificável', text: 'RAG e contexto completo têm resultados, latência, uso de tokens e estimativas de custo separados. Estimativas contábeis ficam distintas de qualquer comprovação de cobrança real.' },
      { title: 'Deixar a ambientação como opção', text: 'Um acervo em WebGL apresenta o projeto. A mesa de pesquisa permanece no DOM, com acesso por teclado, movimento reduzido e uma opção para pular a animação.' },
    ],
    media: [
      { ...en.projects[0].media[0], alt: 'Mesa de leitura do Pensieve com seleção de livros, formulário de perguntas e controles de comparação.', caption: 'A mesa de leitura. Dois métodos, uma pergunta e um caminho direto até as fontes.' },
      { ...en.projects[0].media[1], alt: 'Câmara de fontes do Pensieve exibindo uma resposta ao lado dos trechos que a sustentam.', caption: 'A câmara de fontes mantém o trecho de apoio ao lado da afirmação.' },
    ],
    outcome: 'Uma aplicação funcional com Next.js, FastAPI, pgvector e integração ao Gemini, além de um modo de demonstração identificado separadamente. O acesso ao corpus e as cotas do provedor limitam os experimentos ao vivo; esses limites estão documentados no repositório.',
  },
  {
    ...en.projects[1], flow: ['Portais públicos', 'Editais versionados', 'App offline'],
    category: 'Pipelines de dados · Mobile com suporte offline', summary: 'Informação pública que se torna útil.',
    description: 'Uma plataforma de inteligência para concursos públicos que conecta monitoramento de fontes, acompanhamento de mudanças em documentos e um aplicativo que funciona offline.',
    scope: 'Backend, pipelines de dados e sincronização mobile', type: 'Projeto independente',
    alt: 'Interface web mobile do Observador com atualizações de concursos, lista de editais e acesso a itens salvos.',
    context: 'Os editais de concursos estão espalhados por portais institucionais. Datas mudam, documentos são atualizados e os candidatos precisam acompanhar tudo, mesmo com uma conexão instável.',
    idea: 'Reunir coleta, versionamento e acesso do candidato em um único sistema. Um catálogo com 99 definições de fontes alimenta os coletores em segundo plano; o aplicativo mantém uma cópia local e reconcilia as mudanças quando volta a se conectar.',
    decisions: [
      { title: 'Registrar as mudanças de forma explícita', text: 'Hashes SHA-256 e registros de versão distinguem um edital alterado de outro já processado. O histórico de execuções ajuda a diferenciar um resultado vazio de uma falha no portal.' },
      { title: 'Separar as tarefas demoradas', text: 'Celery e Redis cuidam da coleta agendada, da extração e das novas tentativas. O FastAPI disponibiliza registros estruturados e pontos de controle para sincronização.' },
      { title: 'Continuar após perder a conexão', text: 'O cliente em React Native e Expo armazena os dados em SQLite. Favoritos e alertas entram em uma fila local de saída e são reconciliados com o backend após a reconexão.' },
    ],
    media: [{ ...en.projects[1].media[0], alt: 'Estado registrado da interface do Observador com os editais mais recentes.', caption: 'Um estado registrado da interface. As contagens na tela refletem os dados de teste capturados, não o catálogo completo de conectores.' }],
    outcome: 'API, worker, agendador, PostgreSQL e Redis em contêineres, além de um cliente mobile com suporte offline. O repositório inclui dados de teste dos conectores, verificações de idempotência e sincronização e documentação operacional. As 99 fontes compõem o catálogo configurado; isso não significa que todos os portais estejam ativos.',
  },
  {
    ...en.projects[2], title: 'Ecossistema Fitness Android', flow: ['Registros locais', 'Contratos de dados', 'Resumo diário'],
    category: 'Android com dados locais · Saúde conectada', summary: 'Três apps. Uma visão do dia.',
    description: 'Um conjunto de aplicativos Android que conecta treino de força, alimentação e orientação diária por contratos explícitos de dados, com armazenamento local no aparelho.',
    scope: 'Android, dados locais e contratos entre aplicativos', type: 'Projeto independente',
    alt: 'Visão das telas reais do Evolução para treinos, NutriTrack para alimentação e Coach para acompanhamento diário.',
    context: 'Treino, alimentação e indicadores de saúde costumam ficar em aplicativos separados. Este conjunto explora como reuni-los mantendo os principais fluxos e o armazenamento no próprio celular.',
    idea: 'Cada aplicativo cuida do seu domínio. O Evolução registra treinos, o NutriTrack registra refeições e o Coach consulta esses dados junto do Health Connect e de um check-in diário. Não é necessário um backend compartilhado entre os aplicativos.',
    decisions: [
      { title: 'Conectar por contratos de dados', text: 'ContentProviders somente de leitura compartilham dados versionados com limite de tamanho e validação do pacote solicitante. Cada aplicativo mantém o controle dos próprios registros.' },
      { title: 'Priorizar o armazenamento local', text: 'Interfaces em WebView rodam dentro de estruturas em Java e Kotlin. LocalStorage, SharedPreferences e SQLite atendem a responsabilidades diferentes; os fluxos principais continuam disponíveis offline.' },
      { title: 'Mostrar quando faltam informações', text: 'O Coach distingue dados de saúde indisponíveis e IA opcional de observações reais. As solicitações opcionais ao Gemini saem do aparelho e usam a chave de API do próprio usuário.' },
    ],
    media: [{ ...en.projects[2].media[0], alt: 'Interface de resumo diário do Coach com estados explícitos para dados indisponíveis.', caption: 'Visão de telas já existente no projeto: a falta de dados é um estado explícito, sem inventar uma pontuação de prontidão.' }],
    outcome: 'Três aplicativos Android com limites de armazenamento documentados, provedores de dados entre apps e testes em JS e Kotlin. Integrações com Wear OS e Health Connect ampliam o conjunto; os requisitos de verificação de build e de uso em aparelhos físicos estão documentados separadamente.',
  },
  {
    ...en.projects[3], flow: ['Contexto do aluno', 'Rascunho da IA', 'Revisão do instrutor'],
    category: 'IA aplicada · Protótipo acadêmico', summary: 'A IA ajuda. O profissional decide.',
    description: 'Um protótipo acadêmico que ajuda profissionais de educação física a gerar, editar e gerenciar planos de treino estruturados.',
    scope: 'Engenharia full stack e fluxo de trabalho com IA', type: 'Protótipo acadêmico',
    alt: 'Interface do GymIA para organizar e revisar o plano de treino de um aluno.',
    context: 'Personal trainers precisam conciliar o histórico dos alunos, suas atividades e os detalhes de cada treino. O GymIA explora como os modelos de linguagem podem reduzir o trabalho de elaboração sem tirar do profissional a decisão final.',
    idea: 'O plano gerado por IA é um ponto de partida. O instrutor pode revisar exercícios, séries, repetições, intervalos e cargas em um editor estruturado antes de exportar a ficha para o aluno.',
    decisions: [
      { title: 'Manter o resultado editável', text: 'O modelo gera um plano de treino estruturado. Uma etapa de revisão humana transforma esse resultado em um material sob responsabilidade do instrutor, em vez de uma prescrição autônoma.' },
      { title: 'Modelar as relações reais', text: 'Express, Prisma e MySQL organizam instrutores, alunos, planos e sessões de conversa. A autenticação com JWT restringe o acesso ao ambiente de trabalho.' },
      { title: 'Concluir o fluxo de uso', text: 'Visualização das atividades do aluno, edição do plano e exportação para impressão levam o protótipo além de uma conversa isolada com IA.' },
    ],
    media: [{ ...en.projects[3].media[0], alt: 'Ficha de treino exportada pelo GymIA com exercícios, séries, repetições, descanso e observações do instrutor.', caption: 'Uma captura real da ficha de treino do repositório. O resultado estruturado permanece editável antes da exportação.' }],
    outcome: 'Um protótipo acadêmico full stack com gestão de alunos, geração de planos com auxílio de IA, revisão pelo instrutor e exportação em PDF e para impressão. As sugestões geradas precisam da revisão de um profissional qualificado.',
  },
];

export const contributions = en.contributions.map((contribution, index) => ({ ...contribution, title: [
  'Adiar a inicialização do JMX até a verificação do Actuator',
  'Tipagem genérica de escopos do Eloquent para análise estática',
  'Cobertura para resultados nulos no mapeamento de erros',
  'Normalizar penalidades de código não utilizado na avaliação do repositório',
][index] }));

export const pipelineStages = [
  { name: 'Coletar', tools: 'Celery + Playwright', text: 'Workers agendados coletam editais públicos por HTTP, automação de navegador e extração de PDFs. O Redis organiza a fila e as novas tentativas. O registro da execução distingue um portal indisponível de outro sem novos editais.' },
  { name: 'Guardar', tools: 'SHA-256 + PostgreSQL', text: 'Hashes dos documentos identificam mudanças. O PostgreSQL mantém os editais e suas versões, permitindo rastrear uma retificação sem substituir silenciosamente a informação anterior.' },
  { name: 'Sincronizar', tools: 'FastAPI + SQLite', text: 'A API disponibiliza editais estruturados e pontos de controle de sincronização. O aplicativo mantém uma cópia em SQLite e uma fila local de itens salvos, reconciliando as mudanças quando a conexão volta.' },
];
export const pipelineCopy = { heading: ['Um fio que você pode', 'seguir até o fim.'], count: '99', countLabel: 'fontes configuradas', caption: 'Dos portais públicos ao aplicativo local. Selecione uma etapa para conhecer sua responsabilidade. O catálogo de 99 fontes inclui conectores configurados; a disponibilidade varia por portal.' };

export const background = {
  title: ['Experiência como base.', 'Aprendizado contínuo.'],
  intro: 'O backend me deu uma base. Liderar uma equipe ampliou minha visão. Agora conecto essa experiência à nova geração de sistemas de inteligência artificial.',
  location: 'Conselheiro Lafaiete, Minas Gerais, Brasil',
  experience: [
    { ...en.background.experience[0], role: 'Desenvolvedor full stack', period: 'Atualmente', text: 'Atuação do backend à interface, com base em PHP, Laravel, Java e bancos de dados relacionais.' },
    { ...en.background.experience[1], role: 'Desenvolvimento backend e liderança de equipe', period: 'Anteriormente · quase 4 anos', text: 'Liderei a equipe de desenvolvimento com foco em desempenho, segurança de dados e sistemas escaláveis.' },
  ],
  education: [
    { ...en.background.education[0], title: 'Inteligência Artificial Generativa e Large Language Models', level: 'Pós-graduação', period: 'Junho de 2026 → Outubro de 2027', status: 'Em andamento', text: 'Aprofundamento em transformers, fine-tuning, RAG, agentes, avaliação e implantação de sistemas com grandes modelos de linguagem.' },
    { ...en.background.education[1], title: 'Sistemas de Informação', level: 'Graduação', period: 'Março de 2021 → Dezembro de 2024', status: 'Concluída', text: 'Desenvolvimento de software, participação em uma equipe júnior do campus e em um projeto de inovação, além de monitoria de programação introdutória no Instituto Federal de Minas Gerais.' },
  ],
  certificates: en.background.certificates.map((certificate, index) => ({ ...certificate, date: index === 0 ? 'Fevereiro de 2024' : 'Dezembro de 2023', description: [
    'Lambdas, streams e Spring Framework', 'Programação orientada a objetos em Java', 'Técnicas de aprendizagem e autodesenvolvimento',
  ][index] })),
  note: 'Formação, experiências e certificados listados no meu perfil do LinkedIn. Os links dos certificados abrem a página da instituição emissora.',
};
