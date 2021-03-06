export interface Recipie {
  Category: string;
  CreatorId: string;
  Cuisine: string;
  DateCreated: Date;
  ComplexityLevel: number;
  EstimatedTime: number;
  Id: string;
  Ingredients: Array<Ingredient>;
  Name: string;
  Steps: Array<Step>;
}
export interface Step {
  Id: string;
  instruction: string;
  recipeId: string;
}
export interface Ingredient {
  Id: string;
  Name: string;
  unit: string;
  quantity: number;
  recipeId: string;
}
export class Meal {
  id?: string;
  recipeId: string;
  type: string;
  dailyDietId?: string;

  constructor(
    recipeId: string,
    type: string,
    dailyDietId?: string,
    id?: string
  ) {
    this.id = id;
    this.recipeId = recipeId;
    this.type = type;
    this.dailyDietId = dailyDietId;
  }
}
export class DailyDiet {
  id?: string;
  dietId?: string;
  day: string;
  meals: Array<Meal>;
  constructor(day: string, meals: Array<Meal>, id?: string, dietId?: string) {
    this.id = id;
    this.dietId = dietId;
    this.day = day;
    this.meals = meals;
  }
}

export class Diet {
  id: string;
  creatorId: string;
  dateCreated: Date;
  name: string;
  description: string;
  dailyDiets: Array<DailyDiet>;

  constuctor(
    id: string,
    creatorId: string,
    dateCreated: Date,
    name: string,
    description: string,
    dailyDiets: Array<DailyDiet>
  ) {
    this.id = id;
    this.creatorId = creatorId;
    this.dateCreated = dateCreated;
    this.name = name;
    this.description = description;
    this.dailyDiets = dailyDiets;
  }
}
export interface Temp {
  first: string;
  second: string;
  third: string;
  four: string;
}
export interface Rate {
  RecipeId: string;
  AuthorId: string;
  Value: number;
  Comment?: string;
}
