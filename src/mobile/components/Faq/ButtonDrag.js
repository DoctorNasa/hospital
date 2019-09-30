import React, { useRef, useState } from "react"
import { useSpring, a, config } from "react-spring"
import { useDrag } from "react-use-gesture"
import clamp from "lodash.clamp"
import "./styles.css"
import ZSearchBar from "../ZSearchBar"
import ZSelect from "../ZSelect"
import BreadCrumb from "../BreadCrumb"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const styles = {
  menuSelected: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 10px -2px rgba(48,191,197,1)",
    color: "#30bfc5",
    fontSize: 13,
    padding: 5
  },
  menuNotSelected: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8a8a88",
    fontSize: 13,
    padding: 5
  }
}

const items = ["save item", "open item", "share item", "delete item", "cancel"]
const height = items.length * 60 + 80

const ButtonDrag = ({
  queries,
  _setIsOpen,
  isOpen,
  _setLockSrcoll,
  _setSelectBooking,
  selectBooking
}) => {
  const sheetRef = useRef()
  const draggingRef = useRef(false)
  const dragginBtn = useRef(false)
  const [{ y }, setY] = useSpring(() => ({ y: 60 }))

  const open = ({ canceled }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    console.log("opening")
    _setIsOpen(true)
    setY({ y: 60, config: canceled ? config.wobbly : config.stiff })
  }
  const close = () => {
    console.log("closing")
    _setIsOpen(false)
    setY({ y: -30, config: config.stiff })
  }

  const bind = useDrag(
    ({
      first,
      last,
      vxvy: [, vy],
      delta: [, dy],
      memo = y.getValue(),
      cancel,
      canceled
    }) => {
      let newY = memo + dy

      if (first) {
        _setLockSrcoll(true)
        draggingRef.current = false
      }
      // if this is not the first or last frame, it's a moving frame
      // then it means the user is dragging
      else if (!!last) {
        _setLockSrcoll(false)
        draggingRef.current = true
      }

      // when the user releases the sheet, we check whether it passed
      // the treshold for it to close, or if we reset it to its open positino
      if (last) vy < -0.3 || dy < -300 ? close() : open({ canceled })
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else setY({ y: clamp(newY, 0, 500), config: config.stiff })
      return memo
    },
    {
      domTarget: dragginBtn,
      drag: isOpen,
      pinch: false,
      scroll: false,
      wheel: false,
      move: false
    }
  )

  const display = y.interpolate(py => (py < height ? "block" : "none"))
  return (
    <>
      <a.div
        className="bg"
        style={{
          transform: y.interpolate(
            [height, 0],
            ["translateY(-8%) scale(1.16)", "translateY(0px) scale(1)"],
            "clamp"
          )
        }}
      ></a.div>

      <a.div
        ref={sheetRef}
        className="sheet"
        {...bind()}
        style={{
          display,
          transform: y.interpolate(py => `translate3d(0px,${py}px,0)`)
        }}
      >
        <div style={{ marginLeft: 15, marginRight: 15, paddingTop: 30 }}>
          <ZSearchBar marginTop={15} noTitle />
          <BreadCrumb
            padding="15px 0px 15px 0px"
            crumbs={[
              { name: "หน้าหลัก", link: "/" },
              { name: "บทความสุขภาพ", link: "/articles" }
            ]}
          />
          <div
            style={{
              marginTop: 10,
              height: 50,
              display: "flex"
            }}
          >
            <div
              style={
                selectBooking ? styles.menuSelected : styles.menuNotSelected
              }
              onClick={() => !selectBooking && _setSelectBooking(true)}
            >
              <img
                style={{ height: 25, marginRight: 10 }}
                src={
                  !selectBooking
                    ? "/images/icons/question-gray.png"
                    : "/images/icons/questions-blue.png"
                }
              />
              แนะนำแพทย์ให้ฉัน
            </div>
            <div
              style={
                !selectBooking ? styles.menuSelected : styles.menuNotSelected
              }
              onClick={() => selectBooking && _setSelectBooking(false)}
            >
              <img
                style={{ height: 25, marginRight: 10 }}
                selectBooking
                src={
                  selectBooking
                    ? "/images/icons/doctor-gray.png"
                    : "/images/icons/doctor-blue.png"
                }
              />
              เลือกแพทย์ด้วยตัวเอง
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              paddingBottom: 40,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <div style={{ position: "absolute", top: 20 }}>
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                ref={dragginBtn}
                style={{ color: "white", background: "#cad9d9" }}
                onClick={isOpen ? close : open}
              >
                {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </Fab>
            </div>
          </div>
        </div>
      </a.div>
    </>
  )
}

export default ButtonDrag
