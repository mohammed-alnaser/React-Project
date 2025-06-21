import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props;
    
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='Productdisplay'>
        <div className="display-left">
            <div className="display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />

            </div>
            <div className="display-img">
               <img className='display-main-img' src={product.image} alt="" />

            </div>




        </div>

        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon}alt="" />
                <img src={star_icon}alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

            </div>
            <div className="display-right-prices">
                <div className="display-right-prices-old">${product.old_price}</div>
                <div className="display-right-prices_new">${product.new_price}</div>

            </div>
            <div className="display-righ-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vero repudiandae ducimus perferendis
                 culpa. Amet hic deleniti inventore maxime, veniam architecto quo dolore aut quia odit blanditiis, vitae cumque. Fuga.
            </div>
            <div className="display-right-size">
                <h1>Select Size</h1>
             <div className="display-right-sizes">

                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}> ADD TO CART</button>
        <p className="display-right-category">
            <span>Category :</span>Women , T-Shirt , Crop Top
        </p>
         <p className="display-right-category">
            <span>Tags :</span>Modern , Latest
        </p>
            



        </div>
      
    </div>
  )
}

export default ProductDisplay
