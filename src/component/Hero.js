import React from 'react'

export default function Hero({childern , hero}) {
    return (
        <div className={hero}>
            
        </div>
    )
}

//=== Default Props 

Hero.defaultProps = {
    hero : 'defaultHero'
}
