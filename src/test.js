const NetworkSpeed = require("network-speed"); // ES5
const testNetworkSpeed = new NetworkSpeed();

getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
  const options = {
    hostname: "web.gocreateafrica.app",
    port: 80,
    path: "/catchers/544b09b4599c1d0200000289",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fileSizeInBytes = 48000000000000;
  const speed = await testNetworkSpeed.checkUploadSpeed(
    options,
    fileSizeInBytes
  );

}