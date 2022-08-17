export interface LegoMinifig {
  set_num: number;
  name: string;
  set_img_url: string;
  selected: boolean;
  parts: any;
}

export interface LegoParts {
  part: LegoPart;
  length: number;
}

export interface LegoPart {
  name: string;
  part_img_url: string;
  part_num: string;
}
