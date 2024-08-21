<script setup lang="ts">
import {defineProps,computed,onMounted} from "vue";

let props = defineProps({
  menus: Array,
  required: true
});
import Item from "./item.vue";

</script>
<script lang="ts"></script>

<template>
  <el-menu class="el-menu-vertical-demo" v-if="menus" router>
    <template v-for="menu in menus">
      <item v-if="!(menu.meta?.hidden)" :menu="menu" />
    </template>
  </el-menu>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
