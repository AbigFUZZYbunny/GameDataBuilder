const def_attributetypes = ["Resource", "Stat", "Mastery", "Attribute", "Title"];
const def_rarity = ["Junk", "Common", "Uncommon", "Rare", "];
const def_attribute = {
	id: 0,
	name: "",
	type: 3,
	rarity: 0,
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
	modifiers: {
		1: def_modifier
	},
	value: {
		amount: 0,
		maxamount: 100,
		minamount: 0,
		multiplier:{
			gain: 1,
			loss: 1,
			max: 1,
			min: 1
		},
		regen: {
			amount: 1,
			tick: 0.1,
			multiplier: {
				combat: 0,
				walk: 0.5,
				run: -1,
				swim: -0.2,
				sprint: -2,
				crouch: 0.7,
				prone: 1,
				eating: 0,
				sleeping: 2,
				sitting: 1
			}
		}
	}
},

const def_modifier = {
	id: 0,
	name: "",
	rarity: 0,
	localization: {
		lang: "en_us",
		name: "New Modifier",
		desc: "This is a new modifier",
		tooltip: "This modifier has not been configured",
		icon: {
			path: "",
			size: {
				x: 16,
				y: 16
			}
		}
	},
	recurring: false,
	effects: []
}