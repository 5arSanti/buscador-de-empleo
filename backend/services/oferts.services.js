const boom = require("@hapi/boom");

class OfertsServices {
	constructor() {
		this.oferts = [];
		this.generate();
	}

    async generate() {
        for (let i = 0; i < 100; i++) {
            this.oferts.push({
                id: i,
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
            }, 1000)
        });
    }
    async findOne(id) {
        const ofert = this.oferts.find(item => item.id == id);
        if (!ofert) {
            throw boom.notFound("Ofert not Found");
        }
        else {
            return ofert;
        }
    }
}


module.exports = OfertsServices;