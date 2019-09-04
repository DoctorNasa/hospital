import React from "react"
import BreadCrumb from "../BreadCrumb"
import Button from "@material-ui/core/Button"
import ZCardsCategoriesCarousel from "../ZCardsCategoriesCarousel"
import BtnBlue from "../BtnBlue"

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
        <h1 style={{ color: "#00826a" }}>
          this is title H1 ({match.params.id})
        </h1>
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
        <h2 style={{ color: "#00826a" }}>this is title H2</h2>
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
        <h3 style={{ color: "#00826a" }}>this is title H3</h3>
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
        <h3 style={{ color: "#00826a" }}>this is title H3</h3>
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
        <h3 style={{ color: "#00826a" }}>this is title H3</h3>
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
        <div style={{ display: "flex", marginTop: 15, marginBottom: 15 }}>
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginRight: 7 }}
          >
            <img
              src="/images/icons/medicIcon.png"
              style={{ width: 25, marginRight: 5 }}
            />
            ปรึกษาแพทย์ออนไลน์
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ color: "white", marginLeft: 7 }}
          >
            <img
              src="/images/icons/fb-icon.png"
              style={{ height: 25, marginRight: 5 }}
            />
            share on facebook
          </Button>
        </div>
      </div>
      <img
        src="/images/mobile/blog/ads-post-page.jpg"
        style={{ width: "100%" }}
      />
      <h3
        style={{
          margin: 30,
          marginBottom: 10,
          textAlign: "center",
          fontSize: 25
        }}
      >
        บทความสำหรับคุณ
      </h3>
      <ZCardsCategoriesCarousel />
      <BtnBlue text="fdfdf" textAlign="center" paddingBottom={30} />
    </div>
  )
}

export default BlogPost
