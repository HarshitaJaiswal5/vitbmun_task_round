import * as React from "react";
import { cn } from "../../lib/utils";


const Card = React.forwardRef(({ className, backgroundImage, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      backgroundImage: `url(${backgroundImage})`, // Set the background image dynamically
      backgroundSize: "cover", // Ensure the image covers the entire card
      backgroundPosition: "center", // Center the image
      backgroundRepeat: "no-repeat", // Prevent tiling
    }}
    className={cn(
      "rounded-xl border shadow h-64 flex gap-10", // Adjust size as needed
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
