import React from "react"
import DropDownBranch from "./DropDownBranch"

const styles = {
  margins: {
    marginLeft: 15,
    marginRight: 15
  }
}

const BranchContentMobile = ({ match, dbBranches }) => {
  return (
    <div>
      <div
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          fontWeight: 500,
          marginLeft: 15
        }}
      >
        เลือกโรงพยาบาล
      </div>
      <div style={{ marginLeft: 8 }}>
        <DropDownBranch match={match} dbBranches={dbBranches} />
      </div>
      <img src="/images/branch/bg1.jpg" style={{ width: "100%" }} />
      <div style={styles.margins}>
        <h3 className="blueTitle">เกี่ยวกับเรา</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src="/images/branch/bg2.jpg" style={{ width: "100%" }} />
      <div style={styles.margins}>
        <h3 className="blueTitle">เกี่ยวกับเรา</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default BranchContentMobile
