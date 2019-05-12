const router = require('koa-router')()
const {md5} = require('../utils/index')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const UserModel = require('../db/models/user')
router.prefix('/user')

router.get('/', async ctx => {
  const res = await UserModel.find()
  ctx.body= {
    code:0,
    data:res
  }
})

router.post('/register', async ctx => {
  const {username, password, email, avatar, identify} = ctx.request.body
  
  try {
    const user = await UserModel.findOne({email})
    if (user) {
      return ctx.body = {code: 1, msg: '邮箱存在'}
    }
    const newUser = new UserModel({username, email, avatar, identify, password: md5(password)})
    const res = await newUser.save()

    return ctx.body = {code:0, data: res }
  } catch(err) {
    console.log(err)
    return ctx.body = {code:0, msg: '出错啦'}
  }
})

router.post('/login', async ctx => {
  const {email, password} = ctx.request.body

  const res = await UserModel.findOne({email})
  if (!res) return ctx.body = {code: 1, msg: '用户不存在'}

  if (res.password !== md5(password)) return ctx.body = {code:1, msg: '密码错误'}
  const user = {username: res.username, email: res.email, identity: res.identify, avator: res.avatar}
  const token = await jwt.sign({username: user.username, id: user._id, email: user.email, timeout: `${(new Date().getTime() + 60*60*60*24)}`}, config.secret, {expiresIn: 3600})
  return ctx.body = {code: 0 , data: Object.assign(user, {token: `Bearer ${token}`})}

})

router.get('/getUser', async ctx => {
  ctx.body = {code:1}
})

module.exports = router