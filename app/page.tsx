"use client";

import { useState } from "react";

export default function PreferredTruckingLanding() {
  const [status, setStatus] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Hello Preferred Trucking LLC,

I'm interested in the Alpha HD A80HDG-E trailer rental at $3,000 per month.

Name: ${data.get("name")}
Company: ${data.get("company") || "Not provided"}
Preferred start date: ${data.get("date")}
Rental duration: ${data.get("duration")}

Load and location:
${data.get("load")}

Please confirm availability, equipment fit and rental terms.

Thank you.`;
    window.location.href =
      "mailto:Eligalarza33@yahoo.com?subject=" +
      encodeURIComponent("Specialized Trailer Rental Inquiry") +
      "&body=" +
      encodeURIComponent(body);
    setStatus(
      "Your email app should open with a draft. Review and send it to complete your inquiry. If it doesn’t open, email Eligalarza33@yahoo.com or call 860-553-1034."
    );
  }

  const year = new Date().getFullYear();

  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Preferred Trucking home">
          <span className="brand-mark">
            P<span> /</span>
          </span>
          <span>
            PREFERRED<span className="brand-sub">TRUCKING LLC</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#equipment">The equipment</a>
          <a href="#specifications">Specifications</a>
          <a className="nav-contact" href="tel:+18605531034">
            860-553-1034
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="line" /> SPECIALIZED TRAILER RENTAL
            </p>
            <h1>
              LONGER LOADS.
              <br />
              <span>MORE POSSIBILITIES.</span>
            </h1>
            <p className="intro">
              An extendable deck. A detachable gooseneck. Heavy-haul capability for the work a
              standard trailer can’t handle.
            </p>
            <div className="rental-price">
              <strong>
                $3,000<span>/month</span>
              </strong>
              <span className="price-caption">2028 Alpha HD · A80HDG-E</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#inquire">
                Inquire about rental
              </a>
              <a className="text-link" href="#specifications">
                Explore the specs
              </a>
            </div>
            <p className="availability">
              Estimated arrival: mid-April 2027 · Ask about advance availability
            </p>
          </div>
          <div className="hero-art" id="equipment">
            <div className="art-top">
              <span>ALPHA HD</span>
              <span>A80HDG-E / 2028</span>
            </div>
            <div className="photo-wrap">
              <img
                src="/trailer.jpg"
                alt="Representative Alpha HD A80HDGC-E trailer, not the ordered unit"
                width={1400}
                height={900}
              />
            </div>
            <div className="art-bottom">
              <span>
                EXTENDABLE.
                <br />
                DETACHABLE.
                <br />
                BUILT FOR HEAVY HAUL.
              </span>
              <span className="photo-note">
                Representative A80HDGC-E shown.
                <br />
                Actual model, color & configuration differ.
              </span>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Key specifications">
          <div>
            <span className="metric-label">RATED CAPACITY*</span>
            <strong>
              80,000 <span>lb</span>
            </strong>
          </div>
          <div>
            <span className="metric-label">EXTENDED MAIN DECK</span>
            <strong>
              50 <span>ft</span>
            </strong>
          </div>
          <div>
            <span className="metric-label">TRAILER WIDTH</span>
            <strong>
              102 <span>in</span>
            </strong>
          </div>
          <div>
            <span className="metric-label">LOADED DECK HEIGHT</span>
            <strong>
              20 <span>in</span>
            </strong>
          </div>
        </section>

        <section className="capabilities section">
          <div className="section-heading">
            <p className="eyebrow">01 / THE RIGHT CONFIGURATION</p>
            <h2>
              Make room for
              <br />
              the demanding jobs.
            </h2>
          </div>
          <div className="feature-list">
            <article>
              <span className="feature-number">01</span>
              <div>
                <h3>Extend your working deck</h3>
                <p>
                  The main deck extends from 28 ft 7 in to 50 ft, giving longer loads the space they
                  need.
                </p>
              </div>
            </article>
            <article>
              <span className="feature-number">02</span>
              <div>
                <h3>Keep your load low</h3>
                <p>
                  A 20-inch loaded main-deck height provides a low platform for taller equipment and
                  specialized freight.
                </p>
              </div>
            </article>
            <article>
              <span className="feature-number">03</span>
              <div>
                <h3>Set up for heavy equipment</h3>
                <p>
                  A 10-foot mechanical-detach gooseneck, 3-position neck connector and 3-foot flip
                  neck support a versatile configuration.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="specs section" id="specifications">
          <div className="section-heading">
            <p className="eyebrow">02 / KNOW YOUR EQUIPMENT</p>
            <h2>
              The details
              <br />
              that do the work.
            </h2>
            <p className="section-note">
              2028 Alpha HD A80HDG-E
              <br />
              Extendable detachable-gooseneck trailer
            </p>
          </div>
          <div className="spec-groups">
            <details open>
              <summary>
                Dimensions &amp; capacity<span>+</span>
              </summary>
              <dl>
                <div>
                  <dt>Overall size</dt>
                  <dd>48 ft × 102 in</dd>
                </div>
                <div>
                  <dt>Main deck, closed</dt>
                  <dd>28 ft 7 in</dd>
                </div>
                <div>
                  <dt>Main deck, extended</dt>
                  <dd>50 ft</dd>
                </div>
                <div>
                  <dt>Main deck height, loaded</dt>
                  <dd>20 in</dd>
                </div>
                <div>
                  <dt>Capacity, closed*</dt>
                  <dd>80,000 lb in 16 ft</dd>
                </div>
                <div>
                  <dt>Capacity, open*</dt>
                  <dd>80,000 lb, 2-point rigid base</dd>
                </div>
                <div>
                  <dt>Rear deck</dt>
                  <dd>9 ft / 40 in loaded height</dd>
                </div>
              </dl>
            </details>
            <details>
              <summary>
                Gooseneck &amp; setup<span>+</span>
              </summary>
              <dl>
                <div>
                  <dt>Gooseneck</dt>
                  <dd>10 ft mechanical-detach</dd>
                </div>
                <div>
                  <dt>Fifth-wheel height</dt>
                  <dd>49 in</dd>
                </div>
                <div>
                  <dt>Kingpin setting</dt>
                  <dd>15 in</dd>
                </div>
                <div>
                  <dt>Swing clearance</dt>
                  <dd>85 in</dd>
                </div>
                <div>
                  <dt>Neck connector</dt>
                  <dd>3-position</dd>
                </div>
                <div>
                  <dt>Flip neck</dt>
                  <dd>3 ft</dd>
                </div>
                <div>
                  <dt>Pony motor</dt>
                  <dd>Honda</dd>
                </div>
              </dl>
            </details>
            <details>
              <summary>
                Running gear &amp; equipment<span>+</span>
              </summary>
              <dl>
                <div>
                  <dt>Axles</dt>
                  <dd>24K / 54 in centers</dd>
                </div>
                <div>
                  <dt>Suspension</dt>
                  <dd>Cush 25K air ride</dd>
                </div>
                <div>
                  <dt>Tires</dt>
                  <dd>255/70R22.5</dd>
                </div>
                <div>
                  <dt>Brakes</dt>
                  <dd>16.5 × 7 in drum</dd>
                </div>
                <div>
                  <dt>ABS</dt>
                  <dd>4S/2M</dd>
                </div>
                <div>
                  <dt>Onboard scale</dt>
                  <dd>Airweigh Quickweigh</dd>
                </div>
                <div>
                  <dt>Rear configuration</dt>
                  <dd>Reinforced for flip axle</dd>
                </div>
                <div>
                  <dt>Finish</dt>
                  <dd>Alpha Black</dd>
                </div>
              </dl>
            </details>
            <p className="capacity-note">
              *Capacity depends on trailer configuration and load distribution. Confirm your load,
              tractor compatibility, route and permit requirements before rental. Final equipment
              configuration and availability are subject to confirmation.
            </p>
          </div>
        </section>

        <section className="inquiry section" id="inquire">
          <div>
            <p className="eyebrow">03 / PLAN YOUR NEXT HAUL</p>
            <h2>
              Your next job.
              <br />
              Let’s talk equipment.
            </h2>
            <p>
              Tell us what you’re moving, when you need the trailer and where the job starts. We’ll
              discuss equipment fit and rental availability.
            </p>
            <a className="phone" href="tel:+18605531034">
              860-553-1034
            </a>
            <a className="email" href="mailto:Eligalarza33@yahoo.com">
              Eligalarza33@yahoo.com
            </a>
          </div>
          <form id="inquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>RENTAL INQUIRY</span>
              <span>$3,000 / month</span>
            </div>
            <label htmlFor="name">
              Your name
              <input id="name" name="name" autoComplete="name" placeholder="Full name" required maxLength={100} />
            </label>
            <label htmlFor="company">
              Company <span className="optional">(optional)</span>
              <input
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Your company"
                maxLength={150}
              />
            </label>
            <div className="form-row">
              <label htmlFor="date">
                Preferred start date
                <input id="date" name="date" type="date" required />
              </label>
              <label htmlFor="duration">
                Rental duration
                <select id="duration" name="duration">
                  <option>1 month</option>
                  <option>2–3 months</option>
                  <option>4–6 months</option>
                  <option>6+ months</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>
            <label htmlFor="load">
              Load &amp; location
              <textarea
                id="load"
                name="load"
                rows={3}
                placeholder="Equipment type, weight, dimensions and pickup location"
                required
                maxLength={2500}
              />
            </label>
            <button className="button primary" type="submit">
              Prepare email inquiry
            </button>
            <p className="form-note">
              Opens your email app with your details. Nothing is sent until you send the email.
              Availability and rental terms must be confirmed.
            </p>
            <p id="form-status" role="status" hidden={!status}>
              {status}
            </p>
          </form>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">
            P<span> /</span>
          </span>
          <span>
            PREFERRED<span className="brand-sub">TRUCKING LLC</span>
          </span>
        </a>
        <p>Specialized equipment. Straightforward rental.</p>
        <span>
          © <span id="year">{year}</span> Preferred Trucking LLC
          <br />
          <a
            href="https://alphahdtrailers.com/products/commercial/a80hdgc-e/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Representative photo © Alpha HD Trailers
          </a>
        </span>
      </footer>
    </>
  );
}
