<template>
<el-container>
<!-- Form -->
<el-dialog title="表单详情" :visible.sync="dialogFormVisible">
    <new-asset></new-asset>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</el-container>
</template>

<script>
import newAsset from '@/views/form/newAsset.vue'
export default {
  data() {
    return {
    }
  },
  poops: ['dialogFormVisible'],
  components: {
    newAsset
  }
}
</script>
