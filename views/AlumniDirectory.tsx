
import React, { useState } from 'react';
import { MembershipStatus } from '../types';

const mockAlumni = [
  { id: '1', name: 'Zulkifli Amin', batch: '2014', profession: 'Cloud Architect', location: 'Kuala Lumpur', isDuta: true, membershipStatus: MembershipStatus.ACTIVE },
  { id: '2', name: 'Mary Tan', batch: '2016', profession: 'Surgeon', location: 'Singapore', isDuta: false, membershipStatus: MembershipStatus.ACTIVE },
  { id: '3', name: 'Idris Elba', batch: '2010', profession: 'Cinematographer', location: 'London', isDuta: false, membershipStatus: MembershipStatus.INACTIVE },
  { id: '4', name: 'Najwa Latif', batch: '2017', profession: 'Educator', location: 'Selangor', isDuta: true, membershipStatus: MembershipStatus.PARTIAL },
  { id: '5', name: 'Jason Statham', batch: '2012', profession: 'Logistics Manager', location: 'Johor', isDuta: false, membershipStatus: MembershipStatus.PENDING },
  { id: '6', name: 'Fatimah Az-Zahra', batch: '2014', profession: 'Data Scientist', location: 'Kuala Lumpur', isDuta: false, membershipStatus: MembershipStatus.ACTIVE },
  { id: '7', name: 'Chong Wei', batch: '2015', profession: 'Business Consultant', location: 'Penang', isDuta: true, membershipStatus: MembershipStatus.ACTIVE },
];

const AlumniDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBatch, setFilterBatch] = useState('ALL');
  const [filterDuta, setFilterDuta] = useState('ALL');
  const [filterLocation, setFilterLocation] = useState('ALL');
  const [filterMembership, setFilterMembership] = useState('ALL');
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique locations for the filter
  const uniqueLocations = Array.from(new Set(mockAlumni.map(a => a.location))).sort();

  const filteredAlumni = mockAlumni.filter(a => {
    const matchesSearch = 
      a.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      a.profession.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesBatch = filterBatch === 'ALL' || a.batch === filterBatch;
    const matchesDuta = filterDuta === 'ALL' || (filterDuta === 'YES' ? a.isDuta : !a.isDuta);
    const matchesLocation = filterLocation === 'ALL' || a.location === filterLocation;
    const matchesMembership = filterMembership === 'ALL' || a.membershipStatus === filterMembership;

    return matchesSearch && matchesBatch && matchesDuta && matchesLocation && matchesMembership;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search and Main Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          <div className="relative flex-1">
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search by name or profession..."
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3.5 rounded-2xl border flex items-center gap-2 font-bold text-sm transition-all ${
                showFilters || filterBatch !== 'ALL' || filterDuta !== 'ALL' || filterLocation !== 'ALL' || filterMembership !== 'ALL'
                ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>{showFilters ? 'Hide Filters' : 'More Filters'}</span>
              {(filterBatch !== 'ALL' || filterDuta !== 'ALL' || filterLocation !== 'ALL' || filterMembership !== 'ALL') && (
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              )}
            </button>
            <button className="hidden sm:block px-6 py-3.5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 text-sm whitespace-nowrap active:scale-95">
              Export Directory
            </button>
          </div>
        </div>

        {/* Granular Filters Grid */}
        {(showFilters) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 animate-slideDown">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Batch</label>
              <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-semibold text-slate-700 appearance-none cursor-pointer"
                value={filterBatch}
                onChange={(e) => setFilterBatch(e.target.value)}
              >
                <option value="ALL">All Batches</option>
                {Array.from(new Set(mockAlumni.map(a => a.batch))).sort().map(batch => (
                  <option key={batch} value={batch}>Batch {batch}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location</label>
              <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-semibold text-slate-700 appearance-none cursor-pointer"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              >
                <option value="ALL">Any Location</option>
                {uniqueLocations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Duta Status</label>
              <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-semibold text-slate-700 appearance-none cursor-pointer"
                value={filterDuta}
                onChange={(e) => setFilterDuta(e.target.value)}
              >
                <option value="ALL">All Roles</option>
                <option value="YES">Duta Only</option>
                <option value="NO">Non-Duta Only</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Membership</label>
              <select 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm font-semibold text-slate-700 appearance-none cursor-pointer"
                value={filterMembership}
                onChange={(e) => setFilterMembership(e.target.value)}
              >
                <option value="ALL">Any Status</option>
                {Object.values(MembershipStatus).map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between px-2">
        <p className="text-sm font-medium text-slate-500">
          Showing <span className="text-slate-900 font-bold">{filteredAlumni.length}</span> matching alumni
        </p>
        {(filterBatch !== 'ALL' || filterDuta !== 'ALL' || filterLocation !== 'ALL' || filterMembership !== 'ALL' || searchTerm) && (
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilterBatch('ALL');
              setFilterDuta('ALL');
              setFilterLocation('ALL');
              setFilterMembership('ALL');
            }}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
          >
            Clear all filters
            <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        )}
      </div>

      {/* Alumni Cards Grid */}
      {filteredAlumni.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden flex flex-col justify-between">
              {alumni.isDuta && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[9px] font-black px-4 py-1.5 rounded-bl-2xl shadow-md uppercase tracking-widest z-10">
                  Duta Batch
                </div>
              )}
              <div>
                <div className="flex items-start space-x-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(alumni.name)}&background=${alumni.isDuta ? '6366f1' : 'f1f5f9'}&color=${alumni.isDuta ? 'fff' : '475569'}&bold=true`} 
                      alt={alumni.name} 
                      className="w-14 h-14 sm:w-20 sm:h-20 rounded-3xl object-cover border-2 border-white shadow-sm flex-shrink-0"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                      alumni.membershipStatus === MembershipStatus.ACTIVE ? 'bg-emerald-500' : 
                      alumni.membershipStatus === MembershipStatus.PARTIAL ? 'bg-amber-500' : 'bg-slate-300'
                    }`} title={`Membership: ${alumni.membershipStatus}`} />
                  </div>
                  <div className="min-w-0 pt-1">
                    <h5 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors truncate tracking-tight">{alumni.name}</h5>
                    <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">Batch {alumni.batch}</p>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center text-slate-600 text-xs sm:text-sm bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-semibold truncate">{alumni.profession}</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-xs sm:text-sm bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 text-indigo-600 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold truncate">{alumni.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button className="flex-1 py-3.5 text-xs font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 rounded-2xl hover:bg-indigo-100 transition-all active:scale-95">
                  Full Profile
                </button>
                <button className="w-12 h-12 flex items-center justify-center text-slate-400 bg-slate-50 rounded-2xl hover:text-indigo-600 hover:bg-indigo-50 border border-slate-100 transition-all flex-shrink-0 active:scale-95">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white py-20 px-6 rounded-[3rem] border border-dashed border-slate-200 text-center animate-fadeIn">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No matching alumni found</h3>
          <p className="text-slate-500 max-w-sm mx-auto">Try adjusting your filters or search terms to find what you're looking for.</p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setFilterBatch('ALL');
              setFilterDuta('ALL');
              setFilterLocation('ALL');
              setFilterMembership('ALL');
            }}
            className="mt-8 px-8 py-3 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all text-sm active:scale-95"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AlumniDirectory;
