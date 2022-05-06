import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import { IconContext } from 'react-icons';
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Signup from './Signup';
import { Link } from "react-router-dom"
import "./SignUp.css"
import Bbaccess from './Bbaccess';
import "./User.css"
import User from './User';
import NewNavbar from './NewNavbar';
import BestSeller from './BestSeller';
import Face from './Face';
import Makeup from './Makeup';
import SkincareNavbar from './SkincareNavbar';
import VirtualServicesNavbar from './VirtualServicesNavbar';
import DiscoverNavbar from './DiscoverNavbar';

var originalArr = [];
export function Navbar() {


    // /for debouncing

    const [product, setProduct] = useState([])
    const [inputValue, setInputValue] = useState("")
    if (!originalArr.length) {
        originalArr = [...product];
    }

    useEffect(() => {
        async function getData() {
            const data = await fetch(`https://bobbi-brown-api.herokuapp.com/product/makeup`).then((d) => d.json());
            setProduct(data);
        }
        getData();
    }, [])
    console.log(product)

    //getting the input value 
    const gettingSelectedItem = (selectedItem) => {


        const updatedItems = originalArr.filter((elem) => {
            return elem.name.toLowerCase().includes(selectedItem);
        })
        setProduct(updatedItems)

    }

    const unHideSignUpBox = () => {
        console.log("hover")
        document.querySelector(".hiddenBoxofSignUp").classList.remove("hidden")


    }
    const hideSignUpBox = () => {

        document.querySelector(".hiddenBoxofSignUp").classList.add("hidden")

    }
    const hideBbaccessBox = () => {
        console.log("hover")
        document.querySelector(".hiddenBoxofBbaccess").classList.add("hidden")


    }
    const unHideBbaccessBox = () => {

        document.querySelector(".hiddenBoxofBbaccess").classList.remove("hidden")

    }
    const hideUserBox = () => {
        console.log("hover")
        document.querySelector(".hiddenBoxofLogin").classList.add("hidden")


    }
    const unHideUserBox = () => {

        document.querySelector(".hiddenBoxofLogin").classList.remove("hidden")

    }
    const hideNewNavbarBoxBox = () => {
        console.log("hover")
        document.querySelector("#New").classList.remove("underLine")
        document.querySelector(".hiddenBoxofNewOfNavbar").classList.add("hidden")


    }
    const unHideNewNavBarBox = () => {
        // document.querySelector(".hiddenBoxofBestsellerOfNavbar").classList.remove("hidden")
        document.querySelector("#New").classList.add("underLine")
        document.querySelector(".hiddenBoxofNewOfNavbar").classList.remove("hidden")

    }
    const hideNewBestSellerBoxBox = () => {
        console.log("hover")
        document.querySelector("#BestSeller").classList.remove("underLine")
        document.querySelector(".hiddenBoxofBestsellerOfNavbar").classList.add("hidden")



    }
    const unHideBestSellerBarBox = () => {

        document.querySelector(".hiddenBoxofBestsellerOfNavbar").classList.remove("hidden")
        document.querySelector("#BestSeller").classList.add("underLine")


    }
    const hideNewFaceBoxBox = () => {
        console.log("hover")
        document.querySelector("#Face").classList.remove("underLine")
        document.querySelector(".hiddenBoxofFaceOfNavbar").classList.add("hidden")



    }
    const unHideFaceBarBox = () => {

        document.querySelector(".hiddenBoxofFaceOfNavbar").classList.remove("hidden")
        document.querySelector("#Face").classList.add("underLine")


    }
    const hideNewMakeupBoxBox = () => {
        console.log("hover")
        document.querySelector("#Makeup").classList.remove("underLine")
        document.querySelector(".hiddenBoxofMakeupOfNavbar").classList.add("hidden")



    }
    const unHideMakeupBarBox = () => {

        document.querySelector(".hiddenBoxofMakeupOfNavbar").classList.remove("hidden")
        document.querySelector("#Makeup").classList.add("underLine")


    }
    const hideNewSkincareBoxBox = () => {
        console.log("hover")
        document.querySelector("#Skincare").classList.remove("underLine")
        document.querySelector(".hiddenBoxofSkincareOfNavbar").classList.add("hidden")



    }
    const unHideSkincareBarBox = () => {

        document.querySelector(".hiddenBoxofSkincareOfNavbar").classList.remove("hidden")
        document.querySelector("#Skincare").classList.add("underLine")


    }
    const hideNewVirtualBoxBox = () => {
        console.log("hover")
        document.querySelector("#Virtual").classList.remove("underLine")
        document.querySelector(".hiddenBoxofVirtualOfNavbar").classList.add("hidden")



    }
    const unHideVirtualBarBox = () => {

        document.querySelector(".hiddenBoxofVirtualOfNavbar").classList.remove("hidden")
        document.querySelector("#Virtual").classList.add("underLine")


    }
    const hideNewDiscoverBoxBox = () => {
        console.log("hover")
        document.querySelector("#Discover").classList.remove("underLine")
        document.querySelector(".hiddenBoxofDiscoverOfNavbar").classList.add("hidden")



    }
    const unHideDiscoverBarBox = () => {

        document.querySelector(".hiddenBoxofDiscoverOfNavbar").classList.remove("hidden")
        document.querySelector("#Discover").classList.add("underLine")


    }
    //for the debouncing of the boxes


    const hideDebouncingBoxBox = () => {

        document.querySelector(".searchDebouncing").classList.add("hidden")




    }
    const unHideDebouncingBarBox = () => {

        document.querySelector(".searchDebouncing").classList.remove("hidden")
      


    }
  

    return (
        <div className='BobbiBrownHavingWhole_Navbar'>
            {/* //upper part of the navbar consiting of three more divs i.e sign up, BIBO BROWN logo and cart logo. */}
            <div className='BobiBrownNavbar_topPortion_HavingLogo' onClick={()=>{
                hideDebouncingBoxBox();
            }}>
                {/* 1---> signup */}
                <div className='BobiBrownNavbar_signUpLogo' onMouseOver={unHideSignUpBox} onMouseLeave={hideSignUpBox} >

                    EMAIL SIGN UP
                    {/* ================================================================== */}






                    {/* ==================================================================== */}
                </div>


                {/* 2----> BIBO BROWN LOGO */}
                <div className='BobiBrownNavbar_BobiBrownLogo'>
                    <img className='BobiBrownNavbar_BobiBrownLogo_Img' src="https://www.bobbibrowncosmetics.com/media/export/cms/logo.png" alt="Bobi Brown" />
                </div>

                {/* 3-----> location, cart, login user */}
                <div className='BobbiBrownNavbar_rightpartOfNavbarHavingCart'>
                    <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                        <div className='BobiBrownNavbar_signUpLogo' onMouseLeave={hideBbaccessBox} onMouseOver={unHideBbaccessBox}>
                            JOIN BBACCESS
                        </div>
                        <div className='LocationIcon'>
                            <MdOutlineLocationOn />
                        </div>
                        <div className='LocationIcon' onMouseOver={unHideUserBox} onMouseLeave={hideUserBox}>
                            <AiOutlineUser />
                        </div>
                        <div className='LocationIcon'>
                            <BsBag />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>

            <div className='BobbiBrownNavbar_SearchPart'>
                <div className='BobbiBrown_SearchBar'>
                    <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
                        <div><BiSearch /></div>
                    </IconContext.Provider>
                    <div><input className="BobbiBrown_inputSearch" onChange={(e) => {
                        let set = e.target.value
                        set = set.toLowerCase();
                        unHideDebouncingBarBox();
                        gettingSelectedItem(set);
                    }} type="text" placeholder="SEARCH" /></div>
                </div>
                <div className='NavbarChoices'>

                    {/* ========================================================== */}


                    {/* ============================================================= */}
                    <div className="NavbarChoiceElement" id="New" onMouseOver={unHideNewNavBarBox} onMouseLeave={hideNewNavbarBoxBox}>NEW</div>
                    <div className="NavbarChoiceElement" id="BestSeller" onMouseOver={unHideBestSellerBarBox} onMouseLeave={hideNewBestSellerBoxBox}>BESTSELLER</div>
                    <div className="NavbarChoiceElement" id="Face" onMouseOver={unHideFaceBarBox} onMouseLeave={hideNewFaceBoxBox}>FACE</div>
                    <div className="NavbarChoiceElement" id="Makeup" onMouseOver={unHideMakeupBarBox} onMouseLeave={hideNewMakeupBoxBox}>MAKEUP</div>
                    <div className="NavbarChoiceElement" id="Skincare" onMouseOver={unHideSkincareBarBox} onMouseLeave={hideNewSkincareBoxBox}>SKINCARE</div>
                    <div className="NavbarChoiceElement" id="Virtual" onMouseOver={unHideVirtualBarBox} onMouseLeave={hideNewVirtualBoxBox}>VIRTUAL SERVICES</div>
                    <div className="NavbarChoiceElement" id="Discover" onMouseOver={unHideDiscoverBarBox} onMouseLeave={hideNewDiscoverBoxBox}>DISCOVER</div>
                </div>

            </div>

            <div className='hiddenBoxofSignUp hidden' onMouseLeave={hideSignUpBox} onMouseOver={unHideSignUpBox}>
                <Signup />
            </div>
            <div className='hiddenBoxofBbaccess hidden' onMouseLeave={hideBbaccessBox} onMouseOver={unHideBbaccessBox}>
                <Bbaccess />
            </div>
            <div className='hiddenBoxofLogin hidden' onMouseLeave={hideUserBox} onMouseOver={unHideUserBox}>
                <User />
            </div>
            <div className='hiddenBoxofNewOfNavbar hidden underline' onMouseLeave={hideNewNavbarBoxBox} onMouseOver={unHideNewNavBarBox}>
                <NewNavbar />
            </div>
            <div className='hiddenBoxofBestsellerOfNavbar hidden underline' onMouseLeave={hideNewBestSellerBoxBox} onMouseOver={unHideBestSellerBarBox}>
                <BestSeller />
            </div>
            <div className='hiddenBoxofFaceOfNavbar hidden underline' onMouseLeave={hideNewFaceBoxBox} onMouseOver={unHideFaceBarBox}>
                <Face />
            </div>
            <div className='hiddenBoxofMakeupOfNavbar hidden underline' onMouseLeave={hideNewMakeupBoxBox} onMouseOver={unHideMakeupBarBox}>
                <Makeup />
            </div>
            <div className='hiddenBoxofSkincareOfNavbar hidden underline' onMouseLeave={hideNewSkincareBoxBox} onMouseOver={unHideSkincareBarBox}>
                <SkincareNavbar />
            </div>
            <div className='hiddenBoxofVirtualOfNavbar hidden underline' onMouseLeave={hideNewVirtualBoxBox} onMouseOver={unHideVirtualBarBox}>
                <VirtualServicesNavbar />
            </div>
            <div className='hiddenBoxofDiscoverOfNavbar hidden underline' onMouseLeave={hideNewDiscoverBoxBox} onMouseOver={unHideDiscoverBarBox}>
                <DiscoverNavbar />
            </div>

            {/* <<<<-----------------------------------------------------------------------------------------------
                    adding debouncing------------------------------------------------>>>
                     */}
            <div className='searchDebouncing hidden' >

                {
                    product.map(e => (
                        <div className='debouncingDiv'>
                            {/* //for appending img */}
                            <div>
                                <img className="debouncingimg"src={e.Image} alt="" />
                            </div>
                            {/* for apprnding text */}
                            <div>
                              <h5>{e.name}</h5><br />
                              <p className='debouncingPTag'>{e.tag}</p><br/>
                              <p className='debouncingPTag'>{`${e.price} $`}</p>
                              <p className='debouncingPTagpage'>{e.page}</p>
                            </div>
                            <hr />
                        </div>
                    ))

                }
            </div>

        </div>
    )
}
