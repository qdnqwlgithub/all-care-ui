<script setup lang="ts">
import { onMounted, defineProps, computed } from "vue";
let props = defineProps({
  menu: Object,
  required: true,
});

let children = computed(() => props.menu.children || []);
</script>

<template>
  <div v-if="menu">
    <!-- no children -->
    <el-menu-item v-if="(menu.children || []).length <= 0" :index="menu.path">
      <span>{{ menu.meta?.title || menu.path }}- {{menu.path}}</span>
    </el-menu-item>
    <!-- parent children -->
    <el-sub-menu :index="menu.path" v-else>
      <template #title>
        <span>{{ menu.meta?.title || menu.path }}</span>
      </template>
      <item v-for="item in children" :menu="item" />
    </el-sub-menu>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<script lang="ts">
export default {
  name: "Item",
};
</script>
