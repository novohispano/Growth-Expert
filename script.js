const WHATSAPP_NUMBER = "528125678257";
const DEFAULT_LANGUAGE = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
const PAGE_TRANSLATIONS = window.PAGE_TRANSLATIONS || {};

const translations = {
  en: {
    "header.cta": "Get My Revenue Audit",
    "hero.eyebrow": "For Seed and Series A B2B startups with traction",
    "hero.title": "Unlock stalled revenue with hands-on GTM execution.",
    "hero.lede": "Built for founders already generating revenue who know the sales machine is underperforming, but do not need another 50-slide deck.",
    "hero.primaryCta": "Get My Revenue Audit",
    "hero.stats.mrr": "Ideal MRR range",
    "hero.stats.weeklyLabel": "Weekly",
    "hero.stats.weekly": "Revenue bottleneck fixing",
    "hero.stats.executionLabel": "Execution-first",
    "hero.stats.execution": "Close, pricing, expansion",
    "patterns.label": "Common patterns",
    "patterns.1": "Healthy pipeline, but revenue still stays flat.",
    "patterns.2": "Founder-led sales stopped scaling.",
    "patterns.3": "Enterprise deals stall or die late in the cycle.",
    "patterns.4": "Pricing was set by instinct and never revisited.",
    "patterns.5": "No structured upsell or expansion system.",
    "patterns.title1": "Blocked pipeline",
    "patterns.text1": "Deals are entering the funnel, but they are not converting into closed revenue.",
    "patterns.title2": "Founder-led sales",
    "patterns.text2": "The founder can still close deals, but the process does not scale beyond them.",
    "patterns.title3": "Extended sales cycles",
    "patterns.text3": "Deals keep moving, but the cycle stretches too long and slows down revenue velocity.",
    "patterns.title4": "Underperforming pricing",
    "patterns.text4": "Packaging and pricing are not helping maximize ACV, conversion, or expansion.",
    "patterns.title5": "No upselling",
    "patterns.text5": "Existing accounts are not growing because there is no upsell or expansion motion.",
    "testimonials.eyebrow": "Selected recommendations",
    "testimonials.kicker": "Recommendation",
    "testimonials.title": "Trusted by founders and operators who have worked closely with Jorge.",
    "testimonials.copy": "A few short excerpts from recommendations, chosen for relevance and clarity.",
    "testimonials.quote1": "\"Jorge Tellez delivers an exceptional mentoring skillset. His mentorship has been impactful across growth, branding, capital raising, and strategic execution.\"",
    "testimonials.quote2": "\"Jorge is more than a mentor: he combines strategic vision with practical judgment to make decisions with focus and speed.\"",
    "testimonials.quote3": "\"He has consistently made himself available to provide guidance and support, going above and beyond to help us navigate startup challenges.\"",
    "testimonials.quote4": "\"With Jorge, we got our commercial structure in order in four weeks. The foundation we put in place could take us to triple our results and drive measurable execution.\"",
    "about.eyebrow": "Why Jorge",
    "about.title": "I help early-stage startups fix GTM bottlenecks and grow revenue.",
    "about.copy": "I am Jorge Tellez. I work with founders to identify where GTM is breaking, fix the highest-leverage constraint, and run weekly experiments tied directly to revenue.",
    "about.card1.title": "Track record",
    "about.card1.lead": "Built revenue from zero, reworked monetization, and originated large-scale capital activity.",
    "about.card1.item1": "~$2.5B in originated transactions launching a VC arm",
    "about.card1.item2": "$0 to ~$6M in revenue in 2 years",
    "about.card1.item3": "~$250k ARR from a product launched from scratch in 12 months",
    "about.card1.item4": "2x revenue after redesigning pricing and subscriptions",
    "about.card2.title": "Operator across the Americas",
    "about.card2.lead": "Regional GM and growth leader across the U.S., Mexico, Hispanic LATAM, and Brazil.",
    "about.card2.item1": "15+ years across tech, fintech, and education",
    "about.card2.item2": "80+ partnerships launched",
    "about.card2.item3": "350K+ developer community reach",
    "about.card2.item4": "1M+ monthly organic impressions and 70% CAC reduction",
    "about.card3.title": "What I do with founders",
    "about.card3.lead": "Weekly revenue work focused on fixing the real GTM constraint.",
    "about.card3.item1": "Diagnose the break: offer, pricing, sales motion, or expansion",
    "about.card3.item2": "Run weekly experiments tied to revenue, CAC, and LTV",
    "about.card3.item3": "Improve distribution and sharpen the business model",
    "about.card3.item4": "No website optimization theatre",
    "about.proof": "I have built multi-million-dollar partnerships across companies, governments, and non-profits, built B2B sales teams end-to-end, studied at Harvard, UNC Chapel Hill, and Tec de Monterrey, and mentor founders through Techstars.",
    "program.eyebrow": "What this is",
    "program.title": "A monthly operating program to identify and remove GTM bottlenecks.",
    "program.copy": "This is not advisory theatre. The work is practical, iterative, and tied directly to revenue movement inside a real sales process.",
    "principles.close.title": "Close",
    "principles.close.copy": "Improve win rate, unblock objections, and shorten the path to signature.",
    "principles.pricing.title": "Pricing",
    "principles.pricing.copy": "Refine packaging and pricing so each deal lands at a stronger ACV.",
    "principles.expansion.title": "Expansion",
    "principles.expansion.copy": "Create repeatable upsell motions, add-ons, and account growth triggers.",
    "context.home": "Home",
    "context.programs": "Programs",
    "context.countries": "Countries",
    "context.blog": "Blog",
    "services.eyebrow": "Explore the programs",
    "services.unlock.title": "Revenue Unlock Program",
    "services.unlock.copy": "Fix pricing, pipeline, and GTM bottlenecks",
    "services.fundraising.title": "Series A Fundraising",
    "services.fundraising.copy": "Prepare metrics, narrative, and investor process",
    "related.eyebrow": "Keep moving",
    "related.countries.title": "Where this shows up",
    "related.countries.copy": "See how the same GTM bottlenecks play out across Mexico, Colombia, and Argentina.",
    "related.reading.title": "Read the playbook",
    "related.reading.copy": "A practical breakdown of founder-led sales, pipeline structure, pricing, and expansion for LATAM B2B startups.",
    "related.article": "Build a scalable B2B sales process in LATAM",
    "explore.eyebrow": "Explore Growth Expert",
    "explore.programs.copy": "Two ways to work together, depending on the bottleneck.",
    "explore.countries.copy": "Local market context across key LATAM ecosystems.",
    "explore.blog.title": "Insights",
    "explore.blog.copy": "Practical breakdowns on GTM, sales, and fundraising.",
    "explore.placeholder": "More articles coming soon",
    "fit.forEyebrow": "Who it is for",
    "fit.forTitle": "B2B startups with existing revenue and real urgency.",
    "fit.for1": "Seed or Series A companies selling into a defined B2B market.",
    "fit.for2": "Teams with traction, pipeline, and enough signal to diagnose bottlenecks.",
    "fit.for3": "Founders who want revenue leverage, not generic growth advice.",
    "fit.notEyebrow": "Who it is not for",
    "fit.notTitle": "Pre-revenue teams still searching for product-market fit.",
    "fit.not1": "Startups without active customers or a live sales motion.",
    "fit.not2": "Teams looking only for strategy decks without implementation.",
    "fit.not3": "Companies that cannot assign an owner to execute changes.",
    "engagement.eyebrow": "How the engagement feels",
    "engagement.title": "Structured enough to create momentum, lean enough to move fast.",
    "engagement.diagnose.title": "Diagnose",
    "engagement.diagnose.copy": "Map where revenue is leaking across funnel, pricing, and account expansion.",
    "engagement.prioritize.title": "Prioritize",
    "engagement.prioritize.copy": "Focus on the highest-leverage change instead of chasing scattered optimizations.",
    "engagement.implement.title": "Implement",
    "engagement.implement.copy": "Ship concrete fixes with the founder or operator who owns the outcome.",
    "engagement.review.title": "Review",
    "engagement.review.copy": "Work week to week against actual commercial feedback, not assumptions.",
    "form.eyebrow": "Free revenue audit",
    "form.title": "Send your numbers. I'll tell you where revenue is leaking.",
    "form.copy": "This is a low-friction founder audit for tech startups with traction. Share the core commercial inputs, send them over WhatsApp, and I'll reply with where GTM is likely breaking.",
    "form.tag1": "Takes under 2 minutes",
    "form.tag2": "Founder-friendly",
    "form.tag3": "No deck, no prep",
    "form.flowLabel": "Flow:",
    "form.flowCopy": "fill the fields, send the audit on WhatsApp, then I review the bottleneck and reply.",
    "fields.name": "Name",
    "fields.startup": "Startup",
    "fields.email": "Email",
    "fields.monthlyRevenue": "Monthly Revenue",
    "fields.ticketSize": "Average Ticket Size",
    "fields.breakpoint": "Sales Process Breakdown",
    "placeholders.name": "Jane Founder",
    "placeholders.startup": "Acme AI",
    "placeholders.email": "jane@acme.ai",
    "placeholders.monthlyRevenue": "$35,000 MRR",
    "placeholders.ticketSize": "$4,500 ACV",
    "options.breakpointDefault": "Select the main issue",
    "options.breakpoint1": "Blocked pipeline",
    "options.breakpoint2": "Founder-led sales",
    "options.breakpoint3": "Extended sales cycles",
    "options.breakpoint4": "Underperforming pricing",
    "options.breakpoint5": "No upselling",
    "options.breakpoint6": "Other",
    "form.disclaimer": "WhatsApp opens with the configured consulting number and the prospect's intake summary.",
    "form.submit": "Get My Revenue Audit",
    "footer.blog": "Blog",
    "message.intro": "Hi, I want a Revenue Unlock diagnostic.",
    "message.name": "Name",
    "message.startup": "Startup",
    "message.email": "Email",
    "message.monthlyRevenue": "Monthly Revenue",
    "message.ticketSize": "Average Ticket Size",
    "message.breakpoint": "Sales Process Breakdown",
  },
  es: {
    "header.cta": "Quiero Mi Auditoría",
    "hero.eyebrow": "Para startups B2B Seed y Series A con tracción",
    "hero.title": "Destraba ingresos con ejecución GTM práctica y directa.",
    "hero.lede": "Pensado para founders con revenue que saben que su proceso comercial no está rindiendo, pero no necesitan otra presentación de 50 slides.",
    "hero.primaryCta": "Quiero Mi Auditoría",
    "hero.stats.mrr": "Rango ideal de MRR",
    "hero.stats.weeklyLabel": "Semanal",
    "hero.stats.weekly": "Resolución semanal de cuellos de botella",
    "hero.stats.executionLabel": "Ejecución primero",
    "hero.stats.execution": "Cierre, pricing y expansión",
    "patterns.label": "Situaciones comunes",
    "patterns.1": "Hay pipeline sano, pero el revenue sigue estancado.",
    "patterns.2": "Las ventas founder-led dejaron de escalar.",
    "patterns.3": "Los deals enterprise se enfrían o se caen al final del ciclo.",
    "patterns.4": "El pricing se definió por instinto y nunca se volvió a tocar.",
    "patterns.5": "No existe un sistema claro de upsell o expansión.",
    "patterns.title1": "Pipeline bloqueado",
    "patterns.text1": "Los deals entran al funnel, pero no se convierten en revenue cerrado.",
    "patterns.title2": "Ventas founder-led",
    "patterns.text2": "El founder todavía puede cerrar deals, pero el proceso no escala más allá de esa persona.",
    "patterns.title3": "Ciclos de venta extendidos",
    "patterns.text3": "Los deals siguen avanzando, pero el ciclo se alarga demasiado y frena la velocidad de revenue.",
    "patterns.title4": "Pricing subóptimo",
    "patterns.text4": "El packaging y el pricing no están ayudando a maximizar ACV, conversión ni expansión.",
    "patterns.title5": "Sin upselling",
    "patterns.text5": "Las cuentas actuales no están creciendo porque no existe un motion de upsell o expansión.",
    "testimonials.eyebrow": "Recomendaciones seleccionadas",
    "testimonials.kicker": "Recomendación",
    "testimonials.title": "Respaldado por founders y operadores que han trabajado de cerca con Jorge.",
    "testimonials.copy": "Algunos extractos breves de recomendaciones, elegidos por relevancia y claridad.",
    "testimonials.quote1": "\"Jorge Téllez tiene una capacidad excepcional de mentoría. Su acompañamiento ha sido muy valioso en growth, branding, levantamiento de capital y ejecución estratégica.\"",
    "testimonials.quote2": "\"Jorge es más que un mentor: mezcla visión estratégica con un entendimiento práctico para tomar decisiones con foco y velocidad.\"",
    "testimonials.quote3": "\"Siempre ha estado disponible para brindar guía y apoyo, y ha ido más allá para ayudarnos a navegar los retos de una startup.\"",
    "testimonials.quote4": "\"Con Jorge logramos poner nuestra estructura comercial en orden en 4 semanas. Las bases que aplicamos podrían llevarnos a triplicar nuestros resultados.\"",
    "about.eyebrow": "Por qué Jorge",
    "about.title": "Ayudo a startups early-stage a corregir cuellos de botella en GTM y crecer revenue.",
    "about.copy": "Soy Jorge Tellez. Trabajo con founders para identificar dónde se está rompiendo GTM, corregir la restricción de mayor apalancamiento y correr experimentos semanales conectados directamente a revenue.",
    "about.card1.title": "Track record",
    "about.card1.lead": "He construido revenue desde cero, rediseñado monetización y originado actividad de capital a gran escala.",
    "about.card1.item1": "~$2.5B en transacciones originadas al lanzar un brazo de VC",
    "about.card1.item2": "$0 a ~$6M de revenue en 2 años",
    "about.card1.item3": "~$250k ARR con un producto lanzado desde cero en 12 meses",
    "about.card1.item4": "2x revenue al rediseñar pricing y suscripciones",
    "about.card2.title": "Operador en toda América",
    "about.card2.lead": "Regional GM y líder de growth en EE.UU., México, LATAM hispano y Brasil.",
    "about.card2.item1": "15+ años en tech, fintech y educación",
    "about.card2.item2": "80+ partnerships lanzados",
    "about.card2.item3": "350K+ de alcance en comunidad de developers",
    "about.card2.item4": "1M+ impresiones orgánicas mensuales y 70% menos CAC",
    "about.card3.title": "Lo que hago con founders",
    "about.card3.lead": "Trabajo semanal de revenue enfocado en corregir la restricción real de GTM.",
    "about.card3.item1": "Diagnosticar dónde se rompe: oferta, pricing, sales motion o expansión",
    "about.card3.item2": "Correr experimentos semanales conectados a revenue, CAC y LTV",
    "about.card3.item3": "Mejorar distribución y fortalecer el modelo de negocio",
    "about.card3.item4": "No hago teatro de optimización de websites",
    "about.proof": "He construido partnerships multimillonarios con empresas, gobiernos y non-profits, armado equipos B2B de ventas end-to-end, estudiado en Harvard, UNC Chapel Hill y Tec de Monterrey, y hoy mentoreo founders a través de Techstars.",
    "program.eyebrow": "De qué se trata",
    "program.title": "Un programa operativo mensual para detectar y remover cuellos de botella en GTM.",
    "program.copy": "No es consultoría teórica. El trabajo es práctico, iterativo y conectado directamente con movimiento real de revenue.",
    "principles.close.title": "Cierre",
    "principles.close.copy": "Mejora el win rate, destraba objeciones y acorta el camino a la firma.",
    "principles.pricing.title": "Pricing",
    "principles.pricing.copy": "Optimiza packaging y pricing para que cada deal cierre con mejor ACV.",
    "principles.expansion.title": "Expansión",
    "principles.expansion.copy": "Crea motions repetibles de upsell, add-ons y crecimiento por cuenta.",
    "context.home": "Inicio",
    "context.programs": "Programas",
    "context.countries": "Países",
    "context.blog": "Blog",
    "services.eyebrow": "Explora los programas",
    "services.unlock.title": "Revenue Unlock Program",
    "services.unlock.copy": "Corrige pricing, pipeline y cuellos de botella en GTM",
    "services.fundraising.title": "Series A Fundraising",
    "services.fundraising.copy": "Prepara métricas, narrativa y proceso con inversionistas",
    "related.eyebrow": "Sigue avanzando",
    "related.countries.title": "Dónde se ve este problema",
    "related.countries.copy": "Mira cómo los mismos cuellos de botella de GTM aparecen en México, Colombia y Argentina.",
    "related.reading.title": "Lee el playbook",
    "related.reading.copy": "Un desglose práctico de ventas founder-led, estructura de pipeline, pricing y expansión para startups B2B en LATAM.",
    "related.article": "Cómo construir un proceso de ventas B2B escalable en LATAM",
    "explore.eyebrow": "Explora Growth Expert",
    "explore.programs.copy": "Dos formas de trabajar juntos, según el cuello de botella.",
    "explore.countries.copy": "Contexto local para los ecosistemas clave de LATAM.",
    "explore.blog.title": "Artículos",
    "explore.blog.copy": "Desgloses prácticos sobre GTM, ventas y fundraising.",
    "explore.placeholder": "Más artículos pronto",
    "fit.forEyebrow": "Para quién sí es",
    "fit.forTitle": "Startups B2B con revenue actual y urgencia comercial real.",
    "fit.for1": "Compañías Seed o Series A vendiendo a un mercado B2B definido.",
    "fit.for2": "Equipos con tracción, pipeline y suficiente señal para diagnosticar cuellos de botella.",
    "fit.for3": "Founders que quieren apalancar revenue, no consejos genéricos de growth.",
    "fit.notEyebrow": "Para quién no es",
    "fit.notTitle": "Equipos pre-revenue que siguen buscando product-market fit.",
    "fit.not1": "Startups sin clientes activos o sin proceso comercial en marcha.",
    "fit.not2": "Equipos que solo buscan estrategia sin implementación.",
    "fit.not3": "Compañías que no pueden asignar un owner para ejecutar cambios.",
    "engagement.eyebrow": "Cómo se vive el programa",
    "engagement.title": "Estructurado para generar momentum, ligero para moverse rápido.",
    "engagement.diagnose.title": "Diagnosticar",
    "engagement.diagnose.copy": "Mapear dónde se fuga revenue en funnel, pricing y expansión de cuentas.",
    "engagement.prioritize.title": "Priorizar",
    "engagement.prioritize.copy": "Concentrarse en el cambio de mayor apalancamiento en vez de dispersarse.",
    "engagement.implement.title": "Implementar",
    "engagement.implement.copy": "Ejecutar fixes concretos con el founder u operador responsable del resultado.",
    "engagement.review.title": "Revisar",
    "engagement.review.copy": "Trabajar semana a semana sobre feedback comercial real, no sobre supuestos.",
    "form.eyebrow": "Auditoría gratuita de revenue",
    "form.title": "Mándame tus números. Te digo dónde se está fugando el revenue.",
    "form.copy": "Esta es una auditoría de baja fricción para founders de startups tech con tracción. Comparte los inputs comerciales clave, envíalos por WhatsApp y te respondo con dónde es más probable que GTM se esté rompiendo.",
    "form.tag1": "Toma menos de 2 minutos",
    "form.tag2": "Pensado para founders",
    "form.tag3": "Sin deck, sin preparación",
    "form.flowLabel": "Flujo:",
    "form.flowCopy": "llena los campos, envía la auditoría por WhatsApp y luego reviso el cuello de botella y te respondo.",
    "fields.name": "Nombre",
    "fields.startup": "Startup",
    "fields.email": "Email",
    "fields.monthlyRevenue": "Revenue mensual",
    "fields.ticketSize": "Ticket promedio",
    "fields.breakpoint": "Dónde se rompe el proceso comercial",
    "placeholders.name": "Jane Founder",
    "placeholders.startup": "Acme AI",
    "placeholders.email": "jane@acme.ai",
    "placeholders.monthlyRevenue": "$35,000 MRR",
    "placeholders.ticketSize": "$4,500 ACV",
    "options.breakpointDefault": "Selecciona el problema principal",
    "options.breakpoint1": "Pipeline bloqueado",
    "options.breakpoint2": "Ventas lideradas por el founder",
    "options.breakpoint3": "Ciclos de venta extendidos",
    "options.breakpoint4": "Pricing subóptimo",
    "options.breakpoint5": "Sin upselling",
    "options.breakpoint6": "Otro",
    "form.disclaimer": "WhatsApp se abre con el número configurado y el resumen del intake del prospecto.",
    "form.submit": "Quiero Mi Auditoría",
    "footer.blog": "Blog",
    "message.intro": "Hola, quiero un diagnóstico de Revenue Unlock.",
    "message.name": "Nombre",
    "message.startup": "Startup",
    "message.email": "Email",
    "message.monthlyRevenue": "Revenue mensual",
    "message.ticketSize": "Ticket promedio",
    "message.breakpoint": "Dónde se rompe el proceso comercial",
  },
};

const form = document.querySelector("#whatsapp-form");
const translationNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
let currentLanguage = DEFAULT_LANGUAGE;

function getDictionary(lang) {
  const baseDictionary = translations[lang] || translations.en;
  const pageDictionary = PAGE_TRANSLATIONS[lang] || {};

  return {
    ...baseDictionary,
    ...pageDictionary,
  };
}

function translate(lang) {
  const dictionary = getDictionary(lang);
  currentLanguage = lang;
  document.documentElement.lang = lang;

  translationNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      node.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langToggle === lang);
    button.setAttribute("aria-pressed", String(button.dataset.langToggle === lang));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => translate(button.dataset.langToggle));
});

translate(DEFAULT_LANGUAGE);

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const hasField = (name) => Boolean(form.elements.namedItem(name));
    const payload = {
      name: (data.get("name") || "").toString().trim(),
      startup: (data.get("startup") || "").toString().trim(),
      email: (data.get("email") || "").toString().trim(),
      monthlyRevenue: (data.get("monthlyRevenue") || "").toString().trim(),
      ticketSize: (data.get("ticketSize") || "").toString().trim(),
      breakpoint: (data.get("breakpoint") || "").toString().trim(),
    };

    const requiredFields = [
      payload.name,
      payload.startup,
      payload.email,
      payload.monthlyRevenue,
      ...(hasField("ticketSize") ? [payload.ticketSize] : []),
      ...(hasField("breakpoint") ? [payload.breakpoint] : []),
    ];

    if (requiredFields.some((value) => !value)) {
      form.reportValidity();
      return;
    }

    const dictionary = getDictionary(currentLanguage);
    const customIntro =
      currentLanguage === "es"
        ? form.dataset.messageIntroEs || form.dataset.messageIntro
        : form.dataset.messageIntroEn || form.dataset.messageIntro;
    const revenueLabel =
      currentLanguage === "es"
        ? form.dataset.messageMonthlyRevenueEs || dictionary["message.monthlyRevenue"]
        : form.dataset.messageMonthlyRevenueEn || dictionary["message.monthlyRevenue"];
    const lines = [
      customIntro || dictionary["message.intro"],
      "",
      `${dictionary["message.name"]}: ${payload.name}`,
      `${dictionary["message.startup"]}: ${payload.startup}`,
      `${dictionary["message.email"]}: ${payload.email}`,
      `${revenueLabel}: ${payload.monthlyRevenue}`,
      ...(payload.ticketSize ? [`${dictionary["message.ticketSize"]}: ${payload.ticketSize}`] : []),
      ...(payload.breakpoint ? [`${dictionary["message.breakpoint"]}: ${payload.breakpoint}`] : []),
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}
