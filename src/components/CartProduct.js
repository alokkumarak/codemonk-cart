import React, { useState } from 'react'
import deleteIcon from "../icon/DELETE.png";
// import productItem  from "../Images/phone.png";
import stand from '../Images/stick.png'
import '../css/cartProduct.css'

function CartProduct({ product, discount}) {
  // const imga =product.imageUrl;
  // console.log(imga)
  // const [subTotal,setSubTotal]=useState(product.price)
//   const productItem=product.imageUrl;
  const [Quantity, setQuantity] = useState(1);

  const decreaseQ = () => {
    if (Quantity < 1) {
      return setQuantity(0);
    }
    setQuantity((qty) => qty - 1);
  };
  const increaseQ = () => {
    setQuantity((qty) => qty + 1);
  };
   
  const tt=product.price * Quantity
  const subTotal = tt >= discount.minTotal ? (tt-((tt*discount.discountPercentage)/100)) : (tt) ;

  return (
    <>
      <div className="cart_product">
        <div className="cart_prodLeft">
          <div>
            {" "}
            <img src={product.imageUrl} alt="cart product" />
          </div>
        </div>
        <div className="cart_prodRight">
          <div className="cart_prodDetail">
            {product.tagline && (
              <div className="cart_prodDTag">{product.tagline}</div>
            )}
            <div className="cart_prodDTitle">{product.name}</div>
            <div className="cart_prodDDesc">{product.desc}</div>
            {product.planLink && (
              <div className="cart_prodDPlan">
                <a href={product.planLink}>view plan</a>
              </div>
            )}
          </div>

          <div className="cart_prodPrice">{product.price} $</div>

          <div className="cart_prodQ">
            <div className="cart_minus" onClick={() => decreaseQ()}>
              -
            </div>
            <div className="cart_prodQuantity">{Quantity}</div>
            <div className="cart_plus" onClick={() => increaseQ()}>
              +
            </div>
          </div>

          <div className="cart_subTDel">
            <div className="cart_subT">{subTotal} $</div>
            <img src={deleteIcon} alt="delete icon" />
          </div>
        </div>
      </div>

      {product.gift && (
        <div className="cart_freeGift">
          <div className="cart_freeL">
            <div>
              {" "}
              <img src={product.gift.imgUrl} alt="stand" />
            </div>
          </div>
          <div className="cart_freeR">
            <div className="cart_freeR1">
              <div className="cart_freeRtag">GIFT</div>
              <div className="cart_freetitle">{product.gift.name}</div>
              <div className="cart_freeDesc">{product.gift.desc}</div>
            </div>
            <div className="cart_freePrice">{product.gift.price} $</div>
            <div className="cart_freeQ">1</div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartProduct
