import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import pt from 'vuetify/es5/locale/pt'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    lang: {
        locales: { pt },
        current: 'pt'
    },
    theme: {
        themes: {
            light: {
                primary: '#bfffbc',
                secondary: '#F4F4F4',
                tertiary: '#F6E4F6'
            }
        }
    },
    options: {
        customProperties: true
    }
})

