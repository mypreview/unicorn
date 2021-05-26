/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const arrowDown = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13 21.169l7.138-8.213a1.002 1.002 0 011.532 1.292L14.2 22.93c-1.19 1.417-3.193 1.428-4.398.023L2.34 14.255a1.004 1.004 0 011.52-1.313L11 21.166V1a1 1 0 112 0v20.169z"
		/>
	</SVG>
);

export default arrowDown;
