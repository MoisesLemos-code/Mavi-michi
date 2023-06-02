<template>
  <v-container class="bg-surface-variant container-etapa">
    <v-row no-gutters>
      <v-col  xs="5" sm="2" md="3">
        <v-img
            :src="require('@/images/mavi_0.jpg')"
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
      <v-col  xs="4" sm="5" md="9">
        <div style="margin-left: 15px">
          <label class="texto texto-1">
            Faz alguns dias que venho pensando em uma forma de demonstrar meu amor por você,
            gostaria que fosse algo único, uma declaração que você nunca tenha recebido antes.
            Por isso fiz esse website, ele foi inteiramente dedicado a você e ele está online para você e o
            mundo ver o quanto eu te amo.
            <br>
            Gostaria de começar elogiando seus olhos levemente puxados e cheios de brilho,
            pois eles foram a primeira coisa que eu notei quando te vi, me encantei de primeira e em seguida
            notei que você era o tipo de mulher que iria entrar na minha mente.
          </label>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
    export default {
        name: 'Etapa1',
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
      overflow hidden

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

    .fadeIn980
      animation fadeIn 980ms


</style>