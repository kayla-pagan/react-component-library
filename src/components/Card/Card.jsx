import React from "react"
import { FaCirclePlus } from "react-icons/fa6"

export default function Card({icon, title, children}){
    return (
        <div className="card">
            {icon ? 
                (<div>
                    {icon}
                </div>) :
                (<div>
                    <FaCirclePlus />
                </div>)
            }
            <div>
                <h4>{title ? title : "Customize your card"}</h4>
                <p>{children}</p>
            </div>
        </div>
    )
}