import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";

const Map = () => {
    const geoUrl = "/colombia.geo.json";

    const center = [-74.297333, 4.570868];

    const projectionConfig = {
        scale: 2000,
        center: center
    };


    return(
        <div className="map-container">
            <ComposableMap
                projectionConfig={projectionConfig}
                projection="geoMercator"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) => (
                    geographies.map((geo) => (
                        <Geography
                            key={geo.properties.ID} // Asegúrate de usar una propiedad única para la clave
                            geography={geo}
                        />
                    ))
                    )}
                </Geographies>
            </ComposableMap>
        </div>
    );
}

export { Map };