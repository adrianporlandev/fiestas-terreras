export interface ProgramaEvento {
  hora: string;
  descripcion: string;
}

export interface ProgramaDia {
  numero: string;
  nombre: string;
  fecha: string;
  theme: {
    badge: string;
    time: string;
    dot: string;
    bg: string;
  };
  eventos: ProgramaEvento[];
}

export const programaFiestas: ProgramaDia[] = [
  {
    numero: "1",
    nombre: "Viernes",
    fecha: "31 de Julio",
    theme: {
      badge: "from-blue-500 to-blue-600",
      time: "text-blue-600",
      dot: "bg-blue-500",
      bg: "from-blue-100 to-blue-200",
    },
    eventos: [
      {
        hora: "21:30h",
        descripcion: "Pregón de fiestas realizado por nuestro alcalde pedáneo",
      },
      {
        hora: "21:30h",
        descripcion: "Apertura de Chiringuito (Servicio de cenas, copas y bacalaos)",
      },
      {
        hora: "22:30h",
        descripcion: "Actuación jovenes promesas de Las Terreras",
      },
      {
        hora: "23:00h",
        descripcion: "A bailar con \"De Norte y Sur\"",
      },
      {
        hora: "01:30h",
        descripcion: "DJs Locales: \"DJ Francito\" – \"DJ Turry\"",
      },
    ],
  },
  {
    numero: "2",
    nombre: "Sábado",
    fecha: "1 de Agosto",
    theme: {
      badge: "from-green-500 to-green-600",
      time: "text-green-600",
      dot: "bg-green-500",
      bg: "from-green-100 to-green-200",
    },
    eventos: [
      {
        hora: "10:30h",
        descripcion: "Almuerzo Popular",
      },
      {
        hora: "10:30h",
        descripcion: "Moto Almuerzo para nuestros moteros (Habrá Rifas)",
      },
      {
        hora: "11:30h",
        descripcion: "Feria de día con el Chipirón de Granada",
      },
      {
        hora: "18:00h",
        descripcion: "Charanga (bocadillos y vino)",
      },
      {
        hora: "20:00h",
        descripcion: "Ruta de Senderismo con \"El León de Las Terreras\"",
      },
      {
        hora: "21:00h",
        descripcion: "A disfrutar con la actuación de \"Ainhoa Llamas\"",
      },
      {
        hora: "21:15h",
        descripcion: "Coronación de las Reinas de las Fiestas",
      },
      {
        hora: "23:30h",
        descripcion: "Seguimos con \"El Luiso\"",
      },
      {
        hora: "01:30h",
        descripcion: "Hasta el amanecer con \"DJ Francito\" & \"DJ Turry\"",
      },
    ],
  },
  {
    numero: "3",
    nombre: "Domingo",
    fecha: "2 de Agosto",
    theme: {
      badge: "from-red-500 to-red-600",
      time: "text-red-600",
      dot: "bg-red-500",
      bg: "from-red-100 to-red-200",
    },
    eventos: [
      {
        hora: "10:00h",
        descripcion: "Colchonetas, pintacaras y helados para los peques",
      },
      {
        hora: "12:00h",
        descripcion: "Fiesta de la Espuma",
      },
      {
        hora: "14:30h",
        descripcion: "Arroz popular para todo el pueblo",
      },
      {
        hora: "15:30h",
        descripcion: "Amenizado por la Rondalla de \"Miguel Angel\" (\"El Marquez\") ",
      },
      {
        hora: "19:00h",
        descripcion: "Misa en honor al Sagrado Corazón con presencia de Antonio \"El Andaluz\" y Miguel Angel \"El Marquez\"",
      },
      {
        hora: "21:00h",
        descripcion: "Actuación de \"Marisol Segura\"",
      },
      {
        hora: "22:30h",
        descripcion: "Cierre de \"Luis Bastida\"",
      },
    ],
  },
];
