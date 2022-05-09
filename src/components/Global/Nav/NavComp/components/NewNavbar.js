import React from "react";
import "./NewNavbar.css";

export default function NewNavbar() {
  return (
    <div className="NewNavbar_box">
      <div className="DivForMargin">
        <div className="InsideBoxOfNewNavbar">
          <img
            className="InsideBoxOfNewNavbarImg"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/20210811_BB_FY21_LuxeDefiningLipstick_Engage_Product_ShadeRange_NA_GNAV_600x300.jpg"
            alt="AllNew"
          />
          <h6 className="my-4">SHOP ALL NEW</h6>
        </div>
        <div className="InsideBoxOfNewNavbar">
          <img
            className="InsideBoxOfNewNavbarImg"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB_Gnav_PC_Mitigation_BeautyEvent_Glow.jpg"
            alt="AllNew"
          />
          <h6 className="my-4">OFFERS & SERVICES</h6>
        </div>
        <div className="InsideBoxOfNewNavbar">
          <img
            className="InsideBoxOfNewNavbarImg"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB-FY22-MothersDay_Gnav_Giftguide_@2x.jpg"
            alt="AllNew"
          />
          <h6 className="my-4">MOTHER'S DAY GIFT GUIDE</h6>
        </div>
        <div className="InsideBoxOfNewNavbar">
          <img
            className="InsideBoxOfNewNavbarImg"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/20220215_BB_FY22_LWCSS_ShadeExt_GNAV_Global_Tile.jpg"
            alt="AllNew"
          />
          <h6 className="my-4">SHOP LONG_WEAR CREAM SHADOW STICK</h6>
        </div>
      </div>
    </div>
  );
}
