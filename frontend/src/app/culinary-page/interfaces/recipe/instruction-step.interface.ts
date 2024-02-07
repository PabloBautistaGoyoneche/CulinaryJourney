import { Equipment } from "./equipment.interface";
import { Ingredient } from "./ingredient.interface";

export interface InstructionStep {
    number: number;
    step: string;
    ingredients: Ingredient[];
    equipment: Equipment[];
    length: {
      number: number;
      unit: string;
    };
  }