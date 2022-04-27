import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import HOC from '../../Common/HOC'
import styled from 'styled-components'
import Header from '../../Common/Header'
import { useNavigate } from 'react-router-dom'

const MainContainers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
`


const ViewOrder = () => {

    const navigate = useNavigate();
  return (
    <>
        <ContainerS>

            <Header cname={"Order Details"} needaddbtn={false} btn={"add order"} />
             <MainContainers>
             <Wrapper>
                {/* <Image>
                  <img src="
                  https://www.gstatic.com/webp/gallery/1.sm.jpg"
                   alt="" />
                </Image> */}
                {/* <DetailsWrapper> */}
                <CardDetails>
                
                    <h4> Details</h4>
                    <h5> Name : <span> Name</span>  </h5>
                    <h5> Phone No: <span> 9876543210</span></h5> 
                    <h5> Category: <span> Category 1</span></h5> 
                    <h5> Sub-Category: <span> Sub-Category 4</span></h5> 
                        
                    <h5> Email : <span> test@gmail.com</span></h5> 
                    <h5> Payment Mode : <span> Paypal</span></h5> 
                    <h5> Payment Status : <span> Paid</span></h5> 
                    <h5> Total payment : <span> $90 </span></h5> 
                    <h5> Invoice number : <span> #234578190 </span></h5>
                                     
                    <h5>Aggrement: <span onClick={()=>navigate('/view-doc',)} style={{cursor: 'pointer', color:"darkblue", textDecoration:"underline"}}>View Doc</span> </h5> 
                    <h5>Legal Form: <span onClick={()=>navigate('/view-legel-form')} style={{cursor: 'pointer', color:"darkblue", textDecoration:"underline"}}>View Doc</span> </h5> 
                </CardDetails>
      
            </Wrapper>

             </MainContainers>
        </ContainerS> 
    </>
  )
}

export default HOC(ViewOrder)


const Wrapper = styled.div`
    width: 50%;

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

`



// const Image = styled.div`
//   width: 200px;
//   height: 200px;
//   margin-bottom: 20px;
//   border: 1px solid #ccc;
//   border-radius: 50%; 
//   img{
//     border-radius: 50%;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;

//   }
// `
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

   }
`
// const DetailsWrapper  = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `
