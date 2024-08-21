<script setup lang="ts">
import { defineProps, computed, onMounted } from "vue";
import { useSettingStore } from "@/store/modules/setting";
let settingStore = useSettingStore();
defineProps({
  menus: Array,
  required: true,
});
import Item from "./item.vue";
</script>
<script lang="ts"></script>

<template>
  <el-menu
    class="el-menu-vertical-demo"
    v-if="menus"
    router
    :collapse="settingStore.collapse"
  >
    <template v-for="menu in menus">
      <item v-if="!menu.meta?.hidden" :menu="menu" />
    </template>
  </el-menu>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
