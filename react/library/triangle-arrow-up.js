/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const triangleArrowUp = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M19.933 16.429l-7.147-8.492a1.03 1.03 0 00-1.576 0L4.062 16.43h15.871zm-5.57-9.819a3.09 3.09 0 00-4.73 0l-7.147 8.492c-1.128 1.34-.176 3.387 1.576 3.387h15.871c1.752 0 2.705-2.047 1.577-3.387L14.362 6.61z"
		/>
	</SVG>
);

export default triangleArrowUp;
