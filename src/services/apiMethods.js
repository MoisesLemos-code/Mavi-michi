import { api } from './api'

export default {

    buscarArquivoPasta: (cap, arquivo) => {
        return api.get('/buscarArquivoPasta/' + cap + '/' + arquivo)
    },
}