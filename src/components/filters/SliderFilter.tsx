import { useState } from "react";
import { Slider } from "../ui/slider";

export function SliderFilter() {
  const [sliderValue, setSliderValue] = useState(10);

  return (
    <div>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
      />
      <p className="mt-3 text-lg font-semibold text-secondary/100">
        Max. ${sliderValue.toFixed(2)}
      </p>
    </div>
  );
}
