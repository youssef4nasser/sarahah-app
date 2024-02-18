import React from 'react'

export default function Footer() {
  return <>
  <section className='footer py-3 text-white bg-info'>
  <div className="container">
    <div className="row gy-2">
        <div className="col-12 text-center">
            <i class="fa-brands px-2 fa-facebook fa-2x"></i>
            <i class="fa-brands px-2 fa-twitter fa-2x"></i>
            <i class="fa-brands px-2 fa-telegram fa-2x"></i>
            <i class="fa-brands px-2 fa-square-instagram fa-2x"></i>
        </div>
        <div className="col-12 text-center">
            <a className='text-white px-2 text-decoration-none' href="#">terms</a>
            <a className='text-white px-2 text-decoration-none' href="#">privacy</a>
            <a className='text-white px-2 text-decoration-none' href="#">help</a>
            <a className='text-white px-2 text-decoration-none' href="#">contact us</a>
        </div>
    </div>
  </div>
  </section>
  </>
}
