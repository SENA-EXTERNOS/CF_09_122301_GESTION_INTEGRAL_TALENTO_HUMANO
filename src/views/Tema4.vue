<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Recursos empresariales

    .row.my-5
      p Como ya se abordó lo fundamental en el proceso de planeación estratégica, las necesidades de los planes de trabajo y la forma de comunicar en la organización, ahora, es importante estudiar los recursos empresariales y su impacto dentro de la planeación, junto con sus procesos y formatos.

    .row.justify-content-center.my-5
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/tema4/1.svg", alt="alt")

    .row.my-5
      p Los recursos empresariales corresponden a todos aquellos aspectos que brindan los elementos necesarios para que la empresa pueda funcionar en el campo productivo. Los más manejados son:

    .row.justify-content-center.my-5
      LineaTiempoD.color-rosa
        .row(numero="1" titulo="Recursos humanos")
          .col-6.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img2.svg',).img2-3-4-5-tm-4
          .col-lg-10
            p Es el recurso más significativo dentro de una organización, ya que es el encargado de utilizar los otros recursos para el funcionamiento efectivo de la empresa. Son intangibles, la organización no es su propietaria; de tal manera que, ofrecen sus servicios, conocimiento y experticia a cambio de un salario. Por este motivo los procesos de selección, reclutamiento e inducción son fundamentales, ya que los perfiles de los cargos deben ser coherentes con los objetivos que la compañía desea alcanzar y/o mantener.

        .row(numero="2" titulo="Recursos económicos")
          .col-6.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg',).img2-3-4-5-tm-4
          .col-lg-10
            p Es la capacidad financiera con la que cuenta la empresa para el desarrollo de su actividad. Los recursos económicos incluyen el efectivo, las inversiones, acciones, gastos existentes, posibles créditos, etc. Asimismo, este recurso permite adquirir elementos, infraestructura, materia prima y pagar las necesidades de la organización: nómina, créditos y materiales.

        .row(numero="3" titulo="Recursos físicos")
          .col-6.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img4.svg',).img2-3-4-5-tm-4
          .col-lg-10
            p Estos corresponden a todo lo tangible que tiene la empresa para su adecuado funcionamiento: objetos, materiales, maquinaria, materias primas, elementos tecnológicos, etc.

        .row(numero="4" titulo="Recursos tecnológicos")
          .col-6.col-lg-2
            figure
              img(src='@/assets/curso/temas/tema4/img5.svg',).img2-3-4-5-tm-4 
          .col-lg-10
            p Estos recursos ayudan y facilitan la realización de diferentes procesos; lo que permite agilizar su desarrollo y funcionamiento. Los recursos tecnológicos también contribuyen a la gestión de la información y favorecen la comunicación empresarial.

    .row.justify-content-start.align-items-center.my-5 
      .col-lg-4
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0  Procedimientos técnicos y formatos

    .row.justify-content-center.my-5
      .col-6.col-lg-2.mb-5
        figure
          img(src="@/assets/curso/temas/tema4/img6.svg", alt="alt").img1-tm1

      .col-lg-10
        p Los procedimientos técnicos corresponden a tareas, procedimientos y acciones que se llevan a cabo con un orden y tiempo específico. Su finalidad es la transformación de materias primas o de bienes, en productos o servicios. 
        p Por su parte, los formatos son diseñados de acuerdo a las necesidades del proceso, a las características de la empresa, a su misión, visión y objetivos empresariales. Hay formatos de varios tipos que se adecuan según la exigencia del proyecto, el fin que se busca con su diligenciamiento y posterior análisis de resultados. 

    .row.my-5
      p Los tipos de formatos más usados en el ámbito empresarial son: 
  
      .row.justify-content-center.my-5
        .col-lg-9
          .tarjeta--amarilla1.p-4
            .row.justify-content-center
              .col-5.col-lg-1
                figure
                  img(src="@/assets/curso/temas/tema4/img7.png", alt="alt").img7-8-9-tm4
              .col-lg-11
                h5 Descriptivos:
                p La redacción de las tareas se realiza de manera secuencial. Este tipo de formato describe los campos de manera minuciosa para el conocimiento del empleado.
            
          .tarjeta--amarilla2.p-4
            .row.justify-content-center
              .col-5.col-lg-1
                figure
                  img(src="@/assets/curso/temas/tema4/img7.png", alt="alt").img7-8-9-tm4
              .col-lg-11
                h5 Por pasos:
                p Este tipo de formato se usa para procesos breves, donde los resultados sean específicos y se puedan prever. Son presentados de manera numerada.

          .tarjeta--amarilla3.p-4
            .row.justify-content-center
              .col-5.col-lg-1
                figure
                  img(src="@/assets/curso/temas/tema4/img7.png", alt="alt").img7-8-9-tm4
              .col-lg-11
                h5 Mediante diagrama de flujo:
                p Es una representación gráfica, sencilla y comprensible de las actividades, procesos o procedimientos desarrollados de manera secuencial. En este tipo de formato se incluyen funciones y materiales. Algunos son secuenciales, lineales, sectoriales, etc.

    .fondo-tarjeta5              
      .row.justify-content-center.my-5
        .col-lg-10
          .cajon.color-primario.p-4
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.





</template>

<script>
export default {
  name: 'Tema4',
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
