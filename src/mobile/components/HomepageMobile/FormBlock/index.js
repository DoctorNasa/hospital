import React from "react"
import Grid from "@material-ui/core/Grid"
import DropDownForm from "./DropDownForm"
import SearchInputForm from "./SearchInputForm"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import SearchBarMobile from "../../SearchBarMobile"
import BtnBlue from "../../BtnBlue"

const styles = {
  containerForm: {
    marginTop: 25,
    marginBottom: 50,
    background: "white",
    display: "flex",
    padding: 15
  }
}

const FormBlock = () => {
  return (
    <Grid
      item
      md={12}
      sm={12}
      style={{
        backgroundImage: `url(/images/mobile/bg-form.jpg)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "100%",
        display: "flex",
        paddingLeft: 15,
        paddingRight: 15
      }}
    >
      <Grid container justify="center">
        <Grid item sm={12} style={{ textAlign: "center", marginTop: 10 }}>
          <h3 style={{ fontSize: 25 }}>นัดหมายแพทย์</h3>
          <Paper style={styles.containerForm}>
            <Grid container>
              <Grid item sm={12}>
                <div>นัดหมายแพทย์</div>
                <div style={{ marginTop: 20 }}>
                  <SearchBarMobile />
                </div>
                <DropDownForm />
                <DropDownForm />
                <BtnBlue text="ดูรายละเอียด" />=
                <img
                  src="/images/formimg-homepage.jpg"
                  style={{ width: "100%", height: 300 }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FormBlock
