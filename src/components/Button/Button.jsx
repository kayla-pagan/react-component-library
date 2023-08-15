import React from "react"
import classNames from "classnames"

export default function Button({children, className, shape, variant, ...rest}){
    let shapeClass = shape && `button-${shape}`
    let variantClass = variant && `button-${variant}`
    const allClasses = classNames(shapeClass, variantClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}