import router from "./index"
import { getToken } from "@/utils/app"
const whiteRouter = ['/login'] //indexOf :判断数组中是否存在某个值   如果不存在则返回-1
router.beforeEach((to, from, next) => {
    if (getToken()) {
        console.log("存在")
        next()
    } else {
        console.log("不存在");
        if (whiteRouter.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
    // console.log(to); //进入的页面
    // console.log(from); //离开之前的页面（上一个）
    // console.log(next);
    // next(); //添加参数会进入死循环
})