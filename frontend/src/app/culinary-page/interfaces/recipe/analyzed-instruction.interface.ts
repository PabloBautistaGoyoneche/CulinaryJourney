import { InstructionStep } from "./instruction-step.interface";

export interface AnalyzedInstruction {
    name: string;
    steps: InstructionStep[];
  }