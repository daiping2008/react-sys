import HTTP from '../utils/http'

class ProductModal extends HTTP {
  getProductList({pageNum}) {
    return this.request({
      url: '/manage/product/list.do',
      data: {pageNum},
      method: 'POST'
    })
  }

  getCategory(categoryId = 0) {
    return this.request({
      url: '/manage/category/get_category.do',
      data:{categoryId},
      method: 'POST'
    })
  }
}

export default ProductModal