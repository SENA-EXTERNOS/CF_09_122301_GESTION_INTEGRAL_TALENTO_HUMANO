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
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se profundizará sobre el programa de inducción y su proceso inicial de acercamiento e integración al nuevo empleado de la empresa. 
          .cajon.color-acento-contenido.py-3.px-4
            p La alta gerencia, área de recursos humanos, cuenta con una planeación estratégica para el funcionamiento general de la empresa. Así, esta herramienta de gestión, brinda las directrices a las diferentes áreas que la componen, da a conocer los resultados, las metas y funciones a desarrollar y, de esta manera, poder estructurar programas, procesos, planes y actividades que contribuyen a una mejora continua de los procesos institucionales.

    .row.my-5
      p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

      .row.my-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/mi6QT9Phe88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



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
