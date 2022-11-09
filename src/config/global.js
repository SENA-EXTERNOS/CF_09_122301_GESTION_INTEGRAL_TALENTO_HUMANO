export default {
  global: {
    componenteFormativo: 'Programa de inducción y sus componentes',
    descripcionCurso:
      'El programa de inducción es estructurado desde el área de recursos humanos para dar respuesta a las orientaciones, actividades o procesos planteados desde la planeación estratégica de la empresa. Dicha planeación brinda los parámetros para la realización del programa, y es estructurado para el cumplimiento de los objetivos institucionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Programa de inducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recursos empresariales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Comunicación asertiva',
      referencia:
        'Flores-Carretero, E. (s. f). 7 <i>estrategias de comunicación asertiva en el trabajo para mejorar el clima laboral.</i> ',
      tipo: 'Blog',
      link:
        'Comunicación asertiva en el trabajo: 7 estrategias exitosas (ieie.eu)',
    },
    {
      tema: 'Normatividad y condiciones generales',
      referencia:
        'Decreto 1567 de 1998 [Departamento Administrativo de la Función Pública] <i>Creación del sistema nacional de capacitación y de estímulos para los empleados del Estado.</i> 5 de agosto de 1998.',
      tipo: 'Decreto',
      LINK: '',
    },
    {
      tema: 'Normatividad y condiciones generales',
      referencia:
        'Decreto 1083 de 2015 Departamento Administrativo de la Función Pública. <i>Inducción como el periodo de prueba de un empleado en su puesto de trabajo.</i> 26 de mayo de 2005. Última actualización, 3 de agosto de 2022.',
      tipo: 'Decreto',
      link: '',
    },
    {
      tema: 'Registro de calidad',
      referencia:
        'Norma Técnica Colombiana NTC-ISO9001 de 2015 [ICONTEC] Gestión y aseguramiento de la calidad.',
      tipo: 'Norma técnica',
      LINK: 'asasas',
    },
  ],
  glosario: [
    {
      termino: 'Antecedentes',
      significado:
        'acciones previas que sirven como referente para los nuevos procesos a desarrollar.',
    },
    {
      termino: 'Comunicación asertiva',
      significado:
        'habilidad cuya comunicación se fundamenta en el respeto, permite expresar sentimientos y pensamientos sin vulnerar a los otros; además, crea límites para evitar abusos o maltratos.',
    },
    {
      termino: 'Departamento',
      significado:
        'área de trabajo definida desde la alta gerencia por medio de la planeación estratégica, donde se realiza la distribución de tareas por equipos de trabajo con funciones específicas.',
    },
    {
      termino: 'Dirección',
      significado:
        'corresponde al cargo más alto dentro del organigrama, de donde surge y se desarrolla la planeación estratégica.',
    },
    {
      termino: 'Empatía',
      significado:
        'habilidad comunicacional que permite ponerse en los zapatos de las otras personas, entender sus pensamientos, comportamientos y acciones.',
    },
    {
      termino: 'Estrategia',
      significado:
        'metodología utilizada dentro de la empresa para la consecución de los objetivos institucionales. ',
    },
    {
      termino: 'Etapa',
      significado:
        'fase de un proceso en donde determinado equipo de trabajo desarrolla actividades específicas.',
    },
    {
      termino: 'Intergrupal',
      significado:
        'relación que se da entre los grupos que comparten la misma organización; por ejemplo, mala comunicación entre el departamento financiero, el departamento de comunicaciones y el departamento de recursos humanos.',
    },
    {
      termino: 'Intragrupal',
      significado:
        'hace referencia a los integrantes de un mismo grupo. Ejemplo: Conflicto comunicacional entre los miembros del equipo del departamento financiero.',
    },
    {
      termino: 'Metodología',
      significado:
        'herramienta que define las pautas y los procedimientos de la empresa, es aplicada en todos los procesos desarrollados.',
    },
    {
      termino: 'Plan',
      significado:
        'pasos e ideas estructuradas que se siguen para llevar a cabo una acción.',
    },
    {
      termino: 'Procesos',
      significado:
        'conjunto de actividades diseñadas para ayudar la empresa a alcanzar los objetivos propuestos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barzaga-Sablón, O. S., Pincay, H. J. J. V., Nevárez-Barberán, J. V., & Cobeña, M. V. A. (2019). <i>Gestión de la información y toma de decisiones en organizaciones educativas.</i> Revista de ciencias sociales, 25(2), 120-130. ',
      link: '',
    },
    {
      referencia:
        'Decreto 1567 de 1998 [Departamento Administrativo de la Función Pública] <i>Creación del sistema nacional de capacitación y de estímulos para los empleados del estado.</i> 5 de agosto de 1998.',
      link: '',
    },
    {
      referencia:
        'Decreto 1083 de 2015 [Departamento Administrativo de la Función Pública] <i>Establece la inducción como el periodo de prueba de un empleado en su puesto de trabajo.</i> 26 de mayo de 2005. Última actualización, 3 de agosto de 2022.',
      link: '',
    },
    {
      referencia:
        'Mendez Rosales, E. J., Arvizu López, B. A., Enciso Arámbula, R., Estrada Esquivel, A. L., López Santana, M. Á., & Maldonado Bernal, I. (2018). <i>Inducción como una visión para el desempeño integral del trabajador.</i> Tepic: La Universidad Tecnocientífica del Pacifico.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
