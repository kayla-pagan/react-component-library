import React from "react"
import classNames from "classnames"

export default function Testimonial({children, src, ...rest}){
    let backgroundClass = src ? "#2545B8" : "#F9FAFB"
    
    return (
        <div className="testimonial">
            {children}
        </div>
    )
}