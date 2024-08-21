<script setup lang="ts">
import {onMounted, ref,nextTick} from "vue";
import emitter from "@/utils/emitter";
emitter.on('destroy-router-view',()=>{
  if(!work.value){
    return
  }
  work.value=false
  nextTick(()=>{
    work.value=true
  })
})
let work=ref(true)
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition>
      <component v-if="work" :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
