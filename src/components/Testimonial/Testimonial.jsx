import React from "react"
// import classNames from "classnames"
import companyLogo from '../../assets/testimonial-logo.png'
import quoteIcon from '../../assets/quote-icon.svg'

export default function Testimonial({children, src, name, company, position, ...rest}){
    let testimonialBgClass = src ? "testimonial--with-pic" : "testimonial--no-pic"
    let plateBgClass = src && "blue-bg"
    let contentClass = src ? "content-with-pic" : "content-no-pic"
    // if there is a src in props then make a flex row, if not then flex colomn.
    
    return (
        <div className={`testimonial ${testimonialBgClass}`}>
            {src && <div className={`testimonial--plate ${plateBgClass}`}></div>}
                <div className="testimonial--container">
                    {src && <img src={src} />}
                    <div className={`testimonial--content ${contentClass}`}>
                        {src ? <img className="quote-icon" src={quoteIcon} /> 
                        : <img className="company-logo" src={companyLogo} />}
                        <p className="testimonial--text">{children}</p>
                        <div className="testimonial--info">
                            <p className="name">{name}</p>
                            {!src && <span> / </span>}
                            <p>{company}, {position}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}