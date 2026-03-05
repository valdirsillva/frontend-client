
export type GamesQueryVariables = {
  start?: number
  limit?: number
}

export type GamesQueryData = {
  games: {
    data: {
      id: string
      attributes: {
        name: string
        price: number
      }
    }[]
  }
}