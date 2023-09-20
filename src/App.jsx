import React from "react";

import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Note />
      {/* styles should never be applied to a custom component, they need to be applied to html */}
      <Footer />
    </div>
  );
}

export default App;
