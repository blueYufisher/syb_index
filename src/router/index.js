import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('/page/index.vue')
const Login = () => import('/page/Login/login_self.vue')
// const Register = () => import('/page/Login/register.vue')
const Home = () => import('/page/Home/home.vue')
const About = () => import('/page/About/about.vue')
const Base = () => import('/page/Base/base.vue')
const Project = () => import('/page/Project/project.vue')
const projectDetail = () => import('/page/Project/projectDetail.vue')
const Tutor = () => import('/page/Tutor/tutor.vue')
const Guide = () => import('/page/Guide/guide.vue')
const Service = () => import('/page/Service/service.vue')
const Contact = () => import('/page/About/contact.vue')
const Detail = () => import('/page/Detail/detail.vue')
const Search = () => import('/page/Search/search.vue')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'about', component: About},
        {path: 'base', component: Base},
        {path: 'project', component: Project},
        {path: 'tutor', component: Tutor},
        {path: 'guide', component: Guide},
        {path: 'service', component: Service},
        {path: 'contact', component: Contact},
        {path: 'detail', component: Detail},
        {path: 'projectDetail', name: 'projectDetail', component: projectDetail},
        {path: 'search', name: 'search', component: Search}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    // {path: '/register', name: 'register', component: Register},
    {path: '*', redirect: '/home'}
  ]
})
