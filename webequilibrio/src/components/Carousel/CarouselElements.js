import styled from "styled-components";

export const CarouselP=  styled.p`
height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 300px;

  @media screen and (max-width: 1000px){
    height: 400px;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 768px){
    height: 300px;
    padding-bottom: 50px;
  }

  @media screen and (max-width: 600px){
    height: 200px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 480px){
    height: 100px;
    padding-bottom:20px;
  }


`

export const CarouselH1 = styled.h1`
  font-size: 5rem;
  text-align: left;

  @media screen and (max-width: 1000px){
    font-size: 3rem;
  }

  @media screen and (max-width: 600px){
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`

export const CarouselH2 = styled.h2`
  font-size: 1.5rem;
  text-align: left;

  @media screen and (max-width: 1000px){
    font-size: 1rem;
  }

  @media screen and (max-width: 600px){
    font-size: 0.8rem;
  }

  @media screen and (max-width: 480px){
    font-size: 0.8rem;
  }
`