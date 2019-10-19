import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
    color: "#32bfc6"
  }
}))

export default function SimpleExpansionPanel() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#32bfc6" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            FOR IN-PATIENT SERVICE
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <b>Required documents</b>
            <br />- Copy of passport with signature <br />- Insurance card or
            certificate <br />- Any other required by your insurance company to
            identify yourself
            <br />
            <br />
            Our international correspondent staff will assist you to coordinate
            with your insurance provider / assistance company including provide
            medical information regarding the approval of guarantee of payment
            for your inpatient hospitalization.The payment guarantee /
            confirmation will be sent to our hospital normally within 24-48
            hours if its policy covers. The time consuming will be taken because
            of... <br />
            <br />
            -Verification process of each company <br />
            -Not enough time to process the application, as the length of stay
            is too short <br />
            -Differences in the Time Zone <br />
            -Terms and conditions of your policy
            <br />
            <br /> You are required to pay the excess amount at the time of your
            discharge. There may be some expenses incurred that is not involve
            in your insurance policy such as medical expenses or room rate that
            is over the limit, Allowed and personal expenses such as telephone
            calls, foreign newspapers, extra bed for escorts that are beside of
            our complimentary. For your information, our hospital will work
            based on Guarantee of Payment letter for all cases. You are required
            to pay the excess amount at the time of your discharge or before
            leaving the hospital. There may be some expenses incurred that is
            not involve in your insurance policy such as medical expenses or
            room rate that is over the limit, some laboratories or investigation
            tests, Allowed and personal expenses beside of our complimentary.
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#32bfc6" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            FOR OUT-PATIENT SERVICE
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#32bfc6" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>PRE-AUTHORIZATION</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#32bfc6" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>TRAVEL INSURANCE</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#32bfc6" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            LIST OF INSURANCE PROVIDERS
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
