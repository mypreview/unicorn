/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const chevronDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.338 15.259a1 1 0 001.518-.01l7.282-8.59a1.002 1.002 0 011.532 1.293l-7.294 8.681a3 3 0 01-4.574.024L2.34 7.958a1.004 1.004 0 011.52-1.312l7.478 8.613z"
		/>
	</SVG>
);

export default chevronDown;
