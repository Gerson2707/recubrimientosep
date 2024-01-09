import "./App.css";

function App() {
  return (
    <div className="bg-cover h-screen flex items-center justify-center" style={{ backgroundImage: 'url("/bgfullfit-2.jpg")' }}>
      <div className="text-center">
        <h1 className="text-2xl font-bold my-4 text-white">Recubrimientos Epoxicos</h1>
        <h2 className="text-white">Emmanuel Pulido</h2>

        <img src="/logoep.jpg" alt="Logo" className="w-16 h-auto mt-4" />
      </div>
    </div>
  );
}

export default App;
