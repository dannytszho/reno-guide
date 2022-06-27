import { trailsData } from '../data/trails'
export const resolvers = {
  Query: {
    trails: () => trailsData,
  },
}
