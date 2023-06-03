<template>
    <div>
            <video
                id="videoPlayer"
                :src="require('@/images/' + file)"
                muted="muted"
            >
            </video>
    </div>
</template>

<script>
    export default {
        name: 'VideoPlayer',
        props: ['file'],
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>