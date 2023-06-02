<template>
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 5 : 2" class="item">
          <v-img class="image-card" :src="require('@/images/' + imageName)" width="120" height="120"
                 aspect-ratio="2.5"/>
          <h3 style="text-align: center">{{ titulo }}</h3>
        </v-card>
      </v-hover>
</template>

<script>
export default {
  name: 'CardHistoria',
  props: ['imageName', 'titulo']
}
</script>

<style scoped lang="stylus">

.item
  width 120px
  cursor pointer

.image-card
  border 5px solid #2F4858

</style>