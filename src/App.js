import "./App.css";
// import Moralis from "moralis";
import { useState } from "react";
import { NftExplore } from "./pages/NftExplore";

function App() {
  const userCurrentTheme = JSON.parse(localStorage.getItem("isDark"));
  const [isDark, setisDark] = useState(userCurrentTheme || true);

  // initMoralis function
  const initMoralis = async () => {
    // connect to Moralis server
    // await Moralis.start({
    //   apiKey: "wWpYDJlwRKzmS6y96ofQaN3KRfuwZltctVDFqwk68E2mhZTDVIbOpDWi5NCVeu1l"
    // });
  };

  // call/invoke initMoralis function
  initMoralis();

  return (
    <main className={isDark ? "dark" : ""}>
      <div className='px-8 pt-10 dark:bg-gray-800 bg-gray-50'>
        <section className='container w-full max-w-screen-xl min-h-screen mx-auto'>
          <NftExplore settheme={setisDark} />
        </section>
      </div>
    </main>
  );
}

export default App;
