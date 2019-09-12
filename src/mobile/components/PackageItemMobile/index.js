import React from "react"

const styles = {
  container: {
    paddingTop: 100
  }
}

const PackageItemMobile = ({ match }) => {
  return (
    <div style={styles.container}>
      here is package item page {match.params.id}
    </div>
  )
}

export default PackageItemMobile
