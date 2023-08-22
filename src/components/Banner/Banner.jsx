import React from "react"
import classNames from "classnames"
import { FaCircleCheck, FaCircleInfo, FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6"

export default function Banner({status, children, className, title, ...rest}){
    let message
    let statusClass = status && `banner-${status}`
    const allClasses = classNames(className, statusClass)
    
    if(status == "success"){
        message =  <h4> <FaCircleCheck /> {title}</h4>
    }
    else if(status == "warning"){
        message =  <h4> <FaTriangleExclamation /> {title}</h4>
    }
    else if(status == "error"){
        message =  <h4> <FaCircleXmark /> {title}</h4>
    }
    else {
        message =  <h4> <FaCircleInfo /> {title}</h4>
    }


    return (
        <div className={`banner ${allClasses}`} {...rest}>
            {message}
            {children && <p>{children}</p>}
        </div>
    )
}