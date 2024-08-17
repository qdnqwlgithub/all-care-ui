<script setup lang="ts">
import request from "@/utils/request";
import { onMounted } from "vue";
onMounted(() => {
  request({
    url: "/user/login",
    method: "post",
    data: {
      username: "123",
      passsword: "123",
    },
  }).then((r) => {
    console.log(r);
  });
});
</script>

<template>
  <router-view />
</template>

<style scoped lang="scss">
div {
  color: $myc;
}
</style>
