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
}

export default HTTP