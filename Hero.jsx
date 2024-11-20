import '../assets/bootstrap/dist/css/bootstrap.min.css';
const HeroSection = () => {
    return (
      <main className="row">
        <div className='col-12 col-md-6 col-lg-6'>
        <div className="hero container">
          <div className='hero-content'>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>

          </div>
        </div>
        </div>
        <div className='col-12 col-md-6 col-lg-6'>
        <div className="hero-image">
          <img src="/images/hero-image.png" alt="hero-image" className="hero-image" />
        </div>
        </div>
      </main>
    );
  };
  
  export default HeroSection;