import React from "react"
import companyLogo from '../../assets/testimonial-logo.png'
import quoteIcon from '../../assets/quote-icon.svg'

export default function Testimonial({children, src, name, company, position, alt}){
    let srcStyle = {
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 35%"
    }
    // if there is a src in props then make a flex row, if not then flex colomn.
    
    return (
        <>
            {src ? (
                    <div className="testimonial--with-pic">
                        <div className="testimonial--headshot" aria-label={alt} style={srcStyle}></div>
                        <div className="testimonial--info">
                            <img src={quoteIcon} alt="Quotation mark" />
                            <p className="testimonial--text">{children}</p>
                            <div>
                                <p><strong>{name}</strong></p>
                                <p>{company}, {position}</p>
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div className="testimonial--no-pic">
                        <img src={companyLogo} />
                        <p>{children}</p>
                        <div>
                            <p><strong>{name}</strong></p>
                            <span>/</span>
                            <p>{company}, {position}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}