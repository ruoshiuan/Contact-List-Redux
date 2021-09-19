import React from 'react'

const AddContact = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center p-5">Add New Member</h1>
        <div className="col-md-6 shadow mx-auto p-3">
          <form>
            <div className="input-group mb-3 mt-3">
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            <div className="input-group mb-3">
              <input className="form-control" type="email" placeholder="Email" />
            </div>
            <div className="input-group mb-3">
              <input className="form-control" type="tel" placeholder="Phone" />
            </div>
            <div className="input-group mb-3">
              <input className="btn btn-block btn-dark mx-auto" type="submit" value="Add Member" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact
