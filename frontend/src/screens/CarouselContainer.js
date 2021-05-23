import React from "react";
import Carousel, { Dots, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class CarouselContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <img
          width="100%"
          src="https://images.unsplash.com/photo-1530686350401-7de25243dd89?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvZW1zfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="pics"
        />,
        <img
          width="100%"
          src="https://images.unsplash.com/photo-1526639395060-7afe9a493e87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fHBvZW1zfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="pics"
        />,

        <img
          width="100%"
          src="https://images.unsplash.com/photo-1606629201197-3297d695094c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9lbXN8ZW58MHwwfDB8YmxhY2t8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="pics"
        />,
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <Carousel
            value={this.state.value}
            slides={this.state.slides}
            onChange={this.onchange}
            plugins={[
              "infinite",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 5000,
                },
              },
            ]}
            animationSpeed={2000}
          />
          <Dots
            value={this.state.value}
            onChange={this.onchange}
            number={this.state.slides.length}
          />
        </div>
        <div style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
          "She was more than a home from where I could find myself in a place of
          no return." <br />{" "}
          <span style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            xx Ryan Jonas{" "}
          </span>
        </div>
      </>
    );
  }
}

export default CarouselContainer;
