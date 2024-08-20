<script setup lang="ts">
defineProps({
  menus: Array,
});
import Item from "./item.vue";
import { onMounted } from "vue";
</script>
<script lang="ts"></script>

<template>
  <el-menu class="el-menu-vertical-demo">
    <template v-for="menu in menus">
      <item v-if="!menu.meta.hidden" :menu="menu" />
    </template>
  </el-menu>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
