import { ProductMatch } from "./product-match.interface";

export interface WinePairing {
    pairedWines: string[];
    pairingText: string;
    productMatches: ProductMatch[];
  }