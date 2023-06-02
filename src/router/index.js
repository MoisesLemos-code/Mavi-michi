import Router from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import store from '@/core/store'

import TelaApresentacao from '../views/TelaApresentacao'
import Inicio from '../views/Inicio.vue'
import ConteudoPrivado from '../components/ConteudoPrivado'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'TelaApresentacao',
            component: TelaApresentacao
        },
        {
            path: '/inicio',
            name: 'Inicio',
            component: Inicio
        },
        {
            path: '/:rotaDesejada/conteudoPrivado',
            name: 'ConteudoPrivado',
            component: ConteudoPrivado,
        },
    ],
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
})

router.beforeEach(async (to, from, next) => {

    if (to.matched.some(record => record.meta.privado)) {
        const storeSenha = store.getters.getSenhaConteudoRestrito
        if(storeSenha === to.meta.secret){
            next()
        }else {
            next({name: 'ConteudoPrivado', params: {rotaDesejada: to.name}})
        }
    } else {
        next()
    }
})

export default router