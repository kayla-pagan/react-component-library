import React from "react"
// import classNames from "classnames"
import companyLogo from '../../assets/testimonial-logo.png'
import testimonialPattern from '../../assets/testimonial-pattern.svg'

export default function Testimonial({children, src, ...rest}){
    let testimonialBgClass = src && "transparent"
    
    return (
        <div className={`testimonial ${testimonialBgClass}`}>
            <div className="testimonial--container">
                <div className="testimonial--content">
                    {src ? null : <img className="company-logo" src={companyLogo} />}
                    <p className="testimonial--text">{children}</p>
                </div>
            </div>
        </div>
    )
}