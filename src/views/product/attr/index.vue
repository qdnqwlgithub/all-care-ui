<script setup lang="ts">
import {ref} from "vue";
let c1=ref<number|undefined>(undefined)
let c2=ref<number|undefined>(undefined)
let c3=ref<number|undefined>(undefined)
let c1DataList=ref([])
let c2DataList=ref([])
let c3DataList=ref([])

</script>

<template>
  <div class="all-care-main-container">
    <div class="all-care-main-container">

    <el-form :inline="true">
      <el-form-item label="一级菜单">
        <el-select
            v-model="c1"
            placeholder="Select"
            size="large"
            style="width: 240px">
        </el-select>
      </el-form-item>
      <el-form-item label="二级菜单">
        <el-select
            v-model="c1"
            placeholder="Select"
            size="large"
            style="width: 240px">
        </el-select>
      </el-form-item>
      <el-form-item label="三级菜单">
        <el-select
            v-model="c1"
            placeholder="Select"
            size="large"
            style="width: 240px">
        </el-select>
      </el-form-item>

    </el-form>
    </div>

    <div class="all-care-main-container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="属性名称" label="属性名称" width="180" />
        <el-table-column prop="属性值" label="属性值" width="180" />
        <el-table-column prop="操作" label="操作" />
      </el-table>
    </div>


  </div>

</template>

<style scoped lang="scss"></style>
