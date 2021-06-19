import Document, { Head, Html, Main, NextScript } from 'next/document'

import { GA_TRACKING_SCRIPT, GA_TRACKING_SCRIPT_SRC } from 'src/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={GA_TRACKING_SCRIPT_SRC} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: GA_TRACKING_SCRIPT }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
