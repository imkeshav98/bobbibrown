import { useState, useEffect } from "react";
export const ChekoutProducts = (data, i) => {
    const [qty, setQty] = useState(1);
    console.log(data)
    const getCartElement = async()=>{
        let res= await fetch(`https://bobbi-brown-api.herokuapp.com/product/product/${data.data}`);
        let element_data= await res.json();
        setCartElement(element_data)
      }

      const [cartElement, setCartElement]=useState({
        Product:{
          Image:"",
          name:"",
          tag:"",
          price:"",
          page:""
        }
       
      });
      console.log()

      useEffect(()=>{
        getCartElement()
      }, [])

    return (
        <div>
            <div key={i} className="flex_table">
                <div className="image_name">
                    <img src={cartElement.Product.Image}></img>
                    <div><p><b>{cartElement.Product.name}</b></p>
                        <p>{`Qty: ${qty}`}</p>
                    </div>
                </div>
                <div><p>{`$${cartElement.Product.price}`}</p></div>
                <div><p>{`$${cartElement.Product.price * qty}`}</p></div>
            </div>
        </div>
    )
}
export const Subtotal=({data})=>{
    // console.log(totalprice)
    return (
        <div id="subtotal">
                    <div>
                        <p>Subtotal</p>
                        <p>Shipping</p>
                        <h4>SUBTOTAL</h4>
                    </div>
                    <div>
                        <p>${data}</p>
                        <p>FREE</p>
                        <h4>${data}</h4>
                    </div>
                </div>
    )
}