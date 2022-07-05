
import React from "react";
import "./productList.css";
import Product from "../products/products";
import {products} from "../../data";
const productList =()=>{
    return (<div className="pl">
          <div className="pl-texts">
          <h1 className="pl-title">Create & inspire. It's vishal</h1>
        <p className="pl-desc">
          It is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
          </div>
          <div>
            <h1 className="p-t">My Technical Skills</h1>
          </div>
        <div className="pl-list">
        {products.map((item) =>{
          return <Product key={item.id} img={item.img}/>

        })}
          
            
        </div>  
    </div>
    );

}
export default productList;