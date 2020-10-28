let baseURL

switch (process.env.NODE_ENV) {
  case 'dev': baseURL = '/api'; break;
  case 'test': baseURL = 'http://www.imooc.com'; break;
  case 'prod': baseURL = 'https://www.imooc.com'; break;
  default: baseURL = '/api';
}

export default {
  baseURL
}


