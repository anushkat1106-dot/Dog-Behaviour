import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ChevronRight, Share2, Check, ArrowLeft } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  backHref?: string;
  backLabel?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  backHref,
  backLabel = 'Back'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#7A6A5E] mb-6 pt-2">
      <div className="flex flex-wrap items-center gap-1.5">
        {backHref && (
          <>
            <Link
              href={backHref}
              className="inline-flex items-center gap-1 text-[#8C5E3C] hover:text-[#234231] font-medium mr-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{backLabel}</span>
            </Link>
            <span className="text-[#C4B7A6] mr-2">|</span>
          </>
        )}

        <Link href="/" className="hover:text-[#234231] transition-colors">
          Home
        </Link>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-[#C4B7A6]" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#234231] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#234231] font-semibold truncate max-w-xs sm:max-w-md">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={handleCopyUrl}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE0D2] border border-[#DDD3C0] text-[#5C4F44] hover:text-[#234231] transition-colors cursor-pointer text-xs font-medium shrink-0"
        title="Copy unique page URL"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">URL Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-[#8C5E3C]" />
            <span>Share Page</span>
          </>
        )}
      </button>
    </div>
  );
};
