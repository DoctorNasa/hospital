import React, { Component } from "react"
import Carousel from "react-spring-3d-carousel"
import uuidv4 from "uuid"
import { config } from "react-spring"

let slides = [
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="1" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="2" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="3" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="4" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="5" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="6" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="7" />
  },
  {
    key: uuidv4(),
    content: <img src="https://picsum.photos/400/600/?random" alt="8" />
  }
]

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 4,
    showNavigation: true,
    config: config.gentle
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    })
  }

  render() {
    return (
      <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={config.slow}
        />
      </div>
    )
  }
}
