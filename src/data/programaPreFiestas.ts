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
    nombre: "Sábado",
    fecha: "25 de Julio",
    theme: {
      badge: "from-blue-500 to-blue-600",
      time: "text-blue-600",
      dot: "bg-blue-500",
      bg: "from-blue-100 to-blue-200",
    },
    eventos: [
      {
        hora: "17:00h",
        descripcion: "\"Torneo de Petanca\"",
      },
      {
        hora: "17:00h",
        descripcion: "Se reservara el 10 % de lo recaudado para gastos de la mesa.",
      },
      {
        hora: "17:00h",
        descripcion: "Habra platos de migas para todos los asistentes que quieran por 6€ ",
      },
      {
        hora: "20:00h",
        descripcion: "Comenzamos nuestro tardeo en compañía de \"D'Antaño\"",
      },
      {
        hora: "20:00h",
        descripcion: "Colchonetas gratis para los más peques",
      },
      {
        hora: "20:00h",
        descripcion: "Servicio de plancha y copas",
      },
      {
        hora: "00:00h",
        descripcion: "Concurso de Migas (Se daran tropezones y harina)",
      }
    ],
  },
 
];
