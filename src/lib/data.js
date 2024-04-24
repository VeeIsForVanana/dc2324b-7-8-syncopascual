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
    assert('html_url' in json, 'html_url is missing');
    assert('avatar_url' in json, 'avatar_url is missing');

    // Assert that the fields are what we expected
    const { id, login, html_url, avatar_url } = json;
    assert(typeof id === 'number', 'expected string id');
    assert(typeof login === 'string', 'expected string login');

    assert(typeof html_url === 'string', 'expected string html_url');
    assert(URL.canParse(html_url), 'expected url html_url');

    assert(typeof avatar_url === 'string', 'expected string avatar_url');
    assert(URL.canParse(avatar_url), 'expected url avatar_url');

    return { id, login, user: html_url, avatar: avatar_url };
}
