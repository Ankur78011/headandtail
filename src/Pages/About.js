import React from 'react'
import { styled } from 'styled-components'
const About = () => {
  return (
    <Wrapper>
    <Para>
    <p>In Head & Tail page you need to add one dropdown & one submit button.
- Here you need to implement a logic for head & tail.
-Firstofallyouneedtoaddistwovaluesindropdown‘H‘&‘ T‘andbydefault there will be text Select Value as placeholder (if you haven’t selected anything).
- Select any value from dropdown (H or T) and click on submit button that suppose you choose H value and it should be visible below submit button. And now if you add two more times H then that 2 H chars should be visible below first H (Below is the example)
H ← first added H
H ← second added H
H ← third added H
- Now If you select T then It should be visible beside First H, and if you again add T
then it should be visible below first T (Below is example) HT
HT
H
- Now if you add H then it should be visible beside first T, and If you again add T then
It should visible beside H (Below is the example) HTHT
HT
H
- now at last if you add T then we’ll add that T below first T HTHT
HTT
H
All you need to do is make separate columns for H and T, if you add same char then it will visible below from that added char, if you add new then we’ll create new column.</p>

    </Para>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(to bottom, #ff5733, #ffcc33);
position:relative;
`
const Para=styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%)
`
export default About
