<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .bg-intro
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción

      .row.justify-content-center.my-5
        .col-8.col-lg-4.my-3
          figure
            img(src="@/assets/curso/temas/introduccion/img1.png", alt="alt")
        .col-lg-8
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se profundizará sobre el programa de inducción: proceso inicial de acercamiento e integración al nuevo empleado de la empresa. 
          .cajon.color-acento-contenido.py-3.px-4
            p La alta gerencia; sector de recursos humanos, cuenta con una planeación estratégica para el funcionamiento general de la empresa. Así, esta herramienta de gestión, brinda las directrices a las diferentes áreas que la componen, da a conocer los resultados, las metas y funciones a desarrollar; para de esta manera, poder estructurar programas, procesos, planes y actividades que contribuyen a una mejora continua de los procesos institucionales.

      .row.my-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
