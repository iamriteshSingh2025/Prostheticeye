export const SPECIALITY_CONTACT_LENSES = [
  {
    id: 'scleral-lenses',
    title: 'Scleral & Mini-Scleral Lenses',
    category: 'Corneal Irregularity & Severe Dry Eye',
    shortDesc: 'Large-diameter gas-permeable lenses that vault over the cornea, providing a liquid reservoir for severe dry eyes, Keratoconus, and corneal ectasia.',
    fullDesc: 'Scleral lenses rest on the sclera (white part of the eye) rather than the cornea. By creating a fluid cushion between the lens and cornea, they offer unmatched comfort, hydration, and sharp vision for irregular corneas, Stevens-Johnson Syndrome (SJS), ocular pemphigoid, and severe dry eye disease.',
    features: [
      'Vaults completely over irregular corneas',
      'Provides constant hydration (liquid reservoir)',
      'Ideal for Keratoconus & Post-Corneal Transplants',
      'Exceptional all-day comfort & stability'
    ],
    conditions: ['Keratoconus', 'Stevens-Johnson Syndrome', 'Severe Dry Eye', 'Post-LASIK Ectasia', 'Corneal Scars'],
    badge: 'Popular',
    icon: 'visibility'
  },
  {
    id: 'rose-k-lenses',
    title: 'Rose K Lenses for Keratoconus',
    category: 'Keratoconus Management',
    shortDesc: 'Custom-engineered geometry designed specifically for irregular cone-shaped corneas, offering crisp visual acuity.',
    fullDesc: 'Rose K lenses are globally recognized as the gold standard for Keratoconus fitting. Custom-contoured to match the exact steepness of your cone, they reduce aberrations and deliver sharp optical clarity.',
    features: [
      'Specialized edge-lift customization',
      'High gas permeability for corneal health',
      'Customized cone-matching profiles',
      'Drastically reduces ghosting & halos'
    ],
    conditions: ['Keratoconus', 'Pellucid Marginal Degeneration', 'Corneal Ectasia'],
    badge: 'Gold Standard',
    icon: 'auto_awesome'
  },
  {
    id: 'ortho-k',
    title: 'Orthokeratology (Ortho-K)',
    category: 'Myopia Control & Refractive Correction',
    shortDesc: 'Overnight corneal reshaping lenses that allow clear vision all day without glasses or daytime contact lenses.',
    fullDesc: 'Ortho-K lenses are specially designed therapeutic lenses worn while sleeping. They gently reshape the front surface of the eye overnight, giving you crisp, clear vision during the day without glasses or contact lenses, while slowing down myopia progression in children and young adults.',
    features: [
      'Worn during sleep only',
      'Clear daytime vision without glasses',
      'Slows myopia progression in children',
      'Non-surgical & fully reversible'
    ],
    conditions: ['Myopia (Nearsightedness)', 'Myopia Control in Children', 'Active Lifestyles'],
    badge: 'Night Wear',
    icon: 'nights_stay'
  },
  {
    id: 'rgp-lenses',
    title: 'Rigid Gas Permeable (RGP) Lenses',
    category: 'High Astigmatism & Precision Optics',
    shortDesc: 'Durable, breathable hard lenses providing razor-sharp vision for high astigmatism and corneal irregularities.',
    fullDesc: 'RGP lenses maintain their shape over the cornea, allowing smooth refraction of light. Made from breathable fluorosilicone acrylate materials, RGP lenses provide superior visual acuity compared to soft lenses.',
    features: [
      'Superior visual clarity & high contrast',
      'High oxygen transmission',
      'Long-lasting durability & easy maintenance',
      'Effective for high astigmatism'
    ],
    conditions: ['High Astigmatism', 'Irregular Astigmatism', 'Presbyopia'],
    badge: 'Precision',
    icon: 'adjust'
  },
  {
    id: 'prosthetic-contact-lenses',
    title: 'Prosthetic & Cosmetic Contact Lenses',
    category: 'Ocular Aesthetics & Trauma Masking',
    shortDesc: 'Hand-tinted and custom-pigmented contact lenses designed to mask corneal opacity, discolored iris, or ocular trauma.',
    fullDesc: 'Prosthetic contact lenses restore natural facial symmetry and eye color for patients with corneal scarring, opaque corneas, aniridia (missing iris), or leukocoria. Custom hand-painted or printed iris patterns seamlessly match your fellow healthy eye.',
    features: [
      'Exact color & iris detail matching',
      'Masks white corneal scars & trauma',
      'Reduces glare in aniridia or iris loss',
      'Restores self-confidence & aesthetics'
    ],
    conditions: ['Corneal Opacity / Scars', 'Aniridia (Missing Iris)', 'Iris Coloboma', 'Ocular Trauma'],
    badge: 'Custom Aesthetic',
    icon: 'palette'
  },
  {
    id: 'custom-soft-toric',
    title: 'Custom Soft & Multifocal Speciality Lenses',
    category: 'Custom Fit Soft Lenses',
    shortDesc: 'Tailor-made soft contact lenses with custom base curves, diameters, and prescription power parameters.',
    fullDesc: 'For patients with non-standard corneal curvature, extreme prescriptions, or combined presbyopia and astigmatism, off-the-shelf soft lenses often fail. Our custom soft lenses are crafted to exact micron measurements.',
    features: [
      'Tailored base curves & parameters',
      'Extended power & cylinder ranges',
      'High water content & breathable silicone hydrogel',
      'Multifocal vision at all distances'
    ],
    conditions: ['High Myopia / Hyperopia', 'High Astigmatism', 'Presbyopia'],
    badge: 'Tailor-Made',
    icon: 'tune'
  }
];

export const SPECIALITY_LENS_PROCESS = [
  {
    step: '01',
    title: 'Corneal Topography & Scan',
    description: '3D mapping of the corneal surface to analyze curvature, elevation, and irregularities.'
  },
  {
    step: '02',
    title: 'Diagnostic Trial Fitting',
    description: 'Evaluating trial lenses with fluorescein dye patterns under slit-lamp microscope.'
  },
  {
    step: '03',
    title: 'Custom Lens Ordering',
    description: 'Precision manufacturing of your bespoke specialty lens based on exact eye measurements.'
  },
  {
    step: '04',
    title: 'Dispensing & insertion Training',
    description: 'Patient education on hygiene, safe insertion, removal techniques, and maintenance.'
  },
  {
    step: '05',
    title: 'Follow-Up & Socket Health',
    description: 'Routine follow-ups to ensure long-term comfort, corneal safety, and optical stability.'
  }
];
