import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import { useLocation } from 'react-router'
import { SetMealOutlined } from '@mui/icons-material'
import axios from 'axios'


const MainContainers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid lightblue;
    border-radius: 5px;
    padding: 20px;
  
`

const Wrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);
    box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);

    h6{
        margin-top: 7px;
        color: #3a3952;
        font-weight: 700; 
        width: 100%;
    }
    input, textarea{
        width: 100%;
        outline-color: #88bfd1;
        border-radius: 3px;
        border: 1px solid lightblue;
        padding: 6px 10px;
    }
    button{
        margin: 20px 0;
    }
    span{

        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;   
        input{
            width: 100%;

        }
    }

    @media screen and (max-width: 768px) {    
        width: 80%;

    }

    button{

        margin: 20px 0;
        border-radius: 2px;
        padding: 5px 20px;
        background-color: #275565;
        color: #fff;
        border: none;

    }  
`



const EditContact = () => {

    // const location = useLocation()
    // const {address, email, phone, company, pin} = location.state

    const [cname , setcname] = React.useState("")
    const [email1 , setemail1] = React.useState("")
    const [mno , setmno] = React.useState("")
    const [city , setcity] = React.useState("")
    // const [pinno , setpinno] = React.useState("")

    let url = "https://nintytwo-9092.herokuapp.com/api/contect/contect"

    let data = {
        componyName : cname,
        email : email1,
        contectInfo : mno,
        address : city

    }

    const AddContact = async() => {
        try{
            const res = await axios.post(url, data)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <>
        <ContainerS>
            <Header cname={"Edit Contact Details"} needaddbtn={false}  />
                <MainContainers>
                    <Wrapper>                       
                        <h6>  Company Name :</h6>
                        <input type="text" value={cname}  onChange={(e)=>setcname(e.target.value)} /> 
                        <h6> E-mail :</h6>
                        <input type="text"  value={email1} onChange={(e)=>setemail1(e.target.value)} />
                        <h6> Contact No : </h6> 
                        <input type="number" name="" id="" value={mno} onChange={(e)=>setmno(e.target.value)} />  
                        <h6>  Address :</h6>  
                        <span> City <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} /></span>                        
                        {/* <span>Pin<input type="text" value={pinno} onChange={(e)=>setpinno(e.target.value)} /></span>  */}
                        <button onClick={AddContact}> Save </button>  
                    </Wrapper>              
                </MainContainers>
        </ContainerS>    
    </>
  )
}

export default HOC(EditContact)