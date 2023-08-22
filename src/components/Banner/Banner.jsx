import React from "react"
import classNames from "classnames"
import { FaCircleCheck, FaCircleInfo, FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6"

export default function Banner({variant, children, className, title, ...rest}){
    let message
    let variantClass = variant && `banner-${variant}`
    const allClasses = classNames(className, variantClass)
    
    if(variant == "success"){
        message =  <h4> <FaCircleCheck /> {title}</h4>
    }
    else if(variant == "warning"){
        message =  <h4> <FaTriangleExclamation /> {title}</h4>
    }
    else if(variant == "error"){
        message =  <h4> <FaCircleXmark /> {title}</h4>
    }
    else {
        message =  <h4> <FaCircleInfo /> {title}</h4>
    }


    return (
        <div className={`banner ${allClasses}`} {...rest}>
            {message}
            {children}
        </div>
    )
}