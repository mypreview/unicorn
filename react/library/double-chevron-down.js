/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const doubleChevronDown = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.856 12.25a1 1 0 01-1.518.009L3.861 3.646A1.004 1.004 0 002.34 4.958l7.462 8.699a3 3 0 004.574-.024l7.294-8.681a1.002 1.002 0 00-1.532-1.293l-7.282 8.59zm0 6a1 1 0 01-1.518.009L3.861 9.646a1.004 1.004 0 00-1.521 1.312l7.462 8.699a3 3 0 004.574-.024l7.294-8.681a1.002 1.002 0 00-1.532-1.293l-7.282 8.59z"
    />
  </SVG>
);

export default doubleChevronDown;