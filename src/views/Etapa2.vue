<template>
  <v-container class="bg-surface-variant container-etapa">
    <v-row no-gutters>
      <v-col xs="5" sm="2" md="3">
        <v-img
            :src="require('@/images/mavi_2.jpg')"
            :lazy-src="require('@/images/'+$store.state.imagemLoading)"
            aspect-ratio="1"
            cover
            class="imagem fadeIn980"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="4" sm="5" md="9">
        <div class="container-texto">
          <label class="texto texto-1">
            Em poucos dias eu conheci o seu sorriso, quando eu o vi eu pensei "me ferrei", moral
            da história: me apaixonei
            mais ainda pela pessoa que você é.
            Através do seu sorriso eu descobri mais um traço da sua personalidade, o seu
            maravilhoso jeito "moleca" de ser.
          </label>
          <v-row class="container-imagem">
            <v-col xs="12" sm="6" md="6">
            <v-img
                :src="require('@/images/sorriso-1.png')"
                :lazy-src="require('@/images/'+$store.state.imagemLoading)"
                aspect-ratio="1"
                contain
                class="imagem-sorriso-1"
            >
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            </v-col>
            <v-col xs="12" sm="6" md="6">
            <v-img
                :src="require('@/images/sorriso-2.png')"
                :lazy-src="require('@/images/'+$store.state.imagemLoading)"
                aspect-ratio="1"
                contain
                class="imagem-sorriso-2"
            >
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
    export default {
        name: 'EtapaDois',
        data() {
            return {}
        },
        mounted() {
            this.efeitoTextoDigitado( 1)
        },
        methods: {
            efeitoTextoDigitado(textoNumero){
                const elemento = document.querySelector('.texto-' + textoNumero)
                const textoArray = elemento.innerHTML.split('')
                document.querySelector('.texto-' + textoNumero).innerHTML = ''
                let quebraLinha = 0
                textoArray.forEach((letra, i) => {
                    setTimeout( function (){
                        if(letra == '<'){
                            quebraLinha = 1
                            elemento.innerHTML += '<br>'
                        }
                        if(quebraLinha == 0) {
                            elemento.innerHTML += letra
                        }
                        if(letra == '>'){
                            quebraLinha = 0
                        }
                        if(elemento.innerText.includes('maravilhoso')){
                            document.querySelector('.container-imagem').style.display = 'flex'
                        }
                    }, 75 * i)
                } )
            }
        }
    }
</script>

<style scoped lang="stylus">

    .container-etapa
      border 15px dotted #F6E4F6
      padding 30px

    .texto
      font-size 20px
      font-weight 500
      text-align justify

    .texto::after
      color white
      content '|'
      margin-left 2px
      opacity 1
      animation pisca .7s infinite

    .imagem
      height 350px
      width 350px
      margin-bottom 15px

    .container-imagem
      display none
      animation fadeIn 980ms normal

    .imagem-sorriso-1
      height 350px
      width 350px
      z-index 1

    .imagem-sorriso-2
      height 350px
      width 350px
      z-index 1

   .fadeIn980
      animation fadeIn 980ms

   .container-texto
      margin-left 15px
      z-index 4


</style>