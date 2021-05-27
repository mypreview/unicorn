/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const chevronRightDouble = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.25 11.147a1 1 0 01.008 1.518l-8.612 7.478a1.004 1.004 0 001.312 1.52l8.698-7.462a3 3 0 00-.023-4.573l-8.682-7.295A1.002 1.002 0 009.66 3.865l8.59 7.282zm-6 0a1 1 0 01.008 1.518l-8.612 7.478a1.004 1.004 0 001.312 1.52l8.698-7.462a3 3 0 00-.023-4.573L4.951 2.333A1.002 1.002 0 003.66 3.865l8.59 7.282z"
    />
  </SVG>
);

export default chevronRightDouble;