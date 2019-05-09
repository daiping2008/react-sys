import React from 'react'
import {Link, NavLink} from 'react-router-dom'
class NavSide extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      navList: [
        {
          name:'首页',
          path:'/',
          icon:'fa-dashboard'
        },
        {
          name:'商品',
          path:'/product',
          icon:'fa-list',
          children:[
            {
              name:'品类管理',
              path:'/product'
            },
            {
              name:'品类管理',
              path:'/product-category'
            }
          ]
        },
        {
          name:'订单',
          path:'/order',
          icon:'fa-check-square-o',
          children:[
            {
              name:'订单管理',
              path:'/order'
            }
          ]
        },
        {
          name:'用户',
          path:'/user',
          icon:'fa-user-o',
          children:[
            {
              name:'用户管理',
              path:'/user'
            }
          ]
        }
      ]
    }
  }
  renderNavbar() {
    return this.state.navList.map((v, idx) => {
      return (
        <li key={idx} className='nav-item'>
          {
            v.children && v.children.length > 0 ? (
              <Link exact to={v.path} className='nav-link rounded-0 text-light px-0' data-toggle='collapse' data-target={`#collapse-${idx}`}>
                <i className={`fa ${v.icon} mx-3`}></i>
                <span>{v.name}</span>
                <i className="fa fa-angle-down float-right pr-3"></i>
              </Link>
            ) 
            : (
              <NavLink exact to={v.path} className='nav-link rounded-0 text-light pl-0'>
                <i className={`fa ${v.icon} mx-3`}></i>
                <span>{v.name}</span>
              </NavLink> )
          }
          {
            v.children && v.children.length > 0 ? 
            <div className='collapse' id={`collapse-${idx}`} data-parent='#according'>
              <ul className='nav flex-column'>
                {
                  v.children.map((d,i) => {
                    return (
                      <li key={i} className='nav-item '>
                        <NavLink className='nav-link rounded-0 text-light pl-5' to={d.path}>{d.name}</NavLink>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            : ''
          }
        </li>
      )
    })
  }
  render() {
    return (
      <div className='navbar navbar-side hidden-md navbar-expand-md nav-pills bg-dark p-0' id='according'>
        <button className="navbar-toggler bg-primary ml-3 align-items-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <i className="fa fa-bars text-light"></i>
        </button>
        <div className='w-100 collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav flex-column w-100'>
            {
              this.renderNavbar()
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default NavSide