# OfferClear 校招清单
#### 项目使用uni-app多端框架完成，可以将代码编译到h5端，安卓端以及微信小程序端，管理端则使用Vue.js开发

> 学业繁忙，项目仍在制作中……

## 项目简介 
临近毕业，校招是每个大学生获取人生第一份工作的重要媒介，但很多大学生因为缺乏经验而陷入各种简历，面试上的难题，为此，我从学生的角度出发制作了一款提供校招资讯，题目训练以及简历管理功能的微信小程序 

## 技术选型

客户端：uni-app + uni-ui 

服务端：JAVA + MySql 

管理端：Vue + Element UI 
> 小程序端

![](https://s1.ax1x.com/2020/05/30/tKDCPx.jpg) 
> 管理端 
#### 登录/注册
![](https://s1.ax1x.com/2020/05/30/tKDVqH.jpg) 
#### 首页 
![](https://s1.ax1x.com/2020/05/30/tKDcw9.jpg) 
#### 添加/编辑 
![](https://s1.ax1x.com/2020/05/30/tKDfW6.jpg) 
## 项目结构
```
WA-Admin
├─ src
│  ├─ api        //接口文件  
│  ├─ icons      //svg图标
│  ├─ main.js    //路由守卫
│  ├─ router     //路由管理
│  ├─ store      //Vuex与缓存设置
│  ├─ styles     //sass公用样式
│  ├─ utils      //js封装
│  └─ views      //所有页面
│     ├─ About.vue
│     ├─ Home.vue
│     ├─ Info
│     │  ├─ category.vue
│     │  ├─ dialog         //弹框组件封装
│     │  │  └─ info.vue 
│     │  └─ index.vue
│     ├─ Layout
│     │  ├─ Components     //导航顶栏，导航侧栏以及主体
│     │  │  ├─ Header.vue
│     │  │  ├─ Main.vue
│     │  │  └─ Nav.vue
│     │  └─ index.vue
│     ├─ Login             //登录注册
│     │  ├─ index.vue
│     │  ├─ index2.vue
│     │  └─ index3.vue
│     └─ User
│        └─ index.vue
└─ vue.config.js
``` 

## 安装运行

* #### 第一步
    * 克隆项目到本地`git clone https://github.com/Tezectli/WA-Admin.git`
* #### 第二步
    * `npm install`安装依赖
* #### 第三步
    * 构建小程序运行服务`npm run dev:mp-weixin`
    * 构建管理端 `npm run serve`
* #### 第四部
    * 在微信小程序开发工具中预览
