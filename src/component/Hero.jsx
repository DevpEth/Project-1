const Hero = () => {
    return(
        <div>
            <main className="hero">

                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>
                        YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH 
                        OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP 
                        YOU WITH OUR SHOES
                    </p>

                    <div className="hero-btn">
                        <button className="Shop">Shop Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>
                    
                    <div className="shopping">
                        <p>Also Avalible On </p>
                    </div>

                    <div className="band-icons">
                        <img src="/images/flipkart.png" alt="" />
                        <img src="/images/amazon.png" alt="" />
                    </div>
                    
                </div>

                <div className="hero-image">
                    <img src="/images/shoe_image.png" alt="" />
                </div>

            </main>
        </div>
    )
}

export default Hero;