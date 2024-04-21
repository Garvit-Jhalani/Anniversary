import React, {useState} from 'react'
import { useInterval } from 'usehooks-ts'
import { timeLeft } from '../utils/utils'

export default function Counter() {
    const [time, setTime] = useState(timeLeft())
    useInterval(() => {
        setTime(timeLeft())
    }, 1000)

  return (
    <div>
        <div className='container d-flex justify-content-center mb-5'  data-aos="fade-up" data-aos-delay="500">
            <div className='counter row text-center p-3'>
                <div className="col-3 border-end">
                    <div className='counter__number'>{time.day}</div>
                    <div className='counter__label'>Day</div>
                </div>
                <div className="col-3 border-end">
                    <div className='counter__number'>{time.hour}</div>
                    <div className='counter__label'>Hrs</div>
                </div>
                <div className="col-3 border-end">
                    <div className='counter__number'>{time.minute}</div>
                    <div className='counter__label'>Min</div>
                </div>
                <div className="col-3">
                    <div className='counter__number'>{time.second}</div>
                    <div className='counter__label'>Sec</div>
                </div>
            </div>
        </div>
    </div>
  )
}
