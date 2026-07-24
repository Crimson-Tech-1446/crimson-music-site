import { Link } from "@tanstack/react-router";
import { Music2 } from "lucide-react";

export function SiteFooter() {
  const openPrefs = () => window.dispatchEvent(new Event("open-cookie-preferences"));
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-[#8b0a24] flex items-center justify-center shadow-crimson">
                <Music2 className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg">
                Crimson<span className="text-gradient-crimson">Music</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A premium music player for iOS and Android. Built with privacy at its core.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact / Data Requests</Link></li>
              <li>
                <button onClick={openPrefs} className="hover:text-foreground text-left">
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Crimson Music. All rights reserved.</p>
          <p>Made with care. Your data stays yours.</p>
        </div>
      </div>
    </footer>
  );
}
