import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import "./styles.css"
import BreadCrumb from "../BreadCrumb"
import ZSearchBar from "../ZSearchBar"

import BtnLeftPanel from "./BtnLeftPanel"
import Success from "./Success"
import axios from "axios"

import BlockQuestion from "./BlockQuestion"
import BlockFaq from "./BlockFaq"

const styles = {
  container: {
    marginTop: 30,
    marginLeft: 16,
    marginRight: 16,
    overflow: "hidden"
  },
  bgUncolored: {
    paddingTop: 30,
    paddingBottom: 30
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
  const [currentPage, setCurrentPage] = useState(0)
  const [questionPage, setQuestionPage] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [searchUpdate, setSearchUpdate] = useState(false)

  const _success = () => setSuccess(true)
  const _questionPage = bool => setQuestionPage(bool)

  const _searchOnchange = e => setSearchInput(e)
  const _searchSubmit = e => {
    setSearchUpdate(true)
  }

  const _page = page => {
    axios
      .get(
        `https://fenrir.studio/d/pht/faq/lists/th?limit=10&offset=${page * 10}`
      )
      .then(response => {
        setList(response.data.result.data)
        setCurrentPage(page)
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }

  useEffect(() => {
    axios
      .get(
        `https://fenrir.studio/d/pht/faq/lists/th?limit=10&search=${
          searchInput === "" ? null : searchInput
        }`
      )
      .then(response => {
        setList(response.data.result.data)
        setSearchUpdate(false)
        setSearchInput("")
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }, [searchUpdate])

  if (success) return <Success />

  return (
    <Grid container justify="center" style={styles.bgUncolored}>
      <Grid item md={10} sm={12}>
        <Grid container justify="center">
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
              <ZSearchBar
                padding={16}
                noTitle
                searchInput={searchInput}
                onChange={_searchOnchange}
                onSubmit={_searchSubmit}
              />
            </div>
          </Grid>
          {questionPage ? (
            <Grid item sm={7}>
              <BlockQuestion _success={_success} />
            </Grid>
          ) : (
            <Grid item sm={7}>
              <BlockFaq
                list={list}
                setList={setList}
                currentPage={currentPage}
                _page={_page}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Faq
