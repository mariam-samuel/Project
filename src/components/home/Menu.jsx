// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
    return (
      <motion.div
        className="menuCard"
        initial={{
          x: "-100%",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay,
        }}
      >
        <div></div>
        <main>
          <img src={burgerSrc} alt={itemNum} />
  
          <h5>₹{price}</h5>
  
          <p>{title}</p>
          <Popup trigger=
                  {<button onClick={() => handler(itemNum)}>Buy Now</button>}
                 >
                  <div style={{color:"red", transform: 'translate(0%,-500%)', backgroundColor: '#fff', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'}}>Added to cart!</div>
                 
              </Popup>
              
  
          
        </main>
      </motion.div>
    );
  };
  
  export default MenuCard;
  
import burger1 from "../../assets/burger1.png";
<img src="../assets.png"/>
import burger2 from "../../assets/burger2.png";
<img src="../../assests/burger.png/>"


import burger3 from "../../assets/burger3.png";
<img src="../../assests/burger3.png"/>
const Menu = () => {
const addToCartHandler = (itemNum) => {};
return (
<section id="menu">
<h1>MENU</h1>
<div>
<MenuCard
itemNum={1}
burgerSrc={burger1}
price={200}
title="Cheese Burger"
handler={addToCartHandler}
delay={0.1}
/>
<MenuCard
itemNum={2}
burgerSrc={burger2}
price={500}
title="Veg Cheese Burger"
delay={0.5}
handler={addToCartHandler}
/>
<MenuCard
itemNum={3}
burgerSrc={burger3}
price={1800}
title="Cheese Burger with French Fries"
delay={0.8}
handler={addToCartHandler}
/>
</div>
</section>
);
};
export default Menu;

