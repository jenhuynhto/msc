import Nav from "./components/Nav";

function App() {

  return (
    <>
      <Nav />
      <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
        <div className="flex justify-center h-screen">
          <img className="max-w-[1500x] h-auto rounded-md object-cover" src="/src/assets/images/sf_bridge.jpg" alt="Bay view of the San Francisco Golden Gate Bridge"></img>
        </div>
      </div>
    </>
  )
}

export default App
