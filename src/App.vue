<template>
    <v-app>
        <v-main class="bodyFont">
            <router-view/>
        </v-main>
    </v-app>
</template>

<style lang="stylus">
    .bodyFont
        font-family 'Indie Flower', cursive

    @keyframes opacityIn
        from
            opacity 0
        to
            opacity 1

    @keyframes opacityOut
        from
            opacity 1
        to
            opacity 0

    @keyframes fade
        from
            opacity 0
            transform scale(0.5)
        to
            opacity 1
            transform scale(1)

    @keyframes fadeIn
        from
            opacity 0
            transform scale(0.2)
        to
            opacity 1
            transform scale(1)

    @keyframes fadeOut
        from
            opacity 1
            transform scale(1)
        to
            opacity 0
            transform scale(0.1)

    @keyframes moveX
        from
            opacity 0
            transform translateX(-35%)
        to
            opacity 1
            transform translateX(0%)

    @keyframes moveXRight
        from
            opacity 0
            transform translateX(95%)
        to
            opacity 1

    @keyframes moveY
        from
            opacity 0
            transform translateY(-35%)
        to
            opacity 1
            transform translateY(0%)

    @keyframes moveYBack
        from
            opacity 0
            transform translateY(95%)
        to
            opacity 1
            transform translateY(0%)

    @keyframes pisca
      0%, 100%
        opacity 1
      50%
        opacity 0

</style>
