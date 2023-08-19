import React from "react"
import { MenuContext } from "./Menu"
import classNames from "classnames"

export default function MenuDropdown({children, type, className}){
    const { open } = React.useContext(MenuContext)
    let typeClass = type && `{type}-grid`
    const allClasses = classNames(className, typeClass)

    return (
        <>
            {open ? (
                <div className={`menu-dropdown ${allClasses}`}>
                    {children}
                </div>
            ) : null
            }
        </>
    )
}