<template>
    <div class="background-conteudo-privado">
        <v-container fluid>
            <div class="container-body-conteudo-privado">
                <div>
                    <v-img style="margin: 0 auto"
                           :src="(imagemEspera ? require('@/images/loading/' + imagemEspera) : null)" width="120"
                           height="120"
                           aspect-ratio="2.5"/>
                </div>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card>
                            <v-form class="form-content mt-0 pl-0 pr-0" @submit.prevent="verificarSenha">
                                <v-toolbar dark color="primary" elevation="0">
                                    <v-toolbar-title>Conteúdo privado
                                        <v-icon>mdi-lock</v-icon>
                                    </v-toolbar-title>
                                </v-toolbar>
                                <v-card-text class="conteudoPrivado">
                                    <v-container fluid grid-list-xl white>
                                        <v-row wrap align-center white class="pl-5 pr-5">
                                            <v-col cols="12" md="12" sm="12" xs="12">
                                                <v-text-field
                                                        v-model="senha"
                                                        name="palavra chave"
                                                        placeholder="Informe a palavra chave..."
                                                        counter="100"
                                                        maxlength="100"
                                                        v-validate="{ required: true}"
                                                        :error-messages="errors.collect('palavra chave')"
                                                />
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-container>
                                    <v-row wrap align-center white class="pl-10 pr-10 row-bottom">
                                        <botao-voltar rota="Inicio" outlined/>

                                        <botao-acao text="Confirmar" @acao="verificarSenha"/>
                                    </v-row>
                                </v-container>
                            </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import BotaoAcao from './BotaoAcao'
    import BotaoVoltar from './BotaoVoltar'
    import {mutationTypes} from '@/core/constants'

    export default {
        name: 'ConteudoPrivado',
        components: {BotaoVoltar, BotaoAcao},
        data() {
            return {
                imagemEspera: null,
                senha: null
            }
        },
        mounted() {
            this.setarImagemEspera()
        },
        methods: {
            setarImagemEspera() {
                let number = Math.floor(Math.random() * 8)
                this.imagemEspera = 'avocado_anime_' + number + '.gif'
            },
            async verificarSenha() {
                if (await this.validarDadosFormulario()) {
                    this.$store.commit(mutationTypes.SET_SENHA_CONTEUDO_PRIVADO, this.senha)
                    this.$router.push({name: this.$route.params.rotaDesejada})
                }
            },
            async validarDadosFormulario() {
                return this.$validator._base.validateAll()
            },
        }
    }
</script>


<style scoped lang="stylus">

    .background-conteudo-privado
        background-color #6CC048
        min-height 100vh

    .container-body-conteudo-privado
        margin-top 25vh

    .row-bottom
        border-top-width 1px
        border-top-style solid
        border-top-color #ccc
        box-sizing border-box
        padding-top 10px
        padding-bottom 10px
        display flex
        justify-content space-between

    .conteudoPrivado
        padding 0px !important
        overflow-x hidden
        height auto

</style>