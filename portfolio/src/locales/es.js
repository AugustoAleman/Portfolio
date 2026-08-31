/**
 * CONTENIDO EN ESPAÑOL — fuente única de todo el sitio.
 *
 * Regla de origen: cada afirmación aquí proviene del CV actualizado
 * ("CV Lider IA (ES).docx"). Nada está inflado y no hay métricas inventadas.
 * Los elementos pendientes de dato real usan `null` y muestran un fallback
 * intencional. Ver CONTENT_NEEDED.md para lo que falta.
 */

const es = {
  nav: {
    work: 'Trabajo',
    leadership: 'Liderazgo',
    enablement: 'Adopción',
    journey: 'Trayectoria',
    recognition: 'Reconocimientos',
    contact: 'Contacto',
    resume: 'CV',
  },

  hero: {
    status: 'Gerente de IA en Grupo Salinas, Ciudad de México',
    name_line1: 'Octavio',
    name_line2: 'Aleman',
    role: 'Gerente de Inteligencia Artificial',
    tagline:
      'Lidero la adopción y la entrega de IA en entornos empresariales: identifico los casos de uso que valen la pena, coordino a los equipos que los construyen y me aseguro de que el resultado llegue al trabajo real de la gente.',
    cta_primary: 'Ver el trabajo',
    cta_secondary: 'Contacto',
    photo: '/portrait.jpg',
    photo_alt: 'Octavio Aleman',
    marks: [
      { k: 'Enfoque', v: 'Adopción empresarial de IA' },
      { k: 'Formación', v: 'Ingeniería, datos e IA' },
      { k: 'Entre', v: 'México y Estados Unidos' },
    ],
    chips: ['IA generativa', 'Entrega de IA', 'Habilitación directiva'],
    scroll: 'Bajar',
  },

  highlights: {
    section_index: '01',
    section_label: 'Puntos Clave',
    heading: 'Cuatro cosas que conviene saber primero',
    items: [
      {
        k: '01',
        headline: 'De Consultor a Gerente de IA en seis meses',
        text:
          'Entré a Grupo Salinas como Consultor en Inteligencia Artificial en octubre de 2024 y fui promovido a Gerente de IA en abril de 2025.',
        meta: 'Grupo Salinas · Ciudad de México',
      },
      {
        k: '02',
        headline: 'Programas de adopción de IA generativa para directores y equipos de negocio',
        text:
          'Diseñados e impartidos por mí, construidos sobre trabajo real de análisis, investigación, documentación y toma de decisiones.',
        meta: 'Habilitación directiva · Claude',
      },
      {
        k: '03',
        headline: 'Iniciativas de IA en servicios financieros y análisis biomédico',
        text:
          'Originación y evaluación de microcréditos por un lado, modelos predictivos y generativos para procesos de análisis clínico por el otro.',
        meta: 'Dos dominios · Escala corporativa',
      },
      {
        k: '04',
        headline: 'Proyectos coordinados entre México y Estados Unidos',
        text:
          'Entrega internacional de proyectos de IA y software con equipos y clientes en ambos países, incluyendo stakeholders en San Diego, California.',
        meta: 'Ciudad de México · San Diego · Dallas',
      },
    ],
  },

  work: {
    section_index: '02',
    section_label: 'Trabajo Seleccionado',
    heading: 'Lo que realmente he entregado',
    intro:
      'Las tres iniciativas que mejor describen el trabajo que hago hoy, ordenadas según cuánto de ellas fue liderazgo y no construcción. Abre una para ver el detalle.',
    expand: 'Ver el detalle',
    collapse: 'Cerrar',
    field_labels: {
      context: 'Contexto',
      problem: 'Problema',
      role: 'Mi rol',
      solution: 'Qué hice',
      outcome: 'Resultado',
      tech: 'Tecnología',
    },
    items: [
      {
        id: 'adoption',
        index: '01',
        title: 'Adopción de IA generativa para directores y equipos de negocio',
        domain: 'Adopción de IA · Habilitación directiva',
        summary:
          'Programas de adopción que meten herramientas como Claude dentro del trabajo que directores y gerentes ya hacen.',
        image: null,
        context:
          'Como Gerente de IA trabajo con directores y equipos de negocio de quienes se espera que usen IA generativa en su día a día, no en un piloto.',
        problem:
          'Tener acceso a una herramienta no es adopción. La gente necesita ver el trabajo del que ya es responsable hecho de otra forma, con su propio material.',
        role: 'Diseño los programas y los imparto.',
        solution:
          'Construí programas para directores y gerentes alrededor de cuatro tipos de trabajo que hacen todo el tiempo: análisis, investigación, documentación y toma de decisiones. Herramientas como Claude se introducen dentro de esos procesos y no como un tema aparte.',
        outcome:
          'Los programas operan de forma continua para directores y gerentes de distintas áreas del negocio.',
        tech: ['Claude', 'IA generativa', 'Diseño de programas'],
      },
      {
        id: 'microcredit',
        index: '02',
        title: 'IA para originación y evaluación de microcréditos',
        domain: 'Servicios financieros · Iniciativas de IA',
        summary:
          'Dirección de iniciativas de IA a lo largo de toda la cadena de crédito: identidad, riesgo, decisión, oferta y cobranza.',
        image: null,
        context:
          'Grupo Salinas opera en servicios financieros, donde una decisión de microcrédito no es una sola decisión sino una cadena.',
        problem:
          'La originación y la evaluación abarcan identidad, riesgo, decisión, oferta y cobranza. Meter IA en una etapa cambia lo que recibe la siguiente, así que no se pueden tratar como problemas separados.',
        role: 'Dirijo estas iniciativas como Gerente de IA.',
        solution:
          'Dirigí iniciativas de IA para originación y evaluación de microcréditos con componentes de identidad, riesgo, decisión, oferta y cobranza, coordinando a los equipos responsables de cada parte.',
        outcome: null,
        tech: ['IA generativa', 'Machine learning', 'Servicios financieros'],
      },
      {
        id: 'biomedical',
        index: '03',
        title: 'Análisis biomédico con modelos predictivos y generativos',
        domain: 'IA biomédica · Investigación aplicada',
        summary:
          'Liderazgo del desarrollo de soluciones que apoyan procesos de análisis clínico.',
        image: null,
        context:
          'Un segundo dominio que corre en paralelo al trabajo de servicios financieros, más cercano a la investigación y más lejos de todo lo que había entregado antes.',
        problem:
          'Apoyar el análisis clínico implicaba combinar modelado predictivo con IA generativa en lugar de elegir entre los dos, y sostener ambos al nivel que exige el dominio.',
        role: 'Lideré el desarrollo de estas soluciones.',
        solution:
          'Lideré el desarrollo de soluciones de análisis biomédico que integran modelos predictivos e IA generativa para apoyar procesos de análisis clínico.',
        outcome: null,
        tech: ['Modelos predictivos', 'IA generativa', 'PyTorch'],
      },
    ],
  },

  leadership: {
    section_index: '03',
    section_label: 'Liderazgo',
    heading: 'Cómo dirijo el trabajo',
    intro:
      'Mi trabajo está entre el negocio y la gente que construye. Decidir qué vale la pena construir, mantenerlo en movimiento y lograr que se use una vez que existe.',
    areas: [
      {
        title: 'Priorización y traducción al negocio',
        text:
          'Determinar qué problemas vale la pena resolver con IA y cuáles no, definir el alcance, y convertir una necesidad de negocio en algo contra lo que un equipo pueda construir.',
      },
      {
        title: 'Liderazgo multidisciplinario',
        text:
          'Llevar a ingeniería, análisis, dueños de negocio y clientes a una sola definición de éxito, y mantener visibles para todos las decisiones, las prioridades y las dependencias mientras el trabajo avanza.',
      },
      {
        title: 'Entrega de proyectos',
        text:
          'Planear el trabajo, sostener los hitos, y tomar la decisión cuando una dependencia se atrasa o el alcance y la fecha dejan de caber juntos.',
      },
      {
        title: 'Adopción de IA',
        text:
          'Una iniciativa no termina cuando se construye. Termina cuando forma parte de cómo trabaja la gente, y cerrar esa distancia suele tomar más que construirla.',
      },
    ],
    foundation_label: 'Base técnica',
    foundation_note:
      'Ingeniería en tecnologías computacionales, después datos e IA. Por eso puedo entrar al detalle de un enfoque cuando una decisión lo exige.',
    foundation_groups: [
      {
        label: 'IA',
        items: ['IA generativa', 'RAG', 'Sistemas multiagente', 'Machine learning', 'AWS Bedrock', 'Claude', 'PyTorch', 'Scikit-learn'],
      },
      {
        label: 'Ingeniería',
        items: ['Python', 'SQL', 'FastAPI', 'React', 'AWS Lambda', 'Redis', 'Git'],
      },
      {
        label: 'Análisis',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
      },
    ],
  },

  enablement: {
    section_index: '04',
    section_label: 'Adopción de IA',
    heading: 'Hacer que la IA generativa forme parte del trabajo real',
    intro:
      'Darle un modelo a alguien no cambia nada por sí solo. El trabajo está en conectar lo que la herramienta puede hacer con las decisiones y los documentos de los que esa persona ya es responsable.',
    body:
      'Diseño e imparto los programas de adopción de IA generativa para directores, gerentes y equipos de negocio en Grupo Salinas. Las sesiones parten de lo que la gente en la sala ya hace, y herramientas como Claude se usan dentro de ese trabajo en lugar de enseñarse como un tema aparte. Se parece más a diseño de programas que a capacitación técnica: lo difícil casi nunca es explicar la herramienta, es elegir con cuál de las tareas de alguien conviene empezar.',
    audiences_label: 'Para quién',
    audiences: ['Directores', 'Gerentes', 'Equipos de negocio'],
    capabilities_label: 'Qué construyen los programas',
    capabilities: [
      'Alfabetización en IA',
      'Fluidez en el trabajo diario',
      'Flujos de trabajo humano e IA',
      'Uso responsable cotidiano',
      'Desarrollo de casos de uso de negocio',
      'Adopción por rol',
    ],
    closing:
      'La medida no es lo que la gente puede repetir. Es si lo sigue usando un mes después.',
  },

  journey: {
    section_index: '05',
    section_label: 'Trayectoria',
    intro: 'Ingeniería, después datos e IA, después dirigirlo.',
    items: [
      {
        id: 'foundation',
        kind: 'Formación',
        period: '2020 a 2024',
        title: 'Ing. en Tecnologías Computacionales',
        org: 'Tecnológico de Monterrey',
        place: 'Ciudad de México, México',
        text:
          'Egresé con promedio de 93, con una especialización en Analítica de Datos e Inteligencia Artificial en el camino.',
      },
      {
        id: 'specialization',
        kind: 'Especialización',
        period: '2024',
        title: 'Formación en IA en China, y un reconocimiento nacional',
        org: 'Huawei Global Training Center · CENEVAL',
        place: 'Hangzhou, China · Ciudad de México, México',
        text:
          'Una de las puntuaciones más altas a nivel nacional en la certificación HCIA-AI de Huawei me llevó al INFOTEC IA 1000 Learning Journey en China. El mismo año, el Premio CENEVAL al Desempeño de Excelencia.',
      },
      {
        id: 'consultant',
        kind: 'Puesto',
        period: 'Octubre 2024 a abril 2025',
        title: 'Consultor en Inteligencia Artificial',
        org: 'Grupo Salinas',
        place: 'Ciudad de México, México',
        text:
          'IA aplicada y entrega de software en servicios financieros, con proyectos de consultoría entre México y Estados Unidos.',
      },
      {
        id: 'manager',
        kind: 'Hoy',
        period: 'Abril 2025 al presente',
        title: 'Gerente de Inteligencia Artificial',
        org: 'Grupo Salinas',
        place: 'Ciudad de México, México',
        text:
          'Promovido a los seis meses. Dirijo iniciativas de IA en servicios financieros y análisis biomédico, y los programas de adopción de IA generativa para directores y equipos de negocio.',
      },
    ],
  },

  recognition: {
    section_index: '06',
    section_label: 'Reconocimientos',
    heading: 'Tres que merecen el espacio',
    items: [
      {
        id: 'ceneval',
        title: 'Premio CENEVAL al Desempeño de Excelencia',
        description:
          'Otorgado tras obtener un resultado sobresaliente en el Examen General para el Egreso de la Licenciatura (EGEL) en Ingeniería de Software.',
        date: '2024',
        location: 'Ciudad de México, México',
        image: '/recognition/ceneval.jpg',
        imageAlt: 'Octavio Aleman con su título en el Tecnológico de Monterrey',
        focus: '50% 32%',
        externalUrl:
          'https://reconocimiento.ceneval.edu.mx/busqueda-de-reconocimientos-2/?resultId=42955',
        sourceLabel: 'Verificar el reconocimiento',
      },
      {
        id: 'huawei-china',
        title: 'Formación en IA de Huawei en China',
        description:
          'Seleccionado para el INFOTEC IA 1000 Learning Journey tras una de las puntuaciones más altas a nivel nacional en la certificación HCIA-AI de Huawei, y después una especialización avanzada en redes neuronales en su Global Training Center.',
        date: 'Mayo 2024',
        location: 'Hangzhou, China',
        image: '/recognition/huawei.jpg',
        imageAlt: 'Octavio Aleman en el Global Training Center de Huawei en Hangzhou',
        focus: '50% 45%',
        externalUrl:
          'https://conecta.tec.mx/es/noticias/ciudad-de-mexico/educacion/china-alumnos-tec-ccm-son-seleccionados-en-programa-de-ia',
        sourceLabel: 'Leer el artículo',
      },
      {
        id: 'tecup',
        title: 'Juez de innovación, TecUp 3.0',
        description:
          'Juez del Shark Tank de IA en TecUp 3.0, organizado por Iris StartUp Lab dentro de Grupo Salinas. Los equipos presentaron propuestas internas de IA, y una sería seleccionada para recibir presupuesto y desarrollarse.',
        date: 'Julio 2025',
        location: 'Ciudad de México, México',
        image: '/recognition/tecup.jpg',
        imageAlt: 'El panel de jueces del Shark Tank de IA de TecUp 3.0',
        focus: '68% 40%',
        externalUrl:
          'https://www.linkedin.com/posts/grupo-salinas_gruposalinas-tecup3-playmode-activity-7369184486606938112-_n4I',
        sourceLabel: 'Ver la publicación',
      },
    ],
    view_label: 'Ver',
  },

  global: {
    section_index: '07',
    section_label: 'Perspectiva Internacional',
    intro:
      'Formación en China, entrega con equipos y clientes en Estados Unidos, base en Ciudad de México. Es parte de cómo llevo un proyecto, no una línea en una lista.',
    locations_label: 'Dónde ha ocurrido el trabajo',
    regions: [
      { country: 'México', cities: ['Ciudad de México'], note: 'Base' },
      { country: 'Estados Unidos', cities: ['San Diego', 'Dallas'], note: 'Cliente y proyectos' },
      { country: 'China', cities: ['Hangzhou', 'Shenzhen'], note: 'Programa de formación de Huawei' },
    ],
    languages_label: 'Idiomas',
    languages: [
      { lang: 'Español', level: 'Nativo', code: 'ES' },
      { lang: 'Inglés', level: 'C2', code: 'EN' },
      { lang: 'Alemán', level: 'B2', code: 'DE' },
      { lang: 'Mandarín', level: 'A1', code: '中文' },
    ],
  },

  personal: {
    section_index: '08',
    section_label: 'Fuera del Trabajo',
    heading: 'Tres cosas a las que sigo volviendo',
    items: [
      {
        id: 'cooking',
        title: 'Cocina',
        text: 'Me gusta experimentar en la cocina y aprender técnicas que no había probado.',
        image: null,
      },
      {
        id: 'painting',
        title: 'Pintura',
        text: 'Algo a lo que vuelvo cuando quiero hacer algo con las manos en lugar de con una pantalla.',
        image: null,
      },
      {
        id: 'hydroponics',
        title: 'Hidroponía',
        text: 'Tengo un pequeño huerto hidropónico. Lo divertido está en ajustarlo y ver qué cambia.',
        image: null,
      },
    ],
  },

  contact: {
    section_index: '09',
    section_label: 'Contacto',
    headline: 'Abierto a roles de liderazgo en IA.',
    subtext:
      'Roles de gestión, programa, producto y transformación de IA en México, Canadá, Australia y remoto. Si hay encaje, o simplemente quieres intercambiar ideas sobre adopción de IA en empresa, escríbeme.',
    linkedin_label: 'LinkedIn',
    linkedin_sub: 'in/augusto-aleman',
    email_label: 'Correo',
    email_sub: 'oa.alemanesparza@gmail.com',
    resume_label: 'CV',
    resume_sub: 'PDF, última versión',
    linkedin_url: 'https://www.linkedin.com/in/augusto-aleman',
    email: 'oa.alemanesparza@gmail.com',
    resume_file: '/resume.pdf',
    resume_filename: 'Octavio_Aleman_CV.pdf',
  },

  footer: {
    copy: '© 2025 Octavio Aleman',
    tagline: 'Gerente de IA · Ciudad de México',
  },
};

export default es;
