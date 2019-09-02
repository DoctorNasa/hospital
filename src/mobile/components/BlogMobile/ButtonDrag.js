import React from "react"
import { useSpring, animated, interpolate } from "react-spring"
import { useGesture } from "react-with-gesture"
import ReactDOM from "react-dom"

import {
  Container,
  Phone,
  Status,
  Wrapper,
  Icon,
  Info,
  Type
} from "./styles.js"

const ButtonDrag = () => {
  const AnimatedStatus = animated(Status)

  const [bind, { delta, down }] = useGesture()
  const { y } = useSpring({
    y: down ? delta[1] : -50
  })

  return (
    <Container>
      <Phone>
        <AnimatedStatus
          {...bind()}
          style={{
            height: interpolate([y], y => `${-y}px`)
          }}
        >
          <Wrapper>Your Driver is on Route</Wrapper>
          {down && (
            <>
              <Wrapper>
                <Icon>
                  <img
                    src="https://i.pravatar.cc/25?img=3"
                    style={{ borderRadius: 12.5 }}
                  />
                </Icon>
                <div style={{ textAlign: "center" }}>
                  <Info>John James</Info>
                  <Info>4.1</Info>
                </div>
                <Type>🚲</Type>
              </Wrapper>
              <Wrapper column />
            </>
          )}
        </AnimatedStatus>
      </Phone>
    </Container>
  )
}

export default ButtonDrag
