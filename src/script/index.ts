const calculationType = {
  volume: "volume",
  peels: "peels",
};

const superJuiceCalculator = (type: string): void => {
  const inputValue: number = Number(input?.value);

  if (inputValue <= 0) return alert("Tenes que ingresar un valor mayor a 0");

  const lemonSpan = document.querySelector<HTMLSpanElement>("#lemon-quantity");
  const acidSpan = document.querySelector<HTMLSpanElement>("#acid-quantity");
  const waterSpan = document.querySelector<HTMLSpanElement>("#water-quantity");
  const totalVolumenSpan =
    document.querySelector<HTMLSpanElement>("#total-volume");

  switch (type) {
    case "volume":
      {
        const LEMON_PEELS_RATIO = inputValue * 0.053;
        const CITRIC_ACID_RATIO = LEMON_PEELS_RATIO;
        const WATER_RATIO = LEMON_PEELS_RATIO * 16.66;
        const TOTAL_VOLUME_RESULT =
          LEMON_PEELS_RATIO + CITRIC_ACID_RATIO + WATER_RATIO;

        if (lemonSpan && acidSpan && waterSpan && totalVolumenSpan) {
          lemonSpan.innerText = LEMON_PEELS_RATIO.toFixed(2) + " gr";
          acidSpan.innerText = CITRIC_ACID_RATIO.toFixed(2) + " gr";
          waterSpan.innerText = WATER_RATIO.toFixed(2) + " ml";
          totalVolumenSpan.innerText = TOTAL_VOLUME_RESULT.toFixed(2) + " ml";
          return;
        }
      }
      break;

    case "peels": {
      const LEMON_PEELS_RATIO = inputValue;
      const CITRIC_ACID_RATIO = LEMON_PEELS_RATIO;
      const WATER_RATIO = LEMON_PEELS_RATIO * 16.66;
      const TOTAL_VOLUME_RESULT =
        LEMON_PEELS_RATIO + CITRIC_ACID_RATIO + WATER_RATIO;

      if (lemonSpan && acidSpan && waterSpan && totalVolumenSpan) {
        lemonSpan.innerText = LEMON_PEELS_RATIO.toFixed(2) + " gr";
        acidSpan.innerText = CITRIC_ACID_RATIO.toFixed(2) + " gr";
        waterSpan.innerText = WATER_RATIO.toFixed(2) + " ml";
        totalVolumenSpan.innerText = TOTAL_VOLUME_RESULT.toFixed(2) + " ml";
        return;
      }
      break;
    }
    default:
      null;
  }
  throw new Error("Ha sucedido un error");
};

const buttonVolume =
  document.querySelector<HTMLButtonElement>("#button-volume");
const buttonPeels = document.querySelector<HTMLButtonElement>("#button-peels");
const input = document.querySelector<HTMLInputElement>("#input");

buttonVolume?.addEventListener("click", () =>
  superJuiceCalculator(calculationType.volume)
);

buttonPeels?.addEventListener("click", () =>
  superJuiceCalculator(calculationType.peels)
);
