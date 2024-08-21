<script setup lang="ts">
import { routes } from "@/router";
import { onMounted, computed } from "vue";
import { useUserStore } from "@/store/modules/user";
import MyMenu from "@/components/MyMenu/index.vue";
let userStore = useUserStore();
import MyMain from "@/views/layout/my-main.vue";
import TapBar from './tabbar.vue'
</script>

<template>
  <div class="common-layout">
    <el-scrollbar>
      <el-container>
        <el-header>
          <tap-bar/>
        </el-header>
        <el-container>
          <el-aside width="auto">
            <my-menu :menus="userStore.menus" />
          </el-aside>
          <el-container style="max-width: 100%">
            <el-main>
              <my-main />
            </el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss"></style>
