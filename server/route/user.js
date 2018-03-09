/**
 * Created by Aus on 2018/3/9.
 */
import express from 'express';
import User from '../proxy/user';
const router = express.Router();

// users模块下的路径 路由表
// 判断用户是否登录
router.get('/get-user-sign-in-status', User.getUserSignInStatus);
// // 注册
// router.post('/sign-up', Users.signUpUser);
//
// // 登录
// router.post('/sign-in', Users.signInUser);
//
// // 登出
// router.post('/sign-in', Users.signOutUser);
//
// module.exports = router;

export default router;