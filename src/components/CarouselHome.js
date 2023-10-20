import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";


function CarouselHome() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <div className="hero1">
          <div className="bg-home-filter">
            <div className="hero-content w-50 px-4 pb-5 d-flex flex-column justify-content-center">
              <h1 className="fs-1 fw-bold text-white mb-0 ">
                Doctor Strange in the Multiverse of Madness
              </h1>
              <p className="text-white fs-6 mt-5 mb-4">
                Journey into the unknown with Doctor Strange, with the help of
                mystical allies both old and new, across the confusing and
                dangerous alternate realities of the Multiverse to confront a
                mysterious new enemy.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero2">
          <div className="bg-home-filter">
            <div className="hero-content w-50 px-4 pb-5 d-flex flex-column justify-content-center">
              <h1 className="fs-1 fw-bold text-white mb-0 ">
              The Equalizer 3
              </h1>
              <p className="text-white fs-6 mt-5 mb-4">
              Robert McCall finds himself at home in Southern Italy but he discovers his friends 
              are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: 
              become his friends' protector by taking on the mafia.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero3">
          <div className="bg-home-filter">
            <div className="hero-content w-50 px-4 pb-5 d-flex flex-column justify-content-center">
              <h1 className="fs-1 fw-bold text-white mb-0 ">Gran Turismo</h1>
              <p className="text-white fs-6 mt-5 mb-4">
              The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series 
              of Nissan competitions to become an actual professional racecar driver.
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;