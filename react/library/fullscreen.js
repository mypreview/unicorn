/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const fullscreen = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16 2V0h5a3 3 0 013 3v5h-2V3a1 1 0 00-1-1h-5zm0 20v2h5a3 3 0 003-3v-5h-2v5a1 1 0 01-1 1h-5zM8 0v2H3a1 1 0 00-1 1v5H0V3a3 3 0 013-3h5zm0 22v2H2a2 2 0 01-2-2v-6h2v5a1 1 0 001 1h5z"
		/>
	</SVG>
);

export default fullscreen;
