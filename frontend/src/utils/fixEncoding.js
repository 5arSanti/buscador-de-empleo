const fixEncoding = (str) => {
    try {
        return decodeURIComponent(escape(str));
    } catch (err) {
        return str;
    }
}

export { fixEncoding }