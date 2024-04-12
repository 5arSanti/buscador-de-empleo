const orderArray = (array, orderArray) => {
	const newArray = array.sort((a, b) => {
		return orderArray.indexOf(a) - orderArray.indexOf(b);
	});

	return newArray;
}

module.exports = {
	orderArray
}