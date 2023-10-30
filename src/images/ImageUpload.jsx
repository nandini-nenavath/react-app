import React from 'react'
import {useState} from 'react'

function ImageUpload(){
    const handleSubmit=(event)=>{
        event.preventDefault();
        setMessag('Foram');
        setSubmitted(true);
    }

    const[image,setImage]=useState('')
    function handleImage(e){
        console.log(e.target.files)
        setImage(e.target.files[0])

    }
    return (
    <>
    <body>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75vh',
    
}}>
    
    <form className='wrapper' onSubmit={handleSubmit}>
    <p className='par'>DROP YOUR FOOD PICTURE TO GET IT'S RECIPE </p>

        
        <img src="https://www.vippng.com/png/detail/489-4894107_yummy-sticker-hungry-emoticon.png" alt="react logo" style={{ width: '100px',height:'100px',position:'unset' }} className='center'/>      
        
<br/>

    <input type='file' accept='image/*' onChange={handleImage} id='file' className='len'/>
    <label for='file' className='len'>
        <i className='material-icons'></i>
        CHOOSE A PHOTO
    </label>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <button className='button'> SUBMIT</button>
    </form>
    <p></p>
</div>
    </body>
    </>)
}

export default ImageUpload;