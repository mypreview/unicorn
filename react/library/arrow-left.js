/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const arrowLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M2.833 12.999l8.213 7.138a1.002 1.002 0 01-1.293 1.532l-8.681-7.47C-.346 13.008-.357 11.006 1.048 9.8l8.699-7.46a1.004 1.004 0 011.312 1.52L2.836 11H23a1 1 0 110 2H2.833z"
		/>
	</SVG>
);

export default arrowLeft;
