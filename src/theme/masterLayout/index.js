import { memo } from "react";
import Navigation from "../navigation/navigation";
import Footer from "../footer";

const MasterLayout = ({ children, ...props }) => {
  return (
    <div {...props}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
export default memo(MasterLayout);
