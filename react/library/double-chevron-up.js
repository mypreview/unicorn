/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const doubleChevronUp = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.856 5.754a1 1 0 00-1.518-.01l-7.477 8.614a1.004 1.004 0 01-1.521-1.313l7.462-8.698a3 3 0 014.574.023l7.294 8.682a1.002 1.002 0 01-1.532 1.293l-7.282-8.591zm0 6a1 1 0 00-1.518-.01l-7.477 8.614a1.004 1.004 0 01-1.521-1.313l7.462-8.698a3 3 0 014.574.023l7.294 8.682a1.002 1.002 0 01-1.532 1.293l-7.282-8.591z"
    />
  </SVG>
);

export default doubleChevronUp;