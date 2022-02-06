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
    if (doc.type === 'cgv') {
      return '/cgv';
    }
    if (doc.type === 'livraisons') {
      return '/livraisons';
    }
    if (doc.type === 'mentionsLegales') {
      return '/mentions-legales';
    }
    if (doc.type === 'planDuSite') {
      return '/plan-du-site';
    }
    return '/not-found';
};