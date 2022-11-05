import React, { useState } from 'react'
import './PostForm.scss'
import CreatableSelect from 'react-select/creatable';
import { useDispatch } from 'react-redux'
import { setModal } from '../../reducers/modal';


const PostForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [city, setCity] = useState('')
  const [college, setCollege] = useState('')
  const [file, setFile] = useState()

  function uploadFile(event) {
    setFile(event.target.files[0])
  }

  const closeModal = () => {
    dispatch(setModal());
  }

  return (
    <div className='post-form'>
      <div className='form-modal'>
        <form>
          <input type="text" placeholder='Product Title' className='product-title' />
          <hr />
          <div className='info-grp'>
            <input type="file" onChange={uploadFile} />
            <input type="number" placeholder='Selling price' />
          </div>
          <div className='info-grp'>
            <input type="text" placeholder='City' />
            <input type="text" placeholder='College or University' />
          </div>
          <CreatableSelect placeholder='Tags' className='select' isMulti isClearable />
          <textarea rows='4' className='description' type="text" placeholder='Short Description' />
        </form>
        <div className='action-btns'>
          <div className='cancel btn' onClick={closeModal}>Cancel</div>
          <div className='btn-grp'>
            <div className='delete btn' >Delete</div>
            <div className='save btn' >Save</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm