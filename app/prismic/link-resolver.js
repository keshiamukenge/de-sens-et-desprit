export default function (doc) {
    if (doc.isBroken) {
      return '/not-found';
    }
  
    if (doc.type === 'index') {
      return '/';
    }
  
    return '/not-found';
};