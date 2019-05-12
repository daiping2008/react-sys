import React, {Fragment} from 'react'

import './index.scss'
class FileUpload extends React.Component {

  render() {
    return (
      <Fragment>
        <div class="custom-file">
          <input onChange={e => console.log(e.target.value)} type="file" class="custom-file-input" id="validatedCustomFile" required />
          <label class="custom-file-label" for="validatedCustomFile">上传图片</label>
          <div class="invalid-feedback">上传图片</div>
        </div>
      </Fragment>
    )
  }
}

export default FileUpload