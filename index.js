const API_KEY = '24253422-4477825d93e6eb518eebc16ed'; // Замініть на ваш API-ключ
const API_URL = 'https://pixabay.com/api/';
const gallery = document.getElementById('image-gallery');
const loadMoreBtn = document.getElementById('load-more-btn');

let currentPage = 1; // Для пагінації

async function fetchImages(page = 1) {
  try {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&editors_choice=true&image_type=photo&per_page=12&page=${page}`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Помилка при завантаженні зображень:', error);
    return [];
  }
}

function renderImages(images) {
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    gallery.appendChild(imgElement);
  });
}

async function loadMoreImages() {
  const images = await fetchImages(currentPage);
  renderImages(images);
  currentPage += 1;
}

// Початкове завантаження зображень
loadMoreImages();

// Обробник кліку на кнопку "Завантажити ще"
loadMoreBtn.addEventListener('click', loadMoreImages);
