import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "login",
        hidden: true,
        meta: {
            name: "主页"
        }
        //component: Home
    },
    {
        path: "/login",
        name: "Login",
        //component: () => import("../views/Login/index.vue")
        hidden: true,
        meta: {
            name: "登录"
        },
        component: () =>
            import ("../views/Login/index.vue")

    },
    {
        path: "/console",
        name: "Console",
        redirect: "index",
        meta: {
            name: "控制台"
        },
        component: () =>
            import ("../views/Layout/index.vue"),
        children: [{
            path: "/index",
            name: "Index",
            meta: {
                name: "首页"
            },
            component: () =>
                import ("../views/Console/index.vue")
        }]
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/About.vue")
    // }
    /**
     * 信息管理部分----------------------------->
     */
    {
        path: "/info",
        name: "Info",
        meta: {
            name: "信息"
        },
        component: () =>
            import ("../views/Layout/index.vue"),
        children: [

            {
                path: "/infoIndex",
                name: "infoIndex",
                meta: {
                    name: "信息列表"
                },
                component: () =>
                    import ("../views/Info/index.vue")
            },
            {
                path: "/infoCategory",
                name: "infoCategory",
                meta: {
                    name: "信息管理"
                },
                component: () =>
                    import ("../views/Info/category.vue")
            },
        ]
    },
    /**
     * 用户列表部分
     */
    {
        path: "/User",
        name: "User",
        meta: {
            name: "用户管理"
        },
        component: () =>
            import ("../views/Layout/index.vue"),
        children: [

            {
                path: "/userIndex",
                name: "UserIndex",
                meta: {
                    name: "用户列表"
                },
                component: () =>
                    import ("../views/User/index.vue")
            },
        ]
    },
];

const router = new VueRouter({
    routes
});

export default router;