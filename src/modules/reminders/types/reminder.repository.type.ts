export interface CreateReminderInput {
  name: string
  date: Date
  location: string
  userId: string
  temp: number
  minTemp: number
  maxTemp: number
}
