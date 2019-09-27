import React, { useEffect, useState, useRef } from "react"
import ButtonDrag from "./ButtonDrag"
import "./styles.css"
import ScrollLock from "react-scrolllock"
import SelectDoctorPage from "./SelectDoctorPage"
import BlockBooking from "./BlockBooking"
import Success from "./Success"

const styles = {
  baground: {
    backgroundColor: "#c9ecec"
  },
  empty: {
    backgroundColor: "white"
  },
  close: {
    marginTop: -230,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%"
  },
  open: {
    marginTop: 110,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%"
  }
}

const items = new Array(20).fill(1)

const DoctorSelectMobile = ({ queries, state, _action }) => {
  const [isOpen, setIsOpen] = useState(true)
  const [lockScroll, setLockScroll] = useState(false)
  const [selectBooking, setSelectBooking] = useState(false)
  const [success, setSuccess] = useState(false)

  const _success = () => setSuccess(true)

  const _setIsOpen = y => setIsOpen(y)
  const _setLockSrcoll = bool => setLockScroll(bool)
  const _setSelectBooking = bool => setSelectBooking(bool)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    console.log("isOpen", isOpen)
    console.log("queries", queries)
  }, [isOpen, queries])

  if (success)
    return (
      <div>
        <Success />
      </div>
    )

  return (
    <div style={selectBooking ? styles.baground : styles.empty}>
      <ButtonDrag
        queries={queries}
        _setIsOpen={_setIsOpen}
        isOpen={isOpen}
        _setLockSrcoll={_setLockSrcoll}
        _setSelectBooking={_setSelectBooking}
        selectBooking={selectBooking}
      />
      <ScrollLock isActive={lockScroll}>
        <div>
          <div style={isOpen ? styles.open : styles.close}>
            {selectBooking ? (
              <BlockBooking
                _success={_success}
                state={state}
                _action={_action}
              />
            ) : (
              <SelectDoctorPage />
            )}
          </div>
        </div>
      </ScrollLock>
    </div>
  )
}

export default DoctorSelectMobile
