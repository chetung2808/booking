import express from 'express'
import { getAllUsers, getUser } from '../controllers/users.js';
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//đăng nhập
router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send('You are Logged In!')
});
//đăng nhập và xóa tài khoản 

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send('You are Logged In and You can delete account!')
})


//tim nguoi dung theo id
router.get('/:id', verifyUser, getUser);

//Admin, có thể thấy tất cả người dùng
router.get('/', isAdmin, getAllUsers);

export default router;