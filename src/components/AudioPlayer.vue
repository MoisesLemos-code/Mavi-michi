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
        props: {
            audio: String,
            autoplay:{
                type: Boolean,
                default: false
            },
            audioArray: Array
        },
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
                if(this.audioArray.length > 0){
                    let number = Math.floor(Math.random() * this.audioArray.length)
                    this.audioPlay = new Audio(require('@/images/music/' + this.audioArray[number]))
                } else{
                    this.audioPlay = new Audio(require('@/images/music/' + this.audio))
                }
                if(this.autoplay){
                    document.getElementById('btnAudioMusic').click()
                }
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