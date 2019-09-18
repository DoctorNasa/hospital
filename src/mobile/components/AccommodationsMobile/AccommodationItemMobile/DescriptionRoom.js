import React from "react"

const styles = {
  container: {
    padding: "0px 15px 0px 15px"
  },
  greenTitle: {
    fontsize: 20,
    fontWeight: "bold",
    color: "#00826a"
  },
  serviceLine: {
    display: "flex",
    alignItems: "center",
    padding: "3px 0px 3px 0px"
  },
  icon: {
    width: 30,
    paddingRight: 15
  }
}

const DescriptionRoom = () => {
  return (
    <div style={styles.container}>
      <div style={styles.greenTitle}>สิ่งอำนวยความสะดวกภายในห้องพัก</div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/light.png"
          />
        </div>
        <div>service 1</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/tablet.png"
          />
        </div>
        <div>service 2</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/minibar.png"
          />
        </div>
        <div>service 3</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/coffee-machin.png"
          />
        </div>
        <div>service 4</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/eat.png"
          />
        </div>
        <div>service 5</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/soap.png"
          />
        </div>
        <div>service 6</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/fridge.png"
          />
        </div>
        <div>service 7</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/micro-wave.png"
          />
        </div>
        <div>service 8</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/tv.png"
          />
        </div>
        <div>service 9</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/phone.png"
          />
        </div>
        <div>service 10</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/money-locker.png"
          />
        </div>
        <div>service 11</div>
      </div>
      <div style={styles.serviceLine}>
        <div>
          <img
            style={styles.icon}
            src="/images/icons/accommodation-mobile-icons/air-drayer.png"
          />
        </div>
        <div>service 12</div>
      </div>
    </div>
  )
}

export default DescriptionRoom
