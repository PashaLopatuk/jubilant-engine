import {format} from "date-fns";

type Props = {
  date: Date
}


export function dater({date}: Props) {
  const formattedDate = format(date, 'eeee, PP')

  return formattedDate
}