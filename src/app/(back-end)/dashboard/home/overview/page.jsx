import React from 'react'
import DashBoardBanner from "@/components/dashboard/DashBoardBanner"
import SalesOverview from "@/components/dashboard/SalesOverview"

export default function Dashboard() {
  return (
    <div>
      <DashBoardBanner/>
        <SalesOverview/>
    </div>
  )
}
