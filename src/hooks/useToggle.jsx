import React from "react"

export default function useToggle(){
    const [on, setOn] = React.useState(false)

    function toggle(){
        setOn(prevState => !prevState)
    }

    return [on, toggle]
}