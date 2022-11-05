import React, { useState } from 'react'
import './PostForm.scss'
import CreatableSelect from 'react-select/creatable';
import { useDispatch } from 'react-redux'
import { setModal } from '../../reducers/modal';
import axios from 'axios'

const PostForm = () => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [city, setCity] = useState('')
  const [college, setCollege] = useState('')
  const [tags, setTags] = useState([])
  const [file, setFile] = useState()

  function uploadFile(event) {
    setFile(event.target.files[0])
  }

  const closeModal = () => {
    dispatch(setModal(false));
  }

  const getBase64 = file => {
    return new Promise(resolve => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  async function submitForm(event) {
    event.preventDefault()
    const url = `${process.env.REACT_APP_API_URL}/product/create`;
    const picture = await getBase64(file);
    var tagsArray = []
    for (var i = 0; i < tags.length; i++) {
      tagsArray.push(tags[i].value);
    }
    const body = {
      title: title,
      description: description,
      price: price,
      city: city,
      tags: tagsArray,
      picture: picture
    }
    axios.post(url, body).then((response) => {
      console.log(response.data);
      dispatch(setModal(false));
    });
  }

  return (
    <div className='post-form'>
      <div className='form-modal'>
        <form>
          <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Product Title' className='product-title' />
          <hr />
          <div className='info-grp'>
            <input type="file" onChange={uploadFile} />
            <p>(Only Image Allowed)</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Selling price' />
          </div>
          <div className='info-grp'>
            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" placeholder='City' />
            <input onChange={(e) => setCollege(e.target.value)} value={college} type="text" placeholder='College or University' />
          </div>
          <CreatableSelect placeholder='Tags' className='select' isMulti isClearable onChange={(e) => {
            setTags(e)
            console.log(e)
          }} />
          <textarea onChange={(e) => setDescription(e.target.value)} value={description} rows='4' className='description' type="text" placeholder='Short Description' />
        </form>
        <div className='action-btns'>
          <div className='cancel btn' onClick={closeModal}>Cancel</div>
          <div className='btn-grp'>
            <div className='delete btn' >Delete</div>
            <div className='save btn' onClick={submitForm}>Save</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostForm