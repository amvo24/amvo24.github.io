function scrollToContact() {
    let projectsSection = document.getElementById("contactMe");
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }


// Get the section element and the video element
const twitterSection = document.getElementById('twitter-section');
const twitterVideo = twitterSection.querySelector('video');

// Add an event listener to the section element for mouseenter and mouseleave events
twitterSection.addEventListener('mouseenter', () => {
    // Set the src attribute of the video element to the URL of the video
    twitterVideo.src = 'videos/twitter screen recording.mov';
    // Play the video
    twitterVideo.play();
});

twitterSection.addEventListener('mouseleave', () => {
    // Pause the video
    twitterVideo.pause();
    // Set the src attribute of the video element to an empty string to stop the video from playing
    twitterVideo.src = '';
    twitterVideo.setAttribute('poster', poster);
});
