<template>
    <div class="background-apresentacao-container">
        <div class="container-body" :class="{'container-body-fadeIn': fadeIn, 'container-body-fadeOut' : fadeOut }">
            <v-img :src="(imagemEspera ? require('@/images/loading/' + imagemEspera) : null)" width="220" height="220" contain/>
            <h3>Pour ma vie Michi</h3>
            <h4 class="desenvolvido-por">Desenvolvido por Moisés Lemos</h4>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TelaApresentacao',
        data() {
            return {
                imagemEspera: null,
                fadeIn: true,
                fadeOut: false
            }
        },
        mounted() {
            this.setarImagemEspera()
            this.irTelaInicial()
        },
        methods: {
            setarImagemEspera() {
                let number = Math.floor(Math.random() * 5)
                this.imagemEspera = 'cat_' + number + '.gif'
            },
            irTelaInicial() {
                setTimeout(() => {
                    this.fadeIn = false
                    this.fadeOut = true
                    setTimeout(() => {
                        this.$router.push({name: 'Inicio'})
                    }, 100)
                }, 5200)
            }
        }
    }
</script>

<style scoped lang="stylus">
    .background-apresentacao-container
        background-color #f6bdd1
        text-align center
        min-height 100vh

    .container-body
        margin-top 35vh
        display inline-block
        position relative

    .container-body-fadeIn
        animation fadeIn 900ms

    .container-body-fadeOut
        animation fadeOut 500ms

    .desenvolvido-por
      animation fadeIn 2000ms normal
</style>