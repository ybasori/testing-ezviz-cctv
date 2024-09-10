import React, { useEffect } from "react"
import EZUIKit from 'ezuikit-js';

// const App = () => {
//   return <ReactHlsPlayer 
//   src="https://isgpopen.ezvizlife.com/v3/openlive/BC1456411_1_1.m3u8?expire=1725731503&id=751197765136404480&c=59c9fab3fd&t=3d88e0aa8253d778e87369033cf83fb40590bb2dec6b16c7fe948d9f9356e6df&ev=100"
//   autoPlay={false}
//   controls={true}
//   width={"100%"}
//   height={"auto"}
//   />
// }
const App = () => {

  useEffect(()=>{
    
    new EZUIKit.EZUIKitPlayer({
      id: "video-container", // 视频容器ID
      accessToken:
        "at.aag1fkc9a4b0bx5y75uf3n192jvg1s9v-2h89ldkmo7-1u30y80-ppk0n3fib",
      url: "ezopen://open.ezviz.com/BC1456411/1.hd.live",
      width: 600,
      height: 400,
      env: {
        domain: ''
        },
      decoderPath: "../node_modules/ezuikit-js/ezuikit.js",
      template: "pcLive",
      handleError: (err) => {
        if (err.type === "handleRunTimeInfoError" && err.data.nErrorCode === 5) {
          // 加密设备密码错误
        }
      },
    });
  },[]);

  return   <div id="video-container"></div>
}

export default App;