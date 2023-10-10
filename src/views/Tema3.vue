<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Plan de trabajo

    .row.justify-content-center.my-5
      .col-lg-8
        p La dirección es quien se encarga de transmitir las estrategias y objetivos de la compañía. Así, lo que se pretende, es alinear a cada una de las dependencias, y de las personas que lo conforman, con los objetivos institucionales. De esta manera, los equipos siguen los lineamientos para la ejecución de las actividades, aprovechan los recursos empresariales, plantean los diferentes procedimientos técnicos y diligencian los formatos necesarios para tal fin.
        .cajon.color-primario.px-4.pb-1.pt-3.mb-3
          p Cabe aclarar que la dirección, además de divulgar los planes de acción, brinda los parámetros comportamentales y actitudinales para tener una óptima comunicación entre empleados, empleados y clientes, empleados y áreas de gerencia.
        p Teniendo en cuenta que la dirección da las pautas y lineamientos por realizar, determina las acciones a seguir y especifica el plan de trabajo, se profundizará en este último, asociando los procesos respectivos para desarrollarlo a cabalidad.

      .col-8.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p Una vez estructurado el plan estratégico por departamento o área, lo siguiente es decidir cómo se ejecutarán las actividades. En este punto del proceso, ya se pueden establecer prioridades, estructurar objetivos, decidir fechas de alcance, responsables, recursos, materiales o conocimientos requeridos.

    .row.my-5
      p A continuación, se presenta el proceso de plan de trabajo.

    .row.justify-content-center
      .col-lg-8
        PasosA.color-acento-contenido.mb-5(tipo="l")
          .row.justify-content-center
            .col-6.col-lg-3
              figure
                img(src="@/assets/curso/temas/tema3/img3.svg", alt="alt")
            .col-8.col-lg-6
              p.mt-3 Puesta en marcha 
              p Transmitir objetivos


          .row.justify-content-center
            .col-11.col-lg-6
              p.mt-3 Establecer responsabilidades 
              p Conformación de equipos
            .col-6.col-lg-3
              figure
                img(src="@/assets/curso/temas/tema3/img4.svg", alt="alt")
              
          .row.justify-content-center
            .col-6.col-lg-3
              figure
                img(src="@/assets/curso/temas/tema3/img5.svg", alt="alt")
            .col-10.col-lg-6
              p.mt-3 Distribución de tareas 
              p Ejecución de las tareas

          .row.justify-content-center
            .col-11.col-lg-6
              p.mt-3 Evaluación de eficacia 
              p Necesidades de mejora 
            .col-6.col-lg-3
              figure
                img(src="@/assets/curso/temas/tema3/img6.svg", alt="alt")

          .row.justify-content-center
            .col-6.col-lg-3
              figure
                img(src="@/assets/curso/temas/tema3/img7.svg", alt="alt")
            .col-11.col-lg-6
              p.mt-3 Aplicación de acciones de mejora
              p Seguimiento

    .row.my-5
      p Por medio de la ejecución del plan se realiza, de forma organizada, la transmisión de los objetivos que permiten, no solo una alineación entre los colaboradores y la distribución de responsabilidades, sino también, la determinación de sus funciones dentro de la dinámica organizacional. 

    .row.justify-content-start.align-items-center.my-5        
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0  Procesos
 
    .row.my-5
      p A continuación, se presentarán cada uno de los pasos para la estructuración de los procesos, desde la fase inicial: identificación de necesidades; hasta la etapa final: evaluación del plan. Veamos:
    .row.justify-content-center.my-5
      .col-lg-10
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/temas/tema3/img8.png", alt="alt")

          .tarjeta.estilo-cajon.p-3(x="18%" y="20%" numero="+")
            .h5.mb-2 Identificar necesidades y oportunidades
            p Partiendo de las exigencias del sector productivo, más los retos tecnológicos, la empresa identifica los aspectos en los cuales considera mejorar, iniciar o modificar, de acuerdo a la oportunidad y/o necesidad. 
            p En este punto es fundamental empezar a establecer los objetivos a alcanzar.

          .tarjeta.estilo-cajon.p-3(x="28%" y="59%" numero="+")
            .h5.mb-2 Establecer los objetivos que se esperan alcanzar
            p Se debe tener claro a dónde se quiere llegar y qué se espera alcanzar con los objetivos. Seguido a esto, corresponde organizarlos de acuerdo con la prioridad y establecer fechas de alcance.
            p Posterior al planteamiento de los objetivos, se busca conocer los antecedentes realizados como base para nuevas propuestas.

          .tarjeta.estilo-cajon.p-3(x="46.5%" y="60%" numero="+")
            .h5.mb-2 Proyectar los antecedentes de planeación
            p El conocer los antecedentes realizados referentes a procesos, políticas, programas, etc., permite crear estrategias para el desarrollo de nuevos retos. Después de conocer las bases, se empiezan a formular posibles soluciones del tema.

          .tarjeta.estilo-cajon.p-3(x="82%" y="75%" numero="+")
            .h5.mb-2 Reconocer posibles alternativas
            p El análisis de varios escenarios permite identificar diferentes alternativas de acción (tanto ventajas como desventajas), lo cual permite tomar decisiones más acertadas para el logro de los objetivos.

          .tarjeta.estilo-cajon.p-3(x="77%" y="22%" numero="+")
            .h5.mb-2 Evaluación del plan
            p Se realiza un análisis de las propuestas por medio de la evaluación del plan.
            p Conocer los costos de cada uno de los programas, proyectos y demás permite calcular el presupuesto requerido para la planeación estratégica.

    .row.justify-content-start.align-items-center.my-5          
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0  Metas
  
      .row.justify-content-center.my-5
        .col-6.col-lg-2.mb-5
          figure
            img(src="@/assets/curso/temas/tema3/img9.png", alt="alt").img1-tm1

        .col-lg-10
          p Después de conocer el paso a paso para la realización de un proceso, en donde se estructuran unos objetivos, es importante insistir en las metas que se deben plantear antes del comienzo de cualquier proceso organizacional. 
          p Las metas han de ser estructuradas de manera específica, previo al inicio del proceso, en tanto buscan describir a dónde se desea llegar o lo que se espera alcanzar; por lo cual, las metas deben ser medibles y contar con fechas estimadas de logro; en consecuencia, todos los empeños y su realización se proyectarán para tal fin. Asimismo, es importante que las metas, al direccionar los esfuerzos de los empleados, mantengan una evaluación constante que permita valorar el progreso de alcance.

    .row.justify-content-start.align-items-center.my-5 
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0  Comunicación

    .row.justify-content-center.my-5
      .col-8.col-lg-4.my-5
        figure
          img(src="@/assets/curso/temas/tema3/img10.png", alt="alt")
      .col-lg-8
        p Al tener claro el cómo se desarrolla el plan de trabajo y el por qué se plantean las metas, se debe pensar en cómo se dará a conocer la información. De tal manera, la comunicación es un elemento importante para que los empleados y los directivos se encuentren alineados en la obtención de los logros. 
        p El ser humano es un ser social por naturaleza; para que pueda adaptarse e integrarse de manera efectiva con los contextos en los que interactúa, y poder solucionar conflictos, es necesario comunicarse con otros e intercambiar datos, conocimientos, parámetros y habilidades que le permitan socializar con las personas que lo rodean.
        .cajon.color-acento-contenido.px-4.pb-1.pt-3.mb-3
          p Este intercambio de información promueve actividades sociales como la empatía, la comunicación asertiva y la inteligencia emocional: elementos fundamentales para entablar relaciones sanas con otros, en cualquier contexto, con diferentes personas.

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Específicamente, en el ámbito empresarial, la comunicación es un proceso determinante para dar a conocer la información corporativa de dos maneras: interna y externa. La primera se precisa para comunicar, a todo el talento humano, la cultura organizacional, funciones, responsabilidades, aspectos motivacionales, actualizaciones, manejo de información, habilidades y estrategias empresariales. Entre tanto, y a nivel externo, este flujo de comunicación es clave al momento de adquirir y mantener a clientes, proveedores y personas en general.

    .row.my-5
      p Es importante destacar la comunicación asertiva en el campo laboral, habilidad fundamental que evita malos entendidos, ayuda en la resolución de problemas y beneficia la interacción interna y externa de la compañía. Si el empleado tiene la capacidad de expresar sus ideas y pensamientos sin vulnerar a las personas con las que interactúa, tendrá la posibilidad de manejar límites con los otros, teniendo como fundamento el respeto en las diferentes interacciones laborales que vive. 


    .row.justify-content-start.align-items-center.my-5 
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0  Clases de comunicación


    .row.my-5
      p Dentro de la empresa, se presentan varias clases de comunicación. Esta tipología depende, básicamente, de dos factores: el área que transmite y a quién va dirigida la información. Las clases de comunicación que se encuentran en el ámbito empresarial, son:

    .fondo-tarjeta4
      .tarjeta.tarjeta--morada.color-primario--borde.p-4.mb-5
        LineaTiempoC.color-secundario(text-small)
          .row(titulo="A")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema3/img13.png", alt="alt")

            .col-md-6.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong A]
                  b Comunicación de la dirección al personal:
              p Es la comunicación que se presenta desde la dirección al personal en general. Este tipo de comunicación busca reducir los canales informales que puedan tergiversar la información; de esta manera, brinda, desde la claridad discursiva, los lineamientos, capacitaciones o posibles cambios en la dinámica organizacional. 
          
          .row(titulo="B")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema3/img14.png", alt="alt")

            .col-md-6.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong B]
                  b Comunicación del personal a la dirección:
              p Es transmitida del personal de rangos inferiores a la dirección, así, los primeros pueden dar a conocer sus posturas, ideas, sugerencias y comentarios generales que los afectan en el ámbito laboral.
  
          .row(titulo="C")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema3/img15.png", alt="alt")

            .col-md-6.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong C]
                  b Comunicación intragrupal e intergrupal:
              p La comunicación intragrupal es la que se da entre compañeros de una misma área o departamento. Mientras que la comunicación intergrupal es la que se establece entre el personal de diferentes departamentos o áreas. El objetivo de las dos (intragrupal e intergrupal) es agilizar la información para promover el desarrollo empresarial.
  
          .row(titulo="D")
            .col-md-6
              figure
                img(src="@/assets/curso/temas/tema3/img16.png", alt="alt")

            .col-md-6.mb-4.mb-md-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span #[strong D]
                  b Comunicación general:          
              p Es la información que todo el personal debe conocer para la unificación de conceptos. Aspectos como la cultura organizacional y sus componentes (misión, visión, valores, políticas, etc.) son importantes en este tipo de comunicación, ya que permiten la cohesión entre los objetivos institucionales y las funciones de los empleados.
 



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
