import React, { useRef } from "react"
import { useSpring, a, config } from "react-spring"
import { useDrag } from "react-use-gesture"
import clamp from "lodash.clamp"
import "./styles.css"
import ZSearchBar from "../ZSearchBar"
import ZSelect from "../ZSelect"
import BreadCrumb from "../BreadCrumb"
import BlogMenu from "./BlogMenu"
import Fab from "@material-ui/core/Fab"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

const items = ["save item", "open item", "share item", "delete item", "cancel"]
const height = items.length * 60 + 80

const ButtonDrag = ({ queries, _setIsOpen, isOpen }) => {
  const sheetRef = useRef()
  const draggingRef = useRef(false)
  const dragginBtn = useRef(false)
  const [{ y }, setY] = useSpring(() => ({ y: 100 }))

  React.useEffect(() => {
    console.log(dragginBtn, "dragginBtn")
  }, [dragginBtn])

  const open = ({ canceled }) => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    _setIsOpen(true)
    setY({ y: 100, config: canceled ? config.wobbly : config.stiff })
  }
  const close = () => {
    _setIsOpen(false)
    setY({ y: -180, config: config.stiff })
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
      if (first) draggingRef.current = false
      // if this is not the first or last frame, it's a moving frame
      // then it means the user is dragging
      else if (!!last) draggingRef.current = true
      // adds friction when dragging the sheet upward
      // the more the user drags up, the more friction
      if (newY < 0) newY = newY / (1 - newY * 0.005)

      // if the user drags up passed a threshold, then we cancel
      // the drag so that the sheet resets to its open position
      if (newY > 270) cancel()

      // when the user releases the sheet, we check whether it passed
      // the treshold for it to close, or if we reset it to its open positino
      if (last) vy < -0.3 || dy < -300 ? close() : open({ canceled })
      // when the user keeps dragging, we just move the sheet according to
      // the cursor position
      else setY({ y: clamp(newY, -200, height), config: config.stiff })
      return memo
    },
    {
      domTarget: dragginBtn,
      enabled: true,
      drag: true
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
      >
        <a.div className="overlay" onClick={close} />
      </a.div>

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
          <div>ค้นหา...สื่อวิดีโอหรือบทความสุขภาพ</div>
          <ZSearchBar marginTop={15} noTitle />
          <div style={{ marginTop: 15, marginBottom: 15 }}>
            Playlist / บทความเกี่ยวกับ
          </div>
          <ZSelect />
          <div style={{ marginTop: 50, marginBottom: 15 }}>
            <BreadCrumb
              crumbs={[
                { name: "หน้าหลัก", link: "/" },
                { name: "บทความสุขภาพ", link: "/" }
              ]}
            />
          </div>

          <BlogMenu queries={queries} />
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
                onClick={isOpen ? close : open}
                style={{ color: "white", background: "#cad9d9" }}
              >
                {isOpen ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
              </Fab>
            </div>
          </div>
        </div>
      </a.div>
    </>
  )
}

export default ButtonDrag
