<template>
        <div class="container-body" :class="{'container-body-fadeIn': fadeIn, 'container-body-fadeOut' : fadeOut }">
            <v-img :src="(imagemEspera ? require('@/images/loading/' + imagemEspera) : null)" width="220" height="220" contain/>
            <h3>Pour ma vie Michi</h3>
            <h4 class="desenvolvido-por">Desenvolvido por Moisés Lemos</h4>
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
        },
        methods: {
            setarImagemEspera() {
                let number = Math.floor(Math.random() * 5)
                this.imagemEspera = 'cat_' + number + '.gif'
            },
        }
    }
</script>

<style scoped lang="stylus">

    .container-body
        margin-top 35vh
        display inline-block
        position relative
        text-align center

    .container-body-fadeIn
        animation fadeIn 900ms

    .container-body-fadeOut
        animation fadeOut 500ms

    .desenvolvido-por
      animation fadeIn 2000ms normal
</style>