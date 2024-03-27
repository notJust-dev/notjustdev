import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GtmNoscript } from '../components/GTM';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <GtmNoscript />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
