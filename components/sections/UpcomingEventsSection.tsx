import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { UPCOMING_EVENTS } from "@/data/content";

export function UpcomingEventsSection({
  triggerToast,
}: {
  triggerToast: (msg: string) => void;
}) {
  return (
    <section id="events" className="relative bg-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[34px] sm:text-[42px] font-extrabold tracking-[-0.035em] text-[#0d1033] leading-tight">
              Upcoming Events
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#606482] max-w-[520px] leading-relaxed">
              Join our Wave-1 flagship programs — designed for business
              professionals, developers, and AI practitioners.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              triggerToast("Showing all upcoming workshops and events");
            }}
            className="self-start md:self-auto px-7 py-3 bg-transparent hover:bg-[#f0f3ff] border border-[#304ffe] text-[#304ffe] text-[12px] font-bold uppercase tracking-[0.08em] rounded-[6px] transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            ALL EVENTS
          </button>
        </div>

        {/* Stacked Event Cards */}
        <div className="space-y-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="rounded-[22px] bg-white border border-[#eaedf6] overflow-hidden shadow-[0_12px_35px_rgba(20,24,68,0.06)] hover:shadow-[0_20px_45px_rgba(20,24,68,0.1)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group"
            >
              {/* Left Photo Container */}
              <div className="lg:col-span-5 h-[230px] sm:h-[260px] lg:h-auto overflow-hidden bg-[#f4f6fc]">
                <img
                  src={event.imageUrl}
                  alt={event.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between">
                <div>
                  {/* Flagship Tag Badge */}
                  <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#304ffe] bg-[#f0f3ff] rounded-full mb-3">
                    {event.tag}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0d1033] leading-snug group-hover:text-[#304ffe] transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-[#606482] leading-[1.65]">
                    {event.description}
                  </p>
                </div>

                {/* Metadata Row with subtle divider */}
                <div className="mt-8 pt-6 border-t border-[#f0f2f8] grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-[#606482]">
                  {/* Date & Time */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#304ffe] shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#304ffe] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Venue Location */}
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#304ffe] shrink-0 mt-0.5" />
                    <div className="leading-snug">
                      <span>{event.venueLine1}</span>
                      <br />
                      <span>{event.venueLine2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
