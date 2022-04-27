import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import HOC from '../Common/HOC'
import styled from 'styled-components'

const MAinContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    border: 1px solid lightblue;
    padding: 20px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* border: 1px solid blue; */
    padding: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
`
const LeftSide = styled.div`
    width: 40%;
    padding: 10px;
    /* border: 1px solid ; */

    img{
        width: 200px;
        height: 200px;
        border-radius: 999px;
        border: 1px solid ;
    }

    li{
        list-style: none;
        margin-top: 5px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #357bfd;

        span{
            color: #6c6d6e;
            margin-left: 10px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
    } 

`
    
const RightSide = styled.div`
    padding: 10px;
    width: 60%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    button{
        width: 128px;
        border: none;
        border-radius: 3px;
        padding: 7px 0;
        background: #357bfd;
        color: #fff;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        width: 100%;
    } 
`

const UserSettings = () => {
  return (
    <>
        <ContainerS>
            <MAinContainer>
                <Wrapper>       
                    <LeftSide>              
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6t8hxLvIrrrZUm8cEi30proXjqE8TRfHpfA&usqp=CAU" alt="" />
                            <li>Name  : <span>Admin</span></li>
                            <li>Phone No: +91 <span>9876543210</span> </li>
                            <li>Email: <span>Admin@gmail.com</span> </li>
                            <li>Address : <span> New Delhi</span> </li>              
                    </LeftSide>
                    <RightSide>
                        Update Profile 
                        <span>Image</span>
                        <input type="file" />
                        <span>Name</span>
                        <input type="text" />
                        <span>Phone No</span>
                        <input type="text" />
                        <span>Email</span>
                        <input type="text" />
                        <span>Address</span>
                        <input type="text" />

                        <button>Update</button>
                    </RightSide>
                </Wrapper>
            </MAinContainer>

        </ContainerS>
    </>
  )
}

export default HOC(UserSettings)