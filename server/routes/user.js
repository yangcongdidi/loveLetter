const router = require('koa-router')()
const userModel =require('../Model/User')
router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a user response!'
})

router.get('/getTop', async function (ctx, next) {
    const res = await userModel.find({})
        .sort({updateTime:-1})
        .exec( (err,doc)=>{
        if(doc){
            ctx.body=doc
        }
    })
})




module.exports = router
