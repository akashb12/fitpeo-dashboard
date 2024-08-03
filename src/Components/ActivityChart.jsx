import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CHART_DATA } from '../lib/consts/navigation'

export default function ActivityChart() {
	return (
		<div className="h-[22rem] bg-[#202028] p-4 border-[#202028] rounded-lg flex flex-col flex-1 mr-8 mt-5">
			<strong className="text-white font-bold">Activity</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={CHART_DATA}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" radius={[20, 20, 20, 20]} barSize={15} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}