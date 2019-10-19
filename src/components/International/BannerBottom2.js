import React from "react"
import Grid from "@material-ui/core/Grid"

const BannerBottom2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/images/international/04.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: 300
      }}
    >
      <Grid container justify="flex-end" style={{ height: "100%" }}>
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
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                We are looking forward to serve you
              </div>
              <div style={{ textAlign: "center" }}>
                Please feel free to contact us at
              </div>
              <div
                style={{
                  margin: "30px 0px 10px 0px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
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
            <div
              style={{
                flex: 1
              }}
            ></div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default BannerBottom2
