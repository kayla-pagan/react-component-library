import React from "react"
import classNames from "classnames"
import companyLogo from '/assets/testimonial-logo.png'

export default function Testimonial({children, src, ...rest}){
    let backgroundClass = src ? "#2545B8" : "#F9FAFB"
    
    return (
        <div className="testimonial">
            <div className="testimonial--container">
                <div className="testimonial--content">
                    {src ? null : <img className="company-logo" src={companyLogo} />}
                    {children}
                </div>
            </div>
        </div>
    )
}