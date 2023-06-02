<template>
  <div class="inicio-background">
  <v-container class="inicio-container">
    <div class="titulo-container fadeIn900">
      <h3>Pour ma vie Michi</h3>
    </div>
    <div class="corpo-texto">
      <Etapa1 v-if="etapa == 1"/>
      <Etapa2 v-if="etapa == 2"/>
      <Etapa3 v-if="etapa == 3"/>
      <Etapa4 v-if="etapa == 4"/>
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
          color="tertiary"
          depressed
          class="botao-avancar"
          @click="avancarEtapa">
        Avançar >>
      </v-btn>
    </div>
    <div class="container-pedido" v-if="exibirPedido">
      <h3 class="texto-te-amo" v-show="esconderBotoes">Te amo &#9829;</h3>
      <canvas id="my-canvas"/>
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
          color="primary"
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
    import Etapa1 from '@/views/Etapa1.vue'
    import Etapa2 from '@/views/Etapa2.vue'
    import Etapa3 from '@/views/Etapa3.vue'
    import Etapa4 from '@/views/Etapa4.vue'
    import ConfettiGenerator from 'confetti-js'

    export default {
        name: 'Inicio',
        components: {Etapa4, Etapa3, Etapa2, Etapa1},
        data() {
            return {
                exibirPedido: false,
                etapa: 1,
                esconderBotoes: false,
                textoNegar: 'Não'
            }
        },
        methods: {
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
            },
            avancarEtapa(){
                this.etapa = this.etapa + 1
                if(this.etapa == 5){
                    this.exibirPedido = true
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
                    }, 75 * i)
                } )
            }
        }
    }
</script>

<style scoped lang="stylus">
    .inicio-background
      height 100%
      background-color #f6bdd1

    .titulo-container
      text-align center
      font-size 20px

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
      width 150px
      height 100px

    .botao-rejeitar
      margin-left 30px

    .fadeIn900
      animation fadeIn 900ms

    .botao-voltar
      margin-right 20px


</style>