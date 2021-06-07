const Masks = require('./masks');

var maskKeys = Object.keys(Masks);

class MaskResolver {
	static resolve(type) {
		let maskKey = maskKeys.find(m => {
			var handler = Masks[m];

			return handler && handler.getType && handler.getType() === type;
		});

		let handler = Masks[maskKey];

		if (!handler) {
			throw new Error('Mask type not supported.');
		}

		return new handler();
	}
}

module.exports = MaskResolver;