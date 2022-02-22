const stringify = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  } if (value === null) {
    return null;
  }
  return String(value);
};

const plain = (diffTree) => {
  const buildString = (nodes, path = '') => nodes
    .filter((node) => node.type !== 'unchanged')
    .map((node) => {
      const property = path ? `${path}.${node.key}` : node.key;
      switch (node.type) {
        case 'added':
          return `Property '${property}' was added with value: ${stringify(node.val)}`;
        case 'deleted':
          return `Property '${property}' was removed`;
        case 'changed':
          return `Property '${property}' was updated. From ${stringify(node.valueBefore)} to ${stringify(node.valueAfter)}`;
        case 'nested':
          return `${buildString(node.children, property)}`;
        default:
          throw new Error(`Такого типа не существует ${node.type}`);
      }
    }).join('\n');
  return buildString(diffTree);
};

export default plain;
