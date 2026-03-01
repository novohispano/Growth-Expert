const WHATSAPP_NUMBER = "528125678257";
const DEFAULT_LANGUAGE = navigator.language.toLowerCase().startsWith("es") ? "es" : "en";

const translations = {
  en: {
    "header.cta": "Start the diagnostic",
    "hero.eyebrow": "For Seed and Series A B2B startups with traction",
    "hero.title": "Unlock stalled revenue with hands-on GTM execution.",
    "hero.lede": "Built for founders already generating revenue who know the sales machine is underperforming, but do not need another 50-slide deck.",
    "hero.primaryCta": "Get a WhatsApp diagnosis",
    "hero.secondaryCta": "See how it works",
    "hero.stats.mrr": "Ideal MRR range",
    "hero.stats.weeklyLabel": "Weekly",
    "hero.stats.weekly": "Revenue problem-solving rhythm",
    "hero.stats.executionLabel": "Execution-first",
    "hero.stats.execution": "Close, pricing, and expansion workstreams",
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
    "program.eyebrow": "What this is",
    "program.title": "A monthly operating program to identify and remove GTM bottlenecks.",
    "program.copy": "This is not advisory theatre. The work is practical, iterative, and tied directly to revenue movement inside a real sales process.",
    "principles.close.title": "Close",
    "principles.close.copy": "Improve win rate, unblock objections, and shorten the path to signature.",
    "principles.pricing.title": "Pricing",
    "principles.pricing.copy": "Refine packaging and pricing so each deal lands at a stronger ACV.",
    "principles.expansion.title": "Expansion",
    "principles.expansion.copy": "Create repeatable upsell motions, add-ons, and account growth triggers.",
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
    "form.eyebrow": "Interactive intake",
    "form.title": "Send a structured brief on WhatsApp.",
    "form.copy": "Share your revenue profile and where the sales process feels broken. The form generates a WhatsApp message with all the context needed to start a high-signal conversation.",
    "form.flowLabel": "Flow:",
    "form.flowCopy": "fill the fields, review the summary, then open WhatsApp.",
    "fields.name": "Name",
    "fields.startup": "Startup",
    "fields.email": "Email",
    "fields.monthlyRevenue": "Monthly Revenue",
    "fields.ticketSize": "Average Ticket Size",
    "fields.breakpoint": "Sales Process Breakdown",
    "fields.implementer": "Who implements changes?",
    "fields.context": "Context",
    "placeholders.name": "Jane Founder",
    "placeholders.startup": "Acme AI",
    "placeholders.email": "jane@acme.ai",
    "placeholders.monthlyRevenue": "$35,000 MRR",
    "placeholders.ticketSize": "$4,500 ACV",
    "placeholders.context": "Add any useful context: ICP, sales cycle length, current bottleneck, recent experiments, or why growth feels stuck.",
    "options.breakpointDefault": "Select the main issue",
    "options.breakpoint1": "Pipeline quality",
    "options.breakpoint2": "Discovery and qualification",
    "options.breakpoint3": "Demo to proposal conversion",
    "options.breakpoint4": "Closing enterprise deals",
    "options.breakpoint5": "Pricing and packaging",
    "options.breakpoint6": "Upsell and expansion",
    "options.implementerDefault": "Choose an owner",
    "options.implementer1": "Founder",
    "options.implementer2": "Head of Sales",
    "options.implementer3": "Revenue / Growth lead",
    "options.implementer4": "Sales team",
    "options.implementer5": "Cross-functional team",
    "form.disclaimer": "WhatsApp opens with the configured consulting number and the prospect's intake summary.",
    "form.submit": "Open WhatsApp",
    "message.intro": "Hi, I want a Revenue Unlock diagnostic.",
    "message.name": "Name",
    "message.startup": "Startup",
    "message.email": "Email",
    "message.monthlyRevenue": "Monthly Revenue",
    "message.ticketSize": "Average Ticket Size",
    "message.breakpoint": "Sales Process Breakdown",
    "message.implementer": "Who implements changes",
    "message.context": "Context",
  },
  es: {
    "header.cta": "Iniciar diagnóstico",
    "hero.eyebrow": "Para startups B2B Seed y Series A con tracción",
    "hero.title": "Destraba ingresos con ejecución GTM práctica y directa.",
    "hero.lede": "Pensado para founders con revenue que saben que su proceso comercial no está rindiendo, pero no necesitan otra presentación de 50 slides.",
    "hero.primaryCta": "Recibir diagnóstico por WhatsApp",
    "hero.secondaryCta": "Ver cómo funciona",
    "hero.stats.mrr": "Rango ideal de MRR",
    "hero.stats.weeklyLabel": "Semanal",
    "hero.stats.weekly": "Ritmo de resolución de problemas de revenue",
    "hero.stats.executionLabel": "Ejecución real",
    "hero.stats.execution": "Frentes de cierre, pricing y expansión",
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
    "program.eyebrow": "De qué se trata",
    "program.title": "Un programa operativo mensual para detectar y remover cuellos de botella en GTM.",
    "program.copy": "No es consultoría teórica. El trabajo es práctico, iterativo y conectado directamente con movimiento real de revenue.",
    "principles.close.title": "Cierre",
    "principles.close.copy": "Mejora el win rate, destraba objeciones y acorta el camino a la firma.",
    "principles.pricing.title": "Pricing",
    "principles.pricing.copy": "Optimiza packaging y pricing para que cada deal cierre con mejor ACV.",
    "principles.expansion.title": "Expansión",
    "principles.expansion.copy": "Crea motions repetibles de upsell, add-ons y crecimiento por cuenta.",
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
    "form.eyebrow": "Intake interactivo",
    "form.title": "Envía un brief estructurado por WhatsApp.",
    "form.copy": "Comparte tu perfil de revenue y dónde sientes que el proceso comercial se rompe. El formulario genera un mensaje de WhatsApp con el contexto suficiente para iniciar una conversación útil.",
    "form.flowLabel": "Flujo:",
    "form.flowCopy": "llena los campos, revisa el resumen y abre WhatsApp.",
    "fields.name": "Nombre",
    "fields.startup": "Startup",
    "fields.email": "Email",
    "fields.monthlyRevenue": "Revenue mensual",
    "fields.ticketSize": "Ticket promedio",
    "fields.breakpoint": "Dónde se rompe el proceso comercial",
    "fields.implementer": "Quién implementaría los cambios",
    "fields.context": "Contexto",
    "placeholders.name": "Jane Founder",
    "placeholders.startup": "Acme AI",
    "placeholders.email": "jane@acme.ai",
    "placeholders.monthlyRevenue": "$35,000 MRR",
    "placeholders.ticketSize": "$4,500 ACV",
    "placeholders.context": "Agrega contexto útil: ICP, duración del ciclo comercial, cuello de botella actual, experimentos recientes o por qué sientes que el crecimiento se frenó.",
    "options.breakpointDefault": "Selecciona el problema principal",
    "options.breakpoint1": "Calidad del pipeline",
    "options.breakpoint2": "Discovery y calificación",
    "options.breakpoint3": "Conversión de demo a propuesta",
    "options.breakpoint4": "Cierre de deals enterprise",
    "options.breakpoint5": "Pricing y packaging",
    "options.breakpoint6": "Upsell y expansión",
    "options.implementerDefault": "Elige un owner",
    "options.implementer1": "Founder",
    "options.implementer2": "Head of Sales",
    "options.implementer3": "Líder de Revenue / Growth",
    "options.implementer4": "Equipo comercial",
    "options.implementer5": "Equipo cross-functional",
    "form.disclaimer": "WhatsApp se abre con el número configurado y el resumen del intake del prospecto.",
    "form.submit": "Abrir WhatsApp",
    "message.intro": "Hola, quiero un diagnóstico de Revenue Unlock.",
    "message.name": "Nombre",
    "message.startup": "Startup",
    "message.email": "Email",
    "message.monthlyRevenue": "Revenue mensual",
    "message.ticketSize": "Ticket promedio",
    "message.breakpoint": "Dónde se rompe el proceso comercial",
    "message.implementer": "Quién implementaría los cambios",
    "message.context": "Contexto",
  },
};

const form = document.querySelector("#whatsapp-form");
const translationNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const languageButtons = document.querySelectorAll("[data-lang-toggle]");
let currentLanguage = DEFAULT_LANGUAGE;

function translate(lang) {
  const dictionary = translations[lang] || translations.en;
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
    const payload = {
      name: (data.get("name") || "").toString().trim(),
      startup: (data.get("startup") || "").toString().trim(),
      email: (data.get("email") || "").toString().trim(),
      monthlyRevenue: (data.get("monthlyRevenue") || "").toString().trim(),
      ticketSize: (data.get("ticketSize") || "").toString().trim(),
      breakpoint: (data.get("breakpoint") || "").toString().trim(),
      implementer: (data.get("implementer") || "").toString().trim(),
      context: (data.get("context") || "").toString().trim(),
    };

    const requiredFields = [
      payload.name,
      payload.startup,
      payload.email,
      payload.monthlyRevenue,
      payload.ticketSize,
      payload.breakpoint,
      payload.implementer,
    ];

    if (requiredFields.some((value) => !value)) {
      form.reportValidity();
      return;
    }

    const dictionary = translations[currentLanguage] || translations.en;
    const lines = [
      dictionary["message.intro"],
      "",
      `${dictionary["message.name"]}: ${payload.name}`,
      `${dictionary["message.startup"]}: ${payload.startup}`,
      `${dictionary["message.email"]}: ${payload.email}`,
      `${dictionary["message.monthlyRevenue"]}: ${payload.monthlyRevenue}`,
      `${dictionary["message.ticketSize"]}: ${payload.ticketSize}`,
      `${dictionary["message.breakpoint"]}: ${payload.breakpoint}`,
      `${dictionary["message.implementer"]}: ${payload.implementer}`,
    ];

    if (payload.context) {
      lines.push(`${dictionary["message.context"]}: ${payload.context}`);
    }

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}
