import { useState } from "react";

export default function useNavigationAction() {
  const [isCollapse, setCollase] = useState(true);

  const handleMenuItemClicked = () => {
    setCollase(!isCollapse);
  };

  return { isCollapse, handleMenuItemClicked };
}
