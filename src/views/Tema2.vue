<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .fondo-tarjeta2
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Planeación estratégica

      .row.justify-content-center.my-5
        .col-8.col-lg-4.my-5
          figure
            img(src="@/assets/curso/temas/tema2/img1.png", alt="alt")
        .col-lg-8
          p Conociendo la principal diferencia entre inducción y #[i Onboarding], se profundizará sobre los aspectos más relevantes para poder estructurar una inducción de manera efectiva dentro de una empresa, esto es, la planeación estratégica.
          .cajon.color-acento-contenido.px-4.pb-1.pt-3.mb-3
            p Para estructurar de forma adecuada un programa de inducción se debe entender que todo inicia desde la planeación general de la empresa. A continuación, se explica con más detalle.
          p Todo inicia desde la definición de la misión, la visión, los valores corporativos y las políticas organizativas que den lineamientos de hacia dónde se desea dirigir la empresa y cuáles serán las estrategias para lograrlo. Así, la planeación estratégica se convierte en una herramienta de gestión que pretende organizar, planear, delegar, liderar y dirigir la organización, creando rutas de acción que den respuesta a las necesidades empresariales, mediante la estructuración de objetivos y toma de decisiones. Esta planeación hace posible que los miembros de la empresa entiendan y evalúen cómo está la organización; lo que les faculta para establecer equipos de trabajo y definir roles, logrando así, una sincronización de esfuerzos hacia planes de acción conjuntos. 

    .row.justify-content-start.align-items-center.mb-5.pt-5           
      .col-lg-3
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Clases de planeación 

    .row.justify-content-center
      .col-6.col-lg-2.mb-5
        figure
          img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt").img1-tm1

      .col-lg-10
        p Al identificar la importancia de la planeación estratégica en la proyección de la empresa y el impacto que puede generar en los empleados, se hablará de las diferentes clases de planeación.
        p La dirección de una empresa desarrolla una planeación que brinda las pautas para los diferentes departamentos o áreas que la conforman; esto les da el punto de arranque para estructurar sus planes de acción, además de organizar y promover en sus colaboradores el compromiso para alcanzar los objetivos.

      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-acento-contenido.p-4
            p El desarrollo de las actividades planeadas debe estar encaminado a la contextualización de la empresa, a presentar su razón de ser, historia, cultura organizacional y bases fundamentales para el entrenamiento directo del nuevo empleado en su cargo, dándole a conocer el equipo con el que contará, los requerimientos estipulados, sus funciones, medios de comunicación y herramientas necesarias para la ejecución de su labor. 

    .row.my-5
      p Chiavenato & Sapiro (2017) abordan el concepto de planeación empresarial, y explican a detalle  la planeación estratégica, la planeación táctica y la planeación operativa. A continuación, se ahonda en cada una de ellas:

    .row.justify-content-center.my-5
      .col-8.col-lg-4.my-5
        figure
          img(src="@/assets/curso/temas/tema2/img3.png", alt="alt")
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
          .row(titulo="Planeación estratégica")
            .col-auto.p-4
              p Este tipo de planeación incluye a toda la organización y sus recursos, cuenta con un contenido genérico y comprensivo, es desarrollado por la alta gerencia, tiene una proyección a largo plazo y busca alcanzar los objetivos organizacionales, incluyendo a los otros planes.
          
          .row(titulo="Planeación táctica")
            .col-auto-4
              p A cada departamento o área de la empresa le corresponde organizar actividades y acciones, junto con los recursos necesarios, para alcanzar sus objetivos. La proyección de esta planeación es a mediano plazo (anual). 
                   
          .row(titulo="Planeación operativa")
            .col-auto.p-4
              p Este tipo de planeación se centra en cada una de las actividades que están estructuradas en un departamento o área,  por este motivo, su proyección es a corto plazo, y la forma de plantearlo es más específica, centrándose en los objetivos de la tarea. El área encargada de esta planeación es la operativa.   

    .fondo-tarjeta3
      .row.justify-content-start.align-items-center.mb-5    
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0  Dirección

      .row.justify-content-center
        .col-6.col-lg-2.mb-5
          figure
            img(src="@/assets/curso/temas/tema2/img4.svg", alt="alt").img1-tm1

        .col-lg-10
          p Al haber examinado, las clases de planeación y su aplicación en las áreas o departamentos, se mostrará, de manera gráfica, la ejecución y lugar de cada tipo de planeación.
          p La siguiente figura muestra, mediante un ejemplo, cómo se desarrollan los planes estratégicos, tácticos y operacionales en la empresa. El ejemplo inicia desde la alta gerencia, donde, el área de recursos humanos, al identificar necesidades, diseña un plan táctico sobre sus procesos y, desde allí, surgen las necesidades para el desarrollo del plan operativo.

      .row.justify-content-center.my-5
        .col-lg-10
          .tarjeta.color-secundario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/temas/tema2/img6.svg").img8-tm1
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Figura 2
                    p.mb-0 Diagrama de metodología y plan para el programa de inducción
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/ANEXO_1_Desarrollo_de_planes_estrategicos_tacticos_y_operacionales_en_la_empresa.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-file-download

      .row.justify-content-start.align-items-center.mb-5         
        .col-lg-3
          .bgp.p-1(data-aos="fade-right")
            h4(data-aos="fade-down").mb-0  Metodología

      .row.justify-content-center
        .col-6.col-lg-2.mb-5
          figure
            img(src="@/assets/curso/temas/tema2/img5.svg", alt="alt").img1-tm1

        .col-lg-10
          p En la Figura 3, se presenta un mapa con las etapas para la planeación estratégica dentro de una empresa. 
          p Las etapas de la planeación inician en la dirección general, quienes determinan las necesidades organizacionales para dar respuesta a las exigencias del entorno; además de especificar, al equipo colaborativo, el diseño, la metodología, procedimientos, etc., de las etapas de planeación y su relación con las funciones de cada área.  

      .row.justify-content-center.my-5
        .col-lg-10
          .tarjeta.color-secundario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/temas/tema2/img6.svg").img8-tm1
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Figura 3
                    p.mb-0 Diagrama de metodología y plan para el programa de inducción
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/ANEXO_2_Metodologia_general_del_desarrollo_de_la_planeacion_estrategica_de_la_empresa.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-file-download






</template>

<script>
export default {
  name: 'Tema2',
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
