import Cookies from "js-cookie";

const Authorization = () => {
    let accessToken = Cookies.get("accessToken");
    if(!accessToken) {
      const currentPath = window.location.pathname + window.location.search;
      const redirectUrl = `/login?redirect=${encodeURIComponent(currentPath)}`;
      window.location.href = redirectUrl;
      return false;
    }
    return true;
    // instance.defaults.headers.common['Another-Header'] = 'Another-Value';
};

export default Authorization;