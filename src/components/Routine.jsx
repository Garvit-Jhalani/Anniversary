import React from 'react'
import {HiUserGroup} from 'react-icons/hi'

export function Routine() {
  return (
    <div className='py-5 d-flex justify-content-center'>
        <div className='row text-center'>
            <div className='col-3'>
              <div className='routine-image'>
                <HiUserGroup />
              </div>
            </div>
            <div className='col-3'>
              <div className='routine-image'>
                <HiUserGroup />
              </div>
            </div>
            <div className='col-3'>
              <div className='routine-image'>
                <HiUserGroup />
              </div>
            </div>
            <div className='col-3'>
              <div className='routine-image'>
                <HiUserGroup />
              </div>
            </div>
            <hr />
        </div>
    </div>
  )
}
