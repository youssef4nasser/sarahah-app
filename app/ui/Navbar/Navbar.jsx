import Image from 'next/image.js'
import Link from 'next/link.js'
import React from 'react'

export default function Navbar() {
  return   <nav className="navbar py-0 navbar-expand-lg bg-light">
  <div className="container">
    <Link href='/' className="navbar-brand"><Image
        src="/logo.png"
        width={70}
        height={45}
        classNameName="img-fluid"
        alt="Logon web site"
      /></Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href='/register' className="nav-link">Register</Link>
        </li>
        <li className="nav-item">
          <Link href='/login' className="nav-link" >Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
}
