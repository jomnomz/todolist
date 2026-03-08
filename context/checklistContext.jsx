import { createContext, useContext, useState } from "react";
import uuid from "react-native-uuid";

const ChecklistContext = createContext();

export function ChecklistProvider({ children }) {
  const [checklists, setChecklists] = useState([]);

  function addChecklist(title, entries) {
    const newChecklist = {
      id: uuid.v4(),
      title,
      entries
    };

    setChecklists(prev => [...prev, newChecklist]);
  }

  function updateChecklist(id, title, entries) {
    setChecklists(prev =>
      prev.map(checklist =>
        checklist.id === id
          ? { ...checklist, title, entries }
          : checklist
      )
    );
  }

  function deleteChecklist(id) {
    setChecklists(prev => prev.filter(c => c.id !== id));
  }

  return (
    <ChecklistContext.Provider
      value={{
        checklists,
        addChecklist,
        deleteChecklist,
        updateChecklist
      }}
    >
      {children}
    </ChecklistContext.Provider>
  );
}

export function useChecklist() {
  return useContext(ChecklistContext);
}