<template>
    <v-btn
            id="botaoVoltar"
            :outlined="outlined"
            depressed
            :icon="icon"
            :color="color"
            @click="voltar">
        <label v-if="!icon">{{ text }}</label>
        <v-icon v-if="icon" :size="sizeIcon" :color="color">mdi-arrow-left-thick</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: 'BotaoVoltar',
        props: {
            text: {
                type: String,
                default: 'Voltar'
            },
            rota: {
                type: String,
                required: true
            },
            icon: {
                type: Boolean,
                default: false
            },
            color:{
                type: String,
                default: '#999'
            },
            sizeIcon:{
                type: String,
                default: '24'
            },
            outlined:{
                type: Boolean,
                default: false
            }
        },
        methods: {
            voltar() {
                this.$router.push({name: this.rota})
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
