const def_attribute = {
	id: 0,
	name: "",
	type: 3,
	localization: {
		lang: "en_us",
		name: "New Attribute",
		desc: "This is a new attribute",
		tooltip: "This attribute has not been configured",
		icon: {
			path: "",
			size: {
				x: 16,
				y: 16
			}
		}
	},
	modifiers: [],
	value: {
		amount: 0,
		maxamount: 100,
		minamount: 0,
		gainmult: 1,
		lossmult: 1,
		maxmult: 1,
		minmult: 1
		regen: {
			amount: 1,
			tick: 0.1,
			mult: 1
		}
	}
}

const def_attributetypes = ["Resource", "Stat", "Mastery", "Attribute", "Title"];