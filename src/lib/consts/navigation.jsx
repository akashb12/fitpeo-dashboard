import {
    HiOutlineHome,
    HiOutlineChartSquareBar,
    HiOutlineClipboardCheck,
    HiOutlineShoppingBag,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'
import { BiWalletAlt } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineHome />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineChartSquareBar />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineClipboardCheck />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <BiWalletAlt />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <HiOutlineShoppingBag />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'logout',
        label: 'Logout',
        path: '/login',
        icon: <RiLogoutCircleRLine />
    }
]

export const CHART_DATA = [
    {
        name: '5',
        Income: 24000
    },
    {
        name: '7',
        Income: 20000
    },
    {
        name: '9',
        Income: 13980
    },
    {
        name: '11',
        Income: 98000
    },
    {
        name: '13',
        Income: 39080
    },
    {
        name: '15',
        Income: 48000
    },
    {
        name: '17',
        Income: 38000
    },
    {
        name: '19',
        Income: 43000
    },
    {
        name: '21',
        Income: 98000
    },
    {
        name: '23',
        Income: 39080
    },
    {
        name: '27',
        Income: 48000
    },
]