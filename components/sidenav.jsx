import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const sidenav = () => {
  const [listview, setlistview] = useState(false);
  const [listview2, setlistview2] = useState(false);
  const [listview3, setlistview3] = useState(false);
  const [listview4, setlistview4] = useState(false);
  const [listview5, setlistview5] = useState(false);
  const [listview6, setlistview6] = useState(false);
  const [listview7, setlistview7] = useState(false);
  const [listview8, setlistview8] = useState(false);
  const [listview9, setlistview9] = useState(false);
  const collection = [
    {
      name: "ACCESSORIES",
      qty: 15,
    },
    {
      name: "BOXES",
      qty: 24,
    },
    {
      name: "CARGO PANTS",
      qty: 36,
    },
    {
      name: "CHINOS",
      qty: 6,
    },
    {
      name: "CO-ORDS",
      qty: 8,
    },
    {
      name: "FORMAL TROUSERS",
      qty: 75,
    },
    {
      name: "HOODIES",
      qty: 29,
    },
    {
      name: "JACKETS",
      qty: 37,
    },
    {
      name: "JEANS",
      qty: 50,
    },
    {
      name: "JOGGERS",
      qty: 3,
    },
    {
      name: "SHIRTS",
      qty: 1100,
    },
    {
      name: "SWEATERS",
      qty: 13,
    },
    {
      name: "SWEATSHIRTS",
      qty: 25,
    },
    {
      name: "T-SHIRTS",
      qty: 139,
    },
    {
      name: "TRACK PANT",
      qty: 2,
    },
  ];
  const size = [
    {
      name:'S',
      qty: 1258
    },
    {
      name:'M',
      qty: 1272
    },
    {
      name:'L',
      qty: 1304
    },
    {
      name:'XL',
      qty: 1193
    },
    {
      name:'XXL',
      qty: 867
    },
    {
      name:'3XL',
      qty: 13
    },
    {
      name:'4XL',
      qty: 12
    },
    {
      name:'5XL',
      qty: 13
    },
    {
      name:'28',
      qty: 6
    },
    {
      name:'30',
      qty: 114
    },
    {
      name:'32',
      qty: 125
    },
    {
      name:'34',
      qty: 146
    },
    {
      name:'36',
      qty: 121
    },
    {
      name:'38',
      qty: 95
    },
    {
      name:'40',
      qty: 1
    },
    {
      name:'41',
      qty: 1
    },
    {
      name:'42',
      qty: 1
    }
  ]
  const fit =[
    {
      name: 'SLIM FIT',
      qty: 1046
    },
    {
      name: 'SKINNY FIT',
      qty: 19
    },
    {
      name: 'BAGGY FIT',
      qty: 18
    },
    {
      name: 'RELAXED FIT',
      qty: 207
    },
    {
      name: 'BOOT CUT',
      qty: 1
    },
    {
      name: 'STRAIGHT FIT',
      qty: 5
    },
    {
      name: 'OVERSIZED FIT',
      qty: 54
    },
    {
      name: 'CUSTOM FIT',
      qty: 6
    }
  ]
  const pattern = [
    {
      name: 'PRINTED',
      qty: 74
    },
    {
      name: 'CHECKS',
      qty: 7
    },
    {
      name: 'PLAIN',
      qty: 257
    },
    {
      name: 'STRIPES',
      qty: 8
    },
    {
      name: 'FLORAL',
      qty: 3
    },
    {
      name: 'GRAPHICS',
      qty: 14
    },
    {
      name: 'DISTRESSED',
      qty: 3
    },
    {
      name: 'EMBROIDERY',
      qty: 11
    },
    {
      name: 'BASIC',
      qty: 10
    },
    {
      name: 'POLO',
      qty: 56
    }
  ]

  const color = [
    {
      name : 'WHITE',
      qty : 2
    },
    {
      name : 'LAVENDER',
      qty : 6
    },
    {
      name : 'MAGENTA',
      qty : 2
    },
    {
      name : 'NAVY',
      qty : 110
    },
    {
      name : 'BLACK',
      qty : 266
    },
    {
      name : 'BLUE',
      qty : 242
    },
    {
      name : 'GREEN',
      qty : 134
    },
    {
      name : 'BEIGE',
      qty : 46
    },
    {
      name : 'OLIVE',
      qty : 52
    },
    {
      name : 'PURPLE',
      qty : 34
    },
    {
      name : 'WINE',
      qty : 2
    },
    {
      name : 'WHITE',
      qty : 191
    },
    {
      name : 'PEACH',
      qty : 9
    },
    {
      name : 'KHAKI',
      qty : 4
    },
    {
      name : 'CREAM',
      qty : 48
    },
    {
      name : 'BROWN',
      qty : 50
    },
    {
      name : 'MAROON',
      qty : 31
    },
    {
      name : 'MUSTARD',
      qty : 4
    },
    {
      name : 'GREY',
      qty : 187
    },
    {
      name : 'ORANGE',
      qty : 16
    },
    {
      name : 'YELLOW',
      qty : 25
    },
    {
      name : 'PINK',
      qty : 59
    },
    {
      name : 'RED',
      qty : 39
    },
  ]
  const price = [
    {
      name: 'UNDER Rs. 999',
      qty: 465
    },
    {
      name: 'Rs. 999',
      qty: 382
    },
    {
      name: 'Rs. 999 - Rs. 1,499',
      qty: 1338
    },
    {
      name: 'Rs. 1,499 - Rs. 1,999',
      qty: 336
    },
    {
      name: 'ABOVE Rs. 1,999',
      qty: 23
    }
  ]
  const occasion = [
    {
      name: 'CASUAL WEAR',
      qty: 1329
    },
    {
      name: 'COMFORT WEAR',
      qty: 100
    },
    {
      name: 'STREET WEAR',
      qty: 113
    },
    {
      name: 'CLUB WEAR',
      qty: 24
    },
    {
      name: 'BEACH WEAR',
      qty: 107
    },
    {
      name: 'PARTY WEAR',
      qty: 156
    },
    {
      name: 'HOLIDAY WEAR',
      qty: 40
    },
    {
      name: 'WEEKEND WEAR',
      qty: 17
    },
    {
      name: 'COLLEGE WEAR',
      qty: 600
    },
    {
      name: 'EVERYDAY WEAR',
      qty: 23
    },
    {
      name: 'OFFICE WEAR',
      qty: 309
    },
    {
      name: 'STREETWEAR',
      qty: 46
    },
    {
      name: 'ATHLEISURE',
      qty: 9
    },
  ]
  const sleeves = [
    {
      name : 'FULL SLEEVES',
      qty: 69
    },
    {
      name : 'HALF SLEEVES',
      qty: 59
    },
    {
      name : 'SLEEVELESS',
      qty: 5
    },
  ]
  const neck = [
    {
      name: 'BUTTON DOWN COLLAR',
      qty: 151
    },
    {
      name: 'SPREAD COLLAR',
      qty: 698
    },
    {
      name: 'CHINESE COLLAR',
      qty: 7
    },
    {
      name: 'MANDARIN COLLAR',
      qty: 27
    },
    {
      name: 'CUBAN COLLAR',
      qty: 208
    },
    {
      name: 'CREW NECK',
      qty: 77
    },
    {
      name: 'POLO',
      qty: 56
    },
  ]

  const toggle = () => {
    setlistview(!listview);
  };

  return (
    <div className="side-main">
      <div className="side">

        <div className="head" onClick={toggle}>
          <IoMdArrowDropdown className={listview ? "arr2" : ""} />
          <h5>Collections</h5>
        </div>
        <div className={listview ? "collection dis" : "collection"}>
          {collection.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" style={{color:'black', background:'black'}} />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>


        <div className="head" onClick={()=>{setlistview2(!listview2)}}>
          <IoMdArrowDropdown className={listview2 ? "arr2" : ""} />
          <h5>Size</h5>
        </div>
        <div className={listview2 ? "collection dis" : "collection"}>
          {size.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>


        <div className="head" onClick={()=>{setlistview3(!listview3)}}>
          <IoMdArrowDropdown className={listview3 ? "arr2" : ""} />
          <h5>Fit</h5>
        </div>
        <div className={listview3 ? "collection dis" : "collection"}>
          {size.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>


        <div className="head" onClick={()=>{setlistview4(!listview4)}}>
          <IoMdArrowDropdown className={listview4 ? "arr2" : ""} />
          <h5>Pattern</h5>
        </div>
        <div className={listview4 ? "collection dis" : "collection"}>
          {pattern.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>



        <div className="head" onClick={()=>{setlistview5(!listview5)}}>
          <IoMdArrowDropdown className={listview5 ? "arr2" : ""} />
          <h5>Colors</h5>
        </div>
        <div className={listview5 ? "collection dis" : "collection"}>
          {color.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>



        <div className="head" onClick={()=>{setlistview6(!listview6)}}>
          <IoMdArrowDropdown className={listview6 ? "arr2" : ""} />
          <h5>Price(Rs.)</h5>
        </div>
        <div className={listview6 ? "collection dis" : "collection"}>
          {price.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>



        <div className="head" onClick={()=>{setlistview7(!listview7)}}>
          <IoMdArrowDropdown className={listview7 ? "arr2" : ""} />
          <h5>Occasion</h5>
        </div>
        <div className={listview7 ? "collection dis" : "collection"}>
          {occasion.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>



        <div className="head" onClick={()=>{setlistview8(!listview8)}}>
          <IoMdArrowDropdown className={listview8 ? "arr2" : ""} />
          <h5>Sleeves</h5>
        </div>
        <div className={listview8 ? "collection dis" : "collection"}>
          {sleeves.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>
        <div className="br"></div>



        <div className="head" onClick={()=>{setlistview9(!listview9)}}>
          <IoMdArrowDropdown className={listview9 ? "arr2" : ""} />
          <h5>Neck/Collar</h5>
        </div>
        <div className={listview9 ? "collection dis" : "collection"}>
          {neck.map((el, i) => (
            <div className="list">
              <div className="check">
                <input type="checkbox" />
                <p>{el.name}</p>
              </div>
              <p className="qty">({el.qty})</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default sidenav;
