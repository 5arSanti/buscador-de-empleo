const handleColorsByFilters = (type = activeButton) => {
    setActiveButton(type);
    const root = document.documentElement;        

    if(activeHighContrast) {
        root.style.setProperty("--navbar-color", "#000000");
        root.style.setProperty("--navbar-responsive-color", "rgba(0, 0, 0, 0.75)");
        root.style.setProperty("--main-body-color", "#737373");
        root.style.setProperty('--main-title-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--all-info-container-color', '#353535');
        root.style.setProperty('--input-and-info-container-color', '#000000');
        root.style.setProperty('--municipios-and-result-border-clicked', '#737373');
        root.style.setProperty("--tool-tip-map-text-color", "#FFFFFF");
        root.style.setProperty("--confirm-color", "#737373");
        root.style.setProperty("--cancel-color", "#737373");
        root.style.setProperty("--time-color", "#737373");
        root.style.setProperty("--result-subtitle-card", "#000000");
        root.style.setProperty("--gov-accesibility-card", "#000000");
        return;
    }

    switch (type) {
        case 1:
            root.style.setProperty("--navbar-color", "#3366cc");
            root.style.setProperty("--navbar-responsive-color", "rgba(51, 102, 204, 0.75)");
            root.style.setProperty("--main-body-color", "#F6F8F9");
            root.style.setProperty('--main-title-color', '#004884');
            root.style.setProperty('--all-info-container-color', '#E6EFFD');
            root.style.setProperty('--input-and-info-container-color', '#81ABFF');
            root.style.setProperty('--municipios-and-result-border-clicked', '#3366CC');
            root.style.setProperty("--tool-tip-map-text-color", "#737373");
            root.style.setProperty("--confirm-color", "#069169");
            root.style.setProperty("--cancel-color", "#D31F3F");
            root.style.setProperty("--time-color", "#3366cc");
            root.style.setProperty("--result-subtitle-card", "#3366CC");
            root.style.setProperty("--gov-accesibility-card", "#004884");
        break;
        case 2:
            root.style.setProperty("--navbar-color", "#9C0000");
            root.style.setProperty("--navbar-responsive-color", "rgba(255, 14, 14, 0.75)");
            root.style.setProperty("--main-body-color", "#FFEEEE");
            root.style.setProperty('--main-title-color', 'rgb(142, 0, 0)');
            root.style.setProperty('--all-info-container-color', '#FFDCDC');
            root.style.setProperty('--input-and-info-container-color', '#E16A6A');
            root.style.setProperty('--municipios-and-result-border-clicked', '#DC5959');
            root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
            root.style.setProperty("--confirm-color", "#74C59A");
            root.style.setProperty("--cancel-color", "#DA4F6A");
            root.style.setProperty("--time-color", "#4172FF");
            root.style.setProperty("--result-subtitle-card", "rgb(142, 0, 0)");
        break;
        case 3:
            root.style.setProperty("--navbar-color", "#009C5F");
            root.style.setProperty("--navbar-responsive-color", "rgba(35, 223, 129, 0.75)");
            root.style.setProperty("--main-body-color", "#EEFFF5");
            root.style.setProperty('--main-title-color', 'rgb(0, 105, 77)');
            root.style.setProperty('--all-info-container-color', '#DCFFEC');
            root.style.setProperty('--input-and-info-container-color', '#6AE197');
            root.style.setProperty('--municipios-and-result-border-clicked', '#4BC472');
            root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
            root.style.setProperty("--confirm-color", "#74C59A");
            root.style.setProperty("--cancel-color", "#DA4F6A");
            root.style.setProperty("--time-color", "#4172FF");
            root.style.setProperty("--result-subtitle-card", "rgb(0, 105, 77)");
        break;
        case 4:
            root.style.setProperty("--navbar-color", "#9C7B00");
            root.style.setProperty("--navbar-responsive-color", "rgba(255, 223, 65, 0.75)");
            root.style.setProperty("--main-body-color", "#FFFCEE");
            root.style.setProperty('--main-title-color', 'rgb(105, 77, 0)');
            root.style.setProperty('--all-info-container-color', '#FFF8DC');
            root.style.setProperty('--input-and-info-container-color', '#E1CA6A');
            root.style.setProperty('--municipios-and-result-border-clicked', '#C4A34B');
            root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
            root.style.setProperty("--confirm-color", "#74C59A");
            root.style.setProperty("--cancel-color", "#DA4F6A");
            root.style.setProperty("--time-color", "#4172FF");
            root.style.setProperty("--result-subtitle-card", "rgb(105, 77, 0)");
        break;
        case 5:
            root.style.setProperty("--navbar-color", "#23009C");
            root.style.setProperty("--navbar-responsive-color", "rgba(111, 65, 255, 0.75)");
            root.style.setProperty("--main-body-color", "#F2EEFF");
            root.style.setProperty('--main-title-color', 'rgb(22, 0, 105)');
            root.style.setProperty('--all-info-container-color', '#E3DCFF');
            root.style.setProperty('--input-and-info-container-color', '#816AE1');
            root.style.setProperty('--municipios-and-result-border-clicked', '#684BC4');
            root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
            root.style.setProperty("--confirm-color", "#74C59A");
            root.style.setProperty("--cancel-color", "#DA4F6A");
            root.style.setProperty("--time-color", "#4172FF");
            root.style.setProperty("--result-subtitle-card", "rgb(22, 0, 105)");
        break;
        case 6:
            root.style.setProperty("--navbar-color", "#9C0055");
            root.style.setProperty("--navbar-responsive-color", "rgba(255, 65, 166, 0.75)");
            root.style.setProperty("--main-body-color", "#FFEEF6");
            root.style.setProperty('--main-title-color', 'rgb(142, 0, 73)');
            root.style.setProperty('--all-info-container-color', '#FFDCEE');
            root.style.setProperty('--input-and-info-container-color', '#E16AA9');
            root.style.setProperty('--municipios-and-result-border-clicked', '#C44B8B');
            root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B");
            root.style.setProperty("--confirm-color", "#74C59A");
            root.style.setProperty("--cancel-color", "#DA4F6A");
            root.style.setProperty("--time-color", "#4172FF");
            root.style.setProperty("--result-subtitle-card", "rgb(142, 0, 73)");
        break;    
        default:
            root.style.setProperty("--navbar-color", "#00589c");
            root.style.setProperty("--navbar-responsive-color", "rgba(65, 114, 255, 0.75)");
            root.style.setProperty("--main-body-color", "#EEFAFF");
            root.style.setProperty('--main-title-color', 'rgb(0, 105, 142)');
            root.style.setProperty('--all-info-container-color', '#DCF6FF');
            root.style.setProperty('--input-and-info-container-color', '#6ABFE1');
            root.style.setProperty('--municipios-and-result-border-clicked', '#5D59DC');
            root.style.setProperty("--tool-tip-map-text-color", "#7B7B7B")
            root.style.setProperty("--confirm-color", "#74C59A");
            root.style.setProperty("--cancel-color", "#DA4F6A");
            root.style.setProperty("--time-color", "#4172FF");
            root.style.setProperty("--result-subtitle-card", "rgb(0, 105, 142)");
        break;
    }
}