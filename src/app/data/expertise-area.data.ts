import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    name: 'Web penetration tester and development'
  },
  {
    icon: api,
    name: 'API Development'
  },
  {
    icon: mobile,
    name: 'Mobile Development'
  },
  {
    icon: speed,
    name: 'Performance Optimization'
  },
  {
    icon: search,
    name: 'Secuirty Reasesher'
  },
]

export default expertiseAreaData
