export type TimelineItem = {
  label: string;
  year: string;
};

import { experiencesDatas } from "./experiencesDatas";
import { achievementDatas } from "./achievementsDatas";

export const timelineDatas: TimelineItem[] = [
  ...experiencesDatas,
  ...achievementDatas,
];
