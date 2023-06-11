import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../../../redux/Posted/postedJobSlice'

const AddStudents = () => {

const dispatch = useDispatch()

const [firstname , setFirstName] =useState("")
const [lastname , setLastName] =useState("")
const [email , setEmail] =useState("")
const [course , setCourse] =useState("")
const [batch , setBatch] =useState("")
const [password , setPassword] =useState("")
const [phoneNumber ,setPhoneNumber] =useState("")

const handleFirstName=(e)=>{
    setFirstName(e.traget.value)
}
const handleLastName=(e)=>{
    setLastName(e.traget.value)
}
const handleEmail=(e)=>{
    setEmail(e.traget.value)
}
const handleCourse=(e)=>{
    setCourse(e.traget.value)
}
const handleBatch=(e)=>{
    setBatch(e.traget.value)
  }
  const handlePhoneNumber=(e)=>{
      setPhoneNumber(e.traget.value)
  }
  const handlePassword=(e)=>{
      setPassword(e.traget.value)
  }
  
  
  
const handleAddStudent=()=>{
  const newstudent={
    firstname,
    lastname,
    email,
    course,
    batch,
    phoneNumber,
    password,
  }

  dispatch(addStudent(newstudent))

}

  return (
    <div>
        <div className='container'>
            <h1>
                Add Student to DataBase
            </h1>

            <form>
              <div className="form-group mb-2">
                  <label htmlFor="firstname">FirstName</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="firstname"
                    value={firstname}
                    onChange={handleFirstName}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="lastname">LastName</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="lastname"
                    value={lastname}
                    onChange={handleLastName}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2">
                <label htmlFor="course">Course</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="course"
                    value={course}
                    onChange={handleCourse}
                    autoFocus
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="batch">Batch</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    id="batch"
                    value={batch}
                    onChange={handleBatch}
                    autoFocus
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control mt-1"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    autoFocus
                  />
                </div>
               
                <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                    autoFocus
                  />
                </div>
                <button
                type="submit"
                className="btn btn-primary text-light"
                onClick={handleAddStudent}
              >
                Submit
              </button>
              </form>
        </div>
    </div>
  )
}

export default AddStudents