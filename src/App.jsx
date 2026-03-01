import React from 'react';

const fullItinerary = [
  { 
    fecha: "2 Mar", 
    lugar: "Ciudad de México", 
    clima: "☀️ 24°C / 9°C", 
    tipoClima: "calido", // calido, templado, frio, muyFrio
    recomendaciones: [
      "Ropa ligera para el día (camisa, jeans).",
      "Lleva una chamarra chamarra mediana para el vuelo largo (el avión es frío).",
      "Ten a la mano el pasaporte y documentos."
    ]
  },
  { 
    fecha: "3 Mar", 
    lugar: "Londres", 
    clima: "☁️ 16°C / 6°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Día de llegada. Capas: playera, suéter ligero y gabardina.",
      "Zapatos cómodos impermeables para empezar a explorar.",
      "El viento puede hacer que se sienta más frío."
    ]
  },
  { 
    fecha: "4 Mar", 
    lugar: "Londres", 
    clima: "🌦️ 16°C / 6°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Caminata larga por la ciudad.",
      "Lleva paraguas compacto obligatoriamente en la mochila.",
      "Usa botas cómodas o tenis que resistan la llovizna."
    ]
  },
  { 
    fecha: "5 Mar", 
    lugar: "Londres - París", 
    clima: "⛅ 18°C / 7°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Traslado en tren (Eurostar). Ropa cómoda por capas.",
      "Al llegar a París, una bufanda ligera ayudará contra la brisa.",
      "Chamarra de entretiempo (tipo mezclilla o piel) es ideal."
    ]
  },
  { 
    fecha: "6 Mar", 
    lugar: "París", 
    clima: "☁️ 18°C / 7°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Estilo parisino: gabardina sobre un suéter.",
      "Calzado muy cómodo para el Louvre/Torre Eiffel.",
      "Si entras a museos, querrás quitarte el abrigo, usa capas."
    ]
  },
  { 
    fecha: "7 Mar", 
    lugar: "París", 
    clima: "🌧️ 18°C / 7°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Pronóstico de lluvia. Chamarra impermeable con capucha.",
      "Evita zapatos de tela; usa botas o calzado de piel.",
      "Día ideal para actividades interiores (museos, cafés)."
    ]
  },
  { 
    fecha: "8 Mar", 
    lugar: "París - Luxemburgo - Frankfurt", 
    clima: "❄️ 9°C / 1°C", 
    tipoClima: "frio",
    recomendaciones: [
      "Viaje hacia el norte. El clima cambia a FRÍO.",
      "Usa un abrigo grueso, guantes y bufanda de lana.",
      "Ropa interior abrigadora si eres friolento."
    ]
  },
  { 
    fecha: "9 Mar", 
    lugar: "Frankfurt - Heidelberg - Zúrich", 
    clima: "🌨️ 10°C / 3°C", 
    tipoClima: "frio",
    recomendaciones: [
      "Manten el abrigo grueso y la bufanda puestos.",
      "Zapatos con buena suela (para el empedrado frío de Heidelberg).",
      "Ten a la mano la chamarra impermeable si nieva/llueve."
    ]
  },
  { 
    fecha: "10 Mar", 
    lugar: "Zúrich - Lucerna - Vaduz - Innsbruck", 
    clima: "🏔️ 4°C / -3°C", 
    tipoClima: "muyFrio",
    recomendaciones: [
      "Día más frío del viaje (Alpes). ROPA TÉRMICA obligatoria.",
      "Abrigo de invierno pesado, gorro, guantes y bufanda gruesa.",
      "Botas de invierno con calcetines de lana."
    ]
  },
  { 
    fecha: "11 Mar", 
    lugar: "Innsbruck - Padua - Venecia", 
    clima: "🌫️ 11°C / 1°C", 
    tipoClima: "frio",
    recomendaciones: [
      "Bajas de la montaña a la humedad. Se siente mucho frío.",
      "Chamarra acolchada (plumas) o rompevientos grueso.",
      "Venecia requiere caminar mucho; calzado impermeable por si acaso."
    ]
  },
  { 
    fecha: "12 Mar", 
    lugar: "Venecia - Roma", 
    clima: "🌤️ 18°C / 6°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Viaje al sur. El clima mejora notablemente.",
      "Puedes guardar el abrigo pesado y usar una chaqueta ligera.",
      "Lentes de sol listos para Roma."
    ]
  },
  { 
    fecha: "13 Mar", 
    lugar: "Roma", 
    clima: "☀️ 18°C / 6°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Clima muy agradable. Camisa y pantalones ligeros.",
      "Lleva una chamarra ligera para la noche o entrar a iglesias.",
      "Tenis muy cómodos para el Coliseo/Foro Romano."
    ]
  },
  { 
    fecha: "14 Mar", 
    lugar: "Roma", 
    clima: "☀️ 18°C / 6°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Mismo clima. Ropa de primavera (jeans, polo).",
      "Gorra o sombrero si estarás mucho tiempo bajo el sol.",
      "Bebe agua constantemente."
    ]
  },
  { 
    fecha: "15 Mar", 
    lugar: "Roma - Florencia", 
    clima: "🌤️ 17°C / 5°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Traslado en tren. Ropa cómoda.",
      "Un suéter ligero o cárdigan es suficiente para el día.",
      "Chaqueta de mezclilla o gabardina para la tarde."
    ]
  },
  { 
    fecha: "16 Mar", 
    lugar: "Florencia - Pisa - Niza", 
    clima: "☁️ 14°C / 4°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Se siente más fresco cerca de la costa (Niza).",
      "Suéter o chamarra mediana es necesaria.",
      "Bufanda ligera opcional si hace viento."
    ]
  },
  { 
    fecha: "17 Mar", 
    lugar: "Niza - Barcelona", 
    clima: "☀️ 15°C / 9°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Llegada a España. Clima mediterráneo agradable.",
      "Chamarra ligera sobre playera.",
      "Disfruta el sol, pero lleva algo ligero para la noche."
    ]
  },
  { 
    fecha: "18 Mar", 
    lugar: "Barcelona - Zaragoza - Madrid", 
    clima: "🌤️ 17°C / 7°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Traslado largo. Ropa muy cómoda para viajar.",
      "Madrid es seco; sentirás la diferencia con Barcelona.",
      "Chamarra ligera para cuando baje el sol en Madrid."
    ]
  },
  { 
    fecha: "19 Mar", 
    lugar: "Madrid", 
    clima: "☀️ 17°C / 7°C", 
    tipoClima: "templado",
    recomendaciones: [
      "Día de sol. Camisa, jeans y tenis.",
      "Una chaqueta o blazer para la noche (Madrid refresca).",
      "Prepara la maleta de regreso."
    ]
  },
  { 
    fecha: "20 Mar", 
    lugar: "Madrid - Ciudad de México", 
    clima: "☀️ 24°C / 9°C", 
    tipoClima: "calido",
    recomendaciones: [
      "Vuelo de regreso. Ropa muy cómoda.",
      "Usa la chamarra mediana para el avión y la llegada a CDMX.",
      "¡Buen viaje de vuelta!"
    ]
  },
];

// Función para obtener los estilos según el tipo de clima
const getWeatherStyles = (tipo) => {
  switch (tipo) {
    case 'muyFrio':
      return {
        bg: 'bg-cyan-50',
        border: 'border-cyan-300',
        text: 'text-cyan-900',
        iconBg: 'bg-cyan-100',
        label: 'Muy Frío'
      };
    case 'frio':
      return {
        bg: 'bg-blue-50',
        border: 'border-blue-300',
        text: 'text-blue-900',
        iconBg: 'bg-blue-100',
        label: 'Frío'
      };
    case 'calido':
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-300',
        text: 'text-orange-900',
        iconBg: 'bg-orange-100',
        label: 'Cálido'
      };
    case 'templado':
    default:
      return {
        bg: 'bg-amber-50',
        border: 'border-amber-300',
        text: 'text-amber-950',
        iconBg: 'bg-amber-100',
        label: 'Templado'
      };
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-6 px-3 font-sans text-slate-950">
      <header className="max-w-2xl mx-auto text-center mb-8 bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950 tracking-tight">
          🌍 Calendario de Viaje: Tío
        </h1>
        <p className="text-slate-600 mt-2 font-medium text-lg">Clima y Guía de Vestimenta - Marzo 2026</p>
        <div className="flex flex-wrap gap-2 justify-center mt-4 pt-4 border-t border-slate-100">
          <span className="px-3 py-1 bg-cyan-100 text-cyan-950 rounded-full text-xs font-bold">❄️ Muy Frío</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-950 rounded-full text-xs font-bold">🧥 Frío</span>
          <span className="px-3 py-1 bg-amber-100 text-amber-950 rounded-full text-xs font-bold">⛅ Templado</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-950 rounded-full text-xs font-bold">☀️ Cálido</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto relative border-l-4 border-indigo-100 ml-3 md:ml-auto pl-6 space-y-6">
        {fullItinerary.map((item, index) => {
          const styles = getWeatherStyles(item.tipoClima);
          
          return (
            <div key={index} className="relative group">
              {/* Punto en la línea de tiempo */}
              <span className={`absolute -left-[32px] top-1 ${styles.iconBg} w-6 h-6 rounded-full border-4 border-white shadow group-hover:scale-110 transition-transform`}></span>
              
              <div className={`bg-white p-5 rounded-2xl shadow border ${styles.border} transition-all`}>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <div>
                    <span className="text-sm font-bold text-indigo-700 tracking-wider uppercase">{item.fecha}</span>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">{item.lugar}</h3>
                  </div>
                  <div className={`text-center flex-shrink-0 px-3 py-1 rounded-lg ${styles.bg} border ${styles.border}`}>
                    <span className="text-3xl block">{item.clima.split(' ')[0]}</span>
                    <span className={`text-sm font-bold ${styles.text}`}>{item.clima.split(' ').slice(1).join(' ')}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <h4 className={`text-sm font-bold ${styles.text} uppercase tracking-wide mb-2 flex items-center gap-1.5`}>
                    <span className="text-base">🎒</span> Qué usar / Consideraciones:
                  </h4>
                  <ul className="space-y-1.5 list-inside">
                    {item.recomendaciones.map((rec, i) => (
                      <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="max-w-2xl mx-auto mt-12 p-6 bg-indigo-950 text-indigo-100 rounded-3xl shadow-xl text-center">
        <p className="font-bold text-lg">🏔️ Recordatorio Especial Alpes (10 Mar):</p>
        <p className="text-sm mt-1 opacity-90">Ese día es crucial usar la ropa térmica debajo de todo. ¡No lo olvides!</p>
      </footer>
    </div>
  );
};

export default App;