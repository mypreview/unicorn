/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const fullscreenExit = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M24 6v2h-5a3 3 0 01-3-3V0h2v5a1 1 0 001 1h5zm0 12v-2h-5a3 3 0 00-3 3v5h2v-5a1 1 0 011-1h5zM0 8V6h5a1 1 0 001-1V0h2v5a3 3 0 01-3 3H0zm0 10v-2h6a2 2 0 012 2v6H6v-5a1 1 0 00-1-1H0z"
		/>
	</SVG>
);

export default fullscreenExit;
