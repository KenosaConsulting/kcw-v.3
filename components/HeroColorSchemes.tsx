// Color Scheme Options for "New Horizons? We've Been There."

// Option 1: Trust & Gold (CURRENTLY APPLIED)
// Question: Trust Blue (#1E3A5F)
// Answer: Gold Gradient (#D4AF37)
const ColorScheme1 = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-trust-blue">New Horizons?</span>
    <br />
    <span className="text-gradient-gold descender-safe">We've Been There.</span>
  </h1>
);

// Option 2: Navy & Gold (Premium/Executive)
// Question: Executive Navy (#0A1628)
// Answer: Gold Gradient
const ColorScheme2 = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-executive-navy">New Horizons?</span>
    <br />
    <span className="text-gradient-gold descender-safe">We've Been There.</span>
  </h1>
);

// Option 3: Reversed Gold & Navy
// Question: Gold Gradient (catches attention)
// Answer: Executive Navy (authoritative)
const ColorScheme3 = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-gradient-gold descender-safe">New Horizons?</span>
    <br />
    <span className="text-executive-navy">We've Been There.</span>
  </h1>
);

// Option 4: Subtle to Bold
// Question: Lighter trust blue
// Answer: Bold navy gradient
const ColorScheme4 = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-trust-blue/80">New Horizons?</span>
    <br />
    <span className="text-gradient-navy descender-safe">We've Been There.</span>
  </h1>
);

// Option 5: Monochrome Navy (Sophisticated)
// Both in navy tones with different weights
const ColorScheme5 = () => (
  <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight font-bold">
    <span className="text-trust-blue font-normal">New Horizons?</span>
    <br />
    <span className="text-executive-navy">We've Been There.</span>
  </h1>
);

export { ColorScheme1, ColorScheme2, ColorScheme3, ColorScheme4, ColorScheme5 };