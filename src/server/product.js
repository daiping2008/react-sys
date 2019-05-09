import HTTP from '../utils/http'

class ProductModal extends HTTP {
  getProductList({pageNum}) {
    return this.request({
      url: '/manage/product/list.do',
      data: {pageNum},
      method: 'POST'
    })
  }
}

export default ProductModal