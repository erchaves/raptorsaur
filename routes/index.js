module.exports = function (router, siteData) {

  const getPageData = function(req, res, pageName) {
    return Object.assign({}, siteData, {
      title: pageName,
      appData: {
        route: pageName,
      },
      // todo
      segment: pageName,
      isActiveSegment: isActiveSegment,
    });
  };

  // todo: move this and import it in.
  const isActiveSegment = function(chunk, context, bodies, params) {
    return context.get('segment') === params.segment;
  };

  /* GET home page. */
  router.get('/', function(req, res) {
    const pageData = getPageData(req, res, 'home');

    res.render('pages/home', pageData);
  });

  router.get('/work', function(req, res){
    const pageData = getPageData(req, res, 'work');
    res.render('pages/work', pageData);
  });

  router.get('/about', function(req, res){
    const pageData = getPageData(req, res, 'about');
    res.render('pages/about', pageData);
  });

  router.get('/team', function(req, res){
    const pageData = getPageData(req, res, 'team');
    res.render('pages/team', pageData);
  });

  router.get('/news', function(req, res){
    const pageData = getPageData(req, res, 'news');
    res.render('pages/news', pageData);
  });

  router.get('/contact', function(req, res){
    const pageData = getPageData(req, res, 'contact');
    res.render('pages/contact', pageData);
  });

  return router;
};
