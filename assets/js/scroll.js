function scrollToContact() {
    let projectsSection = document.getElementById("contactMe");
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }


// // Get the section element and the video element
// const twitterSection = document.getElementById('twitter-section');
// const twitterVideo = twitterSection.querySelector('video');

// // Add an event listener to the section element for mouseenter and mouseleave events
// twitterSection.addEventListener('mouseenter', () => {
//     // Set the src attribute of the video element to the URL of the video
//     twitterVideo.src = 'videos/twitter screen recording.mov';
//     // Play the video
//     twitterVideo.play();
// });

// twitterSection.addEventListener('mouseleave', () => {
//     // Pause the video
//     twitterVideo.pause();
//     // Set the src attribute of the video element to an empty string to stop the video from playing
//     twitterVideo.src = '';
//     twitterVideo.setAttribute('poster', poster);
// });

// Get the section elements and video elements
const twitterSection = document.getElementById('twitter-section');
const twitterVideo = twitterSection.querySelector('video');

const airbnbSection = document.getElementById('airbnb-section');
const airbnbVideo = airbnbSection.querySelector('video');

// const vimeoSection = document.getElementById('vimeo-section');
// const vimeoVideo = vimeoSection.querySelector('video');

// Define the video URLs and posters for each section
const videos = {
  'twitter-section': {
    url: 'videos/twitter screen recording.mov',
    poster: 'images/TwitterProjectScreenshot.png'
  },
  'airbnb-section': {
    url: 'videos/Airbnb Recording-2.mov',
    poster: 'images/AirbnbScreenshot.png'
  },
//   'vimeo-section': {
//     url: 'videos/vimeo-screen-recording.mov',
//     poster: 'images/VimeoProjectScreenshot.png'
//   }
};

// Add event listeners to each section element for mouseenter and mouseleave events
twitterSection.addEventListener('mouseenter', () => {
    playVideo(twitterVideo, videos['twitter-section'].url, videos['twitter-section'].poster);
});

twitterSection.addEventListener('mouseleave', () => {
    pauseVideo(twitterVideo, videos['twitter-section'].poster);
});


airbnbSection.addEventListener('mouseenter', () => {
    playVideo(airbnbVideo, videos['airbnb-section'].url, videos['airbnb-section'].poster);
});

airbnbSection.addEventListener('mouseleave', () => {
    pauseVideo(airbnbVideo, videos['airbnb-section'].poster);
});


// vimeoSection.addEventListener('mouseenter', () => {
//     playVideo(vimeoVideo, videos['vimeo-section'].url, videos['vimeo-section'].poster);
// });

// vimeoSection.addEventListener('mouseleave', () => {
//     pauseVideo(vimeoVideo, videos['vimeo-section'].poster);
// });

// Define functions to play and pause videos
function playVideo(video, url, poster) {
    // Set the src attribute of the video element to the URL of the video
    video.src = url;
    // Set the poster attribute of the video element to the poster image
    video.setAttribute('poster', poster);
    // Play the video
    video.play();
}

function pauseVideo(video, poster) {
    // Pause the video
    video.pause();
    // Set the src attribute of the video element to an empty string to stop the video from playing
    video.src = '';
    // Set the poster attribute of the video element back to the original poster image
    video.setAttribute('poster', poster);
}
