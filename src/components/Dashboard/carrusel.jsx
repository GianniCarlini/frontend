import React, {Component} from 'react';

class carrusel extends Component {
    render() {
        return (
          <div className="content-wrapper">
              <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-90"
                      src="https://images.pexels.com/photos/239853/pexels-photo-239853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Third slide"
                    />
                  </div>
                </div>
              </div>
          </div>
        );
    }
}

export default carrusel;