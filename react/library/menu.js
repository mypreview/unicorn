/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const menu = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3 4a1 1 0 000 2h18a1 1 0 100-2H3zm-1 8a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 7a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
		/>
	</SVG>
);

export default menu;
