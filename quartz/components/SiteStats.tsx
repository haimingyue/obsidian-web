import { QuartzComponent, QuartzComponentConstructor } from "./types"

const goatcounterSiteId = process.env.GOATCOUNTER_SITE_ID?.trim()
const goatcounterHost = process.env.GOATCOUNTER_HOST?.trim() || "goatcounter.com"
const goatcounterBaseUrl = goatcounterSiteId
  ? `https://${goatcounterSiteId}.${goatcounterHost}`
  : undefined
const goatcounterTotalUrl = goatcounterBaseUrl
  ? `${goatcounterBaseUrl}/counter/TOTAL.html?no_branding=1`
  : undefined

export default (() => {
  const SiteStats: QuartzComponent = () => {
    if (!goatcounterBaseUrl || !goatcounterTotalUrl) {
      return null
    }

    return (
      <section class="site-stats" aria-labelledby="site-stats-title">
        <div class="site-stats-header">
          <div>
            <p class="site-stats-kicker">访问记录</p>
            <h2 id="site-stats-title">网站访问</h2>
          </div>
          <a href={goatcounterBaseUrl} target="_blank" rel="noreferrer">
            打开统计后台
          </a>
        </div>
        <iframe
          src={goatcounterTotalUrl}
          title="网站总访问数"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    )
  }

  SiteStats.css = `
.site-stats {
  margin: 2rem 0 0;
}

.site-stats-header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.site-stats-kicker {
  margin: 0 0 0.25rem;
  color: var(--gray);
  font-size: 0.9rem;
}

.site-stats h2 {
  margin: 0;
}

.site-stats-header a {
  flex: 0 0 auto;
  font-size: 0.95rem;
}

.site-stats iframe {
  display: block;
  width: 220px;
  max-width: 100%;
  min-height: 80px;
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  background: var(--light);
}

@media all and (max-width: 600px) {
  .site-stats-header {
    align-items: start;
    flex-direction: column;
  }

  .site-stats iframe {
    width: 100%;
  }
}
`

  return SiteStats
}) satisfies QuartzComponentConstructor
