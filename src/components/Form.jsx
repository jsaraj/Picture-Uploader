

import React from 'react'

function Form() {
    return (
        <div className='p-20'>
            <form>
                <label htmlFor=''>Image Name</label>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5">
                    <div className="bg-orange-400 text-xs font-medium text-gray-700 text-center p-0.5 leading-none rounded-full" style={{width:"45%"}}> 45%</div>
                </div>
                <input type='submit' value='Choose File' className='mt-5 p-2 bg-orange-400 rounded-md font-semibold'></input>
            </form>
        </div>
    )
}

export default Form