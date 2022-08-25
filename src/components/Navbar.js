import React, { useState } from "react"




export default function Navbar() {
    const [currentlink, setCurrentLink] = useState(null)

    function handleClick() {
        setCurrentLink("active")
    }
    return (
        <nav>
            <ul>
                {(currentlink === "active") && <li style={{ color: 'blue' }} >Link1</li>}
                {/* <li>link2</li> */}
            </ul>
            <button onClick={handleClick}>
                set link 1 active
            </button>
        </nav>
    )
}