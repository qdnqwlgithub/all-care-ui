<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
let pageNum = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0);
import { reqListTrademark,reqAddTrademark,reqUpdateTrademark,reqGetTrademarkById,reqDeleteTrademarkById } from "@/api/product/trademark";
import type {Records, Trademark} from "@/api/product/trademark/type";
import {TrademarkResponse} from "@/api/product/trademark/type";
import {FormInstance, FormRules, UploadFile, UploadFiles, UploadProps} from "element-plus";
let tableData = ref<Records>([]);
let title=ref<string>('')
let dialogVisible=ref<boolean>(false)
function handleAdd() {
  dialogVisible.value = true;
  title.value = "添加";
}
async function handleUpdate(row) {
  let {data}=await reqGetTrademarkById(row.id);
  form.value=data
  dialogVisible.value = true;
  title.value = "更新";
}

let form=ref<Trademark>({
  id: 0,
  tmName: '',
  logoUrl: ''
})

const ruleFormRef = ref<FormInstance>()

function cancel(){
  dialogVisible.value = false;
}

let getListData = async () => {
  let trademarkResponse:TrademarkResponse=await reqListTrademark({ page: pageNum.value, limit: pageSize.value });
  tableData.value = trademarkResponse.data.records;
  total.value=trademarkResponse.data.total

};

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  let {data}=response
  form.value.logoUrl = data
}

interface RuleForm {
  id?: number
  tmName: string
  logoUrl?: string
}

const rules = reactive<FormRules<RuleForm>>({
  tmName: [
    { required: true, message: 'Please input tmName', trigger: 'blur' },
    { min: 1, max: 20, message: 'Length should be 1 to 20', trigger: 'blur' },
  ]
})

// function onSuccess(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) {
//   let {data}=response;
//   form.value.logoUrl=data;
// }
// function onRemove() {
//   form.value.logoUrl='';
// }

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  let validateR=await formEl.validate((valid, fields) => {})
  if(!validateR) return

  try{
    if(form.value.id){
      await reqUpdateTrademark(form.value)
    }else {
      await reqAddTrademark(form.value)
    }
    ElMessage.success('操作成功')
  }catch (e){
    let {data}=e
    ElMessage.error(data)
  }finally {
    dialogVisible.value=false
    getListData()
    form.value={
      id: 0,
      tmName: '',
      logoUrl: ''
    }
  }

}

const handleDelete= async (row)=>{
  await reqDeleteTrademarkById(row.id)
  ElMessage.success('操作成功')
}



onMounted(() => {
  getListData();
});
</script>

<template>
  <div class="all-care-main-container">
    <el-button @click="handleAdd" type="primary" size="small">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="tmName" label="名称" width="180" />
      <el-table-column prop="logoUrl" label="logoUrl">
        <template #default="{ row }">
          <el-image
            style="width: 100px; height: 100px"
            :src="row.logoUrl"
            fit="fill"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="success" size="small" @click="handleUpdate(row)">修改</el-button>
          <el-popconfirm title="Are you sure to delete this?" @confirm="handleDelete(row)">
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @change="getListData" v-model:current-page="pageNum" :default-page-size="pageSize" background layout="prev, pager, next" :total="total" />


    <el-dialog
        v-model="dialogVisible"
        :title="title"
        width="500"
    >
      <el-form :model="form" label-width="auto" style="max-width: 600px" :rules="rules" ref="ruleFormRef">
        <el-form-item label="名称" prop="tmName">
          <el-input v-model="form.tmName"  />
        </el-form-item>
        <el-form-item label="图标">
          <el-upload
              class="avatar-uploader"
              action="/api/admin/product/fileUpload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
          >
            <img v-if="form.logoUrl" :src="form.logoUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="danger" @click="cancel">取消</el-button>
          <el-button type="success" @click="submitForm(ruleFormRef)">提交</el-button>
        </div>
      </template>
    </el-dialog>


  </div>
</template>

<style scoped lang="scss">
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
