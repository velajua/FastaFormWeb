import { estimateFastaFormCost, estimateSubscriptionCost } from "./pricing.js";

const translations = {
  es: {
    "nav.workflow": "Flujo",
    "nav.pricing": "Precios",
    "nav.savings": "Ahorros",
    "nav.privacy": "Privacidad",
    "nav.terms": "Términos",
    "nav.home": "Inicio",
    "lang.label": "Idioma",
    "hero.eyebrow": "Captura de datos Android sin conexión",
    "hero.title": "Formularios de campo que siguen funcionando sin internet.",
    "hero.lede":
      "FastaForm importa definiciones .fstfrm, permite llenar y gestionar registros en el dispositivo, y exporta datos estructurados para revisión o reportes.",
    "hero.play": "Obtener en Google Play",
    "hero.workflow": "Ver cómo funciona",
    "hero.priceLabel": "Precio",
    "hero.priceValue": "20 USD por generación de credencial",
    "hero.accessLabel": "Acceso",
    "hero.accessValue": "Cada credencial puede desbloquear hasta 3 formularios",
    "hero.storageLabel": "Almacenamiento",
    "hero.storageValue": "Los registros permanecen locales salvo que se exporten",
    "workflow.eyebrow": "Cómo funciona",
    "workflow.title": "Captura controlada sin backend en vivo.",
    "workflow.body":
      "FastaForm está creado para operaciones de campo, inspecciones, admisiones, inventarios, encuestas y otros trabajos de captura móvil.",
    "workflow.step1Title": "Importa definiciones",
    "workflow.step1Body":
      "Carga archivos .fstfrm validados en dispositivos Android antes de que el equipo salga al campo.",
    "workflow.step2Title": "Genera credenciales limitadas",
    "workflow.step2Body":
      "Emite credenciales vinculadas a IDs de formulario para limitar el acceso a lo que cada equipo necesita.",
    "workflow.step3Title": "Llena registros sin conexión",
    "workflow.step3Body":
      "Guarda borradores, envía registros completos y corrige envíos cuando se necesita seguimiento.",
    "workflow.step4Title": "Revisa y exporta",
    "workflow.step4Body":
      "Revisa los registros en el dispositivo y luego exporta los datos para reportes o flujos externos.",
    "screens.eyebrow": "Dentro de la app",
    "screens.title": "Diseñada alrededor del flujo real de campo.",
    "screens.manual": "Manual y guía para crear formularios",
    "screens.builder": "Constructor y validación de formularios",
    "screens.amend": "Corrección de registros enviados",
    "screens.explore": "Resúmenes y exportaciones",
    "pricing.eyebrow": "Precios",
    "pricing.title": "Acceso simple por proyecto.",
    "pricing.body":
      "FastaForm cobra 20 USD por generación de credencial. Una credencial generada puede desbloquear hasta 3 formularios, evitando que proyectos pequeños o temporales se conviertan en pagos recurrentes por usuario.",
    "pricing.priceLabel": "USD por generación de credencial",
    "pricing.item1": "Hasta 3 IDs de formulario por credencial",
    "pricing.item2": "Llenado de formularios Android sin conexión",
    "pricing.item3": "Borradores, registros enviados, correcciones, vistas previas y exportaciones locales",
    "pricing.item4": "No requiere backend administrado por el desarrollador para los registros capturados",
    "comparison.eyebrow": "Modelo de ahorro empresarial",
    "comparison.title": "Usa un costo por credencial cuando una suscripción por usuario es excesiva.",
    "comparison.body":
      "Las plataformas de encuestas por suscripción son potentes, pero muchos equipos solo necesitan captura sin conexión para pocos formularios. Esta calculadora compara ejemplos públicos de suscripción contra la generación de credenciales de FastaForm.",
    "calculator.users": "Usuarios de campo",
    "calculator.forms": "Formularios necesarios",
    "calculator.months": "Meses a comparar",
    "calculator.result": "Costo estimado de FastaForm",
    "table.model": "Modelo",
    "table.example": "Ejemplo publicado",
    "table.cost": "Costo estimado",
    "table.diff": "Diferencia vs FastaForm",
    "table.surveyctoExample": "$225/mes con suscripción anual; 100 formularios, usuarios/dispositivos ilimitados, 5,000 envíos mensuales",
    "table.surveymonkeyAdvantage": "$30/usuario/mes, desde 3 usuarios, facturado anualmente",
    "table.surveymonkeyPremier": "$92/usuario/mes, desde 3 usuarios, facturado anualmente",
    "table.typeformPlus": "$59/mes, 3 usuarios, 1,000 respuestas/mes incluidas",
    "table.jotformSilver": "$39/mes facturado anualmente, 1 usuario, 50 formularios, 2,500 envíos/mes",
    "comparison.more": "más",
    "comparison.less": "menos",
    "source.note":
      "Los ejemplos de precios se revisaron en páginas públicas el 31 de mayo de 2026: SurveyCTO, SurveyMonkey, Typeform, Jotform y Google Workspace. Los precios actuales de cada proveedor pueden cambiar.",
    "cta.title": "Activa captura de datos de campo con una sola app Android sin conexión.",
    "cta.play": "Abrir FastaForm en Google Play",
    "footer.tagline": "Offline Android forms for field teams.",
    "footer.terms": "Términos y condiciones",
    "footer.privacy": "Política de privacidad",
    "privacy.title": "Política de privacidad de FastaForm",
    "privacy.short": "Política de privacidad de FastaForm",
    "privacy.effective": "Fecha de entrada en vigor: 30 de mayo de 2026",
    "privacy.intro":
      "FastaForm es una aplicación móvil de captura de formularios sin conexión. Permite importar definiciones de formularios, ingresar registros, guardar borradores, enviar registros, corregir registros, previsualizar datos, exportar archivos y generar credenciales limitadas.",
    "privacy.deviceTitle": "Datos almacenados en el dispositivo",
    "privacy.deviceBody":
      "FastaForm almacena datos de la app localmente en el dispositivo del usuario, incluidas definiciones importadas, borradores, registros enviados, diagnósticos, archivos de credenciales generados y credenciales recordadas si el usuario activa esa opción. La app usa asistentes de almacenamiento cifrado local antes de escribir datos en el almacenamiento del dispositivo.",
    "privacy.collectedTitle": "Datos recopilados por el desarrollador",
    "privacy.collectedBody":
      "FastaForm no opera un backend administrado por el desarrollador para recopilar registros, formularios importados, credenciales, borradores, exportaciones, fotos, audio, ubicaciones ni archivos de diagnóstico. Los datos ingresados en la app permanecen en el dispositivo salvo que el usuario decida exportarlos, compartirlos, copiarlos o transmitirlos fuera de la app.",
    "privacy.permissionsTitle": "Permisos",
    "privacy.permissionsIntro": "FastaForm puede solicitar permisos del dispositivo según las funciones usadas por el formulario:",
    "privacy.permissionCamera": "Cámara: se usa para capturar fotos o escanear códigos en campos de formulario.",
    "privacy.permissionLocation": "Ubicación: se usa cuando un formulario solicita registrar información de ubicación.",
    "privacy.permissionMicrophone": "Micrófono: se usa cuando un formulario incluye captura de audio.",
    "privacy.permissionStorage": "Almacenamiento o acceso a archivos: se usa para importar archivos .fstfrm y exportar registros o archivos.",
    "privacy.permissionInternet": "Internet: se usa para Google Play Billing y servicios de plataforma de la app.",
    "privacy.paymentsTitle": "Pagos",
    "privacy.paymentsBody":
      "FastaForm puede usar Google Play Billing para generar credenciales. El procesamiento de pagos lo gestiona Google Play. FastaForm no recibe ni almacena datos completos de tarjetas de pago.",
    "privacy.controlTitle": "Control del usuario",
    "privacy.controlBody":
      "Los usuarios pueden eliminar datos de la app borrando registros, borradores, formularios importados, exportaciones y credenciales recordadas dentro de la app cuando esté disponible, o borrando el almacenamiento de la app o desinstalándola desde los ajustes de Android.",
    "privacy.exportsTitle": "Exportaciones y uso compartido",
    "privacy.exportsBody":
      "Si un usuario exporta, comparte, copia, sube, envía por correo o transmite datos de la app fuera de FastaForm, ese manejo externo queda bajo control del usuario, su organización y los servicios o dispositivos de terceros involucrados.",
    "privacy.orgTitle": "Responsabilidad organizacional",
    "privacy.orgBody":
      "Los equipos que usan FastaForm son responsables de la recopilación legal de datos, consentimiento, avisos de privacidad, controles de acceso al dispositivo, copias de seguridad, exportaciones, retención, eliminación y cualquier obligación sobre PII, datos de salud, HIPAA o regulaciones locales aplicables a sus formularios y registros.",
    "privacy.childrenTitle": "Menores",
    "privacy.childrenBody":
      "FastaForm está destinada a flujos de recopilación de datos organizacionales y de campo. No está dirigida a menores.",
    "privacy.changesTitle": "Cambios",
    "privacy.changesBody":
      "Esta política puede actualizarse cuando cambien la app, los permisos, el flujo de pagos o el manejo de datos. La fecha de entrada en vigor indica la versión actual.",
    "privacy.contactTitle": "Contacto",
    "privacy.contactBody":
      "Para preguntas de privacidad sobre FastaForm, contacta al desarrollador de la app o a la organización que te proporcionó formularios y credenciales.",
    "terms.title": "Términos y condiciones de FastaForm",
    "terms.effective": "Fecha de entrada en vigor: 31 de mayo de 2026",
    "terms.intro":
      "Al usar FastaForm, aceptas estos Términos y condiciones. Si usas FastaForm en nombre de una organización, declaras que tienes autoridad para usar la app en los flujos de trabajo de esa organización.",
    "terms.providesTitle": "Qué ofrece FastaForm",
    "terms.providesBody":
      "FastaForm es una aplicación Android de captura de formularios sin conexión para importar definiciones .fstfrm, llenar registros, guardar borradores, corregir registros enviados, previsualizar datos, exportar archivos y generar credenciales limitadas.",
    "terms.credentialTitle": "Uso de credenciales",
    "terms.credentialBody":
      "Las credenciales están limitadas a IDs de formulario coincidentes y pueden desbloquear hasta 3 formularios. Los usuarios son responsables de almacenar, distribuir y rastrear las credenciales generadas después de crearlas. No compartas credenciales fuera del equipo o proyecto autorizado.",
    "terms.dataTitle": "Responsabilidad sobre formularios y datos",
    "terms.dataBody":
      "Tú y tu organización son responsables de la recopilación legal de datos, consentimiento, avisos de privacidad, controles de acceso al dispositivo, copias de seguridad, exportaciones, retención, eliminación y cualquier obligación sobre PII, datos de salud, HIPAA o regulaciones locales aplicables a sus formularios y registros.",
    "terms.testingTitle": "Pruebas antes del trabajo de campo",
    "terms.testingBody":
      "Los formularios importados deben revisarse y probarse antes de desplegarlos en campo. Eres responsable de verificar que la lógica del formulario, campos obligatorios, exportaciones, etiquetas, traducciones y alcances de credenciales coincidan con el flujo previsto.",
    "terms.storageTitle": "Almacenamiento local y exportaciones",
    "terms.storageBody":
      "FastaForm almacena datos de la app localmente en el dispositivo mediante asistentes de almacenamiento cifrado cuando están disponibles. El cifrado no reemplaza controles de seguridad organizacionales, gestión segura de dispositivos, copias de seguridad ni revisión legal. Los datos exportados, compartidos, copiados, subidos o enviados por correo fuera de FastaForm quedan bajo control tuyo, de tu organización y de los servicios o dispositivos de terceros involucrados.",
    "terms.paymentsTitle": "Pagos",
    "terms.paymentsBody":
      "La generación de credenciales puede usar Google Play Billing. El procesamiento de pagos lo gestiona Google Play, y la disponibilidad de pago puede depender del acceso a la red, estado del dispositivo, configuración de la cuenta de Google y disponibilidad regional de la tienda.",
    "terms.referencesTitle": "Referencias de clientes",
    "terms.referencesBody":
      "Al usar FastaForm, permites que FastaForm y su desarrollador te identifiquen a ti o a tu organización como cliente de FastaForm en listas públicas de clientes, secciones de clientes, presentaciones y materiales de marketing. Este permiso se limita a identificar la relación de cliente y no permite divulgar el contenido de tus formularios, registros, credenciales, datos operativos privados ni archivos exportados.",
    "terms.availabilityTitle": "Sin disponibilidad garantizada",
    "terms.availabilityBody":
      "FastaForm se proporciona para flujos de captura de datos de campo sin un backend de registros administrado por el desarrollador. La app, el sitio web, los precios, el flujo de pagos y las funciones pueden cambiar con el tiempo.",
    "terms.privacyTitle": "Privacidad",
    "terms.privacyBody": "La Política de privacidad de FastaForm explica el almacenamiento local, permisos, exportaciones, pagos y responsabilidad organizacional. Revísala en ",
    "terms.privacyLink": "Política de privacidad de FastaForm",
    "terms.changesTitle": "Cambios",
    "terms.changesBody":
      "Estos términos pueden actualizarse cuando cambien la app, el sitio web, los pagos o el manejo de datos. La fecha de entrada en vigor indica la versión actual."
  }
};

const pageMeta = {
  es: {
    home: {
      title: "FastaForm | Formularios Android sin conexión para equipos de campo",
      description:
        "FastaForm es una app Android sin conexión para importar, llenar, exportar y gestionar datos de campo estructurados."
    },
    privacy: {
      title: "Política de privacidad de FastaForm",
      description: "Política de privacidad para la app Android FastaForm."
    },
    terms: {
      title: "Términos y condiciones de FastaForm",
      description: "Términos y condiciones para la app Android FastaForm."
    }
  },
  en: {
    home: {
      title: "FastaForm | Offline mobile forms for field teams",
      description:
        "FastaForm is an offline Android form-entry app for importing, filling, exporting, and managing scoped field data."
    },
    privacy: {
      title: "FastaForm Privacy Policy",
      description: "Privacy Policy for the FastaForm Android app."
    },
    terms: {
      title: "FastaForm Terms and Conditions",
      description: "Terms and Conditions for the FastaForm Android app."
    }
  }
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const defaultLanguage = "en";
let currentLanguage = localStorage.getItem("fastaform-language") || defaultLanguage;

function pageKey() {
  return document.body.dataset.page || "home";
}

function translateElement(element, language) {
  const key = element.dataset.i18n;
  const value = translations[language]?.[key];

  if (language === defaultLanguage || !value) {
    if (element.dataset.i18nDefault !== undefined) {
      element.textContent = element.dataset.i18nDefault;
    }
    return;
  }

  element.textContent = value;
}

function updateMeta(language) {
  const meta = pageMeta[language]?.[pageKey()];
  if (!meta) {
    return;
  }

  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
}

function setLanguage(language) {
  currentLanguage = language === "es" ? "es" : defaultLanguage;
  localStorage.setItem("fastaform-language", currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => translateElement(element, currentLanguage));
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isSelected = button.dataset.languageOption === currentLanguage;
    button.classList.toggle("is-active", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });

  updateMeta(currentLanguage);
  updateCalculator();
}

document.querySelectorAll("[data-i18n]").forEach((element) => {
  element.dataset.i18nDefault = element.textContent;
});

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
});

const usersInput = document.querySelector("#users");
const formsInput = document.querySelector("#forms");
const monthsInput = document.querySelector("#months");
const fastaformCost = document.querySelector("#fastaformCost");
const rows = document.querySelectorAll(".comparison-table .table-row:not(.table-head)");

function numericValue(input, fallback) {
  const value = Number.parseInt(input.value, 10);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}

function updateCalculator() {
  if (!usersInput || !formsInput || !monthsInput || !fastaformCost) {
    return;
  }

  const users = numericValue(usersInput, 1);
  const forms = numericValue(formsInput, 1);
  const months = numericValue(monthsInput, 12);
  const fastaformTotal = estimateFastaFormCost({ users, forms });
  const more = translations[currentLanguage]?.["comparison.more"] || "more";
  const less = translations[currentLanguage]?.["comparison.less"] || "less";

  fastaformCost.textContent = currency.format(fastaformTotal);

  rows.forEach((row) => {
    const subscriptionTotal = estimateSubscriptionCost({
      users,
      forms,
      months,
      monthlyUserPrice: row.dataset.monthlyUserPrice,
      flatMonthlyPrice: row.dataset.flatMonthlyPrice,
      minUsers: row.dataset.minUsers,
      includedUsers: row.dataset.includedUsers,
      includedForms: row.dataset.includedForms
    });
    const difference = subscriptionTotal - fastaformTotal;

    row.querySelector("[data-cost]").textContent = currency.format(subscriptionTotal);
    row.querySelector("[data-difference]").textContent =
      difference >= 0 ? `${currency.format(difference)} ${more}` : `${currency.format(Math.abs(difference))} ${less}`;
  });
}

if (usersInput && formsInput && monthsInput) {
  [usersInput, formsInput, monthsInput].forEach((input) => {
    input.addEventListener("input", updateCalculator);
    input.addEventListener("change", updateCalculator);
  });
}

setLanguage(currentLanguage);
