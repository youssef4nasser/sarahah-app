import Image from 'next/image.js'
import React from 'react'

export default function messages() {
  return <>
    <section className='py-5'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 border border-3 p-3">
            <div className="text-center">
              <Image src={"/user.jpg"} width={150} alt='image profile'  height={150} className='border-3 border rounded-circle'/>
              <h1 className='h4'>Youssef</h1>
              <a href="#" className='text-dark fw-bold'>http://sogik.sarahah.pro</a>
            </div>
          </div>
          <h1 className='h3 my-3 text-center'>Messages</h1>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
          <div className="col-8 border border-3 p-1 bg-body-tertiary mb-3">
            <div className="d-flex align-items-center p-1 border-bottom bg-body-secondary">
              <Image src={"/anonymous.png"} width={25} alt='anonymous sender'  height={25} className='rounded-circle me-2'/>
              <h1 className='h6'>anonymous</h1>
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis</p>
          </div>
        </div>
      </div>
    </section>
  </>
}
