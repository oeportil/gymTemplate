import { getApiAssistance } from "@/services/assitance.service";
import { useEffect, useState, useTransition } from "react";

const useAssistance = () => {
  const [isLoading, startTransition] = useTransition();
  const [assistances, setAssistances] = useState<any[]>([]);

  //obtener las asistencias
  const getAssitances = async () => {
    startTransition(async () => {
      const response = await getApiAssistance();
      if (response && response.status) {
        setAssistances(response.data);
      }
    });
  };

  useEffect(() => {
    getAssitances();
  }, []);

  return {
    isLoading,
    assistances,
    getAssitances,
  };
};

export default useAssistance;
