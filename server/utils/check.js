const jwt = require('jsonwebtoken')
const UserModel = require('../db/models/user')
const config = require('../config/config')
const check = async (ctx, next) => {
  const url = ctx.request.url
  // 登录，注册不做token校验
  if (url === '/user/login' || url === '/user/register') await next() 
  else {
    const token = ctx.request.headers['authorization'].split(' ')[1]
    // 解析token
    const payload = await jwt.verify(token, config.secret)
    const date = new Date().getTime()
    const {email, timeout} = payload
    if (date > parseInt(timeout)) return ctx.body = {code: 11, msg: 'token过期'}
    // 查询用户是否存在
    const user = await UserModel.findOne({email: email})
    if (!user) return ctx.body = {code: 10, msg: '用户没有登录'}
    
    else await next()
  }
}

module.exports = check