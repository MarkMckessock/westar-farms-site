import { test, expect } from '@playwright/test'

test.describe('News Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders section heading', async ({ page }) => {
    const section = page.getByTestId('section-news')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('News')
  })

  test('three news tabs are present', async ({ page }) => {
    const section = page.getByTestId('section-news')
    await expect(section.getByTestId('news-tab-upcoming')).toBeVisible()
    await expect(section.getByTestId('news-tab-clinics')).toBeVisible()
    await expect(section.getByTestId('news-tab-results')).toBeVisible()
  })

  test('Upcoming tab shows news cards', async ({ page }) => {
    const section = page.getByTestId('section-news')
    await section.getByTestId('news-tab-upcoming').click()
    await expect(section.getByRole('article').first()).toBeVisible()
    await expect(section.getByText('2026 Show Season Now Open')).toBeVisible()
  })

  test('Clinics tab renders', async ({ page }) => {
    const section = page.getByTestId('section-news')
    await section.getByTestId('news-tab-clinics').click()
    await expect(section.getByRole('article').first()).toBeVisible()
    await expect(section.getByText('Clinic Schedule Coming Soon')).toBeVisible()
  })

  test('Results tab renders', async ({ page }) => {
    const section = page.getByTestId('section-news')
    await section.getByTestId('news-tab-results').click()
    await expect(section.getByRole('article').first()).toBeVisible()
    await expect(section.getByRole('heading', { name: /2025 Season Wrap/i })).toBeVisible()
  })

  test('tabs switch content', async ({ page }) => {
    const section = page.getByTestId('section-news')
    await section.getByTestId('news-tab-results').click()
    await expect(section.getByRole('article').first()).toBeVisible()
    await section.getByTestId('news-tab-upcoming').click()
    await expect(section.getByText('2026 Show Season Now Open')).toBeVisible()
  })
})

test.describe('Partners Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders section heading', async ({ page }) => {
    const section = page.getByTestId('section-partners')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('Partners')
  })

  test('sponsors grid renders with Vision Saddlery', async ({ page }) => {
    const sponsors = page.getByTestId('section-sponsors')
    await expect(sponsors).toBeVisible()
    await expect(sponsors.getByText('Vision Saddlery')).toBeVisible()
  })

  test('how to sponsor section renders', async ({ page }) => {
    const section = page.getByTestId('section-how-to-sponsor')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { name: 'How to Sponsor' })).toBeVisible()
    await expect(section.getByRole('link', { name: /Inquire About Sponsoring/i })).toBeVisible()
  })

  test('vendor opportunities section renders', async ({ page }) => {
    const section = page.getByTestId('section-vendor-opportunities')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { name: 'Vendor Opportunities' })).toBeVisible()
  })

  test('vendors section renders', async ({ page }) => {
    await expect(page.getByTestId('section-vendors')).toBeVisible()
  })
})

test.describe('Competitor Resources Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders section heading', async ({ page }) => {
    const section = page.getByTestId('section-competitor-resources')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('Competitor Resources')
  })

  test('shows all 4 prize list cards', async ({ page }) => {
    const section = page.getByTestId('section-competitor-resources')
    await expect(section.getByText('Trillium Bronze Prize List', { exact: true })).toBeVisible()
    await expect(section.getByText('Dressage Series Prize List', { exact: true })).toBeVisible()
    await expect(section.getByText('ESD Dressage Series Prize List', { exact: true })).toBeVisible()
    await expect(section.getByText('Development Shows Prize List', { exact: true })).toBeVisible()
  })

  test('shows all 5 sport associations', async ({ page }) => {
    const section = page.getByTestId('section-competitor-resources')
    for (const name of ['Equestrian Canada', 'Ontario Equestrian', 'Trillium Hunter Jumper Association', 'Ontario Dressage', 'Ottawa Area Dressage Group']) {
      await expect(section.getByText(name)).toBeVisible()
    }
  })

  test('membership requirements table renders with correct rows', async ({ page }) => {
    const table = page.getByTestId('membership-table')
    await expect(table).toBeVisible()
    for (const show of ['Trillium', 'Bronze', 'Dressage Gold', 'ESD', 'Development']) {
      await expect(table.getByText(show).first()).toBeVisible()
    }
  })

  test('membership table has horizontal scroll on mobile', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) return
    // Table should be inside overflow-x-auto container — body should not scroll horizontally
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(scrollWidth).toBeLessThanOrEqual(viewport.width)
  })

  test('resource pills are visible', async ({ page }) => {
    const section = page.getByTestId('section-competitor-resources')
    await expect(section.getByText('Site Map')).toBeVisible()
    await expect(section.getByText('EC Safe Sport')).toBeVisible()
    await expect(section.getByText('Family Guide to Development Shows')).toBeVisible()
  })
})

test.describe('Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('renders section heading', async ({ page }) => {
    const section = page.getByTestId('section-contact')
    await expect(section).toBeVisible()
    await expect(section.getByRole('heading', { level: 2 })).toContainText('Get in Touch')
  })

  test('contact form has all required fields', async ({ page }) => {
    const form = page.getByTestId('contact-form')
    await expect(form.getByLabel(/name/i)).toBeVisible()
    await expect(form.getByLabel(/email/i)).toBeVisible()
    await expect(form.getByLabel(/phone/i)).toBeVisible()
    await expect(form.getByLabel(/subject/i)).toBeVisible()
    await expect(form.getByLabel(/message/i)).toBeVisible()
    await expect(form.getByRole('button', { name: /send message/i })).toBeVisible()
  })

  test('contact form subject dropdown has all options', async ({ page }) => {
    const select = page.getByTestId('contact-form').getByLabel(/subject/i)
    await select.click()
    for (const option of ['General Inquiry', 'Show Entry Question', 'Venue Rental', 'Sponsorship', 'Vendor Inquiry']) {
      await expect(page.getByRole('option', { name: option })).toBeAttached()
    }
  })

  test('contact info shows phone and email', async ({ page }) => {
    const section = page.getByTestId('section-contact')
    await expect(section.getByText('(613) 253-0078')).toBeVisible()
    await expect(section.getByText('info@westarfarms.ca')).toBeVisible()
    await expect(section.getByText(/Ashton, Ontario/)).toBeVisible()
  })

  test('map embed is present', async ({ page }) => {
    await expect(page.getByTestId('map-embed')).toBeVisible()
  })

  test('form fills and submit button is clickable', async ({ page }) => {
    const form = page.getByTestId('contact-form')
    await form.getByLabel(/name/i).fill('Test User')
    await form.getByLabel(/email/i).fill('test@example.com')
    await form.getByLabel(/message/i).fill('This is a test message.')
    await expect(form.getByRole('button', { name: /send message/i })).toBeEnabled()
  })
})

test.describe('Mobile — Phase 3', () => {
  test('no horizontal scroll with all sections loaded', async ({ page, viewport }) => {
    await page.goto('/')
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth)
    expect(scrollWidth).toBeLessThanOrEqual((viewport?.width ?? 375))
  })

  test('contact form is usable on mobile', async ({ page, viewport }) => {
    if (!viewport || viewport.width >= 768) return
    await page.goto('/')
    const form = page.getByTestId('contact-form')
    await form.scrollIntoViewIfNeeded()
    await expect(form.getByLabel(/name/i)).toBeVisible()
    const nameInput = form.getByLabel(/name/i)
    const box = await nameInput.boundingBox()
    expect(box?.height).toBeGreaterThanOrEqual(44)
  })
})
