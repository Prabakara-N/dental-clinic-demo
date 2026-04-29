export type BlogCategory =
  | "preventive-care"
  | "orthodontics"
  | "cosmetic-dentistry"
  | "oral-health-tips"
  | "dental-procedures"
  | "pediatric-dentistry";

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly image: string;
  readonly category: BlogCategory;
  readonly tags: readonly string[];
  readonly author: {
    readonly name: string;
    readonly qualifications: string;
  };
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly readingTime: number;
}

interface CategoryInfo {
  readonly slug: BlogCategory;
  readonly label: string;
  readonly count: number;
}

const AUTHOR = {
  name: "Dr. Umamaheshwari S",
  qualifications: "BDS",
} as const;

const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "how-often-visit-dentist",
    title: "How Often Should You Visit a Dentist?",
    excerpt:
      "Regular dental check-ups every 6 months can prevent serious problems and save you money in the long run. Learn why preventive care is the best investment for your oral health.",
    content: `<p>One of the most common questions patients ask us at Kurinji Dental Centre is: <strong>"How often should I visit the dentist?"</strong> The short answer is every 6 months — but let's explore why this matters and what happens during a routine dental visit.</p>

<h2>Why Every 6 Months?</h2>
<p>Many dental problems develop silently. Cavities, gum disease, and even oral cancer can progress without noticeable symptoms in their early stages. By the time you feel pain or notice something wrong, the problem has often become more complex — and more expensive — to treat.</p>
<p>A routine check-up allows your dentist to catch issues early when they're small and manageable. For example, a tiny cavity caught during a check-up might need a simple ₹500 filling. Left undetected for a year, that same cavity could require a root canal costing ₹5,000 or more.</p>

<h2>What Happens During a Dental Check-up?</h2>
<p>At Kurinji Dental, a typical check-up includes:</p>
<ul>
<li><strong>Visual examination</strong> — checking each tooth for decay, cracks, or wear</li>
<li><strong>Gum health assessment</strong> — measuring gum pockets to detect early gum disease</li>
<li><strong>Oral cancer screening</strong> — examining soft tissues for any unusual changes</li>
<li><strong>Digital X-rays</strong> (if needed) — revealing problems below the gum line that aren't visible to the naked eye</li>
<li><strong>Professional cleaning</strong> — removing plaque and tartar buildup that brushing alone can't handle</li>
</ul>

<h2>Who Needs More Frequent Visits?</h2>
<p>Some patients benefit from more frequent check-ups (every 3-4 months):</p>
<ul>
<li>Patients with a history of gum disease</li>
<li>Smokers and tobacco users</li>
<li>Diabetics (diabetes increases gum disease risk)</li>
<li>Pregnant women (hormonal changes affect gum health)</li>
<li>People with weakened immune systems</li>
</ul>

<h2>The Cost of Skipping Check-ups</h2>
<p>We understand that life gets busy and dental visits can feel like a low priority when nothing hurts. But preventive care is always cheaper than restorative care. A ₹500 cleaning today can prevent a ₹25,000 implant tomorrow.</p>

<h2>Book Your Check-up</h2>
<p>If it's been more than 6 months since your last dental visit, now is the perfect time to schedule one. At Kurinji Dental Centre in Tiruppur, we make check-ups quick, comfortable, and affordable. Call us at 96001-23456 or book online.</p>`,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    category: "preventive-care",
    tags: ["dental check-up", "preventive care", "oral health", "dentist visit"],
    author: AUTHOR,
    publishedAt: "2025-12-15",
    updatedAt: "2026-02-10",
    readingTime: 5,
  },
  {
    slug: "braces-for-adults",
    title: "Braces for Adults: It's Never Too Late for a Perfect Smile",
    excerpt:
      "Think braces are only for teenagers? Think again! More adults than ever are getting orthodontic treatment. Discover your options for a straighter smile at any age.",
    content: `<p>At Kurinji Dental Centre, nearly <strong>40% of our orthodontic patients are adults</strong>. If you've been putting off getting braces because you think you're "too old," let us set the record straight — it's never too late to straighten your teeth.</p>

<h2>Why Are More Adults Getting Braces?</h2>
<p>Several factors are driving the adult orthodontics trend:</p>
<ul>
<li><strong>Invisible options</strong> — ceramic braces and clear aligners are nearly invisible, removing the "metal mouth" stigma</li>
<li><strong>Health benefits</strong> — straight teeth are easier to clean, reducing cavity and gum disease risk</li>
<li><strong>Professional confidence</strong> — a great smile boosts confidence in meetings, presentations, and social situations</li>
<li><strong>Better technology</strong> — modern treatments are faster and more comfortable than ever</li>
</ul>

<h2>Your Options at Kurinji Dental</h2>

<h3>1. Metal Braces (₹25,000 - ₹40,000)</h3>
<p>Traditional metal braces remain the most effective option for complex cases. Modern brackets are smaller and more comfortable than the ones you might remember from decades ago. Treatment typically takes 12-24 months.</p>

<h3>2. Ceramic Braces (₹35,000 - ₹55,000)</h3>
<p>Ceramic braces use tooth-colored brackets that blend with your natural teeth. They work just as effectively as metal braces but are far less noticeable. A popular choice among working professionals.</p>

<h3>3. Clear Aligners (₹60,000 - ₹1,50,000)</h3>
<p>Clear aligners are custom-made, removable trays that gradually shift your teeth into position. They're virtually invisible, and you can remove them to eat and brush. Ideal for mild to moderate alignment issues.</p>

<h2>How Long Does Adult Treatment Take?</h2>
<p>Treatment duration depends on the complexity of your case:</p>
<ul>
<li><strong>Mild crowding:</strong> 6-12 months</li>
<li><strong>Moderate alignment issues:</strong> 12-18 months</li>
<li><strong>Complex cases:</strong> 18-24 months</li>
</ul>
<p>Adult teeth can be moved just as effectively as younger teeth — it simply requires a bit more patience.</p>

<h2>EMI Options Available</h2>
<p>We understand that orthodontic treatment is a significant investment. That's why we offer flexible EMI options through Bajaj Finserv, HDFC, and ICICI for treatments above ₹10,000. You can start your journey to a perfect smile with a manageable monthly payment.</p>

<h2>Take the First Step</h2>
<p>Book a free orthodontic consultation at Kurinji Dental Centre, Tiruppur. Dr. Umamaheshwari (BDS) will assess your teeth and recommend the best treatment option for your needs and budget.</p>`,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    category: "orthodontics",
    tags: ["braces", "adult braces", "clear aligners", "orthodontics", "teeth straightening"],
    author: AUTHOR,
    publishedAt: "2026-01-08",
    updatedAt: "2026-03-15",
    readingTime: 6,
  },
  {
    slug: "foods-damaging-teeth",
    title: "5 Foods That Are Secretly Damaging Your Teeth",
    excerpt:
      "Some foods that seem healthy can actually harm your teeth. Learn about hidden dangers in your diet and how to protect your smile while eating well.",
    content: `<p>You brush twice a day and floss regularly — but did you know that some of the foods you eat every day could be quietly damaging your teeth? At Kurinji Dental Centre, we see the effects of dietary choices on dental health every day. Here are five surprising culprits.</p>

<h2>1. Citrus Fruits and Juices</h2>
<p>Oranges, lemons, and grapefruits are packed with vitamin C, but their high acidity erodes tooth enamel over time. The acid softens the enamel, making teeth vulnerable to decay.</p>
<p><strong>Tip:</strong> Don't brush immediately after consuming citrus — wait at least 30 minutes. The acid temporarily softens enamel, and brushing right away can cause more damage. Rinse your mouth with plain water instead.</p>

<h2>2. Dried Fruits</h2>
<p>Raisins, dried apricots, and dates might seem like healthy snack alternatives, but they're extremely sticky and packed with concentrated sugar. They cling to teeth and get trapped in crevices, feeding bacteria for hours.</p>
<p><strong>Tip:</strong> If you eat dried fruits, rinse your mouth and floss afterward. Better yet, choose fresh fruits instead.</p>

<h2>3. Sports and Energy Drinks</h2>
<p>These drinks are marketed as healthy hydration options, but they're often loaded with sugar and citric acid — a double threat to your teeth. A single 500ml bottle can contain up to 15 teaspoons of sugar.</p>
<p><strong>Tip:</strong> Stick to plain water for hydration. If you must have a sports drink, use a straw to minimize contact with teeth.</p>

<h2>4. Chips and Crackers</h2>
<p>Starchy snacks break down into sugars in your mouth and tend to get stuck between teeth. The bacteria in your mouth feast on these starches, producing acid that causes cavities.</p>
<p><strong>Tip:</strong> After snacking on chips, floss to remove particles stuck between teeth. Pairing starchy snacks with cheese can help neutralize acids.</p>

<h2>5. Ice</h2>
<p>Chewing ice might seem harmless — it's just water, right? But the hardness and cold temperature of ice can crack or chip teeth, damage fillings, and irritate the soft tissue inside your teeth.</p>
<p><strong>Tip:</strong> If you like cold drinks, let the ice melt in your mouth instead of chewing. Or use crushed ice if you must chew.</p>

<h2>Foods That Are Good for Your Teeth</h2>
<p>Not all food news is bad! These foods actually help protect your teeth:</p>
<ul>
<li><strong>Cheese and dairy</strong> — rich in calcium and casein, which strengthen enamel</li>
<li><strong>Crunchy vegetables</strong> — carrots, celery, and cucumbers stimulate saliva production and naturally clean teeth</li>
<li><strong>Green tea</strong> — contains compounds that fight bacteria and reduce acid production</li>
<li><strong>Water</strong> — the best drink for your teeth, especially fluoridated water</li>
</ul>

<h2>Protect Your Smile</h2>
<p>A balanced diet combined with regular dental check-ups is the best way to keep your teeth healthy. If you're concerned about the effects of your diet on your dental health, visit us at Kurinji Dental Centre for a comprehensive check-up.</p>`,
    image:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=400&fit=crop",
    category: "oral-health-tips",
    tags: ["diet and teeth", "foods bad for teeth", "oral health tips", "dental care"],
    author: AUTHOR,
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    readingTime: 5,
  },
  {
    slug: "teeth-whitening-safe",
    title: "Is Teeth Whitening Safe? What You Need to Know",
    excerpt:
      "Professional teeth whitening is one of the most popular cosmetic dental treatments. Learn about the process, safety, and what results you can expect.",
    content: `<p>A bright, white smile is one of the most sought-after cosmetic improvements. But with so many whitening products and methods available — from drugstore strips to professional treatments — it's natural to wonder: <strong>is teeth whitening actually safe?</strong></p>

<h2>The Short Answer: Yes, When Done Professionally</h2>
<p>Professional teeth whitening performed by a qualified dentist is safe and effective. The key word is "professional." Over-the-counter products and DIY hacks (like charcoal or baking soda) can damage your enamel if used incorrectly.</p>

<h2>How Professional Whitening Works</h2>
<p>At Kurinji Dental Centre, we use a controlled concentration of hydrogen peroxide or carbamide peroxide gel. Here's the process:</p>
<ol>
<li><strong>Assessment</strong> — we check your teeth and gums to ensure you're a good candidate</li>
<li><strong>Protection</strong> — a barrier is applied to protect your gums from the whitening agent</li>
<li><strong>Application</strong> — the professional-grade whitening gel is applied to your teeth</li>
<li><strong>Activation</strong> — a special light may be used to enhance the whitening process</li>
<li><strong>Results</strong> — teeth can be 3-8 shades whiter in a single session</li>
</ol>

<h2>Professional vs. DIY: Why It Matters</h2>
<table>
<tr><td><strong>Feature</strong></td><td><strong>Professional</strong></td><td><strong>DIY/OTC</strong></td></tr>
<tr><td>Effectiveness</td><td>3-8 shades whiter</td><td>1-2 shades</td></tr>
<tr><td>Speed</td><td>1 session (45-60 min)</td><td>2-4 weeks</td></tr>
<tr><td>Safety</td><td>Supervised, customized</td><td>Risk of overuse</td></tr>
<tr><td>Gum protection</td><td>Professional barrier</td><td>No protection</td></tr>
<tr><td>Longevity</td><td>1-3 years</td><td>3-6 months</td></tr>
</table>

<h2>Who Should Avoid Whitening?</h2>
<p>Whitening isn't suitable for everyone. We recommend against it for:</p>
<ul>
<li>Children under 16 (tooth pulp is still developing)</li>
<li>Pregnant or nursing women (as a precaution)</li>
<li>Patients with severe gum disease (must be treated first)</li>
<li>Patients with very sensitive teeth (alternative treatments available)</li>
</ul>

<h2>Common Myths Debunked</h2>
<p><strong>"Whitening damages enamel"</strong> — Professional whitening does NOT damage enamel. It works on the stains within the enamel, not the enamel structure itself.</p>
<p><strong>"Results are permanent"</strong> — Whitening results last 1-3 years depending on your diet and habits. Coffee, tea, and tobacco will gradually re-stain teeth.</p>
<p><strong>"All whitening products are the same"</strong> — Professional-grade products are significantly stronger and more effective than over-the-counter options.</p>

<h2>Pricing at Kurinji Dental</h2>
<p>Professional teeth whitening at our clinic costs ₹5,000 - ₹15,000, depending on the method and number of sessions. EMI options are available. Book a consultation to find out which option is right for you.</p>`,
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&h=400&fit=crop",
    category: "cosmetic-dentistry",
    tags: ["teeth whitening", "cosmetic dentistry", "smile makeover", "whitening safety"],
    author: AUTHOR,
    publishedAt: "2026-02-05",
    updatedAt: "2026-02-05",
    readingTime: 6,
  },
  {
    slug: "root-canal-treatment-tiruppur-painless",
    title: "Root Canal Treatment in Tiruppur — Is It Really Painful?",
    excerpt:
      "Root canal has a scary reputation, but modern treatment is virtually painless. Learn what actually happens during an RCT and why you shouldn't be afraid.",
    content: `<p>If there's one dental procedure that strikes fear into people's hearts, it's the root canal. But here's the truth that most people don't know: <strong>modern root canal treatment is no more painful than getting a filling.</strong> In fact, it's the treatment that <em>stops</em> your pain.</p>

<h2>What Is a Root Canal?</h2>
<p>A root canal treatment (RCT) is a procedure to save a badly infected or damaged tooth. Inside every tooth is a soft tissue called the "pulp" that contains nerves and blood vessels. When this pulp gets infected — usually from deep decay or a crack — it causes severe pain.</p>
<p>During RCT, we remove the infected pulp, clean and disinfect the inside of the tooth, and seal it with a filling. A crown is then placed on top to protect the tooth.</p>

<h2>Why Does Root Canal Have a Bad Reputation?</h2>
<p>The root canal's scary reputation dates back decades when dental technology was far less advanced. Older techniques used manual instruments and less effective anesthesia. Today, the experience is completely different:</p>
<ul>
<li><strong>Advanced anesthesia</strong> — you won't feel any pain during the procedure</li>
<li><strong>Rotary instruments</strong> — faster, more precise, and more comfortable than manual files</li>
<li><strong>Digital X-rays</strong> — accurate imaging with minimal radiation</li>
<li><strong>Single-sitting RCT</strong> — many cases can be completed in just one visit (45-60 minutes)</li>
</ul>

<h2>Signs You Might Need a Root Canal</h2>
<ul>
<li>Severe, persistent toothache (especially at night)</li>
<li>Prolonged sensitivity to hot or cold</li>
<li>Darkening of a tooth</li>
<li>Swelling or tenderness in nearby gums</li>
<li>A pimple-like bump on the gums</li>
</ul>
<p>If you're experiencing any of these symptoms, don't wait — early treatment is simpler and more effective.</p>

<h2>What to Expect at Kurinji Dental</h2>
<ol>
<li><strong>Diagnosis</strong> — digital X-ray to assess the infection</li>
<li><strong>Anesthesia</strong> — the area is completely numbed</li>
<li><strong>Treatment</strong> — infected pulp is removed and canals are cleaned</li>
<li><strong>Filling</strong> — canals are sealed with biocompatible material</li>
<li><strong>Crown</strong> — a protective crown is placed (may be in a follow-up visit)</li>
</ol>

<h2>Cost of Root Canal in Tiruppur</h2>
<p>At Kurinji Dental Centre, root canal treatment costs ₹3,000 - ₹8,000 per tooth, depending on the tooth location and complexity. This is a fraction of the cost of extracting the tooth and replacing it with an implant (₹25,000+).</p>

<h2>Save Your Natural Tooth</h2>
<p>A root canal saves your natural tooth, which is always better than an artificial replacement. Your natural tooth has better biting force, sensation, and appearance. Don't let fear prevent you from saving your tooth — visit Kurinji Dental for a comfortable, painless experience.</p>`,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
    category: "dental-procedures",
    tags: ["root canal", "RCT", "painless dentistry", "dental treatment", "tiruppur dentist"],
    author: AUTHOR,
    publishedAt: "2026-02-20",
    updatedAt: "2026-03-10",
    readingTime: 6,
  },
  {
    slug: "dental-implant-cost-tiruppur-guide",
    title: "Dental Implant Cost in Tiruppur — Complete Guide 2026",
    excerpt:
      "Considering dental implants? This comprehensive guide covers costs, procedure steps, recovery time, and why implants are worth the investment.",
    content: `<p>Missing a tooth? Dental implants are the gold standard for tooth replacement — they look, feel, and function like natural teeth. If you're considering implants in Tiruppur, here's everything you need to know about the cost, procedure, and what to expect.</p>

<h2>What Are Dental Implants?</h2>
<p>A dental implant consists of three parts:</p>
<ol>
<li><strong>Titanium post</strong> — a small screw placed into your jawbone (acts as the tooth root)</li>
<li><strong>Abutment</strong> — a connector piece that sits on top of the implant</li>
<li><strong>Crown</strong> — the visible, natural-looking tooth on top</li>
</ol>
<p>Once placed, an implant integrates with your jawbone through a process called osseointegration, creating an incredibly strong and permanent foundation.</p>

<h2>Dental Implant Cost in Tiruppur</h2>
<p>At Kurinji Dental Centre, a single dental implant costs <strong>₹25,000 - ₹40,000</strong>. This includes:</p>
<ul>
<li>Consultation and CT scan</li>
<li>Titanium implant placement</li>
<li>Abutment and crown</li>
<li>Follow-up visits</li>
</ul>
<p>The cost varies based on the implant brand, crown material (zirconia vs. metal-ceramic), and case complexity.</p>

<h2>Why Are Implants Worth the Investment?</h2>
<p>Compared to other tooth replacement options:</p>
<ul>
<li><strong>Bridges</strong> (₹8,000 - ₹25,000) — require grinding down healthy adjacent teeth; last 7-10 years</li>
<li><strong>Dentures</strong> (₹5,000 - ₹25,000) — removable, can slip, affect taste; need replacement every 5-7 years</li>
<li><strong>Implants</strong> (₹25,000 - ₹40,000) — permanent, no effect on adjacent teeth; can last a lifetime with proper care</li>
</ul>
<p>When you factor in the longevity and quality of life benefits, implants are often the most cost-effective long-term solution.</p>

<h2>The Implant Procedure Step by Step</h2>
<ol>
<li><strong>Consultation & planning</strong> — examination, CT scan, treatment plan</li>
<li><strong>Implant placement</strong> — titanium post is surgically placed (under local anesthesia, painless)</li>
<li><strong>Healing period</strong> — 3-6 months for osseointegration</li>
<li><strong>Abutment placement</strong> — connector is attached to the implant</li>
<li><strong>Crown fitting</strong> — custom-made crown is placed on top</li>
</ol>

<h2>Am I a Good Candidate?</h2>
<p>Most adults with good general health are candidates for dental implants. However, certain conditions may require evaluation:</p>
<ul>
<li>Sufficient jawbone density (bone grafting may be needed if bone has been lost)</li>
<li>Healthy gums (gum disease must be treated first)</li>
<li>Controlled diabetes</li>
<li>Non-smoker or willing to quit during healing</li>
</ul>

<h2>EMI Options</h2>
<p>We offer flexible EMI payment options through Bajaj Finserv, HDFC, and ICICI, making implants accessible to more patients. You can start your treatment with a manageable monthly payment.</p>

<h2>Book Your Implant Consultation</h2>
<p>Visit Kurinji Dental Centre in Anupparpalayam, Tiruppur for a thorough assessment. Dr. Umamaheshwari will create a personalized treatment plan and give you an exact cost estimate based on your specific needs.</p>`,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    category: "dental-procedures",
    tags: ["dental implants", "implant cost", "tooth replacement", "tiruppur dentist"],
    author: AUTHOR,
    publishedAt: "2026-03-01",
    updatedAt: "2026-04-01",
    readingTime: 7,
  },
  {
    slug: "child-first-dental-visit",
    title: "When Should Your Child First Visit a Dentist?",
    excerpt:
      "The American Academy of Pediatric Dentistry recommends a child's first dental visit by age 1. Here's why early visits matter and how to prepare your child.",
    content: `<p>Many parents assume that dental visits should start when all baby teeth have come in, or when a child starts school. But dental experts worldwide recommend that <strong>a child's first dental visit should happen by their first birthday</strong> — or within 6 months of the first tooth appearing.</p>

<h2>Why So Early?</h2>
<p>Early dental visits serve several important purposes:</p>
<ul>
<li><strong>Detect early problems</strong> — cavities can form as soon as teeth appear</li>
<li><strong>Establish a dental home</strong> — children who visit the dentist early are less likely to develop dental anxiety</li>
<li><strong>Parent education</strong> — we teach parents about proper brushing technique, diet, and fluoride use</li>
<li><strong>Monitor development</strong> — checking that teeth and jaws are developing normally</li>
</ul>

<h2>What Happens at the First Visit?</h2>
<p>A first dental visit for a toddler is gentle and brief:</p>
<ul>
<li>The child sits on the parent's lap in the dental chair</li>
<li>Dr. Umamaheshwari does a gentle visual examination of teeth and gums</li>
<li>We check for early cavities, mouth breathing habits, and bite issues</li>
<li>A quick cleaning if needed</li>
<li>Guidance on brushing, diet, thumb-sucking, and pacifier use</li>
</ul>
<p>The entire visit typically takes 15-20 minutes. Our goal is to make it a positive, fun experience so your child looks forward to future visits.</p>

<h2>Common Dental Problems in Children</h2>
<ul>
<li><strong>Baby bottle tooth decay</strong> — caused by prolonged bottle feeding, especially at night</li>
<li><strong>Thumb sucking</strong> — harmless in infants, but can affect tooth alignment if continued past age 3</li>
<li><strong>Early cavities</strong> — children's thinner enamel makes them more prone to decay</li>
<li><strong>Tongue thrust</strong> — a swallowing pattern that can push teeth out of alignment</li>
</ul>

<h2>Tips for Parents</h2>
<ol>
<li><strong>Start brushing early</strong> — use a soft cloth on gums before teeth appear, then switch to a tiny soft brush</li>
<li><strong>Use fluoride toothpaste</strong> — a rice-grain amount for under-3, pea-size for 3-6 year olds</li>
<li><strong>Limit sugary drinks</strong> — avoid juice in bottles, especially at bedtime</li>
<li><strong>Lead by example</strong> — let your child watch you brush and floss</li>
<li><strong>Make it fun</strong> — use colorful brushes, sing songs, or use a timer app</li>
</ol>

<h2>Our Child-Friendly Clinic</h2>
<p>At Kurinji Dental Centre, we love treating kids! Our clinic has a welcoming environment where children feel safe and comfortable. We take extra time to explain everything in child-friendly language and never rush a nervous child.</p>

<h2>Book Your Child's First Visit</h2>
<p>Don't wait for a problem to bring your child to the dentist. Schedule their first visit at Kurinji Dental Centre, Tiruppur. Pediatric dental check-ups start at just ₹300-₹500.</p>`,
    image:
      "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=600&h=400&fit=crop",
    category: "pediatric-dentistry",
    tags: ["pediatric dentistry", "child dental visit", "baby teeth", "children dental care"],
    author: AUTHOR,
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-10",
    readingTime: 5,
  },
  {
    slug: "metal-braces-vs-clear-aligners",
    title: "How to Choose Between Metal Braces and Clear Aligners",
    excerpt:
      "Metal braces or clear aligners? Both straighten teeth, but they work differently. This guide helps you pick the right option based on your needs and budget.",
    content: `<p>So you've decided to straighten your teeth — congratulations! The next big question is: <strong>metal braces or clear aligners?</strong> Both are effective orthodontic treatments, but they differ in cost, appearance, comfort, and suitability. Here's a detailed comparison to help you decide.</p>

<h2>Metal Braces: The Proven Classic</h2>
<p>Metal braces use brackets bonded to your teeth and connected by a wire. Your orthodontist adjusts the wire periodically to gradually move your teeth into the correct position.</p>
<p><strong>Pros:</strong></p>
<ul>
<li>Most effective for complex cases (severe crowding, large gaps, significant bite issues)</li>
<li>Most affordable option (₹25,000 - ₹40,000 at Kurinji Dental)</li>
<li>No compliance required — they work 24/7 since they can't be removed</li>
<li>Faster results for complex cases</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li>Visible metal appearance</li>
<li>Food restrictions (no sticky or very hard foods)</li>
<li>Can be uncomfortable after adjustments</li>
<li>Requires more careful brushing and flossing</li>
</ul>

<h2>Clear Aligners: The Modern Alternative</h2>
<p>Clear aligners are a series of custom-made, transparent plastic trays that you wear over your teeth. You switch to a new set of trays every 1-2 weeks as your teeth gradually shift.</p>
<p><strong>Pros:</strong></p>
<ul>
<li>Nearly invisible — most people won't notice them</li>
<li>Removable — eat anything you want, brush and floss normally</li>
<li>More comfortable — no brackets or wires to irritate your cheeks</li>
<li>Fewer dental visits required</li>
</ul>
<p><strong>Cons:</strong></p>
<ul>
<li>Higher cost (₹60,000 - ₹1,50,000)</li>
<li>Requires discipline — must be worn 20-22 hours per day</li>
<li>Not suitable for all cases (complex movements may require braces)</li>
<li>Trays can be lost or damaged</li>
</ul>

<h2>Quick Comparison</h2>
<ul>
<li><strong>Cost:</strong> Braces ₹25K-40K vs. Aligners ₹60K-1.5L</li>
<li><strong>Visibility:</strong> Braces visible vs. Aligners nearly invisible</li>
<li><strong>Comfort:</strong> Braces moderate vs. Aligners high</li>
<li><strong>Treatment time:</strong> Both similar (12-24 months)</li>
<li><strong>Effectiveness:</strong> Braces for complex cases vs. Aligners for mild-moderate</li>
<li><strong>Maintenance:</strong> Braces need careful cleaning vs. Aligners easy (removable)</li>
</ul>

<h2>Which One Is Right for You?</h2>
<p><strong>Choose metal braces if:</strong></p>
<ul>
<li>You have complex alignment issues</li>
<li>Budget is a primary concern</li>
<li>You prefer a "set it and forget it" approach</li>
</ul>
<p><strong>Choose clear aligners if:</strong></p>
<ul>
<li>Appearance during treatment matters to you</li>
<li>You have mild to moderate alignment issues</li>
<li>You're disciplined about wearing them consistently</li>
</ul>

<h2>The Middle Ground: Ceramic Braces</h2>
<p>Can't decide? Ceramic braces (₹35,000 - ₹55,000) offer a middle ground — they work like metal braces but use tooth-colored brackets that are much less noticeable.</p>

<h2>Get Expert Advice</h2>
<p>The best way to decide is a professional consultation. Dr. Umamaheshwari at Kurinji Dental Centre will evaluate your teeth and recommend the most effective option for your specific case. Book your consultation today.</p>`,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
    category: "orthodontics",
    tags: ["metal braces", "clear aligners", "braces comparison", "orthodontics"],
    author: AUTHOR,
    publishedAt: "2026-03-20",
    updatedAt: "2026-03-20",
    readingTime: 7,
  },
  {
    slug: "dental-care-during-pregnancy",
    title: "Dental Care During Pregnancy — What Every Mother Should Know",
    excerpt:
      "Pregnancy hormones can cause gum problems, and untreated dental infections can affect your baby. Learn how to maintain oral health during pregnancy.",
    content: `<p>Pregnancy brings many changes to your body — and your mouth is no exception. Hormonal shifts during pregnancy can significantly affect your oral health, making dental care more important than ever during this period.</p>

<h2>How Pregnancy Affects Your Teeth and Gums</h2>
<ul>
<li><strong>Pregnancy gingivitis</strong> — increased progesterone makes gums more sensitive to plaque, causing swelling, redness, and bleeding. Affects up to 75% of pregnant women.</li>
<li><strong>Pregnancy tumors</strong> — benign, non-cancerous growths on the gums that appear in the second trimester. They usually resolve after delivery.</li>
<li><strong>Increased cavity risk</strong> — morning sickness exposes teeth to stomach acid; cravings may lead to increased sugar intake.</li>
<li><strong>Enamel erosion</strong> — frequent vomiting during the first trimester can erode tooth enamel.</li>
</ul>

<h2>Is Dental Treatment Safe During Pregnancy?</h2>
<p><strong>Yes!</strong> Routine dental care is not only safe but recommended during pregnancy. In fact, untreated dental infections can pose risks to both mother and baby.</p>
<ul>
<li><strong>First trimester:</strong> Routine check-ups and cleanings are safe. Elective procedures are usually postponed.</li>
<li><strong>Second trimester:</strong> The ideal time for dental treatments — fillings, root canals, and extractions can all be performed safely.</li>
<li><strong>Third trimester:</strong> Short appointments only, as lying on your back for extended periods can be uncomfortable.</li>
</ul>
<p>Local anesthesia (lidocaine) is safe during pregnancy. Dental X-rays can be taken with proper shielding if necessary.</p>

<h2>Tips for Oral Health During Pregnancy</h2>
<ol>
<li><strong>Don't skip dental visits</strong> — schedule a check-up early in pregnancy</li>
<li><strong>Brush twice daily</strong> with fluoride toothpaste</li>
<li><strong>After vomiting</strong>, rinse with a baking soda solution (1 teaspoon in a glass of water) instead of brushing immediately</li>
<li><strong>Eat balanced meals</strong> — your baby's teeth start forming at 6 weeks of pregnancy</li>
<li><strong>Limit sugary snacks</strong> — choose cheese, nuts, and vegetables instead</li>
<li><strong>Tell your dentist</strong> you're pregnant and mention any medications you're taking</li>
</ol>

<h2>The Connection Between Gum Disease and Pregnancy Complications</h2>
<p>Research has shown that severe gum disease (periodontitis) during pregnancy is associated with:</p>
<ul>
<li>Premature birth</li>
<li>Low birth weight</li>
<li>Pre-eclampsia</li>
</ul>
<p>This is why treating gum disease during pregnancy isn't just about your teeth — it's about your baby's health too.</p>

<h2>Visit Kurinji Dental During Your Pregnancy</h2>
<p>At Kurinji Dental Centre, we provide gentle, safe dental care for expectant mothers. Dr. Umamaheshwari takes extra precautions to ensure both your comfort and safety. Schedule your prenatal dental check-up by calling 96001-23456.</p>`,
    image:
      "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=400&fit=crop",
    category: "oral-health-tips",
    tags: ["pregnancy dental care", "prenatal dentistry", "pregnancy gingivitis", "oral health"],
    author: AUTHOR,
    publishedAt: "2026-03-28",
    updatedAt: "2026-03-28",
    readingTime: 6,
  },
  {
    slug: "emergency-dental-care-tiruppur",
    title: "Emergency Dental Care in Tiruppur — What to Do When It Hurts",
    excerpt:
      "Knocked-out tooth? Severe toothache at midnight? Know what to do in a dental emergency and where to get immediate care in Tiruppur.",
    content: `<p>Dental emergencies can happen at any time — a sudden toothache during dinner, a knocked-out tooth during a cricket match, or a broken filling while eating. Knowing what to do in those critical first minutes can mean the difference between saving and losing a tooth.</p>

<h2>Common Dental Emergencies</h2>

<h3>1. Knocked-Out Tooth</h3>
<p>This is a true emergency — the tooth can often be saved if you act within 30 minutes.</p>
<p><strong>What to do:</strong></p>
<ul>
<li>Pick up the tooth by the crown (white part), NOT the root</li>
<li>If dirty, gently rinse with milk or saline — do NOT scrub</li>
<li>Try to place it back in the socket gently</li>
<li>If that's not possible, keep it in milk or inside your cheek (between gum and cheek)</li>
<li>Get to us within 30 minutes</li>
</ul>

<h3>2. Severe Toothache</h3>
<p><strong>What to do:</strong></p>
<ul>
<li>Rinse with warm salt water</li>
<li>Gently floss to remove any trapped food</li>
<li>Take an over-the-counter painkiller (ibuprofen is best for dental pain)</li>
<li>Apply a cold compress to the outside of your cheek if swollen</li>
<li>Do NOT place aspirin directly on the gum — it can burn the tissue</li>
<li>Call us for an emergency appointment</li>
</ul>

<h3>3. Broken or Chipped Tooth</h3>
<p><strong>What to do:</strong></p>
<ul>
<li>Save any broken pieces</li>
<li>Rinse your mouth with warm water</li>
<li>Apply gauze to any bleeding area for 10 minutes</li>
<li>Use a cold compress to reduce swelling</li>
<li>Visit us as soon as possible</li>
</ul>

<h3>4. Lost Filling or Crown</h3>
<p><strong>What to do:</strong></p>
<ul>
<li>If a crown falls off, try to slip it back over the tooth with denture adhesive or toothpaste as temporary cement</li>
<li>For a lost filling, use sugar-free chewing gum or dental cement (available at pharmacies) to temporarily fill the cavity</li>
<li>Visit us within a day or two</li>
</ul>

<h3>5. Dental Abscess</h3>
<p>A dental abscess is a serious infection that can spread to other parts of your body. Signs include severe throbbing pain, fever, facial swelling, and a foul taste in your mouth.</p>
<p><strong>What to do:</strong></p>
<ul>
<li>This is urgent — call us immediately</li>
<li>Rinse with mild salt water to draw the infection toward the surface</li>
<li>Take OTC painkillers</li>
<li>Do NOT wait — untreated abscesses can become life-threatening</li>
</ul>

<h2>Emergency Dental Care at Kurinji Dental</h2>
<p>At Kurinji Dental Centre, we accommodate dental emergencies during clinic hours:</p>
<ul>
<li><strong>Mon-Sat:</strong> 9:30 AM - 1:30 PM and 5:00 PM - 9:00 PM</li>
<li><strong>Sunday:</strong> 10:00 AM - 1:00 PM (by appointment)</li>
<li><strong>Walk-ins accepted</strong> for genuine emergencies</li>
</ul>

<h2>Emergency Contact</h2>
<p>For dental emergencies, call us immediately at <strong>96001-23456</strong>. If it's after hours, leave a message or WhatsApp us — we'll get back to you as soon as possible and guide you on immediate steps.</p>

<h2>Prevention Is the Best Emergency Plan</h2>
<p>While we're always here for emergencies, the best strategy is prevention: regular check-ups, wearing a mouthguard during sports, avoiding chewing ice or hard objects, and addressing small problems before they become emergencies.</p>`,
    image:
      "https://images.unsplash.com/photo-1612349316228-5942a9b489c2?w=600&h=400&fit=crop",
    category: "dental-procedures",
    tags: ["dental emergency", "toothache", "emergency dentist", "tiruppur dentist"],
    author: AUTHOR,
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-05",
    readingTime: 7,
  },
] as const;

export function getAllPosts(): readonly BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): readonly BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllCategories(): readonly CategoryInfo[] {
  const categoryLabels: Record<BlogCategory, string> = {
    "preventive-care": "Preventive Care",
    "orthodontics": "Orthodontics",
    "cosmetic-dentistry": "Cosmetic Dentistry",
    "oral-health-tips": "Oral Health Tips",
    "dental-procedures": "Dental Procedures",
    "pediatric-dentistry": "Pediatric Dentistry",
  };

  const counts = new Map<BlogCategory, number>();
  for (const post of BLOG_POSTS) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return Array.from(counts.entries()).map(([slug, count]) => ({
    slug,
    label: categoryLabels[slug],
    count,
  }));
}

export function getAllSlugs(): readonly string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
