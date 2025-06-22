import React from "react";
import headphones from "../../assets/cart/image-xx99-mark-one-headphones.png";

const ItemCard = (label, icon) => {
  return (

      <section className="bg-[#F1F1F1] pt-[88px] pb-[22px] relative rounded-[8px] flex items-center justify-center">
      <div className="">
        <div className="absolute -top-[30%] left-[40%] right-[50%] w-full h-[1px] bg-black">

        <img src={headphones} alt="" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold">HEADPHONES</h3>
          <div className="flex items-center gap-1">
            <p className="uppercase text-sm">Shop</p>
            <p>icon</p>
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default ItemCard;
