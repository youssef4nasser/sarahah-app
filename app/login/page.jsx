import Link from 'next/link.js'
import React from 'react'

export default function Login() {
  return <>
  <section className='bg-body-secondary py-5'>
    <div className="container">
      <div className="row">
        <div className="col-6 border p-5  bg-white mx-auto rounded-3 shadow-sm">
           <h1 className='text-center mb-3'>Login</h1>
          <form className="">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" placeholder="Email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input placeholder="Password" type="password" className="form-control" id="password"/>
            </div>
            <button type="button" className="btn btn-info text-white my-3 w-100">Login now</button>
          </form>
          <span className="text-black-50 text-decoration-none">Don’t have account? <Link href={"/register"} className="fw-bold text-black">Register</Link></span>
        </div>
      </div>
    </div>
  </section>
  </>
}
