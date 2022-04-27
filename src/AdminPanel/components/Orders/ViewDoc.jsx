import React from 'react'

import { ContainerS } from '../../Common/CommonStyling'
import Header from '../../Common/Header'
import HOC from '../../Common/HOC'
import { Doc } from './DocViwer'




const ViewDoc = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Aggrement"} />
              <Doc />
        </ContainerS>
      
    </>
  )
}

export default HOC(ViewDoc)