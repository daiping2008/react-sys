const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body')
const check = require('./utils/check')

app.use(check)

const {connect} = require('./db')
connect()
app.use(koaBody())

const user = require('./route/user')

app.use(user.routes()).use(user.allowedMethods())

const port = process.env.PROT || 8080
app.listen(port, () => console.log(`http://localhost:${port}`))