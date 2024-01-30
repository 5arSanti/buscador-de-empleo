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

    const handleInputChange = (value, name) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubscribeClick = async () => {
        context.setLoading(true);
        const startTime = performance.now();

        try {
            const response = await fetch(`${context.apiUri}/subscription/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if (response.status == 200) {
                context.handleNotifications("ok", "Se suscribió Correctamente")
            } else {
                throw new Error;
            }
        } 
        catch (err) {
            context.handleNotifications("error", err.message)
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

                <TextInputCard name="Nombre" onInputChange={handleInputChange} />
                <TextInputCard name="Correo" type="email" onInputChange={handleInputChange} />
                <TextInputCard name="Numero" type="number" onInputChange={handleInputChange} />

                <ButtonCard text="Suscribirse" onClick={handleSubscribeClick} />
            </FiltersWrapper>

            <FiltersWrapper
                flexDirection="column"
                padding={25}
            >
                <SubTitle 
                    text={"Darse de baja de la BUE"}
                />
                <TextInputCard name={"Correo"}/>
                <ButtonCard text="Darse de Baja"/>

            </FiltersWrapper>
        </div>
    );
}

export { SubsFormContainer };