import { Calendar, dayjsLocalizer } from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from "dayjs"

export const CalendarComponent = () => {
    const localizer = dayjsLocalizer(dayjs)
  return (
    <div className="contCalendar">
      <Calendar localizer={localizer} style={{height:650, width:1250}} />
    </div>
  )
}
