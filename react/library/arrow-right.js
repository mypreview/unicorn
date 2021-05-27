/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const arrowRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M21.17 12.999l-8.213 7.138a1.002 1.002 0 001.293 1.532l8.681-7.47c1.418-1.191 1.429-3.193.024-4.399l-8.699-7.46a1.004 1.004 0 00-1.312 1.52L21.167 11H1a1 1 0 100 2h20.17z"
		/>
	</SVG>
);

export default arrowRight;
