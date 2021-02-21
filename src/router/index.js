import {createWebHistory, createRouter} from 'vue-router'

import Marketplace from '../views/Marketplace.vue'
import ProblemStatus from '../views/ProblemStatus.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import DeliverSolution from '../components/ProblemStatus/SolverMode/DeliverSolution.vue'
import ReviewSolution from '../components/ProblemStatus/BuyerMode/ReviewSolution.vue'
import TransactionApproved from '../components/ProblemStatus/BuyerMode/TransactionApproved.vue'

const routes = [
    {
        path: '/',
        name: 'Marketplace',
        component: Marketplace
    },
    {
        path: '/problem_status',
        name: 'Problem Status',
        component: ProblemStatus
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'Login',
        component: Login        
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/profile/:user_id',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/deliver_solution/:problem_id',
        name: 'Deliver Solution',
        component: DeliverSolution
    },
    {
        path: '/review_solution/:problem_id',
        name: 'Review Solution',
        component: ReviewSolution
    },
    {
        path: '/transaction_approved',
        name: 'Transaction Approved',
        component: TransactionApproved
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'))

    if(!user && to.name != 'Marketplace' && to.name != 'FAQ'
             && to.name != 'Contact'     && to.name != 'Login'
             && to.name != 'Register'){
        next('/login')
    }
    else next()
})

export default router