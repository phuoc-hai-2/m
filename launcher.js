<script>
  const { remote } = require('electron');

  function minimize() {
    remote.getCurrentWindow().minimize();
  }

  function maximize() {
    const win = remote.getCurrentWindow();
    win.isMaximized() ? win.unmaximize() : win.maximize();
  }

  function closeApp() {
    remote.app.quit();
  }
</script>
