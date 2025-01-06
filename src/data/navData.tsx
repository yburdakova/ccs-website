import AboutIcon from "@/components/icons/AboutIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import QuotesIcon from "@/components/icons/QuotesIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import SoftwareIcon from "@/components/icons/SoftwareIcon";


export const navData = [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon/>
  },
  {
    name: 'About',
    path: '/about',
    icon: <AboutIcon/>
  },
  {
    name: 'Quotes',
    path: '/quotes',
    icon: <QuotesIcon/>
  },
  {
    name: 'Software',
    path: '/software',
    icon: <SoftwareIcon/>
  },
  {
    name: 'Services',
    path: '/services',
    icon: <ServiceIcon/>
  }
];