const routes = {
    '/app1': 'app1.html',
    '/app2': 'app2.html',
    '/': 'app1.html'
  };
  
  const iframe = document.getElementById('container');
  
  window.addEventListener('hashchange', function() {
    const path = window.location.hash.substring(1);
    iframe.src = routes[path] || routes['/'];
  });
  
  window.dispatchEvent(new Event('hashchange'));
  