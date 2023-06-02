<template>
    <v-btn
            id="botaoSalvar"
            color="primary"
            depressed
            :disabled="disabled"
            @click="$emit('acao')">
        {{text}}
    </v-btn>
</template>

<script>
    export default {
        name: 'BotaoAcao',
        props: {
            text: {
                type: String,
                default: 'Salvar'
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>