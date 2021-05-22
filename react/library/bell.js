/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const bell = (
	<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<Path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M13.5 2.199c1.11.296 2.2.921 3.226 1.877 3.14 2.924 3.981 10.715 4.2 14.025.06.9-.525 1.706-1.399 1.928a31.68 31.68 0 01-4.53.82 3 3 0 11-5.991-.021 34.858 34.858 0 01-4.51-.81 1.861 1.861 0 01-1.42-1.936C3.295 14.76 4.14 6.995 7.273 4.076 8.3 3.12 9.39 2.495 10.5 2.2v-.7a1.5 1.5 0 013 0v.699zm-1-.177V1.5a.5.5 0 00-1 0v.522c.333-.03.667-.03 1 0zM11 20.978V21a1 1 0 102 0v-.014a27.79 27.79 0 01-2-.008zM8.637 5.54C9.832 4.426 10.985 4 12 4c1.015 0 2.168.426 3.363 1.54 1.094 1.018 1.988 3.162 2.61 5.854.581 2.518.839 5.109.95 6.725-4.698 1.175-8.89 1.18-13.844-.017.111-1.621.37-4.21.952-6.723.622-2.685 1.515-4.823 2.606-5.84z"
		/>
	</SVG>
);

export default bell;