import React from "react"
import Grid from "@material-ui/core/Grid"
import DropDownForm from "./DropDownForm"
import SearchInputForm from "./SearchInputForm"
import Button from "@material-ui/core/Button"

const styles = {
  containerForm: {
    marginTop: 25,
    marginBottom: 50,
    background: "white",
    height: 400,
    display: "flex"
  }
}

const FormBlock = () => {
  return (
    <Grid
      item
      md={12}
      sm={12}
      style={{
        backgroundImage: `url(/images/backgroundSkyHomepage.jpg)`,
        backgroundSize: "100% 600px",
        backgroundRepeat: "no-repeat",
        height: 600,
        display: "flex",
        backgroundColor: "white"
      }}
    >
      <Grid container justify="center">
        <Grid
          item
          sm={8}
          xs={12}
          style={{ textAlign: "center", marginTop: 10 }}
        >
          <h3 style={{ fontSize: 25 }}>นัดหมายแพทย์</h3>
          <div style={styles.containerForm}>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 500, fontSize: 20 }}>นัดหมายแพทย์</p>
              <div
                style={{
                  background: "white",
                  paddingLeft: 50,
                  paddingBottom: 50
                }}
              >
                <SearchInputForm />
                <DropDownForm />
                <DropDownForm />
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  style={{
                    color: "white",
                    fontSize: 20
                  }}
                >
                  ดูรายละเอียด
                </Button>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 30,
                paddingRight: 30,
                paddingBottom: 30,
                margin: 15
              }}
            >
              <img
                src="/images/formimg-homepage.jpg"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FormBlock
