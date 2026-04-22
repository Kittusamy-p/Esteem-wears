import men from "./men.json";
import kids from "./kids.json";
import { Product } from "@/types/product";

export const dataMap: Record<string, Product[]> = {
  men: men as Product[],
  kids: kids as Product[],
};
