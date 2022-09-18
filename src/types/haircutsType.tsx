export type prestationType = {
  title: string,
  reference: string,
  duration: number,
  price: number,
  quantity?: number
}

export type GenderTypeReference = 'Man' | 'Woman' | 'Child'

export type GenderType = {
  title?: 'Homme' | 'Femme' | 'Enfant',
  reference: GenderTypeReference
}

export type categoryType = GenderType & {
  prestations: prestationType[]
}

export type HaircutType = {
  title: string,
  reference: string,
  categories: categoryType[]
}