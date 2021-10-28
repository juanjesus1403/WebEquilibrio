import styled from 'styled-components'
import img from '../../images/foto 6.png'

export const InfoContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img}) ;

  @media screen and (max-width: 1000px){
    height: 1000px;
  }

  @media screen and (max-width: 768px){
    height: 1400px;
  }

  @media screen and (max-width: 480px){
    height: 1600px;
  }
` 


export const InfoWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const InfoCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
  transition: all 0.2s ease-in-out;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const InfoIcon = styled.img` 
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const InfoH1 = styled.h1`
  font-size: 2.0rem;
  color: black;
  margin-bottom: 5px;
  line-height: 1.1;
  font-weight: bold;
  color: #118989;

  @media screen and (max-width: 480px){
    font-size: 2rem;
    text-align: center
  }
`

export const InfoH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
`

export const InfoH3 = styled.h3`
  font-size: 1rem;
  text-align: center;
`

export const InfoP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 40px;
  margin-bottom: 80px;
`