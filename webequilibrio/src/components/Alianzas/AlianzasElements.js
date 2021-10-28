import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const AlianzasContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;

  @media screen and (max-width: 1000px){
    height: 800px;
  }

  @media screen and (max-width: 768px){
    height: 600px;
  }

  @media screen and (max-width: 480px){
    height: 600px;
  }
`

export const AlianzasWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 10px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const AlianzasCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;

`

export const AlianzasIcon = styled.img` 
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const AlianzasH1 = styled.h1`
  font-size: 2.5rem;
  color: #118989;
  margin-bottom: 100px;
  font-weight: bold;

  @media screen and (max-width: 768px){
    font-size: 2.3rem;
    text-align: center;
  }

  @media screen and (max-width: 480px){
    font-size: 1.8rem;
    text-align: center
  }
`

export const ArrowNext = styled.img`

`

export const ArrowPrev = styled.img`

`

export const Slider = styled.div`
  max-width: 1000px;

`