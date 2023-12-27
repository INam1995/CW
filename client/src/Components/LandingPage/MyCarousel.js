import React from 'react';
import './Mycarousel.css'
import Img1 from '../../images/walpy_1700133745937.png';
import Img2 from '../../images/coolie3-transformed.jpeg';
import Img3 from '../../images/coolie4-transformed.jpeg';

const MyCarousel = () => {

// let mainPosts = document.querySelectorAll(".main-post");
// let posts = document.querySelectorAll(".post");

// let i = 0;
// let postIndex = 0;
// let currentPost = posts[postIndex];
// let currentMainPost = mainPosts[postIndex];

// let progressInterval = setInterval(progress, 100); // 180

// function progress() {
//   if (i === 100) {
//     i = -5;
//     // reset progress bar
//     currentPost.querySelector(".progress-bar__fill").style.width = 0;
//     document.querySelector(
//       ".progress-bar--primary .progress-bar__fill"
//     ).style.width = 0;
//     currentPost.classList.remove("post--active");

//     postIndex++;

//     currentMainPost.classList.add("main-post--not-active");
//     currentMainPost.classList.remove("main-post--active");

//     // reset postIndex to loop over the slides again
//     if (postIndex === posts.length) {
//       postIndex = 0;
//     }

//     currentPost = posts[postIndex];
//     currentMainPost = mainPosts[postIndex];
//   } else {
//     i++;
//     currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
//     document.querySelector(
//       ".progress-bar--primary .progress-bar__fill"
//     ).style.width = `${i}%`;
//     currentPost.classList.add("post--active");

//     currentMainPost.classList.add("main-post--active");
//     currentMainPost.classList.remove("main-post--not-active");
//   }
// }

    return (
        <>
                <div class="carousel">
                <div class="progress-bar progress-bar--primary hide-on-desktop">
                    <div class="progress-bar__fill"></div>
                </div>

                <header class="main-post-wrapper">
                
                <div class="slides">
                    <article class="main-post main-post--active">
                    <div class="main-post__image">
                        <img src={Img1} alt="New McLaren wind tunnel 'critical' to future performance, says Tech Director Key" />
                    </div>
                    <div class="main-post__content">
                        <div class="main-post__tag-wrapper">
                        <span class="main-post__tag">News</span>
                        </div>
                        <h1 class="main-post__title">New McLaren wind tunnel 'critical' to future performance, says Tech Director Key</h1>
                        <a class="main-post__link" href="#">
                            <span class="main-post__link-text">find out more</span>
                            <svg
                                class="main-post__link-icon main-post__link-icon--arrow"
                                width="37"
                                height="12"
                                viewBox="0 0 37 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                                stroke="white"
                                />
                            </svg>
                            </a>
                    </div>
                    </article>
                    <article class="main-post main-post--not-active">
                    <div class="main-post__image">
                        <img src={Img2} alt="What To Watch For in the 2019 Hungarian Grand Prix" />
                    </div>
                    <div class="main-post__content">
                        <div class="main-post__tag-wrapper">
                        <span class="main-post__tag">Video</span>
                        </div>
                        <h1 class="main-post__title">What To Watch For in the 2019 Hungarian Grand Prix</h1>
                        <a class="main-post__link" href="#">
                            <svg
                                class="main-post__link-icon main-post__link-icon--play-btn"
                                width="30"
                                height="30"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                cx="10"
                                cy="10"
                                r="9"
                                stroke="#C20000"
                                stroke-width="2"
                                />
                                <path d="M14 10L8 6V14L14 10Z" fill="white" />
                            </svg>
                            <span class="main-post__link-text">play video</span>
                            </a>
                    </div>
                    </article>
                    <article class="main-post main-post--not-active">
                    <div class="main-post__image">
                        <img src={Img3} alt="Hamilton wants harder championship fight from Leclerc and
                            Verstappen" />
                    </div>
                    <div class="main-post__content">
                        <div class="main-post__tag-wrapper">
                        <span class="main-post__tag">News</span>
                        </div>
                        <h1 class="main-post__title">Hamilton wants harder championship fight from Leclerc and Verstappen
                        </h1>
                        <a class="main-post__link" href="#">
                            <span class="main-post__link-text">find out more</span>
                            <svg
                                class="main-post__link-icon main-post__link-icon--arrow"
                                width="37"
                                height="12"
                                viewBox="0 0 37 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                                stroke="white"
                                />
                            </svg>
                            </a>
                    </div>
                    </article>
                </div>
                </header>

                <div class="posts-wrapper hide-on-mobile">
                <article class="post post--active">
                    <div class="progress-bar">
                    <div class="progress-bar__fill"></div>
                    </div>
                    <header class="post__header">
                    <span class="post__tag">News</span>
                    <p class="post__published">16 August 2019</p>
                    </header>
                    <h2 class="post__title">New McLaren wind tunnel 'critical' to future performance, says Tech Director Key</h2>
                </article>
                <article class="post">
                    <div class="progress-bar">
                    <div class="progress-bar__fill"></div>
                    </div>
                    <header class="post__header">
                    <span class="post__tag">Video</span>
                    <p class="post__published">12 August 2019</p>
                    </header>
                    <h2 class="post__title">What To Watch For in the 2019 Hungarian Grand Prix</h2>
                </article>
                <article class="post">
                    <div class="progress-bar">
                    <div class="progress-bar__fill"></div>
                    </div>
                    <header class="post__header">
                    <span class="post__tag">News</span>
                    <p class="post__published">08 August 2019</p>
                    </header>
                    <h2 class="post__title">Hamilton wants harder championship fight from Leclerc and Verstappen
                    </h2>
                </article>
                </div>
                </div>


         </> 
    );
};

export default MyCarousel;



