import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Dialog from "@material-ui/core/Dialog"
import { blue } from "@material-ui/core/colors"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import ExpandMore from "@material-ui/icons/ExpandMore"
import CloseIcon from "@material-ui/icons/Close"

const languages = [
  {
    lang: "TH",
    flag: "https://cdn.countryflags.com/thumbs/thailand/flag-800.png"
  },
  {
    lang: "US",
    flag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
  }
]

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  root: {
    display: "flex"
  },
  formControl: {
    margin: 20
  },
  group: {
    margin: 20,
    justifyContent: "center"
  },
  item: {
    justifyContent: "space-between"
  }
})

function SimpleDialog({
  languages,
  onClose,
  selectedValue,
  open,
  selectedCountry,
  _selectCountry
}) {
  const classes = useStyles()
  const [value, setValue] = useState("female")

  function handleClose() {
    onClose(selectedValue)
  }

  function handleListItemClick(value) {
    onClose(value)
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <Dialog
      style={{ width: "100%" }}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      {open && (
        <div
          onClick={handleClose}
          style={{ position: "relative", width: "100%", zIndex: 99 }}
        >
          <div style={{ position: "absolute", right: 0 }}>
            <CloseIcon />
          </div>
        </div>
      )}

      <FormControl
        component="fieldset"
        style={{ width: 200, textAlign: "center" }}
      >
        <RadioGroup
          aria-label="gender"
          name="gender1"
          className={classes.group}
          value={selectedCountry}
          onChange={e => _selectCountry(e.target.value)}
        >
          {languages.map(x => (
            <div>
              <FormControlLabel
                className={classes.item}
                labelPlacement="start"
                value={x.lang}
                control={<Radio />}
                label={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "space-between"
                    }}
                  >
                    <Avatar
                      style={{
                        height: 25,
                        width: 25,
                        marginRight: 10,
                        flex: 1
                      }}
                      alt="Remy Sharp"
                      src={x.flag}
                    />

                    <div style={{ flex: 1 }}>{x.lang}</div>
                  </div>
                }
              />
            </div>
          ))}
        </RadioGroup>
      </FormControl>
    </Dialog>
  )
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState("")
  const [selectedCountry, setSelectedCountry] = useState("TH")

  function handleClickOpen() {
    setOpen(true)
  }

  const handleClose = value => {
    setOpen(false)
    setSelectedValue(value)
  }

  const _selectCountry = country => setSelectedCountry(country)

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "45px",
          border: "solid 1px",
          borderColor: "#dedede",
          borderRadius: 5,
          background: "white",
          cursor: "pointer"
        }}
        onClick={handleClickOpen}
      >
        <div style={{ position: "absolute", left: 10, top: 10 }}>
          <Avatar
            style={{ height: 25, width: 25 }}
            alt="Remy Sharp"
            src={languages.filter(x => x.lang === selectedCountry)[0].flag}
          />
        </div>
        <div style={{ position: "absolute", left: 45, top: 13 }}>
          {languages.filter(x => x.lang === selectedCountry)[0].lang}
        </div>
        <div style={{ position: "absolute", left: 70, top: 10 }}>
          <ExpandMore />
        </div>
      </div>
      <SimpleDialog
        selectedCountry={selectedCountry}
        _selectCountry={_selectCountry}
        languages={languages}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
