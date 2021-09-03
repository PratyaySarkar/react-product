import React from "react"
import Product from "./Product"
import Products from "./Products"

function App()
{
    const pinf = Products.map(prod => <Product pname={prod.pname} pprice={prod.pprice} plink={prod.plink} />)

    return(
        <div><h1>Top 10 Phones in 2021</h1>
        <hr></hr>
        {pinf}
        </div>
    )
}

export default App