import axios from 'axios';
import { toast } from 'react-hot-toast';

const PIXABAY_KEY = '27402135-07abda6b2694d48097ccb4094';
const URL = `https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12`;

const pixabayApi = axios.create({
  baseURL: URL,
  params: { key: PIXABAY_KEY },
});

export const getImagesData = async (page, query) => {
  const imagesData = await pixabayApi
    .get('', {
      params: { page: page, q: query },
    })
    .then(res => {
      if (res.data.hits.length === 0) {
        toast('There is no images on your query');
      }
      return res.data.hits;
    })
    .then(hits =>
      hits.map(({ id, webformatURL, largeImageURL }) => {
        return { id, webformatURL, largeImageURL };
      })
    )
    .catch(e => toast('Something went wrong. Please try again later (: '));
  return imagesData;
};
