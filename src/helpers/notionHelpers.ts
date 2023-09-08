import {
  DatabaseObjectResponse,
  PageObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

// types copied from Notion SDK, since they aren't exported
type StringRequest = string;
type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";
type SelectPropertyResponse = {
  id: StringRequest;
  name: StringRequest;
  color: SelectColor;
};

// Helper types
type RichText = {
  type: "rich_text";
  rich_text: Array<RichTextItemResponse>;
  id: string;
};
type Select = {
  type: "select";
  select: SelectPropertyResponse | null;
  id: string;
};
type Title = {
  type: "title";
  title: Array<RichTextItemResponse>;
  id: string;
};
type Url = {
  type: "url";
  url: string | null;
  id: string;
};

const mapProperty = <K>(
  obj: PageObjectResponse | DatabaseObjectResponse,
  key: string,
  type: string
): K => {
  if (obj.properties[key].type === type) {
    return obj.properties[key] as K;
  }
  throw new Error("Incompatible types.");
};

const mapTitle = (
  obj: PageObjectResponse | DatabaseObjectResponse,
  key: string
): Title => mapProperty<Title>(obj, key, "title");

const mapSelect = (
  obj: PageObjectResponse | DatabaseObjectResponse,
  key: string
): Select => mapProperty(obj, key, "select");

const mapRichText = (
  obj: PageObjectResponse | DatabaseObjectResponse,
  key: string
): RichText => mapProperty<RichText>(obj, key, "rich_text");

const mapUrl = (
  obj: PageObjectResponse | DatabaseObjectResponse,
  key: string
): Url => mapProperty<Url>(obj, key, "url");

export { mapTitle, mapSelect, mapRichText, mapUrl };
