import { http, HttpResponse } from "msw";
import type { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<never, never ,GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {date: '25/08/2025', receipt: 1200},
    {date: '26/08/2025', receipt: 607},
    {date: '27/08/2025', receipt: 4853},
    {date: '28/08/2025', receipt: 5000},
    {date: '29/08/2025', receipt: 200},
    {date: '30/08/2025', receipt: 300},
    {date: '31/08/2025', receipt: 2000},
    {date: '01/09/2025', receipt: 1500},
  ])
})