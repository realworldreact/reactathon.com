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
        <link
          rel='canonical'
          href='https://www.reactathon.com'
        />
        <meta
          name='keywords'
          content='react, reactjs, react.js, react conf, workshop, netlify, serverless, rxjs, webpack, redux, aws lambda, learn to code, learn to program, learn react, san francisco, reactathon, learn programming, learn javascript, learn coding, code, coding, programming, software engineer, software developer, mean stack, web development, development, engineering, coding bootcamp, javascript, open source'
        />
        <meta
          property='og:title'
          content='Celebrating the React Ecosystem'
        />
        <meta
          property='og:site_name'
          content='Reactathon'
        />
        <meta
          name='twitter:widgets:csp'
          content='on'
        />
        <meta
          property='og:url'
          content='https://www.reactathon.com'
        />
        <meta
          property='og:description'
          content='One week of community-run events leading up to Facebooks React Conf in March 2017. Including a meetup, workshops, hiring mixer, hackathon.'
        />
        <meta
          property='og:image'
          content='https://s3-us-west-1.amazonaws.com/reactathon/reactathon-og-image.png'
        />
        <meta
          property='og:type'
          content='article'
        />
        <meta
          property='article:publisher'
          content='https://www.facebook.com/realworldreact'
        />
        <meta
          property='article:section'
          content='Responsive'
        />
        <meta
          name='description'
          content='One week of community-run events leading up to Facebooks React Conf in March 2017. Including a meetup, 7 workshops, hiring mixer, hackathon.'
        />
        <meta
          name='twitter:creator'
          content='@reactathon'
        />
        <meta
          name='twitter:url'
          content='https://www.reactathon.com'
        />
        <meta
          name='twitter:site'
          content='@reactathon'
        />
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:image:src'
          content='https://s3-us-west-1.amazonaws.com/reactathon/reactathon-twitter-card.png'
        />
        <meta
          name='twitter:title'
          content='Reactathon: March 7-12, 2017'
        />
        <meta
          name='twitter:description'
          content='Workshops, Meetup, Hiring Mixer, & Hackathon Celebrating React'
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
