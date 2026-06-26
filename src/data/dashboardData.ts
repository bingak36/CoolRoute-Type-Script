export interface DashboardCardData {
  title: string
}

export type DashboardRole = 'store' | 'driver' | 'center'

export const dashboardCards: Record<DashboardRole, DashboardCardData[]> = {
  store: [
    { title: 'Store card 01' },
    { title: 'Store card 02' },
    { title: 'Store card 03' },
  ],
  driver: [
    { title: 'Driver card 01' },
    { title: 'Driver card 02' },
    { title: 'Driver card 03' },
  ],
  center: [
    { title: 'Center card 01' },
    { title: 'Center card 02' },
    { title: 'Center card 03' },
  ],
}
