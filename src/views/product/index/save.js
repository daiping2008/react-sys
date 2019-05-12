import React from 'react'
import PageTitle from '../../../components/page-title'
import CategorySelect from './category-select'
import FileUpload from './fileupload'

import ProductModal from '../../../server/product'
const productModal = new ProductModal()
class ProductSave extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      subtitle: '',
      categoryId: 0,
      parentCategoryId : 0,
      subImages: [],
      price: '',
      stock: '',
      detail: '',
      status: 1 //商品状态1为在售
    }
  }

  handleCategoryChange(firstCategoryId, secondCategoryId) {
    this.setState({
      categoryId: firstCategoryId,
      parentCategoryId: secondCategoryId
    })
  }

  handleChange(e) {
    const key = e.target.name
    const value = e.target.value
    this.setState({
      [key]: value
    })
  }

  onSubmit() {}

  render() {
    return (
      <div className='wrapper'>
        <PageTitle title='添加商品'/>
        <div className='row'>
          <div className='col-md-5 offset-1'>
            <div className='form'>
              <div className='form-group input-group'>
                <label className='mr-2'>商品名称</label>
                <input onChange={e => this.handleChange(e)} name='name' className='form-control' type='text' placeholder='请输入商品名称' />
              </div>
              <div className='form-group input-group'>
                <label className='mr-2'>商品描述</label>
                <input onChange={e => this.handleChange(e)} name='subtitle' className='form-control' type='text' placeholder='请输入商品描述' />
              </div>
              <div className='form-group input-group'>
                <label className='mr-2'>商品分类</label>
                <CategorySelect
                  onChange={(firstCategoryId, secondCategoryId) => this.handleCategoryChange(firstCategoryId, secondCategoryId)}
                />
              </div>
              <div className='form-group input-group'>
                <label className='mr-2'>商品价格</label>
                <input onChange={e => this.handleChange(e)} name='price' className='form-control' type='number' placeholder='价格' />
                <div className='input-group-append'>
                  <span className='input-group-text'>元</span>
                </div>
              </div>
              <div className='form-group input-group'>
                <label className='mr-2'>商品库存</label>
                <input onChange={e => this.handleChange(e)} name='stock' className='form-control' type='number' placeholder='库存' />
                <div className='input-group-append'>
                  <span className='input-group-text'>件</span>
                </div>
              </div>
              <div className='form-group input-group'>
                <label className='mr-2'>商品图片</label>
                <FileUpload />
              </div>
              <div className='form-group'>
                <button className='btn btn-primary' onClick={() => this.onSubmit()}>提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSave