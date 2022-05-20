import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface TopPageModel extends Base {}

export class HhData {
  @prop()
  title: string;

  @prop()
  count: number;

  @prop()
  junior: number;

  @prop()
  middle: number;

  @prop()
  senior: number;
}

export class TopPageAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel extends TimeStamps {
  id: string;

  @prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;

  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop()
  hhData?: HhData;
  @prop({ type: [TopPageAdvantage] })
  advantages: TopPageAdvantage[];
  @prop()
  seoTest: string;
  tagsTitle: string;
  tags: string[];
}
