import React from "react"


function Product(props)
{
    return(
        <div>
            <h2>{props.pname}</h2>
            <h4>PRICE: Rs. {props.pprice}</h4>
            <a href={props.plink}>Buy Now</a>
            <hr></hr>
        </div>
        
    )
}

export default Product