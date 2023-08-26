import React from "react"
// import classNames from "classnames"
import companyLogo from '../../assets/testimonial-logo.png'
import quoteIcon from '../../assets/quote-icon.svg'

export default function Testimonial({children, src, ...rest}){
    let testimonialBgClass = src ? "testimonial--with-pic" : "testimonial--no-pic"
    let plateBgClass = src && "blue-bg"
    // if there is a src in props then make a flex row, if not then flex colomn.
    
    return (
        <div className={`testimonial ${testimonialBgClass}`}>
            <div className="testimonial--plate">
                <div className="testimonial--container">
                    <div className="testimonial--content">
                        {src ? <img className="quote-icon" src={quoteIcon} /> 
                        : <img className="company-logo" src={companyLogo} />}
                        <p className="testimonial--text">{children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}