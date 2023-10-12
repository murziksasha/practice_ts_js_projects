import { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { RandomChar } from "../RandomChar/RandomChar";
import { CharList } from "../CharList/CharList";
import { CharInfo } from "../CharInfo/CharInfo";

import decoration from '../../../src/resources/img/vision.png';




function MainContent() {
  const [selectedChar, setSelectedChar] = useState<number | string>('');

  const onCharSelected = (id: number) => {
    setSelectedChar(id);
  }

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
}

export default MainContent;