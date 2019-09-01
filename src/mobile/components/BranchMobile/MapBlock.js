import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import PhoneInTalk from "@material-ui/icons/PhoneInTalk"
import Print from "@material-ui/icons/Print"
import WhereToVote from "@material-ui/icons/WhereToVote"

const options = {}

const styles = {
  inMap: {
    paddingTop: 20,
    display: "flex",
    fontSize: 15,
    color: "#7a7979"
  }
}

const MapBlock = ({ info }) => {
  const { lat, lng, tel, address, name } = info
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD4z0mx3oj_qpsd90BaRHCpihbVPlabNS8" // ,
    // ...otherOptions
  })

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    // const onLoad = React.useCallback(function onLoad(mapInstance) {
    //   // do something with map Instance
    // })
    return (
      <GoogleMap
        mapContainerStyle={{
          height: "600px",
          width: "100%"
        }}
        zoom={15}
        center={{
          lat: lat + 0.0079,
          lng
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0
          }}
        >
          <Grid container justify="center">
            <Grid item sm={12}>
              <Paper
                style={{
                  padding: 30,
                  marginTop: 60,
                  height: 240,
                  marginRight: 15,
                  marginLeft: 15
                }}
              >
                <div
                  style={{
                    color: "#32bfc6",
                    fontSize: 25
                  }}
                >
                  ติดต่อเรา
                </div>
                <div style={styles.inMap}>
                  <div style={{ flex: 1 }}>
                    <PhoneInTalk style={{ fontSize: 30 }} />
                  </div>
                  <div style={{ flex: 5 }}>{tel}</div>
                </div>
                <div style={styles.inMap}>
                  <div style={{ flex: 1 }}>
                    <Print style={{ fontSize: 30 }} />
                  </div>
                  <div style={{ flex: 5 }}>{tel}</div>
                </div>
                <div style={styles.inMap}>
                  <div style={{ flex: 1 }}>
                    <WhereToVote style={{ fontSize: 30 }} />
                  </div>
                  <div style={{ flex: 5, fontSize: 15 }}>{address}</div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <Marker
          onLoad={marker => {
            console.log("marker: ", marker)
          }}
          position={{
            lat,
            lng
          }}
        />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>Loading</div>
}

export default MapBlock
