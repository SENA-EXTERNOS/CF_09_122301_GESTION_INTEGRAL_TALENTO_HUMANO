<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Programa de inducción

    .row.justify-content-center
      .col-6.col-lg-2.mb-5
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt").img1-tm1

      .col-lg-10
        p La empresa tiene el interés de desarrollar programas de inducción que permitan a los nuevos empleados comprender, de una manera clara y completa, la misión y la proyección de la compañía, los objetivos que manejan, la forma de cómo aspiran lograrlos; el dinamismo organizacional, las normas que lo establecen, los reglamentos que lo articulan; así como las cualidades y aptitudes de sus colaboradores, que lo hacen posible.
        p Estos programas de inducción, entonces, deben estar diseñados, realizados y evaluados de acuerdo con las necesidades de la empresa y el propósito planteado; sin olvidar el desarrollo y fomento del sentido de pertenencia del nuevo personal.     

    .row.justify-content-center.my-5
      .col-8.col-lg-4.my-5
        figure
          img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")
      .col-lg-8
        .cajon.color-primario.px-4.pb-1.pt-3.mb-3
          p Siendo consecuentes con lo anterior, el área de recursos humanos, identifica los objetivos que desea alcanzar, propone actividades con las temáticas que reconoce como necesarias y usa estrategias didácticas para la integración del nuevo personal a la empresa. Así, los programas de inducción están fundamentados en un propósito, una planeación y una serie de actividades que permiten una “socialización” entre el nuevo empleado y la compañía.
        p Las inducciones deben estar actualizadas y modificadas (de ser necesario), ya que el objetivo que se aspira alcanzar es el de formar, moldear y estructurar al nuevo personal. Así, lo que propone la integración de nuevo personal, es motivar al nuevo colaborador, pues entre más se sienta a gusto en su labor, el desempeño va a ser mejor; beneficiándose, no solo el área, sino también la organización.
        p Los programas de inducción permiten que los nuevos empleados proyecten un perfil afín con los intereses de la organización, identifiquen las metas empresariales y reconozcan las funciones que deberán desempeñar. 

    .row
      p El Decreto 1567 de 1998 define el programa de inducción como:

    .row.justify-content-center
      .col-lg-8
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p Un proceso dirigido a iniciar al empleado en su integración a la cultura organizacional durante los cuatro meses siguientes a su vinculación.
            i.fas.fa-quote-right        

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img3.png')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p El Decreto 1567 de 1998 insiste que cualquier vinculación laboral debe incluir programas de inducción, siendo este proceso determinante para la adaptación del nuevo colaborador al cargo, donde aprenderá sus funciones, procesos, requerimientos, metas proyectadas, su relación y comunicación con el equipo de trabajo, el aprender a manejar herramientas o elementos para poder desempeñarse. Este programa, además, busca integrar al nuevo empleado a la estructura funcional de la empresa, le presenta sus valores corporativos, misión, visión, objetivos estratégicos, etc.; así, esta herramienta de gestión es una estrategia para la apropiación y sentido de pertenencia; motivando al nuevo colaborador en la organización.


    .row.justify-content-start.align-items-center.mb-5.pt-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Tipos de inducción

    .row.justify-content-center.my-5
      .col-6.col-lg-2.mb-5
        figure
          img(src="@/assets/curso/temas/tema1/img4.png", alt="alt").img1-tm1
      .col-lg-10
        p Los programas de inducción cuentan con dos tipos básicos de socialización: general y específico; sin embargo, recientemente, se ha evidenciado la pertinencia de otros dos: #[strong preinducción y reinducción,] procesos que se realizan en situaciones especiales.
        p En el siguiente video se abordará cada tipo de proceso, con sus respectivas características:

    .row.my-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-start.align-items-center.mb-5.pt-5           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Normatividad y condiciones generales

    .row.justify-content-center.my-5
      .col-8.col-lg-4.mb-3
        figure
          img(src="@/assets/curso/temas/tema1/img5.png", alt="alt")
      .col-lg-8
        p.mt-3 Ya se abordaron los tipos de inducción que se pueden manejar dentro de una empresa y su objetivo específico; ahora, se profundizará en la normatividad que brindan sus lineamientos para la implementación en las organizaciones.
        p A través de los años se ha evidenciado la necesidad de proteger los derechos de los empleados, derechos que se reconocen y protegen desde la integración del personal a la empresa; esto último, se refiere a la posibilidad de recibir una inducción que le permita al empleado conocer la empresa y comprender todo lo referente al cargo que va a ejercer (salario, horarios, compañeros, etc.). Cabe aclarar que la inducción se incluye como parte del trabajo, y en consecuencia, se ve reflejado en la remuneración del nuevo empleado. 

    .row.my-5
      p Dos de los decretos más conocidos referente al tema son:

    .row.justify-content-center.my-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="<b>Decreto 1567 de 1998. Artículo 7</b>")
          .row.p-4
            .col-md-7.mb-4.mb-md-0
              p El Decreto 1567, artículo 7, define los programas de inducción y reinducción como planes iniciales desarrollados en cada entidad, siendo procesos formativos y de capacitación que buscan facilitar la integración del empleado en la organización.
              p Condición general: se establece que el programa de inducción es obligatorio para cada entidad, independientemente sea del sector privado o público.
              p Para conocer el decreto completo, es necesario remitirse al material complementario.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')

        .py-3.py-md-4(titulo="<b>Decreto 1083 de 2015, en su  Artículo 2.2.6.24 periodo de prueba y su condición general</b>")
          .row.p-4
            .col-md-7.mb-4.mb-md-0
              p En el Decreto 1083 de 2015, el Departamento Administrativo de la Función Pública, establece que: “El periodo de prueba deberá iniciarse con la inducción en el puesto de trabajo”. (26 de mayo de 2005, última actualización, 3 de agosto de 2022).
              p Para profundizar en este decreto es necesario remitirse al material complementario.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')

    .row.justify-content-start.align-items-center.mb-5.pt-3           
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Registro de calidad

      p.mt-5 Ahora bien, después de puntualizar en los decretos más representativos de los lineamientos para la implementación y desarrollo de la inducción; se profundizará en el registro de calidad para su realización.
      p Cuando las empresas hablan de normatividad, específicamente, apelan al Registro de calidad, a las #[strong Normas ISO,] las cuales documentan todo el proceso organizacional: desde el momento de su inicio hasta su fin. Así, toda la información recogida se maneja como evidencia de las actividades realizadas. 
      p Todo proceso realizado dentro de la empresa debe cumplir con los registros de calidad específicamente para: 

    .row.justify-content-center.my-5
      .col-lg-10
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema1/img8.png").img8-tm1
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normas ISO
                  p Ver documento
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.justify-content-center.my-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img9.png',)              

    .fondo-tarjeta1
      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-acento-contenido.p-4
            p El programa de inducción (y en general cualquier proceso desarrollado por la empresa) se organiza, diseña, ejecuta y evalúa partiendo del ciclo PHVA: Planear, Hacer, Verificar y Actuar. Este ciclo es dinámico y se desarrolla mediante el diligenciamiento de formatos establecidos por la empresa para el registro de la información. 


      .row.my-5
        p Los datos recogidos se convierten en un insumo que permite estructurar el cronograma para la organización de actividades, la planeación estratégica de la inducción, la organización de sus fases, la evaluación, las acciones de mejora, entre otros. A continuación, se explica a detalle:


      .row.justify-content-center.my-5
        .col-lg-8
          LineaTiempoD.color-rosa
            .row(numero="A" titulo="Planear")
              .col-6.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png',)  
              .col-lg-10
                p para la estructuración del programa de inducción.
                p Identificación de los objetivos, organización de las actividades, planeación de las jornadas, duración, fechas, responsables, etc. Lo anterior, de acuerdo con las necesidades encontradas dentro de la empresa.

            .row(numero="B" titulo="Hacer")
              .col-6.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img11.png',)  
              .col-lg-10
                p Ejecución de las actividades conforme al cronograma desarrollado en la planeación de la inducción, cumplimiento de tiempos, estrategias metodológicas y pedagógicas, manejo de recursos, espacios adecuados donde se realizan.

            .row(numero="C" titulo="Verificar")
              .col-6.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img12.png',)  
              .col-lg-10
                p Realizar la evaluación del desarrollo de la inducción sobre las temáticas, pedagogía, conocimientos adquiridos y componentes. Estos datos serán un factor importante para identificar aspectos por mejorar.
                p Diligenciar reportes y tener en cuenta el manejo y análisis de los datos.

            .row(numero="D" titulo="Actuar")
              .col-6.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema1/img13.png',)  
              .col-lg-10
                p Análisis de resultados, identificación de falencias y aplicación de correcciones y acciones de mejora, ya sea en la estructuración de los cronogramas, en los tiempos, en la pedagogía o temática utilizada para próximas inducciones.

      .row.justify-content-start.align-items-center.mb-5.pt-3         
        .col-lg-4
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0 Metodología y plan

      .row.my-5
        p Teniendo clara la importancia del Registro de calidad y la influencia del ciclo PHVA sobre el proceso de inducción; ahora, se complementará esta información con la metodología y plan para desarrollar dentro de la empresa.

      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1
        span #[i Diagrama de metodología y plan para el programa de inducción] 

    .row.justify-content-center.my-5
      figure
        img(src='@/assets/curso/temas/tema1/img14.png',)     

      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-primario.p-4
            p Como se observa en la Figura 1, toda metodología y plan deben ser desarrollados en un orden específico para su realización. Cada paso tiene una función concreta que se debe alcanzar para continuar con la siguiente tarea. Con el fin de sacar adelante la metodología, es importante contar con un equipo de trabajo que se encuentre sincronizado y que tenga las metas claras para poder estructurar el plan de acción.

    .row.justify-content-start.align-items-center.mb-5.pt-3         
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Gestión de la información

    .row.justify-content-center.my-5
      .col-8.col-lg-4.my-5
        figure
          img(src="@/assets/curso/temas/tema1/img15.png", alt="alt")
      .col-lg-8
        p Así pues, conociendo la metodología y el cómo puede desarrollarse, es importante abordar la manera de gestionar la información.
        p La gestión de la información está relacionada con los procesos dentro de la empresa y la información que circula en esta (desde el momento en el que se adquiere, hasta su destino final. Ya sea archivar o eliminar). Así, un elemento importante para hablar de la gestión de la información es el ciclo de vida de esta última, asumiendo con claridad la priorización o importancia de los datos y su determinación de impacto en las necesidades identificadas; para de esta manera, establecer y organizar la forma de recopilación, análisis, manejo y archivo de datos.
        .cajon.color-acento-contenido.px-4.pb-1.pt-3.mb-3
          p Subrayando lo anterior, es fundamental el manejo que se le da a la información durante un tiempo determinado: puede ser de manipulación, modificación o distribución. En este último, se debe recordar que la información solo debe ir a las personas interesadas, y que entre menor contacto o manejo, menos probabilidad hay de que se pierda o se modifique dicha información. 

    .row.my-3
      p La empresa, de esta manera, debe asegurar un manejo responsable y confidencial de toda la información; ya que, su análisis generará impacto en los procesos, y al buscar una mejora continua para el diseño de estrategias, afectará, de manera sustancial, la toma de decisiones que surgen en la identificación de las necesidades organizacionales. (Barzaga-Sablón et al. 2019). 

    .row.justify-content-start.align-items-center.mb-5.pt-3         
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 #[i Onboarding]

    .row.justify-content-center.my-5
      .col-6.col-lg-2.mb-5
        figure
          img(src="@/assets/curso/temas/tema1/img16.png", alt="alt").img1-tm1
      .col-lg-10
        p Al conocer la importancia de la gestión de la información, y su impacto en los procesos desarrollados dentro de la empresa; es importante mencionar las diferencias entre inducción y #[i Onboarding.]

    .row.justify-content-center.my-5
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El #[i Onboarding] es un proceso realizado por el área de recursos humanos para el ingreso de nuevo personal. Esta incorporación tiene una duración aproximada de dos meses, tiempo en el que se realiza acompañamiento permanente, se promueve la participación activa en el ejercicio de integración; además de profundizar en la cultura organizacional: misión, visión, reglamento, objetivos, estrategias, etc. De esta manera, el empleado tendrá las pautas de comportamiento necesarias para la adaptabilidad, compromiso y apropiación de su nuevo rol dentro de la empresa.

      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-primario.p-4
            p Una diferencia importante entre la inducción y el #[i Onboarding] es que la primera busca cumplir con los requerimientos normativos y legales para que el colaborador se capacite y conozca la información necesaria para su mejor adaptación en la empresa; mientras que el #[i Onboarding] es un proceso más detallado, planificado y personalizado.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
