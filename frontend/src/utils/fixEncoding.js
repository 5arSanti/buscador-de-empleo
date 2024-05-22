const fixEncoding = (str) => {
    try {
        return decodeURIComponent(escape(str));
    } catch (err) {
        return str;
    }
}

let encodedText = "TÃ©cnico de mantenimiento";
let fixedText = fixEncoding(encodedText);

console.log(fixedText); 

export { fixEncoding }