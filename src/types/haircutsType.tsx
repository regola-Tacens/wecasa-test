export type prestationType = {
  title: string,
  reference: string,
  duration: number,
  price:number
}

export type GenderType = {
  title?: 'Homme' | 'Femme' | 'Enfant',
  reference: 'Man' | 'Woman' | 'Child'
}

export type categoryType = GenderType & {
  prestations: prestationType[]
}

export type HaircutType = {
  title: string,
  reference: string,
  categories: categoryType[]
}