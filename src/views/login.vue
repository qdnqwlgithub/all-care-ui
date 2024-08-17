<script setup lang="ts">
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  username: "",
  password: ""
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<template>
    <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>All care login form</span>
      </div>
    </template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" />
    </el-form-item>
       <el-form-item>
      <el-button type="primary" @click="onSubmit">login</el-button>
      <el-button>reset</el-button>
    </el-form-item>
  </el-form>
    <template #footer>Do you all today?</template>
  </el-card>
 
</template>

<style scoped lang="scss"></style>
