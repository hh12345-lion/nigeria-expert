import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-[#D1E3D8] bg-[#0D3B2E] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Regions & Countries</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/regions/east-africa" className="hover:text-white">East Africa</Link></li>
              <li><Link href="/regions/west-africa" className="hover:text-white">West Africa</Link></li>
              <li><Link href="/regions/horn-of-africa" className="hover:text-white">Horn of Africa</Link></li>
              <li><Link href="/regions/southern-africa" className="hover:text-white">Southern Africa</Link></li>
              <li><Link href="/regions/north-africa" className="hover:text-white">North Africa</Link></li>
              <li className="pt-2"><Link href="/countries/nigeria" className="hover:text-white">Nigeria</Link> · <Link href="/countries/somalia" className="hover:text-white">Somalia</Link></li>
              <li><Link href="/countries/eritrea" className="hover:text-white">Eritrea</Link> · <Link href="/countries/ethiopia" className="hover:text-white">Ethiopia</Link></li>
              <li><Link href="/countries" className="text-[#C8922A] hover:underline">View all 12 countries →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/guides" className="hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/how-to-instruct" className="hover:text-white">How to Instruct</Link></li>
              <li><Link href="/qualifications" className="hover:text-white">Qualifications</Link></li>
              <li><Link href="/glossary" className="hover:text-white">Glossary</Link></li>
              <li><Link href="/what-is-an-africa-expert-witness" className="hover:text-white">What is an Africa Expert Witness?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">About</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/experts" className="hover:text-white">Our Experts</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          AfricaExpertWitness.com connects UK solicitors with Africa expert witnesses. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
