<template>
<el-container>
<!-- Form -->
    <asset-form ref="form"></asset-form>
    <div>
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
</el-container>
</template>

<script>
import assetForm from '@/views/form/asset.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    assetForm
  },
  methods: {
    cancel() {
      this.$message('cancel')
    },
    confirm() {
      this.$refs.form.onSubmit().then(response => {
        this.$message('submit!')
        console.log(response)
      })
    }
  }
}
</script>
