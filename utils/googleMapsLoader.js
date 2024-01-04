import { Loader } from '@googlemaps/js-api-loader';
const loader = new Loader({
  apiKey: 'AIzaSyBR0kTGFAPPehmfH96pL7Nu4iqnRN8i-gI',
  version: 'weekly',
  libraries: ['places'],
});
export default loader;
