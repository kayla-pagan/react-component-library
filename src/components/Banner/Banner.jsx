import React from "react"
import classNames from "classnames"
import { FaCircleCheck, FaCircleInfo, FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6"

export default function Banner({variant, children, className, ...rest}){
    let title
    let variantClass = variant && `banner-${variant}`
    const allClasses = classNames(className, variantClass)
    
    if(variant == "success"){
        title =  <h4> <FaCircleCheck /> Congratulations!</h4>
    }
    else if(variant == "warning"){
        title =  <h4> <FaTriangleExclamation /> Attention</h4>
    }
    else if(variant == "error"){
        title =  <h4> <FaCircleXmark /> There is a problem with your application</h4>
    }
    else {
        title =  <h4> <FaCircleInfo /> Update available</h4>
    }


    return (
        <div className={`banner ${allClasses}`} {...rest}>
            {title}
            {children}
        </div>
    )
}