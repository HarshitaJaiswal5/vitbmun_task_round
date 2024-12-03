import Navbar from "./components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutubeSquare, faSquareInstagram, faFacebook, faTwitter, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Mock testimonial data
  const testimonial_info = [
    { text: "Vit Bhopal Model United Nations is my favorite platform for honing my diplomatic skills. The crisis simulations are incredibly engaging, and I always leave feeling more confident in my abilities. The workshops have deepened my understanding of global issues, and networking with like-minded individuals has been invaluable. It's more than just a conference; it's a transformative experience!" },
    { text: "Vit Bhopal Model United Nations is my favorite platform for honing my diplomatic skills. The crisis simulations are incredibly engaging, and I always leave feeling more confident in my abilities. The workshops have deepened my understanding of global issues, and networking with like-minded individuals has been invaluable. It's more than just a conference; it's a transformative experience!" },
    { text: "Vit Bhopal Model United Nations is my favorite platform for honing my diplomatic skills. The crisis simulations are incredibly engaging, and I always leave feeling more confident in my abilities. The workshops have deepened my understanding of global issues, and networking with like-minded individuals has been invaluable. It's more than just a conference; it's a transformative experience!" },
    { text: "Vit Bhopal Model United Nations is my favorite platform for honing my diplomatic skills. The crisis simulations are incredibly engaging, and I always leave feeling more confident in my abilities. The workshops have deepened my understanding of global issues, and networking with like-minded individuals has been invaluable. It's more than just a conference; it's a transformative experience!" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonial_info.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <Navbar />
      <section>
        <div className="bg-[url('/bg_mun.png')] bg-cover bg-center h-screen relative">
          <img
            src="/flag-3158666_1280.jpg"
            alt=""
            className="h-4/6 w-1/3 rounded-t-full absolute top-[21%] left-28"
          />
          <div className="w-2/5 absolute left-1/2 top-[16%] p-10 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl">Vit Bhopal Model United Nations</h1>
              <p className="">
                Welcome to Vit Bhopal Model United Nations, where diplomacy meets education. Our unique platform empowers young leaders, fostering skills that redefine international relations.
              </p>
            </div>
            <div className="socials text-3xl flex gap-10 p-5 pl-10">
              <FontAwesomeIcon icon={faYoutubeSquare} />
              <FontAwesomeIcon icon={faSquareInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
     
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Testimonials Section with Auto-Sliding */}
      <h1 className="text-4xl font-semibold text-center pt-20">Testimonials</h1>
      <div className="relative " >
        <div className="overflow-hidden bg-[url('/quotes.png')]  b-contain bg-cover h-96  flex justify-center items-center">
          <div
            className="flex transition-transform duration-500 ease-in-out   "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonial_info.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
                <Testimonials text={card.text} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots for active slide indication */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonial_info.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#16c5d7]" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
      <h1 className="text-6xl font-semibold text-center pt-28">Get in Touch</h1>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
