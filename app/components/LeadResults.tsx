'use client'

import type { Lead } from './LeadSearchClient'

interface LeadResultsProps {
  results: Lead[]
}

export function LeadResults({ results }: LeadResultsProps) {
  if (!results || results.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No leads found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">
        Search Results <span className="text-primary">({results.length})</span>
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Full Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Street Address
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.map((lead, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">
                  {lead.name || 'N/A'}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <a
                    href={`mailto:${lead.email}`}
                    className="text-primary hover:underline"
                  >
                    {lead.email || 'N/A'}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <a
                    href={`tel:${lead.phone}`}
                    className="text-primary hover:underline"
                  >
                    {lead.phone || 'N/A'}
                  </a>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {lead.address || 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
