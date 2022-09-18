export type PrestationType = {
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

export type CategoryType = GenderType & {
  prestations: PrestationType[]
}

export type HaircutType = {
  title: string,
  reference: string,
  categories: CategoryType[]
}