const filterExperienceCondition = (value) => {
	if (!value) {
		return "";
	}

	return `AND MESES_EXPERIENCIA_CARGO ${value}`;
}

module.exports = { filterExperienceCondition };