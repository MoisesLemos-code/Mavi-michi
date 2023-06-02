<template>
    <v-dialog v-model="value" max-width="720" scrollable @click:outside="fecharModal">
        <v-card>
            <v-toolbar dark color="primary" elevation="0">
                <v-toolbar-title>Informações
                </v-toolbar-title>
                <v-spacer/>
                <v-btn class="close__button" text @click="fecharModal" icon>
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text class="modal-personagem-historia">
                <v-container fluid grid-list-xl white>
                    <v-row wrap align-center white>
                        <v-col class="pr-0">
                            <v-img
                                    :lazy-src="require('@/images/'+$store.state.imagemLoading)"
                                    :src="personagem.foto"
                                    width="120"
                                    height="120"
                                    class="imagem-personagem"
                            />
                        </v-col>
                        <v-col class="pl-0">
                            <div class="personagem-info">
                                <h3>{{personagem.nome}}</h3>
                                <label>Idade: {{personagem.idade ? personagem.idade + ' anos.' : 'Não identificada.'}} </label><br/>
                                <label>Hobby: {{personagem.hobby ? personagem.hobby : 'Não identificado.'}}</label>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row wrap align-center white>
                        <v-col cols="12" style="text-align: justify">
                            <p>{{personagem.historia}}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'ModalPersonagemHistoria',
        props: {
            value: Boolean,
            personagem: Object
        },
        methods: {
            fecharModal() {
                this.$emit('fecharModalHistoria')
            },
        }
    }
</script>

<style scoped lang="stylus">

    .modal-personagem-historia
        padding 0px !important
        overflow-x hidden
        height auto

    .imagem-personagem
        border-radius 50%
        border 2px solid #535058

    .personagem-info
        h3
            font-size 18px
    p
        margin 0
        text-indent 2ch

</style>