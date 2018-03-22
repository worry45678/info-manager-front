<template>
<el-container>
<!-- Form -->
<el-dialog @close="test('close')" title="表单详情" :visible.sync="visible" top="5vh" :show-close="true" :center="true">
    <div class="dialog-body">
    <asset-form ref="form" class="dialog-form"></asset-form>
    </div>
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
      showclose: false
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
    },
    test(text) {
      this.$emit('update:visible', false)
      console.log(text)
    }
  }
}
</script>

<style>
  .dialog-body {
    height: 450px;
    overflow: scroll
  }
</style>

