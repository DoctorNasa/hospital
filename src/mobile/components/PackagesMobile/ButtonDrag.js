import React, { useRef, useState } from "react"
import { useSpring, a, config } from "react-spring"
import { useDrag } from "react-use-gesture"
import clamp from "lodash.clamp"
import "./styles.css"
import ZSearchBar from "../ZSearchBar"
import ZSelect from "../ZSelect"
import BreadCrumb from "../BreadCrumb"
import BlogMenu from "./BlogMenu"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import TitlePackageMain from "../Titles/TitlePackageMain"

const items = ["save item", "open item", "share item", "delete item", "cancel"]
const height = items.length * 60 + 80

const ButtonDrag = ({ queries, _setIsOpen, isOpen, _setLockSrcoll }) => {
  const sheetRef = useRef()
  const draggingRef = useRef(false)
  const dragginBtn = useRef(false)
  const [{ y }, setY] = useSpring(() => ({ y: 100 }))

  const open = ({ canceled }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    console.log("opening")
    _setIsOpen(true)
    setY({ y: 100, config: canceled ? config.wobbly : config.stiff })
  }
  const close = () => {
    console.log("closing")
    _setIsOpen(false)
    setY({ y: -260, config: config.stiff })
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
      console.log("newY", newY)

      console.log("vy", vy)
      console.log("dy", dy)
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
        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <TitlePackageMain text="ค้นหา...แพ็คเกจที่คุณสนใจ" />

          <ZSearchBar marginTop={15} noTitle />
          <TitlePackageMain text="เลือกโรงพยาบาล" padding="5px 0px 15px 0px" />
          <ZSelect placeHolder="กรุณาเลือก" />
          <TitlePackageMain text="เลือกโรงพยาบาล" padding="20px 0px 15px 0px" />
          <ZSelect placeHolder="กรุณาเลือก" />

          <div style={{ marginTop: 30, marginBottom: 15 }}>
            <BreadCrumb
              crumbs={[
                { name: "หน้าหลัก", link: "/" },
                { name: "แพ็คเกจโปรโมชั่น", link: "/packages" },
                { name: "ศูนย์หัวใจ", link: "/articles" }
              ]}
            />
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
