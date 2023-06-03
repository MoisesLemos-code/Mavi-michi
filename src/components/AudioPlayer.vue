<template>
    <div class="container-audio">
        <v-btn icon @click="controleAudio" id="btnAudioMusic">
            <v-icon color="tertiary" small>{{ audioController ? 'mdi-pause': 'mdi-play'}}</v-icon>
        </v-btn>
      <v-btn icon @click="pular" id="btnAudioMusicPular" v-if="pularMusica" style="margin-left: 10px">
        <v-icon color="tertiary" small>mdi-skip-next</v-icon>
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
            audioArray: Array,
            pularMusica: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                audioController: false,
                audioPlay: new Audio(),
                numeroMusicaAtual: 0
            }
        },
        mounted() {
            this.setarAudio()
        },
        methods: {
            setarAudio() {
                if(this.audioArray.length > 0){
                    this.numeroMusicaAtual = Math.floor(Math.random() * this.audioArray.length)
                    this.audioPlay = new Audio(require('@/images/music/' + this.audioArray[this.numeroMusicaAtual]))
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
            },
            pular(){
                if(this.pularMusica){
                    if(this.audioArray.length > 0){
                        this.numeroMusicaAtual = this.numeroMusicaAtual + 1
                        if(this.numeroMusicaAtual >= this.audioArray.length){
                            this.numeroMusicaAtual = 0
                        }
                        this.audioPlay.pause()
                        this.audioPlay.currentTime = 0
                        this.audioPlay = new Audio(require('@/images/music/' + this.audioArray[this.numeroMusicaAtual]))
                        this.audioPlay.play()
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>