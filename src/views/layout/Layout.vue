<template>
<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
  <sidebar class="sidebar-container"></sidebar>
  <div class="main-container">
    <navbar></navbar>
    <app-main></app-main>
  </div>
</div>
</template>

<script>
import { Sidebar, Navbar, AppMain } from './components'
export default {
  data() {
    return {
    }
  },
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar
    }
  }
}
</script>
