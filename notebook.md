### 依赖包，package.json
```
    "dependencies": {
    "axios": "0.17.1",
    "element-ui": "2.0.8",
    "js-cookie": "2.2.0",
    "normalize.css": "7.0.0",
    "nprogress": "0.2.0",
    "vue": "^2.5.10",
    "vue-router": "^3.0.1",
    "vuex": "3.0.1"
  },
```

### 组件components
  src\assets 资源
  src\components 组件
  src\components\Breadcrumb.vue 面包屑组件，用于导航栏
  src\components\Hamburger.vue 用于折叠侧边栏
  src\components\ScrollBar.vue 侧边栏滚动组件
  src\SvgIcon.vue 图标组件，调用scr\icons
  src\icons 图标库
  src\router\index.js 路由注册
  src\store\index.js vuex注册
  src\styles 样式文件
  src\views 视图组件
  src\views\layout 页面布局

### Icon
  1. 增加包： "svg-sprite-loader": "^3.7.1" 解析svg格式的图标文件
  2. webpack.base.conf.js 增加配置 `
        {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },`
  3. 添加icons组件，直接组件中全局注册
    ```
    import Vue from 'vue'
    import SvgIcon from '@/components/SvgIcon.vue'// svg组件

    // register globally
    Vue.component('svg-icon', SvgIcon)

    const requireAll = requireContext => requireContext.keys().map(requireContext)
    const req = require.context('./svg', false, /\.svg$/)
    requireAll(req)
    ```
  4. 图标文件，直接放在iconx/svg文件夹下

### Request
  封装axios

### Login功能
* src/views/login 登录界面，前端验证用户名和密码是否符合格式，通过后，通过store.dispatch出发Login事件，向后端提交，确认成功进入'/'页面,同时保存TOKEN，否则返回error submit
  * src/store/modules/user.js Login事件，调用src/api/login.js 中的login方法

### vue.js相关
1. v-bing .sync用法
  需要显式出发this.$emit('update:visible', false)