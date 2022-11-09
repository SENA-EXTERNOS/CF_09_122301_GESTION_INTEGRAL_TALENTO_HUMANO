<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La planeación estratégica es base para la construcción del quehacer organizacional: establece tareas, procesos y estructura proyectos teniendo en cuenta los cambios y demandas que impone su entorno. De esta manera, la planeación estratégica se convierte en un estandarte para diseñar, formular y establecer planes de acción que redundarán en la consecución de los objetivos organizacionales. 
    p.mb-5 Desde esta perspectiva, el departamento de recursos humanos sigue los lineamientos presentes dentro de la planeación estratégica, de tal manera que estructura e implementa programas que benefician a la empresa en el cumplimiento de las metas previstas. Un ejemplo de dicha ejecución, es el programa de inducción, que busca informar e integrar a los nuevos empleados a la organización.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
