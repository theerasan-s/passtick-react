import { useState } from "react";

export default function useNavigationAction() {
  const [isCollapse, setCollase] = useState(false);

  const handleMenuItemClicked = () => {
    setCollase(!isCollapse);
  };

  return { isCollapse, handleMenuItemClicked };
}
