// This part is worth 35 points

import { expect, test } from '@playwright/test';

export function errorWhen403(response: Response): void | never {
	if (response.status == 403) throw Error("You've probably exceeded the ratelimit, try again later")
}

test.describe('arbitrary user page content tests', () => {

	const username = 'VeeIsForVanana'

	test(`${username}'s page has first header matching username`, async ({ page }) => {
		await page.goto(`/${username}`)
		expect(await page.getByRole('heading').first().textContent()).toBe(username)
	})

	test(`${username}'s page has an image matching their avatar`, async ({ page }) => {
		await page.goto(`/${username}`)
		const response = await fetch(`https://api.github.com/users/${username}`)
		errorWhen403(response)
		const json = await response.json()
		const imageSRC = await page.getByRole('img').getAttribute('src')
		expect(imageSRC).toBe(json['avatar_url'])
	})

})