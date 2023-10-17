class OfertsServices {
	constructor() {
		this.oferts = [];
		this.generate();
	}

    async generate() {
        for (let i = 0; i < 100; i++) {
            this.oferts.push({
                id: `${i}`,
                name: `Name ${i}`,
                price: i * 10,
                image: `placeholder ${i}`,
            })
        }
    }


    async find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.oferts);
            }, 5000)
        });
    }
    async findOne(id) {
        return this.oferts.find(item => item.id === id);
    }
}


module.exports = OfertsServices;