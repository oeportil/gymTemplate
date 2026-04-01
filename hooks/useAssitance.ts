import { getApiAssistance } from "@/services/assitance.service";
import { useEffect, useState, useTransition } from "react";
import useSignalStore from "../store/useSignalStore";

const useAssistance = () => {
  const [isLoading, startTransition] = useTransition();
  const [assistances, setAssistances] = useState<any[]>([]);
  const { signal } = useSignalStore();

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
  }, [signal]);

  return {
    isLoading,
    assistances,
    getAssitances,
  };
};

export default useAssistance;
