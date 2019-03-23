export type Phone = {
  label: string;
  number: string;
}

export type Address = {
  name: string;
  lines: string[];
}

export type Url = {
  label: string;
  address: string;
}

export type Hour = string; // 4 letters string

export type Hours = {
  from: Date;
  hours: [Hour, Hour][]
  open: boolean; // If the hours mark an OPEN or a closed time
  reason: string; // If it's special time, what's the reason? Holiday? Vacation?
  repeat: number; // 7 for normal businesses, to repeat indefinitely, null to not repeat
}[] // Later hours have precedence

export type StoredImage = {
  base64: string;
}

export type PhysicalCharacteristics = {
  carbonFootprint: number;
  zeroWaste: boolean;
  size: [number, number, number]; // in cm
  weight: number; // in grams
}

export type FoodCharacteristics = PhysicalCharacteristics & {
  nutrition: [string, number][]; // Nutrient / Value pairs
  allergens: Allergen[];
}

export type Nutrition = {
  estimated: boolean; // Was it measured in a lab or estimated by the sum of ingredients?
  per: NutriVal;
  energy: NutriVal;
  fats: {
    total: NutriVal;
    omega3: NutriVal;
    omega6: NutriVal;
    cholesterol: NutriVal;
  };
  carbs: {
    total: NutriVal;
    fiber: NutriVal;
    starch: NutriVal;
    sugar: NutriVal;
  };
  protein: {
    total: NutriVal;
    cy: NutriVal;
    hi: NutriVal;
    is: NutriVal;
    le: NutriVal;
    ly: NutriVal;
    me: NutriVal;
    ph: NutriVal;
    th: NutriVal;
    tr: NutriVal;
    ty: NutriVal;
    va: NutriVal;
  };
  minerals: {
    ca: NutriVal;
    cu: NutriVal;
    fe: NutriVal;
    mg: NutriVal;
    mn: NutriVal;
    p: NutriVal;
    se: NutriVal;
    na: NutriVal;
    zn: NutriVal;
  };
  vitamins: {
    b1: NutriVal;
    b2: NutriVal;
    b3: NutriVal;
    b5: NutriVal;
    b6: NutriVal;
    b9: NutriVal;
    b12: NutriVal;
    a: NutriVal;
    c: NutriVal;
    d: NutriVal;
    e: NutriVal;
    k: NutriVal;
  }
}

export type NutriVal = {
  value: number;
  unit: 'g' | 'mg' | 'ug' | 'UI' | 'kcal';
};

export type Allergen = 'gluten' | 'peanuts' |  'nuts' | 'soy';
