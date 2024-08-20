<script setup lang="ts">
import { ref, reactive } from "vue";
import { login } from "@/api/user/index";
import { useUserStore } from "@/store/modules/user";
import { LoginResponse } from "@/api/user/type";
import type { FormRules, FormInstance } from "element-plus";
const userStore = useUserStore();

const loginFormRef = ref<FormInstance>();
// do not use same name with ref
const form = reactive({
  username: "admin",
  password: "111111",
});

interface RuleForm {
  username: string;
  password: string;
}

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 10, message: "Length should be 3 to 10", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 10, message: "Length should be 3 to 10", trigger: "blur" },
  ],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      userStore.doLogin(form).then((r: LoginResponse) => {
        if (r.code == 200) {
          userStore.token = r.data.token;
          ElMessage({
            message: "success",
            type: "success",
          });
        } else {
          ElMessage.error(`${r.data.message}`);
        }
      });
    } else {
      console.log(fields);
    }
  });
};
</script>

<template>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>All care login form</span>
      </div>
    </template>
    <el-form
      :model="form"
      label-width="auto"
      style="max-width: 600px"
      :rules="rules"
      ref="loginFormRef"
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="form.password" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(loginFormRef)"
          >login</el-button
        >
        <el-button>reset</el-button>
      </el-form-item>
    </el-form>
    <template #footer>Do you all today?</template>
  </el-card>
</template>

<style scoped lang="scss"></style>
