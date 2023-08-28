import React from "react"
// import classNames from "classnames"
import companyLogo from '../../assets/testimonial-logo.png'
import quoteIcon from '../../assets/quote-icon.svg'

export default function Testimonial({children, src, name, company, position, ...rest}){
    // if there is a src in props then make a flex row, if not then flex colomn.
    
    return (
        <>
        {src ? (
                <div className="testimonial--with-pic">

                </div>
            ) :
            (
                <div className="testimonial--no-pic">

                </div>
            )
        }
        </>
    )
}