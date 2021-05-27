/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const xCircle = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm2 0c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM7.405 8.817a1 1 0 011.414-1.414l3.183 3.183 3.178-3.179a1 1 0 111.415 1.414L13.416 12l3.181 3.181a1 1 0 01-1.414 1.414l-3.181-3.18-3.185 3.184a1 1 0 01-1.415-1.414L10.588 12 7.405 8.817z"
		/>
	</SVG>
);

export default xCircle;
