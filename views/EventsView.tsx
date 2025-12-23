
import React from 'react';

const EventsView: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Events & Networking</h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Upcoming ASTI and Affiliate organization events.</p>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 sm:px-5 sm:py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 text-sm transition-colors">Calendar</button>
          <button className="flex-1 sm:flex-none px-4 py-2 sm:px-5 sm:py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 text-sm transition-all shadow-lg shadow-indigo-100">Add New</button>
        </div>
      </div>

      <div className="space-y-4">
        {[
          { 
            title: 'ASTI Annual Grand Reunion 2024', 
            date: 'Dec 15, 2024', 
            location: 'Grand Ballroom, KL', 
            attendees: 420, 
            tags: ['Official', 'Networking'],
            image: 'https://picsum.photos/800/400?random=1'
          },
          { 
            title: 'IHY Charity Golf Tournament', 
            date: 'Jan 20, 2025', 
            location: 'Royal Selangor Club', 
            attendees: 120, 
            tags: ['Donation', 'Sports'],
            image: 'https://picsum.photos/800/400?random=2'
          },
        ].map((event, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-all group">
            <div className="w-full md:w-48 lg:w-64 h-40 md:h-auto overflow-hidden flex-shrink-0">
               <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 p-5 sm:p-8 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {event.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[9px] font-black uppercase rounded-md border border-indigo-100/50">{t}</span>
                  ))}
                </div>
                <h4 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors leading-tight">{event.title}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm text-slate-500">
                  <span className="flex items-center"><span className="mr-1.5">📅</span>{event.date}</span>
                  <span className="flex items-center truncate"><span className="mr-1.5">📍</span>{event.location}</span>
                  <span className="flex items-center"><span className="mr-1.5">👥</span>{event.attendees} Registered</span>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 pt-5 sm:pt-6">
                 <div className="flex -space-x-2 overflow-hidden order-2 sm:order-1">
                   {[1,2,3,4].map(n => (
                     <img key={n} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/100?u=${n+i}`} alt="" />
                   ))}
                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-400 ring-2 ring-white">+{event.attendees - 4}</div>
                 </div>
                 <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 text-sm order-1 sm:order-2">
                   Register Now
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsView;
