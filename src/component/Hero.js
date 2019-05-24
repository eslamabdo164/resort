import React from 'react'

export default function Hero({children , hero}) {
    return <header className={hero}> {children} </header>
}

//=== Default Props 

Hero.defaultProps = {
    hero : 'defaultHero'
}
