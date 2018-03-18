<template>
  <scroll-bar>
  <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
  </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from '@/components/ScrollBar.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    ScrollBar
  },
  computed: {
    isCollapse() {
      return !this.$store.state.opened
    }
  }
}
</script>
