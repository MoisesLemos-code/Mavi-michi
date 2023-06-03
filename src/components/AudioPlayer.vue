<template>
    <div>
        <v-btn icon @click="controleAudio" id="btnAudioMusic">
            <v-icon color="tertiary" small>{{ audioController ? 'mdi-pause': 'mdi-play'}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'AudioPlayer',
        props: ['audio'],
        data() {
            return {
                audioController: false,
                audioPlay: new Audio(),
            }
        },
        mounted() {
            this.setarAudio()
        },
        methods: {
            setarAudio() {
                this.audioPlay = new Audio(require('@/images/music/' + this.audio))
            },
            controleAudio() {
                this.audioController = !this.audioController
                if (this.audioController) {
                    this.audioPlay.play()
                } else {
                    this.pausar()
                }
            },
            pausar() {
                this.audioPlay.pause()
                this.audioPlay.currentTime = 0
            },
        }
    }
</script>

<style scoped>

</style>