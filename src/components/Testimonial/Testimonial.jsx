import React from "react"
// import classNames from "classnames"
import companyLogo from '../../assets/testimonial-logo.png'

export default function Testimonial({children, src, ...rest}){
    let testimonialBgClass = src && "transparent"
    // if there is a src in props then make a flex row, if not then flex colomn.
    
    return (
        <div className={`testimonial ${testimonialBgClass}`}>
            {/* {if there is a src prop put image here??} */}
            <div className="testimonial--plate">
                <div className="testimonial--container">
                    <div className="testimonial--content">
                        {src ? null : <img className="company-logo" src={companyLogo} />}
                        <p className="testimonial--text">{children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}