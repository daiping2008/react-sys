import React from 'react'
import {Link} from 'react-router-dom'
class Bootcss extends React.Component {
  render() {
    return (
      <div className='justify-content-center pt-5'>


        {/* <form className='form-row'>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>@</span>
            </div>
            <input className='form-control' type='text' placeholder='请输入' />
            <div className='input-group-append'>
              <span className='input-group-text bg-primary text-light' >Go</span>
            </div>
          </div>
        </form> */}

        {/* <form>  
          <label for='#email'>邮箱:</label>
          <input id='email' type='email' className='form-control' placeholder='邮箱地址' />
          <small className='form-text text-muted'>请输入邮箱地址</small>
        </form> */}

        {/* <div className='btn btn-secondary' data-toggle='tooltips' data-placement='top' title='tooltips on top'>Tooltips</div> */}
        {/* <div className='row'>
          <div className='col-md-3'>
            <div id='scroll' className='nav nav-pills bg-light flex-column'>
              <div className='nav-item'>
                <a className='nav-link' href='#html'>HTML</a>
              </div>
              <div className='nav-item'>
                <a className='nav-link' href='#css'>CSS</a>
              </div>
              <div className='nav-item'>
                <a className='nav-link' href='#js'>JavaScript</a>
              </div>
            </div>
          </div>
          <div className='col-md-9'>
            <div data-spy='scroll' data-target='#scroll' style={{height:'300px',overflowY:'scroll'}} >
              <h4 id='html'>HTML</h4>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
              <h4 id='css'>CSS</h4>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
              <h4 id='js'>JavaScript</h4>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
            </div>
          </div>
        </div> */}
        
        {/* <div className='row'>
          <div className='col-md-3'>
            <div id='scroll' className='list-group'>
              <a className='list-group-item list-group-item-action' href='#html'>HTML</a>
              <a className='list-group-item list-group-item-action' href='#css'>CSS</a>
              <a className='list-group-item list-group-item-action' href='#js'>JavaScript</a>
            </div>
          </div>
          <div className='col-md-9'>
            <div data-spy='scroll' data-target='#scroll' style={{height:'300px',overflowY:'scroll'}}>
              <h4 id='html'>HTML</h4>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
              <h4 id='css'>CSS</h4>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
              <h4 id='js'>JavaScript</h4>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.Quis anim sit do amet fugiat dolor velit sit ea ea do reprehenderit culpa duis. Nostrud aliqua ipsum fugiat minim proident occaecat excepteur aliquip culpa aute tempor reprehenderit. Deserunt tempor mollit elit ex pariatur dolore velit fugiat mollit culpa irure ullamco est ex ullamco excepteur.</p>
            </div>
          </div>
        </div> */}
        {/* <div className='progress mt-1'>
          <div className='progress-bar'></div>
        </div>
        <div className='progress mt-1'>
          <div className='progress-bar progress-bar-striped progress-bar-animated bg-info' style={{width:'50%'}}></div>
        </div>
        <div className='progress mt-1'>
          <div className='progress-bar bg-danger' style={{width:'15%'}}></div>
          <div className='progress-bar bg-info' style={{width:'20%'}}></div>
          <div className='progress-bar bg-warning' style={{width:'10%'}}></div>
        </div> */}
        {/* <div className='pagination justify-content-center'>
          <li className='page-item'>
            <a className='page-link' href='#'>
              <span className='sr-only'>Previous</span>
              <span>&laquo;</span>  
            </a>
          </li>
          <li className='page-item active'>
            <a className='page-link' href='#'>1</a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>2</a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>3</a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              <span className='sr-only'>Next</span>
              <span>&raquo;</span>
            </a>
          </li>
        </div> */}
        {/* <div id='modal-demo' className='modal fade'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className=''>Modal title</h5>
                <button className='close' data-dismiss='modal'>&times;</button>
              </div>
              <div className='modal-body'>
                <p>Modal body text goes here.</p>
              </div>
              <div className='modal-footer'>
                <button className='btn btn-primary'>Save change</button>
                <button className='btn btn-secondary' data-dismiss='modal'>Close</button>
              </div>
            </div>  
          </div>
        </div>
        <button className='btn btn-danger' data-toggle='modal' data-target='#modal-demo'>Launch demo modal</button> */}
        {/* <div className='row'>
          <div className='col-md-4'>
            <div className='list-group'>
            <a href='#html' className='list-group-item list-group-item-action active' data-toggle='list'>HTML</a>
            <a href='#css' className='list-group-item list-group-item-action' data-toggle='list'>CSS</a>
            <a href='#js' className='list-group-item list-group-item-action' data-toggle='list'>JavaScript</a>
          </div>
          </div>
          <div className='col-md-8'>
            <div className='tab-content'>
              <div className='tab-pane fade active show' id='html'>HTML</div>
              <div className='tab-pane fade' id='css'>CSS</div>
              <div className='tab-pane fade' id='js'>JavaScript</div>
            </div>
          </div>
        </div> */}
        
        

        {/* <div className='list-group'>
          <a className='list-group-item list-group-item-action flex-column active'>
            <div className='d-flex w-100 justify-content-between align-items-center'>
              <h5 className='mt-1'>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a className='list-group-item list-group-item-action flex-column '>
            <div className='d-flex w-100 justify-content-between align-items-center'>
              <h5 className='mt-1'>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a className='list-group-item list-group-item-action flex-column '>
            <div className='d-flex w-100 justify-content-between align-items-center'>
              <h5 className='mt-1'>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
        </div> */}

        {/* <div className='list-group'>
          <a href='#' className='list-group-item '>HTML</a>
          <a href='#' className='list-group-item list-group-item-warning'>CSS</a>
          <a href='#' className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>JavaScript<span className='badge badge-primary'>12</span></a>
        </div> */}

        {/* <div className='jumbotron'>
          <h1 className='dispaly-4'>Hello World！</h1>
          <p className='lead'>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr/>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className='lead'>
            <a href='#' className='btn btn-primary btn-lg'>Learn More</a>
          </p>
        </div> */}
        {/* <div className='btn-group dropup' style={{marginLeft:'200px', marginTop:'200px'}}>
          <button className='btn btn-danger dropdown-toggle dropdown-toggle-split' data-toggle='dropdown' data-offset='0'>
            <span className='sr-only'>Toggle Dropdown</span>
          </button>
          <button className='btn btn-danger' data-toggle='dropdown'>Dropdown</button>
          
          <div className='dropdown-menu'>
            <div className='dropdown-header'>Web Language</div>
            <div className='dropdown-item'>HTML</div>
            <div className='dropdown-item'>CSS</div>
            <div className='dropdown-item'>JavaScript</div>
            <div className='dropdown-divider'></div>
            <div className='dropdown-item'>more</div>
          </div>
        </div> */}
        {/* <div className='dropdown'>
          <a href='#' className='btn btn-success dropdown-toggle' data-toggle='dropdown'>Dropdown</a>
          <button className='btn btn-outline-warning dropdown-toggle' data-toggle='dropdown'>Dropdown</button>
          <div className='dropdown-menu'>
            <div className='dropdown-header'>
              <div className='dropdown-item'>HTML</div>
              <div className='dropdown-item'>CSS</div>
              <div className='dropdown-item'>JavaScript</div>
              <div className='dropdown-divider'></div>
              <a href='#' className='dropdown-item'>more</a> 
            </div>
          </div>
        </div> */}
        {/* <div id='accordion'>
          <div className='card'>
            <div className='card-header'>
              <a className='' href='#collapse-1' data-toggle='collapse'>Collapsible Group Item #1</a>
            </div>
            <div className='card-body collapse' id='collapse-1' data-parent='#accordion'>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
          <div className='card'>
            <div className='card-header'>
              <a href='#collapse-2' data-toggle='collapse'>Collapsible Group Item #2</a>
            </div>
            <div className='card-body collapse' id='collapse-2' data-parent='#accordion'>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
          <div className='card'>
            <div className='card-header'>
              <a data-toggle='collapse' href='#collapse-3' data-parent='#accordion'>Collapsible Group Item #3</a>
            </div>
            <div className='collapse' id='collapse-3'>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div> */}
        
        {/* <a href='#collapseDemo' data-toggle='collapse' className='btn btn-primary'>Link with href</a>
        <button className='btn btn-primary' data-toggle='collapse' data-target='#collapseDemo'>Button with data-target</button>
        <div className='collapse' id='collapseDemo'>
          <div className='card card-body'>
            <p className='card-text'>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
          </div>
        </div> */}

        {/* <div id='carouselDemo' className='carousel carousel-style slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img className='d-block w-100' src={require('./1.jpg')} />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src={require('./2.jpg')} />
            </div>
            <div className='carousel-item'>
              <img className='d-block w-100' src={require('./3.jpg')} />
            </div>
          </div>
          <ol className='carousel-indicators'>
            <li data-target='#carouselDemo' data-slide-to='0' className='active'></li>
            <li data-target='#carouselDemo' data-slide-to='1'></li>
            <li data-target='#carouselDemo' data-slide-to='2'></li>
          </ol>
          <a className='carousel-control-prev' href='#carouselDemo' data-slide='prev'>
            <span className='carousel-control-prev-icon'></span>
          </a>
          <a className='carousel-control-next' href='#carouselDemo' data-slide='next'>
            <span className='carousel-control-next-icon'></span>
          </a>
        </div> */}
        {/* <div className='card-columns'>
          <div className='card'>
            <img className='card-img-top' src={require('./1.jpg')} />
            <div className='card-body'>
              <h5 className='card-title'>Card title that wraps to a new line</h5>
              <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
          <div className='card'>
            <img className='card-img-top' src={require('./1.jpg')} />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
          <div className='card'>
            <img className='card-img-top' src={require('./1.jpg')} />
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
        </div> */}
        
        {/* <div className='card text-dark border-danger'>
          <div className='card-header'>Header</div>
          <div className='card-body'>
            <h5 className='card-title'>card title</h5>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div> */}
        {/* <div className='card text-white'>
          <img className='card-img' src={require('./1.jpg')}/>
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'><small className='text-muted'>Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </p>
          </div>
          <img className='card-img-bottom' src={require('./1.jpg')} />
        </div> */}

        {/* <div className='card'>
          <div className='card-header'>
            <ul className='nav nav-pills card-header-pills'>
              <li className='nav-item'>
                <a href='#' className='nav-link active'>Active</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>Link</a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>Disabled</a>
              </li>
            </ul>
          </div>
          <div className='card-body'>
            <h5 className='card-title'>Special title treatment</h5>
            <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
            <a href='#' className='btn btn-primary'>Go somewhere</a>
          </div>
        </div> */}
        {/* <div className='row'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <a href='#' className='btn btn-primary'>Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Special title treatment</h5>
                <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
                <a href='#' className='btn btn-primary'>Go somewhere</a>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='card text-center'>
          <div className='card-header'>Featured</div>
          <div className='card-body'>
            <h5 className='card-title'>Special title treatment</h5>
            <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
            <a href='#' className='btn btn-primary'>Go somewhere</a>
          </div>
          <div className='card-footer text-muted'>
            2 days ago
          </div>
        </div> */}
        {/* <div className='card'>
          <div className='card-header'>
            Featured
          </div>
          <div className='card-body'>
            <div className='card-title'>Special title treatment</div>
            <p className='card-text'>With supporting text below as a natural lead-in to additional content.</p>
            <a href='#' className='btn btn-primary'>Go somewhere</a>
          </div>
        </div> */}
        {/* <div className='card'>
          <img className='card-img-top' src={require('./1.jpg')}/>
          <div className='card-body'>
            <div className='card-title'>Card title</div>
            <div className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
          </div>
          <div className='list-group list-group-flush'>
            <div className='list-group-item'>Cras justo odio</div>
            <div className='list-group-item'>Dapibus ac facilisis in</div>
            <div className='list-group-item'>Vestibulum at eros</div>
          </div>
          <div className='card-body'>
            <a href='#' className='card-link'>Card link</a>
            <a href='#' className='card-link'>Another link</a>
          </div>
        </div> */}
        {/* <div className='card '>
          <div className='list-group list-group-flush'>
            <div className='list-group-item'>Cras justo odio</div>
            <div className='list-group-item'>Dapibus ac facilisis in</div>
            <div className='list-group-item'>Vestibulum at eros</div>
          </div>
        </div> */}
        {/* <div className='card'>
          <img src={require('./1.jpg')} className='card-img-top'/>
          <div className='card-body'>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div> */}
        {/* <div className='card'>
          <div className='card-header'>
            Featured
          </div>
          <div className='card-body'>
            <h2 className='card-title'>这是标题</h2>
            <div className='card-subtitle'>副标题</div>
            <p className='card-text'>This is some text within a card body</p>
            <p>
              <a href='#' className='card-link'>card link</a>
              <a href='#' className='card-link'>another link</a>
            </p>
          </div>
          <div className='card-footer'>
            Footer
          </div>
        </div> */}
        {/* <div className='btn-group btn-group-vertical justify-content-center'>
          <div className='btn btn-primary'>按钮1</div>
          <div className='btn btn-secondary'>按钮2</div>
          <div className='btn btn-danger'>按钮3</div>
        </div> */}
        {/* <button className='btn btn-danger active btn-block' disabled>按钮</button>
        <button className='btn btn-danger btn-block'>按钮</button> */}
        {/* <div className='breadcrumb'>
          <div className='breadcrumb-item'><a href='#'>首页</a></div>
          <div className='breadcrumb-item'>新闻</div>
          <div className='breadcrumb-item'>HTML5入门到精通</div>
        </div> */}
        {/* <h1>hello~<span className='badge badge-secondary'>New</span></h1>
        <button className='btn btn-primary'>hello<span className='badge badge-light'>New</span></button> */}
        {/* <div className='alert alert-primary alert-dismissble' role='alert'>
          <h2>标题</h2>
          hello ! <a className='alert-link'>more</a>
          <button className='close' data-dismiss='alert'>&times;</button>
        </div> */}
        {/* <div className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand'>微博</a>
          <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar-content'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar-content'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link active'>学习</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>论坛</a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <ul className='nav nav-tabs nav-fill'>
          <li className='nav-item'>
            <a className='nav-link active' href='#'>HTML</a>
          </li>
          <div className='nav-item'>
            <a className='nav-link' href='#'>CSS</a>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='#'>JavaScript</a>
          </div>
        </ul> */}
        {/* <div className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>Brand</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbar'>
            <ul className='navbar-nav'>
              <li className='navbar-item'>
                <a className='navbar-link' href='#'>Home</a>
              </li>
              <li className='navbar-item'>
                <a className='navbar-link' href='#'>Features</a>
              </li>
              <li className='navbar-item'>
                <a className='navbar-link' href='#'>Pricing</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Bootcss