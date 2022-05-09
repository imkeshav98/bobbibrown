import "./productdetails.css";
import { useState, useLayoutEffect } from "react";
import { BButton } from "./styled-components";
import { Menu, Dropdown, Space } from "antd";
import { DownOutlined, StarFilled, InstagramFilled } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";
import { Review } from "./review";
import "antd/dist/antd.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Login/action";
import { useSelector } from "react-redux";

const menu1 = (
  <Menu
    items={[
      {
        label: (
          <p style={{ width: "500px" }}>
            A Bobbi Brown bestseller—a primer plus moisturization for smooth
            makeup application (it's the best of both worlds). Rich in feel, but
            never greasy, this advanced oil-free face formula, with Shea Butter,
            instantly hydrates, softens and cushions skin. Country of Origin:
            Belgium / Canada / Czech Republic / Dominican Republic / France /
            Germany / Italy / Japan / South Korea / Mexico / North Macedonia /
            Poland / Switzerland Name of Mfg / Brand: Estée Lauder Companies
            Address of Mfg / Brand: the Estée Lauder Companies INC,767,fifth
            Avenue,New York,10153,United States of America<br></br>
            <br></br>
            Name and address of the importer - ELCA Cosmetics Pvt. Ltd, 202-206
            Tolstoy House,15 Tolstoy Marg, New Delhi 110001, India
          </p>
        ),
      },
    ]}
  />
);

const menu2 = (
  <Menu
    items={[
      {
        label: <p style={{ width: "500px" }}>Normal to oily skin types.</p>,
      },
    ]}
  />
);

const menu3 = (
  <Menu
    items={[
      {
        label: (
          <p style={{ width: "500px" }}>
            This oil-free formula combines the moisturizing power of Shea Butter
            with Vitamins B, C and E. Grapefruit and Geranium fragrances leave a
            light, uplifting
          </p>
        ),
      },
    ]}
  />
);

const menu4 = (
  <Menu
    items={[
      {
        label: (
          <p style={{ width: "500px" }}>
            Apply to just-cleansed skin, avoiding eye area.
          </p>
        ),
      },
    ]}
  />
);

const menu5 = (
  <Menu
    items={[
      {
        label: (
          <p style={{ width: "500px" }}>
            Apply to just-cleansed skin, avoiding eye area.<br></br>
            <br></br>
            Ingredients: Water\Aqua\Eau , Cyclopentasiloxane , Bis-Diglyceryl
            Polyacyladipate-2 , Butylene Glycol , Ppg-2 Myristyl Ether
            Propionate , Cetyl Alcohol , Peg-40 Stearate , Butyrospermum Parkii
            (Shea Butter) , Squalane , Glyceryl Stearate , Sorbitan Stearate ,
            Epilobium Angustifolium Extract , Yeast Extract\Faex\Extrait De
            Levure , Beta-Carotene , Sodium Hyaluronate , Citrus Grandis
            (Grapefruit) Peel Oil , Tocopheryl Acetate , Methyl Glucose
            Sesquistearate , Pelargonium Graveolens (Geranium) Flower Oil ,
            Dimethicone Crosspolymer , Acrylates/C10-30 Alkyl Acrylate
            Crosspolymer , Carbomer , Peg-20 Methyl Glucose Sesquistearate ,
            C12-15 Alkyl Ethylhexanoate , Tetrasodium Edta , Sodium Hydroxide ,
            Panthenol , Magnesium Ascorbyl Phosphate , Limonene , Citronellol ,
            Geraniol , Linalool , Chlorphenesin , Phenoxyethanol
            <br></br>
            <br></br>
            Please be aware that ingredient lists may change or vary from time
            to time. Please refer to the ingredient list on the product package
            you receive for the most up to date list of ingredients.
          </p>
        ),
      },
    ]}
  />
);

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export const ProductDetails = () => {
  const { _id } = useParams();
  const [proData, setProData] = useState({});
  const navigate = useNavigate();
  let isUserLoggedIn = useSelector((store) => store.loginData.payload);
  useLayoutEffect(() => {
    getProduct();
    return () => {};
  }, [_id]);
  const getProduct = () => {
    axios
      .get(`https://bobbi-brown-api.herokuapp.com/product/product/${_id}`)
      .then((res) => {
        setProData(res.data.Product);
        setImgsrc(res.data.Product.Image);
      });
  };

  const [imgsrc, setImgsrc] = useState(
    proData.Image //USE PRODUCTS IMAGE HERE
  );
  const handleImg = (e) => {
    setImgsrc(e.target.src);
  };

  const [eye_face, setEyeFace] = useState("left");

  const handlecontent = (e) => {
    if (e.target.id === "left_btn") {
      e.target.style.borderBottom = "0.5px solid black";
      document.querySelector("#right_btn").style.border = "none";
      setEyeFace("right");
    } else {
      e.target.style.borderBottom = "0.5px solid black";
      document.querySelector("#left_btn").style.border = "none";
      setEyeFace("left");
    }
  };

  const dispatch = useDispatch();
  const addtocart = async (product_id) => {
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://bobbi-brown-api.herokuapp.com/cart/add/${product_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        dispatch(userLogin(cart.user));
        localStorage.setItem("Userdata", JSON.stringify(cart.user));
      });
  };
  return (
    <div id="products__details__main">
      <div id="mainProducts_div">
        <div className="left_div">
          <p style={{ textAlign: "left" }}>{proData.tag}</p>{" "}
          {/* Products tag or title */}
          <div className="imgsection">
            <div>
              <button value onClick={handleImg}>
                <img src={proData.Image}></img>
              </button>
              <button onClick={handleImg}>
                <img src="https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_prod_7485_1080x1080_0.jpg"></img>
              </button>
              <button onClick={handleImg}>
                <img src="https://www.bobbibrown.in/media/export/cms/products/v2_1080x1080/bb_prod_7485_1080x1080_1.jpg"></img>
              </button>
            </div>
            <div>
              <img src={imgsrc}></img>
            </div>
          </div>
        </div>
        <div className="details_section">
          <div className="left_details1">
            <p style={{ color: "red" }}>Our #1 {proData.page} Product</p>
            <h4>{proData.name}</h4> {/*PRODUCT TITLE HERE*/}
            <p>{proData.tag}</p>
            <p>{proData.page}</p>
            <p>
              Mfg Date (Use Before 36 months from manufacturing date) 02/2021
            </p>
            <BButton
              onClick={() => {
                isUserLoggedIn === false
                  ? navigate("/login")
                  : addtocart(proData._id) &&
                    alert(`${proData.name} is added to the cart`);
              }}
            >
              ADD TO BAG
            </BButton>
            <br></br>
            <b>MINI BEAUTY. MORE LOVE.</b>
            <br></br>
            <br></br>
            <b>
              Buy 2 minis and pick 1 free, Or, get a Keychain and 2 samples on a
              Mini*.
            </b>
            <br></br>
            <br></br>
            <Dropdown overlay={menu1}>
              <a
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  WHAT IS IT
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <br></br>
            <br></br>
            <Dropdown overlay={menu2}>
              <a
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  WHAT IT'S FOR
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <br></br>
            <br></br>
            <Dropdown overlay={menu3}>
              <a
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  WHY IT'S DIFFERENT
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <br></br>
            <br></br>
            <Dropdown overlay={menu4}>
              <a
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  HOW TO USE
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <br></br>
            <br></br>
            <Dropdown overlay={menu5}>
              <a
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
                onClick={(e) => e.preventDefault()}
              >
                <Space>
                  INGREDIENTS
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <div className="icons_sec">
              <Space>
                <IconFont className="icons_in_icons_sec" type="icon-facebook" />
                <IconFont className="icons_in_icons_sec" type="icon-twitter" />
                <InstagramFilled className="icons_in_icons_sec" />
              </Space>
            </div>
          </div>
          <div className="right_details1">
            <h4>${proData.price}</h4>
            {/* PRODUCT PROCE HERE*/}
            <p>MRP inclusive of ll taxes |</p>
            <p>50 ml</p>
            <div style={{ display: "flex", alignContent: "center" }}>
              <p>(2708 Reviews) .</p>
              <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="headings">TESTED AND PROVEN</h4>
        <div className="flexdiv">
          <div>
            <p>Vitamin Enriched Face Base</p>
            <ul>
              <li>97% said it left skin feeling refreshed*</li>
              <li>96% said it left skin feeling nourished and conditioned*</li>
              <li>96% said it left skin looking healthy*</li>
              <li>
                95% said it left skin feeling healthy and infused with moisture
                *
              </li>
              <li>
                95% said it layers well with makeup, helping makeup apply
                smoother and evenly*
              </li>
              <li>91% said it improved the look of foundation*</li>
            </ul>
            <p>
              *Consumer testing on 123 women after using product for one week.
            </p>
          </div>
          <img src="https://www.bobbibrown.in/media/export/cms/38731/Hp_module_PC.jpg"></img>
        </div>
        <div>
          <h4 className="headings">LIKE A MULTIVITAMIN FOR SKIN</h4>
          <div className="theflex" style={{ width: "35%" }}>
            <button id="left_btn" onClick={handlecontent}>
              NEW ENRICHED VITAMIN EYE BASE
            </button>
            <button id="right_btn" onClick={handlecontent}>
              VITAMIN ENRICHED FACE BASE
            </button>
            <hr />
          </div>
          <div className="eye_face">
            {eye_face === "left"
              ? "Our #1 moisturizer-and-primer in one replenishes skin with a signature Nourishing Vitamin Blend."
              : "Awakens, softens, and nourishes undereyes with a daily dose of multivitamin moisture"}
          </div>
          <div className="eye_face_images">
            <div>
              {" "}
              <img src="https://www.bobbibrown.in/media/export/cms/collections/VEEB/FY21_VEEB_Comparison_VEEB2_PC.jpg"></img>
            </div>
          </div>
        </div>
        <div>
          <h4 className="headings">DISCOVER HE SKIN LOVING INGREDIENTS</h4>
          <div className="theflex" id="skin_loving_ing">
            <img src="https://www.bobbibrown.in/media/export/cms/38731/module_1.jpg"></img>
            <img src="https://www.bobbibrown.in/media/export/cms/38731/module_2.jpg"></img>
            <img src="https://www.bobbibrown.in/media/export/cms/38731/module_3.jpg"></img>
          </div>
        </div>
        <div>
          <h4 className="headings">YOU MAY ALSO LIKE</h4>
          {/* MAP PRODUCTS AND STORE IN SLIDER */}
        </div>
        <div>
          <h4 className="headings">CUSTOMER'S REVIEW</h4>
          <b>CUSTOMER'S REVIEWS</b>
          <div className="rating_section">
            <div>
              <StarFilled style={{ fontSize: "20px" }} />
              <StarFilled style={{ fontSize: "20px" }} />
              <StarFilled style={{ fontSize: "20px" }} />
              <StarFilled style={{ fontSize: "20px" }} />
              <StarFilled style={{ fontSize: "20px" }} />
              <p>Rated 4.8 out of 5 stars</p>
              <p>98%of respondents would recommend this to a friend</p>
            </div>
            <div>
              <table>
                <tr>
                  <td style={{ width: "15%" }}>5 stars</td>
                  <td style={{ width: "70%", backgroundColor: "black" }}></td>
                  <td style={{ width: "15%" }}>2325</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td style={{ width: "15%" }}>4 stars</td>
                  <td style={{ width: "10%", backgroundColor: "black" }}></td>
                  <td style={{ width: "60%" }}></td>
                  <td style={{ width: "15%" }}>275</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td style={{ width: "15%" }}>3 stars</td>
                  <td style={{ width: "5%", backgroundColor: "black" }}></td>
                  <td style={{ width: "65%" }}></td>
                  <td style={{ width: "15%" }}>54</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td style={{ width: "15%" }}>2 stars</td>
                  <td style={{ width: "1.5%", backgroundColor: "black" }}></td>
                  <td style={{ width: "68.5%" }}></td>
                  <td style={{ width: "15%" }}>24</td>
                </tr>
              </table>
              <table>
                <tr>
                  <td style={{ width: "15%" }}>4stars</td>
                  <td style={{ width: "2%", backgroundColor: "black" }}></td>
                  <td style={{ width: "68%" }}></td>
                  <td style={{ width: "15%" }}>32</td>
                </tr>
              </table>
            </div>
            <div>
              <h4>
                <b>Pros</b>
              </h4>
              <p>No Pros</p>
              <BButton>Write A Review</BButton>
            </div>
          </div>
          <hr style={{ width: "70%" }}></hr>
        </div>
        <div className="all_reviews">
          {Review.map((e) => (
            <div className="review_content">
              <div>
                {e.stars === 5 ? (
                  <>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </>
                ) : e.stars === 4 ? (
                  <>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </>
                ) : e.stars === 3 ? (
                  <>
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                  </>
                ) : (
                  <>
                    <StarFilled />
                    <StarFilled />
                  </>
                )}
                <h4>
                  <b>{e.title}</b>
                </h4>
                <br></br>
                <p>{e.body}</p>
                {e.response ? (
                  <p>
                    <u>REPLY FROM BOBBY BROWN: </u>
                    {e.response}
                  </p>
                ) : (
                  ""
                )}
                <p>{e.recommend}</p>
              </div>
              <div>
                <p>Submitted on {e.submitted}</p>
                <p>{e.name}</p>
                <p>From {e.loc}</p>
              </div>
            </div>
          ))}
          <BButton>LOAD MORE</BButton>
        </div>
      </div>
    </div>
  );
};
