import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'


const MainContainer = styled.div`

    width: 100%;
    display: flex;
    align-items:center ;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    border: 1px solid #9e9e9e ;
    padding: 20px;
    border-radius: 5px;

    input, textarea {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 20px;
    }

    span{
      color: #2d2b5a;
      margin-left: 10px;
    }
    -webkit-box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);
    -moz-box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);
    box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);

    button{
        cursor: pointer;
        background-color: #9e9af0;
        color: #fff;
        border: none;
        padding:7px 10px ;
    }



`

// const BtnDiv = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     button{
//         float: right;
//         width: 119px;
//         padding: 5px 0;
//         border: none;
//         background-color: #9e9af0;
//         color: #fff;
//         cursor: pointer;
//         border-radius: 4px;
//     }
// `

const Image = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 50%; 
  img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`
const CardDetails =  styled.div`

    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
   -webkit-touch-callout: none; // Disable Android & iso long press: ;
   margin: 20px 0;
   display: flex;
   flex-direction: column;
   width: 50%;
   padding: 10px;



   
 

   h4{
     color: #075d71;
     font-size: 1.3rem;
     font-weight: 700;
   }

   @media screen and (max-width: 768px) {
    width: 100%;

   }

   h5{
     display: flex;
     font-size: 0.9rem;
     color: #aa5b00;
     /* p{
      color: transparent;
        text-shadow: 0 0 8px #000;
     } */
   }
`
const DetailsWrapper  = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const EditUser = () => {

//   const location = useLocation()
//   const name = location.state.name
//   const email = location.state.email
//   const cardnumber = location.state.cardNumber
//   const nameoncard = location.state.nameOncard
//   const expirydate = location.state.expiryDate
//   const cvv = location.state.cvv
//   const img = location.state.img

  return (
    <>
        <ContainerS>
            <Header needaddbtn={false} cname={" View User Details "}  />
            <MainContainer>
            <Wrapper>
                <Image>
                  <img src={''} alt="" />

                  <input type="file" />
                </Image>
              <DetailsWrapper>
                  <CardDetails>

                  <h4> Details</h4>
                  <h5> Name :  </h5>
                  <input type="text" />
                  <h5> Phone No: </h5>  
                  <input type="text" />   
                  <h5> Email : </h5>
                  <input type="text" />
                  
                  </CardDetails>
                  <CardDetails>
                    <h4>Address</h4>
                    <h5>Address :  </h5>
                    <input type="text" />   
                    <h5 >Country :  </h5>
                    <input type="text" />
                    <h5>City  : </h5>
                    <input type="text" />
                    <h5>State : </h5>
                    <input type="text" />
                    <h5>Pin :   </h5>
                    <input type="text" />
                  </CardDetails>                   
              </DetailsWrapper>  

              <button>Update</button>
      
            </Wrapper>
        </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(EditUser)