function scrollToContact() {
    let projectsSection = document.getElementById("contactMe");
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }

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
    // Listen for the pause event on the video element
    video.addEventListener('pause', () => {
        // Set the src attribute of the video element to an empty string to stop the video from playing
        video.src = '';
        // Set the poster attribute of the video element back to the original poster image
        video.setAttribute('poster', poster);
    });
}




// Select all menu links
const menuLinks = document.querySelectorAll('.menu-link');

// Loop through each link and add a click event listener
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default behavior of the link (i.e. jumping to the section)
    event.preventDefault();

    // Get the target section from the link's href attribute
    const targetId = link.getAttribute('href');

    // Use the scrollIntoView method to scroll to the target section
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
