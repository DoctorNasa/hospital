import React, { useEffect, useState, useRef } from "react"
import Pagination from "../Pagination"
import Grid from "@material-ui/core/Grid"
import BlogMenu from "./BlogMenu"
import "./styles.css"
import ItemCategory from "../ZCardsCategoriesCarousel/ItemCategory"
import BreadCrumb from "../BreadCrumb"
import ItemVideo from "../ZVideosCarousel/ItemVideo"
import TitleDiv from "../TitleDiv"
import ZSearchBar from "../ZSearchBar"
import ZSelect from "../ZSelect"

const styles = {
  container: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    overflow: "hidden",
    height: "100%",
    display: "flex"
  }
}

const items = new Array(20).fill(1)

const BlogMobile = ({ queries }) => {
  return (
    <Grid container justify="center">
      <Grid item sm={10} style={{ background: "pink" }}>
        <Grid container spacing={4}>
          <Grid item sm={4}>
            <TitleDiv text="ค้นหา...สื่อวิดีโอหรือบทความสุขภาพ" />
            <ZSearchBar padding={16} noTitle />
            <TitleDiv text="เลือก Playlist / บทความเกี่ยวกับ" />
            <ZSelect />
          </Grid>
          <Grid item sm={8}>
            <Grid item sm={6}>
              <BreadCrumb
                padding={16}
                crumbs={[
                  { name: "หน้าหลัก", link: "/" },
                  { name: "บทความสุขภาพ" }
                ]}
              />
              <BlogMenu queries={queries} />
            </Grid>

            <div style={styles.container}>
              <Grid container spacing={4}>
                {queries.articles === undefined && (
                  <ItemVideo
                    title={"video title"}
                    desc={
                      "Lobortis elementum nibh tellus molestie. pulvinar etiam. Lectus quam id leo in. Elit duis tristique sollicitudin nibh sit. Netus et malesuada fames ac turpis egestas. Duis convallis convallis tellus id interdum velit laoreet id. Enim neque volutpat ac tincidunt vitae semper quis lectus. Quis commodo odio aenean sed adipiscing diam donec adipiscing."
                    }
                    vidId={"Gpv8T9OGSzs"}
                  />
                )}
                {queries.videos === undefined && (
                  <>
                    {items.map((x, i) => (
                      //TODO WTF NO IDEA
                      <ItemCategory
                        key={i}
                        imgPath={`/images/cardCarousel.png`}
                        title={`title ${i}`}
                        subtitle={`subtitle ${i}`}
                        marginTop={15}
                      />
                    ))}
                  </>
                )}
              </Grid>
            </div>
            <Pagination currentPage={1} itemsLength={items.length} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BlogMobile
