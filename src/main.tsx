import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import Game from "./components/game/Game";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense>
      <Game />
    </Suspense>
  </Provider>
);
