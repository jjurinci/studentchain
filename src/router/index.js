import {createWebHistory, createRouter} from 'vue-router'

import Marketplace from '../views/Marketplace.vue'
import ProblemStatus from '../views/ProblemStatus.vue'
import FAQ from '../views/FAQ.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import DeliverSolution from '../components/ProblemStatus/DeliverSolution.vue'

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
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/deliver_solution',
        name: 'Deliver Solution',
        component: DeliverSolution
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router