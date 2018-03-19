<template>
  <scroll-bar>
  <el-menu mode="vertical" unique-opened :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
  </scroll-bar>
</template>

<script>
import ScrollBar from '@/components/ScrollBar.vue'
import SidebarItem from './SiderbarItem.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    ScrollBar,
    SidebarItem
  },
  computed: {
    isCollapse() {
      return !this.$store.state.sidebar.opened
    },
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>
