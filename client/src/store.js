import Vuex from 'vuex';
<<<<<<< HEAD
import usersModule from './modules/UserModule';
import shopModule from './modules/ShopModule';
=======
<<<<<<< HEAD
import userModule from './modules/userModule';
=======
import usersModule from './modules/users.module';
import shopModule from './modules/shop.module';
>>>>>>> 4d96f84d58923c8ca1323de8be4a4310b7645e77
>>>>>>> 688e461c73fb97ac2488ed72d767394c97cf3953

// const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
    modules: {
<<<<<<< HEAD
      user : userModule,
    //   shop: shopModule,
=======
      user : usersModule,
      shop: shopModule,
>>>>>>> 4d96f84d58923c8ca1323de8be4a4310b7645e77
    //   cart : cartModule
    },
    // strict : !isProduction
  })
  