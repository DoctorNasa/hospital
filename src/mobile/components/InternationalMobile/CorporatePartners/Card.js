import React from "react"
import TitlePackageCategory from "../../Titles/TitlePackageCategory"

const styles = {
  container: {
    margin: "15px 15px 30px 15px",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
  },
  title: {
    color: "#32bfc6",
    fontWeight: "bold",
    fontSize: 20
  }
}

const Card = ({
  img,
  title,
  contact,
  address,
  tel,
  mobile,
  email,
  website
}) => {
  return (
    <div style={styles.container}>
      <img src={img} style={{ width: "100%" }} />
      <div style={{ padding: "30px 15px 30px 15px" }}>
        <div style={styles.title}>{title}</div>
        <div style={{ marginTop: 15 }}>{address}</div>
        <div style={{ marginTop: 15, marginBottom: 15 }}>
          <b>Contact person: </b>
          {contact}
        </div>
        <TitlePackageCategory
          text={tel}
          img="/images/icons/international/4.png"
          color="rgb(50, 191, 198)"
          padding="5px 0px 0px 0px"
          fontSize={13}
          imgSize={25}
          fontWeight={500}
        />
        <TitlePackageCategory
          text={mobile}
          img="/images/icons/international/4.png"
          color="rgb(50, 191, 198)"
          padding="5px 0px 0px 0px"
          fontSize={13}
          imgSize={25}
          fontWeight={500}
        />
        <TitlePackageCategory
          text={email}
          img="/images/icons/international/4.png"
          color="rgb(50, 191, 198)"
          padding="5px 0px 0px 0px"
          fontSize={13}
          imgSize={25}
          fontWeight={500}
        />
        <TitlePackageCategory
          text={website}
          img="/images/icons/international/4.png"
          color="rgb(50, 191, 198)"
          padding="5px 0px 0px 0px"
          fontSize={13}
          imgSize={25}
          fontWeight={500}
        />
      </div>
    </div>
  )
}

export default Card
