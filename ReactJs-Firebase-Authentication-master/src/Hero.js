import React from 'react'

function Hero({handleLogout}) {
    return (
        <div className="next-page">
            <section>
                <nav>
                    <h2>Welcom</h2>
                    <button className="logout-btn" onClick = {handleLogout} >Logout</button>
                </nav>
            </section>
        </div>
    )
}

export default Hero
