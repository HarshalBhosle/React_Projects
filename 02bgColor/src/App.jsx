import { useState } from "react"

function App() {
  const [color, setcolor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setcolor("red")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red
          </button>

          <button
          onClick={() => setcolor("blue")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue
          </button>

          <button
          onClick={() => setcolor("green")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green
          </button>

          <button
          onClick={() => setcolor("purple")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple
          </button>

          <button
          onClick={() => setcolor("#215677")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#215677"}}
          >ocean
          </button>


          <button
          onClick={() => setcolor("#567373")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#567373"}}
          >ocean
          </button>

          <button
          onClick={() => setcolor("#213472")}
          className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#213472"}}
          >ocean
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
