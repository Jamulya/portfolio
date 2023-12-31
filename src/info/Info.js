import self from "../img/self.JPG"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Aizhamal",
    lastName: "Anarbekova",
    initials: "Jamulya", // the example uses first and last, but feel free to use three or more if you like.
    position: "a front-end developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    // gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Kyrgyzstan'
        },
        {
            emoji: "💻",
            text: "Software developer"
        },
        {
            emoji: "📧",
            text: "anarbekovaaijamal95@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/aijamal.anarbekova.7",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/jamulya_a/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Jamulya",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/aijamal-anarbekova/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/jamulya_a",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Aizhamal, a front-end developer from Kyrgyzstan. I love creating web applications with React.",
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Redux', 'Angular', 'Typescript', 'git', 'github', 'npm', 'Custom React Hooks','JSON', 'API Requests', 'Bootstrap','Material UI', 'Sass', 'Scss Modules', 'Tailwind', 'html5', 'css3', 'Figma'],
            exposedTo: ['nodejs', 'Graphql', 'Firebase']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'running',
            emoji: '🏃‍♀️'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🥘'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Restaurant-Landing-Page",
            live: "https://restaurant-landing-page-zeta.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Jamulya/Restaurant-Landing-Page", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Admin-dashboard",
            live: "https://admin-dashboard-jamulya.vercel.app/",
            source: "https://github.com/Jamulya/admin-dashboard",
            image: mock2
        },
        {
            title: "Twitter-clone",
            live: "https://twitter-clone-jamulya.vercel.app/",
            source: "https://github.com/Jamulya/twitter-clone",
            image: mock3
        },
        {
            title: "Ecommerce",
            live: "https://ecommerce-app-jamulya.vercel.app/",
            source: "https://github.com/Jamulya/ecommerce-app",
            image: mock4
        },
        {
            title: "Weather-app",
            live: "https://weather-app-jamulya.vercel.app/",
            source: "https://github.com/Jamulya/weather-app",
            image: mock5
        },
        {
            title: "Quiz",
            live: "https://quiz-app-jamulya.vercel.app/",
            source: "https://github.com/Jamulya/quiz-app",
            image: mock6
        }
    ]
}