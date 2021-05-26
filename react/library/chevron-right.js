/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const chevronRight = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M15.258 12.665a1 1 0 00-.009-1.518L6.66 3.865a1.002 1.002 0 011.29-1.532l8.682 7.295a3 3 0 01.023 4.573l-8.698 7.462a1.004 1.004 0 01-1.312-1.52l8.612-7.478z"
		/>
	</SVG>
);

export default chevronRight;
