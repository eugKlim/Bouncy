import axios from 'axios';
import lozad from 'lozad';

function testimonialsFetcher() {
  const testimonialsWrapper = document.querySelector('.testimonials-wrapper');

  async function getData() {
    try {
      const usersResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = usersResponse.data.slice(0, 3);

      const commentsResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      const comments = commentsResponse.data.slice(0, 3);

      const imageResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );
      const images = imageResponse.data.slice(0, 3);

      testimonialsWrapper.innerHTML = '';

      users.forEach((user, index) => {
        const comment = comments[index].body;
        const image = images[index].thumbnailUrl;
        const testimonialCard = createTestimonialCard(user, comment, image);
        testimonialsWrapper.innerHTML += testimonialCard;
      });

      const observer = lozad();
      observer.observe();
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  }

  function createTestimonialCard(user, comment, image) {
    return `
      <div class="swiper-slide">
        <div class="testimonials-slide">
          <div class="testimonials-slide__img">
            <img class="lozad"
              data-src="${image}"
              alt="Image"
              src="./media/image/global-icons/1x1.webp">
          </div>
          <div class="testimonials-slide__info">
            <p class="testimonials-slide__info-text">${comment}</p>
            <h4 class="testimonials-slide__info-author">${user.name}</h4>
            <p class="testimonials-slide__info-rank">${user.company.name}</p>
          </div>
        </div>
      </div>
    `;
  }

  getData();
}
testimonialsFetcher();
