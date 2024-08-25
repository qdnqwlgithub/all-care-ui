<script setup lang="ts">
import {ref} from "vue";
import {Trademark} from "@/api/product/trademark/type";

let formData=ref<Trademark|undefined>(undefined)
function init(trademark:Trademark){
  formData.value=trademark
}
</script>

<template>
</template>

<style scoped lang="scss">
</style>
