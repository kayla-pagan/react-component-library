import React from "react"
import classNames from "classnames"
import { FaCircleCheck, FaCircleInfo, FaCircleXmark, FaTriangleExclamation } from "react-icons/fa6"

export default function Banner({variant, children, className, ...rest}){
    const variantClass = variant && {variant}
    const allClasses = {className, variantClass}

    return (
        <div className={`banner ${allClasses}`}>
            
            {children}
        </div>
    )
}