import BgVid from '../assets/Videobg.mp4'
import './Main.css'
//import './components/Main.css'
// import $ from 'jquery';


//creates an HTML canvas which uses WebGL to
// render spinning confetti using JavaScript.
//const canvas =  document.getElementById("ripple") as HTMLCanvasElement;
//const gl = canvas.getContext("webgl");// Tell the canvas element that we will use WebGL to draw
// inside the element (and not the default raster engine):
//const ext =  gl.getExtension("OES_texture_float") ||

function Main() {

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "node_modules/ripple-js/ripple.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);
    //  $("ripple").ripples({
    //    resolution: 512,
    //    dropRadius: 20,
    //    perturbance: 0.01,
    //  });
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);


  return (
    
    <div className='BgVideo'>
        <div id="ripple">       
          <video src={BgVid} autoPlay loop muted></video>
        </div>
      </div>
  )
}

export default Main


