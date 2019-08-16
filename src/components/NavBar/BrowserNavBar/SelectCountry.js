import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import Avatar from "@material-ui/core/Avatar"
import Paper from "@material-ui/core/Paper"
import ExpandMore from "@material-ui/icons/ExpandMore"

const languages = [
  {
    lang: "TH",
    flag: "https://cdn.countryflags.com/thumbs/thailand/flag-800.png"
  },
  {
    lang: "EN",
    flag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
  }
]

const useStyles = makeStyles({
  root: {
    position: "absolute",
    right: 0,
    zIndex: 99
  }
})

const SelectCountry = () => {
  const [selectedLang, setSelectedLang] = useState("EN")
  const [showDrop, setShowDrop] = useState(false)
  const classes = useStyles()
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 5 }}>
        <Avatar
          style={{ height: 25, width: 25 }}
          alt="Remy Sharp"
          src={languages.filter(x => x.lang === selectedLang)[0].flag}
        />
      </div>
      <div style={{ position: "absolute", left: 35, top: 8 }}>
        {languages.filter(x => x.lang === selectedLang)[0].lang}
      </div>
      <div
        style={{ position: "absolute", left: 60, top: 5, cursor: "pointer" }}
        onClick={() => setShowDrop(!showDrop)}
      >
        <ExpandMore />
        {showDrop && (
          <Paper elevation={2} className={classes.root}>
            {languages.map(x => (
              <div
                className="itemDropDown"
                onClick={() => setSelectedLang(x.lang)}
              >
                {x.lang}
              </div>
            ))}
          </Paper>
        )}
      </div>
    </div>
  )
}

export default SelectCountry
