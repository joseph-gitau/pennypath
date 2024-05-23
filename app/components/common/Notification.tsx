// components/common/Notification.tsx

import React, { useEffect, useState } from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  const typeStyles = {
    success: "bg-mint-green",
    error: "bg-coral",
    info: "bg-info",
    warning: "bg-soft-gold",
  };

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg text-white ${typeStyles[type]}`}
    >
      {message}
    </div>
  );
};

export default Notification;
