<template>
  <div class="inicio-background">
  <v-container class="inicio-container">
    <div class="titulo-container fadeIn900">
      <h3 class="texto-titulo" @click="ativarLeituraTextos">Pour ma vie Michi</h3>
      <audio-player :audio="audioMusic" />
    </div>
    <div class="corpo-texto">
      <Etapa1 v-if="etapa == 1" :permanecer-texto="textoUmLido" @ativarAvancarEtapa="ativarOpcaoAvancar"/>
      <Etapa2 v-if="etapa == 2" :permanecer-texto="textoDoisLido" @ativarAvancarEtapa="ativarOpcaoAvancar"/>
      <Etapa3 v-if="etapa == 3" :permanecer-texto="textoTresLido" @ativarAvancarEtapa="ativarOpcaoAvancar"/>
      <Etapa4 v-if="etapa == 4" :permanecer-texto="textoQuatroLido" @ativarAvancarEtapa="ativarOpcaoAvancar"/>
    </div>
    <div class="container-avancar" v-if="!exibirPedido">
      <v-btn v-if="etapa > 1"
          id="botaoVoltar"
          color="tertiary"
          depressed
          class="botao-voltar"
          @click="voltarEtapa">
          &#60;&#60; Voltar
      </v-btn>
      <v-btn
          id="botaoAvancar"
          depressed
          :disabled="!ativarAvancar"
          class="botao-avancar-ativo"
          @click="avancarEtapa">
        Avançar >>
      </v-btn>
    </div>
    <canvas id="my-canvas" class="confetes"/>
    <div v-show="esconderBotoes" class="container-foto-final">
      <v-img
          :src="require('@/images/Moi-e-Emi.jpg')"
          :lazy-src="require('@/images/'+$store.state.imagemLoading)"
          aspect-ratio="1"
          cover
          class="imagem-moi-emi"
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
      <h3 class="texto-te-amo">Te amo &#9829;</h3>
    </div>
    <div class="container-pedido" v-if="exibirPedido">
      <h3 v-if="!esconderBotoes">Você aceita namorar comigo?</h3>
      <div class="container-button" v-if="!esconderBotoes">
        <v-btn
            id="botaoAceitar"
            color="primary"
            depressed
            class="botao-pedido"
            @click="acaoConfirmar">
          Sim
        </v-btn>
        <v-btn
          id="botaoNegar"
          depressed
          class="botao-pedido botao-rejeitar"
          @mouseover="passarMouse"
          @click="acaoNegar">
          {{ textoNegar }}
        </v-btn>
      </div>
    </div>
  </v-container>
  </div>
</template>

<script>
    import ConfettiGenerator from 'confetti-js'
    import Etapa1 from '@/views/Etapa1.vue'
    import Etapa2 from '@/views/Etapa2.vue'
    import Etapa3 from '@/views/Etapa3.vue'
    import Etapa4 from '@/views/Etapa4.vue'
    import AudioPlayer from '@/components/AudioPlayer.vue'

    export default {
        name: 'InicioContainer',
        components: {AudioPlayer, Etapa4, Etapa3, Etapa2, Etapa1},
        data() {
            return {
                textoUmLido: false,
                textoDoisLido: false,
                textoTresLido: false,
                textoQuatroLido: false,
                exibirPedido: false,
                etapa: 1,
                esconderBotoes: false,
                textoNegar: 'Não',
                ativarAvancar: false,
                etapaMaxima: 1,
                audioMusic: 'music_0.mp3'
            }
        },
        mounted() {
            setTimeout(() => {
                this.iniciarMusica()
            }, 2000)
        },
        methods: {
            ativarLeituraTextos(){
                this.textoUmLido = true
                this.textoDoisLido = true
                this.textoTresLido = true
                this.textoQuatroLido = true
                this.etapaMaxima = 5
                this.ativarAvancar = true
            },
            acaoConfirmar(){
                var confettiElement = document.getElementById('my-canvas')
                var confettiSettings = { target: confettiElement }
                var confetti = new ConfettiGenerator(confettiSettings)
                confetti.render()
                this.esconderBotoes = true
                this.efeitoTextoDigitado('texto-te-amo')
            },
            acaoNegar(){
                if(this.textoNegar == 'Claro'){
                    this.acaoConfirmar()
                } else {
                    this.textoNegar = 'Claro'
                }
            },
            voltarEtapa(){
                this.etapa = this.etapa - 1
                if(this.etapaMaxima >= this.etapa){
                    this.ativarAvancar = true
                }
            },
            avancarEtapa(){
                this.etapa = this.etapa + 1
                if(this.etapa >= 5){
                    this.exibirPedido = true
                }
                if(this.etapa > this.etapaMaxima){
                    this.ativarAvancar = false
                }
            },
            passarMouse(){
                let h = window.innerHeight - 250
                let w = window.innerWidth - 250
                document.querySelector('#botaoNegar').style.position = 'absolute'
                document.querySelector('#botaoNegar').style.top = Math.random() * h + 'px'
                document.querySelector('#botaoNegar').style.left = Math.random() * w + 'px'
            },
            efeitoTextoDigitado(nomeClass){
                const elemento = document.querySelector('.' + nomeClass)
                const textoArray = elemento.innerHTML.split('')
                document.querySelector('.' + nomeClass).innerHTML = ''

                textoArray.forEach((letra, i) => {
                    setTimeout(function (){
                        elemento.innerHTML += letra
                    }, 200 * i)
                } )
            },
            ativarOpcaoAvancar(numeroEtapa){
                this.ativarAvancar = true
                this.etapaMaxima = this.etapa

                if(numeroEtapa == 1){
                    this.textoUmLido = true
                } else if(numeroEtapa == 2){
                    this.textoDoisLido = true
                } else if(numeroEtapa == 3){
                    this.textoTresLido = true
                } else if(numeroEtapa == 4){
                    this.textoQuatroLido = true
                }
            },
            iniciarMusica(){
                let number = Math.floor(Math.random() * 5)
                this.audioMusic = 'music_' + number + '.mp3'
                document.getElementById('btnAudioMusic').click()
            }
        }
    }
</script>

<style scoped lang="stylus">


    .texto-titulo:hover
      font-size 25px
      color #bfffbc
      cursor pointer

    .inicio-background
      height 100%
      background-color #f6bdd1

    .titulo-container
      text-align center
      font-size 20px
      height 30px

    .corpo-texto
      margin-top 40px
      text-align justify

    .container-pedido
      margin-top 50px
      text-align center

    .container-avancar
      margin-top 20px
      text-align center

    .container-button
      margin-top 10px
      height 300px
      text-align center

    .botao-pedido
      width 150px !important
      height 100px !important
      color black !important

    .botao-rejeitar
      margin-left 30px
      background-color #D7263CFF !important

    .fadeIn900
      animation fadeIn 900ms

    .botao-voltar
      margin-right 20px

    .botao-avancar-ativo
      background-color #bfffbc !important

    .container-foto-final
      display flex
      flex-direction column
      align-items center
      z-index 1

    .imagem-moi-emi
      height 350px
      width 350px
      border-radius 5%
      margin-bottom 10px
      animation fadeIn 2000ms

    .confetes
      position absolute
      top 0px
      left 0px
      z-index 2

</style>