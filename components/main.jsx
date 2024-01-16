import React, { useEffect } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const home = () => {
  const [toggle, Settoggle] = useState(false);
  const [toggleimg, Settoggleimg] = useState(false);
  const [activeview2, Setactiveview2] = useState(false);
  const [activeview3, Setactiveview3] = useState(false);
  const [activeview4, Setactiveview4] = useState(true);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);
  const [width, setWidth] = useState(244);
  const [length, setLength] = useState(366);
  const [viewstyle, setviewstyle] = useState("item");

  const open = () => {
    Settoggle(!toggle);
  };

  const data = [
    {
      name: "Colossal Checks Cream Shirt",
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-01-M36.jpg?v=1705060547&width=600",
      img2: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-01-M2.jpg?v=1705060547&width=600",
      price: "999",
    },
    {
      name: "Colossal Checks Green Shirt",
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-02-M39.jpg?v=1705060604&width=600",
      img2: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-02-M3.jpg?v=1705060604&width=600",
      price: "999",
    },
    {
      name: "Colossal Checks Navy Shirt",
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-07-M21.jpg?v=1705060693&width=600",
      img2: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-07-M1.jpg?v=1705060693&width=600",
      price: "999",
    },
    {
      name: "Whiffy Blue Shirt",
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2496-01-M14.jpg?v=1704966730&width=800",
      img2: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2496-01-M3.jpg?v=1704966730&width=800",
      price: "899",
    },
    {
      name: "Whiffy White Shirt",
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2496-02-M55.jpg?v=1704966760&width=800",
      img2: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2496-02-M2.jpg?v=1704966760&width=800",
      price: "899",
    },
  ];

  // useEffect(()=>{
  //   const change=()=>{
  //     if(activeview2===true){
  //       setWidth(450)
  //       setLength(600)
  //     }
  //     else if(activeview3===true){
  //       setWidth(350)
  //       setLength(500)
  //     }
  //   }
  // })

  
  const handleImageHover = (index) => {
    setHoveredItemIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredItemIndex(null);
  };
  const active =()=>{
    Setactiveview2(true)
    Setactiveview3(false)
    Setactiveview4(false)
    setWidth(511)
    setLength(766)
    setviewstyle("item3")
  }
  const active2 =()=>{
    Setactiveview3(true)
    Setactiveview2(false)
    Setactiveview4(false)
    setWidth(333)
    setLength(499)
    setviewstyle("item2")
  }
  const active3 =()=>{
    Setactiveview4(true)
    Setactiveview3(false)
    Setactiveview2(false)
    setWidth(244)
    setLength(366)
    setviewstyle("item")
  }

  return (
    <div className="main-div">
      <div className="search-bar">
        <input
          placeholder="Search for product in this collection"
          className="search"
        />
        <div className="search-btn">
          <CiSearch />
        </div>
      </div>

      <div className="menu">
        <div className="view">
          <p>View As</p>
          <div className={!activeview2?'box':'box activebox_border'} onClick={active}>
            <div className={!activeview2?'boxes':'boxes activebox_bg'}></div>
            <div className={!activeview2?'boxes':'boxes activebox_bg'}></div>
          </div>
          <div className={!activeview3?'box':'box activebox_border'} onClick={active2}>
            <div className={!activeview3?'boxes':'boxes activebox_bg'}></div>
            <div className={!activeview3?'boxes':'boxes activebox_bg'}></div>
            <div className={!activeview3?'boxes':'boxes activebox_bg'}></div>
          </div>
          <div className={!activeview4?'box':'box activebox_border'} onClick={active3}>
            <div className={!activeview4?'boxes':'boxes activebox_bg'}></div>
            <div className={!activeview4?'boxes':'boxes activebox_bg'}></div>
            <div className={!activeview4?'boxes':'boxes activebox_bg'}></div>
            <div className={!activeview4?'boxes':'boxes activebox_bg'}></div>
          </div>
        </div>

        <div className="view-btn" onClick={open}>
          <p>Curated for you</p>
          <IoIosArrowDown className={!toggle ? "ar" : "ar arrow"} />
        </div>
        <div className={!toggle ? "toggle-div dis" : "toggle-div"}>
          <ul>
            <li>Newly Added</li>
            <li>Curated for you</li>
            <li>Best Seller</li>
            <li>Price (High to Low)</li>
            <li>Price (Low to High)</li>
            <li>Relevance</li>
            <li>Custom</li>
          </ul>
        </div>
      </div>

      <div className="store">
        {data.map((el, i) => (
          <div className={viewstyle} key={i} eventKey={el}>
            <Image
              src={hoveredItemIndex === i ? el.img2 : el.img}
              width={width}
              style={{cursor:"pointer"}}
              height={length}
              onMouseEnter={() => handleImageHover(i)}
              onMouseLeave={handleImageLeave}
            />
            <p className="item-name">{el.name}</p>
            <p>Rs. {el.price}</p>
            <div className="size">
              <div className="size-box">S</div>
              <div className="size-box">M</div>
              <div className="size-box">L</div>
              <div className="size-box">XL</div>
              <div className="size-box">XLL</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default home;
