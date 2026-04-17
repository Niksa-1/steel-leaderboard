import benchmarkResults from "../data/benchmark-results.json";

export type BenchmarkCategory =
  | "browser_agents"
  | "computer_use"
  | "research_search"
  | "coding"
  | "model_eval";

export type BenchmarkScope = "agent" | "model" | "mixed";

export interface BenchmarkPageMeta {
  slug: string;
  name: string;
  category: BenchmarkCategory;
  scope: BenchmarkScope;
  about: string[];
  methodology: string[];
  importantNotes: string[];
  links: { label: string; url: string }[];
  relatedBenchmarks: string[];
  featuredOnHome: boolean;
  lastUpdated: string;
}

export interface BenchmarkResultRow {
  rank: number;
  systemName: string;
  organization: string;
  scoreDisplay: string;
  scoreValue: number | null;
  sourceUrl: string;
  notesShort: string;
  isNew?: boolean;
}

export interface BenchmarkFaqFacts {
  bestCurrentLabel: string;
  bestCurrentScore: string;
  scope: BenchmarkScope;
  lastUpdated: string;
  hasVerificationCaveat: boolean;
  hasComparabilityCaveat: boolean;
}

export interface BenchmarkFaqItem {
  q: string;
  a: string;
}

export interface BenchmarkPageData {
  meta: BenchmarkPageMeta;
  results: BenchmarkResultRow[];
}

export const benchmarkCategoryLabels: Record<BenchmarkCategory, string> = {
  browser_agents: "Browser agents",
  computer_use: "Computer use",
  research_search: "Research/search",
  coding: "Coding",
  model_eval: "Model evals / reasoning",
};

export const benchmarkScopeLabels: Record<BenchmarkScope, string> = {
  model: "Model",
  agent: "Agent",
  mixed: "Mixed",
};

export const benchmarkPages: BenchmarkPageData[] = [
  {
    meta: {
      slug: "webvoyager",
      name: "WebVoyager",
      category: "browser_agents",
      scope: "agent",
      about: [
        "WebVoyager is a benchmark for browser agents operating on live websites. It focuses on practical tasks such as navigation, search, form completion, and multi-step workflows across a broad website mix.",
        "Builders use WebVoyager to compare end-to-end browsing systems under a shared task suite. It is one of the most commonly cited public references for web agent capability in production-like browsing flows.",
        "Scores here generally reflect full system setup, not only a base model. Prompting strategy, tool policies, retries, and browser execution stack can all materially change outcomes.",
      ],
      methodology: [
        "Evaluation typically reports pass rates over benchmark tasks and may differ by run policy (for example pass@1 vs multi-attempt settings).",
        "Reported rows can mix independent studies and team-published updates; always check source methodology before direct comparisons.",
        "Last tracked update for this page uses the timestamp shown on this page, and rows can be revised as better-source reports are added.",
      ],
      importantNotes: [
        "Rows may use different evaluation settings and are not always strict apples-to-apples.",
      ],
      links: [
        { label: "WebVoyager paper", url: "https://arxiv.org/abs/2401.13919" },
        { label: "WebVoyager repository", url: "https://github.com/MinorJerry/WebVoyager" },
      ],
      relatedBenchmarks: ["webarena", "browsecomp", "osworld"],
      featuredOnHome: true,
      lastUpdated: "2026-03-22",
    },
    results: benchmarkResults.webvoyager
},
  {
    meta: {
      slug: "browsecomp",
      name: "BrowseComp",
      category: "research_search",
      scope: "mixed",
      about: [
        "BrowseComp targets difficult browse-and-synthesize research questions that are easy to verify but hard to answer without strong search and reasoning strategy.",
        "The benchmark is valuable for teams building deep research systems where retrieval strategy, persistence, and answer synthesis quality matter.",
        "Results may include model-centric and system-augmented submissions, so score ownership should be interpreted carefully.",
      ],
      methodology: [
        "Scoring emphasizes verifiable final answers over intermediate browsing traces.",
        "Rows can combine model-only evaluations and agent-with-tools submissions depending on source.",
        "For procurement decisions, review each source for retrieval tooling and attempt policy.",
      ],
      importantNotes: [
        "Mixed-scope benchmark: model-only and tool-augmented rows are not inherently directly comparable.",
      ],
      links: [{ label: "BrowseComp overview", url: "https://openai.com/index/browsecomp/" }],
      relatedBenchmarks: ["webvoyager", "webarena"],
      featuredOnHome: true,
      lastUpdated: "2026-03-22",
    },
    results: benchmarkResults.browsecomp
  },
  {
    meta: {
      slug: "webarena",
      name: "WebArena",
      category: "browser_agents",
      scope: "agent",
      about: [
        "WebArena evaluates browser agents in controlled, self-hosted web environments that represent realistic application patterns such as e-commerce, forums, and developer workflows.",
        "It is commonly used when teams want more reproducible benchmarking conditions than fully live-web tasks.",
        "Scores still represent configured end-to-end systems, including model choice, planning approach, and browser interaction stack.",
      ],
      methodology: [
        "The benchmark uses programmatic evaluation with task-level success criteria.",
        "Rows often come from a shared public tracker and can reflect different submission dates and system revisions.",
        "Use notes and source links to verify attempt policy and setup assumptions.",
      ],
      importantNotes: [
        "Even with controlled environments, ranking rows can differ by setup and submission policy.",
      ],
      links: [
        { label: "WebArena paper", url: "https://arxiv.org/abs/2307.13854" },
        { label: "WebArena repository", url: "https://github.com/web-arena-x/webarena" },
      ],
      relatedBenchmarks: ["webvoyager", "browsecomp", "osworld"],
      featuredOnHome: true,
      lastUpdated: "2026-03-22",
    },
    results: benchmarkResults.webarena
  },
  {
    meta: {
      slug: "swe-bench-verified",
      name: "SWE-bench Verified",
      category: "coding",
      scope: "model",
      about: [
        "SWE-bench Verified evaluates software engineering performance on real GitHub issues with stricter quality controls than the broader SWE-bench set.",
        "This benchmark helps teams estimate bug-fixing and code-edit reliability in realistic repository contexts.",
        "Compared with browsing benchmarks, this page leans more model-centric, though harness details and agent wrappers can still influence observed scores.",
      ],
      methodology: [
        "Results typically report issue-resolution success rates on the verified subset.",
        "Leaderboard sources can differ by harness, timeout policy, or tool permissions.",
        "Treat rows as model-focused directional signals unless source methodology is fully matched.",
      ],
      importantNotes: [
        "Model-focused benchmark, but harness and evaluation policy still affect outcomes.",
      ],
      links: [
        { label: "SWE-bench leaderboard", url: "https://www.swebench.com/" },
        {
          label: "SWE-bench repository",
          url: "https://github.com/princeton-nlp/SWE-bench",
        },
      ],
      relatedBenchmarks: ["webvoyager", "browsecomp"],
      featuredOnHome: true,
      lastUpdated: "2026-03-22",
    },
    results: benchmarkResults["swe-bench-verified"]
  },
  {
    meta: {
      slug: "osworld",
      name: "OSWorld",
      category: "computer_use",
      scope: "agent",
      about: [
        "OSWorld evaluates computer-use agents across 369 real desktop tasks spanning Ubuntu, Windows, and macOS — covering web apps, desktop software, file I/O, and multi-application workflows.",
        "It is the most widely adopted computer-use benchmark for comparing end-to-end system performance in realistic GUI environments with execution-based evaluation.",
        "Rankings reflect full agent stacks. Model choice, GUI grounding approach, planning strategy, and error-recovery design all contribute meaningfully to observed scores.",
      ],
      methodology: [
        "Evaluation is execution-based: each task has a deterministic verifier that checks whether the final computer state matches the expected outcome.",
        "OSWorld-Verified is a stricter variant where the research team independently runs agent code; self-reported rows on the main leaderboard are unaudited.",
        "The human baseline is ~72.4%, making it a useful calibration point when reading scores.",
      ],
      importantNotes: [
        "Self-reported and independently verified rows coexist — check the source before comparing directly.",
      ],
      links: [
        { label: "OSWorld paper", url: "https://arxiv.org/abs/2404.07972" },
        { label: "OSWorld-Verified announcement", url: "https://xlang.ai/blog/osworld-verified" },
      ],
      relatedBenchmarks: ["webvoyager", "webarena"],
      featuredOnHome: true,
      lastUpdated: "2026-04-16",
    },
    results: benchmarkResults["osworld"],
  },
  {
    meta: {
      slug: "gaia",
      name: "GAIA",
      category: "model_eval",
      scope: "agent",
      about: [
        "GAIA (General AI Assistants) evaluates agents on over 450 real-world questions with unambiguous, verifiable answers — requiring multi-step reasoning, tool use, web search, and file handling across three difficulty levels.",
        "It is the most competitive public general-agent benchmark, with top systems now exceeding 90% and the official leaderboard hosted on Hugging Face.",
        "Because top systems are large multi-model ensembles rather than a single model, scores reflect system design and orchestration quality as much as any individual model capability.",
      ],
      methodology: [
        "Scoring uses quasi-exact match against ground truth answers — no partial credit, no LLM judge.",
        "Submissions are evaluated on the private test set; the official leaderboard on Hugging Face is the canonical source.",
        "Level 1 tasks require minimal tooling; Level 3 tasks demand complex multi-step agent behavior. Average scores blend all three levels.",
      ],
      importantNotes: [
        "Top entries are multi-model ensembles — scores cannot be attributed to any single model.",
      ],
      links: [
        { label: "GAIA paper", url: "https://arxiv.org/abs/2311.12983" },
      ],
      relatedBenchmarks: ["browsecomp", "webarena"],
      featuredOnHome: true,
      lastUpdated: "2026-04-16",
    },
    results: benchmarkResults["gaia"],
  },
  {
    meta: {
      slug: "clawbench",
      name: "ClawBench",
      category: "browser_agents",
      scope: "agent",
      about: [
        "ClawBench evaluates AI agents on 153 everyday tasks that real people need to complete regularly — booking appointments, completing purchases, submitting job applications, and filling in forms — across 144 live production websites in 15 categories.",
        "Unlike most browser benchmarks that use offline sandboxes with static pages, ClawBench runs entirely on live websites, preserving the full complexity and dynamic nature of real-world web interaction. This makes it a particularly demanding and realistic signal for production browser agent capability.",
        "The best of 7 frontier models evaluated at publication time (Claude Sonnet 4.6) completed only 33% of tasks, making it one of the most challenging publicly available browser agent benchmarks today.",
      ],
      methodology: [
        "Tasks require agents to obtain information from user-provided documents, navigate multi-step workflows, and complete write-heavy operations like filling in detailed forms — capabilities explicitly beyond existing benchmarks.",
        "Evaluation captures 5 layers of behavioral data: session replay, screenshots, HTTP traffic, agent reasoning traces, and browser actions. An agentic evaluator scores results with step-level traceable diagnostics.",
        "Human ground-truth is collected for every task. The agentic evaluator provides step-level diagnostics rather than a single pass/fail, making failure analysis more actionable.",
      ],
      importantNotes: [
        "Very new benchmark (April 2026) — published results cover only 7 frontier models. Expect the leaderboard to expand rapidly.",
      ],
      links: [
        { label: "ClawBench paper", url: "https://arxiv.org/abs/2604.08523" },
        { label: "Project page", url: "https://claw-bench.com" },
        { label: "ClawBench repository", url: "https://github.com/reacher-z/ClawBench" },
      ],
      relatedBenchmarks: ["webvoyager", "webarena", "browsecomp"],
      featuredOnHome: false,
      lastUpdated: "2026-04-16",
    },
    results: benchmarkResults["clawbench"],
  },
  {
    meta: {
      slug: "online-mind2web",
      name: "Online-Mind2Web",
      category: "browser_agents",
      scope: "agent",
      about: [
        "Online-Mind2Web is a live browser agent benchmark of 300 diverse, realistic tasks across 136 popular websites — spanning shopping, finance, travel, government, and more. Unlike static offline benchmarks, agents interact with real, dynamic pages as they exist at evaluation time.",
        "Published at COLM 2025 by OSU, it was introduced specifically to expose over-optimism in previously reported web agent results. The paper's central finding was that agents scoring highly on static benchmarks performed dramatically worse on live websites — hence the title 'An Illusion of Progress?'",
        "It has since become the most widely cited live browser benchmark, with commercial agents (Browser Use, TinyFish, Yutori Navigator, UI-TARS-2) using it as the primary competitive signal for browser agent capability.",
      ],
      methodology: [
        "Tasks span three difficulty levels — easy (83), medium (143), and hard (74) — stratified by reference human step count. Performance drops sharply between levels: easy→medium sees ~30% drop, medium→hard a further ~15%.",
        "Two evaluation methods coexist: human evaluation (gold standard, slower) and WebJudge (LLM-as-a-Judge, ~85% agreement with human judgment). Many teams report both — the Notes column specifies which applies to each row.",
        "Because teams use different judges (WebJudge, screenshot-based, or custom agentic judges), scores are not always directly comparable across organizations. Browser Use's 97% uses a custom agentic judge built on the Claude Agent SDK, which is not the same as WebJudge.",
      ],
      importantNotes: [
        "Judge methodology varies significantly across submissions — human eval, WebJudge, and custom agentic judges produce different scores for the same agent. Always check the Notes column before comparing rows.",
      ],
      links: [
        { label: "Online-Mind2Web paper (COLM 2025)", url: "https://arxiv.org/abs/2504.01382" },
        { label: "Online-Mind2Web repository", url: "https://github.com/browser-use/online-mind2web" },
      ],
      relatedBenchmarks: ["webvoyager", "webarena", "browsecomp"],
      featuredOnHome: false,
      lastUpdated: "2026-04-16",
    },
    results: benchmarkResults["mind2web"],
  },
  {
    meta: {
      slug: "tau-bench",
      name: "τ-bench",
      category: "model_eval",
      scope: "model",
      about: [
        "τ-bench (TAU-bench) evaluates AI agents in realistic enterprise tool-use scenarios across retail and airline domains — testing multi-turn conversation, policy adherence, database interactions, and rule-following consistency over many trials.",
        "It is one of the most widely adopted agentic benchmarks by AI labs, cited in model cards from Anthropic, OpenAI, and Google. Unlike static QA benchmarks, τ-bench measures whether an agent behaves reliably and correctly across multiple independent runs using the pass^k metric.",
        "Because evaluation setup (prompt, tool schema, trial count) varies by submitter, self-reported scores across organizations are not always directly comparable — the Notes column captures key setup differences.",
      ],
      methodology: [
        "The pass^k metric measures the probability an agent succeeds on all k independent trials of the same task — penalizing inconsistency even when average accuracy is high.",
        "Evaluation uses a simulated user (another LLM) and checks final database state against the annotated goal state — no LLM judge for pass/fail decisions.",
        "The official leaderboard is hosted at taubench.com and maintained by Sierra Research. Some rows are self-reported in model cards; verify source before comparing across organizations.",
      ],
      importantNotes: [
        "Score comparisons across organizations require caution — prompt setup, tool schema, and trial count differ between submissions.",
      ],
      links: [
        { label: "τ-bench paper", url: "https://arxiv.org/abs/2406.12045" },
        { label: "Sierra Research blog", url: "https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents" },
      ],
      relatedBenchmarks: ["swe-bench-verified", "gaia"],
      featuredOnHome: false,
      lastUpdated: "2026-04-16",
    },
    results: benchmarkResults["tau-bench"],
  },
  {
    meta: {
      slug: "agentbench",
      name: "AgentBench",
      category: "model_eval",
      scope: "model",
      about: [
        "AgentBench evaluates LLMs as agents across 8 distinct interactive environments — including OS interaction, database querying, knowledge graph traversal, digital card games, lateral thinking puzzles, house-holding tasks, web browsing, and web shopping.",
        "Published at ICLR 2024 and developed by Tsinghua University, AgentBench was one of the first benchmarks to systematically expose the performance gap between top commercial LLMs and open-source competitors on real agentic tasks requiring multi-turn reasoning and decision-making.",
        "The FC (Function Calling) variant of the leaderboard focuses specifically on structured tool use and function-calling ability — the most relevant dimension for teams building tool-augmented pipelines.",
      ],
      methodology: [
        "Each environment has its own task set and automated evaluator. Scores reflect an overall average across environments unless a specific environment subset is specified.",
        "The FC leaderboard tracks function-calling performance specifically — models are evaluated on structured tool invocation accuracy rather than free-form action generation.",
        "Results are community-submitted via the public Google Sheets tracker; rows are not independently verified by the authors unless explicitly noted.",
      ],
      importantNotes: [
        "Community-submitted leaderboard — rows are self-reported and not independently verified. Check source links before drawing strong conclusions.",
      ],
      links: [
        { label: "AgentBench paper (ICLR 2024)", url: "https://arxiv.org/abs/2308.03688" },
        { label: "AgentBench repository", url: "https://github.com/THUDM/AgentBench" },
      ],
      relatedBenchmarks: ["tau-bench", "gaia", "swe-bench-verified"],
      featuredOnHome: false,
      lastUpdated: "2026-04-16",
    },
    results: benchmarkResults["agent-bench"],
  }
];

export const benchmarkPageBySlug: Record<string, BenchmarkPageData> = Object.fromEntries(
  benchmarkPages.map((page) => [page.meta.slug, page])
);

export function getAllBenchmarkPages(): BenchmarkPageData[] {
  return benchmarkPages;
}

export function getBenchmarkPage(slug: string): BenchmarkPageData | undefined {
  return benchmarkPageBySlug[slug];
}

export function getFeaturedBenchmarkPages(): BenchmarkPageData[] {
  return benchmarkPages.filter((page) => page.meta.featuredOnHome);
}

export function getTopResult(rows: BenchmarkResultRow[]): BenchmarkResultRow | null {
  if (rows.length === 0) return null;
  return [...rows].sort((a, b) => a.rank - b.rank)[0];
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getScopeOwnershipCopy(scope: BenchmarkScope): string {
  if (scope === "model") {
    return "This page is model-focused, so rankings mostly reflect model capability under the reported harness.";
  }
  return "This ranking reflects submitted system setups (model plus tools and policy), not just a base model.";
}

export function buildBenchmarkFaqFacts(page: BenchmarkPageData): BenchmarkFaqFacts {
  const top = getTopResult(page.results);
  const notes = page.results.map((row) => row.notesShort.toLowerCase()).join(" ");
  const metaNotes = page.meta.importantNotes.join(" ").toLowerCase();

  return {
    bestCurrentLabel: top?.systemName ?? "No tracked system",
    bestCurrentScore: top?.scoreDisplay ?? "N/A",
    scope: page.meta.scope,
    lastUpdated: page.meta.lastUpdated,
    hasVerificationCaveat:
      notes.includes("self-report") || notes.includes("verified") || metaNotes.includes("verified"),
    hasComparabilityCaveat: page.meta.scope === "mixed" || metaNotes.includes("apples-to-apples"),
  };
}

export function generateBenchmarkFaq(
  meta: BenchmarkPageMeta,
  facts: BenchmarkFaqFacts
): BenchmarkFaqItem[] {
  const scopeTarget =
    facts.scope === "model" ? "model currently leading" : "system/agent setup currently leading";

  const items: BenchmarkFaqItem[] = [
    {
      q: `Which system is currently best on ${meta.name}?`,
      a: `${facts.bestCurrentLabel} is the ${scopeTarget} with a tracked score of ${facts.bestCurrentScore}. ${getScopeOwnershipCopy(
        facts.scope
      )} Based on our latest tracked results, last updated ${formatDate(facts.lastUpdated)}.`,
    },
    {
      q: `What should I read into a ${meta.name} score?`,
      a: `${meta.name} scores are most useful for within-benchmark ranking. Read the Notes column to understand setup context, and use the methodology section before making procurement or architecture decisions.`,
    },
  ];

  if (facts.hasVerificationCaveat) {
    items.push({
      q: "Are these independently verified?",
      a: "Not always. Some rows are independently benchmarked and some are team-reported. Use each source link and notes field to verify evidence level before drawing strong conclusions.",
    });
  }

  if (facts.scope === "mixed" || facts.hasComparabilityCaveat) {
    items.push({
      q: "Can I compare model-only and agent-with-tools rows directly?",
      a: "Not directly. Mixed pages can combine model-centric and full-system submissions. Treat those comparisons as directional unless evaluation setup and tool policy are explicitly aligned.",
    });
  }

  return items;
}

export const homeFaqs: BenchmarkFaqItem[] = [
  {
    q: "How should I choose a benchmark for my use case?",
    a: "Start from deployment context: browser workflow automation usually maps to WebVoyager or WebArena, desktop automation maps to OSWorld, deep research maps to BrowseComp, and code-fixing reliability maps to SWE-bench Verified.",
  },
  {
    q: "Are scores comparable across different benchmarks?",
    a: "No. Benchmark objectives, datasets, evaluators, and pass criteria differ. Use each benchmark page for within-benchmark comparison, then validate directly on your own workload.",
  },
  {
    q: "Do leaderboard scores belong to models or systems?",
    a: "Both exist, depending on page scope. Model pages emphasize base-model capability, while agent pages represent full systems (model + tooling + policy). Mixed pages include both and require extra caution.",
  },
];
