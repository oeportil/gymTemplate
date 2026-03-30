import { getApiPayments } from "@/services/pys.service";
import { useEffect, useState, useTransition } from "react";

const usePyS = () => {
  const [payments, setPayments] = useState<any[]>([]);
  const [subscription, setSubscription] = useState<any>(null);
  const [isLoading, startTransition] = useTransition();

  const getPayments = async () => {
    startTransition(async () => {
      const response = await getApiPayments();
      if (response && response.status) {
        setPayments(response.data.payments);
        setSubscription(response.data.subscription);
      }
    });
  };

  useEffect(() => {
    getPayments();
  }, []);

  return {
    payments,
    isLoading,
    getPayments,
    subscription,
  };
};

export default usePyS;
