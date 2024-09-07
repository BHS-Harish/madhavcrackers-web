import React from "react";
import Marquee from "react-fast-marquee";

function Categories(){
    const categorieImages=[1,2,3,4,5,6,7,8,9,10]
    return(
        <div className="py-12 flex flex-col items-center bg-[#4535C1]">
            <h1 className="text-2xl sm:text-3xl text-center font-medium text-[#facc15]">Our Categories...</h1>
            <p className="mt-3 text-center text-[#fff] mx-5 sm:mx-2">Explore our product categories to discover the perfect fireworks for your special occasions</p>
            <Marquee className="my-12"
            gradient={window.innerWidth<=768?false:true}
            gradientColor="#4535C1"
            pauseOnHover={true}
            >
                {
                    categorieImages.map((value)=>{
                        return(
                            <img className="w-[280px] py-5 mx-5 hover:rounded-xl hover:-translate-y-3 duration-500 hover:drop-shadow-xl" key={value} src={`https://ik.imagekit.io/madhav/categories/category${value}.png`} alt="best online crackers"/>
                        )
                    })
                }
            </Marquee>
            <button className="py-2 px-8 rounded-lg bg-[#fff] hover:-translate-y-2 duration-500">Quick Purchase</button>
        </div>
    )
}

export default Categories;