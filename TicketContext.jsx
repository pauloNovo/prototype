'use client';
import { createContext, useState, useEffect, useContext } from 'react';

const TicketContext = createContext();

export function TicketProvider({ children }) {
  const [sprints, setSprints] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedSprints = localStorage.getItem('gticket_sprints_v3');
    const storedTasks = localStorage.getItem('gticket_tasks_v3');
    const storedLogs = localStorage.getItem('gticket_logs_v3');
    
    if (storedSprints && storedTasks) {
      setSprints(JSON.parse(storedSprints));
      setTasks(JSON.parse(storedTasks));
      if (storedLogs) setLogs(JSON.parse(storedLogs));
    } else {
      // Para efeito de demonstração, deixe vazio. No projeto real você pode injetar seu Mock gigante aqui.
    }
  }, []);

  const saveContext = (newSprints, newTasks, newLogs) => {
    setSprints(newSprints);
    setTasks(newTasks);
    setLogs(newLogs);
    localStorage.setItem('gticket_sprints_v3', JSON.stringify(newSprints));
    localStorage.setItem('gticket_tasks_v3', JSON.stringify(newTasks));
    localStorage.setItem('gticket_logs_v3', JSON.stringify(newLogs));
  };

  return (
    <TicketContext.Provider value={{ sprints, tasks, logs, saveContext }}>
      {children}
    </TicketContext.Provider>
  );
}

export const useTickets = () => useContext(TicketContext);