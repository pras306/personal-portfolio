import ECommerceApp from '../assets/images/ecommerce_app.png';
import CarShowcase from '../assets/images/car_showcase.png';
import FlexibbleApp from '../assets/images/flexibble_app.png';
import Cryptoverse from '../assets/images/cryptoverse.png';
import SpotifyCharts from '../assets/images/spotify_charts.png';
import GPT3Modern from '../assets/images/gpt3_modern.png';
import APIProxyServer from '../assets/images/api_proxy_server.png';
import FaceDetector from '../assets/images/face_detector.png';
import NetflixClone from '../assets/images/netflix_clone.png';
import VideoBrowser from '../assets/images/video_browser.png';
import ImageBrowser from '../assets/images/image_browser.png';
import Robofriends from '../assets/images/robofriends.png';

export const PROJECT_DETAILS = [
    {
        title: 'Flexibble App',
        image: FlexibbleApp,
        content: <span>
            <p>Designed web application using React JS, Next JS, Typescript</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://next-auth.js.org/">Next Auth</a> to authenticate users with Google Provider and JSON Web tokens</p>
            <p>Made use of <a rel="noreferrer" target="_blank" href="https://grafbase.com/">Grafbase</a> to structure and mutate GraphQL APIs for Users and Projects.</p>
            <p>Uploaded images for all projects onto <a rel="noreferrer" target="_blank" href="https://cloudinary.com/?&utm_campaign=1329&utm_content=instapagelogocta-selfservetest">Cloudinary</a>.</p>
            <p>Developed both server side and client side rendering for different components</p>
            <p>Deployed the web app in Vercel</p>
        </span>,
        footerLabels: ['React JS', 'Next JS', 'Typescript', 'Grafbase', 'Vercel', 'Cloudinary', 'Next-Auth'],
        siteLink: 'https://flexibble-grafbase-app.vercel.app/',
        codeLink: 'https://github.com/pras306/grafbase_flexibble'
    },
    {
        title: 'E-Commerce Web App',
        image: ECommerceApp,
        content: <span>
            <p>Designed web application using React JS, Redux Toolkit and React Hooks</p>
            <p>Obtained products list from <a rel='noreferrer' target='_blank' href='https://dummyjson.com/'>Dummy JSON</a></p>
            <p>Handled authentication of users, made use of Firebase for Google sign in</p>
            <p>Managed payment simulations using <a rel='noreferrer' target='_blank' href='https://stripe.com/docs/api'>STRIPE API</a></p>
            <p>Developed a proxy server to make requests to Rapid API in order to protect the API keys</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Deployed the site using Netlify</p>
        </span>,
        footerLabels: ['React JS', 'Redux Toolkit', 'React Hooks', 'Node JS', 'Express JS', 'Render', 'Stripe API', 'Netlify'],
        siteLink: 'https://dummy-ecommerce-app.netlify.app/',
        codeLink: 'https://github.com/pras306/ecommerce-app'
    },
    {
        title: 'API Proxy Server',
        image: APIProxyServer,
        content: <span>
            <p>Designed a backend proxy server using Node JS, Express JS</p>
            <p>Main purpose was for hiding all the API keys used in other projects</p>
            <p>Server is currently hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Refer to the Github documentation of this project to see all the API routes</p>
            <p>The following API keys are currently hidden in this project - Unsplash API, Clarifai API, Youtube API, TMDB API, Stripe API</p>
        </span>,
        footerLabels: ['Node JS', 'Express JS', 'Unsplash API', 'Clarifai API', 'Youtube API', 'TMDB API', 'Rapid API - Travel Advisor', 'Rapid API - Open Weather Map', 'Rapid API - Coinranking', 'Rapid API - Bing News Search', 'Stripe API', 'Rapid API - Spotify'],
        siteLink: 'https://api-proxy-server-6xbe.onrender.com/api/v1',
        codeLink: 'https://github.com/pras306/api-proxy'
    },
    {
        title: 'Cryptoverse',
        image: Cryptoverse,
        content: <span>
            <p>Designed web app using React JS and Redux Toolkit</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://rapidapi.com/Coinranking/api/coinranking1">Rapid API's Coinranking</a> API to gather all current cryptocurrency related data</p>
            <p>Made use of <a rel="noreferrer" target="_blank" href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1">Rapid API's Bing News Search</a> API to collect relevant news articles about cryptocurrency</p>
            <p>Implemented interfaces to visually display cryptocurrency price changes using Chart JS</p>
            <p>Developed a proxy server to make requests to Rapid API in order to protect the API keys</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Deployed the site using Netlify</p>
        </span>,
        footerLabels: ['React JS', 'Redux Toolkit', 'Node JS', 'Express JS', 'Rapid API - Coinranking', 'Rapid API - Bing News Search', 'Render Cloud Hosting', 'Netlify'],
        siteLink: 'https://cryptocoins-app.netlify.app',
        codeLink: 'https://github.com/pras306/cryptoverse'
    },
    {
        title: 'Spotify Charts',
        image: SpotifyCharts,
        content: <span>
            <p>Designed web app using React JS, React Router and React Hooks</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://rapidapi.com/airaudoeduardo/api/spotify81">Rapid API's Spotify</a> API to gather relevant data about the top songs, albums and artists</p>
            <p>Made use of <a rel="noreferrer" target="_blank" href="https://rapidapi.com/DataFanatic/api/spotify-scraper">Rapid API's Spotify Scraper</a> API to collect top charts and artists information from all over the world</p>
            <p>Integrated <a rel="noreferrer" target="_blank" href="https://rapidapi.com/Glavier/api/spotify23">Rapid API's Spotify</a> API to display all the relevant information about various different artists</p>
            <p>Developed a proxy server to make requests to Rapid API in order to protect the API keys</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Deployed the site using Netlify</p>
        </span>,
        footerLabels: ['React JS', 'React Hooks', 'Node JS', 'Express JS', 'Rapid API - Spotify', 'Rapid API - Spotify Scraper', 'React Router', 'Render Cloud Hosting', 'Netlify'],
        siteLink: 'https://spotify-charts.netlify.app/',
        codeLink: 'https://github.com/pras306/spotify-charts'
    },
    {
        title: 'Car Showcase',
        image: CarShowcase,
        content: <span>
            <p>Designed web application using React JS, Next JS, Typescript</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://rapidapi.com/apininjas/api/cars-by-api-ninjas">Rapid API's Cars</a> API to gather relevant data about the cars</p>
            <p>Made use of Headless UIs components as base for building the web app</p>
            <p>Developed both server side and client side rendering for different components</p>
            <p>Deployed the web app in Vercel</p>
        </span>,
        footerLabels: ['React JS', 'React Hooks', 'Next JS', 'Typescript', 'Rapid API', 'Vercel'],
        siteLink: 'https://car-showcase-app-one.vercel.app/',
        codeLink: 'https://github.com/pras306/car-showcase'
    },
    {
        title: 'Modern Responsive Website',
        image: GPT3Modern,
        content: <span>
            <p>Developed a responsive interface using React JS</p>
            <p>Made use of React Icons to enhance site usability</p>
            <p>Designed the entire website from scratch using custom CSS styles and custom components</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerLabels: ['React JS', 'Github Pages'],
        siteLink: 'https://pras306.github.io/gpt3-modern/',
        codeLink: 'https://github.com/pras306/gpt3-modern'
    },
    {
        title: 'Face Detector',
        image: FaceDetector,
        content: <span>
            <p>Designed interface using React JS and React Hooks</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://www.clarifai.com/">Clarifai's</a>API to detect faces and predict the closest celebrity lookalikes of submitted images</p>
            <p>Developed a proxy server to host Clarifai's API in order to protect the API keys of Clarifai</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Applied a lightweight JS library -<a rel="noreferrer" target="_blank" href="https://particles.js.org/">TS Particles</a> to create a JS Particle animation on the web page</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerLabels: ['React JS', 'Clarifai API', 'Github Pages'],
        siteLink: 'http://pras306.github.io/image-detector/',
        codeLink: 'https://github.com/pras306/image-detector'
    },
    {
        title: 'Netflix-Clone',
        image: NetflixClone,
        content: <span>
            <p>Designed interface using React JS and React Hooks</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://www.themoviedb.org/">TMDB's</a>API to fetch movies data based on the different API endpoints</p>
            <p>Developed a proxy server to host TMDB's API in order to protect the API keys</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Implemented Lazy Loading to load decrease page load time</p>
            <p>Made use of Youtube's API to display the trailers of the selected movies</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerLabels: ['React JS', 'TMDB API', 'Youtube API', 'Github Pages'],
        siteLink: 'http://pras306.github.io/netflix-clone/',
        codeLink: 'https://github.com/pras306/netflix-clone'
    },
    {
        title: 'Video Browser',
        image: VideoBrowser,
        content:<span>
            <p>Designed interface using React JS - mostly comprised of class based components</p>
            <p>Obtained videos from Youtube by querying their API with a search term</p>
            <p>Developed a proxy server to host Youtube's API in order to protect the API keys of Youtube</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerLabels: ['React JS', 'Youtube API', 'Github Pages'],
        siteLink: 'https://pras306.github.io/video-browser/',
        codeLink: 'https://github.com/pras306/video-browser'
    },
    {
        title: 'Image Browser',
        image: ImageBrowser,
        content: <span>
            <p>Designed interface using React JS - mostly comprised of class based components</p>
            <p>Gathered images from <a rel="noreferrer" target="_blank" href="https://unsplash.com/">Unsplash</a> by querying their API with a search term</p>
            <p>Developed a proxy server to host Unsplash's API in order to protect the API keys of Unsplash</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in <a rel="noreferrer" target="_blank" href='https://render.com/'>Render</a></p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerLabels: ['React JS', 'Unsplash API', 'Github Pages'],
        siteLink: 'https://pras306.github.io/image-browser/',
        codeLink: 'https://github.com/pras306/image-browser'
    },
    {
        title: 'Robofriends',
        image: Robofriends,
        content: <span>
            <p>Designed using React JS and Redux, most of the UI components on this project was build using React's class-based components</p>
            <p>Made use of React's State system and React's Props system</p>
            <p>Obtained sample user data using the JSON Placeholder API</p>
            <p>Managed the state of the app using redux - defining the necessary reducers and actions</p>
            <p>Handled asynchronous action objects for collecting data using redux-thunk</p>
            <p>Worked with Tachyons, a CSS toolkit for designing responsive interfaces</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerLabels: ['React JS', 'Redux', 'JSON Placeholder API', 'Robohash API', 'Github Pages'],
        siteLink: 'https://pras306.github.io/robofriends/',
        codeLink: 'https://github.com/pras306/robofriends'
    }
];