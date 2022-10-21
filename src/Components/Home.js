import React from 'react'
// import { FaFacebookF } from "react-icons/fa";


const home = () => {
  return (

    <div className="App">

            <div className="nav">

                <div className="logo">
                    <h2>KuKu</h2>
                </div>

                <ul className ="listitems">
                    <li className='listitem'>Home</li>
                    <li className='listitem'>How It Works</li>
                   
                    <li className='listitem'>Contact Us</li>
                    <span></span>
                    <li className='listitem mktplace'> Market Place</li>
                    {/* <button>Market Place</button> */}
                </ul>

            </div> 

    {/* HERO section */}
    <div className="about">

            <div className="div-left">
                  
                        <h2>FIND ALL YOUR PARTY NEEDS HERE</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, reiciendis?</p>

                        <button>Get Started</button>          
                
            </div>


            

    </div>

    {/* Why choose us section */}
    <section>
        <h1 class="head">Why choose us?</h1>
        <p class="par">We deliver quality products straight from the farm to your doorstep at an affordable price</p>

        <div class="sec1">

            <div class="imagecont">

                <div className='images1'></div>
                {/* <img src="../images/kuku3.png" class="images pic1" alt=""/> */}

                <h2 class="text1">Convenience</h2>
                <ol class="ol">
                    <li>We source the farm products for you</li>
                    <li>Doorstep delivery across Kenya</li>
                    <li>Skip a delivery or cancel anytime</li>

                </ol>
            </div>

            <div class="imagecont">

                    <div className='images2'></div>
                {/* <img src="../images/kuku4.png" class="images pic2" alt=""/> */}
                <h2 class="text2">Variety</h2>
                <ol class="ol">
                    <li>Choose from: Chicken,Goats,Sheep,Bulls</li>
                    
                    <li>Low-calorie & family-friendly options</li>

                </ol>
            </div>

            <div class="imagecont">

                <div className='images3'></div>
                {/* <img src="./images/salmon_katsu.jpg" class="images pic3" alt=""/> */}
                <h2 class="text3">Deliciousness</h2>
                <ol class="ol">
                    
                    <li>Fresh ingredients from local, trusted suppliers</li>
                    <li>100% satisfaction guarantee, or we will make it right</li>
                    

                </ol>
            </div>

        </div>
    </section>

    {/* HOW IT WORKS SECTION */}
    <section class="family">
        
        <div class="cooking">

        </div>

        <div class="work">
            <h2 class="how">How it works</h2>
            <p class="simplify">Simplify event organising in just 4 easy steps. Get quality farm products delivered to your door.</p>
           
            <ol class="ol2">
                <li class="li1">Select your preferred product and quantity</li>
                <li class="li2">Make your order</li>
                <li class="li3">Receive your delivery</li>
                <li class="li4">Cook, eat and enjoy</li>

                <button class="learn">Get Started</button>
            </ol>
        </div>

    </section>


    {/* FOOTER SECTION */}
    <section class="finally">

        <div className="logo">
                    <h2>KuKu</h2>
                </div>
        <div class="fall">

            <div>
                <h3>About Us</h3>
                <ol class="l1">
                <li>How it Works</li>
            </ol>
            </div>
            <div>
                <h3>More Info</h3>
                <ol class="l1">
                <li class="">Our Story</li>
                <li>FAQ's</li>
            </ol>
            </div>

           

            <div>
                <h3>Contact Us</h3>
                <ol class="l1">
                   <li>kuku@kenya.me</li>
                   <li>+254 712 345 678</li>
            </ol>
            </div>

        </div>

        <div>
                <p class="fu">Follow Us</p>
               
                <h7>Facebook </h7>
                <h7>Instagram </h7>
                <h7>Twitter </h7>
               
                <i class="fab fa-instagram"></i>
            </div>


        <div>
            <p class="uae">Made for Kenya <br/>	&#169; 2022 KuKu. All Rights Reserved. Terms of service & Privacy Policy</p>
        </div>
        


    </section>

    

      
    

  </div>

  )
}

export default home