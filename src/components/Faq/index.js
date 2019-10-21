import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import "./styles.css"
import BreadCrumb from "../BreadCrumb"
import ZSearchBar from "../ZSearchBar"
import Accordeon from "./Accordeon"
import BtnLeftPanel from "./BtnLeftPanel"
import Success from "./Success"
import axios from "axios"

const styles = {
  container: {
    marginTop: 30,
    marginLeft: 16,
    marginRight: 16,
    overflow: "hidden"
  },
  bgUncolored: {
    paddingTop: 30
  },
  bookingContainer: {
    background: "white",
    width: "100%",
    padding: 30
  }
}

const Faq = ({}) => {
  const [success, setSuccess] = useState(false)
  const [list, setList] = useState({
    list: [
      {
        id: 0,
        title: "",
        deail: ""
      }
    ],
    total: 0
  })
  const [questionPage, setQuestionPage] = useState(false)

  const _success = () => setSuccess(true)
  const _questionPage = bool => setQuestionPage(bool)

  useEffect(() => {
    axios
      .get("https://fenrir.studio/d/pht/faq/lists/th?limit=4")
      .then(response => {
        console.log("this is ", response.data.result.data)
        setList(response.data.result.data)
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }, [])

  if (success) return <Success />

  return (
    <Grid container justify="center" style={styles.bgUncolored}>
      <Grid item md={10} sm={12}>
        <Grid container>
          <Grid item sm={4}>
            <BreadCrumb
              paddingLeft={25}
              paddingTop={16}
              crumbs={[{ name: "หน้าหลัก", link: "/" }, { name: "ศูนย์หัวใจ" }]}
            />
            <div>
              <BtnLeftPanel
                questionPage={questionPage}
                _questionPage={_questionPage}
              />
              <ZSearchBar padding={16} noTitle />
            </div>
          </Grid>
          {questionPage ? (
            <Grid item sm={8}>
              <div>questions</div>
            </Grid>
          ) : (
            <Grid item sm={8}>
              <h1 style={{ color: "#4d4d4d", padding: 16 }}>
                แพคเกจและโปรโมชั่น
              </h1>
              <Accordeon list={list} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Faq
