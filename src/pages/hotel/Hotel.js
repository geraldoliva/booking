import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./Hotel.css";

const Hotel = () => {
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/297581121.webp?k=b98fce422f9ca8f00f696576e1fd564b6084144cff38a75e4f6208f03eb59d69&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/297581121.webp?k=b98fce422f9ca8f00f696576e1fd564b6084144cff38a75e4f6208f03eb59d69&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/297581121.webp?k=b98fce422f9ca8f00f696576e1fd564b6084144cff38a75e4f6208f03eb59d69&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/297581121.webp?k=b98fce422f9ca8f00f696576e1fd564b6084144cff38a75e4f6208f03eb59d69&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/297581121.webp?k=b98fce422f9ca8f00f696576e1fd564b6084144cff38a75e4f6208f03eb59d69&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/297581121.webp?k=b98fce422f9ca8f00f696576e1fd564b6084144cff38a75e4f6208f03eb59d69&o=&s=1",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
        <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Boook a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo) => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
                earum sint debitis! Suscipit, quibusdam! Eum assumenda, ratione
                veritatis, nam ipsa, voluptatibus quia nobis dolorem dolores
                nostrum sed sapiente obcaecati dolorum?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates aperiam voluptatibus autem.</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
