import React, {Fragment} from 'react'

import ProductModal from '../../../server/product'
const productModal = new ProductModal()

class CategorySelect extends React.Component{
  
  constructor(props){
    super(props)

    this.state = {
      firstCategoryList: [],
      firstCategoryId: 0,
      secondCategoryList: [],
      secondCategoryId: 0
    }
  }

  componentDidMount() {
    this.loadFirstCategory()
  }

  loadFirstCategory() {
    productModal.getCategory().then(res => {
      this.setState({
        firstCategoryList: res
      })
    })
  }

  loadSecondCategory() {
    const {firstCategoryId} = this.state
    productModal.getCategory(firstCategoryId).then(res => {
      this.setState({
        secondCategoryList: res
      })
    })
  }

  handleFirstCategoryChange(e) {
    const firstCategoryId = e.target.value || 0
    this.setState({
      firstCategoryId
    }, () => this.loadSecondCategory())
    
  }

  handleSecondCategoryChange(e) {
    const secondCategoryId = e.target.value || 0
    this.setState({
      secondCategoryId
    }, () => this.props.onChange(this.state.firstCategoryId, this.state.secondCategoryId))
  }

  renderFirstCategory(){
    const {firstCategoryList} = this.state
    return (
      <select value={this.state.firstCategoryId} className='form-control mr-2' onChange={e => this.handleFirstCategoryChange(e)}>
        <option value='' >请选择一级品类</option>
        {
          firstCategoryList.map(v => <option value={v.id} key={v.id}>{v.name}</option>)
        }
      </select>
    )
  }

  renderSecondCategory() {
    const {secondCategoryList} = this.state
    return (
      <select value={this.state.secondCategoryId} className='form-control' onChange={e => this.handleSecondCategoryChange(e)}>
        <option value='' >请选择二级品类</option>
        {
          secondCategoryList.map(v => <option value={v.id} key={v.id}>{v.name}</option>)
        }
      </select>
    )
  }
  render() {
    return (
      <Fragment>
        {
          this.renderFirstCategory()
        }
        {
          this.renderSecondCategory()
        }
      </Fragment>
    )
  }
}

export default CategorySelect