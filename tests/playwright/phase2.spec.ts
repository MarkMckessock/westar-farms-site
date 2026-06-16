import { test, expect } from '@playwright/test'

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders hero with headline and tagline', async ({ page }) => {
    const hero = page.getByTestId('section-home')
    await expect(hero).toBeVisible()
    await expect(hero.getByRole('heading', { level: 1 })).toContainText('Westar Farms')
    await expect(hero.getByText(/Live your love of horses/i)).toBeVisible()
  })

  test('hero has correct CTA buttons', async ({ page }) => {
    const hero = page.getByTestId('section-home')
    await expect(hero.getByRole('link', { name: 'View Our Shows' })).toBeVisible()
    await expect(hero.getByRole('link', { name: 'Contact Us' })).toBeVisible()
  })

  test('stat strip renders all three stats', async ({ page }) => {
    const strip = page.getByTestId('stat-strip')
    await expect(strip).toBeVisible()
    await expect(strip.getByText('Est. 1984')).toBeVisible()
    await expect(strip.getByText('3 Show Series')).toBeVisible()
    await expect(strip.getByText('Ottawa Area')).toBeVisible()
  })

  test('no horizontal scroll on mobile hero', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) return
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(scrollWidth).toBeLessThanOrEqual(viewport.width)
  })
})

test.describe('Shows Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/shows')
  })

  test('renders section heading', async ({ page }) => {
    const section = page.getByTestId('section-shows')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('Our Show Series')
  })

  test('three tabs are visible', async ({ page }) => {
    const section = page.getByTestId('section-shows')
    await expect(section.getByTestId('tab-hunter-jumper')).toBeVisible()
    await expect(section.getByTestId('tab-dressage')).toBeVisible()
    await expect(section.getByTestId('tab-development')).toBeVisible()
  })

  test('Hunter Jumper tab shows 3 show cards', async ({ page }) => {
    await page.getByTestId('tab-hunter-jumper').click()
    const section = page.getByTestId('section-shows')
    await expect(section.getByText('Spring Trillium Bronze Show')).toBeVisible()
    await expect(section.getByText("Horse Lovers' Weekend Trillium Bronze Show")).toBeVisible()
    await expect(section.getByText('Derby Day Bronze Show')).toBeVisible()
  })

  test('Dressage tab shows 4 show cards', async ({ page }) => {
    await page.getByTestId('tab-dressage').click()
    const section = page.getByTestId('section-shows')
    await expect(section.getByText('Springfest Dressage Show')).toBeVisible()
    await expect(section.getByText('Summer Dressage Show')).toBeVisible()
    await expect(section.getByText('Summerfest Dressage')).toBeVisible()
    await expect(section.getByText('Summerset Dressage')).toBeVisible()
  })

  test('Development tab shows 6 show cards', async ({ page }) => {
    await page.getByTestId('tab-development').click()
    const section = page.getByTestId('section-shows')
    for (let i = 1; i <= 6; i++) {
      await expect(section.getByText(new RegExp(`Development Show ${i}|Finale`, 'i')).first()).toBeVisible()
    }
  })

  test('Derby Day shows championship indicator', async ({ page }) => {
    await page.getByTestId('tab-dressage').click()
    const section = page.getByTestId('section-shows')
    await expect(section.getByText('Championship Event')).toBeVisible()
  })

  test('tabs switch content without page reload', async ({ page }) => {
    const tabPanel = page.getByRole('tabpanel')
    await page.getByTestId('tab-dressage').click()
    await expect(tabPanel.getByRole('heading', { name: 'Springfest Dressage Show', exact: true })).toBeVisible()
    await page.getByTestId('tab-hunter-jumper').click()
    await expect(tabPanel.getByRole('heading', { name: 'Spring Trillium Bronze Show', exact: true })).toBeVisible()
    await expect(tabPanel.getByRole('heading', { name: 'Springfest Dressage Show', exact: true })).not.toBeVisible()
  })
})

test.describe('Calendar Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/calendar')
  })

  test('renders calendar heading', async ({ page }) => {
    const section = page.getByTestId('section-calendar')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('2026 Show Season')
  })

  test('shows all 5 month groups', async ({ page }) => {
    const section = page.getByTestId('section-calendar')
    for (const month of ['May', 'June', 'July', 'August', 'September']) {
      await expect(section.getByText(month).first()).toBeVisible()
    }
  })

  test('shows series legend', async ({ page }) => {
    const section = page.getByTestId('section-calendar')
    await expect(section.getByText('Hunter Jumper').first()).toBeVisible()
    await expect(section.getByText('Dressage').first()).toBeVisible()
    await expect(section.getByText('Development').first()).toBeVisible()
  })

  test('Derby Day appears in September', async ({ page }) => {
    const section = page.getByTestId('section-calendar')
    await expect(section.getByText('Derby Day Bronze Show')).toBeVisible()
  })
})

test.describe('About Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#/about')
  })

  test('renders about heading', async ({ page }) => {
    const section = page.getByTestId('section-about')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('About Westar Farms')
  })

  test('shows team members', async ({ page }) => {
    const section = page.getByTestId('section-about')
    await expect(section.getByRole('heading', { name: 'Jeff & Bridget McKessock' })).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Kelsey & Dawn Butler' })).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Tricia Turriff' })).toBeVisible()
  })

  test('facilities section renders', async ({ page }) => {
    const section = page.getByTestId('section-facilities')
    await expect(section).toBeVisible()
    await expect(section.getByText(/Our Facility/)).toBeVisible()
    await expect(section.getByText(/40 top-quality ringside/i)).toBeVisible()
  })

  test('show ring schooling section renders', async ({ page }) => {
    const section = page.getByTestId('section-schooling')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Show Ring Schooling' })).toBeVisible()
  })

  test('venue rental section renders', async ({ page }) => {
    const section = page.getByTestId('section-venue-rental')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Venue Rental' })).toBeVisible()
  })
})

test.describe('Mobile layout — Phase 2', () => {
  test('shows section tabs are tappable on mobile', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) return
    await page.goto('/#/shows')
    const dressageTab = page.getByTestId('tab-dressage')
    await expect(dressageTab).toBeVisible()
    await dressageTab.click()
    await expect(page.getByRole('tabpanel').getByRole('heading', { name: 'Springfest Dressage Show', exact: true })).toBeVisible()
  })

  test('calendar rows are readable on mobile without horizontal scroll', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) return
    await page.goto('/#/calendar')
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(scrollWidth).toBeLessThanOrEqual(viewport.width)
  })
})
