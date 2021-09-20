import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { updateContact } from './redux/actions'
const EditContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const { id } = useParams()
  const contacts = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const currentContact = contacts.find(contact => contact.id + 1 === parseInt(id))
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name)
      setEmail(currentContact.email)
      setPhone(currentContact.phone)
    }
  }, [currentContact])
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkEmail = contacts.find(contact => contact.id + 1 !== parseInt(id) && contact.email === email)
    const checkPhone = contacts.find(contact => contact.id + 1 !== parseInt(id) && contact.phone === parseInt(phone))
    if (!name || !email || !phone) {
      return toast.warning('尚有欄位未填寫')
    } else if (checkEmail) {
      return toast.error('此信箱已存在')
    } else if (checkPhone) {
      return toast.error('此號碼已存在')
    } else {
      const data = {
        id: parseInt(id),
        name,
        email,
        phone
      }
      dispatch(updateContact(data))
      toast.success('更新成功')
      history.push('/')
    }
  }
  return (
    <div className="container">
      { currentContact ? (
      <div className="row">
        <h1 className="display-3 text-center p-5">編輯 { id } 號成員</h1>
        <div className="col-md-6 shadow mx-auto p-3">
          <form onSubmit={ handleSubmit }>
            <div className="form-group mb-3 mt-3">
              <input className="form-control" type="text" placeholder="名稱" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
              <input className="form-control" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
              <input className="form-control" type="tel" placeholder="電話號碼" value={phone} onChange={e => setPhone(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
              <input className="btn btn-dark mx-2" type="submit" value="更新成員" />
              <Link to="/" className="btn btn-danger">取消</Link>
            </div>
          </form>
        </div>
      </div> )
      : <h1 className="display-3 text-center p-5">尚無 { id } 號成員</h1>
      }
    </div>
  )
}

export default EditContact
