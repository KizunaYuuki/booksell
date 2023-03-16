import { createWebHistory, createRouter } from "vue-router";

import Main from "@/views/Main.vue";
const routes = [
{
path: "/",
name: "main",
component: Main,
},
{
path: "/acc",
name: "acc",
component: () => import("../components/Account.vue"),
},
{
path: "/test",
name: "test",
component: () => import("../components/CategoryView.vue"),
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
    path: "/sp",
    name: "Pay",
    component: () => import("../components/Book_Details.vue"),
    // props: true
},
];
const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
export default router;
