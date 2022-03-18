const speakersData = [
  {
    id: 1,
    name: 'Oprah Winfrey',
    photo: 'images/speakers/Linda.png',
    description: 'CEO OWN and Philanthropist',
    about:
      'Oprah Winfrey famously Business Owner and philanthropy over the years',
  },
  {
    id: 2,
    name: 'Amaka Osakwe',
    photo: 'images/speakers/Linda.png',
    description: 'Enterpreneur and Fashion Designer',
    about:
      'Amaka Osakwe is a Nigerian fashion designer and creator of the African-based fashion label named Maki Oh.',
  },
  {
    id: 3,
    name: 'Linda Ikeji',
    photo: 'images/speakers/Linda.png',
    description: 'CEO LindaIkejia Media',
    about: 'Linda owns one of the fastest growing Media company in Nigeria',
  },
  {
    id: 4,
    name: 'Luvvie Ajayi',
    photo: 'images/speakers/Linda.png',
    description: 'Writer ',
    about:
      'Changing the world by owning up to the truth and encouraging other to do so',
  },
  {
    id: 5,
    name: 'Shola Eweniyi',
    photo: 'images/speakers/Linda.png',
    description: 'Co-founder and CEO of Paystack',
    about:
      'Shola is Nigerian software engineer and entrepreneur focused on building payment solutions',
  },

  {
    id: 6,
    name: 'Onomeh Onwuanibe',
    photo: 'images/speakers/Linda.png',
    description: 'Founder, GGC',
    about: 'Software Engineer.',
  },
];

const speakersBody = document.querySelector('.speaker-list');
const seeMoreButton = document.querySelector('.see-more');
// add speakers dynamically to page
speakersData.forEach((speaker) => {
  speakersBody.innerHTML += `
      <div id = '${speaker.id}' class='speaker'>
        <span class='speaker-img'>
          <img src=${speaker.photo} alt='Paystack, CEO'>
        </span>
        <div class='speaker-details'>
          <h5 class='color-2 font-2'>${speaker.name}</h5>
          <p class='color-1 font-1 description'>${speaker.description}</p>
          <div class='dash'></div>
          <p class='about font-2 color-2'>
            ${speaker.about}
          </p>
        </div>
      </div> `;
});

const seeLess = (hidespeaker) => {
  if (Number(hidespeaker.id) > 2) {
    hidespeaker.classList.add('see-less');
  }
};

const removeSeeMore = (openSpeaker) => {
  seeMoreButton.addEventListener('click', () => {
    openSpeaker.style.display = 'grid';
    seeMoreButton.style.display = 'none';
  });
};

const seeMore = () => {
  const speakerList = document.querySelectorAll('.speaker');
  speakerList.forEach((speaker) => {
    seeLess(speaker);
    removeSeeMore(speaker);
  });
};
seeMore();
