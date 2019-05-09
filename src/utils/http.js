import config from '../utils/config'

class HTTP {
  
  request({url, data, method = 'GET'}) {
    return new Promise((resolve, reject) => {
      
      // eslint-disable-next-line no-undef
      $.ajax({
        url: config.baseUrl + url,
        data,
        type: method,
        dataType: 'json',
        success: res => {
          if (0 === res.status) {
            resolve(res.data)
          } else {
            alert(res.msg)
          }
        },
        error: err => {
          alert('出错啦')
          reject(err)
        }
      })
    })
  }

  setStorage(key, value) {
    const type =  typeof value
    if (type === 'object') {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else if(['number', 'string', 'boolean'].indexOf(type) > -1){
      window.localStorage.setItem(key, value)
    }
  }

  getStorage(key) {
    return JSON.parse(window.localStorage.getItem(key)) | ''
  }

  removeStorage(key){
    window.localStorage.removeItem(key)
  }
}

export default HTTP