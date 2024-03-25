// This part is worth 10 points

import { expect, test } from '@playwright/test';

export function errorWhen403(response: Response): void | never {
	if (response.status == 403) throw Error("You've probably exceeded the ratelimit, try again later")
}

test.describe('first user page content tests', () => {

	test('first user page username matches link username', async ({ page }) => {
		await page.goto('/');
		const firstLink = await page.getByRole('link').first()
		const username = (await firstLink.textContent())?.split(' - ')[1]
		const firstHREF = await firstLink.getAttribute('href')
		if (firstHREF == undefined) throw Error
		await firstLink.click()
		await page.waitForURL(firstHREF)
		const firstHeader = await page.getByRole('heading').first()
		expect(await firstHeader.textContent()).toBe(username)
	})

	test('first user page avatar matches actual avatar', async ({ page }) => {
		await page.goto('/')
		const firstLink = await page.getByRole('link').first()
		const username = (await firstLink.textContent())?.split(' - ')[1]
		const firstHREF = await firstLink.getAttribute('href')
		if (firstHREF == undefined) throw Error
		await firstLink.click()
		await page.waitForURL(firstHREF)
		const response = await fetch(`https://api.github.com/users/${username}`)
		errorWhen403(response)
		const json = await response.json()
		const imageSRC = await page.getByRole('img').getAttribute('src')
		expect(imageSRC).toBe(json['avatar_url'])
	})
})