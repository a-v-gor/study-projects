import { Loader } from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'da467788639f495ea4aa92b93582ee8f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
