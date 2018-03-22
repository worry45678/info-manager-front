<template>
<el-container>
<!-- Form -->
<el-dialog title="表单详情" :visible.sync="visible">
    <asset-form ref="form"></asset-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
  </div>
</el-dialog>
</el-container>
</template>

<script>
import assetForm from '@/views/form/asset.vue'
export default {
  data() {
    return {
    }
  },
  props: ['visible'],
  components: {
    assetForm
  },
  methods: {
    cancel() {
      this.$emit('update:visible', false)
    },
    confirm() {
      this.$refs.form.onSubmit().then(response => {
        this.$message('submit!')
        console.log(response)
        this.$emit('update:visible', false)
      })
    }
  }
}
</script>
