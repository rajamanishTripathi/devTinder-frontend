import React from 'react'

const Payment = () => {
  return (
    <div className='m-10'>
        <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
                <h1>Gold Membership</h1>
                <button className='btn btn-primary'>Buy</button>
            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="card bg-base-300 rounded-box grid h-60 grow place-items-center">
                 <h1>Silver Membership</h1>
                <button className='btn btn-primary'>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Payment
