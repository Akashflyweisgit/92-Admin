import React from 'react';
import styled from 'styled-components';
import Cards from '../Dashboard/Cards/Cards';
import HOC from '../../Common/HOC'
import DataComposeChart from '../Dashboard/Statistics/DataComposeChart'



function MainDashBord(props) {
      
const Container = styled.div`
    width: 100%;
    padding: 20px;
    height: 700px;
    overflow-y: auto;
    overflow-x: hidden;   
    `
const MainContainer = styled.div`
    margin: 80px 0;
    width: 100%;
    `

const Wrapper = styled.div`
    width: 100%;
    border: 1px solid #c6c6cc;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 4px 6px 5px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 4px 6px 5px -2px rgba(0,0,0,0.75);
box-shadow: 4px 6px 5px -2px rgba(0,0,0,0.75);

h4{
    margin: 20px 0;
}

`
    return (
        <Container>
            <MainContainer >
                <Cards/>
                <Wrapper>
                <h6 style={{margin : "10px 0", fontSize: '1.1rem', fontWeight:'700'}}> Revenu & User :</h6>                 
                    <DataComposeChart/>
                </Wrapper>             
            </MainContainer>
        </Container>
    )
}



export default HOC(MainDashBord)
