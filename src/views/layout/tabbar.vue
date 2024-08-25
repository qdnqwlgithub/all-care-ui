<script setup lang="ts">
import { useSettingStore } from "@/store/modules/setting";
import { useUserStore } from "@/store/modules/user";
import { useRouter } from "vue-router";
let router = useRouter();
let userStore = useUserStore();
let settingStore = useSettingStore();
import { ArrowRight } from "@element-plus/icons-vue";
import { Search, Refresh, FullScreen } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const route = useRoute();
import emitter from "@/utils/emitter";
const refreshRouteView = () => {
  emitter.emit("destroy-router-view");
};
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();
const logout = () => {
  userStore.doLogout();
  router.push({ path: "/login", query: { redirect: `${route.path}` } });
};
</script>

<template>
  <el-row style="height: 100%">
    <el-col class="left" :span="12">
      <el-icon
        @click="settingStore.collapse = !settingStore.collapse"
        v-show="settingStore.collapse"
        ><Expand
      /></el-icon>
      <el-icon
        @click="settingStore.collapse = !settingStore.collapse"
        v-show="!settingStore.collapse"
        ><Fold
      /></el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in route.matched">
          {{ item.meta?.title || item.path }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col class="right" :span="12">
      <el-button :icon="Refresh" circle />
      <el-button @click="toggle" :icon="FullScreen" circle />
      <el-button :icon="Search" circle />

      <!--      <span class="demonstration">{{ fit }}</span>-->
      <!--      <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />-->
      <el-dropdown>
        <span class="el-dropdown-link">
          Mid
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.left {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
  text-align: left;
}
</style>
