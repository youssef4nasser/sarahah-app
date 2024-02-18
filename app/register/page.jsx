"use client"
import Link from 'next/link.js'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

export default function Register() {
  let userSchema = Yup.object({
    firstName: Yup.string().required("First name is required").min(3,"Must be 3 characters or more").max(15,"Must be 15 characters or less"),
    lastName: Yup.string().required("Last name is required").min(3,"Must be 3 characters or more").max(20,"Must be 20 characters or less"),
    email: Yup.string().required("Email is required").email("Must be a valid email"),
    userName: Yup.string().trim().required("userName is required"),
    phone: Yup.string().required("Phone is required").matches(/^201[0125][0-9]{8}/, "Phone must be a valid EG number"),
    password: Yup.string().required("Password is required").matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Password must start with upercase"),
    confirmPass: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "Passwords must match"),
    gender: Yup.mixed().oneOf(['male', "female"]),
    age: Yup.number().positive().integer(),
  });

  async function handleRegister(values){
    console.log("hello");
    console.log(JSON.stringify(values));
    // const res = fetch("https://sarahaa-0.onrender.com/auth/signup", values)
  }

  let formik = useFormik({
    initialValues:{
      "firstName": '',
      "lastName": '',
      "userName": '',
      "email": '',
      "password": '',
      "confirmPass": '',
      "gender": '',
      "age": '',
      "phone": '',
    },
    // validationSchema: userSchema,
    onSubmit: handleRegister
  })

  return <>
  <section className='bg-body-secondary py-5'>
    <div className="container">
      <div className="row">
        <div className="col-6 border p-5  bg-white mx-auto rounded-3 shadow-sm">
           <h1 className='text-center mb-3'>Create An Account</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label for="firstName" className="form-label">First Name</label>
              <input 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              type="text" name='firstName' id='firstName' class="form-control" placeholder="First Name" aria-label="firstName"/>
              {formik.errors.firstName && formik.touched.firstName ? <div>{formik.errors.firstName}</div> : null}
            </div>
            <div className="mb-3">
              <label for="lastName" className="form-label">Last Name</label>
              <input 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              type="text" name='lastName' id="lastName" class="form-control" placeholder="Name" aria-label="lastName"/>
              {formik.errors.lastName && formik.touched.lastName ? <div>{formik.errors.lastName}</div> : null}
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email address</label>
              <input 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email" placeholder="Email address" className="form-control" name='email' id="email" aria-describedby="emailHelp"/>
              {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">phone address</label>
              <input 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="number" placeholder="Phone" className="form-control" name='phone' id="phone" aria-describedby="phoneHelp"/>
              {formik.errors.phone && formik.touched.phone ? <div>{formik.errors.phone}</div> : null}
            </div>
            <div class="mb-3">
              <label for="userName">UserName</label>
              <div class="input-group mt-2">
                <div class="input-group-text">sarahah.com/</div>
                <input 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                type="text" class="form-control" name='userName' id="userName" placeholder="userName"/>
                {formik.errors.userName && formik.touched.userName ? <div>{formik.errors.userName}</div> : null}
              </div>
            </div>
            <div className="mb-3">
              <label for="password" className="form-label">Password</label>
              <input 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password} 
              placeholder="Password" type="password" className="form-control" name='password' id="password"/>
              {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <div className="mb-4">
              <label for="confirmPass" className="form-label">Confirm Password</label>
              <input 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPass} 
              placeholder="Confirm Password" type="password" className="form-control" name='confirmPass' id="confirmPass"/>
              {formik.errors.confirmPass && formik.touched.confirmPass ? <div>{formik.errors.confirmPass}</div> : null}
            </div>
            <div className="mb-4">
              <select 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
              class="form-select" aria-label="Default select example" name='gender' id="gender">
                <option selected>Gender</option>
                <option value="Male">Male</option>
                <option value="femle">femle</option>
              </select>
              {formik.errors.gender && formik.touched.gender ? <div>{formik.errors.gender}</div> : null}
            </div>
            <button type="submit" className="btn btn-info text-white my-3 w-100">Register now</button>
          </form>
          <span className="text-black-50 text-decoration-none">Already have account <Link href={"/login"} className="fw-bold text-black">Login</Link></span>
        </div>
      </div>
    </div>
  </section>
  </>
}
// sogik15600@gosarlar.com
// 123456