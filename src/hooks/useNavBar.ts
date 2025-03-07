import { useState, useCallback, useEffect } from "react";

export interface UseNavBarProps {
  items: Array<{
    icon: React.ReactNode;
    label: string;
    href: string;
  }>;
  position?: "top" | "bottom";
}

export const useNavBar = ({ items, position = "top" }: UseNavBarProps = { items: [] }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(items[0]?.href || "");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleItemClick = useCallback((href: string) => {
    setActiveItem(href);
  }, []);

  return {
    items,
    position,
    isSmallScreen,
    activeItem,
    handleItemClick,
  };
};
