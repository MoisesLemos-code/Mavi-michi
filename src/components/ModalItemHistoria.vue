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
            <v-card-text class="modal-item-historia">
                <v-container fluid grid-list-xl white>
                    <v-row wrap align-center white>
                        <v-col class="pr-0">
                            <v-img
                                    :lazy-src="require('@/images/'+$store.state.imagemLoading)"
                                    :src="item.foto"
                                    width="120"
                                    height="120"
                                    class="imagem-item"
                            />
                        </v-col>
                        <v-col class="pl-0">
                            <div class="item-info">
                                <h3>{{item.nome}}</h3>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row wrap align-center white>
                        <v-col cols="12" style="text-align: justify">
                            <p>{{item.historia}}</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'ModalItemHistoria',
        props: {
            value: Boolean,
            item: Object
        },
        methods: {
            fecharModal() {
                this.$emit('fecharModalItem')
            },
        }
    }
</script>

<style scoped lang="stylus">

    .modal-item-historia
        padding 0px !important
        overflow-x hidden
        height auto

    .imagem-item
        border-radius 50%
        border 2px solid #535058

    .item-info
        h3
            font-size 18px
    p
        margin 0
        text-indent 2ch

</style>