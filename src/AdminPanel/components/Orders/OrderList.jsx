import React from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'


const OrderList = () => {

  const navigate = useNavigate()

  const data = [

      {
        id : 1,
        name :"Test 1",
        email : "test@gmail.com",
        paymentMode : "Paypal",
        paymentStatus : "Paid",
        TotalPrice : '$100',
        discount : '10%',
        payableamount : '$90',
        
  
    },
      {
        id : 2,
        name :"Test 2",
        email : "test@gmail.com",
        paymentMode : "Paypal",
        paymentStatus : "Paid",
        TotalPrice : '$100',
        discount : '10%',
        payableamount : '$90',
        
  
    },
      {
        id : 3,
        name :"Test 3",
        email : "test@gmail.com",
        paymentMode : "Paypal",
        paymentStatus : "Paid",
        TotalPrice : '$100',
        discount : '10%',
        payableamount : '$90',
        
  
    },
      {
        id : 4,
        name :"Test 4",
        email : "test@gmail.com",
        paymentMode : "Paypal",
        paymentStatus : "Paid",
        TotalPrice : '$100',
        discount : '10%',
        payableamount : '$90',
        
  
    },

  
  ]

  
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Payment Method</th>
            <th>Total Prices</th>
            <th>Discount </th>        
            <th>Payable Amount</th>
      
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {data.map((data=>(

          <tr key={data.id} >
        
            <td>{data.name} </td>
            <td>{data.paymentMode} </td>
            <td>{data.TotalPrice} </td>
            <td>{data.discount} </td>
            <td>{data.payableamount} </td>
            <td>{data.paymentStatus} </td>
        
            
            <td>

            <button 
                onClick={()=>navigate('/view-order',{state:data})}
                style={{border: 'none', cursor:"pointer", backgroundColor:"green", color:"#fff",margin: '0 10px'}}>View Details</button>
            <button style={{border: 'none', cursor:"pointer", backgroundColor:"red", color:"#fff"}}>Delete</button>

            </td>
          </tr>

          )))}
        </tbody>
      </Table>
    
    </>
  )
}

export default OrderList