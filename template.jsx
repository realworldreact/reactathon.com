const React = require('react');
const { config: { immortan } = {} } = require('./package.json');

const { PropTypes } = React;

export default function HTML({
  title = immortan.title,
  body = '',
  bundle = 'bundle.js',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'
);
          ga('create', 'UA-88330405-2', 'auto');
          ga('send', 'pageview');
        `}}
        />
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
