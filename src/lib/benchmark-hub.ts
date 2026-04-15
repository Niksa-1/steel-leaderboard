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
    results: [
    {
      rank: 1,
      systemName: "Alumium",
      organization: "Alumium",
      scoreDisplay: "98.6%",
      scoreValue: 98.6,
      sourceUrl: "https://alumnium.ai/",
      notesShort: "Accessibility-based tree parsing with integrated visual reasoning.",
      isNew: true,
    },
    {
      rank: 2,
      systemName: "Surfer 2",
      organization: "H Company",
      scoreDisplay: "97.1%",
      scoreValue: 97.1,
      sourceUrl: "https://hcompany.ai/surfer-2",
      notesShort: "System-level orchestration with submitter-defined setup details.",
      isNew: true,
    },
    {
      rank: 3,
      systemName: "Magnitude",
      organization: "Magnitude",
      scoreDisplay: "93.9%",
      scoreValue: 93.9,
      sourceUrl: "https://magnitude.run/webvoyager",
      notesShort: "Open-source architecture utilizing a modular agentic stack.",
    },
    {
      rank: 4,
      systemName: "AIME Browser-Use",
      organization: "Aime",
      scoreDisplay: "92.34%",
      scoreValue: 92.34,
      sourceUrl: "https://aime-browser-use.github.io/",
      notesShort: "Custom orchestration layer with specialized browser tooling.",
      isNew: true,
    },
    {
      rank: 5,
      systemName: "Surfer-H + Holo1",
      organization: "H Company",
      scoreDisplay: "92.2%",
      scoreValue: 92.2,
      sourceUrl: "https://arxiv.org/pdf/2506.02865",
      notesShort: "Multi-modal action kernels integrated via H-Company research.",
      isNew: true,
    },
    {
      rank: 6,
      systemName: "Browserable",
      organization: "Browserable",
      scoreDisplay: "90.4%",
      scoreValue: 90.4,
      sourceUrl: "https://www.browserable.ai/blog/web-voyager-benchmark",
      notesShort: "Fine-tuned browser control models within a commercial framework.",
      isNew: true,
    },
    {
      rank: 7,
      systemName: "Browser Use",
      organization: "Browser Use",
      scoreDisplay: "89.1%",
      scoreValue: 89.1,
      sourceUrl: "https://browser-use.com/posts/sota-technical-report",
      notesShort: "Multi-step orchestration framework for open-source automation.",
    },
    {
      rank: 8,
      systemName: "Operator",
      organization: "OpenAI",
      scoreDisplay: "87%",
      scoreValue: 87,
      sourceUrl: "https://openai.com/index/introducing-operator/",
      notesShort: "Native browser integration using proprietary vision-control models.",
    },
    {
      rank: 9,
      systemName: "Skyvern 2.0",
      organization: "Skyvern",
      scoreDisplay: "85.85%",
      scoreValue: 85.85,
      sourceUrl: "https://blog.skyvern.com/skyvern-2-0-state-of-the-art-web-navigation-with-85-8-on-webvoyager-eval/",
      notesShort: "DOM-level reasoning coupled with real-time error-correction.",
    },
    {
      rank: 10,
      systemName: "Project Mariner",
      organization: "Google",
      scoreDisplay: "83.5%",
      scoreValue: 83.5,
      sourceUrl: "https://deepmind.google/technologies/project-mariner/",
      notesShort: "Gemini-powered reasoning with precise visual grounding.",
    },
    {
      rank: 11,
      systemName: "Notte",
      organization: "Notte",
      scoreDisplay: "73.1%",
      scoreValue: 73.1,
      sourceUrl: "https://github.com/nottelabs/open-operator-evals",
      notesShort: "Standardized operator stack for open-source performance evaluation.",
      isNew: true,
    },
    {
      rank: 12,
      systemName: "Agent-E",
      organization: "Emergence AI",
      scoreDisplay: "73.1%",
      scoreValue: 73.1,
      sourceUrl: "https://www.emergence.ai/blog/agent-e-sota",
      notesShort: "Hierarchical planning modules within a multi-agent framework.",
    },
    {
      rank: 13,
      systemName: "WebSight",
      organization: "Academic Research",
      scoreDisplay: "68%",
      scoreValue: 68,
      sourceUrl: "https://arxiv.org/abs/2508.16987",
      notesShort: "Navigation system prioritizing visual-only perceptual inputs.",
    },
    {
      rank: 14,
      systemName: "Runner H 0.1",
      organization: "H Company",
      scoreDisplay: "67%",
      scoreValue: 67,
      sourceUrl: "https://www.hcompany.ai/blog/a-research-update",
      notesShort: "Foundational agent architecture for general web interaction.",
    },
    {
      rank: 15,
      systemName: "WebVoyager",
      organization: "Academic Research",
      scoreDisplay: "59.1%",
      scoreValue: 59.1,
      sourceUrl: "https://arxiv.org/abs/2401.13919",
      notesShort: "Baseline implementation using standard multimodal LLM control.",
    },
    {
      rank: 16,
      systemName: "WILBUR",
      organization: "Academic Research",
      scoreDisplay: "53%",
      scoreValue: 53,
      sourceUrl: "https://arxiv.org/abs/2404.05902",
      notesShort: "Research implementation using black-box optimization techniques.",
    },
  ]
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
    results: [
      {
        rank: 1,
        systemName: "Kimi K2 Thinking",
        organization: "Moonshot AI",
        scoreDisplay: "60.2%",
        scoreValue: 60.2,
        sourceUrl: "https://openai.com/index/browsecomp/",
        notesShort: "Score from public leaderboard context; row type may be model-centric.",
      },
      {
        rank: 2,
        systemName: "Frontier baseline A",
        organization: "Public report",
        scoreDisplay: "51.0%",
        scoreValue: 51.0,
        sourceUrl: "https://openai.com/index/browsecomp/",
        notesShort: "Placeholder ranking row for template testing and FAQ generation.",
      },
      {
        rank: 3,
        systemName: "Tool-augmented setup B",
        organization: "Community",
        scoreDisplay: "47.4%",
        scoreValue: 47.4,
        sourceUrl: "https://openai.com/index/browsecomp/",
        notesShort: "Illustrative mixed setup row; replace with verified source later.",
      },
    ],
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
    results: [
      {
        rank: 1,
        systemName: "DeepSeek v3.2",
        organization: "DeepSeek",
        scoreDisplay: "74.3%",
        scoreValue: 74.3,
        sourceUrl:
          "https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ",
        notesShort:
          "Public benchmark tracker row; compare against same policy rows where possible.",
      },
      {
        rank: 2,
        systemName: "OpAgent",
        organization: "CodeFuse AI",
        scoreDisplay: "71.6%",
        scoreValue: 71.6,
        sourceUrl:
          "https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ",
        notesShort: "Programmatic evaluation in WebArena environment; setup-specific result.",
      },
      {
        rank: 3,
        systemName: "ColorBrowserAgent",
        organization: "ColorBrowser",
        scoreDisplay: "71.2%",
        scoreValue: 71.2,
        sourceUrl:
          "https://docs.google.com/spreadsheets/d/1M801lEpBbKSNwP-vDBkC_pF7LdyGU1f_ufZb_NWNBZQ",
        notesShort: "Open-source submission on shared tracker; verify date and run assumptions.",
      },
    ],
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
    results: [
      {
        rank: 1,
        systemName: "Claude 3.5 Sonnet (agentic setup)",
        organization: "Anthropic",
        scoreDisplay: "70.3%",
        scoreValue: 70.3,
        sourceUrl: "https://www.swebench.com/",
        notesShort: "Verified subset result; tooling policy can impact reproducibility.",
      },
      {
        rank: 2,
        systemName: "GPT-4.1",
        organization: "OpenAI",
        scoreDisplay: "54.6%",
        scoreValue: 54.6,
        sourceUrl: "https://www.swebench.com/",
        notesShort: "Model-centric row from public leaderboard context.",
      },
      {
        rank: 3,
        systemName: "DeepSeek R1",
        organization: "DeepSeek",
        scoreDisplay: "49.2%",
        scoreValue: 49.2,
        sourceUrl: "https://www.swebench.com/",
        notesShort: "Placeholder-safe entry to validate table and schema behavior.",
      },
    ],
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
