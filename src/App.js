import "./App.css";

function App() {
  return (
    <>
      {/* <div class="loader"></div> */}
      <div
        class="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center"
        style={{
          "background-image":
            "url(https://images.pexels.com/photos/1130625/pexels-photo-1130625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div class="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
          <span class="text-bold font-pacifo">NUSENSE &#x25CF; DESIGN</span>
          <br/>
          <h1 class="text-5xl font-pacifo">We are almost there!</h1>
          <br/>
          <p className="font-pacifo">Stay tuned for something amazing!!!</p>
        </div>
      </div>
    </>
  );
}

export default App;
