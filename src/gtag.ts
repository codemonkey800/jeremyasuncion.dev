const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string

type WindowWithGtag = typeof window & {
  gtag(...args: unknown[]): void
}

const PROD = process.env.NODE_ENV === 'production'

function getWindow() {
  return window as WindowWithGtag
}

export const GA_TRACKING_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
export const GA_TRACKING_SCRIPT = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_TRACKING_ID}', {
    page_path: window.location.pathname,
  });
`

export function pageView(url: string): void {
  if (PROD) {
    getWindow().gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export function event(
  action: string,
  {
    category,
    label,
    value,
  }: {
    category?: string
    label?: string
    value?: number
  },
): void {
  if (PROD) {
    getWindow().gtag('event', action, {
      value,
      event_category: category,
      event_label: label,
    })
  }
}
