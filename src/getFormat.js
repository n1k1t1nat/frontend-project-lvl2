import getStylish from './formatters/stylish.js';

export default (ast, format) => {
    switch (format) {
      case 'stylish':
        return getStylish(ast);
  
      case 'plain':
        return getPlain(ast);
  
      case 'json':
        return getJSON(ast);
  
      default:
        throw new Error(`Unknown format: '${format}'!`);
    }
  };