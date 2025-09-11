import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";

function App() {
  return (
    <TooltipProvider delayDuration={200}>
      <Home />
    </TooltipProvider>
  );
}

export default App;
