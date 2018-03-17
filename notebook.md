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



### Login功能
* src/views/login 登录界面，前端验证用户名和密码是否符合格式，通过后，通过store.dispatch出发Login事件，向后端提交，确认成功进入'/'页面,同时保存TOKEN，否则返回error submit
  * src/store/modules/user.js Login事件，调用src/api/login.js 中的login方法