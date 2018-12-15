const router = require('koa-router')()
const messageModel =require('../Model/Message')
const getMobile = require('../util/util')
const getName = require('../util/randName')
router.prefix('/message')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a message response!'
})

router.get('/getPublicNoitce', async function (ctx, next) {
    let   num = parseInt(ctx.query.num)
    const res = await messageModel.find({})
        .sort({updateTime:-1})
        .limit(5)
        .skip(num)
        .exec( (err,doc)=>{
        if(doc){
            ctx.body=doc
        }
    })
})




router.post('/setPublicNoitce', function (ctx, next) {
    // get获取cxt.query
    //post获取 ctx.request.body
    let content =ctx.request.body.content;
    let message = new  messageModel(
            {
                name:getName(),
                phone:getMobile(),
                content: content,
                updateTime:(new Date()).getTime(),
                dianzan:0
            }
        );
    message.save( function (err) {
        if (err) {
            console.log(err);
            ctx.body={
                result:'失败'
            }
        }
    });
    ctx.body={
        result:message
    }
})


router.post('/setDispatch',async function (ctx, next) {
    // get获取cxt.query
    //post获取 ctx.request.body
    let {content,recipients,recipientPhone,address,date,dispatch,wechat} =ctx.request.body;
    let message = await new  messageModel(
        {
            name:Math.random().toString(36).substr(2),
            phone:getMobile(),
            content: content,
            updateTime:(new Date()).getTime(),
            dispatch:dispatch,
            information:{
                recipients:recipients,
                phone:recipientPhone,
                address:address,
                date:date,
                wechat:wechat,
            }
        }
    );
    await message.save((err,doc)=>{
        if(doc){
            ctx.body={
                result:doc
            }
        }
    })

})


router.post('/setDianZan',async function (ctx, next) {
    // get获取cxt.query
    //post获取 ctx.request.body
    let {id} =ctx.request.body;
    const res = await messageModel.update({'_id':id},{ $inc: { dianzan: 1}})
    ctx.body={
        res
    }

})

router.get('/getHuiFu',async function (ctx, next) {
    // get获取cxt.query
    //post获取 ctx.request.body
    const id =ctx.query.id
    console.log(id)
    const res = await messageModel.findOne({'_id':id},{huifu:1})
        .sort({'huifu.updateTime':1})
        .exec()
    ctx.body={
        res
    }

})




router.post('/setHuiFu',async function (ctx, next) {
    // get获取cxt.query
    //post获取 ctx.request.body
    let {id,message} =ctx.request.body
    let name=Math.random().toString(36).substr(2)
    let month=new Date().getMonth().toString()
    let day=new Date().getDay().toString()
    let updateTime=new Date().getTime()
    if(day <9){
        day=0+day.toString()
    }
    const res = await messageModel.update({'_id':id},{$push:{huifu:{name:getName(),message:message,updateTime:updateTime,date:month +'/' +day}}})
    ctx.body={
        res
    }

})

module.exports = router
