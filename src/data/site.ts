// Sources: GitHub profile and project READMEs (2026-10-19); LinkedIn (2026-10-20).
// Professional background is paraphrased from the owner’s current LinkedIn profile.
// Assumption: English presentation. Astro config supplies the deployment origin.
// No project, employer, outcome metric or availability is invented.
import pensive from '../assets/entrance-desktop.png';
import pensiveDesk from '../assets/ask-desktop.png';
import pensiveEvidence from '../assets/evidence-desktop.png';
import observador from '../assets/observador.png';
import fitness from '../assets/fitness-cover.webp';
import fitnessCoach from '../assets/fitness-coach.webp';
import gymia from '../assets/Demo2.png';
import gymiaPlan from '../assets/Demo1.png';

export const site = {
  name: 'João Gabriel', fullName: 'João Gabriel Alves Junior',
  role: 'Software engineer', specialty: 'Backend engineering & applied AI',
  url: import.meta.env.SITE || 'http://localhost:4477',
  deployment: { placeholder: !import.meta.env.SITE || import.meta.env.SITE.startsWith('http://localhost'), note: 'Origin follows SITE_URL or Vercel’s production domain.' },
  description: 'João Gabriel is a software engineer in Brazil building reliable backend systems, evidence-backed AI, and connected web and mobile products.',
  email: 'gabrieljunior42566@gmail.com',
  github: 'https://github.com/Gabrieljr42',
  linkedin: 'https://www.linkedin.com/in/joao-gabriel-alves-junior/',
  profileSource: 'https://github.com/Gabrieljr42/Gabrieljr42/blob/main/README.md',
  nav: { work: 'Work', about: 'About', contact: 'Let’s talk' },
  hero: {
    first: 'Complex systems.', second: 'Clear purpose.',
    intro: 'I’m João Gabriel, a software engineer turning complex problems into reliable backends, evidence-backed AI, and useful products.',
    cta: 'Selected work', location: 'Based in Brazil', since: 'Building since 2020',
    sculpture: 'Three disciplines. One connected practice.',
  },
  currentWork: {
    label: 'In my day-to-day work', company: 'Grupo Actcon', role: 'Full-stack developer', period: 'June 2025 → present',
    text: 'I develop PHP and custom WordPress plugins, and integrate AI into the company’s everyday workflows.',
    link: 'Experience & education',
  },
  work: { title: 'Ideas, made real.', intro: 'A selection of independent projects.\nFrom the first data point to the final interface.', label: 'Selected projects', all: 'All repositories' },
  about: {
    title: 'I care about\nthe whole problem.',
    intro: 'Good software holds together. The data model, the background job, the answer an AI gives, and the screen someone uses.',
    body: 'I started in backend development in 2020, working with PHP, Laravel, Java, and relational databases. Today I’m a full-stack developer at Grupo Actcon and studying Generative AI and Large Language Models at PUC-Rio. I bring that engineering foundation to AI systems and connected products.',
    practices: [
      { name: 'Reliable foundations', detail: 'APIs, relational data, background workers, integrations', tools: 'Python / FastAPI / PHP / Laravel / PostgreSQL' },
      { name: 'AI with evidence', detail: 'Retrieval, source provenance, evaluation, human review', tools: 'RAG / pgvector / Gemini / OpenAI' },
      { name: 'Connected products', detail: 'Web interfaces, offline sync, local-first mobile', tools: 'TypeScript / React / React Native / Kotlin' },
    ],
    openSource: 'Better, together.', openIntro: 'Small fixes. Shared impact. Contributions across Java, PHP, and Python.',
  },
  contact: { label: 'Have something in mind?', title: 'Let’s make it\nwork beautifully.', cta: 'Get in touch', note: 'A good conversation is a good place to start.' },
  notFound: { title: 'This thread\nleads nowhere.', text: 'The page you’re looking for isn’t connected to this site. Let’s pick up the thread from the beginning.', cta: 'Back to home' },
  labels: { skip: 'Skip to content', source: 'Read the source', next: 'Next project', allWork: 'All work', backTop: 'Back to top', screenshot: 'Project screenshot', fullImage: 'Open full-size image', stack: 'Built with', role: 'Scope', github: 'GitHub', linkedin: 'LinkedIn', home: 'Home', viewCase: 'View case study', status: 'What shipped', decisions: 'Engineering decisions', context: 'The problem', mail: 'Email me' },
};

export const practices = [
  { title: 'Backend', label: 'Data into dependable systems.', route: 'Public portals → Versioned notices → Offline app', project: 'Observador de Concursos', href: '/work/observador/', state: 0, nodes: ['Public portals', 'Versioned notices', 'Offline app'], trace: 'Trace a notice', actions: ['Collect public notices', 'Fingerprint and keep versions', 'Sync to the offline app'] },
  { title: 'Applied AI', label: 'Answers connected to evidence.', route: 'Source texts → Retrieval & review → Cited answers', project: 'Pensieve', href: '/work/pensieve/', state: 1, nodes: ['Source texts', 'Retrieval & review', 'Cited answers'], trace: 'Trace an answer', actions: ['Select the source texts', 'Retrieve and verify passages', 'Open the cited answer'] },
  { title: 'Product', label: 'The whole system, in your hands.', route: 'On-device logs → Shared contracts → Daily briefing', project: 'Android Fitness Ecosystem', href: '/work/fitness/', state: 2, nodes: ['On-device logs', 'Shared contracts', 'Daily briefing'], trace: 'Trace a day', actions: ['Log training and meals', 'Share versioned app data', 'Read a daily briefing'] },
];

export const projects = [
  {
    slug: 'pensieve', title: 'Pensieve', repositoryName: 'ThePensive', flow: ['Source texts', 'Retrieval & review', 'Cited answers'],
    category: 'Applied AI · Research tool', summary: 'Ask the story. Follow the evidence.',
    description: 'A research archive that compares retrieval-augmented generation with full-context prompting, with every answer linked to its sources.',
    scope: 'Full-stack engineering & interaction', type: 'Independent project',
    tags: ['Next.js', 'FastAPI', 'pgvector', 'Gemini'],
    cover: pensive, alt: 'Pensieve’s candlelit archive with a stone basin, books, and the entrance to the research desk.',
    tint: 'archive', placeholder: false,
    context: 'An AI-generated answer is only useful if you can check it. Pensieve makes two approaches to asking questions of a literary corpus visible: retrieving relevant passages, or sending a larger context directly to the model.',
    idea: 'The interface is an archive. A question opens two reading tomes, one for each method. Citations bring the reader back to the exact supplied passage, while a quiet reading mode keeps the evidence in focus.',
    decisions: [
      { title: 'Keep the source attached', text: 'PostgreSQL and pgvector connect indexed passages to persisted runs. Citation ranges are checked against the supplied text, followed by a second semantic review.' },
      { title: 'Make the comparison inspectable', text: 'RAG and Full Context have separate results, latency, token usage, and estimated costs. Accounting estimates stay distinct from proof of an actual charge.' },
      { title: 'Keep the theatre optional', text: 'A WebGL archive introduces the work. The research desk stays in the DOM, with keyboard access, reduced motion, and a path to skip the animation.' },
    ],
    media: [ { image: pensiveDesk, alt: 'Pensieve reading desk with book selection, a manuscript question form, and comparison controls.', caption: 'The reading desk. Two methods, one question, and a direct route to the evidence.' }, { image: pensiveEvidence, alt: 'Pensieve source chamber displaying an answer and its supporting text passages.', caption: 'The source chamber keeps the supporting passage beside the claim.' } ],
    outcome: 'A working Next.js, FastAPI, and pgvector stack with live Gemini integration and a separately labelled demonstration mode. Corpus access and provider quotas limit the live experiments; the repository records those boundaries.',
    href: 'https://github.com/Gabrieljr42/ThePensive',
  },
  {
    slug: 'observador', title: 'Observador de Concursos', repositoryName: 'ObservadorConcursos', flow: ['Public portals', 'Versioned notices', 'Offline app'],
    category: 'Data pipelines · Offline-first mobile', summary: 'Public information, made useful.',
    description: 'A Brazilian public-exam intelligence platform connecting source monitoring, document change tracking, and an offline-first mobile app.',
    scope: 'Backend, data pipelines & mobile sync', type: 'Independent project',
    tags: ['FastAPI', 'PostgreSQL', 'Celery', 'React Native'],
    cover: observador, alt: 'Recorded project interface labelled RadarConcursos, showing public exam updates, a notice list, and saved-item navigation.',
    tint: 'observador', placeholder: false,
    context: 'Exam announcements are spread across institutional portals. Dates move, documents change, and candidates need to keep up even when their connection is unreliable.',
    idea: 'Bring collection, versioning, and candidate access into one system. A catalog of 99 source definitions feeds background collectors; the mobile app keeps its own local copy and reconciles changes when it reconnects.',
    decisions: [
      { title: 'Track changes explicitly', text: 'SHA-256 fingerprints and version records separate a changed notice from one already processed. Historical executions help distinguish an empty result from a failing portal.' },
      { title: 'Give slow work its own lane', text: 'Celery and Redis handle scheduled crawling, parsing, and retries. FastAPI exposes structured records and synchronization checkpoints.' },
      { title: 'Work through a lost connection', text: 'The React Native and Expo client caches data in SQLite. Favorites and alerts enter a local outbox and reconcile against the backend after reconnection.' },
    ],
    media: [ { image: observador, alt: 'Recorded project interface labelled RadarConcursos with published exam notices.', caption: 'The captured interface displays the name RadarConcursos. This case documents the ObservadorConcursos repository. Screen counts reflect the captured test data, not the complete connector catalog.' } ],
    outcome: 'A containerized API, worker, scheduler, PostgreSQL, and Redis stack, plus an offline-first companion client. The repository includes connector fixtures, idempotency checks, synchronization verification, and operational documentation. 99 is the configured source catalog, not a claim that every portal is live.',
    href: 'https://github.com/Gabrieljr42/ObservadorConcursos',
  },
  {
    slug: 'fitness', title: 'Android Fitness Ecosystem', repositoryName: 'android-fitness-ecosystem', flow: ['On-device logs', 'Shared contracts', 'Daily briefing'],
    category: 'Local-first Android · Connected health', summary: 'Three apps. One daily picture.',
    description: 'A local-first Android suite connecting strength training, nutrition, and daily coaching through explicit, on-device data contracts.',
    scope: 'Android, local data & cross-app contracts', type: 'Independent project',
    tags: ['Kotlin', 'Java', 'SQLite', 'Health Connect'],
    cover: fitness, alt: 'Overview of real Evolução workout, NutriTrack nutrition, and Coach readiness screens.',
    tint: 'fitness', placeholder: false,
    context: 'Training, nutrition, and health signals often live in separate applications. This suite explores how to bring them together while keeping the main workflows and storage on the phone.',
    idea: 'Let each app own its domain. Evolução logs training, NutriTrack records meals, and Coach reads their data alongside Health Connect and a daily check-in. No shared application backend is required.',
    decisions: [
      { title: 'Connect through contracts', text: 'Read-only ContentProviders share versioned, size-capped payloads with caller-package checks. Each app keeps control of its own records.' },
      { title: 'Make local the default', text: 'WebView interfaces run inside Java and Kotlin shells. LocalStorage, SharedPreferences, and SQLite serve different storage responsibilities; core flows remain available offline.' },
      { title: 'Show missing signals honestly', text: 'Coach distinguishes unavailable health data and optional AI from actual observations. Optional Gemini requests leave the device and use the owner’s own API key.' },
    ],
    media: [ { image: fitnessCoach, alt: 'Coach daily briefing and readiness interface with explicit absent-data states.', caption: 'Existing screen overview from the project: missing data is an explicit state, rather than a fabricated readiness score.' } ],
    outcome: 'Three Android applications with documented storage boundaries, cross-app providers, and JS and Kotlin test suites. Wear OS and Health Connect integrations extend the suite; physical-device and build verification requirements are documented separately.',
    href: 'https://github.com/Gabrieljr42/android-fitness-ecosystem',
  },
  {
    slug: 'gymia', title: 'GymIA', repositoryName: 'GymIA', flow: ['Client context', 'AI draft', 'Instructor review'],
    category: 'Applied AI · Academic prototype', summary: 'AI assists. The professional decides.',
    description: 'An academic workout-planning prototype that helps qualified fitness professionals generate, edit, and manage structured training plans.',
    scope: 'Full-stack engineering & AI workflow', type: 'Academic prototype',
    tags: ['React', 'Express', 'Prisma', 'OpenAI'],
    cover: gymia, alt: 'GymIA interface for organizing and reviewing a client’s workout plan.',
    tint: 'gymia', placeholder: false,
    context: 'Personal trainers balance client histories, activity, and the details of every workout. GymIA explores where language models can reduce the drafting work while leaving professional judgment in control.',
    idea: 'An AI-generated plan starts the conversation. The instructor can review exercises, sets, repetitions, intervals, and load in a structured editor before exporting a sheet for the client.',
    decisions: [
      { title: 'Keep the result editable', text: 'The model produces a structured workout plan. A human review step turns it into an instructor-owned artifact instead of an autonomous prescription.' },
      { title: 'Model the real relationships', text: 'Express, Prisma, and MySQL organize instructors, clients, plans, and chat sessions. JWT authentication scopes access to the workspace.' },
      { title: 'Finish the practical workflow', text: 'Client activity views, plan editing, and print-friendly export bring the prototype beyond a standalone AI chat box.' },
    ],
    media: [ { image: gymiaPlan, alt: 'GymIA exported workout table with exercises, sets, repetitions, rest periods, and instructor notes.', caption: 'A real workout-sheet capture from the repository. Structured output remains editable before export.' } ],
    outcome: 'An academic full-stack prototype with client management, AI-assisted plan generation, an instructor review interface, and PDF and print export. Generated suggestions require review by a qualified professional.',
    href: 'https://github.com/Gabrieljr42/GymIA',
  },
];

export const contributions = [
  { name: 'jvm-mcp', ecosystem: 'Java', title: 'Defer JMX initialization until the Actuator probe', href: 'https://github.com/oscarbol09/jvm-mcp/pull/85', reference: 'PR #85' },
  { name: 'Vavr', ecosystem: 'Java', title: 'Coverage for null error-mapper results', href: 'https://github.com/vavr-io/vavr/pull/3372', reference: 'PR #3372' },
  { name: 'Repowise', ecosystem: 'Python', title: 'Normalize dead-code penalties in health scoring', href: 'https://github.com/repowise-dev/repowise/pull/4083', reference: 'PR #4083' },
];

export interface CaseEvidence {
  label: string;
  title: string;
  date: string;
  dateLabel: string;
  summary: string;
  metrics: { value: string; label: string }[];
  findings: { title: string; text: string }[];
  boundary: string;
  links: { label: string; href: string }[];
}

export const caseEvidence: Record<string, CaseEvidence> = {
  pensieve: {
    label: 'Evidence from a live run', title: 'What the experiment actually showed.', date: '2026-10-11', dateLabel: '11 October 2026',
    summary: 'A real Gemini run exposed citation failures and provider limits. Those findings changed how the application retrieves evidence, reviews answers, and handles large requests.',
    metrics: [{ value: '57', label: 'chapters in the corpus' }, { value: '914', label: 'pages of source text' }, { value: '738', label: 'indexed passages' }],
    findings: [
      { title: 'Exact quotations need more than a prompt', text: 'The model changed or combined free-form quotations. It now selects passage IDs, and the backend resolves the exact source text and position. A second semantic review checks each factual claim against its cited passages.' },
      { title: 'Large Full Context requests hit a real boundary', text: 'Six attempts across one-, two-, and three-book scopes all failed with HTTP 503 or 429. The current interface counts input tokens before generation and rejects Full Context requests above 30,000 tokens without silently truncating the source.' },
      { title: 'RAG retrieval needed balance across books', text: 'Early summaries overrepresented some books. Retrieval now combines candidates per book and expands neighbouring passages. The report records both the failures and the resulting corrections.' },
    ],
    boundary: 'This run does not establish that RAG is better than Full Context: all six large Full Context attempts failed before producing an answer. Model-based review is a check, not a guarantee of correctness. Private source texts and session records are not published.',
    links: [
      { label: 'Read the live verification report', href: 'https://github.com/Gabrieljr42/ThePensive/blob/main/docs/verification/live-gemini-2026-10-11.md' },
      { label: 'Inspect the evaluation cases', href: 'https://github.com/Gabrieljr42/ThePensive/blob/main/backend/tests/live-scale-cases.json' },
    ],
  },
  observador: {
    label: 'Evidence from a pilot', title: 'A system you can inspect.', date: '2026-09-12', dateLabel: '12 September 2026',
    summary: 'The documented pilot followed real records from the API to the web client. Search, filters, details and revision history were inspected, with remaining gaps recorded alongside the results.',
    metrics: [{ value: '32', label: 'selections synced to the client' }, { value: '31', label: 'sources represented in the pilot' }, { value: '48', label: 'stored versions' }],
    findings: [
      { title: 'The data reached the interface', text: 'Login, session refresh, checkpoints, 32 detail records and revisions passed through the web proxy. The browser displayed the 32 selections; filtering for open applications reduced that recorded result to eight.' },
      { title: 'The same notice must not multiply', text: 'The repository includes a controlled idempotency test: the first collection creates one record and version; a second collection with identical data creates neither. This is a fixture-based test, separate from the live pilot.' },
      { title: 'Offline reconciliation has its own verification path', text: 'Dedicated scripts cover favourites, alerts and reopening the app. They provide a way to inspect the intended roundtrip, but the September pilot did not test a disconnected network, native devices or new offline actions.' },
    ],
    boundary: 'These are dated pilot results, not a live availability dashboard. They do not certify all 99 configured sources. The report also records missing locations, empty structured-publication data and confusing date and change labels.',
    links: [
      { label: 'Read the pilot report and limits', href: 'https://github.com/Gabrieljr42/ObservadorConcursos/blob/main/docs/VERIFICACAO-REAL-2026-09-12.md' },
      { label: 'Inspect the idempotency test', href: 'https://github.com/Gabrieljr42/ObservadorConcursos/blob/main/backend/tests/test_idempotency.py' },
      { label: 'Inspect the offline verification scripts', href: 'https://github.com/Gabrieljr42/ObservadorConcursos/tree/main/scripts/verification' },
    ],
  },
};

export const pipelineStages = [
  { name: 'Collect', tools: 'Celery + Playwright', text: 'Scheduled workers collect public notices using HTTP, browser automation, and PDF parsing. Redis queues the work and retries. A recorded execution distinguishes an unavailable portal from one with no new notices.' },
  { name: 'Remember', tools: 'SHA-256 + PostgreSQL', text: 'Document fingerprints identify changes. PostgreSQL keeps notices and their versions, so an amendment is traceable instead of silently replacing the previous information.' },
  { name: 'Sync', tools: 'FastAPI + SQLite', text: 'The API exposes structured notices and synchronization checkpoints. The mobile app keeps a local SQLite copy and an outbox for saved items, then reconciles changes after a connection returns.' },
];
export const pipelineCopy = { heading: ['A thread you can', 'follow all the way.'], count: '99', countLabel: 'configured sources', caption: 'From public portals to the local client. Select a stage to inspect its responsibility. The 99-source catalog includes configured connectors; availability varies by portal.' };


export const background = {
  title: ['Built on experience.', 'Still learning.'],
  intro: 'Backend development gave me a foundation. Leading a team broadened it. Now I’m connecting that experience with the next generation of AI systems.',
  location: 'Conselheiro Lafaiete, Minas Gerais, Brazil',
  experience: [
    { company: 'Grupo Actcon', role: 'Full-stack developer', period: 'June 2025 → present', text: 'I develop PHP solutions and custom WordPress plugins, and integrate AI into the company’s everyday workflows to support internal processes and results.' },
    { company: 'ECOM-D', role: 'Backend development & team leadership', period: 'Previously · nearly 4 years', text: 'Led the development team with a focus on performance, data security, and scalable systems.' },
  ],
  education: [
    { institution: 'CCEC · PUC-Rio', title: 'Generative AI & Large Language Models', original: 'Inteligência Artificial Generativa & Large Language Models', level: 'Postgraduate studies', period: 'June 2026 → October 2027', status: 'In progress', text: 'Deepening my practice in transformers, fine-tuning, retrieval-augmented generation, agents, evaluation, and deploying LLM systems.' },
    { institution: 'IFMG', title: 'Information Systems', original: 'Graduação em Sistemas de informação', level: 'Undergraduate degree', period: 'March 2021 → December 2024', status: 'Completed', text: 'Software development, a campus junior team, an innovation project, and tutoring introductory programming at Instituto Federal de Minas Gerais.' },
  ],
  certificates: [
    { title: 'Java: trabalhando com lambdas, streams e Spring Framework', description: 'Lambdas, streams & Spring Framework', issuer: 'Alura', date: 'February 2024', id: 'dc79c30b-0375-40bf-af25-7c86da827d7f' },
    { title: 'Java: aplicando a Orientação a Objetos', description: 'Object-oriented programming in Java', issuer: 'Alura', date: 'December 2023', id: 'ef50b0b7-9d25-490f-8319-098a0f1006c6' },
    { title: 'Aprender a aprender: técnicas para seu autodesenvolvimento', description: 'Learning techniques & self-development', issuer: 'Alura', date: 'December 2023', id: '0c4c9a25-313a-4cfe-ab4d-3f1f1bb0bc5f' },
  ],
  note: 'Education, roles, and credentials listed on my LinkedIn profile. Certificate links open the issuer’s credential page.',
};
