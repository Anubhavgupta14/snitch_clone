import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Footer from "../components/footer"

const detail = () => {
    const [active1, setactive1] = useState(true)
    const [active2, setactive2] = useState(false)
    const [active3, setactive3] = useState(false)
    const items = [
        {
            name:'Colossal Checks Cream Shirt',
            img:'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2625-01-M36.jpg?v=1705060547&width=600',
        },
        {
            name: "Whiffy Blue Shirt",
            img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2496-01-M14.jpg?v=1704966730&width=800"
        }
    ]
  const [qty, setqty] = useState(1);
  const [active, setactive] = useState(false);
  const [active_offer, setactive_offer] = useState(false);
  const [active_desc, setactive_desc] = useState(false);
  const [active_box, setactive_box] = useState(null);
  const [active_img, setactive_img] = useState("https://www.snitch.co.in/cdn/shop/files/CloseCall.jpg?v=1691679665&width=1800")
  const active_box_Change = (i) => {
    setactive_box(i)
  };
  const data = [
    {
      img: "https://www.snitch.co.in/cdn/shop/files/CloseCall.jpg?v=1691679665&width=1800",
    },
    {
      img: "https://www.snitch.co.in/cdn/shop/files/NOTAGT-SHIRT163.jpg?v=1691775881&width=1800",
    },
    {
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2199-07-M149.jpg?v=1691775881&width=1800",
    },
    {
      img: "https://www.snitch.co.in/cdn/shop/files/4MSS2199-07-M138.jpg?v=1691775881&width=1800",
    },
  ];
  return (
    <>
    <div className="detail-main">
      <div className="div-photo">
        <div className="more-img">
          {data.map((el, i) => (
            <div className="imgs" onClick={()=>{setactive_img(el.img); active_box_Change(i)}}>
              <Image src={el.img} width={87} height={130} className={active_box === i ? 'bd':''} />
            </div>
          ))}
        </div>
        <div className="main-img">
          <Image
            width={604}
            height={906}
            src={active_img}
          />
        </div>
      </div>
      <div className="detail">
        <div className="heading">
          <h2 className="detail-head">CLOSE CALL</h2>
          <p className="detail-p">Rs.1,199</p>
          <div className="br2"></div>
          <p className="detail-p2">QUANTITY</p>
          <div className="qty-detail">
            <div
              className="btn"
              onClick={() => {
                setqty(qty + 1);
              }}
              style={{ cursor: "pointer" }}
            >
              <FaPlus />
            </div>
            <div className="btn1">
              <p>{qty}</p>
            </div>
            <div
              className="btn"
              onClick={() => {
                if (qty > 1) {
                  setqty(qty - 1);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <FiMinus />
            </div>
          </div>
          <p className="detail-p2">SIZE</p>
          <div
            className={active ? "detail-size sz" : "detail-size"}
            onClick={() => {
              setactive(true);
            }}
          >
            100ml
          </div>
          <div className="desc matter">
            <p
              style={{
                textAlign: "center",
                marginBlock: "2vh",
                cursor: "pointer",
              }}
              onClick={() => {
                setactive_offer(!active_offer);
              }}
              className="detail-p2"
            >
              OFFERS FOR YOU{" "}
              <span>
                <IoIosArrowDown
                  className={
                    active_offer ? "detail-arrow arrow" : "detail-arrow"
                  }
                />
              </span>
            </p>
            <div className={active_offer ? "matter" : "matter dis"}>
              <p
                style={{
                  fontSize: "21px",
                  marginBlock: "3vh",
                  lineHeight: "20px",
                  fontWeight: "600",
                }}
              >
                or Pay <span style={{ color: "#23821c" }}>₹400</span> and rest
                later via{" "}
                <span style={{ marginRight: "2vh", cursor: "pointer" }}>
                  <Image
                    src="https://websdk-assets.s3.ap-south-1.amazonaws.com/shopify-messaging-app/snitchpay_logo.png"
                    width={137}
                    height={14}
                  />
                </span>{" "}
                <span style={{ cursor: "pointer" }}>
                  <Image
                    src="https://websdk-assets.s3.ap-south-1.amazonaws.com/shopify-messaging-app/info-icon.png"
                    width={18}
                    height={18}
                  />
                </span>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "1vh",
                  letterSpacing: "2px",
                }}
              >
                BUY 1 GET 1 FREE!
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "1vh",
                  letterSpacing: "2px",
                }}
              >
                Use Code : <span style={{ fontWeight: "600" }}>LIKEABOSS</span>
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "1vh",
                  letterSpacing: "2px",
                }}
              >
                Hurry! Limited Period Offer.
              </p>
            </div>
          </div>

          <div className="desc matter" style={{marginBottom:'2vh'}}>
            <p
              style={{
                textAlign: "center",
                marginBlock: "2vh",
                cursor: "pointer",
              }}
              onClick={() => {
                setactive_desc(!active_desc);
              }}
              className="detail-p2"
            >
              DESCRIPTION
              <span>
                <IoIosArrowDown
                  className={
                    active_desc ? "detail-arrow arrow" : "detail-arrow"
                  }
                />
              </span>
            </p>
            <div className={active_desc ? "matter" : "matter dis"}>
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "1vh",
                  letterSpacing: "2px",
                }}
              >
                Close Call embodies a universal spirit for a diverse world. It
                is an iconic fragrance that is unapologetically bold, yet exudes
                youthful, fresh simplicity. Celebrating individuality and unity,
                this fragrance evokes the excitement of limitless opportunity.
                Bringing together refreshing notes of green tea, papaya, and
                bergamot. Perfectly balanced with soft accents of nutmeg,
                violet, cardamom, and rose. Compelling and dynamic, Close Call
                is a dialogue between the masculine and feminine. Close Call is
                revolutionary, rejecting traditional gender stereotypes and
                harmonizing feminine floral and masculine musk into one unisex
                scent, appealing to men and women alike. . . This fragrance
                carries fresh notes of green tea while embracing the sweetness
                of amber and musk.
              </p>

              <table style={{marginBlock:'2vh'}}>
                <tbody>
                  <tr>
                    <td className="td">Top Note</td>
                    <td className="td2">
                      Lemon, Green Notes, Bergamot, Mandarin Orange, Pineapple,
                      Cardamom, Papaya
                    </td>
                  </tr>
                  <tr>
                    <td className="td">Middle Note</td>
                    <td className="td2">
                      Lily of the Valley, Jasmine, Violet, Nutmeg, Rose, Orris
                      Root, Freesia
                    </td>
                  </tr>
                  <tr>
                    <td className="td">Base Note</td>
                    <td className="td2">
                      LGreen Accord, Musk, Cedar, Sandalwood, Oakmoss, Green
                      Tea, Amber
                    </td>
                  </tr>
                  <tr>
                    <td className="td">Fragrance Family</td>
                    <td className="td2">Citrus, Green, Woody, Musky, Floral</td>
                  </tr>
                </tbody>
              </table>
              <p style={{fontWeight:'600', fontSize:'20px'}}>Fragrance Type: <span style={{fontStyle:'italic', fontWeight:'500'}}>Eau de Parfum</span></p>
              <p style={{fontWeight:'600', fontSize:'20px'}}>Size: <span style={{fontStyle:'italic', fontWeight:'500'}}>100ml</span></p>
              <p style={{fontWeight:'600', fontSize:'20px'}}>Occasion: <span style={{fontStyle:'italic', fontWeight:'500'}}>Casual</span></p>
              <p style={{fontWeight:'600', fontSize:'20px'}}>Usage Instructions: <span style={{fontStyle:'italic', fontWeight:'500'}}>Spray on all pulse points chest, neck and wrists</span></p>
              <p style={{fontWeight:'600', fontSize:'20px'}}>Best Before: <span style={{fontStyle:'italic', fontWeight:'500'}}>36 months from date of manufacturing</span></p>
              <p style={{fontWeight:'600', fontSize:'20px'}}>SKU: <span style={{fontStyle:'italic', fontWeight:'500'}}>4MSFR0910</span></p>
              <p style={{fontWeight:'600', fontSize:'20px', marginTop:'4vh'}}>NO RETURNS OR EXCHANGE WILL BE APPLICABLE ON THIS PRODUCT</p>
            </div>
          </div>

          <button className="detail-btn">SELECT A SIZE</button>
          <button className="detail-btn">ADD TO CART</button>
          <div className="detail-btn2">
            <CiHeart className="heart" />
            <p>Add to Wishlist</p>
            </div>
        </div>
      </div>
    </div>
    <div className="recent-div">
        <div className="br3"></div>
        <p className="p-head">RECENTLY VIEWED</p>
        <div className="detail-items">
            {items.map((el,i)=>(
                <div key={i} style={{cursor:'pointer'}}>
                    <Image src={el.img} width={250} height={380}/>
                    <p style={{textAlign:'center'}}>{el.name}</p>
                </div>
            ))}
        </div>
        <div className="manu-detail">
            <div className="tab">
                <div className={active1?'tab1 bg_change':'tab1'} onClick={()=>{
                setactive1(true);
                setactive2(false);
                setactive3(false);
            }}>
                    <p>Manufacturing Details</p>
                </div>
                <div className={active2?'tab1 bg_change':'tab1'} onClick={()=>{
                setactive1(false);
                setactive2(true);
                setactive3(false);
            }}>
                    <p>Returns / Exchange Policy</p>
                </div>
                <div className={active3?'tab1 bg_change':'tab1'} onClick={()=>{
                setactive1(false);
                setactive2(false);
                setactive3(true);
            }}>
                    <p>Country of Origin</p>
                </div>
            </div>
            <div className={active1? 'tab2':'tab2 dis'}>
                <div className="subtab">
                    <p style={{fontWeight:'600'}}>Manufactured By:</p>
                    <p>Aroma De France</p>
                </div>
                <div className="subtab">
                    <p style={{fontWeight:'600'}}>Marketed By:</p>
                    <p>Snitch Apparels Pvt. Ltd.</p>
                    <p style={{marginBottom:'2vh'}}>No 1/1, St. Johns Church Road, Bharathinagar, Bengaluru - 560005</p>
                </div>
            </div>
            <div className={active2? 'tab2':'tab2 dis'}>
                <div className="subtab">
                    <p>This product is not eligible for Returns or Exchanges.</p>
                    <p>For more details on our Returns & Exchange Policies, please <span style={{fontWeight:'600'}}>click here․</span></p>
                </div>
            </div>
            <div className={active3? 'tab2':'tab2 dis'}>
                <div className="subtab">
                    <p>India</p>
                </div>
            </div>
        </div>
        <div className="br3"></div>
    </div>
    <Footer/>
    </>
  );
};

export default detail;
