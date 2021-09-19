import React from 'react'
import { Link, useParams } from 'react-router-dom'
const EditContact = () => {
  const { id } = useParams()
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center p-5">Edit Member {id}</h1>
        <div className="col-md-6 shadow mx-auto p-3">
          <form>
            <div className="form-group mb-3 mt-3">
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            <div className="form-group mb-3">
              <input className="form-control" type="email" placeholder="Email" />
            </div>
            <div className="form-group mb-3">
              <input className="form-control" type="tel" placeholder="Phone" />
            </div>
            <div className="form-group mb-3">
              <input className="btn btn-dark mx-2" type="submit" value="Update Member" />
              <Link to="/" className="btn btn-danger">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditContact
