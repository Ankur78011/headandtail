import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
    <ContentDiv>
     <LinkToPages to='/about'>ABOUT</LinkToPages>
  <LinkToPages to='/headandtail'>HEAD AND TAIL</LinkToPages>
    </ContentDiv>
     
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(to bottom, #ff5733, #ffcc33);
position:relative;
`
const ContentDiv=styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction:column;
`

const LinkToPages=styled(Link)`
text-decoration:none;
color:white;
font-weight:500;
width:150px;
height:50px;
align-items: center;
display:flex;

background:black;
border-radius:20px;
cursor:pointer;
margin:20px;
text-align: center;
    justify-content: center;
`

export default Home
