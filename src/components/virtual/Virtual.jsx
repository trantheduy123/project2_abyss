import React from 'react'
import css from './Virtual.module.css'
import Shade from "../../assets/shade.png"
import ReactCompareImage from 'react-compare-image'
import before from "../../assets/before.png"
import after from "../../assets/after.png"

const Virtual = () => {
    return (
        <div className={css.virtual}>
            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never Buy the wrong Shade Again!</span>
                <span>Try Now!</span>
                <img src={Shade} alt="" />
            </div>

            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={before} rightImage={after} skeleton={<div>loading...</div>}/>
                </div>
            </div>

        </div>
    )
}

export default Virtual