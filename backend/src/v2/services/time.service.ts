import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const TZ = "Europe/Kyiv";

export const timeService = {
  buildDate(time: string, base: Date) {
    const [h, m] = time.split(":").map(Number);

    return dayjs(base)
      .tz(TZ)
      .hour(h)
      .minute(m)
      .second(0)
      .millisecond(0)
      .utc()
      .toDate();
  },

  nowUTC() {
    return dayjs().utc().toDate();
  },

  toLocal(date: Date) {
    return dayjs(date).tz(TZ);
  },
};