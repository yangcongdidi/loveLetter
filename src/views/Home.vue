<template>
    <div class="page">
        <HelloWorld ></HelloWorld>

    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

import Flexable from '../assets/flexable.min.js'
export default {
  name: 'home',
  components: {
    HelloWorld

  },
    data(){
      return {
          show:true,
      }
    }
}
</script>

<style lang="stylus" scoped>
</style>
