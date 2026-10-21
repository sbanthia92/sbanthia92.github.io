// Edit this file to change name, nav, links and interests across the site.
export const site = {
  name: 'Shubham Banthia',
  tagline: 'Staff software engineer',
  description: 'Staff software engineer with 10+ years in distributed systems and cloud infrastructure, now building AI agents and MCP servers.',
  email: 'sbanthia92@gmail.com',
  social: [
    { label: 'GitHub', url: 'https://github.com/sbanthia92' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shubhambanthia' },
    // { label: 'X', url: '' },
  ],
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Writing', href: '/writing' },
    { label: 'About', href: '/about' },
  ],
};

// Add hobbies here. Each item: title + short line. Empty list shows a placeholder.
export const interests: { title: string; note: string }[] = [
  // { title: 'Running', note: 'Why you like it.' },
];

export const education = [
  { degree: 'MS, Computer Science', school: 'Santa Clara University', year: '2016' },
  { degree: 'BE, Electronics Engineering', school: 'University of Mumbai', year: '2014' },
];

export const skills = [
  { group: 'Languages', items: 'Java, Python, TypeScript, Go, Ruby, C#, SQL' },
  { group: 'Cloud', items: 'AWS (Security Guardian certified), GCP, Terraform, Kubernetes, Docker' },
  { group: 'AI', items: 'Claude API and tool use, MCP servers, RAG, text-to-SQL, Ollama, agentic systems' },
];

// Headline numbers shown on the home page. All from the resume.
export const highlights = [
  { stat: '100+', label: 'engineers adopted the LLM-powered SSH agent I led as their standard tool', where: 'Oracle' },
  { stat: '17.4s → 0.85s', label: 'on a 100K-device request, across 7 high-volume infrastructure APIs', where: 'Oracle' },
  { stat: '120 → 25', label: 'high-severity tickets per week after a DevSecOps overhaul', where: 'Amazon' },
  { stat: '45 → 10 days', label: 'deployment cycles, alongside a 50% faster security review', where: 'Amazon' },
  { stat: '$2.5M / yr', label: 'saved re-architecting AWS phone PIN verification in-house', where: 'Amazon' },
  { stat: '−67%', label: 'planogram finalization time on a first-of-its-kind serverless platform', where: 'Amazon' },
];
