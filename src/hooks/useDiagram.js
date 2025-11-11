import { useContext } from "react";
import { DiagramContext } from "../context/DiagramContext";

export default function useDiagram() {
  const context = useContext(DiagramContext);
  // Return empty object if context is not available (e.g., in Dashboard)
  if (!context) {
    return {
      tables: [],
      relationships: [],
      areas: [],
      notes: [],
      types: [],
      enums: [],
      database: 'generic',
      tablesCount: 0,
      relationshipsCount: 0
    };
  }
  return context;
}
