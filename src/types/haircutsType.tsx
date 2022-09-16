export type prestationType = {
  title: string,
  reference: string,
  duration: number,
  price:number
}

export type categoryType = {
  title: 'Homme' | 'Femme' | 'Enfant',
  reference: 'Man' | 'Woman' | 'Child',
  prestations: prestationType[]
}

export type HaircutType = {
  title: string,
  reference: string,
  categories: categoryType[]
}