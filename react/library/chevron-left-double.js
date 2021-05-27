/**
 * Primitives to be used cross-platform.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/primitives/README.md
 */
import { SVG, Path } from '@wordpress/primitives';

const chevronLeftDouble = (
  <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.754 11.147a1 1 0 00-.01 1.518l8.613 7.478a1.004 1.004 0 01-1.312 1.52l-8.699-7.462a3 3 0 01.024-4.573l8.681-7.295a1.002 1.002 0 011.293 1.532l-8.59 7.282zm-6 0a1 1 0 00-.01 1.518l8.613 7.478a1.004 1.004 0 01-1.312 1.52l-8.699-7.462a3 3 0 01.024-4.573l8.681-7.295a1.002 1.002 0 011.293 1.532l-8.59 7.282z"
    />
  </SVG>
);

export default chevronLeftDouble;