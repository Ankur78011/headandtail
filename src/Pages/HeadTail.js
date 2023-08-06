import React, { useState ,useEffect} from 'react'
import { styled } from 'styled-components'
const HeadTail = () => {
    const[select,setSelect]=useState('')
    const[myarr,setMyarr]=useState([])
    const[trigger,setTrigger]=useState(true)
    const[twoDarray,settwoDarray]=useState([])
    
    const handleSelect=(e)=>{
      setSelect(e.target.value)
    }
    const handleSubmit=(value)=>{
    if(value===''){
        alert("please choose a value")
    }
    if (select!==''){
        setMyarr((prev)=>[...prev,select])
       
    }

    }
    const subarray=(a)=>{
        let result=[]
        let curr=[a[0]]
        for(let i=1;i<a.length;i++){
            if (a[i]==a[i-1]){
                curr.push(a[i])
            }
            else{
                result.push(curr)
                curr=[a[i]]
            }
        }
        result.push(curr);
       
        settwoDarray(result)
    
    }

    useEffect(()=>{
        subarray(myarr)
    },[trigger])
  return (
    <Wrapper>
       <select onChange={handleSelect} value={select}>
        <option value=''>Select option</option>
        <option value='H'>H</option>
        <option value='T'>T</option>
       </select>
       <button onClick={()=>{handleSubmit(select);setTrigger(!trigger)}}>submit</button>
       {console.log(twoDarray)}
       <div className='outer'>
       {twoDarray.map((e,i)=>{
         return <div>{e.map((k,l)=>{
             return <div className='inner'>{k}</div>
         })}</div>
       })}
       </div>
      
    </Wrapper>
  )
}


const Wrapper=styled.div`
width:100vw;
height:100vh;
background:linear-gradient(to bottom, #ff5733, #ffcc33);
position:relative;
.outer{
    display:flex;
}
.inner{
    margin:15px;
}
`


export default HeadTail
