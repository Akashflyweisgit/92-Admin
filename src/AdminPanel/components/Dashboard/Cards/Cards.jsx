import React from 'react'
import styled from 'styled-components'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import{ useNavigate} from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    background-color: #f0f4fa;
    border-radius: 10px;
    padding: 20px;

`
const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;  

`
const SmallCards = styled.div`
    width: 280px;
    height: 120px;
    /* border: 1px solid lightgray; */
    border-radius: 3px;
    padding: 10px;
    -webkit-box-shadow: 8px 9px 6px -8px rgba(94,88,94,1);
    -moz-box-shadow: 8px 9px 6px -8px rgba(94,88,94,1);
    box-shadow: 8px 9px 6px -8px rgba(94,88,94,1);
    position: relative;
    background-color: #dff5f7;
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.4s ease-in-out;

    :hover{
        transform: scale(1.04); 
        }
        
    span{
        position: absolute;
        left: 30px;
        top: 20px;
        color: #757a7a;
        font-size: 2.2rem;
        font-weight: 700;
    }
    h6{
        position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    font-weight: 700;
    color: green;
    z-index: 2;
        
    }
    img{
        width: 100px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }   
`

const Cards = () => {

    const navigate = useNavigate();

    return (
        <>
        <Container>
            <MainContent>
                <SmallCards  onClick={() => navigate("#")}>
                    <span>190</span>
                    <h6>Active User</h6>
                    <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>
                </SmallCards>
                <SmallCards style={{backgroundColor : '#ebf0ec'}} onClick={() => navigate("#")}>
                    <span>959</span>
                    <h6>Total User</h6>
                    <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>
                </SmallCards>
                <SmallCards style={{backgroundColor : '#ebf3f5'}} onClick={() => navigate("#")}>
                    <span>$ 9990</span>
                    <h6>Total Revenu</h6>
                    <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>
                </SmallCards>
                <SmallCards style={{backgroundColor : '#ebf3f5'}} onClick={() => navigate("#")}>
                    <span> 910</span>
                    <h6>Total Orders</h6>
                    <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>
                </SmallCards>
            </MainContent>

        </Container>
    </>
  )
}
export default Cards