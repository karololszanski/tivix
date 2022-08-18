import { getMinifigsFromArray } from "utils/helpFunctions";
import { LegoMinifig } from "utils/interfaces";

const mockedMinifigsList: Array<LegoMinifig> = [
  {
    name: "test0",
    set_img_url: "test",
    set_num: 0,
    selected: false,
    parts: null,
  },
  {
    name: "test1",
    set_img_url: "test",
    set_num: 1,
    selected: false,
    parts: null,
  },
  {
    name: "test2",
    set_img_url: "test",
    set_num: 2,
    selected: false,
    parts: null,
  },
  {
    name: "test3",
    set_img_url: "test",
    set_num: 3,
    selected: false,
    parts: null,
  },
  {
    name: "test4",
    set_img_url: "test",
    set_num: 4,
    selected: false,
    parts: null,
  },
  {
    name: "test5",
    set_img_url: "test",
    set_num: 5,
    selected: false,
    parts: null,
  },
  {
    name: "test6",
    set_img_url: "test",
    set_num: 6,
    selected: false,
    parts: null,
  },
  {
    name: "test7",
    set_img_url: "test",
    set_num: 7,
    selected: false,
    parts: null,
  },
  {
    name: "test8",
    set_img_url: "test",
    set_num: 8,
    selected: false,
    parts: null,
  },
  {
    name: "test9",
    set_img_url: "test",
    set_num: 9,
    selected: false,
    parts: null,
  },
];

describe("helpFunction utils", () => {
  it("get 3 minifigs from array size 10", () => {
    expect(
      getMinifigsFromArray(mockedMinifigsList, 3, mockedMinifigsList.length - 1)
        .length
    ).toBe(3);
  });

  it("get 2 minifigs from array size 2, when count = 3", () => {
    expect(
      getMinifigsFromArray(
        mockedMinifigsList.slice(0, 2),
        3,
        mockedMinifigsList.slice(0, 2).length - 1
      ).length
    ).toBe(2);
  });

  it("get 5 minifigs from array size 5", () => {
    expect(
      getMinifigsFromArray(
        mockedMinifigsList.slice(0, 5),
        5,
        mockedMinifigsList.slice(0, 5).length - 1
      ).length
    ).toBe(5);
  });
});
