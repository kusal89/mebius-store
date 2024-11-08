import { Button } from "./components/ui/button";
import Hero from "./Hero";
import Navigation from "./Navigation";
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"


function App() {
  const name = 'Kusalana';
  const cartCount = 2;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <div className="p-4">
        <Button variant="destructive">Buy Now</Button>
        <div className="w-48 h-6 bg-slate-200 p-4 flex items-center rounded-xl mt-5">
        <Slider defaultValue={[10]} max={100} step={1}  />
        </div>
        <div className=" flex items-center rounded-xl mt-5">
        <Switch/>
        </div>
        <div className="mt-5">
        <Badge variant="outline">Badge</Badge>
        </div>

      </div>
    </div>
  );
}

export default App;
