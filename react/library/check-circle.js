/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const checkCircle = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-7.98-5.038a1 1 0 111.619 1.176l-6.467 8.9a1 1 0 01-1.397.222l-3.194-2.32a1 1 0 011.174-1.619l2.389 1.73 5.877-8.089z"
		/>
	</SVG>
);

export default checkCircle;
