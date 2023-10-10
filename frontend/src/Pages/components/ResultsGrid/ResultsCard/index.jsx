import "./styles.css";

const ResultsCard = () => {
    return(
        <div className="results-card-container">
            <img src="/icon.png" alt="Colsubsidio" />
            <div className="results-card-main-info">
                <p>Colsubsidio</p>
                <p>$10.000.000 - $20.000.000</p>
                <p>Bogotá</p>
            </div>
            <div className="results-card-secondary-info">
                <p>Auxiliar administrativo</p>
                <p className="results-card-secondary-description"> Realizar actividades de archivo, control de correspondencia, gestiÃ³n de cartera, control de proveedores y generar informes  1. Atender de manera Ã¡gil, amable y eficaz las llamadas telefÃ³nicas de clientes y proveedores. 2. Brindar informaciÃ³n a clientes potenciales 3. Realiza seguimiento a los pagos de proveedores de bienes y servicios para su cancelaciÃ³n oportuna 4. Hacer gestiÃ³n oportuna y eficaz de cartera, comunicÃ¡ndose con los clientes que presenten mora en los pagos acordados con la FundaciÃ³n y generar compromisos razonables de pago acordes con las polÃ­ticas de cartera, los medios y directrices brindadas. 5. Generar informes detallados de estado de cartera por edades 6. Realizar informes periÃ³dicos de la gestiÃ³n de cartera siguiendo los lineamientos de Funcicolombia 7. Remitir la informaciÃ³n de pago por bienes y servicios y facturaciÃ³n de pagos de los clientes a la DirecciÃ³n ejecutiva de manera completa, confiable y oportuna  TÃ©c</p>
            </div>
            <div className="results-card-complementary-info">
                <div>
                    <p className="mini-title">Codigo</p>
                    <p>1111241243-41</p>
                </div>
                <div>
                    <p className="mini-title">Publicacion</p>
                    <p>9/10/2023</p>
                </div>
            </div>
        </div>
    );
}

export { ResultsCard };