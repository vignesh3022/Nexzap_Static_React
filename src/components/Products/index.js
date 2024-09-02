import React from 'react'
import styled from 'styled-components'
import { Products } from '../../data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding-bottom:20px;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  
`

const Product = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const ProductTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`
const ProductItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:5px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
}
  
`
const ProductButton = styled.button`
  background-color: ${({ theme }) => theme.primary}; /* Set button background color */
  color: ${({ theme }) => theme.button_text}; /* Set button text color */
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.primary_hover}; /* Set button hover background color */
    transform: scale(1.05); /* Slightly enlarge the button on hover */
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;




const Skills = () => {
  return (
    <Container id="products">
      <Wrapper>
        <Title>Products</Title>
        <Desc> A simple, elegant interface so you can start sending emails in minutes. It fits right into your code with SDKs for your favorite programming languages.
        </Desc>
        <ProductContainer>
          {Products.map((id) => (
            <Product>
              <ProductTitle>{id.title}</ProductTitle>
              <ProductItem>{id.description}</ProductItem>
              <ProductButton href="https://nexzap.com/" className='mx-auto'>{id.title}</ProductButton>
            </Product>
          ))}

        </ProductContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
