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
          href='https://www.reactathon.com'
          rel='canonical'
        />
        <meta
          content={
            `react,
            reactjs,
            react.js,
            react conf,
            workshop,
            netlify,
            serverless,
            rxjs,
            webpack,
            redux,
            aws lambda,
            learn to code,
            learn to program,
            learn react,
            san francisco,
            reactathon,
            learn programming,
            learn javascript,
            learn coding,
            code,
            coding,
            programming,
            software engineer,
            software developer,
            mean stack,
            web development,
            development,
            engineering,
            coding bootcamp,
            javascript,
            open source`
          }
          name='keywords'
        />
        <meta
          content='Celebrating the React Ecosystem'
          property='og:title'
        />
        <meta
          content='Reactathon'
          property='og:site_name'
        />
        <meta
          content='on'
          name='twitter:widgets:csp'
        />
        <meta
          content='https://www.reactathon.com'
          property='og:url'
        />
        <meta
          content={
            `One week of community-run events leading up to Facebooks
            React Conf in March 2017.
            Including a meetup, workshops, hiring mixer, hackathon.`
          }
          property='og:description'
        />
        <meta
          content={
            'https://s3-us-west-1.amazonaws.com/' +
            'reactathon/reactathon-og-image.png'
          }
          property='og:image'
        />
        <meta
          content='article'
          property='og:type'
        />
        <meta
          content='https://www.facebook.com/realworldreact'
          property='article:publisher'
        />
        <meta
          content='Responsive'
          property='article:section'
        />
        <meta
          content={
            `One week of community-run events leading up to Facebook's
            React Conf in March 2017. Including a meetup, 7 workshops,
            hiring mixer, hackathon.`
          }
          name='description'
        />
        <meta
          content='@reactathon'
          name='twitter:creator'
        />
        <meta
          content='https://www.reactathon.com'
          name='twitter:url'
        />
        <meta
          content='@reactathon'
          name='twitter:site'
        />
        <meta
          content='summary_large_image'
          name='twitter:card'
        />
        <meta
          content={
            'https://s3-us-west-1.amazonaws.com/' +
            'reactathon/reactathon-twitter-card.png'
          }
          name='twitter:image:src'
        />
        <meta
          content='Reactathon: March 7-12, 2017'
          name='twitter:title'
        />
        <meta
          content={
            'Workshops, Meetup, Hiring Mixer, & Hackathon Celebrating React'
          }
          name='twitter:description'
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
