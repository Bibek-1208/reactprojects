import "./Hero.css";

function Hero({b,c,i}) {
    return(

        <section className="hero">
            <div>
                <h1>{b}</h1>

                <h2>{c}</h2>

                <p>{i}</p>

                <button className="button">click me</button>

            </div>
        </section>

    )
}
export default Hero;