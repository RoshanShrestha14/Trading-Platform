const router = require("express").Router();
const {NewOrders, PostNewOrders} =require('../Controllers/OrdersControllers');

router.get("/",NewOrders);
router.post('/',PostNewOrders);
module.exports=router;
