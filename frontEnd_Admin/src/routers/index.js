import { createWebHistory, createRouter } from "vue-router";

// import store from "../store/store"

const routes = [

    {
        path: "/",
        name: "HomePage",
        component: () => import("@/views/HomePage.vue"),
        // props: true
    },
    {
        path: "/Cart",
        name: "Cart",
        component: () => import("@/views/Cart.vue"),
        // props: true
    },
    {
        path: "/Pay",
        name: "Pay",
        component: () => import("@/views/Pay.vue"),
        // props: true
    },
    {
        path: "/Admin/Login",
        name: "LoginAdmin",
        component: () => import("@/views/LoginAdmin.vue"),
        // props: true
    },




    {
        path: "/Products",
        name: "Products",
        component: () => import("@/views/Product_Management.vue"),
        // props: true
    },
    // {
    //     path: "/:pathMatch(.*)*",
    //     name: "notfound",
    //     component: () => import("@/views/NotFound.vue"),
    // },
    // {
    //     path: "/Diary/:id",
    //     name: "diary.edit",
    //     component: () => import("@/views/DiaryEdit.vue"),
    //     props: true // Truyền các biến trong $route.params vào làm props
    // },
    {
        path: "/Clients",
        name: "Clients",
        component: () => import("@/views/Clients_Management.vue"),
    },
    {
        path: "/Catalog",
        name: "Catalog",
        component: () => import("@/views/Catalog_Management.vue"),
    },
    {
        path: "/Promotion",
        name: "Promotion",
        component: () => import("@/views/Promotion_Managemnet.vue"),
    },
    {
        path: "/Orders",
        name: "Orders",
        component: () => import("@/views/Order_Management.vue"),
    },
    {
        path: "/Receipts",
        name: "Receipts",
        component: () => import("@/views/Receipt_Management.vue"),
    },

];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
// router.beforeEach((to, from) => {
//     const authenticated=store.state.isAuthenticated
//     if ((to.name === 'Home' || to.name === 'diary.edit' || to.name === 'diary.create' || to.name === 'changeName' || to.name === 'changePass' || to.name === 'deleteAcc' )&& authenticated===false) {
//         router.push('/Diary/Login')
//     }
// })
export default router;
