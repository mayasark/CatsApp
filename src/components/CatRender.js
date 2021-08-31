import React, { useState, useEffect } from "react";

import { service } from "../service/Service";
import { Button, Image } from "./Wrapper";
import Spinner from "./Spinner";

const CatRender = ({ enabled, autoRefresh }) => {
  const [cat, setCat] = useState({});
  const [isSendRequest, setIsSendRequest] = useState(true);

  const getCat = () => {
    service.getCat().then((res) => {
      res?.length && setCat(res[0]);
      setIsSendRequest(false);
    });
  };

  useEffect(() => {
    if (isSendRequest) {
      getCat();
    }
  }, [isSendRequest]);

  useEffect(() => {
    let interval = null;
    if (autoRefresh && enabled) {
      interval = setInterval(() => {
        setIsSendRequest(true);
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, enabled]);

  return (
    <div>
      <Button
        disabled={isSendRequest || !enabled}
        onClick={() => setIsSendRequest(true)}
      >
        Get cat
      </Button>
      {!isSendRequest && cat?.url ? (
        <Image alt="cat" src={cat?.url} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CatRender;
