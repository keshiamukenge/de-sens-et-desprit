export default function (doc) {
    if (doc.isBroken) {
      return '/not-found';
    }
    if (doc.type === 'index') {
      return '/';
    }
    if (doc.type === 'prestations') {
      return '/Prestations';
    }
    if (doc.type === 'abonnements') {
      return '/Abonnements';
    }
    if (doc.type === 'bonscadeaux') {
      return '/Bons-cadeaux';
    }
    return '/not-found';
};