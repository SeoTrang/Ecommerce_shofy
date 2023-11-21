import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import HomeProfile from "../pages/Profile/HomeProfile/HomeProfile";
import ProfileAddress from "../pages/Profile/ProfileAddress/ProfileAddress";
import ProfileChangePass from "../pages/Profile/ProfileChangePass/ProfileChangePass";
import ProfileInfo from "../pages/Profile/ProfileInfo/ProfileInfo";
import ProfileOder from "../pages/Profile/ProfileOder/ProfileOder";
import ProfileVoucher from "../pages/Profile/ProfileVoucher/ProfileVoucher";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Wishlist from "../pages/wishlist/wishlist";


const RouteConfig =  [
        {
          path: "/",
          component:Home,
          layout:true,
          
        },
        {
          path: "/detail",
          component: Detail,
          layout:true
        },
        {
          path: "/product",
          component: Product,
          layout:true
        },
        {
          path: "/cart",
          component: Cart,
          layout:true
        },
        {
          path: "/checkout",
          component: Checkout,
          layout:true
        },
        {
          path: "/wishlist",
          component: Wishlist,
          layout:true
        },
        {
          path: "/profile/Home",
          component: HomeProfile,
          layout:true
        },
        {
          path: "/profile/Information",
          component: ProfileInfo,
          layout:true
        },
        {
          path: "/profile/Address",
          component: ProfileAddress,
          layout:true
        },
        {
          path: "/profile/MyVoucher",
          component: ProfileVoucher,
          layout:true
        },
        {
          path: "/profile/MyOrders",
          component: ProfileOder,
          layout:true
        },
        {
          path: "/profile/ChangePassword",
          component: ProfileChangePass,
          layout:true
        },
        {
          path: "/login",
          component: Login,
          layout:false
        },
        {
          path: "/register",
          component: Register,
          layout:false
        },


    ]


export default RouteConfig;