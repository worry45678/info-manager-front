<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <div class="right-menu">
    <el-badge :value="$store.getters.messageCount" class="right-menu-item">
    <svg-icon :icon-class="'remind'"></svg-icon>
    </el-badge>
  <el-dropdown class="avatar-container right-menu-item">
      <div class="avatar-wrapper">
          <svg-icon :icon-class="$store.getters.avatarIcon"></svg-icon>
          <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/vue">
            <el-dropdown-item>
                Vue
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item>
              <span @click="logout" style="display:block;">LogOut</span>
          </el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
  </div>
  </el-menu>
</template>

<script>
import Hamburger from '../../../components/Hamburger.vue'
import Breadcrumb from '../../../components/Breadcrumb.vue'

export default {
  data() {
    return {
    }
  },
  methods: {
    logout() {
      console.log('logout')
    },
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    }
  },
  components: {
    Hamburger,
    Breadcrumb
  },
  computed: {
    sidebar() {
      // return this.$store.state.sidebar
      return { opened: true }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .right-menu {
    float: right;
    margin-right: 6%;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
      .svg-icon {
        height: 30px;
        width: 30px;
      }
    }
    .avatar-container {
      height: 50px;
      display: inline-block;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}

</style>