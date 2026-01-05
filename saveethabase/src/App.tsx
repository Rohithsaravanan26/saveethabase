import React, { useEffect, useState } from "react";
import { apiService } from "./services/apiService";
import { Resource } from "./types";

export default function App() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    apiService.getResources().then(setResources);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Saveethabase</h1>
      {resources.map(r => (
        <div key={r.id}>{r.name}</div>
      ))}
    </div>
  );
}
