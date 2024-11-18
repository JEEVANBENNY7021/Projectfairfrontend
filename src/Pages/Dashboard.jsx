import React from 'react'
import AddProject from '../Components/AddProject'
import UserProfile from '../Components/UserProfile'
import ViewProject from '../Components/ViewProject'

function Dashboard() {
  return (
    <>
    <div className="container">
  <div className="row p-3 ">
    <h1  style={{fontSize:"40px"}}>Welcome User</h1>
  </div>
  <div className="row">
    <div className="col-8">
      <div className="row">
        <div className="col-6">
          <h3 style={{fontSize:"30px"}}>My Projects</h3>
        </div>
        <div className="col-6">
          <AddProject/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ViewProject/>
        </div>

      </div>
    </div>
    <div className="col-4">
      <UserProfile/>
    </div>
  </div>
</div>

    </>
  )
}

export default Dashboard