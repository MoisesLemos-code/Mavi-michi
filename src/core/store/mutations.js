import {mutationTypes} from '../constants'

export default {

    [mutationTypes.SET_SENHA_CONTEUDO_PRIVADO](state, senha) {
        state.conteudoPrivado.senha = senha.toUpperCase()
    },
}
