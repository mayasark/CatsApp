import React, { useState } from "react";

import CatRender from "./CatRender";
import { MainWrapper, Field } from "./Wrapper";

const App = () => {
  const [enabled, setEnabled] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(false);

  return (
    <MainWrapper>
      <Field>
        <input
          type="checkbox"
          value={enabled}
          onChange={() => setEnabled((prev) => !prev)}
        />
        Enabled
      </Field>

      <Field>
        <input
          type="checkbox"
          disabled={!enabled}
          value={autoRefresh}
          onChange={() => setAutoRefresh((prev) => !prev)}
        />
        Auto-refresh every 5 seconds
      </Field>

      <CatRender enabled={enabled} autoRefresh={autoRefresh} />
    </MainWrapper>
  );
};

export default App;
