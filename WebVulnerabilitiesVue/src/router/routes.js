const routes = [
  {
    path: "/",
    alias: "/todos",
    name: "todos",
    component: () => import("../components/BlogView.vue"),
  },
  {
    path: "/todos/:id",
    name: "todos-details",
    component: () => import("../components/BlogPosts.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddBlogPost.vue"),
  },
  {
    path: "/",
    name: "signup",
    component: () => import("../components/SignupView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginView.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue"),
  },
];

export default routes;
