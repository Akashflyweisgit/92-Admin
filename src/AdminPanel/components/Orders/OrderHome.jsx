import React from 'react'
import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import OrderList from './OrderList'

const OrderHome = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Order List"}/>

            <OrderList/>

        </ContainerS>
    </>
  )
}

export default HOC(OrderHome)