import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import User from './User'
import HOC from '../../Common/HOC';
import Header from '../../Common/Header';
import { ContainerS } from '../../Common/CommonStyling';


function Users(props) {

    // const Container = styled.div`
    // width: 100%;
    // padding: 20px;
    // `
    const MainContainer = styled.div`
   
    width: 100%;

    h5{
        margin: 20px 0;
    }

    `
  
    // const navigate = useNavigate();

    return (
        <ContainerS>
            <MainContainer > 
                <Header cname="All Users" needaddbtn={false}/>  
                <User/>                       
            </MainContainer>
           
        </ContainerS>
    )
}



export default HOC(Users)
