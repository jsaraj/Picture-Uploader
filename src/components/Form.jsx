

import React, { useCallback, useState } from 'react'

function Form() {

    const [file,setFile]=useState('');
    const [fileName,setFileName]=useState("Iamge Name")

    const changeFile = e =>{
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
    }

    return (
        <div className='p-20'>
            <form>
                <label htmlFor='imageFile' className='cursor-pointer py-2 px-5 rounded-md bg-orange-400 text-gray-800'>Choose File</label>
                <label className='px-10'>Name of image:  {fileName}</label>
                <input type='file' name='image' id='imageFile' className='hidden' onChange={changeFile}></input>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-5">
                    <div className="bg-orange-400 text-xs font-medium text-gray-700 text-center p-0.5 leading-none rounded-full" style={{width:"45%"}}> 45%</div>
                </div>
                <input type='submit' value='Send' className='mt-5 py-2 px-6 bg-orange-400 rounded-md font-semibold text-gray-700'></input>
            </form>
        </div>
    )
}

export default Form