import { assert } from '$lib/assert';

/**
 * Validate the user object from the GitHub REST API.
 *
 * ```js
 * const response = await fetch('/api');
 * const json = await response.json(); // unsanitized JSON object
 * const sanitized = jsonToUser(json); // sanitized!
 * ```
 *
 * @param {unknown} json
 */
export function jsonToUser(json) {
    // Is this even JSON to be begin with?
    assert(typeof json === 'object', 'expected json object');
    assert(json !== null, 'expected non-null json object');

    // Check the properties inside the JSON
    assert('id' in json, 'id is missing');
    assert('login' in json, 'login is missing');
    assert('user_url' in json, 'user_url is missing');
    assert('avatar_url' in json, 'avatar_url is missing');

    // Assert that the fields are what we expected
    const { id, login, user_url, avatar_url } = json;
    assert(typeof id === 'string', 'expected string id');
    assert(typeof login === 'string', 'expected string login');
    assert(typeof user_url === 'string', 'expected url user_url');
    assert(typeof avatar_url === 'string', 'expected url avatar_url');
    return { id, login, user: new URL(user_url), avatar: new URL(avatar_url) };
}
