export const site = {
  name: 'Ryan Wessel',
  role: 'Engineering Director at Dataminr',
  linkedin: 'https://www.linkedin.com/in/ryanjwessel/',
  studio: 'https://wesselstudios.com',
  substack: 'https://runtimeleadership.substack.com',
  title: 'Ryan Wessel | Engineering Leader, Builder & Writer',
  description:
    'Engineering leader, builder, and writer. I lead engineering at Dataminr, build through Wessel Studios, and write Runtime Leadership.',
};

export const experience = [
  {
    company: 'Dataminr',
    period: 'May 2020 – Present',
    summary: 'Real-time intelligence, mobile products, integrations, and alert delivery.',
    roles: [
      { title: 'Engineering Director', period: 'Oct 2026 – Present', description: 'Leading engineering across integrations and alert delivery.' },
      { title: 'Senior Engineering Manager, Integrations', period: 'Aug 2025 – Oct 2026', description: 'Led platform strategy and execution across mobile, messaging, and enterprise delivery channels.' },
      { title: 'Senior Engineering Manager, Mobile', period: 'Jan 2024 – Aug 2025', description: 'Led iOS and Android engineering, including the consolidation of separate React Native modules into a unified application.' },
      { title: 'Software Engineer II → Senior Software Engineer / Tech Lead → Engineering Manager', period: 'May 2020 – Jan 2024', description: 'Grew from hands-on mobile engineering into technical and people leadership, working on delivery, security, and internationalization across four applications.' },
    ],
  },
  {
    company: 'PebblePost',
    period: 'Oct 2018 – May 2020',
    summary: 'Enterprise software connecting digital campaigns with physical mail.',
    roles: [
      { title: 'Software Engineer', period: 'Oct 2018 – May 2020', description: 'Worked with fellow engineers and a UX designer to rebuild enterprise applications in React and TypeScript, develop creative tools, and deliver reporting dashboards.' },
    ],
  },
  {
    company: 'Synapse Group',
    period: 'Sep 2015 – Jun 2018',
    summary: 'E-commerce experiences and the systems behind them.',
    roles: [
      { title: 'Senior Web Developer', period: 'Sep 2015 – Jun 2018', description: 'Led a migration to React and Redux and automated internal workflows to support faster iteration.' },
    ],
  },
];

export const work = [
  {
    slug: 'intelligence-delivery',
    category: 'Platform strategy · Dataminr',
    title: 'Getting intelligence where it matters.',
    summary: 'Connecting real-time event intelligence to the mobile, messaging, and enterprise workflows people rely on.',
    outcome: 'A platform approach to delivery across channels.',
    role: 'Engineering leadership · Integrations & alert delivery',
    sections: [
      { label: 'The context', title: 'The event is only the beginning.', body: 'Real-time intelligence becomes useful when it reaches the people who need it. At Dataminr, delivery spans mobile applications, messaging, and enterprise integrations, with reliability and latency remaining important as global events drive changes in volume.' },
      { label: 'My responsibility', title: 'Connect the platform to the priorities.', body: 'My work has connected platform strategy, technical roadmaps, and team execution across those delivery channels. That means balancing the needs of individual integrations with the long-term health and reuse of the platform beneath them.' },
      { label: 'The approach', title: 'Build patterns that carry forward.', body: 'We introduced standardized integration patterns to reduce bespoke channel work. Alongside scaling delivery infrastructure, the focus was on making shared capabilities more reusable and aligning platform improvements with business priorities.' },
      { label: 'The result', title: 'More than an individual integration.', body: 'The work supported delivery at global event scale and reduced bespoke implementation work across channels. It illustrates the connection between engineering leadership and platform design: helping teams meet immediate needs while building a foundation that can support what comes next.' },
    ],
  },
  {
    slug: 'mobile-architecture',
    category: 'Architecture & team leadership · Dataminr',
    title: 'One application. A clearer foundation.',
    summary: 'Consolidating separate React Native modules into a unified application, rather than bridging experiences through native code.',
    outcome: 'A unified React Native application architecture.',
    role: 'Engineering leadership · Mobile',
    sections: [
      { label: 'The context', title: 'Separate modules. Connected experiences.', body: 'The mobile architecture used separate React Native modules, with native code bridging the experiences between them. That structure made the application more complex to work on as a whole.' },
      { label: 'My responsibility', title: 'Lead the simplification.', body: 'While leading mobile engineering at Dataminr, I drove a multi-year architecture simplification effort across iOS and Android. The work sat alongside ongoing product delivery in enterprise and defense use cases.' },
      { label: 'The architectural change', title: 'Bring the experience together.', body: 'The team consolidated those separate modules into a unified React Native application. Instead of relying on native code to connect separate React Native experiences, the application could be understood and developed as a more cohesive whole.' },
      { label: 'The result', title: 'A more cohesive application.', body: 'The result was a unified application in place of separate modules joined through native code. It gave the mobile work a clearer foundation while the team continued delivering product capabilities.' },
    ],
  },
];

export const articles = [
  {
    path: 'Lead The Work',
    title: 'Achieving Architectural Change Under Real Constraints',
    description: 'Make meaningful technical change without assuming you can pause delivery or replace everything.',
    url: `${site.substack}/p/achieving-architectural-change-under`,
  },
  {
    path: 'Lead The Team',
    title: 'The Engineering Manager’s Real Job: Maintaining the Full Picture',
    description: 'Keep a current view of people, work, risks, and priorities before important context drifts.',
    url: `${site.substack}/p/the-engineering-managers-real-job`,
  },
  {
    path: 'Lead The Team',
    title: 'A Practical System for Turning Team Ideas Into Shared Priorities and Ownership',
    description: 'Turn scattered input into goals, owners, and an operating rhythm the team can follow.',
    url: `${site.substack}/p/a-practical-system-for-turning-team`,
  },
];
