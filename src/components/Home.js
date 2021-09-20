import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Home = () => {
  const contacts = useSelector(state => state)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 my-5 text-end">
          <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
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
                    <Link to={`/edit/${ contact.id + 1 }`} className="btn btn-small btn-primary">編輯</Link>
                    <button type="button" className="btn btn-small btn-danger m-2">移除</button>
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
