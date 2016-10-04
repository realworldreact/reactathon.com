const React = require('react');

const { PropTypes } = React;

export default function HTML({
  title = 'Berkeley\'s Coin-Op palace!',
  body = '',
  bundle = '/bundle.js',
  stylesheet
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          content='IE=edge'
          httpEquiv='X-UA-Compatible'
        />
        <meta
          content='width=device-width, minimum-scale=1.0'
          name='viewport'
        />
        { stylesheet ?
          <link
            href={ stylesheet }
            rel='stylesheet'
          /> :
          null
        }
        <title>{ title }</title>
      </head>
      <body>
        <div
          dangerouslySetInnerHTML={{ __html: body }}
          id='app'
        />
        <script src={ bundle } />
      </body>
    </html>
  );
}

HTML.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  bundle: PropTypes.string,
  stylesheet: PropTypes.string
};
