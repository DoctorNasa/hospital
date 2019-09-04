import React from "react"
import BreadCrumb from "../BreadCrumb"

const styles = {
  container: {
    paddingTop: 120
  },
  margins: {
    marginRight: 15,
    marginLeft: 15
  }
}

const BlogPost = ({ match }) => {
  return (
    <div style={styles.container}>
      <div style={styles.margins}>
        <BreadCrumb
          crumbs={[
            { name: "หน้าหลัก", link: "/" },
            { name: "บทความสุขภาพ", link: "/articles" },
            { name: "เช็คให้ชัวร์ อาการแบบไหนเป็นโรคหัวใ" }
          ]}
        />
        <div style={{ color: "#00826a", marginTop: 15, marginBottom: 15 }}>
          <b>Created Date:</b> 30/06/2019
        </div>
        <img style={{ width: "100%" }} src="/images/mobile/blog/blog-img.jpg" />
        <p style={{ color: "#959595" }}>
          Pellentesque sed erat iaculis, pulvinar dolor vitae, tincidunt orci.
          Aliquam varius enim vitae ex malesuada blandit. Suspendisse ornare
          mattis egestas. Aliquam eleifend condimentum lorem, non ultrices justo
          facilisis ac. Sed arcu enim, bibendum quis sagittis vel, vulputate
          vitae mauris. Nullam tristique quam lectus. Vivamus sit amet dolor
          metus. Aliquam luctus nec risus sit amet laoreet. Aliquam pretium eget
          nisl elementum elementum. Vivamus ac fermentum metus. Nulla nec
          rhoncus arcu, ornare faucibus urna. Nam vulputate auctor semper.
          Maecenas nulla libero, varius eu feugiat in, dignissim eu tellus.
        </p>
        <h1 style={{ color: "#00826a" }}>this is title H1</h1>
        <p style={{ color: "#959595" }}>
          Pellentesque sed erat iaculis, pulvinar dolor vitae, tincidunt orci.
          Aliquam varius enim vitae ex malesuada blandit. Suspendisse ornare
          mattis egestas. Aliquam eleifend condimentum lorem, non ultrices justo
          facilisis ac. Sed arcu enim, bibendum quis sagittis vel, vulputate
          vitae mauris. Nullam tristique quam lectus. Vivamus sit amet dolor
          metus. Aliquam luctus nec risus sit amet laoreet. Aliquam pretium eget
          nisl elementum elementum. Vivamus ac fermentum metus. Nulla nec
          rhoncus arcu, ornare faucibus urna. Nam vulputate auctor semper.
          Maecenas nulla libero, varius eu feugiat in, dignissim eu tellus. ique
          quam lectus. Vivamus sit amet dolor metus. Aliquam luctus nec risus
          sit amet laoreet. Aliquam pretium eget nisl elementum elementum.
          Vivamus ac fermentum metus. Nulla nec rhoncus arcu, ornare faucibus
          urna. Nam vulputate auctor semper. Maecenas nulla libero, varius eu
          feugiat in, dignissim eu te.
        </p>
        <div>title: {match.params.id}</div>
        <div>title: {match.params.id}</div>
      </div>
    </div>
  )
}

export default BlogPost
