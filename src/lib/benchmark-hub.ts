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
