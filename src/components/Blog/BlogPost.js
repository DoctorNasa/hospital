import React, { useState } from "react"
import BreadCrumb from "../BreadCrumb"
import Button from "@material-ui/core/Button"
import ZCardsCategoriesCarousel from "../ZCardsCategoriesCarousel"
import BtnBlue from "../BtnBlue"
import Grid from "@material-ui/core/Grid"
import Rating from "@material-ui/lab/Rating"
import { Divider } from "@material-ui/core"
import ZDoctorCarousel from "../ZDoctorCarousel"

const styles = {
  margins: {
    marginRight: 15,
    marginLeft: 15
  }
}

const BlogPost = ({ match }) => {
  const [rating, setRating] = useState(4)
  return (
    <Grid container justify="center" style={{ paddingTop: 30 }}>
      <Grid item sm={8}>
        <BreadCrumb
          crumbs={[
            { name: "หน้าหลัก", link: "/" },
            { name: "บทความสุขภาพ", link: "/articles" },
            { name: "เช็คให้ชัวร์ อาการแบบไหนเป็นโรคหัวใ" }
          ]}
        />
        <h1 style={{ color: "#00826a", marginTop: 30, marginBottom: 30 }}>
          เช็คให้ชัวร์ อาการแบบไหนเป็นโรคหัวใจ
        </h1>
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
        <h2 style={{ color: "#00826a" }}>
          this is title H2 ({match.params.id})
        </h2>
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
        <div
          style={{
            color: "#00826a",
            fontWeight: "bold",
            paddingTop: 15,
            paddingBottom: 15
          }}
        >
          <div>Rate this article: (article id: #{match.params.id})</div>
          <div style={{ paddingTop: 5 }}>Posted by: Phyathai Hospital</div>
          <div style={{ paddingTop: 5, display: "flex" }}>
            <div>Review</div>
            <div>
              <Rating
                size="small"
                value={rating}
                style={{ color: "#00826a" }}
                onChange={(event, newValue) => {
                  setRating(newValue)
                }}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            marginTop: 15,
            marginBottom: 15,
            justifyContent: "flex-end"
          }}
        >
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
            <div>share</div>
            <div style={{ marginLeft: 15 }}>|</div>
            <img
              src="/images/icons/fb-icon.png"
              style={{
                height: 15,
                marginLeft: 15,
                marginRight: 15
              }}
            />
            <img
              src="/images/icons/twitter.png"
              style={{
                height: 20,
                marginRight: 15
              }}
            />
            <img
              src="/images/icons/line-icon.png"
              style={{
                height: 20
              }}
            />
          </Button>
        </div>
        <ZDoctorCarousel />
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
      </Grid>
    </Grid>
  )
}

export default BlogPost
