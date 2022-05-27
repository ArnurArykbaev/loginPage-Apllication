const lsTokenKey = 'my_app_token';


function setToken(req) {
  const isAuthURL = req.url.includes('auth');

  if(!isAuthURL) {
    const token = localStorage.getItem(lsTokenKey);
    req.headers['x-access-token'] = token;
  }
  
  return req
}

function setTokenOnLogin(res) {
  const isLoginURL = res.config.url.includes('login');

  if(isLoginURL) {
    const token = res.data.token;
    localStorage.setItem(lsTokenKey, token);
  }

  return res;
}

function getClearResponse(res) {
  return res.data;
}

function onError(err) {
  console.dir(err);
  return Promise.reject(err);
}

export default function (Axios) {
  Axios.interceptors.request.use(setToken);
  Axios.interceptors.response.use(setTokenOnLogin);
  Axios.interceptors.response.use(getClearResponse, onError);
}