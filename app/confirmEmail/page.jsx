import Link from 'next/link.js';
import React from 'react'

const ConfirmationPage = () => {
  return (
    <div className="container vh-100  ">
      <div className="row align-items-center">
        <div className="col-xs-12 text-center mt-5">
        <h1>Thank you for confirming your email!</h1>
          <p>Your email address has been successfully verified.</p>
        </div>
        <div className="col-xs-12 text-center mt-5">
            <Link className='btn btn-success' href="/login">Go to Login page</Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
