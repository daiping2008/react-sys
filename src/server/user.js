import HTTP from '../utils/http'


class UserModal extends HTTP {

  getUserList(pageNum) {
    return this.request({
      url: '/manage/user/list.do',
      data:{pageNum},
      method:'POST'
    })
  }

  login({username, password}) {
    return this.request({
      url:'/manage/user/login.do',
      data:{username, password},
      method:'POST'
    })
  }

  checkLoginInfo({username, password}) {
    // eslint-disable-next-line no-undef
    const n = $.trim(username),
    // eslint-disable-next-line no-undef
          p = $.trim(password)
    if (n === '') {
      return {
        code: 1,
        msg: '用户名不能为空!'
      }
    }
    if (p === '') {
      return {
        code: 1,
        msg:'密码不能为空'
      }
    }
    return {
      code: 0
    }
  }
}

export default UserModal