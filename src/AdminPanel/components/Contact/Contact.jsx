import React, { useEffect } from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import ApartmentIcon from '@mui/icons-material/Apartment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useNavigate } from 'react-router'
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
    width: 50%;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);
    box-shadow: 2px 2px 5px 0px rgba(64,59,64,1);

    h6{
        margin-bottom: 15px;
        color: #3a3952;
        font-weight: 700;
      
    }
    span{
            color: #6d6de5;
            font-weight: 500;
            margin-left: 15px;
        }
    
    button{
        margin: 20px 0;
        border-radius: 2px;
        border: none;
        padding: 7px ;
        background-color: #084f52;
        color: #fff;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 5px 10px;
    }
`
const Address = styled.div`
    display: flex;
    
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  
    
`

const Contact = () => {



    // const [company , setCompany] = React.useState([])
    // const [address , setAddress] = React.useState([])
    // const [phone , setPhone] = React.useState([])
    // const [email , setEmail] = React.useState([])

    const [data , setData] = React.useState([])
    console.log(data)

    const ContactGet = async () => {

        try{
            const res = await axios.get("https://nintytwo-9092.herokuapp.com/api/contect/contect/")
            setData(res.data.data)
            console.log(res.data.data)

        }catch(err){
            console.log(err)
        }
       
    }

    useEffect(()=>{
        ContactGet()
    },[])



    const navigaet = useNavigate()

  return (
    <>
        <ContainerS>
            <Header cname={"Contact Details"}/>
            <MainContainers>
                {data.map((data=>(

                <Wrapper key={data._id}>
                   <h6> <ApartmentIcon/> Company Name : <span> {data.componyName} </span> </h6>
                   <h6><AlternateEmailIcon/> E-mail : <span> {data.email} </span> </h6>
                   <h6> <CallIcon/> Contact No : <span> +91 {data.contectInfo}</span> </h6>
                   <Address>
                   <h6> <LocationOnOutlinedIcon/> Address : </h6> 
                     <Details>
                         <span>{data.address} </span>
                         {/* <span>Pin : {data.pin} </span> */}
                     

                </Details>
                </Address>  
                <button onClick={()=>navigaet('/edit-contact',{state: data})}>Edit Contact Details</button>     
                </Wrapper>
                )))} 
            </MainContainers>
        </ContainerS>
    </>
  )
}

export default HOC(Contact)