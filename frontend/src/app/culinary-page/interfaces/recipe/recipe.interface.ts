import { AnalyzedInstruction } from "./analyzed-instruction.interface";
import { ExtendedIngredient } from "./extended-ingredient.interface";
import { WinePairing } from "./wine-pairing.interface";

export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    winePairing: WinePairing;
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
    originalId: number | null;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
  }
  