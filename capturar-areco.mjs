
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const screens = [
  ['01-dashboard', 'Visão geral'],
  ['02-produtos', 'Produtos'],
  ['03-estoque', 'Estoque'],
  ['04-pedidos', 'Pedidos'],
  ['05-atendimento', 'Atendimento'],
  ['06-integracoes', 'Integrações'],
  ['07-configuracoes', 'Configurações'],
]

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
})

await mkdir('figma-references', { recursive: true })

await page.addInitScript(() => {
  localStorage.setItem('commerce-theme', 'light')
  localStorage.removeItem('commerce-widgets')
  localStorage.removeItem('commerce-hidden')
})

try {
  await page.goto('http://localhost:5173/', {
    waitUntil: 'networkidle',
  })

  await page.evaluate(() => document.fonts.ready)

  for (const [filename, label] of screens) {
    await page.getByRole('button', {
      name: label,
      exact: true,
    }).click()

    await page.waitForTimeout(500)

    await page.screenshot({
      path: `figma-references/${filename}.png`,
      fullPage: true,
      animations: 'disabled',
    })

    console.log(`Capturado: ${filename}.png`)
  }

  console.log('Todas as capturas foram concluídas!')
} finally {
  await browser.close()
}
