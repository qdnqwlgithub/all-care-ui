<script setup lang="ts">
import { onMounted, defineProps, computed } from "vue";
let props = defineProps({
  menu: Object,
  required: true,
});

let children = computed(() => props.menu.children || []);
</script>

<template>
  <template v-if="menu">
    <!-- no children -->
    <el-menu-item v-if="(menu.children || []).length <= 0" :index="menu.path">
      <el-icon><document /></el-icon>
      <template #title>{{ menu.meta?.title || menu.path }}</template>
    </el-menu-item>
    <!-- parent children -->
    <el-sub-menu :index="menu.path" v-else>
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ menu.meta?.title || menu.path }}</span>
      </template>
      <item v-for="item in children" :menu="item" />
    </el-sub-menu>
  </template>
</template>

<style scoped></style>

<script lang="ts">
export default {
  name: "Item",
};
</script>
