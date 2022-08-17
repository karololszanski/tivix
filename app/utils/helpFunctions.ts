import { LegoMinifig } from "./interfaces";

const getMinifigsFromArray = (
  minifigsList: Array<LegoMinifig>,
  count: number,
  endRange: number,
  startRange: number = 0
) => {
  const selectedMinifigs: Array<LegoMinifig> = [];

  if (endRange - startRange > count) {
    while (selectedMinifigs.length < count) {
      const generatedMinifig =
        minifigsList[
          Math.floor(Math.random() * (endRange - startRange + 1)) + startRange
        ];
      !selectedMinifigs.find(
        (item) => item.set_num === generatedMinifig.set_num
      ) &&
        generatedMinifig?.set_img_url &&
        selectedMinifigs.push(generatedMinifig);
    }
  } else {
    for (let i = startRange; i < endRange; i++) {
      selectedMinifigs.push(minifigsList[i]);
    }
  }

  return selectedMinifigs;
};

export { getMinifigsFromArray };
