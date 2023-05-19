import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
export const sideBarItems = [
    {
        title: "Dashboard",
        icon: DashboardOutlinedIcon,
        route: '/'
    },
    {
        title: "Campain",
        icon: CampaignOutlinedIcon,
        route: '/campain'
    }
    ,
    {
        title: "Payment",
        icon: LocalAtmOutlinedIcon,
        route: '/payment'
    }
    ,
    {
        title: "Transaction",
        icon: PaymentsOutlinedIcon,
        route: '/transaction'
    }
    ,
    {
        title: "Profile",
        icon: AccountCircleOutlinedIcon,
        route: '/profile'
    },
    {
        title: "Logout",
        icon: LogoutOutlinedIcon,
        route: ''
    }
]