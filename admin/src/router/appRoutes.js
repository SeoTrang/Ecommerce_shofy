import Layout from '../layout/Layout.vue';
import Layout2 from '../layout/Layout2.vue';
import Home from '../pages/Home/Home.vue';
import Login from '../pages/Auth/Login.vue';
import Category from '../pages/Category/Category.vue';
import Product from '../pages/Product/Product.vue';
import Brand from '../pages/Category/Brand/Brand.vue';
import AddProduct from '../pages/Product/AddProduct/AddProduct.vue';
import AddProduct2 from '../pages/Product/AddProduct2/AddProduct2.vue';
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
          path:'/add-product-2',
          component:AddProduct2
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