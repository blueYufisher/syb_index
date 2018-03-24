## SYB-Indes
### 基于Vue开发的广东工业大学创新创业基地前台页面
### 项目已部署，在线Demo
- 前台商城：http://job.gdut.edu.cn/syb/
- 后台管理系统：http://job.gdut.edu.cn/syb/admin/index.html#/login
- 第一次打开可能较慢，请耐心等待


### 后台系统管理，后端接口项目请跳转至 [syb_admin](https://github.com/Exrick/xmall) 项目仓库查看

    
### 所用技术

- Vue 2.x
- Vuex
- Vue Router
- [Element UI](http://element.eleme.io/#/zh-CN)
- ES6
- webpack
- axios
- Node.js

### 本地开发运行部署
- 启动后端 [xmall](https://github.com/Exrick/xmall) 项目后，在 `config/index.js` 中修改你的后端接口地址配置
- 在 `src/api/goods.js` 中的 `getQuickSearch` 方法里修改你的Elasticseach服务器IP以及RESTful快速搜索提示接口配置
- `index.html` 中复制粘贴替换你的 [hotjar](https://github.com/Exrick/xmall/blob/master/study/hotjar.md) 代码
- 若不启动后端项目，预览运行此前端项目可注释掉 `src/main.js` 中第 `8、10、37-59` 行代码即可
- 在项目根文件夹下先后执行命令 `npm install` 、 `npm run dev`
- 商城前台端口默认9999 http://localhost:9999
