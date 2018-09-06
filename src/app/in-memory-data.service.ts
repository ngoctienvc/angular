import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { id: 11, title: 'Headline', description: 'The headline is the text indicating the nature of the article below it.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 12, title: 'Node.js', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 13, title: 'Node.js 0', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 14, title: 'Node.js 1', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 15, title: 'Node.js 2', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 16, title: 'Node.js 3', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 17, title: 'Node.js 4', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 18, title: 'Node.js 5 ', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 19, title: 'Node.js 6', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
      { id: 20, title: 'Node.js 7', description: 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.', imgUrl: 'https://picsum.photos/900/500?random&t=' + Math.random()},
    ];
    return {posts};
  }
}