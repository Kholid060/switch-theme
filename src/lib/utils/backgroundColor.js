import alphaColorVariable from '../../utils/alphaColorVariable';

export default function (
	colors, 
	{ addUtilities, variants, e },
	isColorsVariant,
) {
	const utilities = Object.entries(colors).map(([modifier, color]) => {
		const property = alphaColorVariable({
			modifier,
			color,
			prefix: isColorsVariant ? 'color-' : 'bg-',
			property: 'background-color',
			variable: '--bg-opacity',
		});

		return {
			[`.bg-${modifier}`]: property,
		};
	});

	addUtilities(utilities, variants('backgroundColor'));
};