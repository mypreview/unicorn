/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const check = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M20.442 4.191a1 1 0 00-1.397.221L9.467 17.595l-4.73-3.427a1 1 0 00-1.174 1.62L9.1 19.802a1 1 0 001.397-.221L20.663 5.588a1 1 0 00-.221-1.397z"
		/>
	</SVG>
);

export default check;
