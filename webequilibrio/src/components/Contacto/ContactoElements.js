import styled from 'styled-components'


export const ContactoContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #234578;

  @media screen and (max-width: 1000px){
    height: 1000px;
  }

  @media screen and (max-width: 768px){
    height: 1600px;
  }

  @media screen and (max-width: 480px){
    height: 1600px;
  }
`

export const ContactoWrapper = styled.div`
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

export const ContactoCard = styled.div`
  background: #234578;
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

export const ContactoIcon = styled.img` 
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const ContactoH1 = styled.h1`
  font-size: 2.5rem;
  color: #f9f9f9;
  margin-bottom: 80px;
  font-weight: bold;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const ContactoH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  color: #f9f9f9;
`

export const ContactoH3 = styled.h3`
  font-size: 1rem;
  text-align: center;
  color: #f9f9f9;
`

export const ContactoP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-style: oblique;
  color: #f9f9f9;
`