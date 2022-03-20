import React, { FC } from 'react';


const Menu:FC=({children})=>{
    return(
        <div className = "App">
            {children}
        </div>
    )
}

export default Menu;