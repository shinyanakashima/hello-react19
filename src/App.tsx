import foxModel from './assets/Fox.glb'
import "@google/model-viewer";
import './App.css'

function App() {

  return (
    <>
      <div className="model-viewer-container">
        <model-viewer src={foxModel} alt="A 3D model of a fox" camera-controls autoplay />
      </div>
    </>
  )
}

export default App
