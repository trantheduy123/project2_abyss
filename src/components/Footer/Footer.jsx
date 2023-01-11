import React from 'react'
import css from './Footer.module.css'
import Logo from "../../assets/logo.png";
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,

} from "@heroicons/react/outline";




const Footer = () => {
  return (
   <div className={css.cFooterWrapper}>
    <hr />
    <div className={css.cFooter}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>Amazone</span>
        </div>
        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <InboxIcon className={css.icon}/>
                    <span>31 Hoang Van Hoe TP HCM, VietNam</span>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <PhoneIcon className={css.icon}/>
                    <span>31 Hoang Van Hoe TP HCM, VietNam</span>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <UsersIcon className={css.icon}/>
                    <span>31 Hoang Van Hoe TP HCM, VietNam</span>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>31 Hoang Van Hoe TP HCM, VietNam</span>
                </span>
            </div>
        </div>

        <div className={css.block}>
            <div className={css.detail}>
                <span>Contact Us</span>
                <span className={css.pngLine}>
                    <LoginIcon className={css.icon}/>
                    <span>31 Hoang Van Hoe TP HCM, VietNam</span>
                </span>
            </div>
        </div>

    </div>
        <div className={css.copyRight}>
                <span>Copy</span>
                <span>All Right</span>
                
            </div>
   </div>
   
   
   
  )
}

export default Footer