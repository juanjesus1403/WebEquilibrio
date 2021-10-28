import React, {useState} from 'react'
import '../Galeria/Galery.css'
import {GrClose} from 'react-icons/gr'
import Img1 from '../../images/foto 4.png'
import Img2 from '../../images/foto 5.png'
import Img3 from '../../images/foto 6.png'
import Img4 from '../../images/foto 7.png'
import Img5 from '../../images/foto 9.png'
import Img6 from '../../images/foto 3.png'

const Gallery = () => {

  let data = [
    {
      id: 1,
      imgSrc: Img1,

    },
    {
      id: 2,
      imgSrc: Img2,

    },
    {
      id: 3,
      imgSrc: Img3,

    },
    {
      id: 4,
      imgSrc: Img4,

    },
    {
      id: 5,
      imgSrc: Img5,

    },
    {
      id: 6,
      imgSrc: Img6,

    },
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);

  }


  return (
    <>
    <div id="Voluntariado">
        <h1 className="h1" >VOLUNTARIADO</h1>
    <div className={model? "model open" : "model"}>
      <img src={tempimgSrc}/>
      <GrClose onClick ={() =>setModel(false)}/>

    </div>

    <div className='gallery'>
      {data.map((item, index)=>{
        return(
          <div className='pics' key={index} onClick={()=> getImg(item.imgSrc) } >
            <img src={item.imgSrc} style= {{width:'100%'}} />

          </div>

        )
      })}


    </div>
    </div>
      
    </>
  )
}

export default Gallery
