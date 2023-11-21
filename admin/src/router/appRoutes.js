import Layout from '../layout/Layout.vue';
import Home from '../pages/Home/Home.vue';
import Login from '../pages/Auth/Login.vue';
import Category from '../pages/Category/Category.vue';
import Product from '../pages/Product/Product.vue';
import Brand from '../pages/Brand/Brand.vue';
import AddProduct from '../pages/Product/AddProduct/AddProduct.vue';
import Order from '../pages/Order/Order.vue';

const appRoutes = [
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/category',
          component:Category
        },
        {
          path: '/product',
          component: Product
        },
        {
          path: '/brand',
          component:Brand
        },
        {
          path:'/add-product',
          component:AddProduct
        },
        {
          path:'/order',
          component:Order
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
  
  export default appRoutes;