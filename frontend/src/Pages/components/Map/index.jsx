import React from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";
import { AppContext } from "../../../Context";
import { ToolTipMap } from "../ToolTipMap";


const Map = () => {
    const context = React.useContext(AppContext);

    const geoUrl = "/colombia.geo.json";
    const sanAndresURl = "/san-andres.geo.json";

    const sanAndresScale = 280000;

    const projectionConfig = {
        scale: 2900,
        center: [-74.297333, 4.570868],
    };
    const sanAndresConfig = {
        center: [-81.70639, 12.58317],
        scale: sanAndresScale,
    }
    const providenciaConfig = {
        center: [-81.37472222, 13.34888889],
        scale: sanAndresScale,
    }

    const departmentColors = {
        "ANTIOQUIA": "#00FF74",
        "ATLANTICO": "#00D8FF",
        "SANTAFE DE BOGOTA D.C": "#F02B76",
        "BOLIVAR": "#F0B12B",
        "BOYACA": "#BF4BDC",
        "CALDAS": "#AF22CE",
        "CAQUETA": "#23FF00",
        "CAUCA": "#4BBFDC",
        "CESAR": "#C820A7",
        "CORDOBA": "#FF0000",
        "CUNDINAMARCA": "#00FFAE",
        "CHOCO": "#4F1FE4",
        "HUILA": "#7800FF",
        "LA GUAJIRA": "#FFFF00",
        "MAGDALENA": "#055B2F",
        "META": "#438161",
        "NARIÑO": "#381265",
        "NORTE DE SANTANDER": "#AC3F6C",
        "QUINDIO": "#46796D",
        "RISARALDA": "#96ABA6",
        "SANTANDER": "#464C63",
        "SUCRE": "#6E6D2A",
        "TOLIMA": "#E1652C",
        "VALLE DEL CAUCA": "#6678DA",
        "ARAUCA": "#FFE400",
        "CASANARE": "#6BEFE7",
        "PUTUMAYO": "#ADAD38",
        "AMAZONAS": "#76E6A4",
        "GUAINIA": "#001F93",
        "GUAVIARE": "#6F2E78",
        "VAUPES": "#B03804",
        "VICHADA": "#76B8AD",
        "ARCHIPIELAGO DE SAN ANDRES PROVIDENCIA Y SANTA CATALINA": "#F312E2",
    }



    return(
        <div className="map-container">                   
            <ToolTipMap content={context.tooltipContent} />

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
                            key={geo.properties.ID}
                            geography={geo}
                            fill={departmentColors[geo.properties.NOMBRE_DPT]}
                            stroke="#FFF"
                            onMouseEnter={(event) => {context.handleMapMouseEnter(event, geo)}}
                            onMouseLeave={context.handleMapMouseLeave}
                        />
                    ))
                    )}
                </Geographies>
            </ComposableMap>


            <div className="san-andres-container">
                <ComposableMap
                    projectionConfig={sanAndresConfig}
                    projection="geoMercator"
                    style={{
                        width: "50%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                >
                    <Geographies geography={sanAndresURl}>
                        {({ geographies }) => (
                        geographies.map((geo) => (
                            <Geography
                                key={geo.properties.ID}
                                geography={geo}
                                fill={"#F312E2"}
                                stroke="#FFF"
                                onMouseEnter={(event) => {context.handleMapMouseEnter(event, geo)}}
                                onMouseLeave={context.handleMapMouseLeave}
                            />
                        ))
                        )}
                    </Geographies>
                </ComposableMap>
                <ComposableMap
                    projectionConfig={providenciaConfig}
                    projection="geoMercator"
                    style={{
                        width: "50%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                >
                    <Geographies geography={sanAndresURl}>
                        {({ geographies }) => (
                        geographies.map((geo) => (
                            <Geography
                                key={geo.properties.ID}
                                geography={geo}
                                fill={"#F312E2"}
                                stroke="#FFF"
                                onMouseEnter={(event) => {context.handleMapMouseEnter(event, geo)}}
                                onMouseLeave={context.handleMapMouseLeave}
                            />
                        ))
                        )}
                    </Geographies>
                </ComposableMap>
            </div>
        </div>
    );
}

export { Map };