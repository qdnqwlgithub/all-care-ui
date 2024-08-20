<script setup lang="ts">
import { routes } from "@/router";
import { onMounted, computed } from "vue";
import { useUserStore } from "@/store/modules/user";
import MyMenu from "@/components/MyMenu/index.vue";
let userStore = useUserStore();
</script>

<template>
  <div class="common-layout">
    <el-scrollbar>
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <my-menu :menus="userStore.menus" />
          </el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss"></style>
