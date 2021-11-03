import ChatbotMessenger from '../assets/images/chatbot_messenger.png';
import APIProxyServer from '../assets/images/api_proxy_server.png';
import FaceDetector from '../assets/images/face_detector.png';
import NetflixClone from '../assets/images/netflix_clone.png';
import VideoBrowser from '../assets/images/video_browser.png';
import ImageBrowser from '../assets/images/image_browser.png';
import Robofriends from '../assets/images/robofriends.png';

export const PROJECT_DETAILS = [
    {
        title: 'Chatbot-Messenger',
        image: ChatbotMessenger,
        contentTitle: 'Project Highlights',
        content: <span>
            <p>Designed web application using React JS, Redux and React Hooks</p>
            <p>Created a backend server using Node JS, Express JS to interact with Postgres SQL DB for storing relevant user data</p>
            <p>Handled authentication of users, made use of Firebase for Google sign in</p>
            <p>Developed and trained a simple chatbot that responds to basic queries using Python's NLTK</p>
            <p>Deployed both the chatbot and web app in Heroku</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>ReactJS, Redux, React Hooks, NodeJS, ExpressJS, PostgresSQL, Custom Chatbot API developed using Python NLTK, Heroku</span>,
        siteLink: 'https://chat-bot-messenger-app.herokuapp.com/',
        codeLink: 'https://github.com/pras306/chatbot-messenger'
    },
    {
        title: 'API Proxy Server',
        image: APIProxyServer,
        contentTitle: 'Project Highlights',
        content: <span>
            <p>Designed a backend proxy server using Node JS, Express JS</p>
            <p>Main purpose was for hiding all the API keys used in other projects</p>
            <p>Server is currently hosted in Heroku</p>
            <p>Refer to the Github documentation of this project to see all the API routes</p>
            <p>The following API keys are currently hidden in this project - Unsplash API, Clarifai API, Youtube API, TMDB API</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>Node JS, Express JS, Unsplash API, Clarifai API, Youtube API, TMDB API</span>,
        siteLink: 'https://backend-portfolio-proxy.herokuapp.com/api/v1',
        codeLink: 'https://github.com/pras306/api-proxy'
    },
    {
        title: 'Face Detector',
        image: FaceDetector,
        contentTitle: 'Project Highlights',
        content: <span>
            <p>Designed interface using React JS and React Hooks</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://www.clarifai.com/">Clarifai's</a>API to detect faces and predict the closest celebrity lookalikes of submitted images</p>
            <p>Developed a proxy server to host Clarifai's API in order to protect the API keys of Clarifai</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in Heroku</p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Applied a lightweight JS library -<a rel="noreferrer" target="_blank" href="https://particles.js.org/">TS Particles</a> to create a JS Particle animation on the web page</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>ReactJS, Clarifai API, Github Pages</span>,
        siteLink: 'http://pras306.github.io/image-detector/',
        codeLink: 'https://github.com/pras306/image-detector'
    },
    {
        title: 'Netflix-Clone',
        image: NetflixClone,
        contentTitle: 'Project Highlights',
        content: <span>
            <p>Designed interface using React JS and React Hooks</p>
            <p>Utilized <a rel="noreferrer" target="_blank" href="https://www.themoviedb.org/">TMDB's</a>API to fetch movies data based on the different API endpoints</p>
            <p>Developed a proxy server to host TMDB's API in order to protect the API keys</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in Heroku</p>
            <p>Implemented Lazy Loading to load decrease page load time</p>
            <p>Made use of Youtube's API to display the trailers of the selected movies</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>ReactJS, TMDB API, Youtube API, Github Pages</span>,
        siteLink: 'http://pras306.github.io/netflix-clone/',
        codeLink: 'https://github.com/pras306/netflix-clone'
    },
    {
        title: 'Video Browser',
        image: VideoBrowser,
        contentTitle: 'Project Highlights',
        content:<span>
            <p>Designed interface using React JS - mostly comprised of class based components</p>
            <p>Obtained videos from Youtube by querying their API with a search term</p>
            <p>Developed a proxy server to host Youtube's API in order to protect the API keys of Youtube</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in Heroku</p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>ReactJS, Youtube API, Github Pages</span>,
        siteLink: 'https://pras306.github.io/video-browser/',
        codeLink: 'https://github.com/pras306/video-browser'
    },
    {
        title: 'Image Browser',
        image: ImageBrowser,
        contentTitle: 'Project Highlights',
        content: <span>
            <p>Designed interface using React JS - mostly comprised of class based components</p>
            <p>Gathered images from <a rel="noreferrer" target="_blank" href="https://unsplash.com/">Unsplash</a> by querying their API with a search term</p>
            <p>Developed a proxy server to host Unsplash's API in order to protect the API keys of Unsplash</p>
            <p>Built the proxy server using Node JS, Express JS and hosted in Heroku</p>
            <p>Handled all API requests and responses using Axios</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>ReactJS, Unsplash API, Github Pages</span>,
        siteLink: 'https://pras306.github.io/image-browser/',
        codeLink: 'https://github.com/pras306/image-browser'
    },
    {
        title: 'Robofriends',
        image: Robofriends,
        contentTitle: 'Project Highlights',
        content: <span>
            <p>Designed using React JS and Redux, most of the UI components on this project was build using React's class-based components</p>
            <p>Made use of React's State system and React's Props system</p>
            <p>Obtained sample user data using the JSON Placeholder API</p>
            <p>Managed the state of the app using redux - defining the necessary reducers and actions</p>
            <p>Handled asynchronous action objects for collecting data using redux-thunk</p>
            <p>Worked with Tachyons, a CSS toolkit for designing responsive interfaces</p>
            <p>Deployed the site using Github Pages</p>
        </span>,
        footerTitle: 'Project Implementation',
        footerContent: <span>ReactJS, Redux, JSON Placeholder API, Robohash API, Github Pages</span>,
        siteLink: 'https://pras306.github.io/robofriends/',
        codeLink: 'https://github.com/pras306/robofriends'
    }
];