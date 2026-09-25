import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS, SITE_CONFIG } from '../config/siteConfig';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Header Box */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            5.0 Star Rating on Google
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Backed by <span className="font-semibold text-slate-900">53 verified Google reviews</span> from
            property buyers, sellers, and plot investors across Bokaro Steel City.
          </p>
        </div>

        {/* Google Scorecard Banner */}
        <div className="mb-10 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Google "G" Badge Icon */}
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-bold text-slate-900 font-mono tabular-nums">
                  5.0
                </span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Google Reviews Verified · <strong className="font-semibold text-slate-900">53 Reviews</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              AYUSH PROPERTIES DEALER · Sector 4 Bokaro
            </span>
          </div>
        </div>

        {/* Real Customer Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & source tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {review.source}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{review.review}"
                </p>
              </div>

              {/* Author & Context (Unboxed metadata) */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900">
                    {review.author}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {review.location}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Google verification */}
        <p className="mt-8 text-center text-xs text-slate-500">
          Reviews and 5.0 rating collected via Google Business Profile for AYUSH PROPERTIES DEALER, Bokaro Steel City.
        </p>
      </div>
    </section>
  );
};
