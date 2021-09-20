import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addContact } from './redux/actions'
import { Link, useHistory } from 'react-router-dom'
const AddContact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const contacts = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    const checkEmail = contacts.find(contact => contact.email === email && email)
    const checkPhone = contacts.find(contact => contact.phone === parseInt(phone))
    if (!name || !email || !phone) {
      return toast.warning('尚有欄位未填寫')
    } else if (checkEmail) {
      return toast.error('此信箱已存在')
    } else if (checkPhone) {
      return toast.error('此號碼已存在')
    } else {
      const data = {
        id: contacts[contacts.length - 1].id + 1,
        name,
        email,
        phone
      }
      dispatch(addContact(data))
      toast.success('新增成功')
      history.push('/')
    }
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center p-5">新增成員</h1>
        <div className="col-md-6 shadow mx-auto p-3">
          <form onSubmit={ handleSubmit }>
            <div className="form-group mb-3 mt-3">
              <input className="form-control" type="text" placeholder="名稱" value={ name } onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <input className="form-control" type="email" placeholder="Email" value={ email } onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <input className="form-control" type="tel" placeholder="手機號碼" value={ phone } onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="form-group mb-3 text-center">
              <input className="btn btn-dark mx-5 px-5" type="submit" value="新增" />
              <Link to="/" className="btn btn-danger mx-5 px-5">取消</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact
