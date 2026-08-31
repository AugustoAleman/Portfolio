/**
 * ENGLISH CONTENT — single source of truth for the whole site.
 *
 * Sourcing rule: every factual claim here traces back to the updated CV
 * ("CV AI Leader (EN).docx"). Nothing is inflated, no metric is invented.
 * Items awaiting real data carry `null` and render an intentional fallback.
 * See CONTENT_NEEDED.md for the open items.
 */

const en = {
  nav: {
    work: 'Work',
    leadership: 'Leadership',
    enablement: 'Enablement',
    journey: 'Journey',
    recognition: 'Recognition',
    contact: 'Contact',
    resume: 'Resume',
  },

  hero: {
    status: 'AI Manager at Grupo Salinas, Mexico City',
    name_line1: 'Octavio',
    name_line2: 'Aleman',
    role: 'AI Manager',
    tagline:
      'I lead enterprise AI adoption and delivery: identifying the use cases worth building, coordinating the teams that build them, and getting the result into how people actually work.',
    cta_primary: 'See the work',
    cta_secondary: 'Get in touch',
    photo: '/portrait.jpg',
    photo_alt: 'Octavio Aleman',
    marks: [
      { k: 'Focus', v: 'Enterprise AI adoption' },
      { k: 'Background', v: 'Engineering, data and AI' },
      { k: 'Across', v: 'Mexico and the United States' },
    ],
    chips: ['Generative AI', 'AI delivery', 'Executive enablement'],
    scroll: 'Scroll',
  },

  highlights: {
    section_index: '01',
    section_label: 'Career Highlights',
    heading: 'Four things worth knowing first',
    items: [
      {
        k: '01',
        headline: 'From Consultant to AI Manager in six months',
        text:
          'Joined Grupo Salinas as an AI Consultant in October 2024 and was promoted to AI Manager in April 2025.',
        meta: 'Grupo Salinas · Mexico City',
      },
      {
        k: '02',
        headline: 'Generative AI adoption programs for directors and business teams',
        text:
          'Designed and delivered, built around real analysis, research, documentation and decision-making work.',
        meta: 'Executive enablement · Claude',
      },
      {
        k: '03',
        headline: 'AI initiatives across financial services and biomedical analysis',
        text:
          'Microcredit origination and underwriting on one side, predictive and generative models supporting clinical analysis on the other.',
        meta: 'Two domains · Enterprise scale',
      },
      {
        k: '04',
        headline: 'Projects coordinated across Mexico and the United States',
        text:
          'International AI and software delivery with teams and clients in both countries, including stakeholders in San Diego, California.',
        meta: 'Mexico City · San Diego · Dallas',
      },
    ],
  },

  work: {
    section_index: '02',
    section_label: 'Selected Work',
    heading: 'What I have actually delivered',
    intro:
      'The three initiatives that best describe the work I do now, ordered by how much of it was leadership rather than build. Open one for the detail.',
    expand: 'Read the detail',
    collapse: 'Close',
    field_labels: {
      context: 'Context',
      problem: 'Problem',
      role: 'My role',
      solution: 'What I did',
      outcome: 'Outcome',
      tech: 'Technology',
    },
    items: [
      {
        id: 'adoption',
        index: '01',
        title: 'Generative AI adoption for directors and business teams',
        domain: 'AI adoption · Executive enablement',
        summary:
          'Adoption programs that put tools like Claude inside the work directors and managers already do.',
        image: null,
        context:
          'As AI Manager I work with directors and business teams who are expected to use generative AI in their day-to-day, not in a pilot.',
        problem:
          'Access to a tool is not adoption. People need to see the work they are already responsible for done a different way, with their own material.',
        role: 'I design the programs and run the sessions.',
        solution:
          'Built adoption programs for directors and managers around four kinds of work they do constantly: analysis, research, documentation and decision-making. Tools like Claude are introduced inside those workflows rather than as a separate subject.',
        outcome:
          'The programs run on an ongoing basis for directors and managers across the business.',
        tech: ['Claude', 'Generative AI', 'Program design'],
      },
      {
        id: 'microcredit',
        index: '02',
        title: 'AI for microcredit origination and underwriting',
        domain: 'Financial services · AI initiatives',
        summary:
          'Leading AI initiatives across the full credit chain: identity, risk, decisioning, offer and collections.',
        image: null,
        context:
          'Grupo Salinas operates in financial services, where a microcredit decision is not one call but a chain of them.',
        problem:
          'Origination and underwriting span identity, risk, decisioning, offer and collections. Introducing AI into any one stage changes what the next stage receives, so the stages cannot be treated as separate problems.',
        role: 'I lead these initiatives as AI Manager.',
        solution:
          'Led AI initiatives for microcredit origination and underwriting covering identity, risk, decisioning, offer and collections, coordinating the teams working on each part.',
        outcome: null,
        tech: ['Generative AI', 'Machine learning', 'Financial services'],
      },
      {
        id: 'biomedical',
        index: '03',
        title: 'Biomedical analysis with predictive and generative models',
        domain: 'Biomedical AI · Applied research',
        summary:
          'Leading development of solutions that support clinical analysis processes.',
        image: null,
        context:
          'A second domain running in parallel to the financial services work, closer to research and further from anything I had shipped before.',
        problem:
          'Supporting clinical analysis meant combining predictive modelling with generative AI rather than choosing between them, and holding both to the standard the domain expects.',
        role: 'I led the development of these solutions.',
        solution:
          'Led development of biomedical analysis solutions that combine predictive models and generative AI to support clinical analysis processes.',
        outcome: null,
        tech: ['Predictive models', 'Generative AI', 'PyTorch'],
      },
    ],
  },

  leadership: {
    section_index: '03',
    section_label: 'Leadership',
    heading: 'How I lead the work',
    intro:
      'My job sits between the business and the people building. Deciding what is worth building, keeping it moving, and making sure it gets used once it exists.',
    areas: [
      {
        title: 'Prioritization and business translation',
        text:
          'Working out which problems are worth solving with AI and which are not, setting the scope, and turning a business need into something a team can actually build against.',
      },
      {
        title: 'Cross-functional leadership',
        text:
          'Getting engineering, analysis, business owners and clients to one definition of success, and keeping decisions, priorities and dependencies visible to all of them while the work runs.',
      },
      {
        title: 'Project delivery',
        text:
          'Planning the work, holding the milestones, and making the call when a dependency slips or the scope and the date stop fitting together.',
      },
      {
        title: 'AI adoption',
        text:
          'An initiative is not done when it is built. It is done when it is part of how people work, and closing that gap usually takes longer than the build did.',
      },
    ],
    foundation_label: 'Technical foundation',
    foundation_note:
      'Computer systems engineering, then data and AI. It is why I can go into the detail of an approach when a decision needs it.',
    foundation_groups: [
      {
        label: 'AI',
        items: ['Generative AI', 'RAG', 'Multi-agent systems', 'Machine learning', 'AWS Bedrock', 'Claude', 'PyTorch', 'Scikit-learn'],
      },
      {
        label: 'Engineering',
        items: ['Python', 'SQL', 'FastAPI', 'React', 'AWS Lambda', 'Redis', 'Git'],
      },
      {
        label: 'Analysis',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
      },
    ],
  },

  enablement: {
    section_index: '04',
    section_label: 'AI Enablement',
    heading: 'Making generative AI part of how people work',
    intro:
      'Giving people a model does not change anything on its own. The work is connecting what it can do to the decisions and documents they are already responsible for.',
    body:
      'I design and run the generative AI adoption programs for directors, managers and business teams at Grupo Salinas. Sessions start from what the people in the room already do, and tools like Claude get used inside that work instead of being taught as a separate subject. It is closer to program design than to technical training: the hard part is rarely explaining the tool, it is picking which of someone’s tasks is the right one to start with.',
    audiences_label: 'Who it is for',
    audiences: ['Directors', 'Managers', 'Business teams'],
    capabilities_label: 'What the programs build',
    capabilities: [
      'AI literacy',
      'AI fluency in daily work',
      'Human and AI workflows',
      'Responsible everyday use',
      'Business use-case development',
      'Role-specific adoption',
    ],
    closing:
      'The measure is not what people can repeat back. It is whether they are still using it a month later.',
  },

  journey: {
    section_index: '05',
    section_label: 'Journey',
    intro: 'Engineering, then data and AI, then leading it.',
    items: [
      {
        id: 'foundation',
        kind: 'Foundation',
        period: '2020 to 2024',
        title: 'B.Eng. in Computer Systems Engineering',
        org: 'Tecnológico de Monterrey',
        place: 'Mexico City, Mexico',
        text:
          'Graduated with a 93/100 GPA, with a specialization in Data Analytics and Artificial Intelligence along the way.',
      },
      {
        id: 'specialization',
        kind: 'Specialization',
        period: '2024',
        title: 'AI training in China, and a national award',
        org: 'Huawei Global Training Center · CENEVAL',
        place: 'Hangzhou, China · Mexico City, Mexico',
        text:
          'One of the highest national scores on Huawei’s HCIA-AI certification led to the INFOTEC IA 1000 Learning Journey in China. The same year, the CENEVAL Award for Excellence.',
      },
      {
        id: 'consultant',
        kind: 'Role',
        period: 'October 2024 to April 2025',
        title: 'AI Consultant',
        org: 'Grupo Salinas',
        place: 'Mexico City, Mexico',
        text:
          'Applied AI and software delivery in financial services, with consulting work across Mexico and the United States.',
      },
      {
        id: 'manager',
        kind: 'Now',
        period: 'April 2025 to present',
        title: 'AI Manager',
        org: 'Grupo Salinas',
        place: 'Mexico City, Mexico',
        text:
          'Promoted after six months. Leading AI initiatives in financial services and biomedical analysis, and the generative AI adoption programs for directors and business teams.',
      },
    ],
  },

  recognition: {
    section_index: '06',
    section_label: 'Recognition',
    heading: 'Three that are worth the space',
    items: [
      {
        id: 'ceneval',
        title: 'CENEVAL Award for Excellence',
        description:
          'Awarded for an outstanding result on Mexico’s national undergraduate exit exam (EGEL) in software engineering.',
        date: '2024',
        location: 'Mexico City, Mexico',
        image: '/recognition/ceneval.jpg',
        imageAlt: 'Octavio Aleman holding his degree certificate at Tecnológico de Monterrey',
        focus: '50% 32%',
        externalUrl:
          'https://reconocimiento.ceneval.edu.mx/busqueda-de-reconocimientos-2/?resultId=42955',
        sourceLabel: 'Verify the award',
      },
      {
        id: 'huawei-china',
        title: 'Huawei AI training in China',
        description:
          'Selected for the INFOTEC IA 1000 Learning Journey after one of the highest national scores on Huawei’s HCIA-AI certification, then an advanced specialization in neural networks at Huawei’s Global Training Center.',
        date: 'May 2024',
        location: 'Hangzhou, China',
        image: '/recognition/huawei.jpg',
        imageAlt: 'Octavio Aleman at the Huawei Global Training Center in Hangzhou',
        focus: '50% 45%',
        externalUrl:
          'https://conecta.tec.mx/es/noticias/ciudad-de-mexico/educacion/china-alumnos-tec-ccm-son-seleccionados-en-programa-de-ia',
        sourceLabel: 'Read the article',
      },
      {
        id: 'tecup',
        title: 'Innovation judge, TecUp 3.0',
        description:
          'Judged the AI Shark Tank at TecUp 3.0, run by Iris StartUp Lab inside Grupo Salinas. Teams pitched internal AI proposals, with one selected to receive funding and be built.',
        date: 'July 2025',
        location: 'Mexico City, Mexico',
        image: '/recognition/tecup.jpg',
        imageAlt: 'The judging panel at the TecUp 3.0 AI Shark Tank',
        focus: '68% 40%',
        externalUrl:
          'https://www.linkedin.com/posts/grupo-salinas_gruposalinas-tecup3-playmode-activity-7369184486606938112-_n4I',
        sourceLabel: 'See the post',
      },
    ],
    view_label: 'View',
  },

  global: {
    section_index: '07',
    section_label: 'Global Perspective',
    intro:
      'Trained in China, delivering with teams and clients in the United States, based in Mexico City. It is part of how I run a project rather than a line on a list.',
    locations_label: 'Where the work has taken place',
    regions: [
      { country: 'Mexico', cities: ['Mexico City'], note: 'Base' },
      { country: 'United States', cities: ['San Diego', 'Dallas'], note: 'Client and project work' },
      { country: 'China', cities: ['Hangzhou', 'Shenzhen'], note: 'Huawei AI training program' },
    ],
    languages_label: 'Languages',
    languages: [
      { lang: 'Spanish', level: 'Native', code: 'ES' },
      { lang: 'English', level: 'C2', code: 'EN' },
      { lang: 'German', level: 'B2', code: 'DE' },
      { lang: 'Mandarin', level: 'A1', code: '中文' },
    ],
  },

  personal: {
    section_index: '08',
    section_label: 'Outside Work',
    heading: 'Three things I keep coming back to',
    items: [
      {
        id: 'cooking',
        title: 'Cooking',
        text: 'I like experimenting in the kitchen and picking up techniques I have not tried before.',
        image: null,
      },
      {
        id: 'painting',
        title: 'Painting',
        text: 'Something I come back to when I want to make something with my hands instead of a screen.',
        image: null,
      },
      {
        id: 'hydroponics',
        title: 'Hydroponics',
        text: 'I keep a small hydroponic garden. Most of the fun is adjusting it and seeing what changes.',
        image: null,
      },
    ],
  },

  contact: {
    section_index: '09',
    section_label: 'Contact',
    headline: 'Open to AI leadership roles.',
    subtext:
      'AI management, program, product and transformation roles in Mexico, Canada, Australia, and remote. If there is a fit, or you just want to compare notes on enterprise AI adoption, write to me.',
    linkedin_label: 'LinkedIn',
    linkedin_sub: 'in/augusto-aleman',
    email_label: 'Email',
    email_sub: 'oa.alemanesparza@gmail.com',
    resume_label: 'Résumé',
    resume_sub: 'PDF, latest version',
    linkedin_url: 'https://www.linkedin.com/in/augusto-aleman',
    email: 'oa.alemanesparza@gmail.com',
    resume_file: '/resume.pdf',
    resume_filename: 'Octavio_Aleman_Resume.pdf',
  },

  footer: {
    copy: '© 2025 Octavio Aleman',
    tagline: 'AI Manager · Mexico City',
  },
};

export default en;
