import React from 'react'
import HOC from "../../Common/HOC.jsx"
import { Card } from "@material-ui/core";
import "./Dashboard.css";
import Cards from './Cards/Cards.jsx';
import ProductList from '../ProductList/ProductList'

function Dashboard() {
    return (
        <>
            <div className="content_padding Page_width">
                <div className="ml-3 mr-3">
                    <div className="Content_topHeading">
                        Dashboard
                    </div>
                    <hr />
                    <div className='mb-3'>
                        <ProductList/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Dashboard)
