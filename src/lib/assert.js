/**
 * Helper function for asserting that a value is true.The program crashes
 * if the assertion fails (which is good because that's likely a bug!).
 *
 * ```js
 * assert(typeof true === 'boolean', 'expected true to be boolean');
 * assert(typeof thing === 'string', 'expected string');
 * assert(typeof false === 'number', 'uh oh'); // should crash!
 * ```
 *
 * @param {unknown} condition Any boolean condition that we're asserting.
 * @param {string} msg An error message should the {@linkcode condition} fail.
 * @returns {asserts condition}
 */
export function assert(condition, msg) {
    if (!condition) throw new Error(msg);
}
