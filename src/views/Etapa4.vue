<template>
  <v-container class="bg-surface-variant container-etapa">
    <v-img
        :src="require('@/images/dodge_ram.png')"
        :lazy-src="require('@/images/'+$store.state.imagemLoading)"
        aspect-ratio="1"
        contain
        class="imagem imagem-ram"
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
    <v-row no-gutters>
      <v-col xs="5" sm="2" md="3">
        <v-img
            :src="require('@/images/mavi_3.jpg')"
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
            Não existe sequer um dia em que eu não exalte a sua beleza, não falo só de aparência, mas
            também do seu jeito de se importar com os pequenos detalhes e de ser atenciosa, tenho certeza
            que isso acontece porque você também pensa em mim todos os dias e eu acho isso maravilhoso.
            <br>
            Sou muito grato por ter o seu amor e por ter você ao meu lado, seu amor vale mais que mil
            Dodge Ram.
            <br>
            <br>
            Emilly, obrigado por ser essa pessoa incrível.
          </label>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
    export default {
        name: 'Etapa4',
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
                        if(elemento.innerText.includes('Dodge R')){
                            document.querySelector('.imagem-ram').style.display = 'block'
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

.fadeIn980
  animation fadeIn 980ms

.container-texto
  margin-left 15px
  z-index 4

.imagem-ram
  display none
  position absolute
  top 230px
  right 35px
  overflow hidden
  transform rotate(-20deg)
  animation moveXRight 900ms normal
  z-index 1


</style>