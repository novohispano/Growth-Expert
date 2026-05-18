const WHATSAPP_NUMBER = "528125678257";
const LANG_STORAGE_KEY = "growthexpert.lang";
const BROWSER_LANGUAGE = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
const PAGE_TRANSLATIONS = window.PAGE_TRANSLATIONS || {};

function pageSupportsLanguage(lang) {
  if (window.PAGE_TRANSLATIONS && Object.keys(window.PAGE_TRANSLATIONS).length > 0) {
    return Boolean(window.PAGE_TRANSLATIONS[lang]);
  }
  return true;
}

function readStoredLanguage() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function writeStoredLanguage(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* storage unavailable — ignore */
  }
}

function resolveInitialLanguage() {
  const stored = readStoredLanguage();
  if (stored && pageSupportsLanguage(stored)) return stored;
  if (pageSupportsLanguage(BROWSER_LANGUAGE)) return BROWSER_LANGUAGE;
  return BROWSER_LANGUAGE === "es" ? "en" : "es";
}

const DEFAULT_LANGUAGE = resolveInitialLanguage();

const translations = {
  en: {
    "nav.programs": "Programs",
    "nav.blog": "Blog",
    "nav.menu": "Menu",
    "header.cta": "Book My Diagnostic",
    "hero.eyebrow": "B2B founders · $1M–$5M ARR · LATAM",
    "hero.title": "Your pipeline isn't broken. Your sales motion is.",
    "hero.lede": "Weekly, hands-on work with the founder to fix what's actually losing deals — pricing, close rate, or expansion. Tied to revenue moved this month, not slides.",
    "hero.primaryCta": "Send your numbers →",
    "hero.stats.weeklyLabel": "Weekly",
    "hero.stats.weekly": "One bottleneck fixed at a time",
    "hero.stats.executionLabel": "No decks",
    "hero.stats.execution": "Ship fixes inside your sales motion",
    "hero.stats.outcomeLabel": "Revenue",
    "hero.stats.outcome": "Close, pricing, expansion",
    "patterns.label": "Where revenue is leaking",
    "patterns.title1": "Pipeline isn't converting",
    "patterns.text1": "Deals enter the funnel, but they don't close.",
    "patterns.title2": "Only the founder can close",
    "patterns.text2": "The motion doesn't scale beyond you.",
    "patterns.title3": "Pricing leaves money on the table",
    "patterns.text3": "ACV, conversion, and expansion are all underperforming.",
    "testimonials.eyebrow": "From founders who shipped the work",
    "testimonials.title": "Founders who fixed their commercial structure with Jorge.",
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
    "about.proof": "I have built multi-million-dollar partnerships across companies, governments, and non-profits, and built B2B sales teams end-to-end. BA and Master's with honors from Tec de Monterrey, executive education at Harvard Kennedy School. Mentor founders through Techstars.",
    "program.eyebrow": "What you actually get",
    "program.title": "Each month: one bottleneck identified, one fix shipped, measured against revenue.",
    "program.copy": "No deck, no slides, no advisory theatre. The work happens inside your real sales process — close, pricing, expansion — until the number moves.",
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
    "explore.blog.pricing": "How to define pricing for your B2B startup",
    "explore.blog.hiring": "Why your first B2B sales hire fails",
    "explore.blog.objections": "The sales objections that kill your deals",
    "explore.blog.categorization": "How to categorize B2B leads and clean up your pipeline",
    "explore.blog.icp": "How to define your B2B ICP with your first 10 customers",
    "explore.blog.discovery": "B2B discovery calls: the questions that matter",
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
    "engagement.eyebrow": "How the weekly cadence works",
    "engagement.title": "Diagnose Monday. Ship by Thursday. Review against pipeline Friday.",
    "engagement.diagnose.title": "Know what's bleeding",
    "engagement.diagnose.copy": "Inside two weeks you have the diagnosis: which deals you're losing and why — pricing, close, or expansion.",
    "engagement.prioritize.title": "One bottleneck, picked",
    "engagement.prioritize.copy": "We stop chasing ten things and pick the one fix with the most revenue impact this quarter.",
    "engagement.implement.title": "Fixes ship, not slides",
    "engagement.implement.copy": "We push the change into your real sales process — pricing, talk track, comp plan, whatever it takes.",
    "engagement.review.title": "Pipeline moves",
    "engagement.review.copy": "You see the move week by week against actual deals — not a quarterly report.",
    "form.eyebrow": "WhatsApp Gut Check",
    "form.title": "Send your numbers. I'll tell you what jumps out.",
    "form.copy": "Free gut reaction on your numbers — no call, no deck, no written plan. Fill the 8 fields and I'll send a quick take on WhatsApp within a business day.",
    "form.tag1": "Takes under 2 minutes",
    "form.tag2": "Founder-friendly",
    "form.tag3": "No deck, no prep",
    "fields.stage": "Stage of your company",
    "fields.name": "Name",
    "fields.startup": "Startup",
    "fields.email": "Email",
    "fields.linkedin": "LinkedIn (optional)",
    "fields.monthlyRevenue": "Monthly Revenue",
    "fields.ticketSize": "Average Ticket Size",
    "fields.breakpoint": "Sales Process Breakdown",
    "stage.placeholder": "Select your stage",
    "stage.option1": "Pre-revenue / no paying customers",
    "stage.option2": "Early traction (under $50K MRR)",
    "stage.option3": "Growth ($50K–$300K MRR)",
    "stage.option4": "Series A-ready ($300K+ MRR)",
    "form.responseTime": "Jorge personally reviews each diagnosis and replies within 24 hours on weekdays.",
    "prerevenue.eyebrow": "Not yet",
    "prerevenue.title": "Thanks — Growth Expert works with companies that already have paying customers.",
    "prerevenue.copy": "You're not there yet, but these might help while you get there.",
    "prerevenue.cta": "Read the blog",
    "placeholders.name": "Jane Founder",
    "placeholders.startup": "Acme AI",
    "placeholders.email": "jane@acme.ai",
    "placeholders.linkedin": "https://linkedin.com/in/yourname",
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
    "form.submit": "Send on WhatsApp",
    "footer.blog": "Blog",
    "message.intro": "Hi, I want a Revenue Unlock diagnostic.",
    "message.stage": "Stage",
    "message.name": "Name",
    "message.startup": "Startup",
    "message.email": "Email",
    "message.linkedin": "LinkedIn",
    "message.monthlyRevenue": "Monthly Revenue",
    "message.ticketSize": "Average Ticket Size",
    "message.breakpoint": "Sales Process Breakdown",
  },
  es: {
    "nav.programs": "Programas",
    "nav.blog": "Blog",
    "nav.menu": "Menú",
    "header.cta": "Reservar Mi Diagnóstico",
    "hero.eyebrow": "Founders B2B · $1M–$5M ARR · LATAM",
    "hero.title": "Tu pipeline no está roto. Tu motion de ventas sí.",
    "hero.lede": "Trabajo semanal, codo a codo con el founder, para arreglar lo que te está costando deals — pricing, cierre o expansión. Medido contra revenue que se mueve este mes, no contra slides.",
    "hero.primaryCta": "Manda tus números →",
    "hero.stats.weeklyLabel": "Semanal",
    "hero.stats.weekly": "Un cuello de botella a la vez",
    "hero.stats.executionLabel": "Sin decks",
    "hero.stats.execution": "Fixes dentro de tu proceso de ventas",
    "hero.stats.outcomeLabel": "Revenue",
    "hero.stats.outcome": "Cierre, pricing, expansión",
    "patterns.label": "Por dónde se te escapa el revenue",
    "patterns.title1": "El pipeline no convierte",
    "patterns.text1": "Entran deals al funnel, pero no cierran.",
    "patterns.title2": "Solo el founder cierra",
    "patterns.text2": "Las ventas no escalan sin ti.",
    "patterns.title3": "El pricing deja dinero sobre la mesa",
    "patterns.text3": "ACV, conversión y expansión rinden por debajo.",
    "testimonials.eyebrow": "Founders que sí ejecutaron",
    "testimonials.title": "Founders que ordenaron su estructura comercial con Jorge.",
    "testimonials.quote1": "\"Jorge Téllez tiene una capacidad excepcional de mentoría. Su acompañamiento ha sido muy valioso en growth, branding, levantamiento de capital y ejecución estratégica.\"",
    "testimonials.quote2": "\"Jorge es más que un mentor: mezcla visión estratégica con un entendimiento práctico para tomar decisiones con foco y velocidad.\"",
    "testimonials.quote3": "\"Siempre ha estado disponible para brindar guía y apoyo, y ha ido más allá para ayudarnos a navegar los retos de una startup.\"",
    "testimonials.quote4": "\"Con Jorge logramos poner nuestra estructura comercial en orden en 4 semanas. Las bases que aplicamos podrían llevarnos a triplicar nuestros resultados.\"",
    "about.eyebrow": "Por qué Jorge",
    "about.title": "Ayudo a startups early-stage a destrabar GTM y mover revenue.",
    "about.copy": "Soy Jorge Tellez. Trabajo con founders para encontrar dónde se está rompiendo GTM, atacar el cuello de botella con más palanca y correr experimentos semanales atados a revenue.",
    "about.card1.title": "Track record",
    "about.card1.lead": "He levantado revenue desde cero, rediseñado monetización y originado capital a gran escala.",
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
    "about.card3.lead": "Trabajo semanal de revenue, enfocado en el cuello de botella real de GTM.",
    "about.card3.item1": "Diagnosticar dónde se rompe: oferta, pricing, sales motion o expansión",
    "about.card3.item2": "Correr experimentos semanales atados a revenue, CAC y LTV",
    "about.card3.item3": "Mejorar distribución y afinar el modelo de negocio",
    "about.card3.item4": "Nada de teatro optimizando websites",
    "about.proof": "He construido alianzas multimillonarias con empresas, gobiernos y organizaciones sin fines de lucro, y he formado equipos de ventas B2B de principio a fin. Licenciatura y maestría con mención honorífica del Tec de Monterrey, educación ejecutiva en Harvard Kennedy School. Mentor de founders en Techstars.",
    "program.eyebrow": "Qué te llevas, concreto",
    "program.title": "Cada mes: un cuello de botella detectado, un fix ejecutado, medido contra revenue.",
    "program.copy": "Sin decks, sin slides, sin teatro de consultoría. El trabajo pasa adentro de tu proceso de ventas real — cierre, pricing, expansión — hasta que el número se mueve.",
    "principles.close.title": "Cierre",
    "principles.close.copy": "Sube el win rate, destraba objeciones y acorta el tiempo a la firma.",
    "principles.pricing.title": "Pricing",
    "principles.pricing.copy": "Afina packaging y pricing para que cada deal cierre con mejor ACV.",
    "principles.expansion.title": "Expansión",
    "principles.expansion.copy": "Arma motions repetibles de upsell, add-ons y crecimiento por cuenta.",
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
    "explore.blog.pricing": "Cómo definir el pricing de tu startup B2B",
    "explore.blog.hiring": "Por qué fracasa tu primer vendedor B2B",
    "explore.blog.objections": "Las objeciones que matan tus deals",
    "explore.blog.categorization": "No todos los leads son leads: cómo ordenar tu pipeline B2B",
    "explore.blog.icp": "Cómo definir tu ICP B2B con tus primeros 10 clientes",
    "explore.blog.discovery": "Discovery call B2B: las preguntas que importan",
    "fit.forEyebrow": "Para quién es",
    "fit.forTitle": "Startups B2B con revenue y urgencia comercial.",
    "fit.for1": "Compañías Seed o Series A vendiendo a un mercado B2B definido.",
    "fit.for2": "Equipos con tracción, pipeline y señal suficiente para diagnosticar cuellos de botella.",
    "fit.for3": "Founders que quieren mover revenue, no recibir consejos genéricos de growth.",
    "fit.notEyebrow": "Para quién NO es",
    "fit.notTitle": "Equipos pre-revenue que todavía buscan product-market fit.",
    "fit.not1": "Startups sin clientes activos ni proceso de ventas corriendo.",
    "fit.not2": "Equipos que solo quieren estrategia, sin implementación.",
    "fit.not3": "Compañías que no pueden poner un owner que ejecute cambios.",
    "engagement.eyebrow": "Cómo funciona la cadencia semanal",
    "engagement.title": "Diagnóstico el lunes. Fix antes del jueves. Revisión contra el pipeline el viernes.",
    "engagement.diagnose.title": "Sabes qué te está sangrando",
    "engagement.diagnose.copy": "En dos semanas tienes el diagnóstico: qué deals estás perdiendo y por qué — pricing, cierre o expansión.",
    "engagement.prioritize.title": "Un cuello de botella, elegido",
    "engagement.prioritize.copy": "Dejamos de perseguir 10 cosas y elegimos el fix con más impacto en revenue este trimestre.",
    "engagement.implement.title": "Salen fixes, no slides",
    "engagement.implement.copy": "Empujamos el cambio adentro de tu proceso de ventas real — pricing, talk track, comp plan, lo que toque.",
    "engagement.review.title": "El pipeline se mueve",
    "engagement.review.copy": "Ves el movimiento semana a semana contra deals reales, no contra un reporte trimestral.",
    "form.eyebrow": "Reacción rápida por WhatsApp",
    "form.title": "Mándame tus números. Te digo qué me hace ruido.",
    "form.copy": "Reacción a tus números, gratis, en un día hábil. Sin llamada, sin deck.",
    "form.tag1": "Toma menos de 2 minutos",
    "form.tag2": "Founder-friendly",
    "form.tag3": "Sin deck, sin preparación",
    "fields.stage": "Etapa de tu compañía",
    "fields.name": "Nombre",
    "fields.startup": "Startup",
    "fields.email": "Email",
    "fields.linkedin": "LinkedIn (opcional)",
    "fields.monthlyRevenue": "Revenue mensual",
    "fields.ticketSize": "Ticket promedio",
    "fields.breakpoint": "Dónde se rompe el proceso comercial",
    "stage.placeholder": "Selecciona tu etapa",
    "stage.option1": "Pre-ingresos / sin clientes pagando",
    "stage.option2": "Tracción temprana (menos de $50K MRR)",
    "stage.option3": "Crecimiento ($50K–$300K MRR)",
    "stage.option4": "Listo para Series A ($300K+ MRR)",
    "form.responseTime": "Jorge revisa personalmente cada diagnóstico y responde en menos de 24 horas en días hábiles.",
    "prerevenue.eyebrow": "Todavía no",
    "prerevenue.title": "Gracias — Growth Expert trabaja con compañías que ya tienen clientes pagando.",
    "prerevenue.copy": "Mientras llegas a ese punto, aquí hay algunos recursos que pueden ayudarte.",
    "prerevenue.cta": "Leer el blog",
    "placeholders.name": "Jane Founder",
    "placeholders.startup": "Acme AI",
    "placeholders.email": "jane@acme.ai",
    "placeholders.linkedin": "https://linkedin.com/in/tunombre",
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
    "form.submit": "Mandar por WhatsApp",
    "footer.blog": "Blog",
    "message.intro": "Hola, quiero un diagnóstico de Revenue Unlock.",
    "message.stage": "Etapa",
    "message.name": "Nombre",
    "message.startup": "Startup",
    "message.email": "Email",
    "message.linkedin": "LinkedIn",
    "message.monthlyRevenue": "Revenue mensual",
    "message.ticketSize": "Ticket promedio",
    "message.breakpoint": "Dónde se rompe el proceso comercial",
  },
};

const form = document.querySelector("#whatsapp-form");
const translationNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
const forcedFormLanguage = form?.dataset.formLanguage || "";
let currentLanguage = forcedFormLanguage || DEFAULT_LANGUAGE;

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
  button.addEventListener("click", () => {
    const lang = button.dataset.langToggle;
    writeStoredLanguage(lang);
    translate(lang);
  });
});

translate(currentLanguage);

if (form) {
  const preRevenueNotice = document.getElementById("prerevenue-notice");
  const formSection = form.closest(".section--form");
  const formCopyBlock = formSection ? formSection.querySelector(".form-copy") : null;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const hasField = (name) => Boolean(form.elements.namedItem(name));

    // Stage qualification gate — pre-revenue prospects don't go to WhatsApp
    if (hasField("stage")) {
      const stageValue = (data.get("stage") || "").toString();
      if (stageValue === "pre-revenue" && preRevenueNotice) {
        form.hidden = true;
        if (formCopyBlock) formCopyBlock.hidden = true;
        preRevenueNotice.classList.add("is-visible");
        preRevenueNotice.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    const payload = {
      stage: (data.get("stage") || "").toString().trim(),
      name: (data.get("name") || "").toString().trim(),
      startup: (data.get("startup") || "").toString().trim(),
      email: (data.get("email") || "").toString().trim(),
      linkedin: (data.get("linkedin") || "").toString().trim(),
      monthlyRevenue: (data.get("monthlyRevenue") || "").toString().trim(),
      ticketSize: (data.get("ticketSize") || "").toString().trim(),
      breakpoint: (data.get("breakpoint") || "").toString().trim(),
    };

    const requiredFields = [
      ...(hasField("stage") ? [payload.stage] : []),
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

    const submissionLanguage = forcedFormLanguage || currentLanguage;
    const dictionary = getDictionary(submissionLanguage);
    const customIntro =
      submissionLanguage === "es"
        ? form.dataset.messageIntroEs || form.dataset.messageIntro
        : form.dataset.messageIntroEn || form.dataset.messageIntro;
    const revenueLabel =
      submissionLanguage === "es"
        ? form.dataset.messageMonthlyRevenueEs || dictionary["message.monthlyRevenue"]
        : form.dataset.messageMonthlyRevenueEn || dictionary["message.monthlyRevenue"];

    // Map stage value back to localized label for the message
    const stageLabelMap = {
      "pre-revenue": dictionary["stage.option1"],
      "early-traction": dictionary["stage.option2"],
      "growth": dictionary["stage.option3"],
      "series-a-ready": dictionary["stage.option4"],
    };
    const stageLabel = payload.stage ? (stageLabelMap[payload.stage] || payload.stage) : "";

    const lines = [
      customIntro || dictionary["message.intro"],
      "",
      ...(stageLabel ? [`${dictionary["message.stage"]}: ${stageLabel}`] : []),
      `${dictionary["message.name"]}: ${payload.name}`,
      `${dictionary["message.startup"]}: ${payload.startup}`,
      `${dictionary["message.email"]}: ${payload.email}`,
      ...(payload.linkedin ? [`${dictionary["message.linkedin"]}: ${payload.linkedin}`] : []),
      `${revenueLabel}: ${payload.monthlyRevenue}`,
      ...(payload.ticketSize ? [`${dictionary["message.ticketSize"]}: ${payload.ticketSize}`] : []),
      ...(payload.breakpoint ? [`${dictionary["message.breakpoint"]}: ${payload.breakpoint}`] : []),
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

// Header navigation: dropdown click-outside-to-close + Escape + mobile burger sheet
(function () {
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  dropdowns.forEach((details) => {
    document.addEventListener("click", (event) => {
      if (details.open && !details.contains(event.target)) {
        details.open = false;
      }
    });
    details.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && details.open) {
        details.open = false;
        const summary = details.querySelector("summary");
        if (summary) summary.focus();
      }
    });
  });

  const burger = document.querySelector(".nav-burger");
  const sheet = document.getElementById("mobile-nav-sheet");
  if (burger && sheet) {
    const closeSheet = () => {
      sheet.hidden = true;
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeSheet();
      } else {
        sheet.hidden = false;
        burger.setAttribute("aria-expanded", "true");
      }
    });
    sheet.addEventListener("click", (event) => {
      if (event.target === sheet) closeSheet();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !sheet.hidden) {
        closeSheet();
        burger.focus();
      }
    });
    sheet.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeSheet);
    });
  }
})();
