import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteContact } from './redux/actions'
import { toast } from 'react-toastify'
const Home = () => {
  const contacts = useSelector(state => state)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteContact(id))
    toast.info(`已移除 ${id} 號成員`)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 my-5 text-end">
          <Link to="/Contact-List-Redux/add" className="btn btn-outline-dark">新增成員</Link>
        </div>
        <div className="col-md-8 mx-auto">
          <table className="table table-hover align-middle text-center">
            <thead className="text-white bg-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">名稱</th>
                <th scope="col">Email</th>
                <th scope="col">電話號碼</th>
                <th scope="col">修改</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={ id }>
                  <th scope="row">{ id + 1 }</th>
                  <td>{ contact.name }</td>
                  <td>{ contact.email }</td>
                  <td>{ contact.phone }</td>
                  <td>
                    <Link to={`/Contact-List-Redux/edit/${ contact.id + 1 }`} className="btn btn-small btn-primary">編輯</Link>
                    <button type="button" onClick={ () => handleDelete(contact.id + 1) } className="btn btn-small btn-danger m-2">移除</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
