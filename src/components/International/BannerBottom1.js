import React from "react"
import Grid from "@material-ui/core/Grid"

const BannerBottom1 = ({
  image = "/images/international/02.jpg",
  phone = "+662 619-2444 Ext: 2020, 2047, 2057"
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: 300
      }}
    >
      <Grid container justify="center" style={{ height: "100%" }}>
        <Grid item md={8} sm={11}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white"
            }}
          >
            <div
              style={{
                flex: 1,
                paddingRight: 100,
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column"
              }}
            >
              <div style={{ fontSize: 20, fontWeight: "bold" }}>
                We are looking forward to serve you
              </div>
              <div>Please feel free to contact us at</div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingLeft: 100,
                borderLeft: "2px solid white"
              }}
            >
              <div
                style={{
                  margin: "10px 0px 10px 0px",
                  display: "flex"
                }}
              >
                <img
                  style={{ width: 25, height: 25 }}
                  src="/images/international/AST_phone.png"
                />
                <div style={{ marginLeft: 15 }}>{phone}</div>
              </div>
              <div style={{ margin: "10px 0px 10px 0px", display: "flex" }}>
                <img
                  style={{ width: 25, height: 25 }}
                  src="/images/international/AST_fax.png"
                />
                <div style={{ marginLeft: 15 }}> +662 619-8555</div>
              </div>
              <div style={{ margin: "10px 0px 10px 0px", display: "flex" }}>
                <img
                  style={{ width: 25, height: 25 }}
                  src="/images/international/AST_email.png"
                />
                <a
                  href="mailto:webmaster@example.com"
                  style={{ marginLeft: 15, color: "white" }}
                >
                  More Information via E-mail >
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default BannerBottom1
