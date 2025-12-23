
import React from 'react';

const SystemDocs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn pb-20">
      <section className="space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">ASTI Portal System Architecture</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          The ASTI Portal is designed as a modular, scalable enterprise application using a service-oriented architecture. 
          The primary stack comprises a **React 18+** frontend, **Laravel 10** RESTful API, and **PostgreSQL** for high-integrity relational data management.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            Modular Backend (Laravel)
          </h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex items-start">
              <span className="font-bold text-indigo-600 mr-2">•</span>
              <strong>Auth Module:</strong> JWT-based authentication with Spatie Roles & Permissions.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-indigo-600 mr-2">•</span>
              <strong>Alumni Service:</strong> CRUD for profiles with audit logs and visibility toggles.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-indigo-600 mr-2">•</span>
              <strong>FinOps Service:</strong> Stripe/Billplz integration for payments and donation reconciliation.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-indigo-600 mr-2">•</span>
              <strong>Report Engine:</strong> Aggregated database views for batch/demographic analytics.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-emerald-700 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
            Database Schema (PostgreSQL)
          </h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">•</span>
              <strong>users:</strong> id, email, password, role_id, created_at
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">•</span>
              <strong>alumni_profiles:</strong> user_id, batch, profession, location, bio, is_duta, visibility_level
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">•</span>
              <strong>memberships:</strong> alumni_id, status (enum), expiry_date, total_paid
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-600 mr-2">•</span>
              <strong>donations:</strong> id, alumni_id, category (ASTI/KASIH/IHY), amount, reference_no
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-2xl">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">Security & Privacy (PDPA Compliance)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-indigo-800">
          <div>
            <h5 className="font-bold mb-2">Data Protection</h5>
            <p>Implementation of field-level encryption for sensitive identifying info and TLS 1.3 for all data in transit.</p>
          </div>
          <div>
            <h5 className="font-bold mb-2">Access Control</h5>
            <p>Granular RBAC ensures Admins cannot see private alumni messages, and Alumni only see what's shared publicly.</p>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-800">Key Admin Metrics Mapping</h3>
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left bg-white">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Metric</th>
                <th className="px-6 py-4">Source Module</th>
                <th className="px-6 py-4">Business Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr>
                <td className="px-6 py-4 font-bold">Batch Retention Rate</td>
                <td className="px-6 py-4">Membership + Alumni</td>
                <td className="px-6 py-4">Identifies active vs disengaged graduating classes.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Donation LTV</td>
                <td className="px-6 py-4">Donation Service</td>
                <td className="px-6 py-4">Lifetime value tracking for high-impact contributors.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-bold">Economic Footprint</td>
                <td className="px-6 py-4">ASTInaga Module</td>
                <td className="px-6 py-4">Total headcount and industry reach of alumni businesses.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SystemDocs;
