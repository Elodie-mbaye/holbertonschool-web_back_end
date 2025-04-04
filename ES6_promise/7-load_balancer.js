/*eslint-disable*/
export default function loadBalancer(chinaDownload, USDDownload) {
    return Promise.race([chinaDownload, USDDownload]);
  }
