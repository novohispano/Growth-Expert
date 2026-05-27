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
    "hero.title": "Your sales motion is leaking revenue.",
    "hero.lede": "Weekly work with you on the one fix moving revenue — pricing, close, or expansion — measured this month.",
    "hero.primaryCta": "Send your numbers",
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
    "testimonials.quote5": "\"Jorge has been key to my company's growth. He doesn't just listen — he gets involved in strategy and vision, bringing experience and clarity that lead to better decisions.\"",
    "about.eyebrow": "Why Jorge",
    "about.title": "I help early-stage startups fix GTM bottlenecks and grow revenue.",
    "about.copy": "I find where your GTM is breaking and run weekly experiments tied to revenue until the number moves.",
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
    "services.diagnostic.title": "Diagnostic · 90 min · $1,500",
    "services.diagnostic.copy": "Start here if you're not sure which program is for you",
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
    "explore.blog.expansion": "How to grow revenue with your current B2B customers",
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
    "form.eyebrow": "WhatsApp Triage",
    "form.title": "Send your numbers. I'll tell you what jumps out.",
    "form.copy": "Free reaction to your numbers within one business day. No call, no deck.",
    "form.tag1": "Takes under 2 minutes",
    "form.tag2": "Founder-friendly",
    "form.tag3": "No deck, no prep",
    "fields.arrBand": "Current ARR",
    "fields.name": "Name",
    "fields.email": "Email",
    "fields.breakpoint": "Sales Process Breakdown",
    "arrBand.placeholder": "Select your ARR",
    "arrBand.preRevenue": "Pre-revenue / no paying customers",
    "arrBand.lt1m": "Under $1M ARR",
    "arrBand.1m3m": "$1M – $3M ARR",
    "arrBand.3m5m": "$3M – $5M ARR",
    "arrBand.5mPlus": "$5M+ ARR",
    "form.responseTime": "Jorge personally reviews each triage and replies within 24 hours on weekdays.",
    "prerevenue.eyebrow": "Not yet",
    "prerevenue.title": "Thanks — Growth Expert works with companies that already have paying customers.",
    "prerevenue.copy": "You're not there yet, but these might help while you get there.",
    "prerevenue.cta": "Read the blog",
    "placeholders.name": "Jane Founder",
    "placeholders.email": "jane@acme.ai",
    "options.breakpointDefault": "Select the main issue",
    "options.breakpoint1": "Blocked pipeline",
    "options.breakpoint2": "Founder-led sales",
    "options.breakpoint3": "Extended sales cycles",
    "options.breakpoint4": "Underperforming pricing",
    "options.breakpoint5": "No upselling",
    "options.breakpoint6": "Other",
    "form.disclaimer": "On submit, WhatsApp opens with your intake. It lives in your browser history and your chat with me — don't use a shared device.",
    "form.privacyLink": "More on privacy →",
    "form.submit": "Send on WhatsApp",
    "footer.blog": "Blog",
    "footer.privacy": "Privacy",
    "message.intro": "Hi, I want a Revenue Unlock triage.",
    "message.arrBand": "ARR",
    "message.name": "Name",
    "message.email": "Email",
    "message.breakpoint": "Sales Process Breakdown",
    "privacy.eyebrow": "Privacy",
    "privacy.title": "Privacy",
    "privacy.metaDescription": "What I collect through this site, where it goes, how long I keep it, and how to get it deleted.",
    "privacy.lede": "I'm Jorge Téllez, the only person who reads what you send through this site.",
    "privacy.collect.title": "What I collect",
    "privacy.collect.whatsapp": "The WhatsApp Triage form (on the home page, country pages, and service pages) collects your name, email, ARR band, and what you say is breaking in your sales process.",
    "privacy.collect.intake": "The paid Diagnostic intake collects your name, company, email, ARR band, MRR growth band, pricing model, sales cycle, win rate, sales team size, primary lead source, and optionally a context link and a deck link.",
    "privacy.collect.noTracking": "I don't collect IP addresses, cookies, or analytics. There is no tracking pixel on this site.",
    "privacy.collect.purpose": "I use this data only to evaluate fit, prepare for our call, and run the engagement you booked. I don't repurpose it.",
    "privacy.destination.title": "Where it goes",
    "privacy.destination.whatsapp": "The WhatsApp Triage form builds a WhatsApp message that arrives in my chat with you. The data lives in your browser history and our chat thread.",
    "privacy.destination.web3forms": "The paid Diagnostic intake is posted through Web3Forms, a US-based form-delivery service, which forwards it straight to my email. Web3Forms acts only as transit; they don't analyze the content. Their privacy policy is here:",
    "privacy.destination.noTools": "Nothing goes to a CRM, marketing automation, or sales tool.",
    "privacy.destination.crossBorder": "By submitting either form, you consent to your data being transmitted to and stored in the United States — Web3Forms for the paid intake, and my email provider for both forms.",
    "privacy.retention.title": "How long I keep it",
    "privacy.retention.body": "I keep your intake email while we're in active conversation and for 90 days afterward in case we re-engage. After that, I delete the thread. If you want it gone sooner, email me at",
    "privacy.retention.bodyTail": " and I'll do it within 30 days.",
    "privacy.access.title": "Who has access",
    "privacy.access.body": "Just me. I don't share identifiable intake content with collaborators, contractors, or AI tools without your written consent.",
    "privacy.rights.title": "Your rights",
    "privacy.rights.body": "You can ask me at any time for a copy of what I have, a correction, or a deletion. Write to",
    "privacy.rights.bodyTail": " and I'll respond within 30 days. This is consistent with LATAM data-protection law — LFPDPPP (Mexico), Ley 1581 (Colombia), Ley 25.326 (Argentina), Ley 19.628 (Chile), and LGPD-equivalent rights wherever you are.",
    "privacy.rights.dpa": "You can also file a complaint with your local data-protection authority — INAI (México), SIC (Colombia), AAIP (Argentina), or the equivalent in your jurisdiction.",
    "privacy.updates.title": "Updates",
    "privacy.updates.body": "When this page changes, I'll re-date it at the top. Last updated: 2026-05-19.",
  },
  es: {
    "nav.programs": "Programas",
    "nav.blog": "Blog",
    "nav.menu": "Menú",
    "header.cta": "Reservar Mi Diagnóstico",
    "hero.eyebrow": "Founders B2B · $1M–$5M ARR · LATAM",
    "hero.title": "Tu pipeline no está roto. Tu motion de ventas sí.",
    "hero.lede": "Trabajo semanal, codo a codo con el founder, para arreglar lo que te está costando deals — pricing, cierre o expansión. Medido contra revenue que se mueve este mes, no contra slides.",
    "hero.primaryCta": "Manda tus números",
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
    "testimonials.quote5": "\"Jorge ha sido clave en el crecimiento de mi empresa. No solo escucha, también se involucra en la estrategia y visión del negocio, aportando experiencia y claridad para tomar mejores decisiones.\"",
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
    "services.diagnostic.title": "Diagnóstico · 90 min · $1,500 USD",
    "services.diagnostic.copy": "Empieza aquí si no sabes cuál programa es para ti",
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
    "explore.blog.expansion": "Cómo crecer revenue con tus clientes actuales en B2B",
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
    "form.eyebrow": "Triage por WhatsApp",
    "form.title": "Mándame tus números. Te digo qué me hace ruido.",
    "form.copy": "Reacción a tus números, gratis, en un día hábil. Sin llamada, sin deck.",
    "form.tag1": "Toma menos de 2 minutos",
    "form.tag2": "Founder-friendly",
    "form.tag3": "Sin deck, sin preparación",
    "fields.arrBand": "ARR actual",
    "fields.name": "Nombre",
    "fields.email": "Email",
    "fields.breakpoint": "Dónde se rompe el proceso comercial",
    "arrBand.placeholder": "Selecciona tu ARR",
    "arrBand.preRevenue": "Pre-ingresos / sin clientes pagando",
    "arrBand.lt1m": "Menos de $1M ARR",
    "arrBand.1m3m": "$1M – $3M ARR",
    "arrBand.3m5m": "$3M – $5M ARR",
    "arrBand.5mPlus": "$5M+ ARR",
    "form.responseTime": "Jorge revisa personalmente cada triage y responde en menos de 24 horas en días hábiles.",
    "prerevenue.eyebrow": "Todavía no",
    "prerevenue.title": "Gracias — Growth Expert trabaja con compañías que ya tienen clientes pagando.",
    "prerevenue.copy": "Mientras llegas a ese punto, aquí hay algunos recursos que pueden ayudarte.",
    "prerevenue.cta": "Leer el blog",
    "placeholders.name": "Jane Founder",
    "placeholders.email": "jane@acme.ai",
    "options.breakpointDefault": "Selecciona el problema principal",
    "options.breakpoint1": "Pipeline bloqueado",
    "options.breakpoint2": "Ventas lideradas por el founder",
    "options.breakpoint3": "Ciclos de venta extendidos",
    "options.breakpoint4": "Pricing subóptimo",
    "options.breakpoint5": "Sin upselling",
    "options.breakpoint6": "Otro",
    "form.disclaimer": "Al enviar, WhatsApp se abre con tu intake. Queda en tu historial del navegador y en tu chat conmigo — no lo abras en un dispositivo compartido.",
    "form.privacyLink": "Más sobre privacidad →",
    "form.submit": "Mandar por WhatsApp",
    "footer.blog": "Blog",
    "footer.privacy": "Privacidad",
    "message.intro": "Hola, quiero un triage de Revenue Unlock.",
    "message.arrBand": "ARR",
    "message.name": "Nombre",
    "message.email": "Email",
    "message.breakpoint": "Dónde se rompe el proceso comercial",
    "privacy.eyebrow": "Privacidad",
    "privacy.title": "Privacidad",
    "privacy.metaDescription": "Qué recolecto a través de este sitio, a dónde va, cuánto lo guardo y cómo pedir que lo borre.",
    "privacy.lede": "Soy Jorge Téllez, la única persona que lee lo que mandas por este sitio.",
    "privacy.collect.title": "Qué recolecto",
    "privacy.collect.whatsapp": "El formulario de Triage por WhatsApp (en la página de inicio, las páginas de país y las páginas de servicio) recolecta tu nombre, email, banda de ARR y lo que dices que se está rompiendo en tu proceso comercial.",
    "privacy.collect.intake": "El intake del Diagnóstico pagado recolecta tu nombre, empresa, email, banda de ARR, banda de crecimiento MRR, modelo de pricing, ciclo de venta, win rate, tamaño del equipo comercial, fuente principal de leads y, opcionalmente, un link de contexto y un link al deck.",
    "privacy.collect.noTracking": "No recolecto direcciones IP, ni cookies, ni analytics. No hay pixel de tracking en este sitio.",
    "privacy.collect.purpose": "Uso estos datos solo para evaluar fit, preparar nuestra llamada, y correr el engagement que reservaste. No los repurpose.",
    "privacy.destination.title": "A dónde va",
    "privacy.destination.whatsapp": "El formulario de Triage por WhatsApp arma un mensaje de WhatsApp que llega a mi chat contigo. Los datos viven en tu historial del navegador y en nuestro chat.",
    "privacy.destination.web3forms": "El intake del Diagnóstico pagado se envía vía Web3Forms, un servicio de entrega de formularios con sede en EE.UU., que lo reenvía directo a mi inbox. Web3Forms actúa solo como tránsito; no analiza el contenido. Su política de privacidad está aquí:",
    "privacy.destination.noTools": "Nada va a un CRM, a marketing automation ni a una herramienta de ventas.",
    "privacy.destination.crossBorder": "Al enviar cualquier formulario, consientes que tus datos viajen y se almacenen en Estados Unidos — Web3Forms para el intake pagado, y mi proveedor de email para ambos formularios.",
    "privacy.retention.title": "Cuánto lo guardo",
    "privacy.retention.body": "Conservo tu intake mientras estamos en conversación activa y 90 días después, por si retomamos. Después borro el hilo. Si quieres que lo borre antes, escríbeme a",
    "privacy.retention.bodyTail": " y lo hago en menos de 30 días.",
    "privacy.access.title": "Quién tiene acceso",
    "privacy.access.body": "Yo solo. No comparto contenido identificable del intake con colaboradores, contratistas, ni herramientas de IA sin tu consentimiento por escrito.",
    "privacy.rights.title": "Tus derechos",
    "privacy.rights.body": "Puedes pedirme en cualquier momento una copia de lo que tengo, que lo corrija o que lo borre. Escríbeme a",
    "privacy.rights.bodyTail": " y respondo en menos de 30 días. Esto es consistente con la legislación de protección de datos en LATAM — LFPDPPP (México), Ley 1581 (Colombia), Ley 25.326 (Argentina), Ley 19.628 (Chile) y derechos equivalentes a LGPD donde estés.",
    "privacy.rights.dpa": "También puedes presentar una queja ante tu autoridad local de protección de datos — INAI (México), SIC (Colombia), AAIP (Argentina), o el equivalente en tu jurisdicción.",
    "privacy.updates.title": "Actualizaciones",
    "privacy.updates.body": "Cuando esta página cambie, vuelvo a fechar arriba. Última actualización: 2026-05-19.",
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

    // Pre-revenue qualification gate — pre-revenue prospects don't go to WhatsApp
    const arrBandValue = (data.get("arrBand") || "").toString();
    if (arrBandValue === "pre-revenue" && preRevenueNotice) {
      form.hidden = true;
      if (formCopyBlock) formCopyBlock.hidden = true;
      preRevenueNotice.classList.add("is-visible");
      preRevenueNotice.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const payload = {
      arrBand: arrBandValue.trim(),
      name: (data.get("name") || "").toString().trim(),
      email: (data.get("email") || "").toString().trim(),
      breakpoint: (data.get("breakpoint") || "").toString().trim(),
    };

    const requiredFields = [
      payload.arrBand,
      payload.name,
      payload.email,
      payload.breakpoint,
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

    // Map arrBand value back to localized label for the message
    const arrBandLabelMap = {
      "pre-revenue": dictionary["arrBand.preRevenue"],
      "<1m": dictionary["arrBand.lt1m"],
      "1m-3m": dictionary["arrBand.1m3m"],
      "3m-5m": dictionary["arrBand.3m5m"],
      "5m+": dictionary["arrBand.5mPlus"],
    };
    const arrBandLabel = arrBandLabelMap[payload.arrBand] || payload.arrBand;

    const lines = [
      customIntro || dictionary["message.intro"],
      "",
      `${dictionary["message.arrBand"]}: ${arrBandLabel}`,
      `${dictionary["message.name"]}: ${payload.name}`,
      `${dictionary["message.email"]}: ${payload.email}`,
      `${dictionary["message.breakpoint"]}: ${payload.breakpoint}`,
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
