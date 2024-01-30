import React from "react";
import { ButtonCard } from "../ButtonCard";
import { FiltersWrapper } from "../FiltersWrapper";
import { SubTitle } from "../SubTitle";
import { TextInputCard } from "../TextInputCard";
import { AppContext } from "../../../Context";

const SubsFormContainer = () => {
    const context = React.useContext(AppContext);

    const [formData, setFormData] = React.useState({
        Nombre: '',
        Correo: '',
        Numero: ''
    });

    const handleSubscribeInputChange = (value, name) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleDeleteInputChange = (value, name) => {
        setFormData({
            [name]: value
        });
    };

    const handleSubscribeClick = async (endpoint, form) => {
        context.setLoading(true);
        const startTime = performance.now();

        try {
            const response = await fetch(`${context.apiUri}/subscription/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })

            const data = await response.json();

            if (response.status == 200) {
                context.handleNotifications("ok", data.message)
            } else {
                context.handleNotifications("err", data.message)
            }
        } 
        catch (err) {
            context.handleNotifications("err", err)
        } 
        finally {
            const endTime = performance.now();
            const duration = (endTime - startTime).toFixed(1);

            context.handleNotifications("time", duration)
            context.setLoading(false);
        }
    }

    return(
        <div className="filters-container">
            <FiltersWrapper
                flexDirection="column"
                padding={25}
            >
                <SubTitle
                    text={"Suscribirse a la BUE"}
                />

                <TextInputCard name="Nombre" onInputChange={handleSubscribeInputChange} />
                <TextInputCard name="Correo" type="email" onInputChange={handleSubscribeInputChange} />
                <TextInputCard name="Numero" necessary={false} type="number" onInputChange={handleSubscribeInputChange} />
                
                <div className="info-container">
                    <p>Los campos con (*) son obligatorios.</p>
                </div>
                <ButtonCard text="Suscribirse" onClick={() => handleSubscribeClick("add", formData)} />
            </FiltersWrapper>

            <FiltersWrapper
                flexDirection="column"
                padding={25}
            >
                <SubTitle 
                    text={"Darse de baja de la BUE"}
                />

                <TextInputCard name={"Correo"} type="email" onInputChange={handleDeleteInputChange}/>
                <div className="info-container">
                    <p>Los campos con (*) son obligatorios.</p>
                </div>
                <ButtonCard text="Darse de Baja" onClick={() => handleSubscribeClick("delete", formData)}/>

            </FiltersWrapper>
        </div>
    );
}

export { SubsFormContainer };