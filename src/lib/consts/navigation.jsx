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

export const RECENT_ORDERS = [
    {
        customer: 'Wade Warren',
        order_no: '15478256',
        amount: 124.00,
        status: 'Delivered'
    },
    {
        customer: 'Jane Cooper',
        order_no: '49878256',
        amount: 324.00,
        status: 'Delivered'
    },
    {
        customer: 'Guy Hawkins',
        order_no: '86218256',
        amount: 45.88,
        status: 'Cancelled'
    },
    {
        customer: 'Kristin Watson',
        order_no: '92618256',
        amount: 65.00,
        status: 'Pending'
    },
    {
        customer: 'Cody Fisher',
        order_no: '23178256',
        amount: 545.00,
        status: 'Delivered'
    },
    {
        customer: 'Savannah Nguyen',
        order_no: '156478256',
        amount: 224.00,
        status: 'Delivered'
    }
]

export const CUSTOMER_FEEDBACK = [
    { name: "Alice Johnson", rating: 5, feedback: "Excellent service! Will definitely recommend to others." },
    { name: "Bob Smith", rating: 4, feedback: "Great product, but the delivery was a bit slow." },
    { name: "Catherine Lee", rating: 3, feedback: "The quality is okay, but I expected more for the price." },
    { name: "David Brown", rating: 5, feedback: "Absolutely fantastic! Exceeded my expectations." },
    { name: "Ella Davis", rating: 4, feedback: "Very satisfied with the purchase. Customer support was helpful." },
    { name: "Frank Harris", rating: 2, feedback: "Not happy with the product. It didn't match the description." },
    { name: "Grace Wilson", rating: 5, feedback: "Amazing! Will buy again without hesitation." },
    { name: "Henry Miller", rating: 3, feedback: "It's an average product. Nothing special." },
    { name: "Irene Martinez", rating: 4, feedback: "Good value for money. I'm happy with it overall." },
    { name: "Jack Robinson", rating: 1, feedback: "Very disappointed. The product arrived damaged." }
  ];