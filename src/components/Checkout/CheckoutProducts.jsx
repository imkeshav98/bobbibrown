export const ChekoutProducts = (data, qty, i) => {
  return (
    <div>
      <div key={i} className="flex_table">
        <div className="image_name">
          <img src={data.data.Image} alt="productPic"></img>
          <div>
            <p>
              <b>{data.data.name}</b>
            </p>
            <p>{data.qty}</p>
          </div>
        </div>
        <div>
          <p>{`$${data.data.price}`}</p>
        </div>
        <div>
          <p>{`$${data.data.price * data.qty}`}</p>
        </div>
      </div>
    </div>
  );
};
export const Subtotal = ({ data }) => {
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
  );
};
