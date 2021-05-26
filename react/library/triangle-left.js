/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const triangleLeft = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16.429 4.064l-8.492 7.148a1.03 1.03 0 000 1.576l8.492 7.148V4.064zM6.61 9.635a3.09 3.09 0 000 4.73l8.492 7.147c1.34 1.128 3.387.175 3.387-1.576V4.064c0-1.751-2.047-2.704-3.387-1.576L6.61 9.635z"
		/>
	</SVG>
);

export default triangleLeft;
