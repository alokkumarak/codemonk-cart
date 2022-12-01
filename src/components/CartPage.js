import React from 'react'
import '../css/cartPage.css'
import CartProduct from './CartProduct';
import locationIcon from '../icon/LOCATION.png'
import checkIcon from '../icon/check.png'


function CartPage({discount, products, pincode}) {

    
    // console.log(products[0]);
    return (
      <div className="cartPage">
        <div className="cart_discountBanner">
          Shop for ${discount.minTotal} or more and get{" "}
          {discount.discountPercentage}% discount on your order
        </div>

        <div className="cart_Tab">
          <div className="cart_title">Shopping cart</div>
          <div className="cart_table">
            <div className="cart_tableTitle">
              <div className="cart_tableRTitle">Product</div>
              <div className="cart_tableRTitle"></div>
              <div className="cart_tableRTitle">Price</div>
              <div className="cart_tableRTitle">Quantity</div>
              <div className="cart_tableRTitle">Subtotal</div>
            </div>
            <CartProduct product={products[0]} discount={discount} />
            <CartProduct product={products[1]} discount={discount} />
            <CartProduct product={products[2]} discount={discount} />

            <div className="orderSec">
              <div className="orderLeft">
                <div className="orderLeft_title">Delivery Availability</div>
                <div className="orderInput">
                  <img src={locationIcon} alt="location" />
                  <input type="text" placeholder="enter pin" />
                  <div className="orderLeft_button">change</div>
                </div>
                <div className="orderLeft_bottom">
                  <div className="orderLeft_free">
                    <img src={checkIcon} alt="check" />
                    <div>Free delivery</div>
                  </div>
                  <div className="orderLeft_free">
                    <img src={checkIcon} alt="check" />
                    <div>Cash on delivery</div>
                  </div>
                  <div className="orderLeft_free">
                    <img src={checkIcon} alt="check" />
                    <div>Estimated delivery time is 3-5 days</div>
                  </div>
                </div>
              </div>

              <div className="orderRight">
                <div className="orderR_title">Order Summary (2 items)</div>
                <div className="orderR_subtotal">
                  <div className="orderR_sub">Subtotal</div>
                  <div className="orderR_suTo">25000 $</div>
                </div>
                <div className="orderR_subtotal">
                  <div className="orderR_sub">Total Discount</div>
                  <div className="orderR_dis">-100 $</div>
                </div>
                <div className="orderR_subtotal">
                  <div className="orderR_sub">Standard Shipping</div>
                  <div className="orderR_suTo">Free</div>
                </div>
                <div className="orderR_To">
                  <div className="orderR_orderTotal">Order Total</div>
                  <div className="orderR_orderTotalVal">42998,00 $</div>
                </div>
                <div className="orderR_buttons">
                  <div className="order_button1">continue shopping</div>
                  <div className="order_button2">checkout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CartPage
