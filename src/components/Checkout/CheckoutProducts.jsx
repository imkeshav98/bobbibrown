import { useState } from "react";
export const ChekoutProducts = (data, i) => {
    const [qty, setQty] = useState(1);

    return (
        <div>
            <div key={i} className="flex_table">
                <div className="image_name">
                    <img src={data.data.url}></img>
                    <div><p><b>{data.data.name}</b></p>
                        <p>{`Qty: ${qty}`}</p>
                    </div>
                </div>
                <div><p>{`$${data.data.price}`}</p></div>
                <div><p>{`$${data.data.price * qty}`}</p></div>
            </div>
        </div>
    )
}
export const Subtotal=()=>{
    return (
        <div id="subtotal">
                    <div>
                        <p>Subotal</p>
                        <p>Shipping</p>
                        <p>Discount</p>
                        <h4>SUBTOTAL</h4>
                    </div>
                    <div>
                        <p>Rs</p>
                        <p>FREE</p>
                        <p>15%</p>
                        <h4>Rs</h4>
                    </div>
                </div>
    )
}